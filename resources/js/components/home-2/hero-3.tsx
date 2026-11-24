import AnimatedButton from "../common/animated-button";
import ThemeButton from "../common/theme-button";

function HeroThree({ content }: { content?: any }) {
    const c = content ?? {};
  return (
    <div className='w-full h-164 relative'>
        {/* <img 
            src="/images/banner-1.png" 
            alt="" 
            className='absolute inset-0 w-full h-full object-cover object-top' 
        /> */}
        <video src={c.hero_video || '/images/power-5-b.mp4'} autoPlay loop muted className='absolute inset-0 w-full h-full object-cover object-center' />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Bottom-left aligned content */}
        <div className='absolute bottom-10 left-0 w-full z-10 p-8 md:p-12 lg:p-24'>
            <h1 className='text-5xl md:text-7xl uppercase leading-20 font-heading-2 font-semibold text-white drop-shadow-lg'>
                {(c.hero_heading || "Powering India's Green Transition").split(' [br] ')[0]}
                {(c.hero_heading || '').includes(' [br] ') && <br />}
                {(c.hero_heading || "Powering India's Green Transition").split(' [br] ')[1] ?? ''}
                {!(c.hero_heading || '').includes(' [br] ') && ''}
            </h1>
            
            {/* Added Paragraph */}
            <p className='mt-4 mb-8 max-w-4xl text-lg md:text-xl text-white drop-shadow-md'>
                {c.hero_text || 'Building the critical energy infrastructure that India needs — from high-voltage HVDC transmission lines to pumped hydro storage, from nuclear power to green hydrogen.'}
            </p>
            {c.hero_button_href ? (
                <a href={c.hero_button_href} className='group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-white px-7 py-3.5 font-semibold text-black transition-colors duration-300 hover:bg-accent hover:text-white'>
                    {c.hero_button || 'Partner With Us'}
                </a>
            ) : (
                <AnimatedButton text={c.hero_button || 'Partner With Us'} />
            )}
        </div>
    </div>
  )
}

export default HeroThree;