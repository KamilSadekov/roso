import { useRouter } from 'next/router';
import Link from 'next/link';
import languageDetector from '~/shred/lib/languageDetector';

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k] as string);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link
      href={href}
      className={rest?.className}
    >
      <button
        style={{ fontSize: 'small' }}
        onClick={() => languageDetector.cache(locale)}
      >
        {locale}
      </button>
    </Link>
  );
};

export default LanguageSwitchLink;
