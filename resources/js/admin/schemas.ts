/**
 * Schemas that drive the admin "Pages" editor.
 *
 * Each page declares sections of typed fields; the admin renders a form from
 * them and stores the result as JSON in `page_contents`. Frontend pages read
 * the same keys (with their own hardcoded fallbacks), so the UI stays identical
 * until content is edited.
 */

export type FieldType =
    | 'text'
    | 'textarea'
    | 'html'
    | 'image'
    | 'select'
    | 'number'
    | 'list'
    | 'object';

export interface FieldSpec {
    key: string;
    label: string;
    type: FieldType;
    hint?: string;
    placeholder?: string;
    options?: { value: string; label: string }[];
    columns?: { key: string; label: string; type?: 'text' | 'textarea'; placeholder?: string }[];
    stringMode?: boolean;
    fields?: FieldSpec[];
}

export interface PageSchema {
    key: string;
    title: string;
    description: string;
    sections: { title?: string; fields: FieldSpec[] }[];
}

const bannerSection = (extra: FieldSpec[] = []) => ({
    title: 'Page Banner',
    fields: [
        { key: 'banner_title', label: 'Banner Title', type: 'text' as const },
        { key: 'banner_image', label: 'Banner Image', type: 'image' as const },
        ...extra,
    ],
});

export const PAGE_SCHEMAS: PageSchema[] = [
    {
        key: 'home',
        title: 'Home',
        description: 'Hero slider content lives under Banners. This covers the rest of the home page.',
        sections: [
            {
                title: 'Stats',
                fields: [
                    {
                        key: 'stats',
                        label: 'Stat cards',
                        type: 'list',
                        hint: 'Numbers shown below the hero (value, suffix, label).',
                        columns: [
                            { key: 'value', label: 'Value', placeholder: '100' },
                            { key: 'suffix', label: 'Suffix', placeholder: '+' },
                            { key: 'unit', label: 'Unit', placeholder: 'GW' },
                            { key: 'label', label: 'Label', placeholder: "India's RE Target 2030" },
                        ],
                    },
                ],
            },
            {
                title: 'Closing CTA band',
                fields: [
                    { key: 'cta_heading', label: 'CTA heading', type: 'text', placeholder: 'Empowering the Future of Energy Transmission' },
                ],
            },
        ],
    },
    {
        key: 'teams',
        title: 'Management Team',
        description: 'Board & leadership intro text. Individual members are managed under Team.',
        sections: [
            bannerSection(),
            {
                title: 'Page Copy',
                fields: [
                    { key: 'intro', label: 'Intro paragraph', type: 'textarea' },
                    { key: 'quote', label: 'Closing quote', type: 'text' },
                ],
            },
        ],
    },
    {
        key: 'blogs',
        title: 'Blogs',
        description: 'Banner for the blogs listing page. Posts are managed under Blogs & News.',
        sections: [bannerSection()],
    },
    {
        key: 'news',
        title: 'News & Updates',
        description: 'Banner for the news listing page. Posts are managed under Blogs & News.',
        sections: [bannerSection()],
    },
    {
        key: 'events',
        title: 'Events',
        description: 'Banner for the events page. Individual events are managed under Events.',
        sections: [bannerSection()],
    },
    {
        key: 'about-us',
        title: 'About Us',
        description: 'Every section of the about page — intro, vision, mission and values.',
        sections: [
            bannerSection(),
            {
                title: 'Who We Are (intro)',
                fields: [
                    { key: 'who_label', label: 'Small label', type: 'text', placeholder: 'Who We Are' },
                    { key: 'who_title', label: 'Heading', type: 'text', placeholder: 'We Build Complex Infrastructure' },
                    { key: 'who_lead', label: 'Lead line', type: 'text', placeholder: 'Where Others See Complexity, We See Opportunity' },
                    { key: 'who_p1', label: 'Paragraph 1', type: 'html' },
                    { key: 'who_p2', label: 'Paragraph 2', type: 'html' },
                    { key: 'who_p3', label: 'Paragraph 3', type: 'html' },
                    { key: 'who_image', label: 'Side image', type: 'image' },
                ],
            },
            {
                title: 'Business Lines (cards under intro)',
                fields: [
                    {
                        key: 'initiatives',
                        label: 'Business lines',
                        type: 'list',
                        hint: 'Leave empty to keep the current two cards.',
                        columns: [{ key: 'label', label: 'Card label', placeholder: 'Transmission — HVAC / HVDC / Substations' }],
                    },
                ],
            },
            {
                title: 'Vision & Mission',
                fields: [
                    { key: 'vm_heading', label: 'Section heading', type: 'text', placeholder: 'Our Vision & Mission' },
                    { key: 'vm_intro', label: 'Section intro', type: 'html' },
                    { key: 'vision_label', label: 'Vision small label', type: 'text', placeholder: "Where we're headed" },
                    { key: 'vision_title', label: 'Vision heading', type: 'text', placeholder: 'Our Vision' },
                    { key: 'vision_text', label: 'Vision text', type: 'html' },
                    { key: 'mission_label', label: 'Mission small label', type: 'text', placeholder: 'What we do' },
                    { key: 'mission_title', label: 'Mission heading', type: 'text', placeholder: 'Our Mission' },
                    { key: 'mission_text', label: 'Mission text', type: 'html' },
                ],
            },
            {
                title: 'Core Values strip (same cards also render on Our Values page)',
                fields: [
                    { key: 'values_heading', label: 'Section heading', type: 'text', placeholder: 'Our Core Values' },
                    { key: 'values_intro', label: 'Section intro', type: 'text', placeholder: 'Five values. One culture. Every project, every decision.' },
                    {
                        key: 'values',
                        label: 'Value cards',
                        type: 'list',
                        hint: 'Title + subtitle shown on the About page cards.',
                        columns: [
                            { key: 'title', label: 'Title', placeholder: 'Integrity' },
                            { key: 'subtitle', label: 'Subtitle', placeholder: 'We do the right thing — always, and transparently.' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: 'contact-us',
        title: 'Contact Us',
        description: 'Every section of the contact page. Email/phone/address fall back to the Settings values.',
        sections: [
            bannerSection(),
            {
                title: 'Intro block',
                fields: [
                    { key: 'section_label', label: 'Small label', type: 'text', placeholder: 'Connect' },
                    { key: 'heading', label: 'Heading', type: 'text', placeholder: 'Cube Grid Advisors Private Limited' },
                    { key: 'intro', label: 'Intro paragraph', type: 'html' },
                ],
            },
            {
                title: 'Form card',
                fields: [
                    { key: 'form_heading', label: 'Form heading', type: 'text', placeholder: 'Get in Touch' },
                    { key: 'form_intro', label: 'Form intro line', type: 'text' },
                ],
            },
            {
                title: 'Feature cards (under the intro)',
                fields: [
                    {
                        key: 'features',
                        label: 'Feature cards',
                        type: 'list',
                        hint: 'Icons stay fixed — edit the text here.',
                        columns: [
                            { key: 'title', label: 'Title', placeholder: 'Lenders & DFIs' },
                            { key: 'desc', label: 'Description', placeholder: 'ECAs, ADB, KfW, JICA…' },
                        ],
                    },
                ],
            },
            {
                title: 'Map',
                fields: [
                    { key: 'map_iframe', label: 'Google Maps embed URL', type: 'text', hint: 'Leave empty to use the contact_map_iframe setting.' },
                ],
            },
        ],
    },
    {
        key: 'enquiry',
        title: 'Enquiry',
        description: 'Banner and the form page copy.',
        sections: [
            bannerSection(),
            {
                title: 'Copy',
                fields: [
                    { key: 'section_label', label: 'Small label', type: 'text', placeholder: 'Get In Touch' },
                    { key: 'heading', label: 'Heading', type: 'text', placeholder: 'Tell Us About Your Project' },
                    { key: 'intro', label: 'Intro paragraph', type: 'html' },
                ],
            },
        ],
    },
    {
        key: 'career',
        title: 'Careers',
        description: 'Open roles, section copy and the application form intro.',
        sections: [
            bannerSection(),
            {
                title: 'Open roles',
                fields: [
                    { key: 'hiring_heading', label: 'Heading', type: 'text', placeholder: 'We Are Hiring For' },
                    { key: 'hiring_intro', label: 'Intro', type: 'html' },
                    {
                        key: 'roles',
                        label: 'Roles',
                        type: 'list',
                        hint: 'Responsibilities & requirements: one point per line. Leave empty to keep the current demo roles.',
                        columns: [
                            { key: 'title', label: 'Job title', placeholder: 'HVDC Transmission Design Lead Engineer' },
                            { key: 'department', label: 'Department', placeholder: 'Engineering & Architecture' },
                            { key: 'location', label: 'Location', placeholder: 'Gurugram, India' },
                            { key: 'type', label: 'Type', placeholder: 'Full-Time' },
                            { key: 'experience', label: 'Experience', placeholder: '5-8 Years' },
                            { key: 'summary', label: 'Summary', type: 'textarea' },
                            { key: 'responsibilities', label: 'Responsibilities (one per line)', type: 'textarea' },
                            { key: 'requirements', label: 'Requirements (one per line)', type: 'textarea' },
                        ],
                    },
                ],
            },
            {
                title: 'Application form',
                fields: [
                    { key: 'apply_heading', label: 'Form heading', type: 'text', placeholder: 'Submit Your Application' },
                    { key: 'apply_intro', label: 'Form intro', type: 'html' },
                ],
            },
        ],
    },
    {
        key: 'our-values',
        title: 'Our Values',
        description: 'Intro and the five value cards (title, description, in-practice points).',
        sections: [
            bannerSection(),
            {
                title: 'Intro',
                fields: [
                    { key: 'intro', label: 'Intro paragraph', type: 'html' },
                ],
            },
            {
                title: 'Value cards',
                fields: [
                    {
                        key: 'values',
                        label: 'Values',
                        type: 'list',
                        hint: 'In-practice points: one per line. Leave everything empty to keep the current five values.',
                        columns: [
                            { key: 'title', label: 'Title', placeholder: 'Integrity' },
                            { key: 'subtitle', label: 'Subtitle', placeholder: 'We do the right thing — always, and transparently.' },
                            { key: 'icon', label: 'Icon URL', placeholder: '/images/icons/high-voltage.png' },
                            { key: 'description', label: 'Description', type: 'textarea' },
                            { key: 'in_practice', label: 'In practice (one point per line)', type: 'textarea' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: 'milestones',
        title: 'Milestones',
        description: 'The animated year-by-year timeline.',
        sections: [
            bannerSection(),
            {
                title: 'Timeline',
                fields: [
                    {
                        key: 'timeline',
                        label: 'Milestones',
                        type: 'list',
                        hint: 'Shown in order — add a row per milestone year.',
                        columns: [
                            { key: 'year', label: 'Year', placeholder: '2026' },
                            { key: 'title', label: 'Title', placeholder: 'The Beginning' },
                            { key: 'image', label: 'Image URL', placeholder: '/images/power-grid-3.jpg' },
                            { key: 'description', label: 'Description', type: 'textarea' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: 'projects',
        title: 'Projects',
        description: 'Section copy and the project cards.',
        sections: [
            bannerSection(),
            {
                title: 'Section copy',
                fields: [
                    { key: 'section_label', label: 'Small label', type: 'text', placeholder: 'SELECTED PROJECTS' },
                    { key: 'section_heading', label: 'Heading', type: 'text', placeholder: 'We Build Complex Infrastructure' },
                    { key: 'section_intro', label: 'Intro paragraph', type: 'html' },
                ],
            },
            {
                title: 'Project cards',
                fields: [
                    {
                        key: 'projects',
                        label: 'Projects',
                        type: 'list',
                        hint: 'Card image, title, category badge, location and description.',
                        columns: [
                            { key: 'title', label: 'Title', placeholder: 'Coming Soon...' },
                            { key: 'category', label: 'Badge', placeholder: 'under construction' },
                            { key: 'location', label: 'Location', placeholder: 'North India, India' },
                            { key: 'image', label: 'Image URL', placeholder: 'images/transmission-infra.jpg' },
                            { key: 'description', label: 'Description', type: 'textarea' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: 'investors',
        title: 'Our Investors',
        description: 'Intro, animated stats and the platform cards.',
        sections: [
            bannerSection(),
            {
                title: 'Intro',
                fields: [
                    { key: 'intro_heading', label: 'Heading', type: 'text', placeholder: 'I Squared Capital' },
                    { key: 'intro_lead', label: 'Lead line', type: 'text' },
                    { key: 'intro_body', label: 'Body', type: 'html' },
                    { key: 'intro_image', label: 'Logo image', type: 'image' },
                ],
            },
            {
                title: 'Stats strip',
                fields: [
                    {
                        key: 'stats',
                        label: 'Stats',
                        type: 'list',
                        hint: 'Set "Plain" to 1 to show the number without animation (e.g. the founded year).',
                        columns: [
                            { key: 'value', label: 'Value', placeholder: '60' },
                            { key: 'prefix', label: 'Prefix', placeholder: '$' },
                            { key: 'suffix', label: 'Suffix', placeholder: 'B' },
                            { key: 'plain', label: 'Plain (1 = no animation)', placeholder: '0' },
                            { key: 'label', label: 'Caption', placeholder: 'Assets Under Mgmt' },
                        ],
                    },
                ],
            },
            {
                title: 'Platforms',
                fields: [
                    { key: 'platforms_heading', label: 'Section heading', type: 'text' },
                    {
                        key: 'platforms',
                        label: 'Platform cards',
                        type: 'list',
                        columns: [
                            { key: 'name', label: 'Name', placeholder: 'Cube Highways' },
                            { key: 'tag', label: 'Tag', placeholder: 'Roads' },
                            { key: 'icon', label: 'Logo URL', placeholder: '/images/client/cube-highway.png' },
                            { key: 'description', label: 'Description', type: 'textarea' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: 'pillers',
        title: 'Pillars (Overview)',
        description: 'Section copy and the business-pillar cards. Individual pillar pages have their own editors below.',
        sections: [
            bannerSection(),
            {
                title: 'Section copy',
                fields: [
                    { key: 'section_label', label: 'Small label', type: 'text', placeholder: 'Our Six Pillars' },
                    { key: 'section_heading', label: 'Heading', type: 'text', placeholder: 'Smart Solutions for Power Transmission' },
                    { key: 'section_intro', label: 'Intro paragraph', type: 'html' },
                ],
            },
            {
                title: 'Pillar cards',
                fields: [
                    {
                        key: 'services',
                        label: 'Pillar cards',
                        type: 'list',
                        hint: 'Each card links to its pillar page (/pillar/<slug>).',
                        columns: [
                            { key: 'title', label: 'Title', placeholder: 'Transmission Infrastructure' },
                            { key: 'subtitle', label: 'Sub-badge', placeholder: 'SUBSTATIONS • HVAC • HVDC • LINES' },
                            { key: 'href', label: 'Link', placeholder: '/pillar/transmission-infrastructure' },
                            { key: 'image', label: 'Image URL', placeholder: '/images/transmission-infra-2.png' },
                            { key: 'desc', label: 'Description', type: 'textarea' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: 'pillar-transmission-infrastructure',
        title: 'Pillar — Transmission Infrastructure',
        description: 'Content of the Transmission Infrastructure pillar page.',
        sections: [
            bannerSection([
                { key: 'pillar_title', label: 'Pillar heading', type: 'text', placeholder: 'Transmission Infrastructure' },
                { key: 'pillar_subtitle', label: 'Sub-badge', type: 'text', placeholder: 'SUBSTATIONS • HVAC • HVDC • LINES' },
                { key: 'pillar_desc', label: 'Intro description', type: 'html' },
                { key: 'pillar_image', label: 'Hero image', type: 'image' },
            ]),
            {
                title: 'Body section',
                fields: [
                    { key: 'section_heading', label: 'Heading', type: 'text', placeholder: "Building the infrastructure behind India's energy future." },
                    { key: 'section_body', label: 'Body text', type: 'html' },
                    {
                        key: 'features',
                        label: 'Feature tags',
                        type: 'list',
                        hint: 'Small cards under the body text.',
                        columns: [{ key: 'feature', label: 'Tag', placeholder: 'ISTS' }],
                    },
                ],
            },
            {
                title: 'CTA band',
                fields: [
                    { key: 'cta_heading', label: 'Heading', type: 'text', placeholder: "Let's Build Your Next Energy Project" },
                    { key: 'cta_text', label: 'Text', type: 'text' },
                    { key: 'cta_button', label: 'Button label', type: 'text', placeholder: 'Enquire Now' },
                    { key: 'cta_link', label: 'Button link', type: 'text', placeholder: '/enquiry' },
                ],
            },
        ],
    },
    {
        key: 'pillar-epc-for-renewable-evacuation',
        title: 'Pillar — EPC for Renewable Evacuation',
        description: 'Content of the EPC for Renewable Evacuation pillar page.',
        sections: [
            bannerSection([
                { key: 'pillar_title', label: 'Pillar heading', type: 'text', placeholder: 'EPC for Renewable Evacuation' },
                { key: 'pillar_subtitle', label: 'Sub-badge', type: 'text', placeholder: 'TRANSMISSION LINES FOR RE PROJECTS' },
                { key: 'pillar_desc', label: 'Intro description', type: 'html' },
                { key: 'pillar_image', label: 'Hero image', type: 'image' },
            ]),
            {
                title: 'Body section',
                fields: [
                    { key: 'section_heading', label: 'Heading', type: 'text', placeholder: "Building the infrastructure behind India's energy future." },
                    { key: 'section_body', label: 'Body text', type: 'html' },
                    {
                        key: 'features',
                        label: 'Feature tags',
                        type: 'list',
                        hint: 'Small cards under the body text.',
                        columns: [{ key: 'feature', label: 'Tag', placeholder: 'ISTS' }],
                    },
                ],
            },
            {
                title: 'CTA band',
                fields: [
                    { key: 'cta_heading', label: 'Heading', type: 'text', placeholder: "Let's Build Your Next Energy Project" },
                    { key: 'cta_text', label: 'Text', type: 'text' },
                    { key: 'cta_button', label: 'Button label', type: 'text', placeholder: 'Enquire Now' },
                    { key: 'cta_link', label: 'Button link', type: 'text', placeholder: '/enquiry' },
                ],
            },
        ],
    },
    {
        key: 'pillar-pumped-hydro-storage',
        title: 'Pillar — Pumped Hydro Storage',
        description: 'Content of the Pumped Hydro Storage pillar page.',
        sections: [
            bannerSection([
                { key: 'pillar_title', label: 'Pillar heading', type: 'text', placeholder: 'Pumped Hydro Storage' },
                { key: 'pillar_subtitle', label: 'Sub-badge', type: 'text', placeholder: 'LONG-DURATION ENERGY STORAGE' },
                { key: 'pillar_desc', label: 'Intro description', type: 'html' },
                { key: 'pillar_image', label: 'Hero image', type: 'image' },
            ]),
            {
                title: 'Body section',
                fields: [
                    { key: 'section_heading', label: 'Heading', type: 'text', placeholder: "Building the infrastructure behind India's energy future." },
                    { key: 'section_body', label: 'Body text', type: 'html' },
                    {
                        key: 'features',
                        label: 'Feature tags',
                        type: 'list',
                        hint: 'Small cards under the body text.',
                        columns: [{ key: 'feature', label: 'Tag', placeholder: 'ISTS' }],
                    },
                ],
            },
            {
                title: 'CTA band',
                fields: [
                    { key: 'cta_heading', label: 'Heading', type: 'text', placeholder: "Let's Build Your Next Energy Project" },
                    { key: 'cta_text', label: 'Text', type: 'text' },
                    { key: 'cta_button', label: 'Button label', type: 'text', placeholder: 'Enquire Now' },
                    { key: 'cta_link', label: 'Button link', type: 'text', placeholder: '/enquiry' },
                ],
            },
        ],
    },
    {
        key: 'pillar-distribution-privatization',
        title: 'Pillar — Distribution Privatization',
        description: 'Content of the Distribution Privatization pillar page.',
        sections: [
            bannerSection([
                { key: 'pillar_title', label: 'Pillar heading', type: 'text', placeholder: 'Distribution Privatization' },
                { key: 'pillar_subtitle', label: 'Sub-badge', type: 'text', placeholder: 'DISCOM OPERATIONS & MODERNIZATION' },
                { key: 'pillar_desc', label: 'Intro description', type: 'html' },
                { key: 'pillar_image', label: 'Hero image', type: 'image' },
            ]),
            {
                title: 'Body section',
                fields: [
                    { key: 'section_heading', label: 'Heading', type: 'text', placeholder: "Building the infrastructure behind India's energy future." },
                    { key: 'section_body', label: 'Body text', type: 'html' },
                    {
                        key: 'features',
                        label: 'Feature tags',
                        type: 'list',
                        hint: 'Small cards under the body text.',
                        columns: [{ key: 'feature', label: 'Tag', placeholder: 'ISTS' }],
                    },
                ],
            },
            {
                title: 'CTA band',
                fields: [
                    { key: 'cta_heading', label: 'Heading', type: 'text', placeholder: "Let's Build Your Next Energy Project" },
                    { key: 'cta_text', label: 'Text', type: 'text' },
                    { key: 'cta_button', label: 'Button label', type: 'text', placeholder: 'Enquire Now' },
                    { key: 'cta_link', label: 'Button link', type: 'text', placeholder: '/enquiry' },
                ],
            },
        ],
    },
    {
        key: 'pillar-nuclear-power-shanti',
        title: 'Pillar — Nuclear Power — Shanti',
        description: 'Content of the Nuclear Power — Shanti pillar page.',
        sections: [
            bannerSection([
                { key: 'pillar_title', label: 'Pillar heading', type: 'text', placeholder: 'Nuclear Power — Shanti' },
                { key: 'pillar_subtitle', label: 'Sub-badge', type: 'text', placeholder: 'CLEAN BASELOAD ENERGY' },
                { key: 'pillar_desc', label: 'Intro description', type: 'html' },
                { key: 'pillar_image', label: 'Hero image', type: 'image' },
            ]),
            {
                title: 'Body section',
                fields: [
                    { key: 'section_heading', label: 'Heading', type: 'text', placeholder: "Building the infrastructure behind India's energy future." },
                    { key: 'section_body', label: 'Body text', type: 'html' },
                    {
                        key: 'features',
                        label: 'Feature tags',
                        type: 'list',
                        hint: 'Small cards under the body text.',
                        columns: [{ key: 'feature', label: 'Tag', placeholder: 'ISTS' }],
                    },
                ],
            },
            {
                title: 'CTA band',
                fields: [
                    { key: 'cta_heading', label: 'Heading', type: 'text', placeholder: "Let's Build Your Next Energy Project" },
                    { key: 'cta_text', label: 'Text', type: 'text' },
                    { key: 'cta_button', label: 'Button label', type: 'text', placeholder: 'Enquire Now' },
                    { key: 'cta_link', label: 'Button link', type: 'text', placeholder: '/enquiry' },
                ],
            },
        ],
    },
    {
        key: 'pillar-green-hydrogen',
        title: 'Pillar — Green Hydrogen',
        description: 'Content of the Green Hydrogen pillar page.',
        sections: [
            bannerSection([
                { key: 'pillar_title', label: 'Pillar heading', type: 'text', placeholder: 'Green Hydrogen' },
                { key: 'pillar_subtitle', label: 'Sub-badge', type: 'text', placeholder: 'ELECTROLYZER & HYDROGEN INFRASTRUCTURE' },
                { key: 'pillar_desc', label: 'Intro description', type: 'html' },
                { key: 'pillar_image', label: 'Hero image', type: 'image' },
            ]),
            {
                title: 'Body section',
                fields: [
                    { key: 'section_heading', label: 'Heading', type: 'text', placeholder: "Building the infrastructure behind India's energy future." },
                    { key: 'section_body', label: 'Body text', type: 'html' },
                    {
                        key: 'features',
                        label: 'Feature tags',
                        type: 'list',
                        hint: 'Small cards under the body text.',
                        columns: [{ key: 'feature', label: 'Tag', placeholder: 'ISTS' }],
                    },
                ],
            },
            {
                title: 'CTA band',
                fields: [
                    { key: 'cta_heading', label: 'Heading', type: 'text', placeholder: "Let's Build Your Next Energy Project" },
                    { key: 'cta_text', label: 'Text', type: 'text' },
                    { key: 'cta_button', label: 'Button label', type: 'text', placeholder: 'Enquire Now' },
                    { key: 'cta_link', label: 'Button link', type: 'text', placeholder: '/enquiry' },
                ],
            },
        ],
    },
    {
        key: 'certificates',
        title: 'Certificates',
        description: 'Section copy and the certificate cards.',
        sections: [
            bannerSection(),
            {
                title: 'Section copy',
                fields: [
                    { key: 'section_heading', label: 'Heading', type: 'text', placeholder: 'Verified Accreditations' },
                    { key: 'section_intro', label: 'Intro', type: 'html' },
                ],
            },
            {
                title: 'Certificate cards',
                fields: [
                    {
                        key: 'certificates',
                        label: 'Certificates',
                        type: 'list',
                        hint: 'Leave PDF URL as # to show a preview image on click.',
                        columns: [
                            { key: 'title', label: 'Title', placeholder: 'Coming Soon' },
                            { key: 'category', label: 'Category', placeholder: 'Quality Assurance' },
                            { key: 'image', label: 'Image URL', placeholder: '/images/certificate.jpg' },
                            { key: 'pdf_url', label: 'PDF URL', placeholder: '#' },
                            { key: 'file_size', label: 'File size', placeholder: '1.8 MB' },
                            { key: 'issued_year', label: 'Issued year', placeholder: '2024' },
                            { key: 'description', label: 'Description', type: 'textarea' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        key: 'sustainability',
        title: 'Sustainability',
        description: 'Image and all copy on the sustainability page.',
        sections: [
            bannerSection(),
            {
                title: 'Page content',
                fields: [
                    { key: 'hero_image', label: 'Side image', type: 'image' },
                    { key: 'heading', label: 'Heading', type: 'text', placeholder: 'Sustainability' },
                    { key: 'body_1', label: 'Paragraph 1', type: 'html' },
                    { key: 'body_2', label: 'Paragraph 2', type: 'html' },
                    { key: 'body_3', label: 'Closing paragraph', type: 'html' },
                ],
            },
        ],
    },
    {
        key: 'csr',
        title: 'CSR',
        description: 'Image and all copy on the CSR page.',
        sections: [
            bannerSection(),
            {
                title: 'Page content',
                fields: [
                    { key: 'hero_image', label: 'Side image', type: 'image' },
                    { key: 'heading', label: 'Heading', type: 'text' },
                    { key: 'body_1', label: 'Paragraph 1', type: 'html' },
                    { key: 'body_2', label: 'Paragraph 2', type: 'html' },
                    { key: 'body_3', label: 'Closing paragraph', type: 'html' },
                ],
            },
        ],
    },
    {
        key: 'privacy-policy',
        title: 'Privacy Policy',
        description: 'Banner and the full policy text (rich text editor).',
        sections: [
            bannerSection(),
            {
                title: 'Policy text',
                fields: [
                    { key: 'body', label: 'Full policy content', type: 'html', hint: 'Leave empty to keep the current default policy. Use headings, bold, lists and links freely.' },
                ],
            },
        ],
    },
    {
        key: 'terms-service',
        title: 'Terms of Service',
        description: 'Banner and the full terms text (rich text editor).',
        sections: [
            bannerSection(),
            {
                title: 'Terms text',
                fields: [
                    { key: 'body', label: 'Full terms content', type: 'html', hint: 'Leave empty to keep the current default terms.' },
                ],
            },
        ],
    },
    {
        key: 'life-at-cubegrid',
        title: 'Life @ CubeGrid',
        description: 'Intro, "why CubeGrid" hover cards and the careers CTA band.',
        sections: [
            bannerSection(),
            {
                title: 'Intro',
                fields: [
                    { key: 'intro_label', label: 'Small label', type: 'text', placeholder: 'working at cubegrid' },
                    { key: 'intro_heading', label: 'Heading', type: 'text' },
                    { key: 'intro_body', label: 'Paragraph', type: 'html' },
                    { key: 'intro_image', label: 'Side image', type: 'image' },
                ],
            },
            {
                title: 'Why CubeGrid — hover cards',
                fields: [
                    { key: 'why_heading', label: 'Section heading', type: 'text', placeholder: 'why CubeGrid' },
                    { key: 'why_intro', label: 'Section intro', type: 'html' },
                    {
                        key: 'cards',
                        label: 'Hover cards',
                        type: 'list',
                        hint: 'First card is large, the rest follow the layout automatically. Text appears on hover.',
                        columns: [
                            { key: 'title', label: 'Title', placeholder: 'People First' },
                            { key: 'image', label: 'Image URL', placeholder: '/images/people-first.jpg' },
                            { key: 'text', label: 'Hover text', type: 'textarea' },
                        ],
                    },
                ],
            },
            {
                title: 'Careers CTA band',
                fields: [
                    { key: 'cta_label', label: 'Small label', type: 'text', placeholder: 'Careers' },
                    { key: 'cta_heading', label: 'Heading', type: 'text' },
                    { key: 'cta_button', label: 'Button text', type: 'text', placeholder: 'View Open Vacancies' },
                    { key: 'cta_link', label: 'Button link', type: 'text', placeholder: '/career' },
                ],
            },
        ],
    },
    {
        key: 'home-2',
        title: 'Home Alternate (v2)',
        description: 'Video hero of the second home page. News section pulls from Blogs.',
        sections: [
            bannerSection([
                { key: 'hero_heading', label: 'Hero heading', type: 'text', hint: "Use ' [br] ' to force a line break." },
                { key: 'hero_text', label: 'Hero paragraph', type: 'text' },
                { key: 'hero_button', label: 'Button text', type: 'text' },
                { key: 'hero_button_href', label: 'Button link', type: 'text', hint: 'Empty = default animated button.' },
                { key: 'hero_video', label: 'Background video URL', type: 'text' },
            ]),
        ],
    },
    {
        key: 'home-3',
        title: 'Home Alternate (v3)',
        description: 'Video hero of the third home page. News section pulls from Blogs.',
        sections: [
            bannerSection([
                { key: 'hero_heading', label: 'Hero heading', type: 'text', hint: "Use ' [br] ' to force a line break." },
                { key: 'hero_text', label: 'Hero paragraph', type: 'text' },
                { key: 'hero_button', label: 'Button text', type: 'text' },
                { key: 'hero_button_href', label: 'Button link', type: 'text', hint: 'Empty = default animated button.' },
                { key: 'hero_video', label: 'Background video URL', type: 'text' },
            ]),
        ],
    },
];

export const getPageSchema = (key: string): PageSchema | undefined =>
    PAGE_SCHEMAS.find((p) => p.key === key);

/* ------------------------------------------------------------------ */
/* Settings schema                                                     */
/* ------------------------------------------------------------------ */

export interface SettingSpec {
    key: string;
    label: string;
    group: string;
    type: 'text' | 'textarea' | 'image' | 'url' | 'json' | 'linkgroups' | 'social' | 'investor';
    hint?: string;
}

export const SETTING_SPECS: SettingSpec[] = [
    { key: 'site_name', label: 'Site Name', group: 'General', type: 'text' },
    { key: 'logo', label: 'Logo (header)', group: 'General', type: 'image' },
    { key: 'logo_white', label: 'Logo (footer, white)', group: 'General', type: 'image' },
    { key: 'contact_email', label: 'Contact Email', group: 'Contact', type: 'text' },
    { key: 'contact_phone', label: 'Contact Phone', group: 'Contact', type: 'text' },
    { key: 'contact_address', label: 'Contact Address', group: 'Contact', type: 'textarea' },
    {
        key: 'footer_description',
        label: 'Footer Description',
        group: 'Footer',
        type: 'textarea',
        hint: 'Short paragraph shown under the footer logo.',
    },
    {
        key: 'footer_link_groups',
        label: 'Footer Link Columns',
        group: 'Footer',
        type: 'linkgroups',
        hint: 'The two link columns shown above the footer contact block.',
    },
    {
        key: 'social_links',
        label: 'Social Links',
        group: 'Social',
        type: 'social',
        hint: 'Facebook, Twitter/X, LinkedIn, YouTube — links open in a new tab.',
    },
    {
        key: 'investor_section',
        label: 'Investor Section (Home)',
        group: 'Home',
        type: 'investor',
        hint: 'The dark "Our Investors" band on the home page.',
    },
];
