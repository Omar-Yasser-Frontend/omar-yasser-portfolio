import { useTranslations } from 'next-intl';
import PrimaryBtn from './PrimaryBtn';
import { ThemeToggle } from './ThemeToggle';

function HeaderActions() {
  const t = useTranslations('nav');

  return (
    <div className="order-2 flex items-center gap-4 lg:order-3">
      <ThemeToggle />
      <PrimaryBtn className="hidden lg:block" href="#contact-me">
        {t('contact')}
      </PrimaryBtn>
    </div>
  );
}

export default HeaderActions;
