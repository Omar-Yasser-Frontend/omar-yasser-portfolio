import { useTranslations } from 'next-intl';
import Section from './Section';
import Card from './Card';
import { Link } from '@/i18n/navigation';
import cloud from '@/app/[locale]/assets/cloud-acceleration-svgrepo-com.svg';
import nextjs from '@/app/[locale]/assets/nextjs-fill-svgrepo-com.svg';
import nodejs from '@/app/[locale]/assets/nodejs-icon-svgrepo-com.svg';
import react from '@/app/[locale]/assets/react-svgrepo-com.svg';
import express from '@/app/[locale]/assets/express-svgrepo-com.svg';
import Image, { StaticImageData } from 'next/image';

function LinkedTechIcon({
  first,
  firstAlt,
  second,
  secondAlt,
}: {
  first: StaticImageData;
  firstAlt: string;
  second: StaticImageData;
  secondAlt: string;
}) {
  return (
    <div className="relative h-16 w-16">
      <svg
        className="pipe-dashes absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 64 64"
        aria-hidden="true"
      >
        <path
          className="pipe-flow-forward"
          d="M20 8H44Q56 8 56 20V44"
          fill="none"
          stroke="rgb(52 211 153 / 0.9)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1 8"
        />
        <path
          className="pipe-flow-backward"
          d="M44 56H20Q8 56 8 44V20"
          fill="none"
          stroke="rgb(52 211 153 / 0.9)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1 8"
        />
      </svg>

      <span className="bg-text shadow-muted absolute -top-4 -left-4 grid h-10 w-10 place-items-center rounded-lg border border-emerald-300/60 shadow-sm">
        <Image className="h-6 w-6 object-contain" alt={firstAlt} src={first} />
      </span>

      <span className="bg-text shadow-muted absolute -right-4 -bottom-4 grid h-10 w-10 place-items-center rounded-lg border border-emerald-300/60 shadow-sm">
        <Image
          className="h-6 w-6 object-contain"
          alt={secondAlt}
          src={second}
        />
      </span>
    </div>
  );
}

const benefitsDetails = [
  {
    label: 'frontend',
    icon: (
      <LinkedTechIcon
        first={react}
        firstAlt="React"
        second={nextjs}
        secondAlt="Next.js"
      />
    ),
  },
  {
    label: 'backend',
    icon: (
      <LinkedTechIcon
        first={nodejs}
        firstAlt="React"
        second={express}
        secondAlt="Node.js"
      />
    ),
  },
  {
    label: 'cloud',
    icon: <Image className="aspect-square w-10" alt="cloud" src={cloud} />,
  },
];

function Features() {
  const t = useTranslations('features');

  return (
    <Section>
      <Section.Container>
        <Section.HeadingWrapper>
          <Section.Heading>{t('heading')}</Section.Heading>

          <Section.SubHeading>{t('desc')}</Section.SubHeading>
        </Section.HeadingWrapper>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 lg:gap-10">
          {benefitsDetails.map(({ label, icon }) => (
            <Card
              icon={icon}
              heading={t(`${label}.heading`)}
              key={label}
              desc={t.rich(`${label}.desc`, {
                highlight: (chunk) => (
                  <span className="text-muted font-semibold">{chunk}</span>
                ),
                direction: (chunk) => <bdi>{chunk}</bdi>,
                guidelines: (chunk) => (
                  <Link href={`/benefits#${label}`} className="text-blue-600">
                    {chunk}
                  </Link>
                ),
              })}
            />
          ))}
        </div>
      </Section.Container>
    </Section>
  );
}

export default Features;
