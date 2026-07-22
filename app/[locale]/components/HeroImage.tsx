import me from '@/app/[locale]/assets/me.webp';
import Image from 'next/image';

function HeroImage() {
  return (
    <div className="relative order-1 flex items-center justify-center lg:order-2">
      <Image
        src={me}
        alt="image of the portfolio owner"
        loading="eager"
        className="w-full max-w-125"
      />
    </div>
  );
}

export default HeroImage;
