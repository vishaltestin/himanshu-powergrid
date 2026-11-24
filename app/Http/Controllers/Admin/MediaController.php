<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class MediaController extends Controller
{
    private const DISK = 'public';

    private function dir(): string
    {
        $path = storage_path('app/public/media');

        if (!is_dir($path)) {
            mkdir($path, 0755, true);
        }

        return $path;
    }

    public function index(): Response
    {
        $files = [];

        foreach (glob($this->dir() . '/*/*') ?: [] as $file) {
            if (!is_file($file)) {
                continue;
            }

            $relative = 'media/' . basename(dirname($file)) . '/' . basename($file);

            $files[] = [
                'name' => basename($file),
                'url' => Storage::disk(self::DISK)->url($relative),
                'size' => filesize($file),
                'modified' => date('d M Y, h:i A', filemtime($file)),
            ];
        }

        usort($files, fn ($a, $b) => strcmp($b['modified'], $a['modified']));

        return Inertia::render('admin/media/index', ['files' => $files]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => ['required', 'file', 'mimes:jpg,jpeg,png,gif,webp,avif,svg,mp4,webm,pdf', 'max:20480'],
        ]);

        $file = $request->file('file');
        $folder = now()->format('Y-m');
        $name = Str::uuid() . '.' . $file->getClientOriginalExtension();
        $file->storeAs('media/' . $folder, $name, self::DISK);

        $url = Storage::disk(self::DISK)->url('media/' . $folder . '/' . $name);

        if ($request->expectsJson()) {
            return response()->json(['url' => $url, 'name' => $file->getClientOriginalName()]);
        }

        return back()->with('message', 'File uploaded.');
    }

    public function destroy(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'url' => ['required', 'string', 'max:1000'],
        ]);

        // Accept either a full URL or a /storage-relative path
        $path = parse_url($validated['url'], PHP_URL_PATH) ?: $validated['url'];
        $path = preg_replace('#^/storage/#', '', $path);

        abort_unless(Str::startsWith($path, 'media/'), 404);

        $full = storage_path('app/public/' . $path);
        $realDir = realpath($this->dir());
        $realFile = realpath($full);

        if ($realFile && $realDir && Str::startsWith($realFile, $realDir) && is_file($realFile)) {
            unlink($realFile);
        }

        return back()->with('message', 'File deleted.');
    }
}
