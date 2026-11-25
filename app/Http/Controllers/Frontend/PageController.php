<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Page;
use App\PageBuilder\SectionDataResolver;
use Illuminate\Http\Request;
use Inertia\Response;

/**
 * Renders every CMS page. A page is a list of sections; each section is
 * rendered on the client by resources/js/blocks/<type>.tsx.
 */
class PageController extends Controller
{
    public function __construct(private SectionDataResolver $resolver) {}

    public function home(Request $request): Response
    {
        $page = Page::where('is_home', true)->first() ?? Page::where('slug', 'home')->first();
        abort_unless($page, 404);

        return $this->render($request, $page);
    }

    public function show(Request $request, string $slug): Response
    {
        $page = Page::where('slug', trim($slug, '/'))->first();
        abort_unless($page, 404);

        return $this->render($request, $page);
    }

    public function post(string $alias): Response
    {
        $post = Blog::published()->where('alias', $alias)->firstOrFail();

        $related = Blog::published()
            ->where('type', $post->type)
            ->whereKeyNot($post->id)
            ->orderByDesc('date')
            ->limit(3)
            ->get()
            ->map->toCard();

        return inertia('post', [
            'post' => array_merge($post->toCard(), [
                'body' => $post->description,
                'typeKey' => $post->type,
            ]),
            'related' => $related,
            'meta' => [
                'title' => $post->title,
                'description' => $post->short_description,
                'image' => $post->thumbnail,
            ],
        ]);
    }

    private function render(Request $request, Page $page): Response
    {
        $canPreview = $request->user()?->hasAnyRole(['root', 'admin']) ?? false;
        abort_unless($page->isPublished() || $canPreview, 404);

        $sections = $page->sections()
            ->when(!($canPreview && $request->boolean('preview')), fn ($q) => $q->where('is_visible', true))
            ->get()
            ->map(fn ($s) => [
                'id' => $s->id,
                'type' => $s->type,
                'anchor' => $s->anchor,
                'data' => $this->resolver->resolve($s),
            ]);

        return inertia('page', [
            'page' => [
                'id' => $page->id,
                'title' => $page->title,
                'slug' => $page->slug,
                'isHome' => $page->is_home,
                'isDraft' => !$page->isPublished(),
            ],
            'sections' => $sections,
            'meta' => [
                'title' => $page->meta_title ?: $page->title,
                'description' => $page->meta_description,
                'image' => $page->meta_image,
            ],
            'editUrl' => $canPreview ? route('admin.pages.edit', $page) : null,
        ]);
    }
}
