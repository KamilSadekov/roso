import React from 'react';
import { MainLayout } from '~/containers/main-layout';
import { useTranslation } from 'next-i18next';
import cc from 'classcat';
import { P } from '~/shred/constants/article-style';
import SolutionBlock from '~/components/text/solutionBlock';
import { makeStaticProps, getStaticPaths } from '~/shred/lib/getStatic';

export default function Page() {
  const { t } = useTranslation('about');

  return (
    <MainLayout meta={{ description: 'ROSO', title: 'ROSO' }}>
      <div className='container mx-auto flex flex-col items-center justify-start'>
        <article>
          <SolutionBlock />
          <div className='mt-10 w-full'>
            <img
              src={'/imgs/preza/1.jpg'}
              alt={'photo1'}
            />
            <img
              src={'/imgs/preza/2.jpg'}
              alt={'photo2'}
            />
            <img
              src={'/imgs/preza/3.jpg'}
              alt={'photo3'}
            />
            <img
              src={'/imgs/preza/4.jpg'}
              alt={'photo4'}
            />
            <img
              src={'/imgs/preza/5.jpg'}
              alt={'photo5'}
            />
            <img
              src={'/imgs/preza/6.jpg'}
              alt={'photo6'}
            />
            <img
              src={'/imgs/preza/7.jpg'}
              alt={'photo7'}
            />
            <img
              src={'/imgs/preza/8.jpg'}
              alt={'photo8'}
            />
            <img
              src={'/imgs/preza/9.jpg'}
              alt={'photo9'}
            />
            <img
              src={'/imgs/preza/10.jpg'}
              alt={'photo10'}
            />
            <img
              src={'/imgs/preza/11.jpg'}
              alt={'photo11'}
            />
            <img
              src={'/imgs/preza/12.jpg'}
              alt={'photo12'}
            />
            <img
              src={'/imgs/preza/13.jpg'}
              alt={'photo13'}
            />
            <img
              src={'/imgs/preza/14.jpg'}
              alt={'photo14'}
            />
          </div>
          <h2 className='mb-5 mt-10 text-2xl font-bold text-blue-800 max-sm:text-xl'>
            {t('in_depth')}
          </h2>
          <p className={cc([P, 'font-bold'])}>{t('as_inter_enge')} </p>
          <p className={cc([P, 'font-bold'])}>{t('working_towards')}</p>
        </article>
      </div>
    </MainLayout>
  );
}

const getStaticProps = makeStaticProps(['about']);
export { getStaticPaths, getStaticProps };
