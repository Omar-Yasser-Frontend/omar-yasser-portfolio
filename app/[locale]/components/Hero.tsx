import HeroImage from './HeroImage';
import HeroText from './HeroText';

function Hero() {
  return (
    <div className="relative">
      <div className="bg-accent absolute top-1/3 right-1/4 -z-100 h-80 w-80 -translate-y-1/2 rounded-full" />
      <section className="glass-effect flex min-h-screen items-center justify-between pt-34 pb-5 lg:pt-0">
        <div className="container mx-auto grid grid-cols-1 items-center gap-3 px-4 lg:grid-cols-2">
          <HeroText />

          <HeroImage />
        </div>
      </section>
    </div>
  );
}

export default Hero;
