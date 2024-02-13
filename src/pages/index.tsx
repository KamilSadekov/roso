import { MainLayout } from '~/containers/main-layout';
import useTranslation from 'next-translate/useTranslation';

export default function Page() {
  const t = useTranslation('common');
  return (
    <MainLayout meta={{ description: 'ROSO', title: 'ROSO' }}>
      <div className='h-full w-full'>
        <div className='h-full w-full'>{t.t('Home')}</div>
      </div>
    </MainLayout>
  );
}
