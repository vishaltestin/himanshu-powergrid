<?php

/*
|--------------------------------------------------------------------------
| Site-wide settings (Admin → Settings)
|--------------------------------------------------------------------------
| Global words/images that appear on every page (header, footer, contact
| details…). Rendered with the same field types as page sections. Values
| are stored in the `settings` table; repeater values are stored as JSON.
*/

return [
    'general' => [
        'label' => 'General',
        'icon' => 'globe',
        'fields' => [
            ['name' => 'site_name', 'label' => 'Site name', 'type' => 'text', 'default' => 'CubeGrid Advisors', 'help' => 'Used in browser titles.'],
            ['name' => 'logo', 'label' => 'Logo (dark, for light backgrounds)', 'type' => 'image', 'default' => '/images/logo-new.png', 'width' => 'half'],
            ['name' => 'logo_white', 'label' => 'Logo (white, for dark backgrounds)', 'type' => 'image', 'default' => '/images/logo-new-white.png', 'width' => 'half'],
            ['name' => 'favicon', 'label' => 'Favicon', 'type' => 'image', 'default' => '/favicon.png', 'width' => 'half'],
            ['name' => 'default_meta_image', 'label' => 'Default share image', 'type' => 'image', 'width' => 'half'],
            ['name' => 'default_meta_description', 'label' => 'Default meta description', 'type' => 'textarea', 'rows' => 2],
        ],
    ],
    'header' => [
        'label' => 'Header',
        'icon' => 'panel-top',
        'fields' => [
            ['type' => 'heading', 'label' => 'Navigation', 'help' => 'Header links are managed under Menus → “Header navigation”.'],
            ['name' => 'search_enabled', 'label' => 'Show search button', 'type' => 'toggle', 'default' => true],
            ['name' => 'search_placeholder', 'label' => 'Search placeholder', 'type' => 'text', 'default' => 'Search Your Word Here ...'],
            ['name' => 'search_no_results', 'label' => 'Search “no results” text', 'type' => 'text', 'default' => 'No pages match your search.'],
            ['name' => 'mobile_menu_title', 'label' => 'Mobile menu title', 'type' => 'text', 'default' => 'Menu', 'width' => 'half'],
        ],
    ],
    'contact' => [
        'label' => 'Contact details',
        'icon' => 'mail',
        'fields' => [
            ['name' => 'contact_email', 'label' => 'Email', 'type' => 'email', 'default' => 'admin@cubegrid.in', 'width' => 'half'],
            ['name' => 'contact_phone', 'label' => 'Phone', 'type' => 'text', 'default' => '+91 123 4567 890', 'width' => 'half'],
            ['name' => 'contact_address', 'label' => 'Address', 'type' => 'textarea', 'rows' => 2],
            ['name' => 'map_embed_url', 'label' => 'Google Maps embed URL', 'type' => 'textarea', 'rows' => 2, 'help' => 'Google Maps → Share → Embed a map → copy the src="…" URL.'],
        ],
    ],
    'footer' => [
        'label' => 'Footer',
        'icon' => 'layout-dashboard',
        'fields' => [
            ['name' => 'footer_description', 'label' => 'About text', 'type' => 'textarea', 'rows' => 3],
            ['type' => 'heading', 'label' => 'Column titles', 'help' => 'The links under each column are managed under Menus.'],
            ['name' => 'footer_menu_1_title', 'label' => 'Link column 1 title', 'type' => 'text', 'default' => 'Quick Links', 'width' => 'half'],
            ['name' => 'footer_menu_2_title', 'label' => 'Link column 2 title', 'type' => 'text', 'default' => 'Resources', 'width' => 'half'],
            ['name' => 'footer_contact_title', 'label' => 'Contact column title', 'type' => 'text', 'default' => 'Contact Us', 'width' => 'half'],
            ['type' => 'heading', 'label' => 'Bottom bar'],
            ['name' => 'footer_copyright', 'label' => 'Copyright text', 'type' => 'text', 'default' => '© {year} CubeGrid. All rights reserved.', 'help' => '{year} is replaced with the current year.'],
            ['name' => 'footer_credit_prefix', 'label' => 'Credit prefix', 'type' => 'text', 'default' => 'Design and Developed by:', 'width' => 'half'],
            ['name' => 'footer_credit_name', 'label' => 'Credit name', 'type' => 'text', 'default' => 'DigitalFueled', 'width' => 'half'],
            ['name' => 'footer_credit_url', 'label' => 'Credit link', 'type' => 'text', 'default' => '#', 'width' => 'half'],
        ],
    ],
    'social' => [
        'label' => 'Social links',
        'icon' => 'link',
        'fields' => [
            ['name' => 'social_links', 'label' => 'Social profiles', 'type' => 'repeater', 'item_label' => 'label', 'singular' => 'Profile', 'fields' => [
                ['name' => 'key', 'label' => 'Network', 'type' => 'select', 'width' => 'half', 'options' => [
                    'facebook' => 'Facebook', 'twitter' => 'X / Twitter', 'linkedin' => 'LinkedIn', 'youtube' => 'YouTube',
                ]],
                ['name' => 'label', 'label' => 'Label (for screen readers)', 'type' => 'text', 'width' => 'half'],
                ['name' => 'url', 'label' => 'Profile URL', 'type' => 'text'],
            ]],
        ],
    ],
    'labels' => [
        'label' => 'Common labels',
        'icon' => 'type',
        'fields' => [
            ['type' => 'heading', 'label' => 'Small texts used across the site'],
            ['name' => 'label_read_more', 'label' => '“Read more” link', 'type' => 'text', 'default' => 'Read More', 'width' => 'half'],
            ['name' => 'label_back', 'label' => '“Back” link', 'type' => 'text', 'default' => 'Back', 'width' => 'half'],
            ['name' => 'label_view_profile', 'label' => 'Team “view profile”', 'type' => 'text', 'default' => 'View Profile', 'width' => 'half'],
            ['name' => 'label_close', 'label' => 'Close button', 'type' => 'text', 'default' => 'Close', 'width' => 'half'],
            ['name' => 'label_related_posts', 'label' => 'Post page “related” heading', 'type' => 'text', 'default' => 'Related Articles', 'width' => 'half'],
            ['name' => 'post_banner_image', 'label' => 'Post page banner image', 'type' => 'image', 'default' => '/images/news.jpg', 'width' => 'half'],
            ['name' => 'not_found_title', 'label' => '404 title', 'type' => 'text', 'default' => 'Page not found', 'width' => 'half'],
            ['name' => 'not_found_text', 'label' => '404 text', 'type' => 'text', 'default' => 'The page you are looking for does not exist or has been moved.', 'width' => 'half'],
            ['name' => 'not_found_button', 'label' => '404 button', 'type' => 'text', 'default' => 'Back to home', 'width' => 'half'],
        ],
    ],
];
