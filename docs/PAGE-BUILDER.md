# CubeGrid — Admin & Page Builder

The public site is Inertia + React. The admin panel (`/admin`) is plain Laravel Blade, using Tailwind, Alpine.js, SortableJS and Quill. It contains no React.

## Getting started

```bash
composer install && npm install
cp .env.example .env && php artisan key:generate
php artisan migrate --seed       # builds every page from sections
php artisan storage:link
npm run build                    # outputs to public/site-build (committed, so the server needs no Node)
```

Default admin login: **admin@cubegrid.in / admin123**. Change it under *Admin Users* after the first login.

## How content works

Every word on the site comes from the database:

| What | Where in the admin | Storage |
|---|---|---|
| Page body content | **Pages → (page) → sections** | `pages` and `page_sections` (JSON `data`) |
| Header, footer, contact details, logos, social links, 404/search texts, button labels | **Settings** | `settings`, with the schema in `config/site-settings.php` |
| Main navigation, footer link columns, legal links | **Menus** | `menus` (`menu_position`) |
| Blogs/news, events, team | their own screens | `blogs`, `events`, `team_members` |
| Form entries (contact, enquiry, careers + CVs) | **Submissions** | `form_submissions` |

### Pages and sections

- A **page** has a title, URL (slug, nested slugs like `pillar/solar` are allowed), status (draft/published), SEO fields and an ordered stack of **sections**.
- A **section** is an instance of a **block type** with its own content. Admins can add, edit, reorder (drag), hide, duplicate, copy or move sections to another page, and delete them.
- Any page can be made the home page. Drafts can be previewed while logged in (`?preview=1`).
- Setting an *Anchor ID* on a section allows links like `/career#apply-form`.

### Block types

Block types are defined in **`config/page-blocks.php`**, the single source of truth. Each block declares its fields (`text`, `textarea`, `richtext`, `image`, `video`, `link`, `select`, `toggle`, `number`, `icon`, `repeater` with nested fields, …) and their defaults. The admin form is generated from this config, and saved data is sanitised against it (`App\PageBuilder\BlockRegistry`).

Each block type is rendered by `resources/js/blocks/<type>.tsx`.

**To add a new block type:**
1. Add an entry to `config/page-blocks.php`.
2. Create `resources/js/blocks/<type>.tsx` (receives `BlockProps` from `blocks/shared.tsx`).
3. Run `npm run build`. The block then appears in "Add section" automatically.

Blocks that list live records (team, posts, events) get their data from `App\PageBuilder\SectionDataResolver`.

### Forms

The **Form** and **Contact (split)** blocks have a field builder. Admins choose field names, types, labels, options and whether each is required. Submissions are validated against those definitions, then stored in Submissions; uploaded files go to `storage/app/public/resumes`. Submissions can be filtered, marked as read or archived, and exported to CSV.

## Re-seeding

The seeders never overwrite existing content: pages whose slug exists are skipped, and settings use `firstOrCreate`. `php artisan migrate:fresh --seed` restores the original site content.
