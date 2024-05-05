import { MainLayout } from '~/containers/main-layout';
import { useTranslation } from 'next-i18next';
import cc from 'classcat';
import { P } from '~/shred/constants/article-style';
import SolutionBlock from '~/components/text/solutionBlock';
import React from 'react';
import { makeStaticProps, getStaticPaths } from '~/shred/lib/getStatic';

export default function Page() {
  const { t } = useTranslation('about');

  return (
    <MainLayout meta={{ description: 'ROSO', title: 'ROSO' }}>
      <div className='container mx-auto flex flex-col items-center justify-start'>
        <article>
          <SolutionBlock />
          <div className='mt-10 h-[66vh] w-full'>
            <embed
              src='/preza.pdf'
              type='application/pdf'
              width='100%'
              height='100%'
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
