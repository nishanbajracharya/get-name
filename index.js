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
