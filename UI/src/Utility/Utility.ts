export const getTranslationValue = (id: string, intl: any) => {
    return intl?.formatMessage({ id });
  };