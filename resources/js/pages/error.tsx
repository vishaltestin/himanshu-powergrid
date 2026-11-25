import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import { Head, Link, usePage } from '@inertiajs/react';

export default function ErrorPage({ status }: { status: number }) {
    const settings: Record<string, any> = (usePage().props as any).settings ?? {};
    return (
        <>
            <Head title={settings.not_found_title} />
            <NavbarThree />
            <MaxWidthWrapper className="flex min-h-[70vh] flex-col items-center justify-center pt-40 pb-24 text-center">
                <p className="mb-2 font-heading text-8xl text-accent">{status}</p>
                <h1 className="mb-4 text-3xl md:text-5xl">{settings.not_found_title}</h1>
                <p className="mb-8 max-w-xl md:text-lg">{settings.not_found_text}</p>
                <Link href="/" className="rounded-sm px-6 py-3 font-heading text-lg ring-2 ring-primary transition-all duration-300 hover:bg-primary hover:text-white">
                    {settings.not_found_button}
                </Link>
            </MaxWidthWrapper>
            <Footer />
        </>
    );
}
