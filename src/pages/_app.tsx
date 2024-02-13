import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';

import { EffectorNext } from '@effector/next';
import { QueryClient } from '@tanstack/query-core';
import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import dayjs from 'dayjs';
import NProgress from 'nprogress';

import '../../public/styles/app.css';

import 'dayjs/locale/ru';

dayjs.locale('ru');

function App({
  Component,
  pageProps,
}: AppProps<{
  dehydratedState: unknown;
  initialState: Record<string, unknown>;
  values: Record<string, unknown>;
}>) {
  const router = useRouter();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      }),
  );

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router.events]);

  return (
    <EffectorNext values={pageProps.values}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools buttonPosition='bottom-left' />
        </HydrationBoundary>
      </QueryClientProvider>
    </EffectorNext>
  );
}
export default appWithTranslation(App);
