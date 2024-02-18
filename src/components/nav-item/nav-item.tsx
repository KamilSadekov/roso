import { useRouter } from 'next/router';
import Link from 'next/link';
import cc from 'classcat';

export interface NavItemProps {
  route: string;
  title: string;
  footer?: boolean;
}

export const NavItem = ({ route, title, footer = false }: NavItemProps) => {
  const router = useRouter();

  const isActive = router.pathname === route;

  return (
    <Link
      className={cc([
        'max-md: relative flex min-w-[100px] items-center justify-center text-center text-lg font-bold transition-all duration-150 after:absolute after:bottom-0 after:h-[3px] after:w-full after:bg-transparent after:transition-all after:duration-150 hover:bg-gray-200 hover:text-blue-800 hover:after:bg-blue-800 max-md:h-[50px] max-md:after:h-[1px] max-md:after:bg-blue-800',
        {
          'text-blue-800 after:!bg-blue-800 md:!bg-gray-200':
            isActive && !footer,
          'after:!bg-white-800 md:!bg-white-200 text-black-800':
            isActive && footer,
          'bg-blue-800 text-white': footer,
        },
      ])}
      href={route}
    >
      {title}
    </Link>
  );
};
