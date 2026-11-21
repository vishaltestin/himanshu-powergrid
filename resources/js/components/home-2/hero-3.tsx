import AnimatedButton from "../common/animated-button";
import ThemeButton from "../common/theme-button";

function HeroThree() {
  return (
    <div className='w-full h-164 relative'>
        {/* <img 
            src="/images/banner-1.png" 
            alt="" 
            className='absolute inset-0 w-full h-full object-cover object-top' 
        /> */}
        <video src="/images/power-5-b.mp4" autoPlay loop muted className='absolute inset-0 w-full h-full object-cover object-center' />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Bottom-left aligned content */}
        <div className='absolute bottom-10 left-0 w-full z-10 p-8 md:p-12 lg:p-24'>
            <h1 className='text-5xl md:text-7xl uppercase leading-20 font-heading-2 font-semibold text-white drop-shadow-lg'>
                Powering India's <br />Green Transition
            </h1>
            
            {/* Added Paragraph */}
            <p className='mt-4 mb-8 max-w-4xl text-lg md:text-xl text-white drop-shadow-md'>
                Building the critical energy infrastructure that India needs — from high-voltage HVDC transmission lines to pumped hydro storage, from nuclear power to green hydrogen.
            </p>
            <AnimatedButton text="Partner With Us" />
        </div>
    </div>
  )
}

export default HeroThree;