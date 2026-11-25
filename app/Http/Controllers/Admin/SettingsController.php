<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\PageBuilder\BlockRegistry;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class SettingsController extends Controller
{
    public function index(Request $request): View
    {
        $groups = config('site-settings');
        $tab = array_key_exists($request->input('tab'), $groups) ? $request->input('tab') : array_key_first($groups);

        return view('admin.settings.index', [
            'groups' => $groups,
            'tab' => $tab,
            'values' => Setting::valuesFor($groups[$tab]['fields']),
        ]);
    }

    public function update(Request $request, BlockRegistry $registry): RedirectResponse
    {
        $groups = config('site-settings');
        $tab = $request->input('tab');
        abort_unless(array_key_exists($tab, $groups), 404);

        $fields = $groups[$tab]['fields'];
        $clean = $registry->sanitizeFields($fields, $request->input('settings', []));

        foreach ($registry->dataFields($fields) as $field) {
            $value = $clean[$field['name']] ?? null;
            $isJson = in_array($field['type'], ['repeater', 'lines'], true);

            Setting::updateOrCreate(['key' => $field['name']], [
                'value' => $isJson ? json_encode($value) : (is_bool($value) ? ($value ? '1' : '0') : $value),
                'group' => $tab,
                'type' => $isJson ? 'json' : $field['type'],
            ]);
        }

        Setting::flushCache();

        return redirect()->route('admin.settings.index', ['tab' => $tab])->with('message', $groups[$tab]['label'] . ' settings saved.');
    }
}
