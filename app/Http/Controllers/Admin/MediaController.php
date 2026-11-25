<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\View\View;

/**
 * Media library: uploads live in storage/app/public/media/Y-m. The site's
 * bundled assets in public/images are listed too (read-only) so they can be
 * picked in any image field.
 */
class MediaController extends Controller
{
    private const DISK = 'public';
    private const IMAGE_EXT = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'avif', 'svg'];
    private const VIDEO_EXT = ['mp4', 'webm', 'mov'];

    public function index(Request $request): View|JsonResponse
    {
        $uploads = $this->uploads();
        $bundled = $this->bundled();

        if ($request->input('format') === 'json' || $request->expectsJson()) {
            return response()->json(['files' => array_merge($uploads, $bundled)]);
        }

        $source = $request->input('source') === 'bundled' ? 'bundled' : 'uploads';
        $kind = $request->input('kind');
        $files = collect($source === 'bundled' ? $bundled : $uploads)
            ->when($kind, fn ($c) => $c->where('kind', $kind))
            ->when($request->filled('search'), fn ($c) => $c->filter(fn ($f) => Str::contains(Str::lower($f['name']), Str::lower($request->input('search')))))
            ->values();

        return view('admin.media.index', [
            'files' => $files,
            'source' => $source,
            'counts' => ['uploads' => count($uploads), 'bundled' => count($bundled)],
        ]);
    }

    public function store(Request $request): JsonResponse|RedirectResponse
    {
        $request->validate([
            'file' => ['required', 'file', 'mimes:jpg,jpeg,png,gif,webp,avif,svg,mp4,webm,pdf,doc,docx', 'max:20480'],
        ]);

        $file = $request->file('file');
        $folder = now()->format('Y-m');
        $original = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $name = Str::limit(Str::slug($original), 50, '') . '-' . Str::lower(Str::random(6)) . '.' . strtolower($file->getClientOriginalExtension());
        $file->storeAs('media/' . $folder, $name, self::DISK);
        $url = '/storage/media/' . $folder . '/' . $name;

        if ($request->expectsJson()) {
            return response()->json(['url' => $url, 'name' => $file->getClientOriginalName()]);
        }

        return back()->with('message', 'File uploaded.');
    }

    public function destroy(Request $request): RedirectResponse
    {
        $validated = $request->validate(['url' => ['required', 'string', 'max:1000']]);

        $path = parse_url($validated['url'], PHP_URL_PATH) ?: $validated['url'];
        $path = preg_replace('#^/storage/#', '', $path);
        abort_unless(Str::startsWith($path, 'media/'), 403, 'Only uploaded files can be deleted.');

        $realDir = realpath(storage_path('app/public/media'));
        $realFile = realpath(storage_path('app/public/' . $path));

        if ($realFile && $realDir && Str::startsWith($realFile, $realDir . DIRECTORY_SEPARATOR) && is_file($realFile)) {
            unlink($realFile);
        }

        return back()->with('message', 'File deleted.');
    }

    private function uploads(): array
    {
        $dir = storage_path('app/public/media');
        if (!is_dir($dir)) {
            @mkdir($dir, 0755, true);
        }

        $files = [];
        foreach (glob($dir . '/*/*') ?: [] as $file) {
            if (is_file($file)) {
                $files[] = $this->describe($file, '/storage/media/' . basename(dirname($file)) . '/' . basename($file), true);
            }
        }
        usort($files, fn ($a, $b) => $b['mtime'] <=> $a['mtime']);

        return $files;
    }

    private function bundled(): array
    {
        $root = public_path('images');
        if (!is_dir($root)) {
            return [];
        }

        $files = [];
        $it = new \RecursiveIteratorIterator(new \RecursiveDirectoryIterator($root, \FilesystemIterator::SKIP_DOTS));
        foreach ($it as $file) {
            if ($file->isFile()) {
                $relative = str_replace(DIRECTORY_SEPARATOR, '/', substr($file->getPathname(), strlen(public_path())));
                $files[] = $this->describe($file->getPathname(), $relative, false);
            }
        }
        usort($files, fn ($a, $b) => strcmp($a['url'], $b['url']));

        return $files;
    }

    private function describe(string $path, string $url, bool $deletable): array
    {
        $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));

        return [
            'name' => basename($path),
            'url' => $url,
            'ext' => strtoupper($ext),
            'kind' => in_array($ext, self::IMAGE_EXT) ? 'image' : (in_array($ext, self::VIDEO_EXT) ? 'video' : 'file'),
            'size' => filesize($path),
            'mtime' => filemtime($path),
            'deletable' => $deletable,
        ];
    }
}
