import Image from 'next/image';

interface BenefitsCard {
  url: string;
  heading: string;
  desc: React.ReactNode;
  altName: string;
}

function BenefitsCard({ desc, heading, url, altName }: BenefitsCard) {
  return (
    <div className="border-border bg-bg shadow-muted rounded-lg border p-5 text-center duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="bg-primary mx-auto w-fit rounded-full p-3">
        <Image
          className="aspect-square w-10"
          src={url}
          alt={`Photo of ${altName} used in web development`}
        />
      </div>
      <h3 className="mt-8 mb-3 text-2xl">{heading}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default BenefitsCard;
