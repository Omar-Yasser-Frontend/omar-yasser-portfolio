import { useTranslations } from 'next-intl';
import Section from './Section';
import BenefitsCard from './Card';
import { Link } from '@/i18n/navigation';
import cloud from '@/app/[locale]/assets/dns-svgrepo-com.svg';
import frontend from '@/app/[locale]/assets/web-optimization-website-browser-svgrepo-com.svg';
import backend from '@/app/[locale]/assets/server-square-svgrepo-com.svg';
import Image from 'next/image';

const benefitsDetails = [
  {
    label: 'frontend',
    url: frontend,
  },
  {
    label: 'backend',
    url: backend,
  },
  {
    label: 'cloud',
    url: cloud,
  },
];

function Benefits() {
  const t = useTranslations('benefits');

  return (
    <Section>
      <Section.Container>
        <Section.HeadingWrapper>
          <Section.Heading>{t('heading')}</Section.Heading>

          <Section.SubHeading>{t('desc')}</Section.SubHeading>
        </Section.HeadingWrapper>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 lg:gap-10">
          {benefitsDetails.map(({ label, url }) => (
            <BenefitsCard
              icon={
                <Image className="aspect-square w-10" alt={label} src={url} />
              }
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

export default Benefits;
