import { Button } from '@/components/ui/button';
import { TextField } from '@/components/admin/fields';
import { useForm, usePage } from '@inertiajs/react';
import {
    Calendar,
    FileText,
    Image as ImageIcon,
    Inbox,
    Loader2,
    Lock,
    Mail,
} from 'lucide-react';
import { FormEvent } from 'react';

export default function AdminLogin() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const { props } = usePage<any>();
    const siteName = props.settings?.site_name || 'CubeGrid Advisors';

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post('/admin/login');
    };

    return (
        <div className="flex min-h-screen bg-slate-950">
            {/* Brand panel */}
            <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-slate-950 p-12 lg:flex">
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-emerald-500/10 via-transparent to-transparent" />
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '44px 44px',
                    }}
                />

                <div className="relative flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-linear-to-br from-accent to-emerald-600 font-bold text-slate-950">
                        {(siteName as string).charAt(0)}
                    </div>
                    <div>
                        <p className="font-semibold text-white">{siteName}</p>
                        <p className="text-xs tracking-wide text-slate-500">Content Manager</p>
                    </div>
                </div>

                <div className="relative">
                    <h1 className="max-w-md text-4xl font-semibold tracking-tight text-white">
                        Every word, image and banner on your website — editable.
                    </h1>
                    <p className="mt-4 max-w-md text-slate-400">
                        Pages, banners, team, blogs, events, menus, form submissions and
                        settings — all in one place, with the design left untouched.
                    </p>

                    <div className="mt-10 grid max-w-md grid-cols-2 gap-3">
                        {[
                            { icon: <FileText size={16} />, label: 'Page content editor' },
                            { icon: <ImageIcon size={16} />, label: 'Media library' },
                            { icon: <Inbox size={16} />, label: 'Form inbox & CSV export' },
                            { icon: <Calendar size={16} />, label: 'Blogs, events & menus' },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-3.5 py-3 text-sm text-slate-300"
                            >
                                <span className="text-accent">{item.icon}</span>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>

                <p className="relative text-xs text-slate-600">
                    © {new Date().getFullYear()} {siteName}
                </p>
            </div>

            {/* Form panel */}
            <div className="flex w-full items-center justify-center bg-gray-100 px-4 lg:w-1/2">
                <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl sm:p-10">
                    <div className="mb-8 lg:hidden">
                        <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-linear-to-br from-accent to-emerald-600 font-bold text-slate-950">
                            {(siteName as string).charAt(0)}
                        </div>
                        <p className="text-sm text-gray-500">{siteName} — Admin</p>
                    </div>

                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
                        Sign in
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        Welcome back. Enter your admin credentials.
                    </p>

                    <form onSubmit={submit} className="mt-8 space-y-5">
                        <div className="relative">
                            <Mail
                                size={16}
                                className="pointer-events-none absolute top-3.5 left-3.5 text-gray-400"
                            />
                            <TextField
                                type="email"
                                required
                                autoFocus
                                placeholder="you@company.com"
                                label="Email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                error={(errors as any)?.email}
                                className="[& input]:pl-10"
                            />
                        </div>

                        <div className="relative">
                            <Lock
                                size={16}
                                className="pointer-events-none absolute top-3.5 left-3.5 text-gray-400"
                            />
                            <TextField
                                type="password"
                                required
                                placeholder="••••••••"
                                label="Password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                error={(errors as any)?.password}
                                className="[& input]:pl-10"
                            />
                        </div>

                        <Button type="submit" className="w-full" disabled={processing}>
                            {processing && <Loader2 className="size-4 animate-spin" />}
                            Sign in to dashboard
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
