'use client';

import { useRouter, usePathname } from '@/i18n/navigation'; // Fixed import
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

function ToggleLang() {
  const router = useRouter();
  const pathname = usePathname(); // Now safely returns paths without the prefix (e.g. "/about" instead of "/en/about")
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="fixed right-4 bottom-4">
      <select
        className="text-text bg-bg p-2 border-border border rounded-sm"
        disabled={isPending}
        defaultValue={locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
}

export default ToggleLang;
