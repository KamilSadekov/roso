import { MainLayout } from '~/containers/main-layout';
import useTranslation from 'next-translate/useTranslation';
import cc from 'classcat';
import { HEADING, P } from '~/shred/constants/article-style';

export default function Page() {
  const { t } = useTranslation('common');

  return (
    <MainLayout meta={{ description: 'ROSO', title: 'ROSO' }}>
      <div className='container mx-auto flex flex-col items-center justify-start'>
        <article>
          <h1 className={cc(['mt-10', HEADING])}>{t('about_us')}</h1>
          <p className={cc([P])}>{t('our_solution')}</p>
          <p className={cc([P])}>{t('in_year_rosoDescr')}</p>
          <h1 className={cc(['mt-5', HEADING])}>{t('in_depth')}</h1>
          <p className={cc([P])}>{t('as_inter_enge')} </p>
          <p className={cc([P])}>{t('working_towards')}</p>
        </article>
      </div>
    </MainLayout>
  );
}
