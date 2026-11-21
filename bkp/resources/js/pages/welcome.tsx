import ThemeButton from '@/components/common/theme-button';
import TopLabel from '@/components/common/top-label';
import Footer from '@/components/footer';
import WhyChooseUs from '@/components/home-2/why-choose';
import PowerCTA from '@/components/home/cta';
import Hero from '@/components/home/hero';
import { AnimatedStat } from '@/components/home/leadership';
import NewsAndUpdatesTwo from '@/components/home/news-update-2';
import OurApproachTwo from '@/components/home/our-approach-2';
import OurBusiness from '@/components/home/our-business';
import SustainabilityCsr from '@/components/home/sustainability-csr';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { Link } from '@inertiajs/react';
import { motion, Variants } from 'framer-motion';

export default function Welcome() {
    const statsContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const statsItemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };
    return (
        <>
            <NavbarThree />
            <Hero />
            <MaxWidthWrapper className="md:pb-16">
                <motion.div
                    className="relative z-2 mt-12 mb-16 grid grid-cols-2 gap-3 md:mb-25 md:gap-6 lg:-mt-12 lg:grid-cols-4"
                    variants={statsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div
                        className="flex w-full flex-col items-start gap-3 rounded-xl bg-white p-2 ring ring-gray-300 transition-shadow duration-300 hover:shadow-lg md:flex-row md:items-center md:gap-4 md:p-3"
                        variants={statsItemVariants}
                    >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-accent/10 p-2 md:size-18 md:rounded-xl md:p-3">
                            <svg
                                width={24}
                                height={24}
                                x={0}
                                y={0}
                                viewBox="0 0 511.999 511.999"
                                xmlSpace="preserve"
                                className="size-full object-contain"
                            >
                                <g>
                                    <path
                                        d="m437.345 186.893-10.042 10.049a53 53 0 0 1-4.031 3.591c11.561 25.895 18.054 54.54 18.054 84.685 0 114.916-93.496 208.405-208.417 208.405-114.928 0-208.423-93.489-208.423-208.405 0-114.904 93.496-208.386 208.423-208.386 23.938 0 46.918 4.11 68.35 11.566v-.007c2.042-3.244 4.426-6.475 7.689-9.762l5.158-5.165a226.2 226.2 0 0 0-81.191-15.03C107.665 58.442 6.097 159.979 6.097 285.211c0 125.251 101.568 226.788 226.813 226.788 125.263 0 226.807-101.538 226.807-226.788-.001-35.218-8.03-68.576-22.372-98.318"
                                        fill="#1b8a5a"
                                        opacity={1}
                                        data-original="#1b8a5a"
                                        className=""
                                    />
                                    <path
                                        d="M371.921 214.587h-20.615c10.487 19.176 16.457 41.151 16.457 64.497 0 74.356-60.497 134.847-134.854 134.847-74.362 0-134.859-60.492-134.859-134.847-.001-74.346 60.496-134.836 134.859-134.836 20.902 0 40.718 4.78 58.393 13.311v-20.145c-18-7.426-37.717-11.554-58.393-11.554-84.642 0-153.255 68.607-153.255 153.225s68.612 153.237 153.255 153.237c84.624 0 153.249-68.619 153.249-153.237.001-23.049-5.127-44.889-14.237-64.498"
                                        fill="#1b8a5a"
                                        opacity={1}
                                        data-original="#1b8a5a"
                                        className=""
                                    />
                                    <path
                                        d="M504.47 75.794c-1.433-2.781-3.75-4.725-6.042-5.897-2.311-1.183-4.671-1.738-7.085-1.987l-43.773-4.366c-.891-.067-2.293-.683-3.39-1.804-1.122-1.098-1.738-2.5-1.799-3.39l-4.384-43.79c-.342-3.201-1.189-6.384-3.42-9.347a13.4 13.4 0 0 0-4.464-3.78A13 13 0 0 0 424.187 0c-2.555.007-4.823.725-6.731 1.707-1.909 1-3.53 2.28-4.994 3.737l-88.349 88.349c-3.591 3.64-6.146 8.018-8.11 12.7-1.914 4.701-3.213 9.61-3.25 14.725v50.455c.012 3.457.903 6.677 2.36 9.567l-38.016 39.15c-12.317-9.28-27.577-14.859-44.187-14.859-40.633 0-73.558 32.937-73.558 73.551s32.925 73.551 73.558 73.551c40.614 0 73.558-32.937 73.558-73.551 0-17.377-6.066-33.322-16.151-45.912l39.376-40.541a22 22 0 0 0 4.524.5h50.485c5.115-.036 10.024-1.329 14.718-3.244 4.689-1.97 9.066-4.524 12.712-8.115l88.331-88.325c1.457-1.464 2.731-3.085 3.732-4.999.982-1.909 1.707-4.176 1.707-6.725a12.7 12.7 0 0 0-1.432-5.927M232.91 334.252c-30.425 0-55.175-24.743-55.175-55.163 0-30.413 24.749-55.163 55.175-55.163 11.604 0 22.371 3.622 31.266 9.767l-37.864 38.998c-3.537 3.64-3.451 9.463.19 12.999s9.469 3.451 13.006-.19l37.84-38.962c6.712 9.135 10.73 20.366 10.73 32.549 0 30.422-24.749 55.165-55.168 55.165m98.245-169.51v-43.516c-.036-1.622.628-4.799 1.854-7.689 1.165-2.902 2.945-5.616 4.122-6.738l83.301-83.294 3.665 36.687c.256 2.469.963 4.756 1.902 6.896zm67.978 4.036c-1.134 1.171-3.836 2.945-6.738 4.122-2.89 1.226-6.066 1.89-7.689 1.854h-37.645l92.002-94.739c2.085.891 4.286 1.567 6.682 1.823l36.669 3.658z"
                                        fill="#1b8a5a"
                                        opacity={1}
                                        data-original="#1b8a5a"
                                        className=""
                                    />
                                </g>
                            </svg>
                        </div>
                        <div>
                            <div className="mb-1 font-heading text-2xl text-secondary md:mb-2 md:text-3xl lg:text-4xl">
                                <AnimatedStat from={100} to={500} suffix="+" />{' '}
                                <span>GW</span>
                            </div>
                            <div className="text-sm font-medium md:text-base">
                                India's RE Target 2030
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex w-full flex-col items-start gap-3 rounded-xl bg-white p-2 ring ring-gray-300 transition-shadow duration-300 hover:shadow-lg md:flex-row md:items-center md:gap-4 md:p-3"
                        variants={statsItemVariants}
                    >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-accent/10 p-2 md:size-18 md:rounded-xl md:p-3">
                            <svg
                                width={24}
                                height={24}
                                x={0}
                                y={0}
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                                className="size-full object-contain"
                            >
                                <g>
                                    <path
                                        fillRule="evenodd"
                                        d="M257.354 292.586v8.192a7 7 0 1 1-14 0v-8.14h-8.663a7 7 0 1 1 0-14h21.135c7.333 0 11.287-8.972 5.929-14.331a8.37 8.37 0 0 0-5.929-2.474h-9.648c-19.751 0-29.99-24.064-15.826-38.228a22.37 22.37 0 0 1 13.003-6.397v-8.318a7 7 0 1 1 14 0v8.14h9.959a7 7 0 1 1 0 14h-21.135c-7.332 0-11.287 8.972-5.928 14.331a8.37 8.37 0 0 0 5.928 2.474h9.648c19.751 0 29.991 24.065 15.827 38.228-3.721 3.719-8.738 6.144-14.3 6.523m-29.587 202.79 7.601.678V363.805l-5.742-1.055c-51.132-9.393-88.777-54.106-88.777-106.75s37.644-97.356 88.777-106.75l5.742-1.055V15.946l-7.601.678C104.387 27.634 8.992 131.345 8.992 256c0 124.656 95.396 228.368 218.775 239.376M82.169 408.655c35.479 38.829 84.3 65.253 139.2 72.021V375.277c-54.91-12.847-94.52-62.076-94.52-119.277s39.61-106.43 94.52-119.277V31.325C108.711 45.213 22.991 141.229 22.991 256c0 58.849 22.421 112.427 59.178 152.655m336.56 17.896c-39.603 39.318-91.43 63.801-147.75 68.825l-7.601.678V363.805l5.742-1.055c21.492-3.948 41.031-14.259 56.454-29.464l4.943-4.873 93.192 93.192zm-73.851 34.745a226.9 226.9 0 0 0 58.949-39.776l-73.546-73.547c-15.054 13.247-33.224 22.697-52.904 27.304v105.399a224.9 224.9 0 0 0 67.501-19.38m108.507-351.519-4.869-6.342L354.3 197.65l2.643 4.631c13.145 23.035 17.381 50.35 11.818 76.462-2.242 10.524-4.873 16.761-9.032 26.032l95.387 95.387 4.775-6.846c59.808-85.756 57.171-200.608-6.506-283.539m23.678 73.479a225.7 225.7 0 0 0-30.012-58.561l-75.412 75.412c16.167 31.458 17.904 68.635 4.704 101.486l76.78 76.781c37.137-57.696 46.078-129.85 23.94-195.118M270.979 16.625c52.505 4.685 101.258 26.343 139.805 61.302l5.449 4.941-93.18 93.18c-9.634-7.9-16.038-12.97-28.003-18.528-11.639-5.407-19.48-7.084-31.673-9.324V15.946zm69.254 31.959A226.5 226.5 0 0 1 395.9 83.405l-73.928 73.928c-13.304-9.812-28.381-16.824-44.594-20.612V31.323a225 225 0 0 1 62.855 17.261m-89.231 114.649c-50.588 0-91.601 41.013-91.601 91.601s41.013 91.601 91.601 91.601 91.601-41.013 91.601-91.601-41.014-91.601-91.601-91.601m54.873 36.728c-30.305-30.304-79.442-30.304-109.746 0s-30.304 79.442 0 109.746 79.442 30.304 109.746 0 30.304-79.442 0-109.746"
                                        clipRule="evenodd"
                                        fill="#1b8a5a"
                                        opacity={1}
                                        data-original="#000000"
                                        className=""
                                    />
                                </g>
                            </svg>
                        </div>
                        <div>
                            <div className="mb-1 font-heading text-2xl text-secondary md:mb-2 md:text-3xl lg:text-4xl">
                                <span>$</span>
                                <AnimatedStat from={1} to={50} suffix="B+" />
                            </div>
                            <div className="text-sm font-medium md:text-base">
                                Assets Under Mgmt
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex w-full flex-col items-start gap-3 rounded-xl bg-white p-2 ring ring-gray-300 transition-shadow duration-300 hover:shadow-lg md:flex-row md:items-center md:gap-4 md:p-3"
                        variants={statsItemVariants}
                    >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-accent/10 p-2 md:size-18 md:rounded-xl md:p-3">
                            <svg
                                width={24}
                                height={24}
                                x={0}
                                y={0}
                                viewBox="0 0 496 496"
                                xmlSpace="preserve"
                                className="size-full object-contain"
                            >
                                <g>
                                    <path
                                        d="M496 248C496 111.256 384.744 0 248 0c-42.872 0-84.64 11.104-121.672 32H96V0H48v101.496C16.64 144.216 0 194.776 0 248c0 136.752 111.256 248 248 248 30.472 0 60.216-5.48 88.416-16.248C352.512 489.984 371.552 496 392 496c24.944 0 49.072-8.968 67.936-25.248L449.48 458.64A87.98 87.98 0 0 1 392 480c-48.52 0-88-39.48-88-88s39.48-88 88-88 88 39.48 88 88c0 20.28-6.704 39.344-19.4 55.128l12.472 10.032C487.856 438.768 496 415.632 496 392c0-20.464-6.024-39.504-16.264-55.608C490.496 308.184 496 278.472 496 248M128 80h16v112h-16zM96 48h16v144H96zM64 16h16v176H64zm176 463.8C118.432 475.648 20.352 377.568 16.2 256H240zm0-239.8H16.32c1.304-38.944 12.12-76.16 31.68-109.336V208h176v-80h-32V96h-32V64h-32V49.536c33.848-20.512 72.312-31.896 112-33.256zm-80-48v-80h16v80zm32 0v-48h16v48zm287.8 48h-68.488l58.832-58.832c5.648 18.728 8.96 38.448 9.656 58.832m-40.312-122.8-89.352 89.352 11.312 11.312 86.8-86.8a232 232 0 0 1 16.088 33.288L388.688 240h-49.376l10.344-10.344-11.312-11.312L316.688 240h-49.376L417.496 89.816c7.984 8.56 15.352 17.696 21.992 27.384M256 16.2c20.384.696 40.104 4.008 58.832 9.656L256 84.688zm0 163.112 97.224-97.224-11.312-11.312L256 156.688v-49.376l75.648-75.648a230 230 0 0 1 33.288 16.088L352.048 60.64l11.312 11.312 15.44-15.44c9.688 6.64 18.824 14 27.384 21.992L256 228.688zM392 288c-57.344 0-104 46.656-104 104 0 30.088 12.92 57.144 33.408 76.152-21.08 7.032-43.008 10.912-65.408 11.664V256h223.816c-.752 22.392-4.664 44.304-11.688 65.384C449.12 300.904 422.072 288 392 288"
                                        fill="#1b8a5a"
                                        opacity={1}
                                        data-original="#000000"
                                        className="hovered-path"
                                    />
                                    <path
                                        d="m98.378 386.342 96-96 11.314 11.313-96 96zM184 352c-13.232 0-24 10.768-24 24s10.768 24 24 24 24-10.768 24-24-10.768-24-24-24m0 32c-4.408 0-8-3.584-8-8s3.592-8 8-8 8 3.584 8 8-3.592 8-8 8M120 288c-13.232 0-24 10.768-24 24s10.768 24 24 24 24-10.768 24-24-10.768-24-24-24m0 32c-4.408 0-8-3.584-8-8s3.592-8 8-8 8 3.584 8 8-3.592 8-8 8M392 384c-8.824 0-16-7.176-16-16s7.176-16 16-16 16 7.176 16 16h16c0-14.872-10.24-27.288-24-30.864V320h-16v17.136c-13.76 3.576-24 15.992-24 30.864 0 17.648 14.352 32 32 32 8.824 0 16 7.176 16 16s-7.176 16-16 16-16-7.176-16-16h-16c0 14.872 10.24 27.288 24 30.864V464h16v-17.136c13.76-3.576 24-15.992 24-30.864 0-17.648-14.352-32-32-32M448 384h16v16h-16zM320 384h16v16h-16z"
                                        fill="#1b8a5a"
                                        opacity={1}
                                        data-original="#000000"
                                        className="hovered-path"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div>
                            <div className="mb-1 font-heading text-2xl text-secondary md:mb-2 md:text-3xl lg:text-4xl">
                                <AnimatedStat from={10} to={90} suffix="+" />
                            </div>
                            <div className="text-sm font-medium md:text-base">
                                Portfolio Companies
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex w-full flex-col items-start gap-3 rounded-xl bg-white p-2 ring ring-gray-300 transition-shadow duration-300 hover:shadow-lg md:flex-row md:items-center md:gap-4 md:p-3"
                        variants={statsItemVariants}
                    >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-accent/10 p-2 md:size-18 md:rounded-xl md:p-3">
                            <svg
                                width={24}
                                height={24}
                                x={0}
                                y={0}
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                                className="size-full object-contain"
                            >
                                <g>
                                    <path
                                        d="M474.398 275.603h-124.25v-27.706a24 24 0 0 0 2.04-6.313l4.059-23.177c.883-5.04-.443-9.974-3.735-13.893-3.292-3.918-7.922-6.075-13.038-6.075h-41.502v-6.327c0-9-7.322-16.322-16.322-16.322h-51.299c-9 0-16.322 7.322-16.322 16.322v6.327h-41.502c-5.115 0-9.746 2.157-13.04 6.077-3.29 3.918-4.616 8.851-3.734 13.891l4.059 23.176a24 24 0 0 0 2.041 6.314v27.706H37.603a7 7 0 0 0-7 7c0 60.206 23.445 116.808 66.017 159.38s99.174 66.018 159.38 66.018 116.808-23.445 159.38-66.018 66.018-99.174 66.018-159.38a7 7 0 0 0-7-7m-110.71 14c-.68 39.55-7.107 77.164-18.539 109.422-25.786-11.105-53.606-17.351-82.148-18.23v-38.854h65.097c12.159 0 22.05-9.892 22.05-22.051v-30.287zm-187.836-29.275a25.7 25.7 0 0 0 8.617 1.478h44.993c.46 5.681 5.222 10.167 11.021 10.167h31.034c5.799 0 10.561-4.486 11.021-10.167h44.992c3.019 0 5.922-.522 8.617-1.478v59.562c0 4.439-3.611 8.051-8.05 8.051H183.902c-4.439 0-8.05-3.611-8.05-8.051zm67.564-2.355v-6.334h25.168v6.334zM249 490.363c-25.365-3.213-49.279-23.824-67.968-58.874-3.282-6.156-6.335-12.632-9.152-19.389 24.195-10.496 50.314-16.418 77.119-17.299v95.561zm-80.321-52.287c11.98 22.468 26.161 39.653 41.722 50.961-33.904-7.483-64.782-23.119-90.452-44.754a211.2 211.2 0 0 1 39.275-26.182c2.915 6.949 6.067 13.621 9.455 19.974zm184.097-19.974a211.2 211.2 0 0 1 39.275 26.182c-25.67 21.635-56.548 37.271-90.452 44.754 15.562-11.308 29.742-28.493 41.722-50.961 3.388-6.353 6.54-13.026 9.455-19.974zm-21.809 13.388c-18.689 35.05-42.602 55.66-67.967 58.874v-95.561c26.805.881 52.924 6.803 77.119 17.299-2.817 6.757-5.869 13.233-9.152 19.389zM228.028 192.113c0-1.259 1.063-2.322 2.322-2.322h51.299c1.258 0 2.322 1.063 2.322 2.322v6.327h-55.942v-6.327zm-57.823 21.409c.646-.769 1.318-1.082 2.32-1.082h166.947c1.002 0 1.674.313 2.318 1.08.646.769.838 1.484.665 2.472l-4.059 23.178c-.862 4.924-5.534 8.637-10.867 8.637h-44.992c-.46-5.681-5.222-10.167-11.021-10.167h-31.034c-5.799 0-10.561 4.486-11.021 10.167h-44.993c-5.333 0-10.005-3.713-10.867-8.638l-4.059-23.176c-.173-.988.02-1.704.664-2.471zm13.696 128.419h65.098v38.854c-28.543.879-56.363 7.125-82.149 18.23-11.432-32.258-17.859-69.872-18.539-109.422h13.539v30.287c0 12.159 9.892 22.051 22.05 22.051zM44.716 289.603h89.593c.694 41.633 7.57 81.327 19.814 115.383a225.2 225.2 0 0 0-44.665 29.836c-38.391-36.972-62.882-88.281-64.743-145.219zM402.54 434.822a225.2 225.2 0 0 0-44.665-29.836c12.245-34.056 19.12-73.75 19.814-115.383h89.594c-1.86 56.938-26.352 108.247-64.743 145.219M178.512 163.106h154.976a7 7 0 0 0 6.972-7.628c-1.892-21.001-11.516-40.451-27.098-54.77a84.6 84.6 0 0 0-30.297-17.925c10.331-8.07 16.992-20.631 16.992-34.726 0-24.293-19.764-44.058-44.057-44.058s-44.057 19.765-44.057 44.058c0 14.095 6.661 26.656 16.992 34.726a84.6 84.6 0 0 0-30.297 17.925c-15.583 14.318-25.206 33.77-27.098 54.77-.176 1.958.479 3.899 1.805 5.351s3.201 2.277 5.167 2.277M256 18c16.574 0 30.057 13.483 30.057 30.058S272.574 78.116 256 78.116s-30.057-13.483-30.057-30.058S239.426 18 256 18m0 74.365c34.292 0 62.899 23.903 69.42 56.741H186.58c6.521-32.838 35.128-56.741 69.42-56.741m247.052 143.432c-1.578-17.512-9.602-33.731-22.596-45.671a70.6 70.6 0 0 0-23.156-14.185c7.762-6.849 12.671-16.859 12.671-27.999 0-20.594-16.754-37.348-37.347-37.348s-37.347 16.754-37.347 37.348c0 11.14 4.909 21.15 12.671 27.999a70.6 70.6 0 0 0-23.157 14.185c-12.994 11.939-21.018 28.159-22.596 45.671-.176 1.958.479 3.899 1.805 5.351s3.201 2.277 5.167 2.277H496.08a7 7 0 0 0 6.972-7.628m-70.428-111.202c12.874 0 23.347 10.474 23.347 23.348s-10.473 23.347-23.347 23.347-23.347-10.474-23.347-23.347 10.474-23.348 23.347-23.348m-55.284 104.83c5.789-25.517 28.347-43.931 55.284-43.931s49.494 18.414 55.283 43.931zm-229.341 11.723a7 7 0 0 0 1.805-5.351c-1.578-17.513-9.603-33.731-22.596-45.671a70.6 70.6 0 0 0-23.156-14.185c7.762-6.849 12.671-16.859 12.671-27.999 0-20.594-16.753-37.348-37.347-37.348s-37.347 16.754-37.347 37.348c0 11.14 4.909 21.15 12.671 27.999a70.6 70.6 0 0 0-23.156 14.185c-12.994 11.939-21.018 28.159-22.596 45.671-.176 1.958.479 3.899 1.805 5.351s3.201 2.277 5.167 2.277h126.913a7 7 0 0 0 5.167-2.277zM79.376 124.595c12.874 0 23.347 10.474 23.347 23.348S92.25 171.29 79.376 171.29s-23.347-10.474-23.347-23.347 10.473-23.348 23.347-23.348m-55.283 104.83c5.789-25.517 28.347-43.931 55.283-43.931s49.494 18.414 55.284 43.931z"
                                        fill="#1b8a5a"
                                        opacity={1}
                                        data-original="#000000"
                                        className=""
                                    />
                                </g>
                            </svg>
                        </div>
                        <div>
                            <div className="mb-1 font-heading text-2xl text-secondary md:mb-2 md:text-3xl lg:text-4xl">
                                <AnimatedStat from={50} to={300} suffix="+" />
                            </div>
                            <div className="text-sm font-medium md:text-base">
                                Professionals
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
                    {/* <div className="h-full w-full overflow-hidden rounded-3xl">
                        <img
                            src="/images/power-grid-4.jpg"
                            alt="Aerial view of winding forest road"
                            className="h-full w-full object-cover"
                        />
                    </div> */}
                    <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                        <div className="overflow-hidden rounded-3xl lg:w-[88%]">
                            <img
                                src="/images/power-grid-4.jpg"
                                alt="Welder working in a workshop"
                                className="aspect-square w-full object-cover lg:aspect-auto lg:h-140"
                            />
                        </div>
                        <div className="absolute bottom-4 left-1/2 z-30 flex w-[90%] -translate-x-1/2 items-center gap-4 rounded-xl border border-gray-100 bg-white p-2 shadow-xl md:top-12 md:right-8 md:bottom-[unset] md:left-[unset] md:w-auto md:-translate-x-[unset] md:p-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 p-1">
                                <svg
                                    width={24}
                                    height={24}
                                    x={0}
                                    y={0}
                                    viewBox="0 0 500 500"
                                    xmlSpace="preserve"
                                    className="size-full object-contain"
                                >
                                    <g>
                                        <path
                                            fillRule="evenodd"
                                            d="M237.317 302.108v-46.444c0-3.708-3.01-6.701-6.718-6.701h-12.092l36.222-51.071v35.169c0 3.708 3.01 6.696 6.664 6.696h20.153zm57.181-75.749h-26.387v-49.496c0-6.496-8.404-9.186-12.146-3.88l-55.892 78.802c-3.142 4.431.032 10.582 5.482 10.582h18.38v60.782c0 6.484 8.353 9.197 12.146 3.869l63.899-90.082c3.121-4.397-.036-10.577-5.482-10.577m115.921 138.756c-12.414 0-22.518-10.087-22.518-22.502 0-12.409 10.104-22.496 22.518-22.496s22.518 10.087 22.518 22.496c0 12.414-10.103 22.502-22.518 22.502m-133.226 46.691c-5.213-6.024-12.361-10.302-20.476-11.839v-39.231c35.792-2.144 67.07-21.352 85.826-49.577l33.965 19.626a36.18 36.18 0 0 0 0 23.663zM250 457.728c-12.414 0-22.464-10.093-22.464-22.496 0-12.409 10.05-22.507 22.464-22.507s22.518 10.098 22.518 22.507c0 12.403-10.104 22.496-22.518 22.496M123.492 354.447a36.18 36.18 0 0 0 0-23.663l34.018-19.626c18.702 28.225 49.98 47.432 85.826 49.577v39.231a35.6 35.6 0 0 0-20.476 11.839zm-33.911 10.668c-12.414 0-22.464-10.087-22.464-22.502 0-12.409 10.05-22.496 22.464-22.496s22.518 10.087 22.518 22.496c0 12.414-10.104 22.502-22.518 22.502M67.117 157.382c0-12.398 10.05-22.497 22.464-22.497s22.518 10.098 22.518 22.497c0 12.414-10.103 22.507-22.518 22.507s-22.464-10.093-22.464-22.507m155.744-69.177a35.6 35.6 0 0 0 20.476 11.834v39.231c-35.846 2.144-67.124 21.346-85.826 49.582l-34.018-19.632a36.2 36.2 0 0 0 0-23.668zM250 42.267c12.414 0 22.518 10.098 22.518 22.507 0 12.404-10.103 22.502-22.518 22.502s-22.464-10.098-22.464-22.502c0-12.409 10.05-22.507 22.464-22.507m126.508 103.286a36.2 36.2 0 0 0 0 23.668l-33.965 19.632c-18.756-28.236-50.034-47.438-85.826-49.582V100.04c8.115-1.537 15.263-5.815 20.476-11.834zm33.911-10.668c12.414 0 22.518 10.098 22.518 22.497 0 12.414-10.103 22.507-22.518 22.507-12.414 0-22.518-10.093-22.518-22.507 0-12.399 10.104-22.497 22.518-22.497M96.299 307.348c8.115 1.537 15.262 5.82 20.475 11.845l34.018-19.632a110.63 110.63 0 0 1 0-99.111l-34.018-19.643c-5.213 6.024-12.361 10.302-20.475 11.85zM250 347.541c53.795 0 97.541-43.756 97.541-97.541 0-53.779-43.746-97.541-97.541-97.541-53.742 0-97.541 43.762-97.541 97.541 0 53.785 43.799 97.541 97.541 97.541m133.28-28.348a35.64 35.64 0 0 1 20.422-11.845v-114.69a35.7 35.7 0 0 1-20.422-11.85l-34.018 19.643a110.63 110.63 0 0 1 0 99.111zm33.857-11.845v-114.69c16.606-3.155 29.182-17.762 29.182-35.276 0-19.788-16.123-35.9-35.899-35.9-10.856 0-20.583 4.842-27.14 12.484l-99.368-57.364c8.046-23.098-9.03-47.733-33.911-47.733-24.513 0-42.047 24.219-33.857 47.733l-99.368 57.364c-6.61-7.642-16.337-12.484-27.193-12.484-19.777 0-35.9 16.112-35.9 35.9 0 17.514 12.629 32.121 29.236 35.276v114.69c-16.606 3.149-29.236 17.762-29.236 35.265 0 19.798 16.123 35.905 35.9 35.905 10.856 0 20.583-4.848 27.193-12.479l99.368 57.364c-8.189 23.549 9.364 47.728 33.857 47.728 24.861 0 41.957-24.596 33.911-47.728l99.368-57.364c6.557 7.631 16.284 12.479 27.14 12.479 19.777 0 35.899-16.106 35.899-35.905 0-17.504-12.576-32.116-29.182-35.265"
                                            clipRule="evenodd"
                                            fill="#009313"
                                            opacity={1}
                                            data-original="#000000"
                                            className=""
                                        />
                                    </g>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-0 font-heading text-3xl text-accent">
                                    150+
                                </p>
                                <p className="mb-0 text-sm font-medium text-black">
                                    years of combined experience
                                </p>
                            </div>
                        </div>

                        {/* Secondary Overlapping Image */}
                        <div className="absolute -right-6 -bottom-3 z-20 hidden overflow-hidden rounded-2xl shadow-lg ring-4 ring-slate-200 md:block md:w-[40%] lg:right-0 lg:bottom-0 lg:w-[60%]">
                            <img
                                src="/images/forest-power-grid.jpg"
                                alt="Industrial pipelines"
                                className="h-50 w-full object-cover lg:h-75"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <TopLabel text="Who We Are" />
                        <h2>We Build Complex Infrastructure</h2>
                        <p className="font-medium md:text-lg">
                            Where Others See Complexity, We See Opportunity
                        </p>
                        <p>
                            Cube Grid Advisors is a portfolio company of I
                            Squared Capital — the leading independent global
                            infrastructure investor managing $50 billion+ in
                            assets. We are an integrated energy infrastructure
                            platform focused on identifying, developing,
                            constructing, operating, and scaling complex assets
                            across India's power value chain.
                        </p>

                        <p>
                            India's energy transition demands ₹2.44 lakh crore
                            in new transmission infrastructure, 103 GW of pumped
                            hydro, and 5 MMTPA of green hydrogen....
                        </p>
                        <ul className="mb-6 space-y-3 md:mb-10 md:space-y-4">
                            {[
                                'Transmission — HVAC / HVDC / Substations',
                                'EPC for Renewable Evacuation Lines',
                                'Nuclear Power (Shanti)',
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 md:gap-4"
                                >
                                    <div className="mt-1 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-primary md:mt-px md:size-5.5">
                                        <svg
                                            className="size-3 text-white md:size-3.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={3}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <span className="font-semibold text-gray-900">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-2 mb-2">
                           <Link href="#" className='ring-2 ring-accent px-6 py-3 rounded-sm font-heading text-lg hover:bg-accent transition-all duration-300 hover:text-white'>Explore</Link>
                        </div>

                        {/* <div className="flex items-center gap-4">
                            <div className="flex">
                                <img
                                    className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm grayscale"
                                    src="https://github.com/maxleiter.png"
                                    alt="Team member"
                                />
                            </div>
                            <p className="mb-0 text-base text-gray-800">
                                <span className="mr-1 text-xl font-medium">
                                    10M+
                                </span>
                                <span className="text-gray-700">
                                    People Powered Sustainably
                                </span>
                            </p>
                        </div> */}
                    </div>
                </div>
            </MaxWidthWrapper>
            <section className="relative overflow-hidden bg-white pt-16 pb-6 md:pb-16">
                <MaxWidthWrapper>
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24">
                        <div className="order-2 lg:order-1">
                            <TopLabel text="Our Investor" />
                            <h2>Owned by I Squared Capital</h2>

                            <p className="font-medium md:text-lg">
                                Cube Grid Advisors is a portfolio company of I
                                Squared Capital
                            </p>
                            <p className="mb-0">
                                I Squared Capital is a leading global
                                infrastructure investment manager with $50
                                billion+ in assets under management. Founded in
                                2012, I Squared builds and scales essential
                                infrastructure businesses across global markets.
                            </p>
                            <div className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-2">
                                {[
                                    '$50B+ in assets under management',
                                    '90+ portfolio companies globally',
                                    '70+ countries of operation',
                                    '300+ infrastructure professionals',
                                ].map((point) => (
                                    <div
                                        key={point}
                                        className="flex items-start gap-3 font-semibold text-gray-900"
                                    >
                                        <div className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-accent">
                                            <svg
                                                className="h-3.5 w-3.5 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={3}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        {point}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 flex h-40 items-center justify-center rounded-lg overflow-hidden shadow-md ring ring-gray-200 md:order-2 md:h-auto md:rounded-2xl lg:shadow-xl">
                            <img
                                src="/images/isquare-img.webp"
                                alt=""
                                className="size-full object-cover"
                            />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <OurBusiness />
            {/* <TransmissionSolutions /> */}
            <OurApproachTwo />

            {/* <Leadership /> */}
            {/* <Capabilities /> */}
            {/* <WhyChooseUs /> */}
            {/* <Clients /> */}
            <SustainabilityCsr />
            <NewsAndUpdatesTwo />
            <PowerCTA />
            {/* <FormSection /> */}
            <Footer />
        </>
    );
}
