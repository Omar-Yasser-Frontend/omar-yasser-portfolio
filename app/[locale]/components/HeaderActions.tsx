import PrimaryBtn from './PrimaryBtn';
import { ThemeToggle } from './ThemeToggle';

function HeaderActions() {
  return (
    <div className="order-2 flex items-center gap-4 lg:order-3">
      <ThemeToggle />
      <PrimaryBtn className="hidden lg:block" href="#contact-me">
        Contact Me
      </PrimaryBtn>
    </div>
  );
}

export default HeaderActions;
