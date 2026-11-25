import PageBanner from '@/components/common/page-banner';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowLeft, ArrowUpRight, CalendarDays } from 'lucide-react';

type Card = { id: number; title: string; href: string; image: string; date: string; description?: string; type?: string };

export default function Post({ post, related, meta }: { post: Card & { body?: string; typeKey: string }; related: Card[]; meta: any }) {
    const settings: Record<string, any> = (usePage().props as any).settings ?? {};
    const back = post.typeKey === 'blog' ? '/blogs' : '/news';

    return (
        <>
            <Head title={meta.title}>
                {meta.description && <meta name="description" content={meta.description} />}
                {meta.image && <meta property="og:image" content={meta.image} />}
            </Head>
            <NavbarThree />
            <PageBanner title={post.type || ''} image={settings.post_banner_image || '/images/news.jpg'} />
            <MaxWidthWrapper className="max-w-5xl pt-12 pb-16 md:pt-20">
                <Link href={back} className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent">
                    <ArrowLeft size={16} /> {settings.label_back || 'Back'}
                </Link>
                <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <CalendarDays size={16} className="text-primary" /> {post.date}
                </p>
                <h1 className="mb-8 font-heading text-3xl md:text-5xl">{post.title}</h1>
                {post.image && <img src={post.image} alt={post.title} className="mb-10 aspect-video w-full rounded-2xl object-cover" />}
                {post.body ? (
                    <div className="rich-text [&_li]:mb-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6" dangerouslySetInnerHTML={{ __html: post.body }} />
                ) : (
                    post.description && <p className="md:text-lg">{post.description}</p>
                )}
            </MaxWidthWrapper>
            {related.length > 0 && (
                <section className="bg-[#f4f4f4] py-16">
                    <MaxWidthWrapper>
                        <h2 className="mb-8">{settings.label_related_posts || 'Related'}</h2>
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {related.map((item) => (
                                <Link key={item.id} href={item.href} className="group flex flex-col rounded-2xl bg-white p-2 ring ring-gray-200">
                                    <div className="relative mb-4 aspect-video overflow-hidden rounded-xl">
                                        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <span className="absolute right-4 bottom-4 flex size-12 translate-y-20 items-center justify-center rounded-full bg-yellow-500 text-white transition-all duration-300 group-hover:translate-y-0">
                                            <ArrowUpRight size={22} />
                                        </span>
                                    </div>
                                    <div className="px-2 pb-2">
                                        <p className="mb-1 text-xs font-semibold text-gray-600">{item.date}</p>
                                        <h3 className="mb-0 text-lg font-medium group-hover:text-accent">{item.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </MaxWidthWrapper>
                </section>
            )}
            <Footer />
        </>
    );
}
