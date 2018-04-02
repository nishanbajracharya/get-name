'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
      _ref$suffixSeparator = _ref.suffixSeparator,
      suffixSeparator = _ref$suffixSeparator === undefined ? '' : _ref$suffixSeparator;

  if (!title && !suffix) {
    return firstName + ' ' + surName;
  }

  if (!title) {
    return firstName + ' ' + surName + suffixSeparator + ' ' + suffix;
  }

  if (!suffix) {
    return title + ' ' + firstName + ' ' + surName;
  }

  return title + ' ' + firstName + ' ' + surName + suffixSeparator + ' ' + suffix;
};

exports.default = writeName;