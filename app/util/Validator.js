/**
 * @author Serge Babayan
 * @module util/Validator
 * @requires underscore
 * @copyright Waterloo Aerial Robotics Group 2016
 * @licence https://raw.githubusercontent.com/UWARG/WARG-Ground-Station/master/LICENSE
 * @description Useful and commonly used validation functions used throughout the app
 */

var _ = require('underscore');

var Validator = {
  /**
   * Checks if a value is numeric (Note: `'123.32'` and `123.32` are both numeric)
   * @function isValidNumber
   * @param number {string | Number} The value to check
   * @returns {boolean}
   */
  isValidNumber: function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
  },

  /**
   * Checks if a value is a float only
   * @function isFloat
   * @param number {string | Number} The value to check
   * @returns {boolean}
   * @example
   * Validator.isFloat('23.23') //true
   * Validator.isFloat(34.44) //true
   * Validator.isFloat(4) //false
   * Validator.isFloat('4') //false
   */
  isFloat: function (number) {
    if (this.isValidNumber(number)) {
      var n = Number(number);
      return n === +n && n !== (n | 0);
    }
    else {
      return false;
    }
  },

  /**
   * Checks if a value is an integer only
   * @function isInteger
   * @param number {string | Number} The value to check
   * @returns {boolean}
   * @example
   * Validator.isInteger('23.23') //false
   * Validator.isInteger(34.44) //false
   * Validator.isInteger(4) //true
   * Validator.isInteger('4') //true
   */
  isInteger: function (number) {
    if (this.isValidNumber(number)) {
      var n = Number(number);
      return n === +n && n === (n | 0);
    }
    else {
      return false;
    }
  },

  /**
   * Checks if a value is a positive number
   * @function isPositiveNumber
   * @param number {string | Number} The value to check
   * @returns {boolean}
   */
  isPositiveNumber: function (number) {
    return this.isValidNumber(number) && Number(number) >= 0;
  },

  /**
   * Checks if a value is a bollean integer (1 or 0)
   * @function isBooleanInt
   * @param number {string | Number} The value to check
   * @returns {boolean}
   */
  isBooleanInt: function (number) {
    return this.isInteger(number) && (number == 1 || number == 0);
  },

  /**
   * Checks if a value is a string
   * @function isString
   * @param value {mixed} The value to check
   * @returns {boolean}
   */
  isString: function (value) {
    return typeof value === 'string' || value instanceof String;
  },

  /**
   * Checks if a value is a string
   * @function isNonEmptyString
   * @param value {string} The value to check
   * @returns {boolean}
   */
  isNonEmptyString: function (value) {
    return this.isString(value) && value.trim().length > 0;
  },

  /**
   * Checks if a value is an object
   * @function isObject
   * @param object {Object} The value to check
   * @returns {boolean}
   */
  isObject: function (object) {
    return _.isObject(object);
  }
};

module.exports = Validator;