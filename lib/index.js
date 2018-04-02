'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Return a combination of firstname, middlename and surname
 *
 * @param {String} firstName
 * @param {String} middleName
 * @param {String} surName
 *
 * @returns {String}
 */
var getBaseName = function getBaseName(firstName, middleName, surName) {
  var namesArray = [firstName, middleName, surName].filter(function (name) {
    return name;
  });

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
var writeName = function writeName(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title,
      _ref$suffix = _ref.suffix,
      suffix = _ref$suffix === undefined ? '' : _ref$suffix,
      _ref$surName = _ref.surName,
      surName = _ref$surName === undefined ? '' : _ref$surName,
      _ref$firstName = _ref.firstName,
      firstName = _ref$firstName === undefined ? '' : _ref$firstName,
      _ref$middleName = _ref.middleName,
      middleName = _ref$middleName === undefined ? '' : _ref$middleName,
      _ref$suffixSeparator = _ref.suffixSeparator,
      suffixSeparator = _ref$suffixSeparator === undefined ? '' : _ref$suffixSeparator;

  var nameConfig = {
    title: title.trim(),
    suffix: suffix.trim(),
    surName: surName.trim(),
    firstName: firstName.trim(),
    middleName: middleName.trim(),
    suffixSeparator: suffixSeparator.trim()
  };
  var baseName = getBaseName(nameConfig.firstName, nameConfig.middleName, nameConfig.surName);

  if (!nameConfig.title && !nameConfig.suffix) {
    return baseName;
  }

  if (!nameConfig.title) {
    return '' + baseName + nameConfig.suffixSeparator + ' ' + nameConfig.suffix;
  }

  if (!nameConfig.suffix) {
    return nameConfig.title + ' ' + baseName;
  }

  return nameConfig.title + ' ' + baseName + nameConfig.suffixSeparator + ' ' + nameConfig.suffix;
};

exports.default = writeName;