import { Download, Eye } from 'lucide-react';
import { useState } from 'react';

import PageBanner from '@/components/common/page-banner';
import Footer from '@/components/footer';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import { NavbarThree } from '@/components/navbar-3';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

interface CertificateItem {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    pdfUrl?: string;
    fileSize?: string;
    issuedYear?: string;
}

const DEFAULT_CERTIFICATES: CertificateItem[] = [
    {
        id: 1,
        title: 'Coming Soon',
        category: 'Quality Assurance',
        description:
            'Certified for design, construction, and commissioning of high-voltage transmission systems.',
        image: '/images/certificate.jpg',
        pdfUrl: '#',
        fileSize: '1.8 MB',
        issuedYear: '2024',
    },
    {
        id: 2,
        title: 'Coming Soon',
        category: 'Environmental',
        description:
            'Validation of environmental protection standards and green grid corridor sustainability.',
        image: '/images/certificate.jpg',
        pdfUrl: '#',
        fileSize: '2.1 MB',
        issuedYear: '2024',
    },
    {
        id: 3,
        title: 'Coming Soon',
        category: 'Occupational Safety',
        description:
            'Zero-harm policy compliance across live-line operations and high-altitude tower erection.',
        image: '/images/certificate.jpg',
        pdfUrl: '#',
        fileSize: '1.5 MB',
        issuedYear: '2023',
    },
    {
        id: 4,
        title: 'Coming Soon',
        category: 'Grid Compliance',
        description:
            'Statutory grid clearance for bulk transmission infrastructure and substation integration.',
        image: '/images/certificate.jpg',
        pdfUrl: '#',
        fileSize: '3.4 MB',
        issuedYear: '2023',
    },
];

function Certificate({ content }: { content?: any }) {
    const c = content ?? {};

    const CERTIFICATES: CertificateItem[] = (
        Array.isArray(c.certificates) && c.certificates.length
            ? c.certificates.map((item: any, i: number) => ({
                  id: i + 1,
                  title: item?.title || 'Coming Soon',
                  category: item?.category || '',
                  description: item?.description || '',
                  image: item?.image || '/images/certificate.jpg',
                  pdfUrl: item?.pdf_url || '#',
                  fileSize: item?.file_size || '',
                  issuedYear: item?.issued_year || '',
              }))
            : DEFAULT_CERTIFICATES
    ).filter((item: any) => item.title || item.category);

    const [selectedImage, setSelectedImage] = useState<CertificateItem | null>(
        null,
    );

    return (
        <>
            <NavbarThree />
            <PageBanner title={content?.banner_title || "Certifications"} image={content?.banner_image || "/images/certi.png"} />
            <MaxWidthWrapper className="py-24">
                <div className="mb-8 flex flex-col items-center text-center md:mb-12">
                    <h2>{c.section_heading || 'Verified Accreditations'}</h2>
                    {c.section_intro ? (
                        <div className="rich-text md:max-w-4xl md:text-lg" dangerouslySetInnerHTML={{ __html: c.section_intro }} />
                    ) : (
                        <p className="md:max-w-4xl md:text-lg">
                            All certifications are vetted annually by accredited
                            global auditing boards.
                        </p>
                    )}
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {CERTIFICATES.map((cert) => (
                        <div
                            key={cert.id}
                            className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_2px_8px_rgba(15,23,42,0.04)] ring ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.09)] hover:ring-accent"
                        >
                            <div className="relative flex h-80 items-center justify-center overflow-hidden bg-gray-100 p-3">
                                <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>

                                {cert.issuedYear && (
                                    <span className="absolute top-2.5 right-2.5 rounded bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-slate-700 shadow-xs ring ring-slate-200/60 backdrop-blur-xs">
                                        {cert.issuedYear}
                                    </span>
                                )}

                                <button
                                    type="button"
                                    onClick={() => setSelectedImage(cert)}
                                    className="absolute inset-0 flex cursor-pointer items-center justify-center gap-2 bg-slate-900/30 opacity-0 backdrop-blur-[1px] transition-opacity duration-200 group-hover:opacity-100"
                                >
                                    <span className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 text-xs font-semibold text-accent shadow-md transition-all duration-300 hover:bg-accent hover:text-white">
                                        <Eye size={18} /> Preview
                                    </span>
                                </button>
                            </div>

                            <div className="flex flex-1 flex-col justify-between p-4">
                                <div>
                                    <div className="mb-1.5 flex items-center justify-between gap-1">
                                        <span className="text-xs font-medium tracking-wide text-accent uppercase">
                                            {cert.category}
                                        </span>
                                    </div>

                                    <h3 className="line-clamp-2 text-lg font-semibold">
                                        {cert.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
            <Dialog
                open={!!selectedImage}
                onOpenChange={(open) => {
                    if (!open) {
                        setSelectedImage(null);
                    }
                }}
            >
                {selectedImage && (
                    <DialogContent className="max-h-[95vh] sm:max-w-5xl overflow-hidden p-0 gap-0">
                        <DialogHeader className="border-b px-6 py-4">
                            <DialogTitle className='font-sans text-xl mb-0'>{selectedImage.title}</DialogTitle>
                        </DialogHeader>

                        <div className="flex max-h-[calc(95vh-80px)] justify-center overflow-auto bg-slate-100 p-4">
                            {selectedImage.pdfUrl &&
                            selectedImage.pdfUrl !== '#' ? (
                                <iframe
                                    src={selectedImage.pdfUrl}
                                    title={selectedImage.title}
                                    className="h-[75vh] w-full rounded-md bg-white"
                                />
                            ) : (
                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="max-h-[75vh] max-w-full object-contain"
                                />
                            )}
                        </div>
                    </DialogContent>
                )}
            </Dialog>
            <Footer />
        </>
    );
}

export default Certificate;
