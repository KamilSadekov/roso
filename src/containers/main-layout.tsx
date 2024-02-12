import { PropsWithChildren } from 'react';
import Head from 'next/head';

import cc from 'classcat';
import { Header } from '~/components/header/header';

export interface Meta {
  meta: {
    description: string;
    title: string;
  };
}

export interface MainLayoutProps extends Meta {
  contentClassName?: string;
}

export const MainLayout = ({
  meta,

  children,
}: PropsWithChildren<MainLayoutProps>) => (
  <>
    <Head>
      <title>{meta.title || 'Reso'}</title>
      <meta
        content={meta.description}
        name='description'
      />
      <meta
        content='index, follow'
        name='robots'
      />
    </Head>

    <div
      id='main_container'
      className={cc(['relative h-full w-full flex-1 px-5'])}
    >
      <Header />
      {children}
    </div>
  </>
);
