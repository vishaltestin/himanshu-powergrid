# CubeGrid — Step-by-Step Testing Guide

Everything below was verified working. Follow the steps in order.

---

## PART 1 — Test Right Now (server already running)

The dev server is already running (`php artisan serve --host=0.0.0.0 --port=8000`).
Open the **Preview panel** in this app (port 8000) and click through, or type the URLs.

### Step 1 — Public site smoke test (10 pages, 2 minutes)

Open each URL. All should load with styling (blue/dark corporate theme):

| # | URL | What to check |
|---|-----|---------------|
| 1 | `/` | Hero slider cycles, client logos strip, News & Updates shows 3 posts, investor dark section, footer |
| 2 | `/home-2` | Alternate homepage — video hero, navbar menus open on hover, footer links |
| 3 | `/home-3` | Third homepage variant |
| 4 | `/about-us` | Page banner + content |
| 5 | `/teams` | Board of Directors grid + Senior Leadership section |
| 6 | `/blogs` | Blog listing (4 posts) |
| 7 | `/news` | News listing |
| 8 | `/events` | Events listing (1 event) |
| 9 | `/projects` | Business pillars grid |
| 10 | `/contact-us` | Contact form + map section |

Also try: `/milestones`, `/our-values`, `/pillers`, `/investors`, `/certificates`,
`/sustainability`, `/csr`, `/privacy-policy`, `/terms-service`, `/life-at-cubegrid`,
`/pillar/energy` (any pillar detail page).

### Step 2 — Test the public forms (end-to-end)

**Contact form** (`/contact-us`):
1. Fill Name, Email, Message → Submit
2. You should see a green success toast: *"Thank you..."*
3. Try submitting with Email empty → red validation error appears (proves validation works)

**Enquiry form** (`/enquiry`):
1. Fill Name, Email, Phone, State, City, Message → Submit → success toast

**Career form** (`/career`):
1. Pick a role, fill name/email/phone
2. Attach a small **PDF** as resume → Submit
3. Success toast. (PDF/doc/docx only, max 5 MB — other files get rejected)

You'll verify all three landed in the admin inbox in Part 2.

---

## PART 2 — Admin Portal Walkthrough

### Step 1 — Login
1. Go to **`/admin`** while logged out → you get redirected to the login page (auth guard works)
2. Login with:
   - **Email:** `admin@cubegrid.in`
   - **Password:** `admin123`
3. You land on the **Dashboard** (counts: submissions, blogs, events, team members)

### Step 2 — Submissions inbox (the forms you just submitted)
1. Sidebar → **Submissions**
2. You should see your contact, enquiry, career entries with type badges
3. Filter tabs at top: All / New / Contact / Enquiry / Career (counts update)
4. Click a row → detail page opens, status auto-changes **new → read**
5. On the detail page change status to **Archived** → Save → status updates
6. Click **Export CSV** → downloads all submissions
7. Try Delete on one row (test row only!)

### Step 3 — Banners (home hero slider)
1. Sidebar → **Banners**
2. Click **New Banner** → title, small subtitle, upload an image (use any small PNG/JPG)
3. Set Status = 1, Save
4. Open `/` → your new slide appears in the hero slider
5. Go back and delete your test banner → it disappears from the homepage

### Step 4 — Page content (EVERY page, EVERY section)
1. Sidebar → **Pages** → pick any page (About Us, Our Values, Projects, Careers,
   each individual Pillar, Contact, Sustainability, CSR, Privacy/Terms, …)
2. Each page opens a **sectioned editor** — banner, intro paragraphs, vision/mission,
   feature cards, stats, timelines, hover cards, CTA bands… all editable
3. Long text uses a real **WYSIWYG rich-text editor** (Quill): headings, bold,
   lists, links — leave a field empty and the original website text stays
4. Try: About Us → *Vision text* → write something with bold → Save → open `/about-us`
5. Try: Pillars → edit a card → open `/pillers`; or edit *Pillar — Green Hydrogen* → `/pillar/green-hydrogen`
6. Try: Careers → edit the demo roles (or add your own) → `/career`
7. Milestones → edit the timeline rows → `/milestones`

### Step 5 — Team members
1. Sidebar → **Team** → add/edit a member (name, designation, image, group = board or leadership)
2. Save → check `/teams` reflects it

### Step 6 — Blogs & News
1. Sidebar → **Blogs** → create a post (title, slug, type = `news` or `press-release`, date, image, order)
2. Open `/blogs` → your post is listed
3. Homepage News & Updates (`/`) shows the 3 posts with **lowest order number** — set your post's order to 1 and see it appear there

### Step 7 — Events
1. Sidebar → **Events** → create one → check `/events`

### Step 8 — Menus (drives ALL navbars: main site + home-2 + home-3)
1. Sidebar → **Menus** → rename e.g. "Projects" to "Our Projects"
2. Open `/` **and** `/home-2` → both navbars show the new name
3. Add a child item under any parent → it appears in that parent's dropdown/mega-menu
4. Revert the name afterwards if you like

### Step 9 — Settings (footer, logos, investor section, contacts)
Sidebar → **Settings** — everything is form-based, **no JSON/markup anywhere**:
- **Footer link columns** → friendly editors: column title + add/remove/reorder links
- **Social links** → add Facebook / LinkedIn / YouTube rows with URLs
- **Investor section** → heading, description, image and stat rows as normal fields
- Logo, footer description, contact email/phone/address → plain fields

Then open `/` or `/home-2` footer to confirm.

### Step 10 — Media library
1. Sidebar → **Media** → upload a PNG/JPG
2. It returns a URL like `/media/2026-11/xxxx.png` — that's what ImageFields insert

### Step 11 — Security checks
1. Click **Logout** → back at `/admin/login`
2. Try opening `/admin/banners` directly → redirected to login ✔
3. Login again

---

## PART 3 — Quick automated check (optional)

```bash
# All public pages should print 200
for p in / /home-2 /home-3 /about-us /teams /blogs /news /events /milestones \
  /projects /contact-us /enquiry /career /our-values /pillers /investors \
  /certificates /sustainability /csr /privacy-policy /terms-service \
  /life-at-cubegrid /pillar/energy; do
  echo "$p -> $(curl -s -o /dev/null -w '%{http_code}' http://localhost:8000$p)"
done
```

---

## PART 4 — Full Setup From Scratch (fresh machine / sandbox reset)

Dependencies (PHP, Composer, Node) live outside the saved workspace, so after a
reset reinstall them, then run the included **`restore.sh`**.

### Step 1 — Install runtime (Ubuntu/Debian)
```bash
sudo apt-get update
sudo apt-get install -y php-cli php-sqlite3 php-mbstring php-xml php-curl php-zip php-gd php-intl unzip
curl -sS https://getcomposer.org/installer | php && sudo mv composer.phar /usr/local/bin/composer
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs
```

### Step 2 — One-command restore
```bash
cd /home/user/himanshu-powergrid
./restore.sh
```
This automatically: `composer install --no-dev` (only if `vendor/` is missing —
**the standard `vendor/` folder ships with the workspace**) → `npm install` (only
if `node_modules` is missing) → `npm run build` (only if `public/site-build` is
missing) → `migrate` → `storage:link`.

### Step 3 — Seed demo content (only if database is empty)
```bash
php artisan migrate --force          # creates tables
php artisan db:seed --force          # admin user + all site content
```

### Step 4 — Start the server
```bash
php artisan serve --host=0.0.0.0 --port=8000
```
Open `http://localhost:8000` → public site, `http://localhost:8000/admin` → admin.

### Handy commands
```bash
php artisan route:list               # all 101 routes
php artisan tinker                   # inspect DB: App\Models\Banner::all();
tail -f storage/logs/laravel.log     # errors
npm run build                        # rebuild frontend after JS edits
npm run dev                          # hot-reload dev mode instead of build
```

---

## PART 5 — Running on Your Own Machine (MySQL / Windows)

The project runs on both SQLite (sandbox) and MySQL (tested on MariaDB/MySQL 8).

### Step 1 — Fix note (migration already patched)
One legacy migration dropped an index before the foreign key that used it — MySQL
rejects that (error 1553). `2026_07_23_094627_restructure_activities_for_many_to_many.php`
now drops the FK first. Make sure your local copy has this file version.

### Step 2 — Create the database
```sql
CREATE DATABASE powergrid CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Step 3 — `.env` for MySQL
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=powergrid
DB_USERNAME=root
DB_PASSWORD=your_password

APP_URL=http://localhost:8000
```

### Step 4 — Full setup commands
```bash
composer install          # with dev tools (PHPUnit etc.) — fine on your machine
npm install
php artisan key:generate
php artisan migrate:fresh --seed    # fresh = clean rebuild (fixes half-migrated DB from the error)
php artisan storage:link
npm run build
php artisan serve
```
Public site: `http://localhost:8000` · Admin: `http://localhost:8000/admin`
(`admin@cubegrid.in` / `admin123`)

### If you hit a migration error again
Run `php artisan migrate:fresh --seed` — it drops all tables and rebuilds cleanly,
so a partially-failed migration run never blocks you.

> **Cleanup note:** the legacy school/activity template code (30 old migrations,
> 14 models, 11 controllers, the API routes and all related request classes) has
> been removed. The database now builds from **14 migrations**: Laravel defaults
> (users/cache/jobs), spatie permissions, and the 2026_11_21 content series
> (banners, team, events, page_contents, settings, form_submissions, menus,
> blogs). Tested fresh on both SQLite and MySQL.

---

## Credentials & Key Facts

| Thing | Value |
|-------|-------|
| Admin URL | `/admin` |
| Admin login | `admin@cubegrid.in` / `admin123` |
| Database | SQLite file `database/database.sqlite` |
| Form submissions stored in | DB table `form_submissions` → Admin → Submissions |
| Resume uploads | `storage/app/public/resumes/` |
| Media uploads | `storage/app/public/media/YYYY-MM/` |
| PHP packages | `vendor/` (standard folder, included in workspace) |
| Built assets | `public/site-build/` |

> **Note on `vendor/`:** it was installed with `--no-dev` (PHPUnit, Pint, Faker and
> other dev-only tools excluded) so it fits the workspace size limits. The app runs
> 100% fine without them. On your own machine, if you want the dev tools, run plain
> `composer install` instead.
