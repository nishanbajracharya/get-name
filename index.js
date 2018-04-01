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
  surName = '',
  firstName = ''
}) => {
  if (!title) {
    return `${firstName} ${surName}`;
  }

  return `${title} ${firstName} ${surName}`;
}

module.exports = getName;
