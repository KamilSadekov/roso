import { MainLayout } from '~/containers/main-layout';
import useTranslation from 'next-translate/useTranslation';
import cc from 'classcat';

export default function Page() {
  const headingStyle = 'text-4xl';
  const pStyle = 'mt-5 mb-2';
  const { t } = useTranslation('common');

  return (
    <MainLayout meta={{ description: 'RESO', title: 'RESO' }}>
      <div className='mx-auto flex h-full w-full max-w-[1200px] flex-col items-center justify-start'>
        <article>
          <h1 className={cc(['mt-10', headingStyle])}>{t('about_us')}</h1>
          <p className={cc([pStyle])}>
            Our solutions ensure that the air in rooms is cleaner, that pumps
            suck and that pipelines remain hermetically sealed. And these are
            just three examples, representative of thousands of applications.
          </p>
          <p className={cc([pStyle])}>
            In 2023, ROSO stands out as an agile and flexible international
            technology company, with a scientific basis, which ensures standard
            of development. Our employees are experts in leading technological
            products, services and solutions that are used in thousands of
            applications and about 10 market segments. Our seals, filters,
            valves, pumps, and measuring devices make a valuable contribution to
            the success of our customers around the world.
          </p>
          <h1 className={cc(['mt-5', headingStyle])}>IN-DEPTH EXPERTISE</h1>
          <p className={cc([pStyle])}>
            As a international group of engineers in the field of industrial
            processing, we set standards in technology, innovation and quality.
            Working closely with colleagues from various industries, with
            customers, partners, as well as academic community, we develop
            leading-edge technology products, solutions and services.{' '}
          </p>
          <p className={cc([pStyle])}>
            We’re working towards a single vision at ROSO: to be the best
            performing global industrial gases and engineering company,
            delivering innovative and sustainable solutions for our customers
            and creating value for all our stakeholders.
          </p>
        </article>
      </div>
    </MainLayout>
  );
}
