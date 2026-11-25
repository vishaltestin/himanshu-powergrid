<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Event;
use App\Models\Menu;
use App\Models\Setting;
use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    public function run(): void
    {
        $this->seedSettings();
        $this->seedMenus();
        $this->seedTeam();
        $this->seedEvents();
        $this->seedBlogs();
    }

    /**
     * Site-wide settings (keys from config/site-settings.php). Existing values
     * are never overwritten, so re-running the seeder keeps admin edits.
     */
    private function seedSettings(): void
    {
        $values = [
            'site_name' => 'CubeGrid Advisors',
            'logo' => '/images/logo-new.png',
            'logo_white' => '/images/logo-new-white.png',
            'default_meta_description' => 'Cube Grid Advisors — an I Squared Capital portfolio company building complex energy infrastructure for India’s clean energy future.',
            'contact_email' => 'admin@cubegrid.in',
            'contact_phone' => '+91 123 4567 890',
            'contact_address' => '7th Floor, Block B, Vatika Business Park Sohna Road, Badshahpur, Sector-49 Gurugram, Haryana - 122018',
            'map_embed_url' => self::MAP_URL,
            'footer_description' => 'A portfolio company of I Squared Capital, building complex energy infrastructure for India’s clean energy future. We develop, construct, operate, and scale critical assets across India’s power value chain.',
            'footer_menu_1_title' => 'Quick Links',
            'footer_menu_2_title' => 'Pillers',
            'footer_contact_title' => 'Contact Us',
            'social_links' => [
                ['key' => 'facebook', 'label' => 'Facebook', 'url' => '#'],
                ['key' => 'twitter', 'label' => 'X / Twitter', 'url' => '#'],
                ['key' => 'linkedin', 'label' => 'LinkedIn', 'url' => '#'],
                ['key' => 'youtube', 'label' => 'YouTube', 'url' => '#'],
            ],
        ];

        $groups = [];
        foreach (config('site-settings') as $group => $def) {
            foreach ($def['fields'] as $field) {
                if (isset($field['name'])) {
                    $groups[$field['name']] = [$group, $field['type'] ?? 'text'];
                }
            }
        }

        foreach ($values as $key => $value) {
            [$group, $type] = $groups[$key] ?? ['general', 'text'];
            Setting::firstOrCreate(['key' => $key], [
                'value' => is_array($value) ? json_encode($value) : $value,
                'group' => $group,
                'type' => $type,
            ]);
        }

        // Settings from the old admin that no longer exist
        Setting::whereIn('key', ['footer_link_groups', 'investor_section'])->delete();
    }

    public const MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.40082522765!2d77.03228574131249!3d28.408687865633972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229abb17b84f%3A0x90e8afb86373f00a!2s7th%20Floor%2C%20TOWER-B%2C%20Spaze%20I-Tech%20Park%2C%20Sohna%20-%20Gurgaon%20Rd%2C%20Block%20S%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1791025140979!5m2!1sen!2sin';

    private function seedMenus(): void
    {
        $this->seedMenuPosition('main', [
            ['title' => 'Home', 'alias' => '/', 'order' => 1, 'children' => []],
            ['title' => 'About Us', 'alias' => '/about-us', 'order' => 2, 'children' => [
                ['title' => 'Overview', 'alias' => '/about-us', 'order' => 1],
                ['title' => 'Mission & Vision', 'alias' => '/about-us#vission-mission', 'order' => 2],
                ['title' => 'Our Values', 'alias' => '/our-values', 'order' => 3],
                ['title' => 'Management Team', 'alias' => '/teams', 'order' => 4],
                ['title' => 'Our Investors', 'alias' => '/investors', 'order' => 5],
                ['title' => 'Milestones', 'alias' => '/milestones', 'order' => 6],
            ]],
            ['title' => 'Projects', 'alias' => '/projects', 'order' => 3, 'children' => []],
            ['title' => 'Blogs', 'alias' => '/blogs', 'order' => 4, 'children' => []],
            ['title' => 'Media', 'alias' => '#', 'order' => 5, 'children' => [
                ['title' => 'News & Updates', 'alias' => '/news', 'order' => 1],
                ['title' => 'Events', 'alias' => '/events', 'order' => 2],
            ]],
            ['title' => 'Career', 'alias' => '#', 'order' => 6, 'children' => [
                ['title' => 'Life @ CubeGrid', 'alias' => '/life-at-cubegrid', 'order' => 1],
                ['title' => 'Apply Now', 'alias' => '/career', 'order' => 2],
            ]],
            ['title' => 'Contact Us', 'alias' => '/contact-us', 'order' => 7, 'children' => [
                ['title' => 'Reach Us', 'alias' => '/contact-us', 'order' => 1],
                ['title' => 'Enquiry', 'alias' => '/enquiry', 'order' => 2],
            ]],
        ]);

        $this->seedMenuPosition('footer_1', [
            ['title' => 'Home', 'alias' => '/'],
            ['title' => 'About Company', 'alias' => '/about-us'],
            ['title' => 'Projects', 'alias' => '/projects'],
            ['title' => 'New & Updates', 'alias' => '/news'],
            ['title' => 'Careers', 'alias' => '/career'],
            ['title' => 'Contact Us', 'alias' => '/contact-us'],
        ]);

        $this->seedMenuPosition('footer_2', [
            ['title' => 'Transmission Infrastructure', 'alias' => '/pillar/transmission-infrastructure'],
            ['title' => 'EPC for Renewable Evacuation', 'alias' => '/pillar/epc-for-renewable-evacuation'],
        ]);

        $this->seedMenuPosition('legal', [
            ['title' => 'Privacy Policy', 'alias' => '/privacy-policy'],
            ['title' => 'Terms of Service', 'alias' => '/terms-service'],
        ]);
    }

    /** Creates a menu tree for one position, unless that position already has items. */
    private function seedMenuPosition(string $position, array $items): void
    {
        if (Menu::where('menu_position', $position)->exists()) {
            return; // keep manual edits
        }

        foreach (array_values($items) as $i => $item) {
            $children = $item['children'] ?? [];
            unset($item['children']);

            $parent = Menu::create(array_merge(['order' => $i + 1], $item, [
                'menu_position' => $position,
                'parent_id' => null,
                'status' => 1,
            ]));

            foreach (array_values($children) as $j => $child) {
                Menu::create(array_merge(['order' => $j + 1], $child, [
                    'menu_position' => $position,
                    'parent_id' => $parent->id,
                    'status' => 1,
                ]));
            }
        }
    }

    private function seedTeam(): void
    {
        if (TeamMember::where('group', 'board')->exists()) {
            return;
        }

        $board = [
            [
                'name' => 'Mr. Arun Sharma',
                'designation' => 'CEO of CubeGrid Advisors Pvt Ltd',
                'image' => '/images/arun-sharma.jpeg',
                'description' => 'Arun Sharma is the Chief Executive Officer of Cube Grid Advisors Private Limited (CGAPL). He brings in over three decades of extensive experience in the power and energy sector. Mr. Sharma’s expertise spans the management of nuclear power projects...',
                'paragraphs' => [
                    'Arun Sharma is the Chief Executive Officer of Cube Grid Advisors Private Limited (CGAPL). He brings in over three decades of extensive experience in the power and energy sector.',
                    'Mr. Sharma’s expertise spans the management of nuclear power projects, combined cycle power plants, oil and gas EPC projects, including compressor stations, pump stations, sulphur recovery units, tankages, transmission lines, and power projects. With a strong foundation in business assurance, risk management, and internal audit, he ensures sustainable business operations and transformative project delivery.',
                    'A seasoned industry leader, Mr. Sharma holds a Bachelor of Technology degree in Electrical and Electronics Engineering from the National Institute of Technology, Rourkela, and an MBA in Finance from the Management Development Institute, Gurgaon. He is also a qualified Associate Member of the Institute of Company Secretaries of India (ACS, Law) and the Institute of Cost Accountants of India (AICWA).',
                    'He has also held key leadership positions at KazStroyService, Punj Lloyd Limited and at Enron. His career began at the Nuclear Power Corporation of India Limited, where he contributed to the commissioning and operation of the Primary Heat Transport System at the Kakrapara and Rajasthan Atomic Power Stations.',
                    'Arun Sharma’s proven leadership and deep technical expertise continue to drive innovation and growth in the power infrastructure sector.',
                ],
                'highlights' => [],
                'order' => 1,
            ],
            [
                'name' => 'Mr. Rajesh Suri',
                'designation' => 'CTO of CubeGrid Advisors Pvt Ltd',
                'image' => '/images/rajesh-suri.jpeg',
                'description' => "A veteran infrastructure professional with over 40 years of experience in power transmission, with deep specialization in HVDC and FACTS technologies spanning 3. Mr. Suri's career spans India's most important power sector institutions...",
                'paragraphs' => [
                    "A veteran infrastructure professional with over 40 years of experience in power transmission, with deep specialization in HVDC and FACTS technologies spanning 3. Mr. Suri's career spans India's most important power sector institutions — from NTPC and Power Grid Corporation to Siemens, GE Grid Solutions (formerly Alstom Grid), and Sterlite Power.",
                    'His expertise covers the full lifecycle of transmission infrastructure — from design engineering and bid evaluation to large-scale construction management, commissioning, and long-term asset operations. He has been instrumental in some of India’s most complex and strategically important HVDC projects.',
                    'Mr.Suri is a distinguished member of CIGRE and has been a member of IEC and CIGRE Working Groups on HVDC systems. Mr. Suri has published several papers for international conferences. He brings deep experience coordinating with international financial agencies including the World Bank and ADB. His career trajectory — NTPC → PGCIL → Siemens → GE/Alstom → Sterlite Power → Cube Grid — represents four decades at the heart of India’s HVDC and power transmission story.',
                ],
                'highlights' => [],
                'order' => 2,
            ],
        ];

        foreach ($board as $member) {
            TeamMember::create(array_merge($member, ['group' => 'board', 'status' => 1]));
        }
    }

    private function seedEvents(): void
    {
        if (Event::exists()) {
            return;
        }

        Event::create([
            'title' => 'Coming Soon',
            'description' => 'Stay tuned for updates and more details coming soon.',
            'date' => 'November 15, 2026',
            'time' => '9:00 AM - 5:00 PM',
            'location' => 'India',
            'category' => 'Power Transmission',
            'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
            'price' => '$149',
            'badge' => 'Upcoming',
            'order' => 1,
            'status' => 1,
        ]);
    }

    private function seedBlogs(): void
    {
        if (Blog::exists()) {
            return;
        }

        $posts = [
            [
                'type' => 'news',
                'title' => 'Strengthening the grid with next-generation transmission infrastructure',
                'alias' => 'strengthening-the-grid-next-generation-transmission',
                'thumbnail' => '/images/power-grid.avif',
                'short_description' => 'Our latest transmission program brings together advanced engineering, resilient network design, and smarter grid technologies to support the energy demands of tomorrow.',
                'description' => '<p>Our latest transmission program brings together advanced engineering, resilient network design, and smarter grid technologies to support the energy demands of tomorrow.</p>',
                'date' => '2026-08-18',
                'order' => 1,
                'status' => 1,
            ],
            [
                'type' => 'news',
                'title' => 'Transmission infrastructure expansion reaches a new milestone',
                'alias' => 'transmission-infrastructure-expansion-milestone',
                'thumbnail' => '/images/forest-power-grid.jpg',
                'short_description' => 'A major phase of our latest infrastructure program has been successfully completed.',
                'description' => '<p>A major phase of our latest infrastructure program has been successfully completed.</p>',
                'date' => '2026-08-11',
                'order' => 2,
                'status' => 1,
            ],
            [
                'type' => 'press-release',
                'title' => 'New substation project moves into construction phase',
                'alias' => 'new-substation-project-construction-phase',
                'thumbnail' => '/images/nuclear-plant.webp',
                'short_description' => 'The project marks another step toward creating a more resilient and connected power network.',
                'description' => '<p>The project marks another step toward creating a more resilient and connected power network.</p>',
                'date' => '2026-08-04',
                'order' => 3,
                'status' => 1,
            ],
            [
                'type' => 'press-release',
                'title' => 'Coming Soon...',
                'alias' => 'coming-soon',
                'thumbnail' => '/images/power-grid.avif',
                'short_description' => 'Stay tuned for updates and more details coming soon.',
                'description' => '<p>Stay tuned for updates and more details coming soon.</p>',
                'date' => '2026-08-18',
                'order' => 4,
                'status' => 1,
            ],
        ];

        foreach ($posts as $post) {
            Blog::create($post);
        }

    }
}
