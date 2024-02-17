import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import useHeader from '~/components/header/hooks/useHeader';
import { ROUTES } from '~/shred/constants/routes';
import Link from 'next/link';
import cc from 'classcat';
import { NavItem } from '~/components/nav-item/nav-item';

export const Header = () => {
  const [burgerExpanded, setBurgerExpanded] = useState<boolean>(false);

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
    <div className='flex h-[90px] w-full justify-center md:py-1.5'>
      <div className='relative mx-auto flex w-full max-w-[1200px] justify-start max-md:justify-between'>
        <Link
          className='h-[75px] w-[75px] self-center'
          href={'/'}
        >
          {/*<Image*/}
          {/*  className='h-full w-full'*/}
          {/*  src={logoIcon as unknown as string}*/}
          {/*  alt='roso logo'*/}
          {/*/>*/}
        </Link>

        <nav
          className={cc([
            'absolute top-full ml-5 flex justify-start  max-md:w-full max-md:flex-col',
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
        <button
          className='relative mb-auto mt-auto h-[1.875rem] w-8 bg-gray-400'
          onClick={() => setBurgerExpanded((burgerExpanded) => !burgerExpanded)}
        >
          <div
            className={cc([
              'absolute top-0 h-1.5 w-8 bg-blue-400 transition-all',
              {
                '!-left-[2.3px] !top-[10.7px] rotate-45': burgerExpanded,
              },
            ])}
          ></div>
          <div
            className={cc([
              'absolute bottom-0 top-0 mb-auto mt-auto h-1.5 w-8 bg-blue-400',
            ])}
          ></div>
          <div
            className={cc(['absolute bottom-0 h-1.5 w-8 bg-blue-400'])}
          ></div>
        </button>
      </div>
    </div>
  );
};
