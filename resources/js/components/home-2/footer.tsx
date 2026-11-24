import { usePage } from '@inertiajs/react';
import MaxWidthWrapper from '../max-width-wrapper';

const defaultCompanyLinks = [
    'Home',
    'About Company',
    'Products',
    'Solutions',
    'Industries We Serve',
    'Infrastructure / Facilities',
    'Careers',
];

const defaultResourceLinks = [
    'Transmission',
    'Renewable EPC',
    'Pumped Hydro',
    'Distribution',
    'Nuclear (Shanti)',
    'Green Hydrogen',
];

const Footer = () => {
    const { settings } = usePage<any>().props;

    const parseJson = (key: string) => {
        try {
            return settings?.[key] ? JSON.parse(settings[key]) : null;
        } catch {
            return null;
        }
    };

    const groups = parseJson('footer_link_groups');
    const quickLinks = Array.isArray(groups) && groups[0]?.links?.length ? groups[0] : null;
    const resourceGroup = Array.isArray(groups) && groups[1]?.links?.length ? groups[1] : null;

    const companyLinks: any[] = quickLinks
        ? quickLinks.links.map((l: any) => ({ title: l.title, href: l.href || '#' }))
        : defaultCompanyLinks.map((t) => ({ title: t, href: '#' }));
    const resourceLinks: any[] = resourceGroup
        ? resourceGroup.links.map((l: any) => ({ title: l.title, href: l.href || '#' }))
        : defaultResourceLinks.map((t) => ({ title: t, href: '#' }));

    const socials = parseJson('social_links') || [];
    const socialUrl = (key: string, idx: number) => {
        const found = Array.isArray(socials) ? socials.find((s: any) => s?.key === key) : null;
        return found?.url || (Array.isArray(socials) ? socials[idx]?.url : null) || '#';
    };

    const logoWhite: string = settings?.logo_white || '/images/logo-new-white.png';
    const footerDescription: string = settings?.footer_description || '';
    const contactAddress: string = settings?.contact_address || '7th Floor, Block B, Vatika Business Park Sohna Road, Badshahpur, Sector-49 Gurugram, Haryana - 122018';
    const contactPhone: string = settings?.contact_phone || '+91 123 4567 890';
    const contactPhoneHref = 'tel:' + contactPhone.replace(/[^0-9+]/g, '');
    const contactEmail: string = settings?.contact_email || 'rajesh.suri@cubegrid.in';

    return (
        <footer className="relative bg-primary pt-16 pb-4 text-white">
            {/* Optional: Subtle gradient overlay for depth */}
            {/* <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20 pointer-events-none" /> */}

            <MaxWidthWrapper className="relative z-10">
                {/* Main Footer Grid */}
                <div className="mb-8 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.75fr_3fr] lg:gap-8">
                    {/* Brand & Socials (Col 1) */}
                    <div>
                        <div className="mb-6 flex items-center gap-2">
                            {/* Logo Placeholder */}
                            <img
                                src={logoWhite}
                                alt=""
                                className="w-54"
                            />
                        </div>
                        <p className="mb-8 text-sm leading-relaxed text-white">
                            {footerDescription || (
                                <>
                                    A portfolio company of I Squared Capital.
                                    Building complex <br />
                                    energy infrastructure for India's clean
                                    energy future.
                                </>
                            )}
                        </p>
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a
                                href={socialUrl("facebook", 0)}
                                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2] hover:shadow-lg hover:shadow-[#1877F2]/30"
                            >
                                <svg
                                    className="h-4 w-4 text-white/90 transition-colors group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            {/* Twitter/X */}
                            <a
                                href={socialUrl("twitter", 1)}
                                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-lg"
                            >
                                <svg
                                    className="h-4 w-4 text-white/90 transition-colors group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 4.15H5.059z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a
                                href={socialUrl("linkedin", 2)}
                                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A66C2] hover:shadow-lg hover:shadow-[#0A66C2]/30"
                            >
                                <svg
                                    className="h-4 w-4 text-white/90 transition-colors group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a
                                href={socialUrl("youtube", 3)}
                                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FF0000] hover:shadow-lg hover:shadow-[#FF0000]/30"
                            >
                                <svg
                                    className="h-4 w-4 text-white/90 transition-colors group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        {/* Company Links (Col 2) */}
                        <div>
                            <h4 className="mb-6 font-heading-2 text-2xl font-semibold tracking-tight text-white">
                                {quickLinks?.title || 'Quick Links'}
                            </h4>
                            <ul className="space-y-3">
                                {companyLinks.map((item) => (
                                    <li key={item.title}>
                                        <a
                                            href={item.href}
                                            className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-white"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources (Col 3) */}
                        <div>
                            <h4 className="mb-6 font-heading-2 text-2xl font-semibold tracking-tight text-white">
                                {resourceGroup?.title || 'Resources'}
                            </h4>
                            <ul className="space-y-3">
                                {resourceLinks.map((item) => (
                                    <li key={item.title}>
                                        <a
                                            href={item.href}
                                            className="text-sm text-white/90 transition-all duration-300 hover:pl-1 hover:text-white"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us (Col 4) */}
                        <div>
                            <h4 className="mb-6 font-heading-2 text-2xl font-semibold tracking-tight text-white">
                                Contact Us
                            </h4>
                            <ul className="space-y-3 text-sm text-white/90">
                                <li className="group flex items-start gap-4">
                                    <div className="mt-0.5 rounded-full bg-white p-2 transition-colors">
                                        <svg
                                            className="h-4 w-4 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <span className="pt-1 transition-colors group-hover:text-white">
                                        {contactAddress}
                                    </span>
                                </li>
                                <li className="group flex items-center gap-4">
                                    <div className="rounded-full bg-white p-2 transition-colors">
                                        <svg
                                            className="h-4 w-4 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <a
                                        href={contactPhoneHref}
                                        className="transition-colors group-hover:text-white"
                                    >
                                        {contactPhone}
                                    </a>
                                </li>
                                <li className="group flex items-center gap-4">
                                    <div className="rounded-full bg-white p-2 transition-colors">
                                        <svg
                                            className="h-4 w-4 text-primary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </div>
                                    <a
                                        href={'mailto:' + contactEmail}
                                        className="transition-colors group-hover:text-white"
                                    >
                                        {contactEmail}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div className="footer-top-border flex flex-col items-center justify-between gap-4 pt-4 text-sm text-white/90 md:flex-row">
                    <p className="mb-0 text-sm">
                        © {new Date().getFullYear()} CubeGrid. All rights
                        reserved.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="/privacy-policy"
                            className="transition-colors hover:text-white"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/terms-service"
                            className="transition-colors hover:text-white"
                        >
                            Terms of Service
                        </a>
                        <span className="hidden md:inline">|</span>
                        <a
                            href="#"
                            className="transition-colors hover:text-white"
                        >
                            Design and Developed by:{' '}
                            <span className="font-medium text-white/90">
                                DigitalFueled
                            </span>
                        </a>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

export default Footer;
