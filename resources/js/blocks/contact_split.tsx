import DynamicForm from '@/components/blocks/dynamic-form';
import TopLabel from '@/components/common/top-label';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { arr, BlockProps, Html, Icon, useSettings } from './shared';

export default function ContactSplit({ data, sectionId }: BlockProps) {
    const settings = useSettings();
    const contacts = arr(data.contacts)
        .map((c) => ({ ...c, value: c.value || (c.setting ? settings[c.setting] : '') }))
        .filter((c) => c.value);
    const features = arr(data.features).filter((f) => f.title);

    return (
        <section className="custom-border-bottom-200 relative w-full overflow-hidden bg-white py-20 lg:py-24">
            {data.side_image && (
                <div className="absolute top-0 right-0 z-0 hidden h-full w-[36%] lg:block">
                    <img src={data.side_image} alt="" className="h-full w-full object-cover" />
                </div>
            )}
            <MaxWidthWrapper>
                <div className="relative z-10 grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
                    <div className="max-w-4xl">
                        {data.label && <TopLabel text={data.label} />}
                        {data.heading && <h2>{data.heading}</h2>}
                        <Html html={data.intro} className="mb-10" />
                        {contacts.length > 0 && (
                            <div className="flex flex-col items-start gap-3">
                                {contacts.map((c, i) => (
                                    <div key={i} className="flex items-start gap-5">
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-yellow-50 text-yellow-500 ring ring-yellow-200">
                                            <Icon name={c.icon || 'mail'} className="size-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-800">{c.title}</h3>
                                            <p className="text-lg font-medium whitespace-pre-line">{c.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {features.length > 0 && (
                            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {features.map((f, i) => (
                                    <div key={i} className="flex items-start gap-5 rounded-xl bg-gray-100 p-3">
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-white ring ring-gray-200">
                                            <Icon name={f.icon || 'building-2'} className="h-6 w-6 text-black" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1.5 text-lg font-medium text-black">{f.title}</h3>
                                            <p className="mb-0 text-sm">{f.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="mx-auto w-full max-w-lg rounded-2xl shadow-2xl lg:mr-0 lg:ml-auto">
                        <div className="overflow-hidden rounded-2xl bg-white p-8 ring ring-accent md:p-10">
                            {data.form_heading && <h3 className="mb-3 text-3xl font-semibold text-black">{data.form_heading}</h3>}
                            {data.form_intro && <p className="mb-8 text-sm text-gray-400">{data.form_intro}</p>}
                            <DynamicForm sectionId={sectionId} data={data} labelStyle="hidden" />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}
