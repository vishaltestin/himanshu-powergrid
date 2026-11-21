import PageBanner from '@/components/common/page-banner';
import TopLabel from '@/components/common/top-label';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { motion } from 'framer-motion';
import {
    Dialog,
    DialogDescription,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Link } from '@inertiajs/react';
import {
    ArrowRight,
    ArrowUpRight,
    Briefcase,
    CheckCircle2,
    ChevronDown,
    Clock,
    CloudUpload,
    CornerDownLeftIcon,
    MapPin,
    Zap,
} from 'lucide-react';
import { useRef, useState } from 'react';

const POWER_GRID_ROLES = [
    {
        id: '1',
        title: 'Demo: HVDC Transmission Design Lead Engineer',
        department: 'Engineering & Architecture',
        location: 'Gurugram, India',
        type: 'Full-Time',
        experience: '5-8 Years',
        summary:
            'Lead the advanced electrical and physical layout design of High-Voltage Direct Current (HVDC) converter stations and long-distance transmission corridors across India.',
        responsibilities: [
            'Perform comprehensive insulation coordination and electromagnetic transient (EMT) studies using PSCAD/EMTP.',
            'Design converter station layouts, main circuit configurations, and earthing grid systems.',
            'Collaborate closely with civil and geotechnical teams to ensure optimal tower and foundation integrity.',
            'Ensure adherence to international IEC, IEEE, and Indian Central Electricity Authority (CEA) grid codes.',
        ],
        requirements: [
            'B.Sc. or M.Sc. in Electrical Engineering or Power Systems.',
            'Minimum 5 years of hands-on experience in HVDC / EHV AC transmission projects.',
            'Proficiency in power system simulation software (PSCAD, DIgSILENT PowerFactory).',
            'Strong analytical mindset and capability to execute rigorous risk underwrite assessments.',
        ],
    },
    {
        id: '2',
        title: 'Demo: Substation Automation & Protection',
        department: 'Grid Operations & Control',
        location: 'Gurugram, India',
        type: 'Full-Time',
        experience: '6-10 Years',
        summary:
            'Spearhead the architecture, configuration, and commissioning of IEC 61850-based substation automation systems and numerical protection schemes.',
        responsibilities: [
            'Design secondary protection systems, SCADA architectures, and GOOSE messaging networks.',
            'Review vendor control schematics, relay setting calculations, and fault recorder logs.',
            'Mentor junior automation engineers and coordinate testing protocols with field technicians.',
            'Drive grid resilience and cybersecurity compliance initiatives across digital substations.',
        ],
        requirements: [
            'Degree in Electrical Engineering, Computer Engineering, or related discipline.',
            'Expertise in IEC 61850 standard, SCADA/EMS protocols, and numerical relay configuration.',
            'Extensive background in troubleshooting complex grid disturbances and tripping incidents.',
        ],
    },
    {
        id: '3',
        title: 'Demo: EHV Transmission Line Project Manager',
        department: 'Project Execution',
        location: 'Gurugram, India',
        type: 'Full-Time',
        experience: '8-12 Years',
        summary:
            'Manage large-scale Extra High Voltage (EHV) overhead and underground transmission line development lifecycle from permitting to commercial operation.',
        responsibilities: [
            'Oversee project budget, timeline milestones, risk registers, and contractor procurement.',
            'Navigate complex environmental impact assessments, right-of-way acquisitions, and stakeholder dialogue.',
            'Implement double-underwrite risk frameworks and rigorous safety audits across active construction sites.',
            'Report project health directly to executive leadership and regulatory boards.',
        ],
        requirements: [
            'PMP certification or equivalent engineering project management qualification.',
            'Demonstrated track record of delivering high-voltage transmission assets on schedule and budget.',
            'Exceptional cross-functional leadership, negotiation, and crisis management skills.',
        ],
    },
    {
        id: '4',
        title: 'Demo: Assurance & Commissioning Lead',
        department: 'Quality & Asset Management',
        location: 'Gurugram, India',
        type: 'Full-Time',
        experience: '6-9 Years',
        summary:
            'Ensure uncompromising quality standards and direct end-to-end site testing procedures for high-capacity transformers, switchgear, and cabling.',
        responsibilities: [
            'Develop Factory Acceptance Test (FAT) and Site Acceptance Test (SAT) protocols.',
            'Conduct rigorous non-destructive testing, partial discharge analysis, and thermal imaging.',
            'Document compliance records and lead root-cause failure analyses for equipment anomalies.',
            'Collaborate with international suppliers to uphold stringent material specifications.',
        ],
        requirements: [
            "Bachelor's degree in Electrical or Mechanical Engineering.",
            'Proven experience in high-voltage equipment testing and grid commissioning.',
            'In-depth knowledge of ISO 9001 quality management systems and electrical safety protocols.',
        ],
    },
    // {
    //     id: '5',
    //     title: 'Demo: HVDC Transmission Design Lead Engineer',
    //     department: 'Engineering & Architecture',
    //     location: 'Gurugram, India',
    //     type: 'Full-Time',
    //     experience: '5-8 Years',
    //     summary:
    //         'Lead the advanced electrical and physical layout design of High-Voltage Direct Current (HVDC) converter stations and long-distance transmission corridors across India.',
    //     responsibilities: [
    //         'Perform comprehensive insulation coordination and electromagnetic transient (EMT) studies using PSCAD/EMTP.',
    //         'Design converter station layouts, main circuit configurations, and earthing grid systems.',
    //         'Collaborate closely with civil and geotechnical teams to ensure optimal tower and foundation integrity.',
    //         'Ensure adherence to international IEC, IEEE, and Indian Central Electricity Authority (CEA) grid codes.',
    //     ],
    //     requirements: [
    //         'B.Sc. or M.Sc. in Electrical Engineering or Power Systems.',
    //         'Minimum 5 years of hands-on experience in HVDC / EHV AC transmission projects.',
    //         'Proficiency in power system simulation software (PSCAD, DIgSILENT PowerFactory).',
    //         'Strong analytical mindset and capability to execute rigorous risk underwrite assessments.',
    //     ],
    // },
    // {
    //     id: '6',
    //     title: 'Demo: Substation Automation & Protection Lead',
    //     department: 'Grid Operations & Control',
    //     location: 'Gurugram, India',
    //     type: 'Full-Time',
    //     experience: '6-10 Years',
    //     summary:
    //         'Spearhead the architecture, configuration, and commissioning of IEC 61850-based substation automation systems and numerical protection schemes.',
    //     responsibilities: [
    //         'Design secondary protection systems, SCADA architectures, and GOOSE messaging networks.',
    //         'Review vendor control schematics, relay setting calculations, and fault recorder logs.',
    //         'Mentor junior automation engineers and coordinate testing protocols with field technicians.',
    //         'Drive grid resilience and cybersecurity compliance initiatives across digital substations.',
    //     ],
    //     requirements: [
    //         'Degree in Electrical Engineering, Computer Engineering, or related discipline.',
    //         'Expertise in IEC 61850 standard, SCADA/EMS protocols, and numerical relay configuration.',
    //         'Extensive background in troubleshooting complex grid disturbances and tripping incidents.',
    //     ],
    // },
];

const CARD_THEMES = [
  { panel: 'bg-[#E4EBF5]', iconBg: 'bg-[#0E2F5A]' }, // navy (CUBE)
  { panel: 'bg-[#E3F5EC]', iconBg: 'bg-[#1E9456]' }, // green (GRID)
  { panel: 'bg-[#E2EEFB]', iconBg: 'bg-[#1F6FB8]' }, // blue (cube mark)
  { panel: 'bg-[#FFF5DA]', iconBg: 'bg-[#F5A800]' }, // amber (search button)
];

export default function Career() {
    const [selectedRoleForModal, setSelectedRoleForModal] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedRoleId, setSelectedRoleId] = useState('');
    const formRef = useRef(null);

    const handleViewDetails = (role) => {
        setSelectedRoleForModal(role);
        setIsDialogOpen(true);
    };

    const handleApplyNow = (roleId) => {
        setSelectedRoleId(roleId);
        setIsDialogOpen(false);
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <NavbarThree />
            <PageBanner title="Careers" image="/images/career.jpg" />
            <MaxWidthWrapper className="pt-24 md:pb-24">
                <div className="mb-10 flex flex-col items-center text-center">
                    <h2>We Are Hiring For</h2>
                    <p className="max-w-3xl text-lg">
                        Exceptional professionals who want to build India's
                        energy infrastructure. 30+ years domain expertise
                        preferred.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
                    {/* {POWER_GRID_ROLES.map((role, index) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div>
                                <div className="mb-4 flex items-center justify-between gap-4">
                                    <span className="inline-flex items-center gap-1.5 rounded-sm bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">
                                        <Briefcase className="h-3.5 w-3.5" />
                                        {role.department}
                                    </span>
                                </div>
                                <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-800">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="h-4 w-4 text-gray-400" />
                                        {role.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-4 w-4 text-gray-400" />
                                        {role.experience}
                                    </span>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                                    {role.title}
                                </h3>

                                <p className="mb-8 line-clamp-3">
                                    {role.summary}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => handleViewDetails(role)}
                                    className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-700 ring ring-gray-300 transition-colors hover:bg-gray-100 focus:outline-none"
                                >
                                    View Details
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleApplyNow(role.id)}
                                    className="flex items-center justify-center gap-1.5 rounded-md px-6 py-3 text-sm font-semibold text-black ring ring-primary transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none"
                                >
                                    Apply Now
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </motion.div>
                    ))} */}
                    {POWER_GRID_ROLES.map((role, index) => {
                        const theme = CARD_THEMES[index % CARD_THEMES.length];

                        return (
                            <motion.article
                                key={role.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="flex flex-col rounded-2xl bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Tinted panel */}
                                <div
                                    className={`${theme.panel} flex flex-1 flex-col rounded-2xl p-5`}
                                >
                                    {/* Top row: type chip + icon tile */}
                                    <div className="flex items-start justify-between gap-3">
                                        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700">
                                            {role.location}
                                        </span>
                                    </div>

                                    {/* Department label */}
                                    <p className="mt-6 flex items-center gap-1.5 text-sm text-gray-800">
                                        <Briefcase
                                            className="h-3.5 w-3.5"
                                            aria-hidden
                                        />
                                        {role.department}
                                    </p>

                                    {/* Title */}
                                    <h3 className="mt-1 text-lg leading-snug font-semibold text-gray-900 md:text-xl">
                                        {role.title}
                                    </h3>

                                    {/* Summary */}
                                    <p className="mt-3 line-clamp-2">
                                        {role.summary}
                                    </p>

                                    {/* Tags */}
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="rounded-full ring ring-gray-500/60 px-3 py-1 text-xs text-gray-900">
                                            {role.type}
                                        </span>
                                        <span className="rounded-full ring ring-gray-500/60 px-3 py-1 text-xs text-gray-900">
                                            {role.experience}
                                        </span>
                                    </div>
                                </div>

                                {/* Footer: location left, actions right */}
                                <div className="px-3 pt-4 pb-2">
                                    <div className="flex items-center w-full justify-between">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleViewDetails(role)
                                            }
                                            className="rounded-full text-sm font-semibold hover:text-primary transition-colors focus:outline-none focus-visible:ring-0"
                                        >
                                            View details
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleApplyNow(role.id)
                                            }
                                            className="flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-black ring ring-primary transition-all duration-300 hover:bg-primary hover:text-white focus:outline-none"
                                        >
                                            Apply Now
                                            <ArrowRight className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* <div className="mb-12 flex flex-col items-center text-center">
                    <h2>why join us</h2>
                    <p className="max-w-3xl text-lg">
                        CubeGrid global workforce of over 360 dedicated
                        professionals is driven by a passion for enhancing
                        essential infrastructure assets that will lead to a
                        higher quality of life for all.
                    </p>
                </div>
                <div className="grid h-190 grid-cols-6 grid-rows-12 gap-4">
                    <div className="col-span-4 row-span-7">
                        <div className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
                            <img
                                src="images/work-1.jpg"
                                alt="People First"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute right-3 bottom-3 left-3 rounded-md bg-white p-4">
                                <h3 className="mb-1 font-heading text-2xl">
                                    We take a rigorous & analytical approach to
                                    risk
                                </h3>
                                <p className="mb-0 font-medium">
                                    We take a deeply analytical approach to
                                    investing and have a carefully curated risk
                                    management framework. One of our risk
                                    management tools includes a “double
                                    underwrite” methodology, where an entirely
                                    separate team reviews a deal teams’ analysis
                                    and proposal.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-6">
                        <div className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
                            <img
                                src="images/construct.jpg"
                                alt="People First"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute right-3 bottom-3 left-3 rounded-md bg-white p-4">
                                <h3 className="mb-1 font-heading text-2xl">
                                    People First
                                </h3>
                                <p className="mb-0 font-medium">
                                    Performance is built on people, powered by
                                    trust and respect
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 row-span-6">
                        <div className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
                            <img
                                src="images/work-2.jpg"
                                alt="People First"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute right-3 bottom-3 left-3 rounded-md bg-white p-4">
                                <h3 className="mb-1 font-heading text-2xl">
                                    We value global perspectives and local
                                    insights
                                </h3>
                                <p className="mb-0 font-medium">
                                    We have a global network of nine offices,
                                    but we also value local insights that offer
                                    operational, technical, and regulatory
                                    insights that give us an advantage.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 row-span-5">
                        <div className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
                            <img
                                src="images/transmission-infra.jpg"
                                alt="People First"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute right-3 bottom-3 left-3 rounded-md bg-white p-4">
                                <h3 className="mb-1 font-heading text-2xl">
                                    We are business builders at our core
                                </h3>
                                <p className="mb-0 font-medium">
                                    We value entrepreneurial capabilities but
                                    also encourage collaboration because we work
                                    in an environment where input from every
                                    team member contributes to the firm’s
                                    success.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 row-span-5">
                        <div className="group relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
                            <img
                                src="images/power-grid-4.jpg"
                                alt="People First"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute right-3 bottom-3 left-3 rounded-md bg-white p-4">
                                <h3 className="mb-1 font-heading text-2xl">
                                    We support each other to do our best work
                                </h3>
                                <p className="mb-0 font-medium">
                                    Our team members thrive on motivating each
                                    other to reach new heights while providing a
                                    supportive network that empowers everyone to
                                    succeed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </MaxWidthWrapper>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                {selectedRoleForModal && (
                    <DialogContent className="sm:max-w-5xl">
                        <DialogHeader>
                            <div className="flex items-center justify-between pr-8">
                                <div>
                                    <span className="mb-2 inline-block rounded-sm bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent">
                                        {selectedRoleForModal.department}
                                    </span>
                                    <DialogTitle className="mb-0 text-2xl">
                                        {selectedRoleForModal.title}
                                    </DialogTitle>
                                </div>
                            </div>
                            <DialogDescription className="flex flex-wrap gap-4 pt-2">
                                <span className="flex items-center gap-1">
                                    <MapPin className="h-3.5 w-3.5" />{' '}
                                    {selectedRoleForModal.location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5" />{' '}
                                    {selectedRoleForModal.experience}
                                </span>
                            </DialogDescription>
                        </DialogHeader>

                        <div className="max-h-[60vh] space-y-6 overflow-y-auto p-6">
                            <div>
                                <h4 className="mb-2 text-lg font-medium text-gray-900">
                                    Role Overview
                                </h4>
                                <p className="text-black">
                                    {selectedRoleForModal.summary} Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo
                                    consequat.
                                </p>
                            </div>

                            <div>
                                <h4 className="mb-2 text-lg font-medium text-gray-900">
                                    Key Responsibilities
                                </h4>
                                <ul className="space-y-2">
                                    {selectedRoleForModal.responsibilities.map(
                                        (resp, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-2 text-black"
                                            >
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                                                <span>{resp}</span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>

                            <div>
                                <h4 className="mb-2 text-lg font-medium text-gray-900">
                                    Candidate Requirements
                                </h4>
                                <ul className="space-y-2">
                                    {selectedRoleForModal.requirements.map(
                                        (req, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-2 text-black"
                                            >
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                                                <span>{req}</span>
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        </div>

                        <DialogFooter>
                            <button
                                type="button"
                                onClick={() => setIsDialogOpen(false)}
                                className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 ring ring-gray-300 transition-colors hover:bg-gray-100"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                onClick={() =>
                                    handleApplyNow(selectedRoleForModal.id)
                                }
                                className="rounded-md px-5 py-2.5 text-sm font-semibold text-black ring ring-primary transition-all duration-300 hover:bg-primary hover:text-white"
                            >
                                Apply For This Role
                            </button>
                        </DialogFooter>
                    </DialogContent>
                )}
            </Dialog>
            <section
                id="apply-form"
                ref={formRef}
                className="scroll-mt-14 bg-[#f4f4f4] pt-20 pb-20"
            >
                <MaxWidthWrapper>
                    <div className="mb-12 flex flex-col items-center text-center">
                        <h2>Submit Your Application</h2>
                        <p className="max-w-3xl text-lg">
                            Take the first step towards a rewarding career. Fill
                            out the details below.
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl">
                        <motion.form
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-6 rounded-2xl bg-white p-12 ring ring-accent-foreground"
                        >
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="block font-semibold tracking-tight text-black">
                                        First Name{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your First Name"
                                        className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block font-semibold tracking-tight text-black">
                                        Last Name{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Your Last Name"
                                        className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="block font-semibold tracking-tight text-black">
                                        Email Address{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block font-semibold tracking-tight text-black">
                                        Phone Number{' '}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Enter Your Phone Number"
                                        className="w-full rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="w-full space-y-2">
                                <label className="block font-semibold tracking-tight text-black">
                                    Role Applied For{' '}
                                    <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        defaultValue=""
                                        className="w-full cursor-pointer appearance-none rounded-sm bg-gray-100 px-4 py-3.5 pr-10 text-gray-800 placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                    >
                                        <option
                                            value=""
                                            disabled
                                            className="bg-white text-gray-800"
                                        >
                                            Select a position...
                                        </option>
                                        <option
                                            value="1"
                                            className="bg-white text-gray-900"
                                        >
                                            HVDC Transmission Design Engineer
                                        </option>
                                        <option
                                            value="2"
                                            className="bg-white text-gray-900"
                                        >
                                            Substation Automation & Protection
                                            Lead
                                        </option>
                                        <option
                                            value="3"
                                            className="bg-white text-gray-900"
                                        >
                                            EHV Transmission Line Project
                                            Manager
                                        </option>
                                        <option
                                            value="4"
                                            className="bg-white text-gray-900"
                                        >
                                            Quality Assurance & Commissioning
                                            Lead
                                        </option>
                                    </select>
                                    <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-gray-800" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="block font-semibold tracking-tight text-black">
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        rows={6}
                                        placeholder="Tell us briefly about your experience and why you want to join us..."
                                        className="w-full resize-y rounded-sm bg-gray-100 px-4 py-3.5 text-black placeholder-gray-800 ring ring-gray-200 transition-shadow focus:ring-1 focus:ring-[#54a93c] focus:outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-semibold tracking-tight text-black">
                                        Resume / CV{' '}
                                        <span className="text-red-500">*</span>
                                    </label>

                                    <div className="flex w-full cursor-pointer flex-col items-center justify-center rounded-sm bg-primary/10 px-6 py-8.5 transition-all hover:bg-accent/30">
                                        <div className="mb-2 flex items-center justify-center text-slate-900">
                                            <CloudUpload className="h-10 w-10 stroke-[2.2]" />
                                        </div>
                                        <p className="mb-1 text-base font-semibold text-slate-900">
                                            Click to upload or drag &amp; drop
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            PDF, DOCX, or DOC (Max. 5MB)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    className="mt-4 flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-primary/80"
                                >
                                    Send Message
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </MaxWidthWrapper>
            </section>
            <Footer />
        </>
    );
}
