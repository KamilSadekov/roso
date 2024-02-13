import { ROUTES } from '~/shred/constants/routes';
import { NavItem } from '~/components/nav-item/nav-item';
import useTranslation from 'next-translate/useTranslation';

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

  return (
    <div className='flex h-[90px] w-full justify-center'>
      <div className='mx-auto flex w-full max-w-[1200px] justify-start'>
        {headerLinks.map((link, idx) => (
          <NavItem
            key={idx}
            title={link.title}
            route={link.route}
          />
        ))}
      </div>
    </div>
  );
};
