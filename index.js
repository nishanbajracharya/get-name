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
  const baseName = getBaseName(firstName, middleName, surName);

  if (!title && !suffix) {
    return baseName
  }

  if (!title) {
    return `${baseName}${suffixSeparator} ${suffix}`;
  }

  if (!suffix) {
    return `${title} ${baseName}`;
  }

  return `${title} ${baseName}${suffixSeparator} ${suffix}`;
};

export default writeName;
