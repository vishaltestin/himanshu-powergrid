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
import { useState } from 'react';

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

export default function ContactUs() {
    return (
        <>
            <NavbarThree />
            <PageBanner title="Contact Us" image='/images/contact-3.jpg' />
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
                            <TopLabel text="Connect" />
                            <h2>Cube Grid Advisors Private Limited</h2>

                            <p className="mb-10">
                                Whether you're a lender, EPC partner, technology
                                provider, government agency, or future team
                                member — let's build India's energy future
                                together.
                            </p>

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
                                            admin@cubegrid.in
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
                                            +91 123 456 7890
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
                                            7th Floor, Block B, Vatika Business
                                            Park Sohna Road, Badshahpur,
                                            <br />Sector-49 Gurugram, Haryana - 122018
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-5 bg-gray-100 p-3 rounded-xl"
                                    >
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white ring ring-gray-200">
                                            {feature.icon}
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
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="mx-auto w-full max-w-lg shadow-2xl lg:mr-0 lg:ml-auto rounded-2xl">
                            <div className="overflow-hidden rounded-2xl bg-white p-8 ring ring-accent md:p-10">
                                <h3 className="mb-3 text-3xl font-semibold text-black">
                                    Get in Touch
                                </h3>
                                <p className="mb-8 text-sm text-gray-400">
                                    The point of using Lorem Ipsum is that it
                                    has more.
                                </p>

                                <form
                                    className="space-y-4"
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <div className="grid gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Company"
                                                className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-4">
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                            />
                                        </div>

                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Phone Number"
                                                className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <select
                                            defaultValue=""
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
                                            placeholder="Write Here..."
                                            rows={3}
                                            className="w-full resize-none rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="mt-10 flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-primary/90"
                                    >
                                        Send Message
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
                                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14037.40082522765!2d77.03228574131249!3d28.408687865633972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229abb17b84f%3A0x90e8afb86373f00a!2s7th%20Floor%2C%20TOWER-B%2C%20Spaze%20I-Tech%20Park%2C%20Sohna%20-%20Gurgaon%20Rd%2C%20Block%20S%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1791025140979!5m2!1sen!2sin"
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
