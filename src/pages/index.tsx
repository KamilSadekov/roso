import { MainLayout } from '~/containers/main-layout';
import { useTranslation } from 'next-i18next';

export default function Page() {
  const { t, i18n } = useTranslation('common');

  console.log('Current language:', i18n.language);
  console.log('Current language:', i18n);
  return (
    <MainLayout meta={{ description: 'ROSO', title: 'ROSO' }}>
      <div className='h-full w-full'>
        <div className='h-full w-full'>{t('Home')}</div>
      </div>
    </MainLayout>
  );
}
