import { MainLayout } from '~/containers/main-layout';
import SolutionBlock from '~/components/text/solutionBlock';
import useTranslation from 'next-translate/useTranslation';
import cc from 'classcat';
import { P } from '~/shred/constants/article-style';
import React from 'react';

export default function Page() {
  const { t } = useTranslation('common');
  return (
    <MainLayout meta={{ description: 'ROSO', title: 'ROSO' }}>
      <div
        className='relative z-0 h-[85vh] w-full bg-cover bg-fixed bg-no-repeat'
        style={{ backgroundImage: 'url("/imgs/main_bg.jpeg")' }}
      >
        <div className='absolute z-10 h-full w-full bg-black opacity-25' />
        <div className='container mx-auto flex h-full flex-col justify-center'>
          <h1 className='relative z-30 text-4xl font-medium text-white max-sm:text-2xl'>
            {t('home_title')}
          </h1>
        </div>
      </div>
      <article>
        <SolutionBlock isMainPage />
        <div className='container mx-auto flex h-full flex-col justify-center'>
          <h2 className='mb-5 mt-10 text-2xl font-bold text-blue-800 max-sm:text-xl'>
            {t('in_depth')}
          </h2>
          <p className={cc([P, 'font-bold'])}>{t('as_inter_enge')} </p>
          <p className={cc([P, 'font-bold'])}>{t('working_towards')}</p>
        </div>
      </article>
    </MainLayout>
  );
}
