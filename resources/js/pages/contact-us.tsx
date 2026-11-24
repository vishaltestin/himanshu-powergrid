import PageBanner from '@/components/common/page-banner';
import TopLabel from '@/components/common/top-label';
import Footer from '@/components/footer';
import FormSection from '@/components/home-2/form-section';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import {
    ArrowRight,
    Building2,
    Globe,
    Landmark,
    Link,
    Mail,
    MapPin,
    Phone,
    Settings,
} from 'lucide-react';
import axios from 'axios';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';

const features = [
    {
        title: 'Lenders & DFIs',
        desc: 'ECAs, ADB, KfW, JICA, JBIC, IFC, AIIB, EIB, US DFC',
        icon: <Building2 className="h-6 w-6 text-black" />,
    },
    {
        title: 'EPC & Technology',
        desc: 'Equipment OEMs, engineering firms, technology providers',
        icon: <Settings className="h-6 w-6 text-black" />,
    },
    {
        title: 'Government',
        desc: 'CERC, CEA, CTU, STUs, state agencies',
        icon: <Landmark className="h-6 w-6 text-black" />,
    },
    {
        title: 'Land & Development',
        desc: 'Site opportunities, JV partners, co-developers',
        icon: <Globe className="h-6 w-6 text-black" />,
    },
];

export default function ContactUs({ content }: { content?: any }) {
const { props } = usePage<any>();
    const settings: any = props.settings ?? {};
    const c = content ?? {};
    const [form, setForm] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        enquiry_type: '',
        message: '',
    });
    const [sending, setSending] = useState(false);

    const set = (key: string) => (e: any) =>
        setForm((f) => ({ ...f, [key]: e.target.value }));

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        try {
            await axios.post(
                '/form-submissions',
                { ...form, type: 'contact' },
                { headers: { Accept: 'application/json' } },
            );
            toast.success('Thanks for reaching out. Our team will get back to you soon!');
            setForm({ name: '', company: '', email: '', phone: '', enquiry_type: '', message: '' });
        } catch (err: any) {
            const errors = err?.response?.data?.errors;
            const first = errors ? Object.values(errors)[0] : null;
            toast.error(
                (Array.isArray(first) ? first[0] : null) ||
                    err?.response?.data?.message ||
                    'Something went wrong. Please try again.',
            );
        } finally {
            setSending(false);
        }
    };

    return (
        <>
            <NavbarThree />
            <PageBanner title={content?.banner_title || "Contact Us"} image={content?.banner_image || "/images/contact-3.jpg"} />
            <section className="relative w-full overflow-hidden bg-white py-20 font-sans lg:py-24 custom-border-bottom-200">
                {/* Background Image - Right Side (Visible on large screens) */}
                <div className="absolute top-0 right-0 z-0 hidden h-full w-[36%] lg:block">
                    <img
                        src="/images/blue-gradient.jpg"
                        alt="Tailor working"
                        className="h-full w-full object-cover"
                    />
                </div>
                <MaxWidthWrapper>
                    <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
                        {/* Left Column: Content */}
                        <div className="max-w-4xl">
                            <TopLabel text={c.section_label || 'Connect'} />
                            <h2>{c.heading || 'Cube Grid Advisors Private Limited'}</h2>

                            {c.intro ? (
                                <div className="rich-text mb-10" dangerouslySetInnerHTML={{ __html: c.intro }} />
                            ) : (
                                <p className="mb-10">
                                    Whether you're a lender, EPC partner, technology
                                    provider, government agency, or future team
                                    member — let's build India's energy future
                                    together.
                                </p>
                            )}

                            <div className="flex flex-col items-start gap-3">
                                <div className="flex items-start gap-5">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-yellow-50 text-yellow-500 ring ring-yellow-200">
                                        <Mail />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-800">
                                            Email
                                        </h3>
                                        <p className="text-lg font-medium">
                                            {settings.contact_email || 'admin@cubegrid.in'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-yellow-50 text-yellow-500 ring ring-yellow-200">
                                        <Phone />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-800">
                                            Phone Number
                                        </h3>
                                        <p className="text-lg font-medium">
                                            {settings.contact_phone || '+91 123 456 7890'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-yellow-50 text-yellow-500 ring ring-yellow-200">
                                        <MapPin />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-800">
                                            Address
                                        </h3>
                                        <p className="text-lg font-medium">
                                            {settings.contact_address || '7th Floor, Block B, Vatika Business Park Sohna Road, Badshahpur, Sector-49 Gurugram, Haryana - 122018'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {(c.features?.length ? c.features : features.map((f: any) => ({ title: f.title, desc: f.desc }))).filter((f: any) => f.title).map((feature: any, index: number) => { const orig = features[index]; return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-5 bg-gray-100 p-3 rounded-xl"
                                    >
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white ring ring-gray-200">
                                            {orig?.icon}
                                        </div>
                                        <div>
                                            <h3 className="mb-1.5 text-lg font-medium text-black">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                ); })}
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="mx-auto w-full max-w-lg shadow-2xl lg:mr-0 lg:ml-auto rounded-2xl">
                            <div className="overflow-hidden rounded-2xl bg-white p-8 ring ring-accent md:p-10">
                                <h3 className="mb-3 text-3xl font-semibold text-black">
                                    {c.form_heading || 'Get in Touch'}
                                </h3>
                                <p className="mb-8 text-sm text-gray-400">
                                    {c.form_intro || 'Fill in the form and our team will get back to you.'}
                                </p>

                                <form className="space-y-4" onSubmit={submit}>
                                    <div className="grid gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={form.name}
                                                onChange={set('name')}
                                                placeholder="Full Name"
                                                className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                name="company"
                                                value={form.company}
                                                onChange={set('company')}
                                                placeholder="Company"
                                                className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-4">
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={form.email}
                                                onChange={set('email')}
                                                placeholder="Email Address"
                                                className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                name="phone"
                                                value={form.phone}
                                                onChange={set('phone')}
                                                placeholder="Phone Number"
                                                className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <select
                                            name="enquiry_type"
                                            value={form.enquiry_type}
                                            onChange={set('enquiry_type')}
                                            className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                        >
                                            <option value="" disabled>
                                                Enquiry Type
                                            </option>
                                            <option value="general">
                                                General Enquiry
                                            </option>
                                            <option value="partnership">
                                                Partnership
                                            </option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            required
                                            rows={3}
                                            value={form.message}
                                            onChange={set('message')}
                                            placeholder="Write Here..."
                                            className="w-full resize-none rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={sending}
                                        className="mt-10 flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-primary/90 disabled:opacity-60"
                                    >
                                        {sending ? 'Sending…' : 'Send Message'}
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="pt-20 pb-20">
                <MaxWidthWrapper>
                    {/* <div className="mb-8 flex flex-col items-center text-center md:mb-12">
                        <h2>Our Address</h2>
                    </div> */}
                        <div className="flex flex-col">
                            <div className="relative h-140 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
                                <iframe
                                    title="Registered Office Map - Gurugram"
                                     src={c.map_iframe || settings.contact_map_iframe || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.40082522765!2d77.03228574131249!3d28.408687865633972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229abb17b84f%3A0x90e8afb86373f00a!2s7th%20Floor%2C%20TOWER-B%2C%20Spaze%20I-Tech%20Park%2C%20Sohna%20-%20Gurgaon%20Rd%2C%20Block%20S%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1791025140979!5m2!1sen!2sin'}
                                    className="h-full w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                </MaxWidthWrapper>
            </section>
            {/* <section className="pt-24 pb-20">
                <MaxWidthWrapper>
                    <div className="mb-8 flex flex-col items-center text-center md:mb-12">
                        <h2>Our Address</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                        <div className="flex flex-col">
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
                                <iframe
                                    title="Registered Office Map - Gurugram"
                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.40082522765!2d77.03228574131249!3d28.408687865633972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229abb17b84f%3A0x90e8afb86373f00a!2s7th%20Floor%2C%20TOWER-B%2C%20Spaze%20I-Tech%20Park%2C%20Sohna%20-%20Gurgaon%20Rd%2C%20Block%20S%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1791025140979!5m2!1sen!2sin"
                                    className="h-full w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>

                            <div className="mt-6">
                                <h2 className="mb-3 text-3xl">
                                    REGISTERED OFFICE
                                </h2>

                                <p className="mt-0 text-base text-accent leading-snug font-bold">
                                    Cube Grid
                                </p>

                                <p className="mt-2">
                                    7th Floor, Block B, Vatika Business Park Sohna Road, Badshahpur, Sector-49 Gurugram, Haryana - 122018
                                </p>

                                <p>
                                    Phone:{' '}
                                    <a
                                        href="tel:+9102262253000"
                                        className="transition-colors hover:text-blue-600"
                                    >
                                        +91 022 6225 3000
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm">
                                <iframe
                                    title="Corporate Office Map - Mumbai"
                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.40082522765!2d77.03228574131249!3d28.408687865633972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229abb17b84f%3A0x90e8afb86373f00a!2s7th%20Floor%2C%20TOWER-B%2C%20Spaze%20I-Tech%20Park%2C%20Sohna%20-%20Gurgaon%20Rd%2C%20Block%20S%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1791025140979!5m2!1sen!2sin"
                                    className="h-full w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>

                            <div className="mt-6">
                                <h2 className="mb-3 text-3xl">
                                    CORPORATE OFFICE
                                </h2>

                                <p className="mt-0 text-base text-accent leading-snug font-bold">
                                    Cube Grid
                                </p>

                                <p className="mt-2">
                                    7th Floor, Block B, Vatika Business Park Sohna Road, Badshahpur, Sector-49 Gurugram, Haryana - 122018
                                </p>

                                <p>
                                    Phone:{' '}
                                    <a
                                        href="tel:+9102262253000"
                                        className="transition-colors hover:text-blue-600"
                                    >
                                        +91 022 6225 3000
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section> */}
            <Footer />
        </>
    );
}
