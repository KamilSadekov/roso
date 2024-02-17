import { MainLayout } from '~/containers/main-layout';
import useTranslation from 'next-translate/useTranslation';

export default function Page() {
  const t = useTranslation('common');

  return (
    <MainLayout meta={{ description: 'ROSO', title: 'ROSO' }}>
      <div className='container mx-auto flex flex-col items-center justify-start'>
        <div className=''></div>
      </div>
    </MainLayout>
  );
}
