/**
 * Return a combination of firstname, middlename and surname
 *
 * @param {String} firstName
 * @param {String} middleName
 * @param {String} surName
 *
 * @returns {String}
 */
const getBaseName = (firstName, middleName, surName) => {
  const namesArray = [firstName, middleName, surName].filter(name => name);

  if (namesArray.length) {
    return namesArray.join(' ');
  }

  return '';
};

/**
 * Return formatted name
 *
 * @param {Object} config
 * @param {String} config.title
 * @param {String} config.surName
 * @param {String} config.firstName
 *
 * @returns {String}
 */
const writeName = ({
  title = '',
  suffix = '',
  surName = '',
  firstName = '',
  middleName = '',
  suffixSeparator = ''
}) => {
  const nameConfig = {
    title: title.trim(),
    suffix: suffix.trim(),
    surName: surName.trim(),
    firstName: firstName.trim(),
    middleName: middleName.trim(),
    suffixSeparator: suffixSeparator.trim()
  };

  const baseName = getBaseName(
    nameConfig.firstName,
    nameConfig.middleName,
    nameConfig.surName
  );

  if (!nameConfig.title && !nameConfig.suffix) {
    return baseName;
  }

  if (!nameConfig.title) {
    return `${baseName}${nameConfig.suffixSeparator} ${nameConfig.suffix}`;
  }

  if (!nameConfig.suffix) {
    return `${nameConfig.title} ${baseName}`;
  }

  return `${nameConfig.title} ${baseName}${nameConfig.suffixSeparator} ${
    nameConfig.suffix
  }`;
};

export default writeName;
