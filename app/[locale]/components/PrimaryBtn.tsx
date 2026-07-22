import Link from 'next/link';

interface PrimaryBtnTypes {
  children: React.ReactNode;
  onClick?: (e: unknown) => unknown;
  href?: string;
  className?: string;
}

function PrimaryBtn({ children, href, className, ...props }: PrimaryBtnTypes) {
  const classes =
    'border-border text-text bg-accent hover:bg-primary font-semibold rounded-lg border-2 px-3 py-2 duration-300';

  if (href)
    return (
      <Link
        href={href}
        {...props}
        className={`${classes} ${className ?? className}`}
      >
        {children}
      </Link>
    );

  return (
    <button className={`${classes} ${className ?? className}`} {...props}>
      {children}
    </button>
  );
}

export default PrimaryBtn;
