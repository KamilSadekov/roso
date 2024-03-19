import { MainLayout } from '~/containers/main-layout';
import { useForm } from 'react-hook-form';
import TextInput from '~/components/form/TextInput';

type FormInput = FormData & {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};
export default function Page() {
  const methods = useForm<FormInput>();
  const { register, handleSubmit, formState } = methods;

  console.log('formState', formState);

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <MainLayout meta={{ description: 'ROSO', title: 'ROSO' }}>
      <div className='container h-full'>
        <div className=''></div>
        <form
          onSubmit={() => handleSubmit(onSubmit)}
          className='mx-auto mt-4 max-w-sm'
        >
          <TextInput
            label='Username'
            placeholder='Enter your username'
            {...register('firstName')}
            type='text'
          />
          <TextInput
            label='Surname'
            placeholder='Enter your surname'
            {...register('lastName', {
              required: true,
            })}
            type='text'
          />
          <TextInput
            label='E-mail'
            placeholder='Enter your email'
            {...register('email', {
              required: true,
            })}
            type='email'
          />
          <div className={'mb-4'}>
            <label className='mb-2 block text-sm font-bold text-gray-700'>
              Message
            </label>
            <textarea
              className={`focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none ${
                !'error' ? 'border-red-500' : ''
              }`}
              placeholder='Leave a message'
              {...register('message', {
                required: true,
              })}
              rows={5}
            />
          </div>
          <button
            // onClick={handleSubmit(onSubmit)}
            type='submit'
            className='focus:shadow-outline rounded bg-blue-800 px-4 py-2 font-bold text-white hover:bg-blue-500 focus:outline-none'
          >
            Submit
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
