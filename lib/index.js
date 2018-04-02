'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

  var baseName = getBaseName(firstName, middleName, surName);

  if (!title && !suffix) {
    return baseName;
  }

  if (!title) {
    return '' + baseName + suffixSeparator + ' ' + suffix;
  }

  if (!suffix) {
    return title + ' ' + baseName;
  }

  return title + ' ' + baseName + suffixSeparator + ' ' + suffix;
};

exports.default = writeName;