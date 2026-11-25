import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
    return <main className="grow">{children}</main>;
}
