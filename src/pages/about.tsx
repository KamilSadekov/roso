import { MainLayout } from '~/containers/main-layout';
import useTranslation from 'next-translate/useTranslation';
import cc from 'classcat';

export default function Page() {
  const headingStyle = 'text-4xl';
  const pStyle = 'mt-5 mb-2';
  const { t } = useTranslation('common');

  return (
    <MainLayout meta={{ description: 'ROSO', title: 'ROSO' }}>
      <div className='mx-auto flex h-full w-full max-w-[1200px] flex-col items-center justify-start'>
        <article>
          <h1 className={cc(['mt-10', headingStyle])}>{t('about_us')}</h1>
          <p className={cc([pStyle])}>{t('our_solution')}</p>
          <p className={cc([pStyle])}>{t('in_year_rosoDescr')}</p>
          <h1 className={cc(['mt-5', headingStyle])}>{t('in_depth')}</h1>
          <p className={cc([pStyle])}>{t('as_inter_enge')} </p>
          <p className={cc([pStyle])}>{t('working_towards')}</p>
        </article>
      </div>
    </MainLayout>
  );
}
