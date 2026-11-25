import MaxWidthWrapper from '@/components/max-width-wrapper';
import { Link } from '@inertiajs/react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { arr, BlockProps } from './shared';

export default function EventsList({ data }: BlockProps) {
    const events = arr(data.events);
    return (
        <MaxWidthWrapper className="pt-16 pb-24 md:pt-24 md:pb-24">
            {events.length === 0 && <p className="py-10 text-center text-gray-500">{data.empty_text}</p>}
            <div className="grid grid-cols-1 gap-8">
                {events.map((event) => (
                    <div key={event.id} className="group ring-border relative grid gap-4 overflow-hidden rounded-xl bg-[#f4f4f4] p-3 shadow-sm ring transition-all duration-300 hover:shadow-md lg:grid-cols-12 lg:gap-8">
                        {event.date && (
                            <div className="absolute top-4 right-4 z-10 mb-4 w-max rounded-full bg-white px-3 py-1.5 text-xs font-medium">
                                <span className="flex items-center">
                                    <CalendarDays className="mr-1.5 h-3.5 w-3.5 text-accent" />
                                    {event.date}
                                </span>
                            </div>
                        )}
                        <div className="bg-muted relative w-full overflow-hidden rounded-md lg:col-span-3">
                            <img src={event.image || '/images/events.png'} alt={event.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="flex grow flex-col space-y-4 py-2 lg:col-span-9 lg:p-6 lg:py-6">
                            <div className="relative grow space-y-2">
                                <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-primary">{event.title}</h3>
                                {event.description && <p className="mb-4 line-clamp-2">{event.description}</p>}
                                <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                                    {event.time && (
                                        <span className="flex items-center">
                                            <Clock className="mr-1.5 h-3.5 w-3.5 text-accent" />
                                            {event.time}
                                        </span>
                                    )}
                                    {event.location && (
                                        <span className="flex items-center text-sm">
                                            <MapPin className="mr-1 h-3.5 w-3.5 shrink-0 text-accent" />
                                            <span className="max-w-50 truncate">{event.location}</span>
                                        </span>
                                    )}
                                </div>
                                {data.button_text && (
                                    <div className="mt-8">
                                        <Link href={data.button_link || '#'} className="rounded-sm px-6 py-2 pt-2.5 font-heading text-lg ring-2 ring-primary transition-all duration-300 hover:bg-primary hover:text-white">
                                            {data.button_text}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}
