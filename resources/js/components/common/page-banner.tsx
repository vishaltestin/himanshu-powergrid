import MaxWidthWrapper from "../max-width-wrapper";

interface PageBannerProps {
    title: string;
    subtitle?: string;
    image?: string;
}

function PageBanner({
    title,
    subtitle,
    image = '/images/sustain-3.webp',
}: PageBannerProps) {
    return (
        <div className="relative h-40 py-4 lg:h-118 lg:py-10 overflow-hidden">
            <img
                src={image}
                alt=""
                className="absolute inset-0 object-center w-full h-full object-cover"
            />
            <MaxWidthWrapper className="relative z-2 flex flex-col items-start justify-end text-white">
                <h1 className="mb-0 lg:mb-4 text-4xl font-heading font-medium lg:text-7xl drop-shadow-lg">{title}</h1>
                {subtitle && <p className="max-w-3xl drop-shadow-lg text-xl">{subtitle}</p>}
            </MaxWidthWrapper>
        </div>
    );
}

export default PageBanner;
