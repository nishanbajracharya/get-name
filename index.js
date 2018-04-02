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
  suffixSeparator = ''
}) => {
  if (!title && !suffix) {
    return `${firstName} ${surName}`;
  }

  if (!title) {
    return `${firstName} ${surName}${suffixSeparator} ${suffix}`;
  }

  if (!suffix) {
    return `${title} ${firstName} ${surName}`;
  }

  return `${title} ${firstName} ${surName}${suffixSeparator} ${suffix}`;
}

export default writeName;
