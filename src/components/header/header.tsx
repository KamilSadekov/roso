import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import logoIcon from 'public/imgs/logo_roso.svg';
import Image from 'next/image';
import { ROUTES } from '~/shred/constants/routes';
import cc from 'classcat';
import { NavItem } from '~/components/nav-item/nav-item';
import Link from '~/components/Link';
import LanguageSwitch from '~/components/LanguageSwithBtn';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-blue-800 transition ease transform duration-300`;
  const { t } = useTranslation('common');
  const headerLinks = [
    {
      title: t('Home'),
      route: ROUTES.home,
    },
    {
      title: t('About'),
      route: ROUTES.about,
    },
    {
      title: t('Products'),
      route: ROUTES.products,
    },
    {
      title: t('Contact'),
      route: ROUTES.contact,
    },
  ];
  return (
    <div className='container flex h-[90px] w-full justify-center md:py-1.5'>
      <div className='relative mx-auto flex w-full max-w-[1200px] justify-start pb-0.5 max-md:justify-between'>
        <Link
          className='h-[75px] w-[75px] self-center'
          href={'/'}
          skipLocaleHandling={undefined}
        >
          <Image
            className='h-full w-full'
            src={logoIcon as unknown as string}
            alt='roso logo'
          />
        </Link>

        <nav
          className={cc([
            'z-50 ml-5 flex justify-start overflow-hidden bg-white transition-all duration-300 max-md:absolute max-md:-left-[1.25rem] max-md:top-full max-md:ml-auto max-md:mr-auto max-md:h-0 max-md:w-screen max-md:flex-col  max-md:after:absolute max-md:after:top-0 max-md:after:h-[1px] max-md:after:w-full max-md:after:bg-blue-800',
            { 'max-md:!h-[200px]': isOpen },
          ])}
        >
          {headerLinks.map((link, idx) => (
            <NavItem
              key={idx}
              title={link.title}
              route={link.route}
            />
          ))}
        </nav>
        <LanguageSwitch />
        <button
          className='group mb-auto mt-auto flex h-12 w-12 flex-col items-center justify-center md:hidden'
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={cc([
              genericHamburgerLine,
              { 'translate-y-3 rotate-45': isOpen },
            ])}
          />
          <div
            className={cc([
              genericHamburgerLine,
              {
                'opacity-0': isOpen,
              },
            ])}
          />
          <div
            className={cc([
              genericHamburgerLine,
              {
                '-translate-y-3 -rotate-45': isOpen,
              },
            ])}
          />
        </button>
      </div>
    </div>
  );
};
