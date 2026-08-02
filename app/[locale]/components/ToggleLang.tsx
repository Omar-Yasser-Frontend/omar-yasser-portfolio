'use client';

import { useRouter, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';

export default function ToggleLang() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const handleLanguageChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <select
      disabled={isPending}
      className="bg-bg border-border fixed right-4 bottom-4 z-50 rounded-sm border p-3"
      value={locale}
      onChange={(e) => handleLanguageChange(e.target.value)}
    >
      <option value="en">English</option>
      <option value="ar">Arabic</option>
    </select>
  );
}
