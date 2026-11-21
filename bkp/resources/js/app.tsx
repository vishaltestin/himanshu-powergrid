import { createInertiaApp } from '@inertiajs/react';
import AppLayout from './layout/app-layout';
import { ReactNode } from 'react';
import '../css/app.css'
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/sonner';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: 1,
            staleTime: 5 * 60 * 1000,
        },
    },
});


createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
        let page: any = pages[`./pages/${name}.tsx`];

        page.default.layout = page.default.layout || ((pageContent: ReactNode) => (
            <AppLayout>{pageContent}</AppLayout>
        ));

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <QueryClientProvider client={queryClient}>
                <Toaster richColors position="top-center" toastOptions={{
                    className: 'min-h-[4rem] !text-sm',
                    style: {
                        padding: '14px 30px',
                    },
                }}
                    closeButton
                />

                <App {...props} />
            </QueryClientProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
