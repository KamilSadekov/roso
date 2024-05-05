import React from 'react';
import cc from 'classcat';
import LanguageSwitchLink from '~/components/LanguageSwitchLink';

const LanguageSwitch = () => {
  const [state, setState] = React.useState(true);
  const optionsList = [
    { value: 'en', title: 'ENG' },
    { value: 'ru', title: 'RUS' },
    { value: 'ar', title: 'ARA' },
  ];
  const toggleDropDown = React.useCallback(() => {
    setState((prev) => !prev);
  }, []);
  return (
    <div className='relative ml-auto block w-[100px] self-center'>
      <div
        onClick={toggleDropDown}
        className='ml-auto block w-[100px] self-center rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
      />
      <div
        className={cc([
          'absolute top-3 z-50 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700',
          { hidden: state },
        ])}
      >
        <ul className='py-2 text-sm text-gray-700 dark:text-gray-200'>
          {optionsList.map(({ value, title }) => (
            <li>
              <LanguageSwitchLink
                key={value}
                locale={value}
                className={
                  'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                }
              >
                <p>{title}</p>
              </LanguageSwitchLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default LanguageSwitch;
