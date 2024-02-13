import { useRouter } from 'next/router';
import Link from 'next/link';
import cc from 'classcat';

export interface NavItemProps {
  route: string;
  title: string;
}

export const NavItem = ({ route, title }: NavItemProps) => {
  const router = useRouter();

  const isActive = router.pathname === route;

  return (
    <Link
      className={cc([
        'relative flex min-w-[100px] items-center justify-center text-center text-lg font-bold transition-all duration-150 after:absolute after:bottom-0 after:h-[3px] after:w-full after:bg-transparent after:transition-all after:duration-150 hover:bg-gray-200 hover:text-blue-800 hover:after:bg-blue-800',
        {
          '!bg-gray-200 text-blue-800 after:!bg-blue-800': isActive,
        },
      ])}
      href={route}
    >
      {title}
    </Link>
  );
};
