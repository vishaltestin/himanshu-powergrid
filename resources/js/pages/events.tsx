import PageBanner from '@/components/common/page-banner';
import ThemeButton from '@/components/common/theme-button';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { Link } from '@inertiajs/react';
import { Calendar, MapPin, Clock, ArrowRight, Tag, CalendarDays } from 'lucide-react';
interface EventItem {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    category: string;
    image: string;
    price: string;
    status: 'Upcoming' | 'Sold Out' | 'Free';
}

const fallbackEvents: EventItem[] = [
    {
        id: '1',
        title: 'Coming Soon',
        description:
            'Stay tuned for updates and more details coming soon.',
        date: 'November 15, 2026',
        time: '9:00 AM - 5:00 PM',
        location: 'India',
        category: 'Power Transmission',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
        price: '$149',
        status: 'Upcoming',
    },
    // {
    //     id: '2',
    //     title: 'Coming Soon: CubeGrid Advisors',
    //     description:
    //         'Participate in a hands-on workshop exploring smart grid integration, transmission line monitoring, grid automation, and advanced technologies for improving power system reliability and efficiency.',
    //     date: 'November 28, 2026',
    //     time: '1:00 PM - 4:00 PM',
    //     location: 'India, Pune',
    //     category: 'Grid Technology',
    //     image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    //     price: 'Free',
    //     status: 'Free',
    // },
    // {
    //     id: '3',
    //     title: 'Coming Soon: CubeGrid Advisors',
    //     description:
    //         'Connect with power sector professionals, transmission engineers, energy developers, and infrastructure specialists to exchange ideas on grid expansion, renewable energy integration, and future transmission projects.',
    //     date: 'December 5, 2026',
    //     time: '6:30 PM - 9:30 PM',
    //     location: 'India, New Delhi',
    //     category: 'Networking',
    //     image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    //     price: '$49',
    //     status: 'Upcoming',
    // },
    // {
    //     id: '4',
    //     title: 'Coming Soon: CubeGrid Advisors',
    //     description:
    //         'Discover engineering advancements in high-voltage transmission lines, substation infrastructure, grid protection systems, and resilient power networks designed to meet growing energy demands.',
    //     date: 'December 18, 2026',
    //     time: '10:00 AM - 3:00 PM',
    //     location: 'India, Mumbai',
    //     category: 'Engineering',
    //     image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800',
    //     price: '$99',
    //     status: 'Sold Out',
    // },
];

export default function Events({ events: serverEvents, content }: { events?: EventItem[]; content?: any }) {
    const events = serverEvents && serverEvents.length > 0 ? serverEvents : fallbackEvents;
    const bannerTitle = content?.banner_title || 'Events';
    const bannerImage = content?.banner_image || '/images/events.png';

    return (
        <>
            <NavbarThree />
            <PageBanner title={bannerTitle} image={bannerImage} />
            <MaxWidthWrapper className="pt-16 pb-24 md:pt-24 md:pb-24">
                <div className="space-y-12">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="group relative grid lg:grid-cols-12 gap-4 lg:gap-8 overflow-hidden rounded-xl bg-[#f4f4f4] p-3 shadow-sm ring ring-border transition-all duration-300 hover:shadow-md"
                            >
                                <div className="absolute top-4 right-4 mb-4 w-max rounded-full bg-white px-3 py-1.5 text-xs font-medium">
                                    <span className="flex items-center">
                                        <CalendarDays className="mr-1.5 h-3.5 w-3.5 text-accent" />
                                        {event.date}
                                    </span>
                                </div>

                                <div className="relative lg:col-span-3 w-full overflow-hidden rounded-md bg-muted">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="lg:col-span-9 flex grow flex-col space-y-4 py-2 lg:py-6 lg:p-6">
                                    <div className="relative grow space-y-2">
                                        <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                                            {event.title}
                                        </h3>

                                        <p className="mb-4 line-clamp-2">
                                            {event.description}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                                            <span className="flex items-center">
                                                <Clock className="mr-1.5 h-3.5 w-3.5 text-accent" />
                                                {event.time}
                                            </span>
                                            <span className="flex items-center text-sm">
                                                <MapPin className="mr-1 h-3.5 w-3.5 shrink-0 text-accent" />
                                                <span className="max-w-50 truncate">
                                                    {event.location}
                                                </span>
                                            </span>
                                        </div>
                                        <div className="mt-8">
                                            <Link
                                                href="#"
                                                className="rounded-sm px-6 py-2 pt-2.5 font-heading text-lg ring-2 ring-primary transition-all duration-300 hover:bg-primary hover:text-white"
                                            >
                                                Coming Soon
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
            <Footer />
        </>
    );
}
