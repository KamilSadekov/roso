import React from 'react';
import { useRouter } from 'next/router';
import languageDetector from '~/shred/lib/languageDetector';
import useHeader from '~/components/header/hooks/useHeader';

const LanguageSwitch = () => {
  const router = useRouter();
  const {
    state: { lang, optionsList },
    callBack: { update },
  } = useHeader();
  const { pathname, query } = router;
  const [selectedLocale, setSelectedLocale] = React.useState(lang);
  const handleChange = React.useCallback(async (event) => {
    const newLocale = event.target.value;
    setSelectedLocale(newLocale);
    const href = {
      pathname,
      query: { ...query, locale: newLocale },
    };
    languageDetector.cache(newLocale);
    await router.push(href);
    update(newLocale);
  }, []);
  return (
    <div className='relative ml-auto block w-[100px] self-center'>
      <select
        value={selectedLocale}
        onChange={handleChange}
      >
        {optionsList.map(({ value, title }) => (
          <option
            key={value}
            value={value}
          >
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};
export default LanguageSwitch;
