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
const getName = ({
  title = '',
  suffix = '',
  surName = '',
  firstName = ''
}) => {
  if (!title && !suffix) {
    return `${firstName} ${surName}`;
  }

  if (!title) {
    return `${firstName} ${surName} ${suffix}`;
  }

  if (!suffix) {
    return `${title} ${firstName} ${surName}`;
  }

  return `${title} ${firstName} ${surName} ${suffix}`;
}

module.exports = getName;
