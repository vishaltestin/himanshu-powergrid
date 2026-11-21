import Footer from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { NavbarTwo } from '@/components/navbar-2';
import { ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <>
            {/* <NavbarTwo /> */}
            <main className="grow">{children}</main>
            {/* <Footer /> */}
        </>
    );
}
