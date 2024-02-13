import { MainLayout } from '~/containers/main-layout';

export default function Page() {
  return (
    <MainLayout meta={{ description: 'ROSO', title: 'ROSO' }}>
      <div className='h-full w-full'></div>
    </MainLayout>
  );
}
