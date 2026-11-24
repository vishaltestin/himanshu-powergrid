import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Leaf, Droplets, HardHat, ArrowRight, Globe, Settings, Building, Building2, Landmark } from 'lucide-react';
import TopLabel from '../common/top-label';
import MaxWidthWrapper from '../max-width-wrapper';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '../ui/select';

const FormSection = () => {
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
    const features = [
        {
            title: 'Lenders & DFIs',
            desc: 'ECAs, ADB, KfW, JICA, JBIC, IFC, AIIB, EIB, US DFC',
            icon: <Building2 className="h-6 w-6 text-[#54a93c]" />,
        },
        {
            title: 'EPC & Technology',
            desc: 'Equipment OEMs, engineering firms, technology providers',
            icon: <Settings className="h-6 w-6 text-[#54a93c]" />,
        },
        {
            title: 'Government',
            desc: 'CERC, CEA, CTU, STUs, state agencies',
            icon: <Landmark className="h-6 w-6 text-[#54a93c]" />,
        },
        {
            title: 'Land & Development',
            desc: 'Site opportunities, JV partners, co-developers',
            icon: <Globe className="h-6 w-6 text-[#54a93c]" />,
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#f4f4f4] py-20 font-sans lg:py-24">
            {/* Background Image - Right Side (Visible on large screens) */}
            <div className="absolute top-0 right-0 z-0 hidden h-full w-[36%] lg:block">
                <img
                    src="/images/power-grid.jpg"
                    alt="Tailor working"
                    className="h-full w-full object-cover"
                />
            </div>
            <MaxWidthWrapper>
                <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
                    {/* Left Column: Content */}
                    <div className="max-w-xl">
                        <TopLabel text="Connect" />
                        <h2>
                            Partner With Us
                        </h2>

                        <p className="mb-10">
                            Whether you're a lender, EPC partner, technology provider, government agency, or future team member — let's build India's energy future together.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-5"
                                >
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="mb-1.5 text-lg font-medium text-black">
                                            {feature.title}
                                        </h3>
                                        <p className="text-xs">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="mx-auto w-full max-w-lg shadow-2xl lg:mr-0 lg:ml-auto">
                        <div className="rounded-2xl bg-white p-8 ring ring-accent md:p-10 overflow-hidden">
                            <h3 className="mb-3 text-3xl font-semibold text-black">
                                Get in Touch
                            </h3>
                            <p className="mb-8 text-sm text-gray-400">
                                The point of using Lorem Ipsum is that it has
                                more.
                            </p>

                            <form className="space-y-4" onSubmit={submit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-white placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Company"
                                            className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-white placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-white placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-white placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <select
                                        value={form.enquiry_type}
                                        onChange={set('enquiry_type')}
                                        className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                    >
                                        <option value="" disabled>
                                            I Am A...
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
                                            Prospective Employee
                                        </option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Write Here..."
                                        rows={3}
                                        className="w-full resize-none rounded-sm bg-gray-100 px-4 py-3.5 text-white placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="mt-4 flex items-center gap-2 rounded-sm bg-[#54a93c] px-6 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-[#438a30] disabled:opacity-60"
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
    );
};

export default FormSection;
