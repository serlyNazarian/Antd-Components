const normalizeTranslate = (translate) => {
  return typeof translate === 'function' ? translate : (value) => value;
};

export const parseServerError = (message, translate) => {
  if (!message) return '';

  const t = normalizeTranslate(translate);

  if (message.startsWith('Duplicate entry')) {
    if (message.includes('tbl_accounts')) {
      return t('WARNING_THIS_ACCOUNT_NAME_ALREADY_EXISTS');
    }
  }

  if (message.startsWith('There is no Account with this email')) {
    return t('WARNING_THERE_IS_NO_ACCOUNT');
  }

  return t(message);
};

export const createServerErrorParser = (translate) => {
  return (message) => parseServerError(message, translate);
};
