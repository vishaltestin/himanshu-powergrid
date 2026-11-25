import { createInertiaApp, router } from '@inertiajs/react';
import AppLayout from './layout/app-layout';
import { ReactNode } from 'react';
import '../css/app.css'
import { createRoot } from 'react-dom/client';
import { Toaster } from './components/ui/sonner';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Browser-title suffix comes from Admin → Settings → Site name.
let siteName: string = appName;
const readSiteName = (props: any) => {
    if (props?.settings?.site_name) siteName = props.settings.site_name;
};

createInertiaApp({
    title: (title) => (title ? `${title} - ${siteName}` : siteName),
    resolve: (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
        const page: any = pages[`./pages/${name}.tsx`];

        page.default.layout = page.default.layout || ((pageContent: ReactNode) => <AppLayout>{pageContent}</AppLayout>);

        return page;
    },
    setup({ el, App, props }) {
        readSiteName(props.initialPage.props);
        router.on('navigate', (event) => readSiteName(event.detail.page.props));

        createRoot(el).render(
            <>
                <Toaster richColors position="top-center" toastOptions={{
                    className: 'min-h-[4rem] !text-sm',
                    style: {
                        padding: '14px 30px',
                    },
                }}
                    closeButton
                />

                <App {...props} />
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
