import PageBanner from '@/components/common/page-banner';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { ArrowRight } from 'lucide-react';
import { Head } from '@inertiajs/react';
import TopLabel from '@/components/common/top-label';

export default function Enquiry() {
    return (
        <>
            <Head title="Enquiry" />

            <NavbarThree />

            <PageBanner
                title="Enquiry"
                image="/images/contact.jpg"
            />

            <section className="relative overflow-hidden bg-white py-16 font-sans md:py-24">

                <MaxWidthWrapper>
                    <div className="relative mx-auto max-w-4xl">
                        {/* Heading */}
                        <div className="mb-10 text-center md:mb-10 flex flex-col items-center">
                            <TopLabel text='Get In Touch' />
                            <h2>
                                Tell Us About Your Project
                            </h2>

                            <p className="mx-auto md:text-lg">
                                Share your requirements with our team.
                                We'll connect with you to discuss your
                                enquiry and explore <br />how we can work together.
                            </p>
                        </div>

                        {/* Enquiry form */}
                        <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-accent/30 md:p-10">
                            <form
                                className="space-y-6"
                                onSubmit={(e) => e.preventDefault()}
                            >
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="fullName"
                                            className="mb-2 block text-sm font-medium text-gray-800"
                                        >
                                            Full Name *
                                        </label>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            placeholder="Enter your full name"
                                            autoComplete="name"
                                            required
                                            className="w-full rounded-md bg-gray-100 px-4 py-3.5 text-gray-900 placeholder:text-gray-500 ring-1 ring-gray-200 transition-shadow focus:ring-2 focus:ring-accent focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="company"
                                            className="mb-2 block text-sm font-medium text-gray-800"
                                        >
                                            Company Name *
                                        </label>
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            placeholder="Enter company name"
                                            autoComplete="organization"
                                            className="w-full rounded-md bg-gray-100 px-4 py-3.5 text-gray-900 placeholder:text-gray-500 ring-1 ring-gray-200 transition-shadow focus:ring-2 focus:ring-accent focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-medium text-gray-800"
                                        >
                                            Email Address *
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter email address"
                                            autoComplete="email"
                                            required
                                            className="w-full rounded-md bg-gray-100 px-4 py-3.5 text-gray-900 placeholder:text-gray-500 ring-1 ring-gray-200 transition-shadow focus:ring-2 focus:ring-accent focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-sm font-medium text-gray-800"
                                        >
                                            Phone Number *
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Enter phone number"
                                            autoComplete="tel"
                                            required
                                            className="w-full rounded-md bg-gray-100 px-4 py-3.5 text-gray-900 placeholder:text-gray-500 ring-1 ring-gray-200 transition-shadow focus:ring-2 focus:ring-accent focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="organizationType"
                                        className="mb-2 block text-sm font-medium text-gray-800"
                                    >
                                        Enquiry Type *
                                    </label>
                                    <select
                                        id="organizationType"
                                        name="organizationType"
                                        defaultValue=""
                                        required
                                        className="w-full rounded-md bg-gray-100 px-4 py-3.5 text-gray-800 ring-1 ring-gray-200 transition-shadow focus:ring-2 focus:ring-accent focus:outline-none"
                                    >
                                        <option value="" disabled>
                                            Select enquiry type
                                        </option>
                                        <option value="lender">
                                            Lender / DFI / ECA
                                        </option>
                                        <option value="epc">
                                            EPC / Technology Partner
                                        </option>
                                        <option value="government">
                                            Government / Regulatory
                                        </option>
                                        <option value="land-owner">
                                            Land / Site Owner
                                        </option>
                                        <option value="co-developer">
                                            Co-Developer / JV Partner
                                        </option>
                                        <option value="employee">
                                            Feedback
                                        </option>
                                        <option value="other">
                                            Other
                                        </option>
                                    </select>
                                </div>

                                {/* State and City */}
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="state"
                                            className="mb-2 block text-sm font-medium text-gray-800"
                                        >
                                            State *
                                        </label>
                                        <input
                                            id="state"
                                            name="state"
                                            type="text"
                                            placeholder="Enter state"
                                            autoComplete="address-level1"
                                            required
                                            className="w-full rounded-md bg-gray-100 px-4 py-3.5 text-gray-900 placeholder:text-gray-500 ring-1 ring-gray-200 transition-shadow focus:ring-2 focus:ring-accent focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="city"
                                            className="mb-2 block text-sm font-medium text-gray-800"
                                        >
                                            City *
                                        </label>
                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            placeholder="Enter city"
                                            autoComplete="address-level2"
                                            required
                                            className="w-full rounded-md bg-gray-100 px-4 py-3.5 text-gray-900 placeholder:text-gray-500 ring-1 ring-gray-200 transition-shadow focus:ring-2 focus:ring-accent focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-medium text-gray-800"
                                    >
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Tell us about your project or requirements..."
                                        required
                                        className="w-full resize-y rounded-md bg-gray-100 px-4 py-3.5 text-gray-900 placeholder:text-gray-500 ring-1 ring-gray-200 transition-shadow focus:ring-2 focus:ring-accent focus:outline-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="mx-auto mt-8 flex w-full items-center justify-center gap-3 rounded-md bg-accent px-6 py-4 font-semibold text-white transition-colors duration-300 hover:bg-accent/90 sm:w-auto"
                                >
                                    Submit Enquiry
                                    <ArrowRight className="size-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            <Footer />
        </>
    );
}