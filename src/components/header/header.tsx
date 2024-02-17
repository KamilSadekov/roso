import React, { SVGAttributes } from 'react';
import Image from 'next/image';
import logoIcon from 'public/imgs/logo_roso.svg';
import { ROUTES } from '~/shred/constants/routes';
import { NavItem } from '~/components/nav-item/nav-item';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export const Header = () => {
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
  // TODO: need to add lang select
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
      </div>
    </div>
  );
};
