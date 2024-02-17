import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logoIcon from 'public/imgs/logo_roso.svg';
import { ROUTES } from '~/shred/constants/routes';
import { NavItem } from '~/components/nav-item/nav-item';
import useHeader from '~/components/header/hooks/useHeader';
import useTranslation from 'next-translate/useTranslation';

export const Header = () => {
  const { t } = useTranslation('common');
  const {
    state: { lang, optionsList },
    callBack: { update, handleLanguage },
  } = useHeader();
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
    <div className='flex h-[90px] w-full justify-center py-1.5'>
      <div className='mx-auto flex w-full max-w-[1200px] justify-start'>
        <Link
          className='h-[75px] w-[75px] self-center'
          href={'/'}
        >
          <Image
            className='h-full w-full'
            src={logoIcon as unknown as string}
            alt='roso logo'
          />
        </Link>
        <nav className='ml-5 flex justify-start'>
          {headerLinks.map((link, idx) => (
            <NavItem
              key={idx}
              title={link.title}
              route={link.route}
            />
          ))}
        </nav>
        <select
          value={lang}
          onChange={handleLanguage}
          className='ml-auto block w-[100px] self-center rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
        >
          {optionsList.map(({ value }) => (
            <option
              key={value}
              value={value}
            >
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
