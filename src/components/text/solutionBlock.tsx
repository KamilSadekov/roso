import React from 'react';
import { useTranslation } from 'next-i18next';
import cc from 'classcat';

type Props = { isMainPage?: boolean };
const SolutionBlock: React.FC<Props> = ({ isMainPage = false }) => {
  const { t } = useTranslation('common');
  return (
    <div
      className={
        isMainPage
          ? 'container mx-auto flex flex-col justify-start'
          : 'flex flex-col justify-start'
      }
    >
      <div className='mb-5 mt-5 h-1 w-full rounded bg-blue-800' />
      {isMainPage ? (
        <h2 className='mb-5 text-2xl font-bold text-blue-800 max-sm:text-xl'>
          {t('about_us')}
        </h2>
      ) : (
        <h1 className='mb-5 text-4xl font-bold text-blue-800 max-sm:text-2xl'>
          {t('about_us')}
        </h1>
      )}
      <div className='flex flex-wrap justify-start gap-16 md:flex-nowrap'>
        <span className='font-bold'>{t('our_solution')}</span>
        <span className='font-bold'>{t('in_year_rosoDescr')}</span>
      </div>
    </div>
  );
};

export default SolutionBlock;
