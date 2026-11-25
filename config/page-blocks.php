<?php

/*
|--------------------------------------------------------------------------
| Page Builder — block (section) library
|--------------------------------------------------------------------------
|
| Every page on the public site is a stack of sections. Each section has a
| `type` that points at one of the blocks below. A block declares:
|
|   label        Name shown in the admin "Add section" library
|   category     Groups blocks in the library
|   description  One-liner shown in the library
|   icon         Admin icon name (see resources/views/components/admin/icon.blade.php)
|   fields       The editable fields. Every word / image on the section is a field.
|
| Field keys:
|   name, label, type, default, help, placeholder, width (full|half),
|   options (select), fields + item_label (repeater)
|
| Field types:
|   text, textarea, richtext, image, file, link, number, toggle, select,
|   icon, lines (one item per line -> array), repeater, heading (admin-only divider)
|
| The React component for each block lives in resources/js/blocks/<type>.tsx
| and receives the saved `data` as props.
|
*/

$colorOptions = [
    'text-accent' => 'Green (accent)',
    'text-primary' => 'Blue (primary)',
    'text-accent-foreground' => 'Yellow (accent foreground)',
    'text-white' => 'White',
];

// Fields shared by both form blocks (form_section + contact_split)
$formFields = [
    ['type' => 'heading', 'label' => 'Form'],
    ['name' => 'form_type', 'label' => 'Save submissions as', 'type' => 'select', 'default' => 'contact', 'width' => 'half',
        'options' => ['contact' => 'Contact', 'enquiry' => 'Enquiry', 'career' => 'Career application', 'newsletter' => 'Newsletter', 'other' => 'Other'],
        'help' => 'Submissions appear in Admin → Submissions under this type.'],
    ['name' => 'submit_text', 'label' => 'Submit button text', 'type' => 'text', 'default' => 'Send Message', 'width' => 'half'],
    ['name' => 'sending_text', 'label' => 'Button text while sending', 'type' => 'text', 'default' => 'Sending…', 'width' => 'half'],
    ['name' => 'success_message', 'label' => 'Success message', 'type' => 'text', 'default' => 'Thanks for reaching out. Our team will get back to you soon!', 'width' => 'half'],
    ['name' => 'error_message', 'label' => 'Generic error message', 'type' => 'text', 'default' => 'Something went wrong. Please try again.'],
    ['name' => 'fields', 'label' => 'Form fields', 'type' => 'repeater', 'item_label' => 'label',
        'help' => 'Use the names name, email, phone, message, company, role to map onto the standard submission columns. Any other name is stored as extra data.',
        'fields' => [
            ['name' => 'label', 'label' => 'Label', 'type' => 'text', 'width' => 'half'],
            ['name' => 'name', 'label' => 'Field key', 'type' => 'text', 'width' => 'half', 'placeholder' => 'e.g. email'],
            ['name' => 'type', 'label' => 'Input type', 'type' => 'select', 'width' => 'half', 'default' => 'text',
                'options' => ['text' => 'Text', 'email' => 'Email', 'tel' => 'Phone', 'number' => 'Number', 'textarea' => 'Multi-line text', 'select' => 'Dropdown', 'file' => 'File upload (PDF/DOC)']],
            ['name' => 'width', 'label' => 'Width', 'type' => 'select', 'width' => 'half', 'default' => 'full',
                'options' => ['full' => 'Full width', 'half' => 'Half width']],
            ['name' => 'placeholder', 'label' => 'Placeholder', 'type' => 'text', 'width' => 'half'],
            ['name' => 'required', 'label' => 'Required', 'type' => 'toggle', 'width' => 'half'],
            ['name' => 'options', 'label' => 'Dropdown options (one per line)', 'type' => 'lines',
                'help' => 'Only used for Dropdown fields.'],
        ],
    ],
    ['name' => 'upload_text', 'label' => 'File upload prompt', 'type' => 'text', 'default' => 'Click to upload or drag & drop', 'width' => 'half'],
    ['name' => 'upload_hint', 'label' => 'File upload hint', 'type' => 'text', 'default' => 'PDF, DOCX, or DOC (Max. 5MB)', 'width' => 'half'],
];

return [

    'categories' => [
        'hero' => 'Hero & Banners',
        'content' => 'Content',
        'cards' => 'Cards & Grids',
        'dynamic' => 'Dynamic (from modules)',
        'forms' => 'Forms & Contact',
        'layout' => 'Layout',
    ],

    'blocks' => [

        /* ───────────────────────────── Hero & Banners ───────────────────────────── */

        'hero_slider' => [
            'label' => 'Hero Slider',
            'category' => 'hero',
            'icon' => 'images',
            'description' => 'Full-width image carousel with headline, highlighted word, text and button.',
            'fields' => [
                ['name' => 'slides', 'label' => 'Slides', 'type' => 'repeater', 'item_label' => 'title', 'fields' => [
                    ['name' => 'title', 'label' => 'Headline', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'highlight', 'label' => 'Highlighted word(s)', 'type' => 'text', 'width' => 'half', 'help' => 'Must appear inside the headline.'],
                    ['name' => 'highlight_color', 'label' => 'Highlight colour', 'type' => 'select', 'options' => $colorOptions, 'default' => 'text-accent', 'width' => 'half'],
                    ['name' => 'image', 'label' => 'Background image', 'type' => 'image', 'width' => 'half'],
                    ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                    ['name' => 'button_text', 'label' => 'Button text', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'button_link', 'label' => 'Button link', 'type' => 'link', 'width' => 'half'],
                ]],
                ['name' => 'tagline', 'label' => 'Tagline (first part)', 'type' => 'text', 'default' => 'Others talk about it.', 'width' => 'half'],
                ['name' => 'tagline_highlight', 'label' => 'Tagline (highlighted part)', 'type' => 'text', 'default' => 'We build it.', 'width' => 'half'],
                ['name' => 'autoplay_seconds', 'label' => 'Seconds per slide', 'type' => 'number', 'default' => 4, 'width' => 'half'],
            ],
        ],

        'video_hero' => [
            'label' => 'Video Hero',
            'category' => 'hero',
            'icon' => 'video',
            'description' => 'Full-width background video with a big headline at the bottom.',
            'fields' => [
                ['name' => 'video', 'label' => 'Background video (mp4)', 'type' => 'file', 'default' => '/images/power-5-b.mp4'],
                ['name' => 'heading', 'label' => 'Headline', 'type' => 'textarea', 'help' => 'Press Enter for a line break.', 'default' => "Powering India's Green Transition"],
                ['name' => 'text', 'label' => 'Text', 'type' => 'textarea'],
                ['name' => 'button_text', 'label' => 'Button text', 'type' => 'text', 'width' => 'half'],
                ['name' => 'button_link', 'label' => 'Button link', 'type' => 'link', 'width' => 'half'],
                ['name' => 'height', 'label' => 'Height', 'type' => 'select', 'default' => 'tall', 'options' => ['tall' => 'Tall', 'medium' => 'Medium'], 'width' => 'half'],
            ],
        ],

        'page_banner' => [
            'label' => 'Page Banner',
            'category' => 'hero',
            'icon' => 'panel-top',
            'description' => 'Image banner with the page title, used at the top of inner pages.',
            'fields' => [
                ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'default' => 'Page title'],
                ['name' => 'subtitle', 'label' => 'Subtitle', 'type' => 'textarea'],
                ['name' => 'image', 'label' => 'Background image', 'type' => 'image', 'default' => '/images/sustain-3.webp'],
            ],
        ],

        /* ───────────────────────────── Content ───────────────────────────── */

        'media_text' => [
            'label' => 'Image + Text',
            'category' => 'content',
            'icon' => 'layout-split',
            'description' => 'Image beside a heading, paragraphs, optional feature list, badges and button.',
            'fields' => [
                ['name' => 'layout', 'label' => 'Layout style', 'type' => 'select', 'default' => 'feature', 'width' => 'half', 'options' => [
                    'feature' => 'Feature — equal columns, rounded image',
                    'stacked' => 'Stacked images — large image + overlapping small image',
                    'about' => 'About — narrower image, feature cards under text',
                    'badges' => 'Badges — image with floating stat badges',
                ]],
                ['name' => 'image_position', 'label' => 'Image position', 'type' => 'select', 'default' => 'left', 'width' => 'half', 'options' => ['left' => 'Left', 'right' => 'Right']],
                ['name' => 'label', 'label' => 'Small label above heading', 'type' => 'text', 'width' => 'half'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'width' => 'half', 'default' => 'Section heading'],
                ['name' => 'lead', 'label' => 'Lead line (bold intro)', 'type' => 'text'],
                ['name' => 'body', 'label' => 'Body text', 'type' => 'richtext'],
                ['name' => 'button_text', 'label' => 'Button text', 'type' => 'text', 'width' => 'half'],
                ['name' => 'button_link', 'label' => 'Button link', 'type' => 'link', 'width' => 'half'],
                ['name' => 'image', 'label' => 'Main image', 'type' => 'image', 'width' => 'half', 'default' => '/images/sustain-3.webp'],
                ['name' => 'image_secondary', 'label' => 'Secondary image (stacked layout)', 'type' => 'image', 'width' => 'half'],
                ['name' => 'image_alt', 'label' => 'Image alt text', 'type' => 'text'],
                ['name' => 'features_style', 'label' => 'Feature list style', 'type' => 'select', 'default' => 'cards', 'width' => 'half', 'options' => ['cards' => 'Icon cards', 'checklist' => 'Check list']],
                ['name' => 'features', 'label' => 'Feature list', 'type' => 'repeater', 'item_label' => 'label', 'fields' => [
                    ['name' => 'icon', 'label' => 'Icon', 'type' => 'icon', 'width' => 'half'],
                    ['name' => 'label', 'label' => 'Text', 'type' => 'text', 'width' => 'half'],
                ]],
                ['name' => 'badges', 'label' => 'Floating badges (badges layout)', 'type' => 'repeater', 'item_label' => 'label', 'fields' => [
                    ['name' => 'value', 'label' => 'Value', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'label', 'label' => 'Label', 'type' => 'text', 'width' => 'half'],
                ]],
                ['name' => 'footer_body', 'label' => 'Full-width text below', 'type' => 'richtext'],
            ],
        ],

        'investor_highlight' => [
            'label' => 'Dark Highlight with Stats',
            'category' => 'content',
            'icon' => 'sparkles',
            'description' => 'Dark animated-grid section with label, title, copy, stats and a logo card.',
            'fields' => [
                ['name' => 'label', 'label' => 'Small label', 'type' => 'text', 'width' => 'half'],
                ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                ['name' => 'subtitle', 'label' => 'Subtitle', 'type' => 'text'],
                ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                ['name' => 'image', 'label' => 'Logo / image', 'type' => 'image'],
                ['name' => 'stats', 'label' => 'Stats', 'type' => 'repeater', 'item_label' => 'label', 'fields' => [
                    ['name' => 'value', 'label' => 'Value', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'label', 'label' => 'Label', 'type' => 'text', 'width' => 'half'],
                ]],
            ],
        ],

        'logo_intro' => [
            'label' => 'Text + Logo Frame',
            'category' => 'content',
            'icon' => 'badge',
            'description' => 'Heading, lead and rich text beside a framed logo.',
            'fields' => [
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text'],
                ['name' => 'lead', 'label' => 'Lead line', 'type' => 'textarea'],
                ['name' => 'body', 'label' => 'Body', 'type' => 'richtext'],
                ['name' => 'image', 'label' => 'Logo', 'type' => 'image'],
            ],
        ],

        'detail_intro' => [
            'label' => 'Detail Page Intro',
            'category' => 'content',
            'icon' => 'file-text',
            'description' => 'Eyebrow, large title, description, wide image, body text and feature tags.',
            'fields' => [
                ['name' => 'subtitle', 'label' => 'Eyebrow text', 'type' => 'text', 'width' => 'half'],
                ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                ['name' => 'image', 'label' => 'Wide image', 'type' => 'image'],
                ['name' => 'section_heading', 'label' => 'Body heading', 'type' => 'text'],
                ['name' => 'body', 'label' => 'Body', 'type' => 'richtext'],
                ['name' => 'features', 'label' => 'Feature tags (one per line)', 'type' => 'lines'],
            ],
        ],

        'rich_text' => [
            'label' => 'Rich Text',
            'category' => 'content',
            'icon' => 'type',
            'description' => 'Free-form formatted text — headings, lists, links. Ideal for policies.',
            'fields' => [
                ['name' => 'body', 'label' => 'Content', 'type' => 'richtext'],
                ['name' => 'width', 'label' => 'Width', 'type' => 'select', 'default' => 'normal', 'width' => 'half', 'options' => ['narrow' => 'Narrow', 'normal' => 'Normal', 'wide' => 'Wide']],
            ],
        ],

        'section_heading' => [
            'label' => 'Section Heading',
            'category' => 'content',
            'icon' => 'heading',
            'description' => 'Label, heading and intro paragraph.',
            'fields' => [
                ['name' => 'label', 'label' => 'Small label', 'type' => 'text', 'width' => 'half'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'width' => 'half', 'default' => 'Section heading'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'richtext'],
                ['name' => 'align', 'label' => 'Alignment', 'type' => 'select', 'default' => 'center', 'width' => 'half', 'options' => ['center' => 'Center', 'left' => 'Left']],
            ],
        ],

        'timeline' => [
            'label' => 'Timeline',
            'category' => 'content',
            'icon' => 'milestone',
            'description' => 'Alternating year-by-year milestones with images.',
            'fields' => [
                ['name' => 'items', 'label' => 'Milestones', 'type' => 'repeater', 'item_label' => 'year', 'fields' => [
                    ['name' => 'year', 'label' => 'Year', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                    ['name' => 'image', 'label' => 'Image', 'type' => 'image'],
                ]],
            ],
        ],

        /* ───────────────────────────── Cards & Grids ───────────────────────────── */

        'pillars_grid' => [
            'label' => 'Image Cards (Pillars)',
            'category' => 'cards',
            'icon' => 'layout-grid',
            'description' => 'Large linked image cards with title, eyebrow and description.',
            'fields' => [
                ['name' => 'label', 'label' => 'Small label', 'type' => 'text', 'width' => 'half'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'width' => 'half'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'richtext'],
                ['name' => 'arrow_style', 'label' => 'Arrow badge colour', 'type' => 'select', 'default' => 'dark', 'width' => 'half', 'options' => ['dark' => 'Black', 'accent' => 'Yellow']],
                ['name' => 'columns', 'label' => 'Columns', 'type' => 'select', 'default' => '2', 'width' => 'half', 'options' => ['2' => '2', '3' => '3']],
                ['name' => 'items', 'label' => 'Cards', 'type' => 'repeater', 'item_label' => 'title', 'fields' => [
                    ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'subtitle', 'label' => 'Eyebrow', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                    ['name' => 'image', 'label' => 'Image', 'type' => 'image', 'width' => 'half'],
                    ['name' => 'link', 'label' => 'Link', 'type' => 'link', 'width' => 'half'],
                ]],
            ],
        ],

        'process_steps' => [
            'label' => 'Process Steps',
            'category' => 'cards',
            'icon' => 'list-ordered',
            'description' => 'Numbered steps with arched images (Our Approach).',
            'fields' => [
                ['name' => 'label', 'label' => 'Small label', 'type' => 'text', 'width' => 'half'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'width' => 'half'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'textarea'],
                ['name' => 'steps', 'label' => 'Steps', 'type' => 'repeater', 'item_label' => 'title', 'fields' => [
                    ['name' => 'number', 'label' => 'Number', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                    ['name' => 'image', 'label' => 'Image', 'type' => 'image'],
                ]],
            ],
        ],

        'vision_mission' => [
            'label' => 'Vision & Mission Cards',
            'category' => 'cards',
            'icon' => 'target',
            'description' => 'Heading with two (or more) large statement cards.',
            'fields' => [
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'textarea'],
                ['name' => 'cards', 'label' => 'Cards', 'type' => 'repeater', 'item_label' => 'title', 'fields' => [
                    ['name' => 'icon', 'label' => 'Icon image', 'type' => 'image', 'width' => 'half'],
                    ['name' => 'label', 'label' => 'Small label', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'title', 'label' => 'Title', 'type' => 'text'],
                    ['name' => 'text', 'label' => 'Text', 'type' => 'richtext'],
                ]],
            ],
        ],

        'values_cards' => [
            'label' => 'Value Cards',
            'category' => 'cards',
            'icon' => 'gem',
            'description' => 'Row of compact icon cards that turn blue on hover.',
            'fields' => [
                ['name' => 'label', 'label' => 'Small label', 'type' => 'text', 'width' => 'half'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'width' => 'half'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'text'],
                ['name' => 'background', 'label' => 'Background', 'type' => 'select', 'default' => 'gray', 'width' => 'half', 'options' => ['gray' => 'Light grey section, white cards', 'white' => 'White section, grey cards']],
                ['name' => 'link_text', 'label' => 'Card link text', 'type' => 'text', 'width' => 'half', 'help' => 'Leave empty for no link.'],
                ['name' => 'link_url', 'label' => 'Card link URL', 'type' => 'link', 'width' => 'half'],
                ['name' => 'items', 'label' => 'Cards', 'type' => 'repeater', 'item_label' => 'title', 'fields' => [
                    ['name' => 'icon', 'label' => 'Icon image', 'type' => 'image', 'width' => 'half'],
                    ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'text', 'label' => 'Text', 'type' => 'textarea'],
                ]],
            ],
        ],

        'values_detailed' => [
            'label' => 'Detailed Value Cards',
            'category' => 'cards',
            'icon' => 'badge-check',
            'description' => 'Large cards with description and an "In practice" checklist.',
            'fields' => [
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'richtext'],
                ['name' => 'practice_heading', 'label' => 'Checklist heading', 'type' => 'text', 'default' => 'In Practice'],
                ['name' => 'items', 'label' => 'Values', 'type' => 'repeater', 'item_label' => 'title', 'fields' => [
                    ['name' => 'icon', 'label' => 'Icon image', 'type' => 'image', 'width' => 'half'],
                    ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'subtitle', 'label' => 'Subtitle', 'type' => 'text'],
                    ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                    ['name' => 'points', 'label' => 'Checklist (one per line)', 'type' => 'lines'],
                ]],
            ],
        ],

        'projects_grid' => [
            'label' => 'Project Cards',
            'category' => 'cards',
            'icon' => 'building',
            'description' => 'Grid of projects with category badge, location and link.',
            'fields' => [
                ['name' => 'label', 'label' => 'Small label', 'type' => 'text', 'width' => 'half'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'width' => 'half'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'richtext'],
                ['name' => 'link_text', 'label' => 'Card link text', 'type' => 'text', 'default' => 'View Project', 'width' => 'half'],
                ['name' => 'items', 'label' => 'Projects', 'type' => 'repeater', 'item_label' => 'title', 'fields' => [
                    ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'category', 'label' => 'Category badge', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                    ['name' => 'location', 'label' => 'Location', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'link', 'label' => 'Link', 'type' => 'link', 'width' => 'half'],
                    ['name' => 'image', 'label' => 'Image', 'type' => 'image'],
                ]],
            ],
        ],

        'stats_band' => [
            'label' => 'Stats',
            'category' => 'cards',
            'icon' => 'bar-chart',
            'description' => 'Animated number counters.',
            'fields' => [
                ['name' => 'style', 'label' => 'Style', 'type' => 'select', 'default' => 'band', 'width' => 'half', 'options' => ['band' => 'Band (alternating blue / grey tiles)', 'pills' => 'Pills (green tint)', 'boxed' => 'Boxed (white / grey card)']],
                ['name' => 'items', 'label' => 'Stats', 'type' => 'repeater', 'item_label' => 'label', 'fields' => [
                    ['name' => 'prefix', 'label' => 'Prefix', 'type' => 'text', 'width' => 'half', 'placeholder' => '$'],
                    ['name' => 'value', 'label' => 'Number', 'type' => 'number', 'width' => 'half'],
                    ['name' => 'suffix', 'label' => 'Suffix', 'type' => 'text', 'width' => 'half', 'placeholder' => '+'],
                    ['name' => 'label', 'label' => 'Label', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'icon', 'label' => 'Icon (pills style)', 'type' => 'icon', 'width' => 'half', 'default' => 'zap'],
                    ['name' => 'animate', 'label' => 'Animate counting', 'type' => 'toggle', 'default' => true],
                ]],
            ],
        ],

        'logo_cards' => [
            'label' => 'Logo Cards',
            'category' => 'cards',
            'icon' => 'briefcase',
            'description' => 'Cards with a logo, name and description; any card can be highlighted.',
            'fields' => [
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'textarea'],
                ['name' => 'items', 'label' => 'Cards', 'type' => 'repeater', 'item_label' => 'name', 'fields' => [
                    ['name' => 'logo', 'label' => 'Logo', 'type' => 'image', 'width' => 'half'],
                    ['name' => 'name', 'label' => 'Name', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'description', 'label' => 'Description', 'type' => 'textarea'],
                    ['name' => 'highlight', 'label' => 'Highlight this card', 'type' => 'toggle'],
                ]],
            ],
        ],

        'logo_wall' => [
            'label' => 'Text + Logo Wall',
            'category' => 'cards',
            'icon' => 'grid',
            'description' => 'Copy on the left, a grid of partner / client logos on the right.',
            'fields' => [
                ['name' => 'label', 'label' => 'Small label', 'type' => 'text', 'width' => 'half'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'textarea', 'width' => 'half', 'help' => 'Press Enter for a line break.'],
                ['name' => 'body', 'label' => 'Body', 'type' => 'richtext'],
                ['name' => 'logos', 'label' => 'Logos', 'type' => 'repeater', 'item_label' => 'name', 'fields' => [
                    ['name' => 'name', 'label' => 'Name', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'image', 'label' => 'Logo', 'type' => 'image', 'width' => 'half'],
                ]],
            ],
        ],

        'certificates_grid' => [
            'label' => 'Certificates',
            'category' => 'cards',
            'icon' => 'award',
            'description' => 'Certificate thumbnails with a preview pop-up (image or PDF).',
            'fields' => [
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'richtext'],
                ['name' => 'preview_text', 'label' => 'Preview button text', 'type' => 'text', 'default' => 'Preview', 'width' => 'half'],
                ['name' => 'items', 'label' => 'Certificates', 'type' => 'repeater', 'item_label' => 'title', 'fields' => [
                    ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'category', 'label' => 'Category', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'image', 'label' => 'Thumbnail', 'type' => 'image', 'width' => 'half'],
                    ['name' => 'file', 'label' => 'PDF (optional)', 'type' => 'file', 'width' => 'half'],
                    ['name' => 'issued_year', 'label' => 'Year', 'type' => 'text', 'width' => 'half'],
                ]],
            ],
        ],

        'image_cards' => [
            'label' => 'Image cards',
            'category' => 'cards',
            'description' => 'Large image cards with an overlapping caption box and button (e.g. Sustainability / CSR).',
            'icon' => 'layout-grid',
            'fields' => [
                ['name' => 'label', 'label' => 'Small label', 'type' => 'text', 'width' => 'half'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'width' => 'half'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'textarea'],
                ['name' => 'items', 'label' => 'Cards', 'type' => 'repeater', 'item_label' => 'title', 'fields' => [
                    ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'image', 'label' => 'Image', 'type' => 'image', 'width' => 'half'],
                    ['name' => 'text', 'label' => 'Text', 'type' => 'textarea'],
                    ['name' => 'button_text', 'label' => 'Button text', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'button_link', 'label' => 'Button link', 'type' => 'link', 'width' => 'half'],
                ]],
            ],
        ],

        'image_mosaic' => [
            'label' => 'Image Mosaic',
            'category' => 'cards',
            'icon' => 'layout-dashboard',
            'description' => 'Heading with a bento grid of image cards revealing text on hover.',
            'fields' => [
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'richtext'],
                ['name' => 'cards', 'label' => 'Cards', 'type' => 'repeater', 'item_label' => 'title', 'fields' => [
                    ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'image', 'label' => 'Image', 'type' => 'image', 'width' => 'half'],
                    ['name' => 'text', 'label' => 'Hover text', 'type' => 'textarea'],
                ]],
            ],
        ],

        'jobs_list' => [
            'label' => 'Job Openings',
            'category' => 'cards',
            'icon' => 'briefcase',
            'description' => 'Job cards with a details pop-up and "Apply" that pre-fills the application form.',
            'fields' => [
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'richtext'],
                ['name' => 'jobs', 'label' => 'Jobs', 'type' => 'repeater', 'item_label' => 'title', 'fields' => [
                    ['name' => 'title', 'label' => 'Job title', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'department', 'label' => 'Department', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'location', 'label' => 'Location', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'type', 'label' => 'Employment type', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'experience', 'label' => 'Experience', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'summary', 'label' => 'Card summary', 'type' => 'textarea'],
                    ['name' => 'overview', 'label' => 'Role overview (pop-up)', 'type' => 'textarea'],
                    ['name' => 'responsibilities', 'label' => 'Responsibilities (one per line)', 'type' => 'lines'],
                    ['name' => 'requirements', 'label' => 'Requirements (one per line)', 'type' => 'lines'],
                ]],
                ['type' => 'heading', 'label' => 'Labels'],
                ['name' => 'view_details_text', 'label' => '"View details" text', 'type' => 'text', 'default' => 'View details', 'width' => 'half'],
                ['name' => 'apply_text', 'label' => '"Apply" text', 'type' => 'text', 'default' => 'Apply Now', 'width' => 'half'],
                ['name' => 'overview_heading', 'label' => 'Pop-up: overview heading', 'type' => 'text', 'default' => 'Role Overview', 'width' => 'half'],
                ['name' => 'responsibilities_heading', 'label' => 'Pop-up: responsibilities heading', 'type' => 'text', 'default' => 'Key Responsibilities', 'width' => 'half'],
                ['name' => 'requirements_heading', 'label' => 'Pop-up: requirements heading', 'type' => 'text', 'default' => 'Candidate Requirements', 'width' => 'half'],
                ['name' => 'close_text', 'label' => 'Pop-up: close text', 'type' => 'text', 'default' => 'Close', 'width' => 'half'],
                ['name' => 'apply_role_text', 'label' => 'Pop-up: apply text', 'type' => 'text', 'default' => 'Apply For This Role', 'width' => 'half'],
                ['name' => 'form_anchor', 'label' => 'Application form anchor', 'type' => 'text', 'default' => 'apply-form', 'width' => 'half', 'help' => 'Anchor of the form section to scroll to.'],
                ['name' => 'form_field', 'label' => 'Form field to pre-fill', 'type' => 'text', 'default' => 'role', 'width' => 'half'],
            ],
        ],

        /* ───────────────────────────── Dynamic ───────────────────────────── */

        'team_grid' => [
            'label' => 'Team Members',
            'category' => 'dynamic',
            'icon' => 'users',
            'description' => 'Profiles pulled from Admin → Team, with a "Read more" pop-up.',
            'fields' => [
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'textarea'],
                ['name' => 'group', 'label' => 'Which members', 'type' => 'select', 'default' => 'board', 'width' => 'half', 'options' => ['board' => 'Board / CXOs', 'leadership' => 'Senior leadership', 'all' => 'Everyone']],
                ['name' => 'read_more_text', 'label' => '"Read more" text', 'type' => 'text', 'default' => 'Read more', 'width' => 'half'],
                ['name' => 'quote', 'label' => 'Closing quote', 'type' => 'text'],
            ],
        ],

        'posts_grid' => [
            'label' => 'Blog / News Posts',
            'category' => 'dynamic',
            'icon' => 'newspaper',
            'description' => 'Posts pulled from Admin → Blogs & News.',
            'fields' => [
                ['name' => 'style', 'label' => 'Style', 'type' => 'select', 'default' => 'list', 'width' => 'half', 'options' => ['list' => 'Listing grid', 'cards' => 'Cards with section header']],
                ['name' => 'post_type', 'label' => 'Post type', 'type' => 'select', 'default' => 'all', 'width' => 'half', 'options' => ['all' => 'All', 'blog' => 'Blogs', 'news' => 'News', 'press-release' => 'Press releases']],
                ['name' => 'limit', 'label' => 'Max posts (0 = all)', 'type' => 'number', 'default' => 0, 'width' => 'half'],
                ['name' => 'read_more_text', 'label' => '"Read more" text', 'type' => 'text', 'default' => 'Read More', 'width' => 'half'],
                ['name' => 'label', 'label' => 'Header: small label', 'type' => 'text', 'width' => 'half'],
                ['name' => 'heading', 'label' => 'Header: heading', 'type' => 'text', 'width' => 'half'],
                ['name' => 'button_text', 'label' => 'Header: button text', 'type' => 'text', 'width' => 'half'],
                ['name' => 'button_link', 'label' => 'Header: button link', 'type' => 'link', 'width' => 'half'],
                ['name' => 'empty_text', 'label' => 'Text when there are no posts', 'type' => 'text', 'default' => 'No posts yet — check back soon.'],
            ],
        ],

        'events_list' => [
            'label' => 'Events',
            'category' => 'dynamic',
            'icon' => 'calendar',
            'description' => 'Events pulled from Admin → Events.',
            'fields' => [
                ['name' => 'button_text', 'label' => 'Button text', 'type' => 'text', 'default' => 'Coming Soon', 'width' => 'half'],
                ['name' => 'button_link', 'label' => 'Button link', 'type' => 'link', 'default' => '#', 'width' => 'half'],
                ['name' => 'empty_text', 'label' => 'Text when there are no events', 'type' => 'text', 'default' => 'No upcoming events right now.'],
            ],
        ],

        /* ───────────────────────────── Forms & Contact ───────────────────────────── */

        'form_section' => [
            'label' => 'Form',
            'category' => 'forms',
            'icon' => 'form',
            'description' => 'Heading + a fully configurable form (contact, enquiry, career…).',
            'fields' => array_merge([
                ['name' => 'label', 'label' => 'Small label', 'type' => 'text', 'width' => 'half'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'width' => 'half', 'default' => 'Get in touch'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'richtext'],
                ['name' => 'background', 'label' => 'Background', 'type' => 'select', 'default' => 'white', 'width' => 'half', 'options' => ['white' => 'White', 'gray' => 'Light grey']],
                ['name' => 'label_style', 'label' => 'Field labels', 'type' => 'select', 'default' => 'above', 'width' => 'half', 'options' => ['above' => 'Show labels above fields', 'hidden' => 'Placeholders only']],
            ], $formFields),
        ],

        'contact_split' => [
            'label' => 'Contact Details + Form',
            'category' => 'forms',
            'icon' => 'mail',
            'description' => 'Contact info and partner cards on the left, a form card on the right.',
            'fields' => array_merge([
                ['name' => 'label', 'label' => 'Small label', 'type' => 'text', 'width' => 'half'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'width' => 'half'],
                ['name' => 'intro', 'label' => 'Intro', 'type' => 'richtext'],
                ['name' => 'side_image', 'label' => 'Decorative right-side background', 'type' => 'image'],
                ['name' => 'contacts', 'label' => 'Contact rows', 'type' => 'repeater', 'item_label' => 'title',
                    'help' => 'Leave a value empty to use the matching value from Settings (contact_email / contact_phone / contact_address).',
                    'fields' => [
                        ['name' => 'icon', 'label' => 'Icon', 'type' => 'icon', 'width' => 'half'],
                        ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                        ['name' => 'value', 'label' => 'Value', 'type' => 'textarea'],
                        ['name' => 'setting', 'label' => 'Fallback setting', 'type' => 'select', 'width' => 'half', 'options' => ['' => '— none —', 'contact_email' => 'Contact email', 'contact_phone' => 'Contact phone', 'contact_address' => 'Contact address']],
                    ]],
                ['name' => 'features', 'label' => 'Info cards', 'type' => 'repeater', 'item_label' => 'title', 'fields' => [
                    ['name' => 'icon', 'label' => 'Icon', 'type' => 'icon', 'width' => 'half'],
                    ['name' => 'title', 'label' => 'Title', 'type' => 'text', 'width' => 'half'],
                    ['name' => 'text', 'label' => 'Text', 'type' => 'textarea'],
                ]],
                ['name' => 'form_heading', 'label' => 'Form card heading', 'type' => 'text', 'default' => 'Get in Touch', 'width' => 'half'],
                ['name' => 'form_intro', 'label' => 'Form card intro', 'type' => 'text', 'width' => 'half'],
            ], $formFields),
        ],

        'map_embed' => [
            'label' => 'Map',
            'category' => 'forms',
            'icon' => 'map',
            'description' => 'Embedded Google Map.',
            'fields' => [
                ['name' => 'url', 'label' => 'Google Maps embed URL', 'type' => 'textarea', 'help' => 'Google Maps → Share → Embed a map → copy the src="…" URL. Leave empty to use the Settings value.'],
                ['name' => 'title', 'label' => 'Accessible title', 'type' => 'text', 'default' => 'Office location map'],
            ],
        ],

        /* ───────────────────────────── Layout ───────────────────────────── */

        'video_cta' => [
            'label' => 'Video Call-to-Action',
            'category' => 'layout',
            'icon' => 'megaphone',
            'description' => 'Rounded video panel with a big heading and button.',
            'fields' => [
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'default' => 'Empowering the Future of Energy Transmission'],
                ['name' => 'text', 'label' => 'Text', 'type' => 'textarea'],
                ['name' => 'button_text', 'label' => 'Button text', 'type' => 'text', 'default' => 'Enquire Now', 'width' => 'half'],
                ['name' => 'button_link', 'label' => 'Button link', 'type' => 'link', 'default' => '/enquiry', 'width' => 'half'],
                ['name' => 'video', 'label' => 'Background video (mp4)', 'type' => 'file', 'default' => '/images/power-2.mp4', 'width' => 'half'],
                ['name' => 'image', 'label' => 'Fallback image', 'type' => 'image', 'width' => 'half'],
            ],
        ],

        'image_cta' => [
            'label' => 'Image Call-to-Action',
            'category' => 'layout',
            'icon' => 'image',
            'description' => 'Dark image panel with label, heading and a button.',
            'fields' => [
                ['name' => 'style', 'label' => 'Style', 'type' => 'select', 'default' => 'centered', 'width' => 'half', 'options' => ['centered' => 'Centered (light overlay, animated button)', 'banner' => 'Banner (dark overlay, white button)']],
                ['name' => 'label', 'label' => 'Small label', 'type' => 'text', 'width' => 'half'],
                ['name' => 'heading', 'label' => 'Heading', 'type' => 'text', 'width' => 'half'],
                ['name' => 'text', 'label' => 'Text', 'type' => 'textarea'],
                ['name' => 'button_text', 'label' => 'Button text', 'type' => 'text', 'width' => 'half'],
                ['name' => 'button_link', 'label' => 'Button link', 'type' => 'link', 'width' => 'half'],
                ['name' => 'image', 'label' => 'Background image', 'type' => 'image'],
            ],
        ],

        'spacer' => [
            'label' => 'Spacer',
            'category' => 'layout',
            'icon' => 'move-vertical',
            'description' => 'Vertical white space between sections.',
            'fields' => [
                ['name' => 'size', 'label' => 'Size', 'type' => 'select', 'default' => 'md', 'options' => ['sm' => 'Small', 'md' => 'Medium', 'lg' => 'Large']],
            ],
        ],
    ],

    /*
     | Icons available to "icon" fields (rendered with lucide-react on the site).
     */
    'icons' => [
        'zap', 'plug', 'utility-pole', 'spool', 'building-2', 'settings', 'landmark', 'globe',
        'mail', 'phone', 'map-pin', 'check-check', 'badge-check', 'shield-check', 'leaf', 'sun',
        'wind', 'droplet', 'factory', 'users', 'briefcase', 'award', 'target', 'eye', 'lightbulb',
        'handshake', 'trending-up', 'radiation', 'home', 'star', 'heart', 'clock', 'calendar-days',
        'file-text', 'battery-charging', 'cpu', 'rocket', 'database-zap',
    ],
];
