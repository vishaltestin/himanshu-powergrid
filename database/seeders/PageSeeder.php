<?php

namespace Database\Seeders;

use App\Models\Page;
use App\PageBuilder\BlockRegistry;
use Illuminate\Database\Seeder;

/**
 * Rebuilds every page of the original site as a stack of page-builder
 * sections. Each section is merged over its block's defaults so every field
 * exists in the admin.
 *
 * Pages that already exist (matched by slug) are left untouched, so
 * re-running the seeder never overwrites edits made in the admin:
 *   php artisan db:seed --class=PageSeeder   (only adds missing pages)
 */
class PageSeeder extends Seeder
{
    private BlockRegistry $blocks;

    public function run(BlockRegistry $blocks): void
    {
        $this->blocks = $blocks;

        $this->home();
        $this->homeTwo();
        $this->homeThree();
        $this->aboutUs();
        $this->ourValues();
        $this->projects();
        $this->pillars();
        $this->pillarDetails();
        $this->career();
        $this->certificates();
        $this->sustainability();
        $this->csr();
        $this->contactUs();
        $this->enquiry();
        $this->investors();
        $this->legal();
        $this->lifeAtCubegrid();
        $this->milestones();
        $this->teams();
        $this->posts();
        $this->events();
    }

    /* ------------------------------------------------------------------ */
    /*  Helpers                                                            */
    /* ------------------------------------------------------------------ */

    /**
     * @param  array<int, array{0:string,1:array,2?:string,3?:string}>  $sections  [type, data, label?, anchor?]
     */
    private function page(string $slug, string $title, array $sections, array $attributes = []): void
    {
        if (Page::where('slug', $slug)->exists()) {
            return;
        }

        $page = Page::create(array_merge([
            'title' => $title,
            'slug' => $slug,
            'status' => 'published',
            'is_home' => false,
        ], $attributes));

        foreach (array_values($sections) as $i => $section) {
            [$type, $data] = $section;
            $page->sections()->create([
                'type' => $type,
                'label' => $section[2] ?? null,
                'anchor' => $section[3] ?? null,
                'data' => array_merge($this->blocks->defaults($type), $data),
                'order' => $i + 1,
                'is_visible' => true,
            ]);
        }
    }

    private function json(string $file): array
    {
        return json_decode(file_get_contents(database_path("seeders/data/{$file}.json")), true);
    }

    private function banner(string $title, ?string $image = null): array
    {
        return ['page_banner', array_filter(['title' => $title, 'subtitle' => '', 'image' => $image], fn ($v) => $v !== null)];
    }

    private function pillarItems(int $limit = 0, bool $withSubtitle = false): array
    {
        $pillars = $this->json('pillars');
        if ($limit) {
            $pillars = array_slice($pillars, 0, $limit);
        }

        return array_map(fn ($p) => [
            'title' => $p['title'],
            'subtitle' => $withSubtitle ? $p['subtitle'] : '',
            'description' => $p['desc'],
            'image' => $p['image'],
            'link' => '/pillar/' . $p['alias'],
        ], $pillars);
    }

    private function steps(): array
    {
        return [
            ['number' => '01', 'title' => 'Identify', 'description' => 'Systematically identify complex infrastructure opportunities where regulatory, technical, and terrain barriers create value for experienced developers.', 'image' => '/images/identify-2.jpg'],
            ['number' => '02', 'title' => 'Develop', 'description' => 'CXOs with 30+ years each navigate regulatory approvals, land acquisition, environmental clearances, and financial structuring for GW-scale projects.', 'image' => '/images/construct.jpg'],
            ['number' => '03', 'title' => 'Construct', 'description' => "World-class project management with proven execution in challenging geographies. Our construction leadership has delivered India's largest HVDC and transmission projects.", 'image' => '/images/transmission-infra.jpg'],
            ['number' => '04', 'title' => 'Operate', 'description' => 'Own and operate with institutional governance, 99%+ availability targets, safety-first culture, and technology-driven performance optimization.', 'image' => '/images/operate.jpg'],
            ['number' => '05', 'title' => 'Scale', 'description' => 'Build platforms, not projects. Grow each vertical into a portfolio of scale through organic development, acquisitions, and strategic partnerships.', 'image' => '/images/power-grid.jpg'],
        ];
    }

    /** Value cards in the order used on the home / about pages. */
    private function valueCards(): array
    {
        $byTitle = collect($this->json('values'))->keyBy('title');

        return collect(['Integrity', 'Collaboration', 'Social Impact', 'Respect', 'Innovation'])
            ->filter(fn ($t) => $byTitle->has($t))
            ->map(fn ($t) => [
                'icon' => $byTitle[$t]['icon'],
                'title' => $t,
                'text' => $byTitle[$t]['subtitle'],
            ])->values()->all();
    }

    private function videoCta(string $heading, string $text, string $button = 'Enquire Now', string $link = '/enquiry'): array
    {
        return ['video_cta', [
            'heading' => $heading,
            'text' => $text,
            'button_text' => $button,
            'button_link' => $link,
            'video' => '/images/power-2.mp4',
        ]];
    }

    private function field(string $name, string $label, string $type = 'text', array $extra = []): array
    {
        return array_merge([
            'label' => $label,
            'name' => $name,
            'type' => $type,
            'width' => 'full',
            'placeholder' => '',
            'required' => false,
            'options' => [],
        ], $extra);
    }

    private const WHO_P1 = "Cube Grid Advisors is a portfolio company of I Squared Capital — the leading independent global infrastructure investor managing \$50 billion+ in assets. We are an integrated energy infrastructure platform focused on identifying, developing, constructing, operating, and scaling complex assets across India's power value chain.";

    private const WHO_P2 = "India's energy transition demands ₹2.44 lakh crore in new transmission infrastructure, 103 GW of pumped hydro, and 5 MMTPA of green hydrogen....";

    private const HERO_TEXT = 'Building the critical energy infrastructure that India needs — from high-voltage HVDC transmission lines to pumped hydro storage, from nuclear power to green hydrogen.';

    /* ------------------------------------------------------------------ */
    /*  Home pages                                                         */
    /* ------------------------------------------------------------------ */

    private function home(): void
    {
        $this->page('home', 'Home', [
            ['hero_slider', [
                'slides' => [
                    ['title' => 'Building a Brighter Tomorrow', 'highlight' => 'Brighter', 'highlight_color' => 'text-accent-foreground', 'image' => '/images/banner-2.png', 'description' => self::HERO_TEXT, 'button_text' => 'Explore', 'button_link' => '/contact-us'],
                    ['title' => "Powering India's Green Transition", 'highlight' => 'Green', 'highlight_color' => 'text-accent', 'image' => 'https://images.pexels.com/photos/17921806/pexels-photo-17921806.jpeg', 'description' => self::HERO_TEXT, 'button_text' => 'Partner With Us', 'button_link' => '/contact-us'],
                    ['title' => 'Innovating Sustainable Energy', 'highlight' => 'Sustainable', 'highlight_color' => 'text-primary', 'image' => 'https://images.pexels.com/photos/35973875/pexels-photo-35973875.jpeg', 'description' => self::HERO_TEXT, 'button_text' => 'Contact Us', 'button_link' => '/contact-us'],
                    ['title' => "Driving India's Energy Future", 'highlight' => 'Energy', 'highlight_color' => 'text-accent', 'image' => '/images/india-map.png', 'description' => "Accelerating India's journey towards energy independence through advanced infrastructure, innovative technologies, and sustainable power solutions for generations to come.", 'button_text' => 'Discover More', 'button_link' => '/contact-us'],
                ],
                'tagline' => 'Others talk about it.',
                'tagline_highlight' => 'We build it.',
                'autoplay_seconds' => 4,
            ], 'Hero slider'],
            ['media_text', [
                'layout' => 'stacked',
                'image_position' => 'left',
                'label' => 'Who We Are',
                'heading' => 'We Build Complex Infrastructure',
                'lead' => 'Where Others See Complexity, We See Opportunity',
                'body' => '<p>' . self::WHO_P1 . '</p><p>' . self::WHO_P2 . '</p>',
                'button_text' => 'Read More',
                'button_link' => '/about-us',
                'image' => '/images/power-grid-4.jpg',
                'image_secondary' => '/images/forest-power-grid.jpg',
                'image_alt' => 'Power grid',
                'features' => [],
                'badges' => [],
            ], 'Who we are'],
            ['investor_highlight', [
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
            ], 'Investor'],
            ['pillars_grid', [
                'label' => 'Our Pillars',
                'heading' => 'Smart Solutions for Power Transmission',
                'intro' => '<p>An integrated platform building complex infrastructure across the full energy value chain</p>',
                'arrow_style' => 'dark',
                'columns' => '2',
                'items' => $this->pillarItems(2),
            ], 'Our pillars'],
            ['process_steps', [
                'label' => 'Our Approach',
                'heading' => 'How We Build Complex Infrastructure',
                'intro' => 'A disciplined five-stage approach led by CXOs with 30+ years hands-on experience each',
                'steps' => $this->steps(),
            ], 'Our approach'],
            ['media_text', [
                'layout' => 'feature',
                'image_position' => 'left',
                'label' => '',
                'heading' => 'Sustainability',
                'body' => '<p>CubeGrid has always considered Environment, Social and Governance (ESG) as key business imperatives and integrates sustainable practices into its operations, projects, and long-term strategy.</p><p>The company aligns its activities with applicable Sustainable Development Goals (SDGs), focusing on responsible resource management, environmental stewardship, social responsibility, and ethical governance. Through continuous innovation and responsible decision-making, CubeGrid strives to create lasting value while contributing to a more sustainable and resilient future.</p>',
                'button_text' => 'Explore',
                'button_link' => '/sustainability',
                'image' => '/images/sustain-3.webp',
                'image_alt' => 'Aerial view of winding forest road',
                'features' => [],
                'badges' => [],
            ], 'Sustainability'],
            $this->videoCta('Empowering the Future of Energy Transmission', 'Reliable transmission solutions engineered to connect power, strengthen grids, and support a more resilient energy future.'),
        ], ['is_home' => true, 'meta_title' => 'CubeGrid Advisors — Building India’s Energy Infrastructure']);
    }

    /** Sections shared by home-2 and home-3 (everything after the hero). */
    private function homeTwoBody(): array
    {
        return [
            ['media_text', [
                'layout' => 'badges',
                'image_position' => 'right',
                'label' => '// Who We Are',
                'heading' => 'We Build Complex Infrastructure',
                'body' => '<p>' . self::WHO_P1 . '</p><p>' . self::WHO_P2 . '</p>',
                'features_style' => 'checklist',
                'features' => [
                    ['icon' => 'check-check', 'label' => 'Transmission — HVAC / HVDC / Substations'],
                    ['icon' => 'check-check', 'label' => 'EPC for Renewable Evacuation Lines'],
                    ['icon' => 'check-check', 'label' => 'Nuclear Power (Shanti)'],
                ],
                'badges' => [
                    ['value' => '150+', 'label' => 'years of combined experience'],
                    ['value' => '6', 'label' => 'Business Verticals'],
                ],
                'button_text' => 'Explore',
                'button_link' => '/about-us',
                'image' => '/images/about-us.jpg',
            ], 'Who we are'],
            ['stats_band', [
                'style' => 'pills',
                'items' => [
                    ['prefix' => '', 'value' => 500, 'suffix' => '+ GW', 'label' => "India's RE Target 2030", 'icon' => 'zap', 'animate' => true],
                    ['prefix' => '$', 'value' => 50, 'suffix' => 'B+', 'label' => 'Assets Under Mgmt', 'icon' => 'trending-up', 'animate' => true],
                    ['prefix' => '', 'value' => 90, 'suffix' => '+', 'label' => 'Portfolio Companies', 'icon' => 'building-2', 'animate' => true],
                    ['prefix' => '', 'value' => 300, 'suffix' => '+', 'label' => 'Professionals', 'icon' => 'users', 'animate' => true],
                ],
            ], 'Key numbers'],
            ['pillars_grid', [
                'label' => '// Our Businesses',
                'heading' => 'Smart Solutions for Power Transmission',
                'intro' => '<p>An integrated platform building complex infrastructure across the full energy value chain</p>',
                'arrow_style' => 'accent',
                'columns' => '3',
                'items' => $this->pillarItems(),
            ], 'Our businesses'],
            ['process_steps', [
                'label' => '// Our Approach',
                'heading' => 'How We Build Complex Infrastructure',
                'intro' => 'A disciplined five-stage approach led by CXOs with 30+ years hands-on experience each',
                'steps' => $this->steps(),
            ], 'Our approach'],
            ['values_cards', [
                'label' => 'Values',
                'heading' => 'Our Core Values',
                'intro' => 'Five values. One culture. Every project, every decision.',
                'background' => 'gray',
                'link_text' => '',
                'items' => $this->valueCards(),
            ], 'Core values'],
            ['image_cards', [
                'label' => '',
                'heading' => '',
                'intro' => '',
                'items' => [
                    ['title' => 'Sustainability', 'image' => '/images/sustain-3.webp', 'text' => 'CubeGrid has always considered Environment, Social and Governance (ESG) as key business imperatives and aligns its business activities with the applicable SDGs, demonstrating its commitment to sustainability.', 'button_text' => 'Know More', 'button_link' => '/sustainability'],
                    ['title' => 'CSR', 'image' => '/images/csr.jpg', 'text' => 'Corporate social responsibility (CSR) has become one of the standard business practices of current time. More than a statutory compliance CSR is embedded into the vision and mission of CubeGrid.', 'button_text' => 'Know More', 'button_link' => '/csr'],
                ],
            ], 'Sustainability & CSR'],
            ['logo_wall', [
                'label' => '// Our Investor',
                'heading' => "Wholly Owned by\nI Squared Capital",
                'body' => '<p>Cube Grid Advisors is a portfolio company of I Squared Capital — the leading independent global infrastructure investor</p><p>I Squared Capital is a leading independent global infrastructure investment manager with $50 billion+ in assets under management. Founded in 2012 by former senior executives at Morgan Stanley, I Squared builds and scales essential infrastructure businesses that deliver critical services to millions of people worldwide. With a portfolio of 90+ companies operating across 70+ countries and a team of 300+ professionals across 9 global offices, I Squared is known for developing mid-market companies into scaled infrastructure leaders.</p>',
                'logos' => [
                    ['name' => 'I Squared Capital', 'image' => '/images/client/isquare.png'],
                    ['name' => 'Cube Highways', 'image' => '/images/client/cube-highway.png'],
                    ['name' => 'HEXA Renewables', 'image' => '/images/client/hexa.png'],
                    ['name' => 'AG&P', 'image' => '/images/client/agp.png'],
                    ['name' => 'THINK Gas', 'image' => '/images/client/think-gas.webp'],
                    ['name' => 'Lightstorm', 'image' => '/images/client/lightstorm.webp'],
                    ['name' => 'Polaris Smart Metering', 'image' => '/images/client/polaris.svg'],
                    ['name' => 'CubeGrid', 'image' => '/images/logo-new-transparent.png'],
                    ['name' => 'I Squared Capital', 'image' => '/images/client/isquare.png'],
                ],
            ], 'Investor logos'],
            ['posts_grid', [
                'style' => 'cards',
                'post_type' => 'all',
                'limit' => 3,
                'label' => '// Insights',
                'heading' => 'News & Updates',
                'button_text' => 'Explore All',
                'button_link' => '/news',
            ], 'Latest news'],
            ['image_cta', [
                'style' => 'centered',
                'label' => '',
                'heading' => 'Empowering the Future of Energy Transmission',
                'text' => 'Reliable transmission solutions engineered to connect power, strengthen grids, and support a more resilient energy future.',
                'button_text' => 'Explore Our Solutions',
                'button_link' => '/pillers',
                'image' => '/images/cta.jpg',
            ], 'Call to action'],
        ];
    }

    private function homeTwo(): void
    {
        $this->page('home-2', 'Home 2', array_merge([
            ['video_hero', [
                'video' => '/images/power-5-b.mp4',
                'heading' => "Powering India's Green Transition",
                'text' => self::HERO_TEXT,
                'button_text' => 'Partner With Us',
                'button_link' => '/contact-us',
                'height' => 'tall',
            ], 'Video hero'],
        ], $this->homeTwoBody()));
    }

    private function homeThree(): void
    {
        $this->page('home-3', 'Home 3', array_merge([
            ['video_hero', [
                'video' => '/images/power-5-b.mp4',
                'heading' => "Powering India's Green Transition",
                'text' => self::HERO_TEXT,
                'button_text' => 'Partner With Us',
                'button_link' => '/contact-us',
                'height' => 'medium',
            ], 'Video hero'],
        ], $this->homeTwoBody()));
    }

    /* ------------------------------------------------------------------ */
    /*  About                                                              */
    /* ------------------------------------------------------------------ */

    private function aboutUs(): void
    {
        $this->page('about-us', 'About Us', [
            $this->banner('About Us', '/images/about-us-banner.webp'),
            ['media_text', [
                'layout' => 'about',
                'image_position' => 'left',
                'label' => 'Who We Are',
                'heading' => 'We Build Complex Infrastructure',
                'lead' => 'Where Others See Complexity, We See Opportunity',
                'body' => "<p>Cube Grid Advisors is a portfolio company of I Squared Capital — the leading independent global infrastructure investor managing \$70 billion+ in assets. We are an integrated energy infrastructure platform focused on identifying, developing, constructing, operating, and scaling complex assets across India's power value chain.</p><p>India's energy transition demands ₹2.44 lakh crore in new transmission infrastructure, which include EHVAC and HVDC transmission lines, large AC sub-stations, HVDC terminals and FACTS devices. These complex projects require deep domain expertise, institutional capital, and the tenacity to deliver in challenging regulatory and terrain environments.</p><p>Our leadership brings 150+ years of combined experience — each CXO with 30+ years of hands-on experience developing, constructing, and operating energy infrastructure at scale. From India's first HVDC lines to next-generation SMR nuclear plants, we've done it before.</p>",
                'button_text' => '',
                'image' => '/images/forest-power-grid.jpg',
                'image_alt' => 'Power lines through a forest',
                'features_style' => 'cards',
                'features' => [
                    ['icon' => 'utility-pole', 'label' => 'Transmission — HVAC / HVDC / Substations'],
                    ['icon' => 'spool', 'label' => 'EPC for Renewable Evacuation Lines'],
                ],
                'badges' => [],
            ], 'Who we are'],
            ['vision_mission', [
                'heading' => 'Our Vision & Mission',
                'intro' => 'The guiding principles that drive our commitment to building sustainable, resilient, and highly complex energy infrastructure for tomorrow.',
                'cards' => [
                    ['icon' => '/images/icons/vission.png', 'label' => "Where we're headed", 'title' => 'Our Vision', 'text' => "<p>To be the premier energy infrastructure platform, bridging the gap between complexity and execution to power India's sustainable and resilient future. We envision a smarter, more connected energy ecosystem driven by innovation, operational excellence, and sustainable infrastructure that creates long-term value for communities, industries, and future generations.</p>"],
                    ['icon' => '/images/icons/mission.png', 'label' => 'What we do', 'title' => 'Our Mission', 'text' => '<p>To identify, develop, and scale highly complex energy assets with precision and domain expertise, delivering long-term value to our stakeholders and communities. We are committed to transforming the energy landscape through strategic investments, innovative solutions, and efficient project execution. By combining technical excellence with a forward-thinking approach.</p>'],
                ],
            ], 'Vision & mission', 'vission-mission'],
            ['values_cards', [
                'label' => '',
                'heading' => 'Our Core Values',
                'intro' => 'Five values. One culture. Every project, every decision.',
                'background' => 'gray',
                'link_text' => 'Read more',
                'link_url' => '/our-values',
                'items' => $this->valueCards(),
            ], 'Core values', 'values'],
        ]);
    }

    private function ourValues(): void
    {
        $this->page('our-values', 'Our Values', [
            $this->banner('Our Core Values', '/images/values.png'),
            ['values_detailed', [
                'intro' => '<p>Our five core values shape our culture, guide our decisions, and define how we work. They reflect our commitment to integrity, social impact, respect, collaboration, and innovation in every project we undertake.</p>',
                'practice_heading' => 'In Practice',
                'items' => array_map(fn ($v) => [
                    'icon' => $v['icon'],
                    'title' => $v['title'],
                    'subtitle' => $v['subtitle'],
                    'description' => $v['description'],
                    'points' => $v['inPractice'],
                ], $this->json('values')),
            ], 'Values'],
        ]);
    }

    private function projects(): void
    {
        $this->page('projects', 'Projects', [
            $this->banner('Projects', '/images/project.avif'),
            ['projects_grid', [
                'label' => 'SELECTED PROJECTS',
                'heading' => 'We Build Complex Infrastructure',
                'intro' => "<p>We are an integrated energy infrastructure platform focused on identifying, developing, constructing, operating, and scaling complex assets across India's power value chain.</p>",
                'link_text' => 'View Project',
                'items' => [
                    ['title' => 'Coming Soon...', 'category' => 'under construction', 'description' => 'Stay tuned for updates and more details coming soon.', 'location' => 'North India, India', 'link' => '', 'image' => '/images/transmission-infra.jpg'],
                ],
            ], 'Projects'],
        ]);
    }

    private function pillars(): void
    {
        $this->page('pillers', 'Our Pillars', [
            $this->banner('Our Pillars', '/images/business-2.jpg'),
            ['pillars_grid', [
                'label' => 'Our Six Pillars',
                'heading' => 'Smart Solutions for Power Transmission',
                'intro' => '<p>An integrated platform building complex infrastructure across the full energy value chain</p>',
                'arrow_style' => 'dark',
                'columns' => '2',
                'items' => $this->pillarItems(2, true),
            ], 'Pillars'],
        ]);
    }

    private function pillarDetails(): void
    {
        foreach ($this->json('pillars') as $p) {
            $this->page('pillar/' . $p['alias'], $p['title'], [
                $this->banner('Our Pillars', '/images/business-2.jpg'),
                ['detail_intro', [
                    'subtitle' => $p['subtitle'],
                    'title' => $p['title'],
                    'description' => $p['desc'],
                    'image' => $p['image'],
                    'section_heading' => "Building the infrastructure behind India's energy future.",
                    'body' => '<p>' . e($p['desc']) . "</p><p>Our approach combines technical expertise, disciplined execution, and long-term thinking to develop infrastructure capable of supporting India's rapidly evolving energy requirements.</p>",
                    'features' => $p['features'],
                ], 'Pillar details'],
                $this->videoCta("Let's Build Your Next Energy Project", "Whether you're planning a new project or exploring a partnership, we're ready to understand your requirements and help you take the next step."),
            ], ['meta_description' => $p['desc']]);
        }
    }

    /* ------------------------------------------------------------------ */
    /*  Careers                                                            */
    /* ------------------------------------------------------------------ */

    private function career(): void
    {
        $lorem = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
        $jobs = array_map(fn ($j) => [
            'title' => $j['title'],
            'department' => $j['department'],
            'location' => $j['location'],
            'type' => $j['type'],
            'experience' => $j['experience'],
            'summary' => $j['summary'],
            'overview' => $j['summary'] . $lorem,
            'responsibilities' => $j['responsibilities'],
            'requirements' => $j['requirements'],
        ], $this->json('jobs'));

        $this->page('career', 'Careers', [
            $this->banner('Careers', '/images/career.jpg'),
            ['jobs_list', [
                'heading' => 'We Are Hiring For',
                'intro' => "<p>Exceptional professionals who want to build India's energy infrastructure. 30+ years domain expertise preferred.</p>",
                'jobs' => $jobs,
                'form_anchor' => 'apply-form',
                'form_field' => 'role',
            ], 'Open roles'],
            ['form_section', [
                'label' => '',
                'heading' => 'Submit Your Application',
                'intro' => '<p>Take the first step towards a rewarding career. Fill out the details below.</p>',
                'background' => 'gray',
                'label_style' => 'above',
                'form_type' => 'career',
                'submit_text' => 'Send Message',
                'sending_text' => 'Sending…',
                'success_message' => 'Your application has been submitted. Our team will get back to you soon!',
                'fields' => [
                    $this->field('first_name', 'First Name', 'text', ['width' => 'half', 'placeholder' => 'Enter Your First Name', 'required' => true]),
                    $this->field('last_name', 'Last Name', 'text', ['width' => 'half', 'placeholder' => 'Enter Your Last Name', 'required' => true]),
                    $this->field('email', 'Email Address', 'email', ['width' => 'half', 'placeholder' => 'Enter Your Email', 'required' => true]),
                    $this->field('phone', 'Phone Number', 'tel', ['width' => 'half', 'placeholder' => 'Enter Your Phone Number', 'required' => true]),
                    $this->field('role', 'Role Applied For', 'select', ['placeholder' => 'Select a position...', 'required' => true, 'options' => array_column($jobs, 'title')]),
                    $this->field('message', 'Message (Optional)', 'textarea', ['width' => 'half', 'placeholder' => 'Tell us briefly about your experience and why you want to join us...']),
                    $this->field('resume', 'Resume / CV', 'file', ['width' => 'half', 'required' => true]),
                ],
            ], 'Application form', 'apply-form'],
        ]);
    }

    private function lifeAtCubegrid(): void
    {
        $this->page('life-at-cubegrid', 'Life at CubeGrid', [
            $this->banner('Life at CubeGrid', '/images/life-at-2.png'),
            ['media_text', [
                'layout' => 'feature',
                'image_position' => 'right',
                'label' => 'working at cubegrid',
                'heading' => 'We turn ambition into innovation with clean energy delivery.',
                'body' => "<p>At CubeGrid, that is the work. We plan and build India's most critical transmission infrastructure — projects that power millions, enable renewable energy at scale, and demand the best of every person involved. Our teams bring engineering depth, stakeholder empathy, and an unrelenting drive to deliver. If you are drawn to work that is difficult by design and meaningful by outcome, CubeGrid is where you belong.</p>",
                'button_text' => '',
                'image' => 'https://img.magnific.com/premium-photo/two-workers-inspecting-electrical-tower-sunset_204719-25797.jpg?w=720',
                'image_alt' => 'Two workers inspecting an electrical tower at sunset',
                'features' => [],
                'badges' => [],
            ], 'Working at CubeGrid'],
            ['image_mosaic', [
                'heading' => 'why CubeGrid',
                'intro' => '<p>CubeGrid global workforce of over 360 dedicated professionals is driven by a passion for enhancing essential infrastructure assets that will lead to a higher quality of life for all.</p>',
                'cards' => array_map(fn ($c) => ['title' => $c['title'], 'image' => $c['image'], 'text' => $c['description']], $this->json('life-cards')),
            ], 'Why CubeGrid'],
            ['image_cta', [
                'style' => 'banner',
                'label' => 'Careers',
                'heading' => 'BUILD YOUR FUTURE WITH A TEAM THAT POWERS PROGRESS',
                'text' => '',
                'button_text' => 'View Open Vacancies',
                'button_link' => '/career',
                'image' => '/images/career-2.png',
            ], 'Careers banner'],
        ]);
    }

    /* ------------------------------------------------------------------ */
    /*  Company                                                            */
    /* ------------------------------------------------------------------ */

    private function certificates(): void
    {
        $this->page('certificates', 'Certifications', [
            $this->banner('Certifications', '/images/certi.png'),
            ['certificates_grid', [
                'heading' => 'Verified Accreditations',
                'intro' => '<p>All certifications are vetted annually by accredited global auditing boards.</p>',
                'preview_text' => 'Preview',
                'items' => array_map(fn ($c) => [
                    'title' => $c['title'],
                    'category' => $c['category'],
                    'image' => $c['image'],
                    'file' => ($c['pdfUrl'] ?? '#') === '#' ? '' : $c['pdfUrl'],
                    'issued_year' => (string) ($c['issuedYear'] ?? ''),
                ], $this->json('certificates')),
            ], 'Certificates'],
        ]);
    }

    private function sustainability(): void
    {
        $lorem2 = '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tenetur modi, quis quaerat commodi ducimus aperiam harum nihil. Consequatur modi nostrum harum consectetur voluptates numquam iste nulla repellendus officia aspernatur. nostrum harum consectetur voluptates numquam iste nulla repellendus officia aspernatur.</p>';

        $this->page('sustainability', 'Sustainability', [
            $this->banner('Sustainability'),
            ['media_text', [
                'layout' => 'feature',
                'image_position' => 'left',
                'label' => '',
                'heading' => 'Sustainability',
                'body' => '<p>CubeGrid has always considered Environment, Social and Governance (ESG) as key business imperatives and integrates sustainable practices into its operations, projects, and long-term strategy. The company aligns its activities with applicable Sustainable Development Goals (SDGs), focusing on responsible resource management, environmental stewardship, social responsibility, and ethical governance. Through continuous innovation and responsible decision-making, CubeGrid strives to create lasting value while contributing to a more sustainable and resilient future.</p>' . $lorem2,
                'button_text' => '',
                'image' => '/images/sustain-4.jpg',
                'image_alt' => 'Aerial view of winding forest road',
                'features' => [],
                'badges' => [],
                'footer_body' => self::LOREM_LONG,
            ], 'Sustainability'],
        ]);
    }

    private function csr(): void
    {
        $lorem2 = '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tenetur modi, quis quaerat commodi ducimus aperiam harum nihil. Consequatur modi nostrum harum consectetur voluptates numquam iste nulla repellendus officia aspernatur. nostrum harum consectetur voluptates numquam iste nulla repellendus officia aspernatur.</p>';

        $this->page('csr', 'Corporate Social Responsibility', [
            $this->banner('Corporate Social Responsibility'),
            ['media_text', [
                'layout' => 'feature',
                'image_position' => 'left',
                'label' => '',
                'heading' => 'Corporate Social Responsibility',
                'body' => '<p>Corporate Social Responsibility (CSR) has become an integral part of responsible and sustainable business practices today. At CubeGrid, CSR goes beyond statutory compliance and is deeply embedded into the company’s vision, mission, and values. Through meaningful initiatives focused on community development, education, environmental sustainability, healthcare, and social well-being, CubeGrid strives to create a positive and lasting impact on society while contributing to inclusive growth.</p>' . $lorem2,
                'button_text' => '',
                'image' => '/images/csr.jpg',
                'image_alt' => 'Community programme',
                'features' => [],
                'badges' => [],
                'footer_body' => self::LOREM_LONG,
            ], 'CSR'],
        ]);
    }

    private const LOREM_LONG = '<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus autem architecto molestiae eveniet explicabo, tempora delectus omnis, maxime obcaecati voluptatem ipsa totam facere ab expedita exercitationem. Quam corporis molestiae blanditiis soluta quidem expedita vero facere doloremque iste animi sapiente, numquam perferendis minus perspiciatis aperiam. Magni facilis, maiores tempore facere sequi, officia doloremque inventore exercitationem deleniti sit eveniet? Perferendis molestiae ipsum voluptatibus reiciendis esse id, magnam non accusamus dignissimos repudiandae repellat amet deserunt ab quod rerum. Saepe aliquid laboriosam adipisci et voluptatibus tempora commodi illum, ipsum officiis nam, delectus eius amet aspernatur vero incidunt pariatur in nesciunt neque quam dolor esse!</p>';

    private function investors(): void
    {
        $this->page('investors', 'Our Investor', [
            $this->banner('Our Investor', '/images/investor-2.png'),
            ['logo_intro', [
                'heading' => 'I Squared Capital',
                'lead' => 'Cube Grid Advisors is a portfolio company of I Squared Capital — the leading independent global infrastructure investor.',
                'body' => '<p>I Squared Capital is a leading independent global infrastructure investment manager with <strong>$50 billion+</strong> in assets under management. Founded in 2012 by former senior executives at Morgan Stanley, I Squared builds and scales essential infrastructure businesses that deliver critical services to millions of people worldwide. With a portfolio of <strong>90+ companies</strong> operating across <strong>70+ countries</strong> and a team of <strong>300+ professionals</strong> across <strong>9 global offices</strong>, I Squared is known for developing mid-market companies into scaled infrastructure leaders.</p>',
                'image' => '/images/client/isqaure-2.png',
            ], 'Introduction'],
            ['stats_band', [
                'style' => 'boxed',
                'items' => [
                    ['prefix' => '$', 'value' => 60, 'suffix' => 'B', 'label' => 'Assets Under Mgmt', 'icon' => 'zap', 'animate' => true],
                    ['prefix' => '', 'value' => 100, 'suffix' => '+', 'label' => 'Portfolio Companies', 'icon' => 'zap', 'animate' => true],
                    ['prefix' => '', 'value' => 115, 'suffix' => '+', 'label' => 'Countries', 'icon' => 'zap', 'animate' => true],
                    ['prefix' => '', 'value' => 360, 'suffix' => '+', 'label' => 'Professionals', 'icon' => 'zap', 'animate' => true],
                    ['prefix' => '', 'value' => 9, 'suffix' => '', 'label' => 'Global Offices', 'icon' => 'zap', 'animate' => true],
                    ['prefix' => '', 'value' => 2012, 'suffix' => '', 'label' => 'Founded', 'icon' => 'zap', 'animate' => false],
                ],
            ], 'Key numbers'],
            ['logo_cards', [
                'heading' => "I Squared Capital's India Platforms",
                'intro' => '',
                'items' => array_map(fn ($p) => [
                    'logo' => $p['icon'],
                    'name' => $p['name'],
                    'description' => $p['description'],
                    'highlight' => false,
                ], $this->json('platforms')),
            ], 'India platforms'],
        ]);
    }

    private function milestones(): void
    {
        $this->page('milestones', 'Milestones & Achievements', [
            $this->banner('Milestones & Achivements', '/images/milestone.webp'),
            ['timeline', ['items' => $this->json('milestones')], 'Timeline'],
        ]);
    }

    private function teams(): void
    {
        $this->page('teams', 'Management Team', [
            $this->banner('Management Team', '/images/team-2.png'),
            ['team_grid', [
                'intro' => 'Our leadership team is expanding rapidly. Each CXO being onboarded brings 30+ years of hands-on experience in developing, constructing, and operating infrastructure assets at scale — with 150+ years of combined experience across transmission, storage, distribution, nuclear, and hydrogen.',
                'group' => 'board',
                'read_more_text' => 'Read more',
                'quote' => '"Building the team that builds India\'s grid".',
            ], 'Team'],
        ]);
    }

    /* ------------------------------------------------------------------ */
    /*  Media                                                              */
    /* ------------------------------------------------------------------ */

    private function posts(): void
    {
        $this->page('blogs', 'Our Blogs', [
            $this->banner('Our Blogs', '/images/news.jpg'),
            ['posts_grid', ['style' => 'list', 'post_type' => 'blog', 'limit' => 0, 'read_more_text' => 'Read More'], 'Blog posts'],
        ]);

        $this->page('news', 'News & Updates', [
            $this->banner('News & Updates', '/images/news.jpg'),
            ['posts_grid', ['style' => 'list', 'post_type' => 'all', 'limit' => 0, 'read_more_text' => 'Read More'], 'News posts'],
        ]);
    }

    private function events(): void
    {
        $this->page('events', 'Events', [
            $this->banner('Events', '/images/events.png'),
            ['events_list', ['button_text' => 'Coming Soon', 'button_link' => '#'], 'Events'],
        ]);
    }

    /* ------------------------------------------------------------------ */
    /*  Contact                                                            */
    /* ------------------------------------------------------------------ */

    private function contactUs(): void
    {
        $this->page('contact-us', 'Contact Us', [
            $this->banner('Contact Us', '/images/contact-3.jpg'),
            ['contact_split', [
                'label' => 'Connect',
                'heading' => 'Cube Grid Advisors Private Limited',
                'intro' => "<p>Whether you're a lender, EPC partner, technology provider, government agency, or future team member — let's build India's energy future together.</p>",
                'side_image' => '/images/blue-gradient.jpg',
                'contacts' => [
                    ['icon' => 'mail', 'title' => 'Email', 'value' => '', 'setting' => 'contact_email'],
                    ['icon' => 'phone', 'title' => 'Phone Number', 'value' => '', 'setting' => 'contact_phone'],
                    ['icon' => 'map-pin', 'title' => 'Address', 'value' => '', 'setting' => 'contact_address'],
                ],
                'features' => [
                    ['icon' => 'building-2', 'title' => 'Lenders & DFIs', 'text' => 'ECAs, ADB, KfW, JICA, JBIC, IFC, AIIB, EIB, US DFC'],
                    ['icon' => 'settings', 'title' => 'EPC & Technology', 'text' => 'Equipment OEMs, engineering firms, technology providers'],
                    ['icon' => 'landmark', 'title' => 'Government', 'text' => 'CERC, CEA, CTU, STUs, state agencies'],
                    ['icon' => 'globe', 'title' => 'Land & Development', 'text' => 'Site opportunities, JV partners, co-developers'],
                ],
                'form_heading' => 'Get in Touch',
                'form_intro' => 'Fill in the form and our team will get back to you.',
                'form_type' => 'contact',
                'submit_text' => 'Send Message',
                'fields' => [
                    $this->field('name', 'Full Name', 'text', ['required' => true]),
                    $this->field('company', 'Company'),
                    $this->field('email', 'Email Address', 'email', ['required' => true]),
                    $this->field('phone', 'Phone Number', 'tel'),
                    $this->field('enquiry_type', 'Enquiry Type', 'select', ['options' => ['General Enquiry', 'Partnership', 'Feedback', 'Other']]),
                    $this->field('message', 'Message', 'textarea', ['placeholder' => 'Write Here...', 'required' => true]),
                ],
            ], 'Contact details & form'],
            ['map_embed', ['url' => ContentSeeder::MAP_URL, 'title' => 'Registered Office Map - Gurugram'], 'Map'],
        ]);
    }

    private function enquiry(): void
    {
        $this->page('enquiry', 'Enquiry', [
            $this->banner('Enquiry', '/images/contact.jpg'),
            ['form_section', [
                'label' => 'Get In Touch',
                'heading' => 'Tell Us About Your Project',
                'intro' => "<p>Share your requirements with our team. We'll connect with you to discuss your enquiry and explore how we can work together.</p>",
                'background' => 'white',
                'label_style' => 'above',
                'form_type' => 'enquiry',
                'submit_text' => 'Submit Enquiry',
                'sending_text' => 'Submitting…',
                'success_message' => 'Thank you for your enquiry. Our team will get back to you soon!',
                'fields' => [
                    $this->field('name', 'Full Name', 'text', ['width' => 'half', 'placeholder' => 'Enter your full name', 'required' => true]),
                    $this->field('company', 'Company Name', 'text', ['width' => 'half', 'placeholder' => 'Enter company name', 'required' => true]),
                    $this->field('email', 'Email Address', 'email', ['width' => 'half', 'placeholder' => 'Enter email address', 'required' => true]),
                    $this->field('phone', 'Phone Number', 'tel', ['width' => 'half', 'placeholder' => 'Enter phone number', 'required' => true]),
                    $this->field('enquiry_type', 'Enquiry Type', 'select', ['placeholder' => 'Select enquiry type', 'required' => true, 'options' => [
                        'Lender / DFI / ECA', 'EPC / Technology Partner', 'Government / Regulatory', 'Land / Site Owner', 'Co-Developer / JV Partner', 'Feedback', 'Other',
                    ]]),
                    $this->field('state', 'State', 'text', ['width' => 'half', 'placeholder' => 'Enter state', 'required' => true]),
                    $this->field('city', 'City', 'text', ['width' => 'half', 'placeholder' => 'Enter city', 'required' => true]),
                    $this->field('message', 'Your Message', 'textarea', ['placeholder' => 'Tell us about your project or requirements...', 'required' => true]),
                ],
            ], 'Enquiry form'],
        ]);
    }

    private function legal(): void
    {
        $legal = $this->json('legal');

        $this->page('privacy-policy', 'Privacy Policy', [
            $this->banner('Privacy Policy', '/images/privacy.jpg'),
            ['rich_text', ['body' => $legal['privacy-policy'], 'width' => 'wide'], 'Policy text'],
        ]);

        $this->page('terms-service', 'Terms of Service', [
            $this->banner('Terms of Service', '/images/tc.jpg'),
            ['rich_text', ['body' => $legal['terms-service'], 'width' => 'wide'], 'Terms text'],
        ]);
    }
}
