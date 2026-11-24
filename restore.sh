#!/usr/bin/env bash
# Restore the dev environment after a fresh machine/sandbox reset.
# Prereq: PHP 8.3+ (with sqlite/mbstring/xml/curl/zip extensions), Composer, Node 20.
set -e
cd "$(dirname "$0")"

# PHP packages — vendor/ ships with the workspace, so this only runs if missing.
# (--no-dev: skips PHPUnit/Pint/Faker etc.; runtime packages only)
[ -d vendor ] || composer install --no-dev --optimize-autoloader

# Node packages — not persisted, reinstalled when missing
[ -d node_modules ] || npm install

# Frontend build — public/site-build ships with the workspace, rebuild only if missing
[ -d public/site-build ] || npm run build

php artisan migrate --force || true
php artisan storage:link || true

echo "ready: php artisan serve --host=0.0.0.0 --port=8000"
