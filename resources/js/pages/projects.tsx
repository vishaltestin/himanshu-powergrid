import PageBanner from '@/components/common/page-banner';
import TopLabel from '@/components/common/top-label';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, CornerDownLeftIcon } from 'lucide-react';
import { useState } from 'react';

const defaultProjects = [
    {
        category: "under construction",
        title: "Coming Soon...",
        description:
            "Stay tuned for updates and more details coming soon.",
        location: "North India, India",
        image:
            "images/transmission-infra.jpg",
    },
    // {
    //     category: "under construction",
    //     title: "Powering Goa Without Compromising Its Forests",
    //     description:
    //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex commodi recusandae velit consectetur.",
    //     location: "North India, India",
    //     image:
    //         "images/sustain-2.jpg",
    // },
    // {
    //     category: "operational",
    //     title: "The Northeast's Newest Gateway to Power",
    //     description:
    //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex commodi recusandae velit consectetur.",
    //     location: "North India, India",
    //     image:
    //         "images/forest-power-grid.jpg",
    // },
    // {
    //     category: "under construction",
    //     title: "Bringing Power to the People of the Valley",
    //     description:
    //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex commodi recusandae velit consectetur.",
    //     location: "North India, India",
    //     image:
    //         "images/solar-wind-grid.jpg",
    // },
    // {
    //     category: "operational",
    //     title: "The Northeast's Newest Gateway to Power",
    //     description:
    //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex commodi recusandae velit consectetur.",
    //     location: "North India, India",
    //     image:
    //         "images/forest-power-grid.jpg",
    // },
    // {
    //     category: "under construction",
    //     title: "Bringing Power to the People of the Valley",
    //     description:
    //         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex commodi recusandae velit consectetur.",
    //     location: "North India, India",
    //     image:
    //         "images/solar-wind-grid.jpg",
    // },
];

export default function Projects({ content }: { content?: any }) {
    const c = content ?? {};

    const projects = (
        Array.isArray(c.projects) && c.projects.length
            ? c.projects.map((item: any, i: number) => ({
                  category: item?.category || 'under construction',
                  title: item?.title || '',
                  description: item?.description || '',
                  location: item?.location || '',
                  image: item?.image || defaultProjects[i]?.image || 'images/transmission-infra.jpg',
              }))
            : defaultProjects
    ).filter((item: any) => item.title);

    return (
        <>
            <NavbarThree />
            <PageBanner title={content?.banner_title || "Projects"} image={content?.banner_image || "/images/project.avif"} />
            <MaxWidthWrapper className="pt-12 lg:pt-24 pb-12 md:pb-16">
                <div className="mb-16 flex flex-col items-center text-center">
                        <TopLabel text={c.section_label || 'SELECTED PROJECTS'} />
                        <h2>{c.section_heading || 'We Build Complex Infrastructure'}</h2>
                    {c.section_intro ? (
                        <div className='rich-text md:text-lg max-w-4xl mb-0' dangerouslySetInnerHTML={{ __html: c.section_intro }} />
                    ) : (
                        <p className='md:text-lg max-w-4xl mb-0'>We are an integrated energy infrastructure platform focused on identifying, developing, constructing, operating, and scaling complex assets across India's power value chain.</p>
                    )}
                </div>
                <div className="grid lg:grid-cols-3 gap-12">
                    {projects.map((project: any, index: number) => (
                        <Link href='#' className="group" key={index}>
                            <div className="relative h-70 overflow-hidden rounded-xl bg-gray-200">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-800 ease-out group-hover:scale-110"
                                />
                                <div className="absolute left-4 top-4">
                                    <span className="inline-flex rounded-sm uppercase bg-white px-3 pb-1 pt-1.5 tracking-tighter font-semibold text-black text-sm shadow-sm">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                            <div className="pt-5">
                                <h3 className="text-2xl md:text-3xl font-heading">
                                    {project.title}
                                </h3>

                                <p className="mt-4">
                                    {project.description}
                                </p>
                                <div className="mt-3 flex items-center justify-between custom-border-top-200 pt-2">
                                    <span className="font-medium text-accent">
                                        {project.location}
                                    </span>

                                    <span
                                        className="group/link relative inline-flex items-center gap-2 pb-1 font-semibold hover:text-accent text-primary"
                                    >
                                        <span>View Project</span>

                                        <ArrowUpRight size={16} />

                                        <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover/link:w-full" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </MaxWidthWrapper>

            <Footer />
        </>
    );
}
