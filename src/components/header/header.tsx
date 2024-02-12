import { ROUTES } from '~/shred/constants/routes';
import { NavItem } from '~/components/nav-item/nav-item';

export const Header = () => {
  const headerLinks = [
    {
      title: 'Home',
      route: ROUTES.home,
    },
    {
      title: 'About',
      route: ROUTES.about,
    },
    {
      title: 'Products',
      route: ROUTES.products,
    },
    {
      title: 'Contact',
      route: ROUTES.contact,
    },
  ];

  return (
    <div className='flex h-[90px] w-full justify-center'>
      <div className='mx-auto flex w-full max-w-[1200px] justify-start'>
        {headerLinks.map((link) => (
          <NavItem
            title={link.title}
            route={link.route}
          />
        ))}
      </div>
    </div>
  );
};
