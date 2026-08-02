import HeroImage from './HeroImage';
import HeroText from './HeroText';

function Hero() {
  return (
    <div className="relative">
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
