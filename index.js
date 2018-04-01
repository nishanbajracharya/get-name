const getName = ({
  surName = '',
  firstName = ''
}) => {
  return `${firstName} ${surName}`;
}

module.exports = getName;
