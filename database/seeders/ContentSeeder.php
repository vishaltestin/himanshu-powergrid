<?php

namespace Database\Seeders;

use App\Models\Banner;
use App\Models\Blog;
use App\Models\Event;
use App\Models\Menu;
use App\Models\PageContent;
use App\Models\Setting;
use App\Models\TeamMember;
use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    public function run(): void
    {
        $this->seedSettings();
        $this->seedBanners();
        $this->seedMenus();
        $this->seedTeam();
        $this->seedEvents();
        $this->seedBlogs();
    }

    private function seedSettings(): void
    {
        $settings = [
            ['key' => 'site_name', 'value' => 'CubeGrid Advisors', 'group' => 'general', 'type' => 'text'],
            ['key' => 'logo', 'value' => '/images/logo-new.png', 'group' => 'general', 'type' => 'image'],
            ['key' => 'logo_white', 'value' => '/images/logo-new-white.png', 'group' => 'general', 'type' => 'image'],
            ['key' => 'contact_email', 'value' => 'admin@cubegrid.in', 'group' => 'contact', 'type' => 'text'],
            ['key' => 'contact_phone', 'value' => '+91 123 4567 890', 'group' => 'contact', 'type' => 'text'],
            ['key' => 'contact_address', 'value' => '7th Floor, Block B, Vatika Business Park Sohna Road, Badshahpur, Sector-49 Gurugram, Haryana - 122018', 'group' => 'contact', 'type' => 'textarea'],
            ['key' => 'footer_description', 'value' => 'A portfolio company of I Squared Capital, building complex energy infrastructure for India’s clean energy future. We develop, construct, operate, and scale critical assets across India’s power value chain.', 'group' => 'footer', 'type' => 'textarea'],
            ['key' => 'footer_link_groups', 'value' => json_encode([
                [
                    'title' => 'Quick Links',
                    'links' => [
                        ['title' => 'Home', 'href' => '/'],
                        ['title' => 'About Company', 'href' => '/about-us'],
                        ['title' => 'Projects', 'href' => '/projects'],
                        ['title' => 'New & Updates', 'href' => '/news'],
                        ['title' => 'Careers', 'href' => '/career'],
                        ['title' => 'Contact Us', 'href' => '/contact-us'],
                    ],
                ],
                [
                    'title' => 'Resources',
                    'links' => [
                        ['title' => 'Transmission Infrastructure', 'href' => '/pillar/transmission-infrastructure'],
                        ['title' => 'EPC for Renewable Evacuation', 'href' => '/pillar/epc-for-renewable-evacuation'],
                    ],
                ],
            ]), 'group' => 'footer', 'type' => 'json'],
            ['key' => 'social_links', 'value' => json_encode([
                ['key' => 'facebook', 'label' => 'Facebook', 'url' => '#'],
                ['key' => 'twitter', 'label' => 'X / Twitter', 'url' => '#'],
                ['key' => 'linkedin', 'label' => 'LinkedIn', 'url' => '#'],
                ['key' => 'youtube', 'label' => 'YouTube', 'url' => '#'],
            ]), 'group' => 'social', 'type' => 'json'],
            ['key' => 'investor_section', 'value' => json_encode([
                'label' => 'Our Investor',
                'title' => 'I Squared Capital',
                'subtitle' => 'Cube Grid Advisors is a portfolio company of I Squared Capital.',
                'description' => 'I Squared Capital is a leading global infrastructure investment manager with $50 billion+ in assets under management. Founded in 2012, I Squared builds and scales essential infrastructure businesses across global markets.',
                'image' => '/images/client/isqaure-2.png',
                'stats' => [
                    ['value' => '$60B+', 'label' => 'Assets under management'],
                    ['value' => '115+', 'label' => 'Countries with investment'],
                    ['value' => '100+', 'label' => 'Portfolio companies globally'],
                    ['value' => '360+', 'label' => 'Infrastructure professionals'],
                ],
            ]), 'group' => 'home', 'type' => 'json'],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(['key' => $setting['key']], $setting);
        }
    }

    private function seedBanners(): void
    {
        $banners = [
            [
                'title' => 'Building a Brighter Tomorrow',
                'highlight' => 'Brighter',
                'highlight_class' => 'text-accent-foreground',
                'description' => 'Building the critical energy infrastructure that India needs — from high-voltage HVDC transmission lines to pumped hydro storage, from nuclear power to green hydrogen.',
                'image' => '/images/banner-2.png',
                'button_text' => 'Explore',
                'button_link' => '/projects',
                'order' => 1,
                'status' => 1,
            ],
            [
                'title' => "Powering India's Green Transition",
                'highlight' => 'Green',
                'highlight_class' => 'text-accent',
                'description' => 'Building the critical energy infrastructure that India needs — from high-voltage HVDC transmission lines to pumped hydro storage, from nuclear power to green hydrogen.',
                'image' => 'https://images.pexels.com/photos/17921806/pexels-photo-17921806.jpeg',
                'button_text' => 'Partner With Us',
                'button_link' => '/enquiry',
                'order' => 2,
                'status' => 1,
            ],
            [
                'title' => 'Innovating Sustainable Energy',
                'highlight' => 'Sustainable',
                'highlight_class' => 'text-primary',
                'description' => 'Building the critical energy infrastructure that India needs — from high-voltage HVDC transmission lines to pumped hydro storage, from nuclear power to green hydrogen.',
                'image' => 'https://images.pexels.com/photos/35973875/pexels-photo-35973875.jpeg',
                'button_text' => 'Contact Us',
                'button_link' => '/contact-us',
                'order' => 3,
                'status' => 1,
            ],
            [
                'title' => "Driving India's Energy Future",
                'highlight' => 'Energy',
                'highlight_class' => 'text-accent',
                'description' => "Accelerating India's journey towards energy independence through advanced infrastructure, innovative technologies, and sustainable power solutions for generations to come.",
                'image' => '/images/india-map.png',
                'button_text' => 'Discover More',
                'button_link' => '/about-us',
                'order' => 4,
                'status' => 1,
            ],
        ];

        foreach ($banners as $banner) {
            Banner::updateOrCreate(['title' => $banner['title'], 'image' => $banner['image']], $banner);
        }
    }

    private function seedMenus(): void
    {
        if (Menu::where('menu_position', 'main')->exists()) {
            return; // keep manual edits
        }

        $menus = [
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
        ];

        foreach ($menus as $menu) {
            $children = $menu['children'];
            unset($menu['children']);

            $parent = Menu::create(array_merge($menu, [
                'menu_position' => 'main',
                'parent_id' => null,
                'status' => 1,
            ]));

            foreach ($children as $child) {
                Menu::create(array_merge($child, [
                    'menu_position' => 'main',
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

        // Teams page intro + quote (page content)
        PageContent::updateOrCreate(['page' => 'teams'], ['content' => [
            'banner' => ['title' => 'Management Team', 'image' => '/images/team-2.png'],
            'intro' => 'Our leadership team is expanding rapidly. Each CXO being onboarded brings 30+ years of hands-on experience in developing, constructing, and operating infrastructure assets at scale — with 150+ years of combined experience across transmission, storage, distribution, nuclear, and hydrogen.',
            'quote' => '"Building the team that builds India\'s grid".',
        ]]);
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

        PageContent::updateOrCreate(['page' => 'events'], ['content' => [
            'banner' => ['title' => 'Events', 'image' => '/images/events.png'],
        ]]);
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

        PageContent::updateOrCreate(['page' => 'blogs'], ['content' => [
            'banner' => ['title' => 'Our Blogs', 'image' => '/images/news.jpg'],
        ]]);

        PageContent::updateOrCreate(['page' => 'news'], ['content' => [
            'banner' => ['title' => 'News & Updates', 'image' => '/images/news.jpg'],
        ]]);
    }
}
