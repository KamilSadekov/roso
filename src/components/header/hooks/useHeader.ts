import { useRouter } from 'next/router';
import { useUnit } from 'effector-react';
import {
  $language,
  resetLanguage,
  updateLanguage,
} from '~/shred/models/language';
import React, { useEffect } from 'react';

const useHeader = () => {
  const optionsList = [
    { value: 'en', title: 'ENG' },
    { value: 'ru', title: 'RUS' },
    { value: 'ar', title: 'ARA' },
  ];
  const router = useRouter();
  const [language, update, reset] = useUnit([
    $language,
    updateLanguage,
    resetLanguage,
  ]);
  const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    update(e.target.value);
  };

  useEffect(() => {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { locale: language },
    );
  }, [language]);

  return {
    state: { lang: language, optionsList },
    callBack: { update, reset, handleLanguage },
  };
};

export default useHeader;
