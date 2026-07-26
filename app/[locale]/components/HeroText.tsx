import { useTranslations } from 'next-intl';
import PrimaryBtn from './PrimaryBtn';

function HeroText() {
  const t = useTranslations('hero');

  return (
    <div className="order-2 mx-auto flex max-w-137.5 flex-col gap-4 text-center lg:order-1 lg:mx-0 lg:text-start">
      <h1 className="gradient-text text-2xl font-extrabold lg:text-4xl">
        {t('title')}
      </h1>
      <hr className="text-primary mx-auto w-1/2 max-w-full lg:mx-0 lg:w-10" />
      <p className="text-muted text-sm leading-relaxed">{t('desc')}</p>
      <PrimaryBtn className="mx-auto inline-block w-fit lg:mx-0">
        {t('cta')}
      </PrimaryBtn>
    </div>
  );
}

export default HeroText;
