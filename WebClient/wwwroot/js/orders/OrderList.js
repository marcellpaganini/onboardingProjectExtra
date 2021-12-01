(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i3 = decorators.length - 1, decorator; i3 >= 0; i3--)
      if (decorator = decorators[i3])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // node_modules/luxon/build/cjs-browser/luxon.js
  var require_luxon = __commonJS({
    "node_modules/luxon/build/cjs-browser/luxon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function _defineProperties2(target, props) {
        for (var i3 = 0; i3 < props.length; i3++) {
          var descriptor = props[i3];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass2(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties2(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties2(Constructor, staticProps);
        return Constructor;
      }
      function _extends2() {
        _extends2 = Object.assign || function(target) {
          for (var i3 = 1; i3 < arguments.length; i3++) {
            var source = arguments[i3];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends2.apply(this, arguments);
      }
      function _inheritsLoose2(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        _setPrototypeOf(subClass, superClass);
      }
      function _getPrototypeOf(o6) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o7) {
          return o7.__proto__ || Object.getPrototypeOf(o7);
        };
        return _getPrototypeOf(o6);
      }
      function _setPrototypeOf(o6, p2) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o7, p3) {
          o7.__proto__ = p3;
          return o7;
        };
        return _setPrototypeOf(o6, p2);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e5) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a2 = [null];
            a2.push.apply(a2, args2);
            var Constructor = Function.bind.apply(Parent2, a2);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null)
          return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i3;
        for (i3 = 0; i3 < sourceKeys.length; i3++) {
          key = sourceKeys[i3];
          if (excluded.indexOf(key) >= 0)
            continue;
          target[key] = source[key];
        }
        return target;
      }
      function _unsupportedIterableToArray2(o6, minLen) {
        if (!o6)
          return;
        if (typeof o6 === "string")
          return _arrayLikeToArray2(o6, minLen);
        var n7 = Object.prototype.toString.call(o6).slice(8, -1);
        if (n7 === "Object" && o6.constructor)
          n7 = o6.constructor.name;
        if (n7 === "Map" || n7 === "Set")
          return Array.from(o6);
        if (n7 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n7))
          return _arrayLikeToArray2(o6, minLen);
      }
      function _arrayLikeToArray2(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++)
          arr2[i3] = arr[i3];
        return arr2;
      }
      function _createForOfIteratorHelperLoose2(o6, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o6[Symbol.iterator] || o6["@@iterator"];
        if (it)
          return (it = it.call(o6)).next.bind(it);
        if (Array.isArray(o6) || (it = _unsupportedIterableToArray2(o6)) || allowArrayLike && o6 && typeof o6.length === "number") {
          if (it)
            o6 = it;
          var i3 = 0;
          return function() {
            if (i3 >= o6.length)
              return {
                done: true
              };
            return {
              done: false,
              value: o6[i3++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var LuxonError = /* @__PURE__ */ function(_Error) {
        _inheritsLoose2(LuxonError2, _Error);
        function LuxonError2() {
          return _Error.apply(this, arguments) || this;
        }
        return LuxonError2;
      }(/* @__PURE__ */ _wrapNativeSuper(Error));
      var InvalidDateTimeError = /* @__PURE__ */ function(_LuxonError) {
        _inheritsLoose2(InvalidDateTimeError2, _LuxonError);
        function InvalidDateTimeError2(reason) {
          return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
        }
        return InvalidDateTimeError2;
      }(LuxonError);
      var InvalidIntervalError = /* @__PURE__ */ function(_LuxonError2) {
        _inheritsLoose2(InvalidIntervalError2, _LuxonError2);
        function InvalidIntervalError2(reason) {
          return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
        }
        return InvalidIntervalError2;
      }(LuxonError);
      var InvalidDurationError = /* @__PURE__ */ function(_LuxonError3) {
        _inheritsLoose2(InvalidDurationError2, _LuxonError3);
        function InvalidDurationError2(reason) {
          return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
        }
        return InvalidDurationError2;
      }(LuxonError);
      var ConflictingSpecificationError = /* @__PURE__ */ function(_LuxonError4) {
        _inheritsLoose2(ConflictingSpecificationError2, _LuxonError4);
        function ConflictingSpecificationError2() {
          return _LuxonError4.apply(this, arguments) || this;
        }
        return ConflictingSpecificationError2;
      }(LuxonError);
      var InvalidUnitError = /* @__PURE__ */ function(_LuxonError5) {
        _inheritsLoose2(InvalidUnitError2, _LuxonError5);
        function InvalidUnitError2(unit) {
          return _LuxonError5.call(this, "Invalid unit " + unit) || this;
        }
        return InvalidUnitError2;
      }(LuxonError);
      var InvalidArgumentError = /* @__PURE__ */ function(_LuxonError6) {
        _inheritsLoose2(InvalidArgumentError2, _LuxonError6);
        function InvalidArgumentError2() {
          return _LuxonError6.apply(this, arguments) || this;
        }
        return InvalidArgumentError2;
      }(LuxonError);
      var ZoneIsAbstractError = /* @__PURE__ */ function(_LuxonError7) {
        _inheritsLoose2(ZoneIsAbstractError2, _LuxonError7);
        function ZoneIsAbstractError2() {
          return _LuxonError7.call(this, "Zone is an abstract class") || this;
        }
        return ZoneIsAbstractError2;
      }(LuxonError);
      var n6 = "numeric";
      var s5 = "short";
      var l3 = "long";
      var DATE_SHORT = {
        year: n6,
        month: n6,
        day: n6
      };
      var DATE_MED = {
        year: n6,
        month: s5,
        day: n6
      };
      var DATE_MED_WITH_WEEKDAY = {
        year: n6,
        month: s5,
        day: n6,
        weekday: s5
      };
      var DATE_FULL = {
        year: n6,
        month: l3,
        day: n6
      };
      var DATE_HUGE = {
        year: n6,
        month: l3,
        day: n6,
        weekday: l3
      };
      var TIME_SIMPLE = {
        hour: n6,
        minute: n6
      };
      var TIME_WITH_SECONDS = {
        hour: n6,
        minute: n6,
        second: n6
      };
      var TIME_WITH_SHORT_OFFSET = {
        hour: n6,
        minute: n6,
        second: n6,
        timeZoneName: s5
      };
      var TIME_WITH_LONG_OFFSET = {
        hour: n6,
        minute: n6,
        second: n6,
        timeZoneName: l3
      };
      var TIME_24_SIMPLE = {
        hour: n6,
        minute: n6,
        hourCycle: "h23"
      };
      var TIME_24_WITH_SECONDS = {
        hour: n6,
        minute: n6,
        second: n6,
        hourCycle: "h23"
      };
      var TIME_24_WITH_SHORT_OFFSET = {
        hour: n6,
        minute: n6,
        second: n6,
        hourCycle: "h23",
        timeZoneName: s5
      };
      var TIME_24_WITH_LONG_OFFSET = {
        hour: n6,
        minute: n6,
        second: n6,
        hourCycle: "h23",
        timeZoneName: l3
      };
      var DATETIME_SHORT = {
        year: n6,
        month: n6,
        day: n6,
        hour: n6,
        minute: n6
      };
      var DATETIME_SHORT_WITH_SECONDS = {
        year: n6,
        month: n6,
        day: n6,
        hour: n6,
        minute: n6,
        second: n6
      };
      var DATETIME_MED = {
        year: n6,
        month: s5,
        day: n6,
        hour: n6,
        minute: n6
      };
      var DATETIME_MED_WITH_SECONDS = {
        year: n6,
        month: s5,
        day: n6,
        hour: n6,
        minute: n6,
        second: n6
      };
      var DATETIME_MED_WITH_WEEKDAY = {
        year: n6,
        month: s5,
        day: n6,
        weekday: s5,
        hour: n6,
        minute: n6
      };
      var DATETIME_FULL = {
        year: n6,
        month: l3,
        day: n6,
        hour: n6,
        minute: n6,
        timeZoneName: s5
      };
      var DATETIME_FULL_WITH_SECONDS = {
        year: n6,
        month: l3,
        day: n6,
        hour: n6,
        minute: n6,
        second: n6,
        timeZoneName: s5
      };
      var DATETIME_HUGE = {
        year: n6,
        month: l3,
        day: n6,
        weekday: l3,
        hour: n6,
        minute: n6,
        timeZoneName: l3
      };
      var DATETIME_HUGE_WITH_SECONDS = {
        year: n6,
        month: l3,
        day: n6,
        weekday: l3,
        hour: n6,
        minute: n6,
        second: n6,
        timeZoneName: l3
      };
      function isUndefined(o6) {
        return typeof o6 === "undefined";
      }
      function isNumber2(o6) {
        return typeof o6 === "number";
      }
      function isInteger2(o6) {
        return typeof o6 === "number" && o6 % 1 === 0;
      }
      function isString(o6) {
        return typeof o6 === "string";
      }
      function isDate(o6) {
        return Object.prototype.toString.call(o6) === "[object Date]";
      }
      function hasRelative() {
        try {
          return typeof Intl !== "undefined" && !!Intl.RelativeTimeFormat;
        } catch (e5) {
          return false;
        }
      }
      function maybeArray(thing) {
        return Array.isArray(thing) ? thing : [thing];
      }
      function bestBy(arr, by, compare) {
        if (arr.length === 0) {
          return void 0;
        }
        return arr.reduce(function(best, next) {
          var pair = [by(next), next];
          if (!best) {
            return pair;
          } else if (compare(best[0], pair[0]) === best[0]) {
            return best;
          } else {
            return pair;
          }
        }, null)[1];
      }
      function pick(obj, keys2) {
        return keys2.reduce(function(a2, k2) {
          a2[k2] = obj[k2];
          return a2;
        }, {});
      }
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      function integerBetween(thing, bottom, top) {
        return isInteger2(thing) && thing >= bottom && thing <= top;
      }
      function floorMod(x2, n7) {
        return x2 - n7 * Math.floor(x2 / n7);
      }
      function padStart(input2, n7) {
        if (n7 === void 0) {
          n7 = 2;
        }
        var minus = input2 < 0 ? "-" : "";
        var target = minus ? input2 * -1 : input2;
        var result;
        if (target.toString().length < n7) {
          result = ("0".repeat(n7) + target).slice(-n7);
        } else {
          result = target.toString();
        }
        return "" + minus + result;
      }
      function parseInteger(string2) {
        if (isUndefined(string2) || string2 === null || string2 === "") {
          return void 0;
        } else {
          return parseInt(string2, 10);
        }
      }
      function parseFloating(string2) {
        if (isUndefined(string2) || string2 === null || string2 === "") {
          return void 0;
        } else {
          return parseFloat(string2);
        }
      }
      function parseMillis(fraction) {
        if (isUndefined(fraction) || fraction === null || fraction === "") {
          return void 0;
        } else {
          var f2 = parseFloat("0." + fraction) * 1e3;
          return Math.floor(f2);
        }
      }
      function roundTo(number2, digits, towardZero) {
        if (towardZero === void 0) {
          towardZero = false;
        }
        var factor = Math.pow(10, digits), rounder = towardZero ? Math.trunc : Math.round;
        return rounder(number2 * factor) / factor;
      }
      function isLeapYear(year) {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
      }
      function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
      }
      function daysInMonth(year, month) {
        var modMonth = floorMod(month - 1, 12) + 1, modYear = year + (month - modMonth) / 12;
        if (modMonth === 2) {
          return isLeapYear(modYear) ? 29 : 28;
        } else {
          return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
        }
      }
      function objToLocalTS(obj) {
        var d2 = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);
        if (obj.year < 100 && obj.year >= 0) {
          d2 = new Date(d2);
          d2.setUTCFullYear(d2.getUTCFullYear() - 1900);
        }
        return +d2;
      }
      function weeksInWeekYear(weekYear) {
        var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7, last = weekYear - 1, p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
        return p1 === 4 || p2 === 3 ? 53 : 52;
      }
      function untruncateYear(year) {
        if (year > 99) {
          return year;
        } else
          return year > 60 ? 1900 + year : 2e3 + year;
      }
      function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
        if (timeZone === void 0) {
          timeZone = null;
        }
        var date = new Date(ts), intlOpts = {
          hourCycle: "h23",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit"
        };
        if (timeZone) {
          intlOpts.timeZone = timeZone;
        }
        var modified = _extends2({
          timeZoneName: offsetFormat
        }, intlOpts);
        var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function(m2) {
          return m2.type.toLowerCase() === "timezonename";
        });
        return parsed ? parsed.value : null;
      }
      function signedOffset(offHourStr, offMinuteStr) {
        var offHour = parseInt(offHourStr, 10);
        if (Number.isNaN(offHour)) {
          offHour = 0;
        }
        var offMin = parseInt(offMinuteStr, 10) || 0, offMinSigned = offHour < 0 || Object.is(offHour, -0) ? -offMin : offMin;
        return offHour * 60 + offMinSigned;
      }
      function asNumber(value) {
        var numericValue = Number(value);
        if (typeof value === "boolean" || value === "" || Number.isNaN(numericValue))
          throw new InvalidArgumentError("Invalid unit value " + value);
        return numericValue;
      }
      function normalizeObject(obj, normalizer) {
        var normalized = {};
        for (var u2 in obj) {
          if (hasOwnProperty(obj, u2)) {
            var v2 = obj[u2];
            if (v2 === void 0 || v2 === null)
              continue;
            normalized[normalizer(u2)] = asNumber(v2);
          }
        }
        return normalized;
      }
      function formatOffset(offset2, format) {
        var hours = Math.trunc(Math.abs(offset2 / 60)), minutes = Math.trunc(Math.abs(offset2 % 60)), sign = offset2 >= 0 ? "+" : "-";
        switch (format) {
          case "short":
            return "" + sign + padStart(hours, 2) + ":" + padStart(minutes, 2);
          case "narrow":
            return "" + sign + hours + (minutes > 0 ? ":" + minutes : "");
          case "techie":
            return "" + sign + padStart(hours, 2) + padStart(minutes, 2);
          default:
            throw new RangeError("Value format " + format + " is out of range for property format");
        }
      }
      function timeObject(obj) {
        return pick(obj, ["hour", "minute", "second", "millisecond"]);
      }
      var ianaRegex = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;
      var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
      function months(length) {
        switch (length) {
          case "narrow":
            return [].concat(monthsNarrow);
          case "short":
            return [].concat(monthsShort);
          case "long":
            return [].concat(monthsLong);
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
          case "2-digit":
            return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
          default:
            return null;
        }
      }
      var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
      function weekdays(length) {
        switch (length) {
          case "narrow":
            return [].concat(weekdaysNarrow);
          case "short":
            return [].concat(weekdaysShort);
          case "long":
            return [].concat(weekdaysLong);
          case "numeric":
            return ["1", "2", "3", "4", "5", "6", "7"];
          default:
            return null;
        }
      }
      var meridiems = ["AM", "PM"];
      var erasLong = ["Before Christ", "Anno Domini"];
      var erasShort = ["BC", "AD"];
      var erasNarrow = ["B", "A"];
      function eras(length) {
        switch (length) {
          case "narrow":
            return [].concat(erasNarrow);
          case "short":
            return [].concat(erasShort);
          case "long":
            return [].concat(erasLong);
          default:
            return null;
        }
      }
      function meridiemForDateTime(dt) {
        return meridiems[dt.hour < 12 ? 0 : 1];
      }
      function weekdayForDateTime(dt, length) {
        return weekdays(length)[dt.weekday - 1];
      }
      function monthForDateTime(dt, length) {
        return months(length)[dt.month - 1];
      }
      function eraForDateTime(dt, length) {
        return eras(length)[dt.year < 0 ? 0 : 1];
      }
      function formatRelativeTime(unit, count, numeric, narrow) {
        if (numeric === void 0) {
          numeric = "always";
        }
        if (narrow === void 0) {
          narrow = false;
        }
        var units = {
          years: ["year", "yr."],
          quarters: ["quarter", "qtr."],
          months: ["month", "mo."],
          weeks: ["week", "wk."],
          days: ["day", "day", "days"],
          hours: ["hour", "hr."],
          minutes: ["minute", "min."],
          seconds: ["second", "sec."]
        };
        var lastable = ["hours", "minutes", "seconds"].indexOf(unit) === -1;
        if (numeric === "auto" && lastable) {
          var isDay = unit === "days";
          switch (count) {
            case 1:
              return isDay ? "tomorrow" : "next " + units[unit][0];
            case -1:
              return isDay ? "yesterday" : "last " + units[unit][0];
            case 0:
              return isDay ? "today" : "this " + units[unit][0];
          }
        }
        var isInPast = Object.is(count, -0) || count < 0, fmtValue = Math.abs(count), singular = fmtValue === 1, lilUnits = units[unit], fmtUnit = narrow ? singular ? lilUnits[1] : lilUnits[2] || lilUnits[1] : singular ? units[unit][0] : unit;
        return isInPast ? fmtValue + " " + fmtUnit + " ago" : "in " + fmtValue + " " + fmtUnit;
      }
      function stringifyTokens(splits, tokenToString) {
        var s6 = "";
        for (var _iterator = _createForOfIteratorHelperLoose2(splits), _step; !(_step = _iterator()).done; ) {
          var token = _step.value;
          if (token.literal) {
            s6 += token.val;
          } else {
            s6 += tokenToString(token.val);
          }
        }
        return s6;
      }
      var _macroTokenToFormatOpts = {
        D: DATE_SHORT,
        DD: DATE_MED,
        DDD: DATE_FULL,
        DDDD: DATE_HUGE,
        t: TIME_SIMPLE,
        tt: TIME_WITH_SECONDS,
        ttt: TIME_WITH_SHORT_OFFSET,
        tttt: TIME_WITH_LONG_OFFSET,
        T: TIME_24_SIMPLE,
        TT: TIME_24_WITH_SECONDS,
        TTT: TIME_24_WITH_SHORT_OFFSET,
        TTTT: TIME_24_WITH_LONG_OFFSET,
        f: DATETIME_SHORT,
        ff: DATETIME_MED,
        fff: DATETIME_FULL,
        ffff: DATETIME_HUGE,
        F: DATETIME_SHORT_WITH_SECONDS,
        FF: DATETIME_MED_WITH_SECONDS,
        FFF: DATETIME_FULL_WITH_SECONDS,
        FFFF: DATETIME_HUGE_WITH_SECONDS
      };
      var Formatter = /* @__PURE__ */ function() {
        Formatter2.create = function create(locale, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return new Formatter2(locale, opts);
        };
        Formatter2.parseFormat = function parseFormat(fmt) {
          var current = null, currentFull = "", bracketed = false;
          var splits = [];
          for (var i3 = 0; i3 < fmt.length; i3++) {
            var c2 = fmt.charAt(i3);
            if (c2 === "'") {
              if (currentFull.length > 0) {
                splits.push({
                  literal: bracketed,
                  val: currentFull
                });
              }
              current = null;
              currentFull = "";
              bracketed = !bracketed;
            } else if (bracketed) {
              currentFull += c2;
            } else if (c2 === current) {
              currentFull += c2;
            } else {
              if (currentFull.length > 0) {
                splits.push({
                  literal: false,
                  val: currentFull
                });
              }
              currentFull = c2;
              current = c2;
            }
          }
          if (currentFull.length > 0) {
            splits.push({
              literal: bracketed,
              val: currentFull
            });
          }
          return splits;
        };
        Formatter2.macroTokenToFormatOpts = function macroTokenToFormatOpts(token) {
          return _macroTokenToFormatOpts[token];
        };
        function Formatter2(locale, formatOpts) {
          this.opts = formatOpts;
          this.loc = locale;
          this.systemLoc = null;
        }
        var _proto = Formatter2.prototype;
        _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
          if (this.systemLoc === null) {
            this.systemLoc = this.loc.redefaultToSystem();
          }
          var df = this.systemLoc.dtFormatter(dt, _extends2({}, this.opts, opts));
          return df.format();
        };
        _proto.formatDateTime = function formatDateTime(dt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var df = this.loc.dtFormatter(dt, _extends2({}, this.opts, opts));
          return df.format();
        };
        _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var df = this.loc.dtFormatter(dt, _extends2({}, this.opts, opts));
          return df.formatToParts();
        };
        _proto.resolvedOptions = function resolvedOptions(dt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var df = this.loc.dtFormatter(dt, _extends2({}, this.opts, opts));
          return df.resolvedOptions();
        };
        _proto.num = function num(n7, p2) {
          if (p2 === void 0) {
            p2 = 0;
          }
          if (this.opts.forceSimple) {
            return padStart(n7, p2);
          }
          var opts = _extends2({}, this.opts);
          if (p2 > 0) {
            opts.padTo = p2;
          }
          return this.loc.numberFormatter(opts).format(n7);
        };
        _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
          var _this = this;
          var knownEnglish = this.loc.listingMode() === "en", useDateTimeFormatter = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", string2 = function string3(opts, extract) {
            return _this.loc.extract(dt, opts, extract);
          }, formatOffset2 = function formatOffset3(opts) {
            if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
              return "Z";
            }
            return dt.isValid ? dt.zone.formatOffset(dt.ts, opts.format) : "";
          }, meridiem = function meridiem2() {
            return knownEnglish ? meridiemForDateTime(dt) : string2({
              hour: "numeric",
              hourCycle: "h12"
            }, "dayperiod");
          }, month = function month2(length, standalone) {
            return knownEnglish ? monthForDateTime(dt, length) : string2(standalone ? {
              month: length
            } : {
              month: length,
              day: "numeric"
            }, "month");
          }, weekday = function weekday2(length, standalone) {
            return knownEnglish ? weekdayForDateTime(dt, length) : string2(standalone ? {
              weekday: length
            } : {
              weekday: length,
              month: "long",
              day: "numeric"
            }, "weekday");
          }, maybeMacro = function maybeMacro2(token) {
            var formatOpts = Formatter2.macroTokenToFormatOpts(token);
            if (formatOpts) {
              return _this.formatWithSystemDefault(dt, formatOpts);
            } else {
              return token;
            }
          }, era = function era2(length) {
            return knownEnglish ? eraForDateTime(dt, length) : string2({
              era: length
            }, "era");
          }, tokenToString = function tokenToString2(token) {
            switch (token) {
              case "S":
                return _this.num(dt.millisecond);
              case "u":
              case "SSS":
                return _this.num(dt.millisecond, 3);
              case "s":
                return _this.num(dt.second);
              case "ss":
                return _this.num(dt.second, 2);
              case "uu":
                return _this.num(Math.floor(dt.millisecond / 10), 2);
              case "uuu":
                return _this.num(Math.floor(dt.millisecond / 100));
              case "m":
                return _this.num(dt.minute);
              case "mm":
                return _this.num(dt.minute, 2);
              case "h":
                return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
              case "hh":
                return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
              case "H":
                return _this.num(dt.hour);
              case "HH":
                return _this.num(dt.hour, 2);
              case "Z":
                return formatOffset2({
                  format: "narrow",
                  allowZ: _this.opts.allowZ
                });
              case "ZZ":
                return formatOffset2({
                  format: "short",
                  allowZ: _this.opts.allowZ
                });
              case "ZZZ":
                return formatOffset2({
                  format: "techie",
                  allowZ: _this.opts.allowZ
                });
              case "ZZZZ":
                return dt.zone.offsetName(dt.ts, {
                  format: "short",
                  locale: _this.loc.locale
                });
              case "ZZZZZ":
                return dt.zone.offsetName(dt.ts, {
                  format: "long",
                  locale: _this.loc.locale
                });
              case "z":
                return dt.zoneName;
              case "a":
                return meridiem();
              case "d":
                return useDateTimeFormatter ? string2({
                  day: "numeric"
                }, "day") : _this.num(dt.day);
              case "dd":
                return useDateTimeFormatter ? string2({
                  day: "2-digit"
                }, "day") : _this.num(dt.day, 2);
              case "c":
                return _this.num(dt.weekday);
              case "ccc":
                return weekday("short", true);
              case "cccc":
                return weekday("long", true);
              case "ccccc":
                return weekday("narrow", true);
              case "E":
                return _this.num(dt.weekday);
              case "EEE":
                return weekday("short", false);
              case "EEEE":
                return weekday("long", false);
              case "EEEEE":
                return weekday("narrow", false);
              case "L":
                return useDateTimeFormatter ? string2({
                  month: "numeric",
                  day: "numeric"
                }, "month") : _this.num(dt.month);
              case "LL":
                return useDateTimeFormatter ? string2({
                  month: "2-digit",
                  day: "numeric"
                }, "month") : _this.num(dt.month, 2);
              case "LLL":
                return month("short", true);
              case "LLLL":
                return month("long", true);
              case "LLLLL":
                return month("narrow", true);
              case "M":
                return useDateTimeFormatter ? string2({
                  month: "numeric"
                }, "month") : _this.num(dt.month);
              case "MM":
                return useDateTimeFormatter ? string2({
                  month: "2-digit"
                }, "month") : _this.num(dt.month, 2);
              case "MMM":
                return month("short", false);
              case "MMMM":
                return month("long", false);
              case "MMMMM":
                return month("narrow", false);
              case "y":
                return useDateTimeFormatter ? string2({
                  year: "numeric"
                }, "year") : _this.num(dt.year);
              case "yy":
                return useDateTimeFormatter ? string2({
                  year: "2-digit"
                }, "year") : _this.num(dt.year.toString().slice(-2), 2);
              case "yyyy":
                return useDateTimeFormatter ? string2({
                  year: "numeric"
                }, "year") : _this.num(dt.year, 4);
              case "yyyyyy":
                return useDateTimeFormatter ? string2({
                  year: "numeric"
                }, "year") : _this.num(dt.year, 6);
              case "G":
                return era("short");
              case "GG":
                return era("long");
              case "GGGGG":
                return era("narrow");
              case "kk":
                return _this.num(dt.weekYear.toString().slice(-2), 2);
              case "kkkk":
                return _this.num(dt.weekYear, 4);
              case "W":
                return _this.num(dt.weekNumber);
              case "WW":
                return _this.num(dt.weekNumber, 2);
              case "o":
                return _this.num(dt.ordinal);
              case "ooo":
                return _this.num(dt.ordinal, 3);
              case "q":
                return _this.num(dt.quarter);
              case "qq":
                return _this.num(dt.quarter, 2);
              case "X":
                return _this.num(Math.floor(dt.ts / 1e3));
              case "x":
                return _this.num(dt.ts);
              default:
                return maybeMacro(token);
            }
          };
          return stringifyTokens(Formatter2.parseFormat(fmt), tokenToString);
        };
        _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
          var _this2 = this;
          var tokenToField = function tokenToField2(token) {
            switch (token[0]) {
              case "S":
                return "millisecond";
              case "s":
                return "second";
              case "m":
                return "minute";
              case "h":
                return "hour";
              case "d":
                return "day";
              case "M":
                return "month";
              case "y":
                return "year";
              default:
                return null;
            }
          }, tokenToString = function tokenToString2(lildur) {
            return function(token) {
              var mapped = tokenToField(token);
              if (mapped) {
                return _this2.num(lildur.get(mapped), token.length);
              } else {
                return token;
              }
            };
          }, tokens = Formatter2.parseFormat(fmt), realTokens = tokens.reduce(function(found, _ref) {
            var literal2 = _ref.literal, val = _ref.val;
            return literal2 ? found : found.concat(val);
          }, []), collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function(t3) {
            return t3;
          }));
          return stringifyTokens(tokens, tokenToString(collapsed));
        };
        return Formatter2;
      }();
      var Invalid = /* @__PURE__ */ function() {
        function Invalid2(reason, explanation) {
          this.reason = reason;
          this.explanation = explanation;
        }
        var _proto = Invalid2.prototype;
        _proto.toMessage = function toMessage() {
          if (this.explanation) {
            return this.reason + ": " + this.explanation;
          } else {
            return this.reason;
          }
        };
        return Invalid2;
      }();
      var Zone = /* @__PURE__ */ function() {
        function Zone2() {
        }
        var _proto = Zone2.prototype;
        _proto.offsetName = function offsetName(ts, opts) {
          throw new ZoneIsAbstractError();
        };
        _proto.formatOffset = function formatOffset2(ts, format) {
          throw new ZoneIsAbstractError();
        };
        _proto.offset = function offset2(ts) {
          throw new ZoneIsAbstractError();
        };
        _proto.equals = function equals(otherZone) {
          throw new ZoneIsAbstractError();
        };
        _createClass2(Zone2, [{
          key: "type",
          get: function get3() {
            throw new ZoneIsAbstractError();
          }
        }, {
          key: "name",
          get: function get3() {
            throw new ZoneIsAbstractError();
          }
        }, {
          key: "isUniversal",
          get: function get3() {
            throw new ZoneIsAbstractError();
          }
        }, {
          key: "isValid",
          get: function get3() {
            throw new ZoneIsAbstractError();
          }
        }]);
        return Zone2;
      }();
      var singleton$1 = null;
      var SystemZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose2(SystemZone2, _Zone);
        function SystemZone2() {
          return _Zone.apply(this, arguments) || this;
        }
        var _proto = SystemZone2.prototype;
        _proto.offsetName = function offsetName(ts, _ref) {
          var format = _ref.format, locale = _ref.locale;
          return parseZoneInfo(ts, format, locale);
        };
        _proto.formatOffset = function formatOffset$1(ts, format) {
          return formatOffset(this.offset(ts), format);
        };
        _proto.offset = function offset2(ts) {
          return -new Date(ts).getTimezoneOffset();
        };
        _proto.equals = function equals(otherZone) {
          return otherZone.type === "system";
        };
        _createClass2(SystemZone2, [{
          key: "type",
          get: function get3() {
            return "system";
          }
        }, {
          key: "name",
          get: function get3() {
            return new Intl.DateTimeFormat().resolvedOptions().timeZone;
          }
        }, {
          key: "isUniversal",
          get: function get3() {
            return false;
          }
        }, {
          key: "isValid",
          get: function get3() {
            return true;
          }
        }], [{
          key: "instance",
          get: function get3() {
            if (singleton$1 === null) {
              singleton$1 = new SystemZone2();
            }
            return singleton$1;
          }
        }]);
        return SystemZone2;
      }(Zone);
      var matchingRegex = RegExp("^" + ianaRegex.source + "$");
      var dtfCache = {};
      function makeDTF(zone) {
        if (!dtfCache[zone]) {
          dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
            hour12: false,
            timeZone: zone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          });
        }
        return dtfCache[zone];
      }
      var typeToPos = {
        year: 0,
        month: 1,
        day: 2,
        hour: 3,
        minute: 4,
        second: 5
      };
      function hackyOffset(dtf, date) {
        var formatted = dtf.format(date).replace(/\u200E/g, ""), parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted), fMonth = parsed[1], fDay = parsed[2], fYear = parsed[3], fHour = parsed[4], fMinute = parsed[5], fSecond = parsed[6];
        return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
      }
      function partsOffset(dtf, date) {
        var formatted = dtf.formatToParts(date), filled = [];
        for (var i3 = 0; i3 < formatted.length; i3++) {
          var _formatted$i = formatted[i3], type = _formatted$i.type, value = _formatted$i.value, pos = typeToPos[type];
          if (!isUndefined(pos)) {
            filled[pos] = parseInt(value, 10);
          }
        }
        return filled;
      }
      var ianaZoneCache = {};
      var IANAZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose2(IANAZone2, _Zone);
        IANAZone2.create = function create(name) {
          if (!ianaZoneCache[name]) {
            ianaZoneCache[name] = new IANAZone2(name);
          }
          return ianaZoneCache[name];
        };
        IANAZone2.resetCache = function resetCache() {
          ianaZoneCache = {};
          dtfCache = {};
        };
        IANAZone2.isValidSpecifier = function isValidSpecifier(s6) {
          return !!(s6 && s6.match(matchingRegex));
        };
        IANAZone2.isValidZone = function isValidZone(zone) {
          if (!zone) {
            return false;
          }
          try {
            new Intl.DateTimeFormat("en-US", {
              timeZone: zone
            }).format();
            return true;
          } catch (e5) {
            return false;
          }
        };
        function IANAZone2(name) {
          var _this;
          _this = _Zone.call(this) || this;
          _this.zoneName = name;
          _this.valid = IANAZone2.isValidZone(name);
          return _this;
        }
        var _proto = IANAZone2.prototype;
        _proto.offsetName = function offsetName(ts, _ref) {
          var format = _ref.format, locale = _ref.locale;
          return parseZoneInfo(ts, format, locale, this.name);
        };
        _proto.formatOffset = function formatOffset$1(ts, format) {
          return formatOffset(this.offset(ts), format);
        };
        _proto.offset = function offset2(ts) {
          var date = new Date(ts);
          if (isNaN(date))
            return NaN;
          var dtf = makeDTF(this.name), _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date), year = _ref2[0], month = _ref2[1], day = _ref2[2], hour = _ref2[3], minute = _ref2[4], second = _ref2[5];
          var adjustedHour = hour === 24 ? 0 : hour;
          var asUTC = objToLocalTS({
            year,
            month,
            day,
            hour: adjustedHour,
            minute,
            second,
            millisecond: 0
          });
          var asTS = +date;
          var over = asTS % 1e3;
          asTS -= over >= 0 ? over : 1e3 + over;
          return (asUTC - asTS) / (60 * 1e3);
        };
        _proto.equals = function equals(otherZone) {
          return otherZone.type === "iana" && otherZone.name === this.name;
        };
        _createClass2(IANAZone2, [{
          key: "type",
          get: function get3() {
            return "iana";
          }
        }, {
          key: "name",
          get: function get3() {
            return this.zoneName;
          }
        }, {
          key: "isUniversal",
          get: function get3() {
            return false;
          }
        }, {
          key: "isValid",
          get: function get3() {
            return this.valid;
          }
        }]);
        return IANAZone2;
      }(Zone);
      var singleton = null;
      var FixedOffsetZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose2(FixedOffsetZone2, _Zone);
        FixedOffsetZone2.instance = function instance(offset2) {
          return offset2 === 0 ? FixedOffsetZone2.utcInstance : new FixedOffsetZone2(offset2);
        };
        FixedOffsetZone2.parseSpecifier = function parseSpecifier(s6) {
          if (s6) {
            var r4 = s6.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (r4) {
              return new FixedOffsetZone2(signedOffset(r4[1], r4[2]));
            }
          }
          return null;
        };
        function FixedOffsetZone2(offset2) {
          var _this;
          _this = _Zone.call(this) || this;
          _this.fixed = offset2;
          return _this;
        }
        var _proto = FixedOffsetZone2.prototype;
        _proto.offsetName = function offsetName() {
          return this.name;
        };
        _proto.formatOffset = function formatOffset$1(ts, format) {
          return formatOffset(this.fixed, format);
        };
        _proto.offset = function offset2() {
          return this.fixed;
        };
        _proto.equals = function equals(otherZone) {
          return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
        };
        _createClass2(FixedOffsetZone2, [{
          key: "type",
          get: function get3() {
            return "fixed";
          }
        }, {
          key: "name",
          get: function get3() {
            return this.fixed === 0 ? "UTC" : "UTC" + formatOffset(this.fixed, "narrow");
          }
        }, {
          key: "isUniversal",
          get: function get3() {
            return true;
          }
        }, {
          key: "isValid",
          get: function get3() {
            return true;
          }
        }], [{
          key: "utcInstance",
          get: function get3() {
            if (singleton === null) {
              singleton = new FixedOffsetZone2(0);
            }
            return singleton;
          }
        }]);
        return FixedOffsetZone2;
      }(Zone);
      var InvalidZone = /* @__PURE__ */ function(_Zone) {
        _inheritsLoose2(InvalidZone2, _Zone);
        function InvalidZone2(zoneName) {
          var _this;
          _this = _Zone.call(this) || this;
          _this.zoneName = zoneName;
          return _this;
        }
        var _proto = InvalidZone2.prototype;
        _proto.offsetName = function offsetName() {
          return null;
        };
        _proto.formatOffset = function formatOffset2() {
          return "";
        };
        _proto.offset = function offset2() {
          return NaN;
        };
        _proto.equals = function equals() {
          return false;
        };
        _createClass2(InvalidZone2, [{
          key: "type",
          get: function get3() {
            return "invalid";
          }
        }, {
          key: "name",
          get: function get3() {
            return this.zoneName;
          }
        }, {
          key: "isUniversal",
          get: function get3() {
            return false;
          }
        }, {
          key: "isValid",
          get: function get3() {
            return false;
          }
        }]);
        return InvalidZone2;
      }(Zone);
      function normalizeZone(input2, defaultZone2) {
        if (isUndefined(input2) || input2 === null) {
          return defaultZone2;
        } else if (input2 instanceof Zone) {
          return input2;
        } else if (isString(input2)) {
          var lowered = input2.toLowerCase();
          if (lowered === "local" || lowered === "system")
            return defaultZone2;
          else if (lowered === "utc" || lowered === "gmt")
            return FixedOffsetZone.utcInstance;
          else if (IANAZone.isValidSpecifier(lowered))
            return IANAZone.create(input2);
          else
            return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input2);
        } else if (isNumber2(input2)) {
          return FixedOffsetZone.instance(input2);
        } else if (typeof input2 === "object" && input2.offset && typeof input2.offset === "number") {
          return input2;
        } else {
          return new InvalidZone(input2);
        }
      }
      var now = function now2() {
        return Date.now();
      };
      var defaultZone = "system";
      var defaultLocale = null;
      var defaultNumberingSystem = null;
      var defaultOutputCalendar = null;
      var throwOnInvalid;
      var Settings = /* @__PURE__ */ function() {
        function Settings2() {
        }
        Settings2.resetCaches = function resetCaches() {
          Locale.resetCache();
          IANAZone.resetCache();
        };
        _createClass2(Settings2, null, [{
          key: "now",
          get: function get3() {
            return now;
          },
          set: function set5(n7) {
            now = n7;
          }
        }, {
          key: "defaultZone",
          get: function get3() {
            return normalizeZone(defaultZone, SystemZone.instance);
          },
          set: function set5(zone) {
            defaultZone = zone;
          }
        }, {
          key: "defaultLocale",
          get: function get3() {
            return defaultLocale;
          },
          set: function set5(locale) {
            defaultLocale = locale;
          }
        }, {
          key: "defaultNumberingSystem",
          get: function get3() {
            return defaultNumberingSystem;
          },
          set: function set5(numberingSystem) {
            defaultNumberingSystem = numberingSystem;
          }
        }, {
          key: "defaultOutputCalendar",
          get: function get3() {
            return defaultOutputCalendar;
          },
          set: function set5(outputCalendar) {
            defaultOutputCalendar = outputCalendar;
          }
        }, {
          key: "throwOnInvalid",
          get: function get3() {
            return throwOnInvalid;
          },
          set: function set5(t3) {
            throwOnInvalid = t3;
          }
        }]);
        return Settings2;
      }();
      var _excluded = ["base"];
      var intlDTCache = {};
      function getCachedDTF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var key = JSON.stringify([locString, opts]);
        var dtf = intlDTCache[key];
        if (!dtf) {
          dtf = new Intl.DateTimeFormat(locString, opts);
          intlDTCache[key] = dtf;
        }
        return dtf;
      }
      var intlNumCache = {};
      function getCachedINF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var key = JSON.stringify([locString, opts]);
        var inf = intlNumCache[key];
        if (!inf) {
          inf = new Intl.NumberFormat(locString, opts);
          intlNumCache[key] = inf;
        }
        return inf;
      }
      var intlRelCache = {};
      function getCachedRTF(locString, opts) {
        if (opts === void 0) {
          opts = {};
        }
        var _opts = opts;
        _opts.base;
        var cacheKeyOpts = _objectWithoutPropertiesLoose(_opts, _excluded);
        var key = JSON.stringify([locString, cacheKeyOpts]);
        var inf = intlRelCache[key];
        if (!inf) {
          inf = new Intl.RelativeTimeFormat(locString, opts);
          intlRelCache[key] = inf;
        }
        return inf;
      }
      var sysLocaleCache = null;
      function systemLocale() {
        if (sysLocaleCache) {
          return sysLocaleCache;
        } else {
          sysLocaleCache = new Intl.DateTimeFormat().resolvedOptions().locale;
          return sysLocaleCache;
        }
      }
      function parseLocaleString(localeStr) {
        var uIndex = localeStr.indexOf("-u-");
        if (uIndex === -1) {
          return [localeStr];
        } else {
          var options;
          var smaller = localeStr.substring(0, uIndex);
          try {
            options = getCachedDTF(localeStr).resolvedOptions();
          } catch (e5) {
            options = getCachedDTF(smaller).resolvedOptions();
          }
          var _options = options, numberingSystem = _options.numberingSystem, calendar = _options.calendar;
          return [smaller, numberingSystem, calendar];
        }
      }
      function intlConfigString(localeStr, numberingSystem, outputCalendar) {
        if (outputCalendar || numberingSystem) {
          localeStr += "-u";
          if (outputCalendar) {
            localeStr += "-ca-" + outputCalendar;
          }
          if (numberingSystem) {
            localeStr += "-nu-" + numberingSystem;
          }
          return localeStr;
        } else {
          return localeStr;
        }
      }
      function mapMonths(f2) {
        var ms = [];
        for (var i3 = 1; i3 <= 12; i3++) {
          var dt = DateTime2.utc(2016, i3, 1);
          ms.push(f2(dt));
        }
        return ms;
      }
      function mapWeekdays(f2) {
        var ms = [];
        for (var i3 = 1; i3 <= 7; i3++) {
          var dt = DateTime2.utc(2016, 11, 13 + i3);
          ms.push(f2(dt));
        }
        return ms;
      }
      function listStuff(loc, length, defaultOK, englishFn, intlFn) {
        var mode = loc.listingMode(defaultOK);
        if (mode === "error") {
          return null;
        } else if (mode === "en") {
          return englishFn(length);
        } else {
          return intlFn(length);
        }
      }
      function supportsFastNumbers(loc) {
        if (loc.numberingSystem && loc.numberingSystem !== "latn") {
          return false;
        } else {
          return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
        }
      }
      var PolyNumberFormatter = /* @__PURE__ */ function() {
        function PolyNumberFormatter2(intl, forceSimple, opts) {
          this.padTo = opts.padTo || 0;
          this.floor = opts.floor || false;
          if (!forceSimple) {
            var intlOpts = {
              useGrouping: false
            };
            if (opts.padTo > 0)
              intlOpts.minimumIntegerDigits = opts.padTo;
            this.inf = getCachedINF(intl, intlOpts);
          }
        }
        var _proto = PolyNumberFormatter2.prototype;
        _proto.format = function format(i3) {
          if (this.inf) {
            var fixed = this.floor ? Math.floor(i3) : i3;
            return this.inf.format(fixed);
          } else {
            var _fixed = this.floor ? Math.floor(i3) : roundTo(i3, 3);
            return padStart(_fixed, this.padTo);
          }
        };
        return PolyNumberFormatter2;
      }();
      var PolyDateFormatter = /* @__PURE__ */ function() {
        function PolyDateFormatter2(dt, intl, opts) {
          this.opts = opts;
          var z;
          if (dt.zone.isUniversal) {
            var gmtOffset = -1 * (dt.offset / 60);
            var offsetZ = gmtOffset >= 0 ? "Etc/GMT+" + gmtOffset : "Etc/GMT" + gmtOffset;
            if (dt.offset !== 0 && IANAZone.create(offsetZ).valid) {
              z = offsetZ;
              this.dt = dt;
            } else {
              z = "UTC";
              if (opts.timeZoneName) {
                this.dt = dt;
              } else {
                this.dt = dt.offset === 0 ? dt : DateTime2.fromMillis(dt.ts + dt.offset * 60 * 1e3);
              }
            }
          } else if (dt.zone.type === "system") {
            this.dt = dt;
          } else {
            this.dt = dt;
            z = dt.zone.name;
          }
          var intlOpts = _extends2({}, this.opts);
          if (z) {
            intlOpts.timeZone = z;
          }
          this.dtf = getCachedDTF(intl, intlOpts);
        }
        var _proto2 = PolyDateFormatter2.prototype;
        _proto2.format = function format() {
          return this.dtf.format(this.dt.toJSDate());
        };
        _proto2.formatToParts = function formatToParts() {
          return this.dtf.formatToParts(this.dt.toJSDate());
        };
        _proto2.resolvedOptions = function resolvedOptions() {
          return this.dtf.resolvedOptions();
        };
        return PolyDateFormatter2;
      }();
      var PolyRelFormatter = /* @__PURE__ */ function() {
        function PolyRelFormatter2(intl, isEnglish, opts) {
          this.opts = _extends2({
            style: "long"
          }, opts);
          if (!isEnglish && hasRelative()) {
            this.rtf = getCachedRTF(intl, opts);
          }
        }
        var _proto3 = PolyRelFormatter2.prototype;
        _proto3.format = function format(count, unit) {
          if (this.rtf) {
            return this.rtf.format(count, unit);
          } else {
            return formatRelativeTime(unit, count, this.opts.numeric, this.opts.style !== "long");
          }
        };
        _proto3.formatToParts = function formatToParts(count, unit) {
          if (this.rtf) {
            return this.rtf.formatToParts(count, unit);
          } else {
            return [];
          }
        };
        return PolyRelFormatter2;
      }();
      var Locale = /* @__PURE__ */ function() {
        Locale2.fromOpts = function fromOpts(opts) {
          return Locale2.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
        };
        Locale2.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
          if (defaultToEN === void 0) {
            defaultToEN = false;
          }
          var specifiedLocale = locale || Settings.defaultLocale;
          var localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale());
          var numberingSystemR = numberingSystem || Settings.defaultNumberingSystem;
          var outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
          return new Locale2(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
        };
        Locale2.resetCache = function resetCache() {
          sysLocaleCache = null;
          intlDTCache = {};
          intlNumCache = {};
          intlRelCache = {};
        };
        Locale2.fromObject = function fromObject(_temp) {
          var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, outputCalendar = _ref.outputCalendar;
          return Locale2.create(locale, numberingSystem, outputCalendar);
        };
        function Locale2(locale, numbering, outputCalendar, specifiedLocale) {
          var _parseLocaleString = parseLocaleString(locale), parsedLocale = _parseLocaleString[0], parsedNumberingSystem = _parseLocaleString[1], parsedOutputCalendar = _parseLocaleString[2];
          this.locale = parsedLocale;
          this.numberingSystem = numbering || parsedNumberingSystem || null;
          this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
          this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
          this.weekdaysCache = {
            format: {},
            standalone: {}
          };
          this.monthsCache = {
            format: {},
            standalone: {}
          };
          this.meridiemCache = null;
          this.eraCache = {};
          this.specifiedLocale = specifiedLocale;
          this.fastNumbersCached = null;
        }
        var _proto4 = Locale2.prototype;
        _proto4.listingMode = function listingMode(defaultOK) {
          var isActuallyEn = this.isEnglish();
          var hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
          return isActuallyEn && hasNoWeirdness ? "en" : "intl";
        };
        _proto4.clone = function clone2(alts) {
          if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
            return this;
          } else {
            return Locale2.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
          }
        };
        _proto4.redefaultToEN = function redefaultToEN(alts) {
          if (alts === void 0) {
            alts = {};
          }
          return this.clone(_extends2({}, alts, {
            defaultToEN: true
          }));
        };
        _proto4.redefaultToSystem = function redefaultToSystem(alts) {
          if (alts === void 0) {
            alts = {};
          }
          return this.clone(_extends2({}, alts, {
            defaultToEN: false
          }));
        };
        _proto4.months = function months$1(length, format, defaultOK) {
          var _this = this;
          if (format === void 0) {
            format = false;
          }
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, length, defaultOK, months, function() {
            var intl = format ? {
              month: length,
              day: "numeric"
            } : {
              month: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this.monthsCache[formatStr][length]) {
              _this.monthsCache[formatStr][length] = mapMonths(function(dt) {
                return _this.extract(dt, intl, "month");
              });
            }
            return _this.monthsCache[formatStr][length];
          });
        };
        _proto4.weekdays = function weekdays$1(length, format, defaultOK) {
          var _this2 = this;
          if (format === void 0) {
            format = false;
          }
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, length, defaultOK, weekdays, function() {
            var intl = format ? {
              weekday: length,
              year: "numeric",
              month: "long",
              day: "numeric"
            } : {
              weekday: length
            }, formatStr = format ? "format" : "standalone";
            if (!_this2.weekdaysCache[formatStr][length]) {
              _this2.weekdaysCache[formatStr][length] = mapWeekdays(function(dt) {
                return _this2.extract(dt, intl, "weekday");
              });
            }
            return _this2.weekdaysCache[formatStr][length];
          });
        };
        _proto4.meridiems = function meridiems$1(defaultOK) {
          var _this3 = this;
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, void 0, defaultOK, function() {
            return meridiems;
          }, function() {
            if (!_this3.meridiemCache) {
              var intl = {
                hour: "numeric",
                hourCycle: "h12"
              };
              _this3.meridiemCache = [DateTime2.utc(2016, 11, 13, 9), DateTime2.utc(2016, 11, 13, 19)].map(function(dt) {
                return _this3.extract(dt, intl, "dayperiod");
              });
            }
            return _this3.meridiemCache;
          });
        };
        _proto4.eras = function eras$1(length, defaultOK) {
          var _this4 = this;
          if (defaultOK === void 0) {
            defaultOK = true;
          }
          return listStuff(this, length, defaultOK, eras, function() {
            var intl = {
              era: length
            };
            if (!_this4.eraCache[length]) {
              _this4.eraCache[length] = [DateTime2.utc(-40, 1, 1), DateTime2.utc(2017, 1, 1)].map(function(dt) {
                return _this4.extract(dt, intl, "era");
              });
            }
            return _this4.eraCache[length];
          });
        };
        _proto4.extract = function extract(dt, intlOpts, field) {
          var df = this.dtFormatter(dt, intlOpts), results = df.formatToParts(), matching = results.find(function(m2) {
            return m2.type.toLowerCase() === field;
          });
          return matching ? matching.value : null;
        };
        _proto4.numberFormatter = function numberFormatter(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return new PolyNumberFormatter(this.intl, opts.forceSimple || this.fastNumbers, opts);
        };
        _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
          if (intlOpts === void 0) {
            intlOpts = {};
          }
          return new PolyDateFormatter(dt, this.intl, intlOpts);
        };
        _proto4.relFormatter = function relFormatter(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return new PolyRelFormatter(this.intl, this.isEnglish(), opts);
        };
        _proto4.isEnglish = function isEnglish() {
          return this.locale === "en" || this.locale.toLowerCase() === "en-us" || new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
        };
        _proto4.equals = function equals(other) {
          return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
        };
        _createClass2(Locale2, [{
          key: "fastNumbers",
          get: function get3() {
            if (this.fastNumbersCached == null) {
              this.fastNumbersCached = supportsFastNumbers(this);
            }
            return this.fastNumbersCached;
          }
        }]);
        return Locale2;
      }();
      function combineRegexes() {
        for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
          regexes[_key] = arguments[_key];
        }
        var full = regexes.reduce(function(f2, r4) {
          return f2 + r4.source;
        }, "");
        return RegExp("^" + full + "$");
      }
      function combineExtractors() {
        for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          extractors[_key2] = arguments[_key2];
        }
        return function(m2) {
          return extractors.reduce(function(_ref, ex) {
            var mergedVals = _ref[0], mergedZone = _ref[1], cursor = _ref[2];
            var _ex = ex(m2, cursor), val = _ex[0], zone = _ex[1], next = _ex[2];
            return [_extends2({}, mergedVals, val), mergedZone || zone, next];
          }, [{}, null, 1]).slice(0, 2);
        };
      }
      function parse(s6) {
        if (s6 == null) {
          return [null, null];
        }
        for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          patterns[_key3 - 1] = arguments[_key3];
        }
        for (var _i = 0, _patterns = patterns; _i < _patterns.length; _i++) {
          var _patterns$_i = _patterns[_i], regex = _patterns$_i[0], extractor = _patterns$_i[1];
          var m2 = regex.exec(s6);
          if (m2) {
            return extractor(m2);
          }
        }
        return [null, null];
      }
      function simpleParse() {
        for (var _len4 = arguments.length, keys2 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          keys2[_key4] = arguments[_key4];
        }
        return function(match2, cursor) {
          var ret = {};
          var i3;
          for (i3 = 0; i3 < keys2.length; i3++) {
            ret[keys2[i3]] = parseInteger(match2[cursor + i3]);
          }
          return [ret, null, cursor + i3];
        };
      }
      var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/;
      var isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/;
      var isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?");
      var isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?");
      var isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/;
      var isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/;
      var isoOrdinalRegex = /(\d{4})-?(\d{3})/;
      var extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay");
      var extractISOOrdinalData = simpleParse("year", "ordinal");
      var sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/;
      var sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|(" + ianaRegex.source + "))?");
      var sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");
      function int(match2, pos, fallback) {
        var m2 = match2[pos];
        return isUndefined(m2) ? fallback : parseInteger(m2);
      }
      function extractISOYmd(match2, cursor) {
        var item = {
          year: int(match2, cursor),
          month: int(match2, cursor + 1, 1),
          day: int(match2, cursor + 2, 1)
        };
        return [item, null, cursor + 3];
      }
      function extractISOTime(match2, cursor) {
        var item = {
          hours: int(match2, cursor, 0),
          minutes: int(match2, cursor + 1, 0),
          seconds: int(match2, cursor + 2, 0),
          milliseconds: parseMillis(match2[cursor + 3])
        };
        return [item, null, cursor + 4];
      }
      function extractISOOffset(match2, cursor) {
        var local = !match2[cursor] && !match2[cursor + 1], fullOffset = signedOffset(match2[cursor + 1], match2[cursor + 2]), zone = local ? null : FixedOffsetZone.instance(fullOffset);
        return [{}, zone, cursor + 3];
      }
      function extractIANAZone(match2, cursor) {
        var zone = match2[cursor] ? IANAZone.create(match2[cursor]) : null;
        return [{}, zone, cursor + 1];
      }
      var isoTimeOnly = RegExp("^T?" + isoTimeBaseRegex.source + "$");
      var isoDuration = /^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
      function extractISODuration(match2) {
        var s6 = match2[0], yearStr = match2[1], monthStr = match2[2], weekStr = match2[3], dayStr = match2[4], hourStr = match2[5], minuteStr = match2[6], secondStr = match2[7], millisecondsStr = match2[8];
        var hasNegativePrefix = s6[0] === "-";
        var negativeSeconds = secondStr && secondStr[0] === "-";
        var maybeNegate = function maybeNegate2(num, force) {
          if (force === void 0) {
            force = false;
          }
          return num !== void 0 && (force || num && hasNegativePrefix) ? -num : num;
        };
        return [{
          years: maybeNegate(parseFloating(yearStr)),
          months: maybeNegate(parseFloating(monthStr)),
          weeks: maybeNegate(parseFloating(weekStr)),
          days: maybeNegate(parseFloating(dayStr)),
          hours: maybeNegate(parseFloating(hourStr)),
          minutes: maybeNegate(parseFloating(minuteStr)),
          seconds: maybeNegate(parseFloating(secondStr), secondStr === "-0"),
          milliseconds: maybeNegate(parseMillis(millisecondsStr), negativeSeconds)
        }];
      }
      var obsOffsets = {
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = {
          year: yearStr.length === 2 ? untruncateYear(parseInteger(yearStr)) : parseInteger(yearStr),
          month: monthsShort.indexOf(monthStr) + 1,
          day: parseInteger(dayStr),
          hour: parseInteger(hourStr),
          minute: parseInteger(minuteStr)
        };
        if (secondStr)
          result.second = parseInteger(secondStr);
        if (weekdayStr) {
          result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
        }
        return result;
      }
      var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
      function extractRFC2822(match2) {
        var weekdayStr = match2[1], dayStr = match2[2], monthStr = match2[3], yearStr = match2[4], hourStr = match2[5], minuteStr = match2[6], secondStr = match2[7], obsOffset = match2[8], milOffset = match2[9], offHourStr = match2[10], offMinuteStr = match2[11], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        var offset2;
        if (obsOffset) {
          offset2 = obsOffsets[obsOffset];
        } else if (milOffset) {
          offset2 = 0;
        } else {
          offset2 = signedOffset(offHourStr, offMinuteStr);
        }
        return [result, new FixedOffsetZone(offset2)];
      }
      function preprocessRFC2822(s6) {
        return s6.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
      }
      var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/;
      var rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/;
      var ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
      function extractRFC1123Or850(match2) {
        var weekdayStr = match2[1], dayStr = match2[2], monthStr = match2[3], yearStr = match2[4], hourStr = match2[5], minuteStr = match2[6], secondStr = match2[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        return [result, FixedOffsetZone.utcInstance];
      }
      function extractASCII(match2) {
        var weekdayStr = match2[1], monthStr = match2[2], dayStr = match2[3], hourStr = match2[4], minuteStr = match2[5], secondStr = match2[6], yearStr = match2[7], result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
        return [result, FixedOffsetZone.utcInstance];
      }
      var isoYmdWithTimeExtensionRegex = combineRegexes(isoYmdRegex, isoTimeExtensionRegex);
      var isoWeekWithTimeExtensionRegex = combineRegexes(isoWeekRegex, isoTimeExtensionRegex);
      var isoOrdinalWithTimeExtensionRegex = combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex);
      var isoTimeCombinedRegex = combineRegexes(isoTimeRegex);
      var extractISOYmdTimeAndOffset = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset);
      var extractISOWeekTimeAndOffset = combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset);
      var extractISOOrdinalDateAndTime = combineExtractors(extractISOOrdinalData, extractISOTime, extractISOOffset);
      var extractISOTimeAndOffset = combineExtractors(extractISOTime, extractISOOffset);
      function parseISODate(s6) {
        return parse(s6, [isoYmdWithTimeExtensionRegex, extractISOYmdTimeAndOffset], [isoWeekWithTimeExtensionRegex, extractISOWeekTimeAndOffset], [isoOrdinalWithTimeExtensionRegex, extractISOOrdinalDateAndTime], [isoTimeCombinedRegex, extractISOTimeAndOffset]);
      }
      function parseRFC2822Date(s6) {
        return parse(preprocessRFC2822(s6), [rfc2822, extractRFC2822]);
      }
      function parseHTTPDate(s6) {
        return parse(s6, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
      }
      function parseISODuration(s6) {
        return parse(s6, [isoDuration, extractISODuration]);
      }
      var extractISOTimeOnly = combineExtractors(extractISOTime);
      function parseISOTimeOnly(s6) {
        return parse(s6, [isoTimeOnly, extractISOTimeOnly]);
      }
      var sqlYmdWithTimeExtensionRegex = combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex);
      var sqlTimeCombinedRegex = combineRegexes(sqlTimeRegex);
      var extractISOYmdTimeOffsetAndIANAZone = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone);
      var extractISOTimeOffsetAndIANAZone = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
      function parseSQL(s6) {
        return parse(s6, [sqlYmdWithTimeExtensionRegex, extractISOYmdTimeOffsetAndIANAZone], [sqlTimeCombinedRegex, extractISOTimeOffsetAndIANAZone]);
      }
      var INVALID$2 = "Invalid Duration";
      var lowOrderMatrix = {
        weeks: {
          days: 7,
          hours: 7 * 24,
          minutes: 7 * 24 * 60,
          seconds: 7 * 24 * 60 * 60,
          milliseconds: 7 * 24 * 60 * 60 * 1e3
        },
        days: {
          hours: 24,
          minutes: 24 * 60,
          seconds: 24 * 60 * 60,
          milliseconds: 24 * 60 * 60 * 1e3
        },
        hours: {
          minutes: 60,
          seconds: 60 * 60,
          milliseconds: 60 * 60 * 1e3
        },
        minutes: {
          seconds: 60,
          milliseconds: 60 * 1e3
        },
        seconds: {
          milliseconds: 1e3
        }
      };
      var casualMatrix = _extends2({
        years: {
          quarters: 4,
          months: 12,
          weeks: 52,
          days: 365,
          hours: 365 * 24,
          minutes: 365 * 24 * 60,
          seconds: 365 * 24 * 60 * 60,
          milliseconds: 365 * 24 * 60 * 60 * 1e3
        },
        quarters: {
          months: 3,
          weeks: 13,
          days: 91,
          hours: 91 * 24,
          minutes: 91 * 24 * 60,
          seconds: 91 * 24 * 60 * 60,
          milliseconds: 91 * 24 * 60 * 60 * 1e3
        },
        months: {
          weeks: 4,
          days: 30,
          hours: 30 * 24,
          minutes: 30 * 24 * 60,
          seconds: 30 * 24 * 60 * 60,
          milliseconds: 30 * 24 * 60 * 60 * 1e3
        }
      }, lowOrderMatrix);
      var daysInYearAccurate = 146097 / 400;
      var daysInMonthAccurate = 146097 / 4800;
      var accurateMatrix = _extends2({
        years: {
          quarters: 4,
          months: 12,
          weeks: daysInYearAccurate / 7,
          days: daysInYearAccurate,
          hours: daysInYearAccurate * 24,
          minutes: daysInYearAccurate * 24 * 60,
          seconds: daysInYearAccurate * 24 * 60 * 60,
          milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3
        },
        quarters: {
          months: 3,
          weeks: daysInYearAccurate / 28,
          days: daysInYearAccurate / 4,
          hours: daysInYearAccurate * 24 / 4,
          minutes: daysInYearAccurate * 24 * 60 / 4,
          seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
          milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1e3 / 4
        },
        months: {
          weeks: daysInMonthAccurate / 7,
          days: daysInMonthAccurate,
          hours: daysInMonthAccurate * 24,
          minutes: daysInMonthAccurate * 24 * 60,
          seconds: daysInMonthAccurate * 24 * 60 * 60,
          milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1e3
        }
      }, lowOrderMatrix);
      var orderedUnits$1 = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
      var reverseUnits = orderedUnits$1.slice(0).reverse();
      function clone$1(dur, alts, clear2) {
        if (clear2 === void 0) {
          clear2 = false;
        }
        var conf = {
          values: clear2 ? alts.values : _extends2({}, dur.values, alts.values || {}),
          loc: dur.loc.clone(alts.loc),
          conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
        };
        return new Duration(conf);
      }
      function antiTrunc(n7) {
        return n7 < 0 ? Math.floor(n7) : Math.ceil(n7);
      }
      function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
        var conv = matrix[toUnit][fromUnit], raw = fromMap[fromUnit] / conv, sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]), added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
        toMap[toUnit] += added;
        fromMap[fromUnit] -= added * conv;
      }
      function normalizeValues(matrix, vals) {
        reverseUnits.reduce(function(previous, current) {
          if (!isUndefined(vals[current])) {
            if (previous) {
              convert(matrix, vals, previous, vals, current);
            }
            return current;
          } else {
            return previous;
          }
        }, null);
      }
      var Duration = /* @__PURE__ */ function() {
        function Duration2(config) {
          var accurate = config.conversionAccuracy === "longterm" || false;
          this.values = config.values;
          this.loc = config.loc || Locale.create();
          this.conversionAccuracy = accurate ? "longterm" : "casual";
          this.invalid = config.invalid || null;
          this.matrix = accurate ? accurateMatrix : casualMatrix;
          this.isLuxonDuration = true;
        }
        Duration2.fromMillis = function fromMillis(count, opts) {
          return Duration2.fromObject({
            milliseconds: count
          }, opts);
        };
        Duration2.fromObject = function fromObject(obj, opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (obj == null || typeof obj !== "object") {
            throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + (obj === null ? "null" : typeof obj));
          }
          return new Duration2({
            values: normalizeObject(obj, Duration2.normalizeUnit),
            loc: Locale.fromObject(opts),
            conversionAccuracy: opts.conversionAccuracy
          });
        };
        Duration2.fromDurationLike = function fromDurationLike(durationLike) {
          if (isNumber2(durationLike)) {
            return Duration2.fromMillis(durationLike);
          } else if (Duration2.isDuration(durationLike)) {
            return durationLike;
          } else if (typeof durationLike === "object") {
            return Duration2.fromObject(durationLike);
          } else {
            throw new InvalidArgumentError("Unknown duration argument " + durationLike + " of type " + typeof durationLike);
          }
        };
        Duration2.fromISO = function fromISO(text, opts) {
          var _parseISODuration = parseISODuration(text), parsed = _parseISODuration[0];
          if (parsed) {
            return Duration2.fromObject(parsed, opts);
          } else {
            return Duration2.invalid("unparsable", 'the input "' + text + `" can't be parsed as ISO 8601`);
          }
        };
        Duration2.fromISOTime = function fromISOTime(text, opts) {
          var _parseISOTimeOnly = parseISOTimeOnly(text), parsed = _parseISOTimeOnly[0];
          if (parsed) {
            return Duration2.fromObject(parsed, opts);
          } else {
            return Duration2.invalid("unparsable", 'the input "' + text + `" can't be parsed as ISO 8601`);
          }
        };
        Duration2.invalid = function invalid(reason, explanation) {
          if (explanation === void 0) {
            explanation = null;
          }
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
          }
          var invalid2 = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidDurationError(invalid2);
          } else {
            return new Duration2({
              invalid: invalid2
            });
          }
        };
        Duration2.normalizeUnit = function normalizeUnit2(unit) {
          var normalized = {
            year: "years",
            years: "years",
            quarter: "quarters",
            quarters: "quarters",
            month: "months",
            months: "months",
            week: "weeks",
            weeks: "weeks",
            day: "days",
            days: "days",
            hour: "hours",
            hours: "hours",
            minute: "minutes",
            minutes: "minutes",
            second: "seconds",
            seconds: "seconds",
            millisecond: "milliseconds",
            milliseconds: "milliseconds"
          }[unit ? unit.toLowerCase() : unit];
          if (!normalized)
            throw new InvalidUnitError(unit);
          return normalized;
        };
        Duration2.isDuration = function isDuration(o6) {
          return o6 && o6.isLuxonDuration || false;
        };
        var _proto = Duration2.prototype;
        _proto.toFormat = function toFormat(fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var fmtOpts = _extends2({}, opts, {
            floor: opts.round !== false && opts.floor !== false
          });
          return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID$2;
        };
        _proto.toObject = function toObject() {
          if (!this.isValid)
            return {};
          return _extends2({}, this.values);
        };
        _proto.toISO = function toISO() {
          if (!this.isValid)
            return null;
          var s6 = "P";
          if (this.years !== 0)
            s6 += this.years + "Y";
          if (this.months !== 0 || this.quarters !== 0)
            s6 += this.months + this.quarters * 3 + "M";
          if (this.weeks !== 0)
            s6 += this.weeks + "W";
          if (this.days !== 0)
            s6 += this.days + "D";
          if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0)
            s6 += "T";
          if (this.hours !== 0)
            s6 += this.hours + "H";
          if (this.minutes !== 0)
            s6 += this.minutes + "M";
          if (this.seconds !== 0 || this.milliseconds !== 0)
            s6 += roundTo(this.seconds + this.milliseconds / 1e3, 3) + "S";
          if (s6 === "P")
            s6 += "T0S";
          return s6;
        };
        _proto.toISOTime = function toISOTime(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid)
            return null;
          var millis = this.toMillis();
          if (millis < 0 || millis >= 864e5)
            return null;
          opts = _extends2({
            suppressMilliseconds: false,
            suppressSeconds: false,
            includePrefix: false,
            format: "extended"
          }, opts);
          var value = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
          var fmt = opts.format === "basic" ? "hhmm" : "hh:mm";
          if (!opts.suppressSeconds || value.seconds !== 0 || value.milliseconds !== 0) {
            fmt += opts.format === "basic" ? "ss" : ":ss";
            if (!opts.suppressMilliseconds || value.milliseconds !== 0) {
              fmt += ".SSS";
            }
          }
          var str = value.toFormat(fmt);
          if (opts.includePrefix) {
            str = "T" + str;
          }
          return str;
        };
        _proto.toJSON = function toJSON3() {
          return this.toISO();
        };
        _proto.toString = function toString2() {
          return this.toISO();
        };
        _proto.toMillis = function toMillis() {
          return this.as("milliseconds");
        };
        _proto.valueOf = function valueOf() {
          return this.toMillis();
        };
        _proto.plus = function plus(duration) {
          if (!this.isValid)
            return this;
          var dur = Duration2.fromDurationLike(duration), result = {};
          for (var _iterator = _createForOfIteratorHelperLoose2(orderedUnits$1), _step; !(_step = _iterator()).done; ) {
            var k2 = _step.value;
            if (hasOwnProperty(dur.values, k2) || hasOwnProperty(this.values, k2)) {
              result[k2] = dur.get(k2) + this.get(k2);
            }
          }
          return clone$1(this, {
            values: result
          }, true);
        };
        _proto.minus = function minus(duration) {
          if (!this.isValid)
            return this;
          var dur = Duration2.fromDurationLike(duration);
          return this.plus(dur.negate());
        };
        _proto.mapUnits = function mapUnits(fn) {
          if (!this.isValid)
            return this;
          var result = {};
          for (var _i = 0, _Object$keys = Object.keys(this.values); _i < _Object$keys.length; _i++) {
            var k2 = _Object$keys[_i];
            result[k2] = asNumber(fn(this.values[k2], k2));
          }
          return clone$1(this, {
            values: result
          }, true);
        };
        _proto.get = function get3(unit) {
          return this[Duration2.normalizeUnit(unit)];
        };
        _proto.set = function set5(values2) {
          if (!this.isValid)
            return this;
          var mixed = _extends2({}, this.values, normalizeObject(values2, Duration2.normalizeUnit));
          return clone$1(this, {
            values: mixed
          });
        };
        _proto.reconfigure = function reconfigure(_temp) {
          var _ref = _temp === void 0 ? {} : _temp, locale = _ref.locale, numberingSystem = _ref.numberingSystem, conversionAccuracy = _ref.conversionAccuracy;
          var loc = this.loc.clone({
            locale,
            numberingSystem
          }), opts = {
            loc
          };
          if (conversionAccuracy) {
            opts.conversionAccuracy = conversionAccuracy;
          }
          return clone$1(this, opts);
        };
        _proto.as = function as(unit) {
          return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
        };
        _proto.normalize = function normalize() {
          if (!this.isValid)
            return this;
          var vals = this.toObject();
          normalizeValues(this.matrix, vals);
          return clone$1(this, {
            values: vals
          }, true);
        };
        _proto.shiftTo = function shiftTo() {
          for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
            units[_key] = arguments[_key];
          }
          if (!this.isValid)
            return this;
          if (units.length === 0) {
            return this;
          }
          units = units.map(function(u2) {
            return Duration2.normalizeUnit(u2);
          });
          var built = {}, accumulated = {}, vals = this.toObject();
          var lastUnit;
          for (var _iterator2 = _createForOfIteratorHelperLoose2(orderedUnits$1), _step2; !(_step2 = _iterator2()).done; ) {
            var k2 = _step2.value;
            if (units.indexOf(k2) >= 0) {
              lastUnit = k2;
              var own = 0;
              for (var ak in accumulated) {
                own += this.matrix[ak][k2] * accumulated[ak];
                accumulated[ak] = 0;
              }
              if (isNumber2(vals[k2])) {
                own += vals[k2];
              }
              var i3 = Math.trunc(own);
              built[k2] = i3;
              accumulated[k2] = own - i3;
              for (var down in vals) {
                if (orderedUnits$1.indexOf(down) > orderedUnits$1.indexOf(k2)) {
                  convert(this.matrix, vals, down, built, k2);
                }
              }
            } else if (isNumber2(vals[k2])) {
              accumulated[k2] = vals[k2];
            }
          }
          for (var key in accumulated) {
            if (accumulated[key] !== 0) {
              built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
            }
          }
          return clone$1(this, {
            values: built
          }, true).normalize();
        };
        _proto.negate = function negate() {
          if (!this.isValid)
            return this;
          var negated = {};
          for (var _i2 = 0, _Object$keys2 = Object.keys(this.values); _i2 < _Object$keys2.length; _i2++) {
            var k2 = _Object$keys2[_i2];
            negated[k2] = -this.values[k2];
          }
          return clone$1(this, {
            values: negated
          }, true);
        };
        _proto.equals = function equals(other) {
          if (!this.isValid || !other.isValid) {
            return false;
          }
          if (!this.loc.equals(other.loc)) {
            return false;
          }
          function eq2(v1, v2) {
            if (v1 === void 0 || v1 === 0)
              return v2 === void 0 || v2 === 0;
            return v1 === v2;
          }
          for (var _iterator3 = _createForOfIteratorHelperLoose2(orderedUnits$1), _step3; !(_step3 = _iterator3()).done; ) {
            var u2 = _step3.value;
            if (!eq2(this.values[u2], other.values[u2])) {
              return false;
            }
          }
          return true;
        };
        _createClass2(Duration2, [{
          key: "locale",
          get: function get3() {
            return this.isValid ? this.loc.locale : null;
          }
        }, {
          key: "numberingSystem",
          get: function get3() {
            return this.isValid ? this.loc.numberingSystem : null;
          }
        }, {
          key: "years",
          get: function get3() {
            return this.isValid ? this.values.years || 0 : NaN;
          }
        }, {
          key: "quarters",
          get: function get3() {
            return this.isValid ? this.values.quarters || 0 : NaN;
          }
        }, {
          key: "months",
          get: function get3() {
            return this.isValid ? this.values.months || 0 : NaN;
          }
        }, {
          key: "weeks",
          get: function get3() {
            return this.isValid ? this.values.weeks || 0 : NaN;
          }
        }, {
          key: "days",
          get: function get3() {
            return this.isValid ? this.values.days || 0 : NaN;
          }
        }, {
          key: "hours",
          get: function get3() {
            return this.isValid ? this.values.hours || 0 : NaN;
          }
        }, {
          key: "minutes",
          get: function get3() {
            return this.isValid ? this.values.minutes || 0 : NaN;
          }
        }, {
          key: "seconds",
          get: function get3() {
            return this.isValid ? this.values.seconds || 0 : NaN;
          }
        }, {
          key: "milliseconds",
          get: function get3() {
            return this.isValid ? this.values.milliseconds || 0 : NaN;
          }
        }, {
          key: "isValid",
          get: function get3() {
            return this.invalid === null;
          }
        }, {
          key: "invalidReason",
          get: function get3() {
            return this.invalid ? this.invalid.reason : null;
          }
        }, {
          key: "invalidExplanation",
          get: function get3() {
            return this.invalid ? this.invalid.explanation : null;
          }
        }]);
        return Duration2;
      }();
      var INVALID$1 = "Invalid Interval";
      function validateStartEnd(start, end) {
        if (!start || !start.isValid) {
          return Interval.invalid("missing or invalid start");
        } else if (!end || !end.isValid) {
          return Interval.invalid("missing or invalid end");
        } else if (end < start) {
          return Interval.invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
        } else {
          return null;
        }
      }
      var Interval = /* @__PURE__ */ function() {
        function Interval2(config) {
          this.s = config.start;
          this.e = config.end;
          this.invalid = config.invalid || null;
          this.isLuxonInterval = true;
        }
        Interval2.invalid = function invalid(reason, explanation) {
          if (explanation === void 0) {
            explanation = null;
          }
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
          }
          var invalid2 = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidIntervalError(invalid2);
          } else {
            return new Interval2({
              invalid: invalid2
            });
          }
        };
        Interval2.fromDateTimes = function fromDateTimes(start, end) {
          var builtStart = friendlyDateTime(start), builtEnd = friendlyDateTime(end);
          var validateError = validateStartEnd(builtStart, builtEnd);
          if (validateError == null) {
            return new Interval2({
              start: builtStart,
              end: builtEnd
            });
          } else {
            return validateError;
          }
        };
        Interval2.after = function after(start, duration) {
          var dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(start);
          return Interval2.fromDateTimes(dt, dt.plus(dur));
        };
        Interval2.before = function before(end, duration) {
          var dur = Duration.fromDurationLike(duration), dt = friendlyDateTime(end);
          return Interval2.fromDateTimes(dt.minus(dur), dt);
        };
        Interval2.fromISO = function fromISO(text, opts) {
          var _split = (text || "").split("/", 2), s6 = _split[0], e5 = _split[1];
          if (s6 && e5) {
            var start, startIsValid;
            try {
              start = DateTime2.fromISO(s6, opts);
              startIsValid = start.isValid;
            } catch (e6) {
              startIsValid = false;
            }
            var end, endIsValid;
            try {
              end = DateTime2.fromISO(e5, opts);
              endIsValid = end.isValid;
            } catch (e6) {
              endIsValid = false;
            }
            if (startIsValid && endIsValid) {
              return Interval2.fromDateTimes(start, end);
            }
            if (startIsValid) {
              var dur = Duration.fromISO(e5, opts);
              if (dur.isValid) {
                return Interval2.after(start, dur);
              }
            } else if (endIsValid) {
              var _dur = Duration.fromISO(s6, opts);
              if (_dur.isValid) {
                return Interval2.before(end, _dur);
              }
            }
          }
          return Interval2.invalid("unparsable", 'the input "' + text + `" can't be parsed as ISO 8601`);
        };
        Interval2.isInterval = function isInterval(o6) {
          return o6 && o6.isLuxonInterval || false;
        };
        var _proto = Interval2.prototype;
        _proto.length = function length(unit) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
        };
        _proto.count = function count(unit) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          if (!this.isValid)
            return NaN;
          var start = this.start.startOf(unit), end = this.end.startOf(unit);
          return Math.floor(end.diff(start, unit).get(unit)) + 1;
        };
        _proto.hasSame = function hasSame(unit) {
          return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, unit) : false;
        };
        _proto.isEmpty = function isEmpty() {
          return this.s.valueOf() === this.e.valueOf();
        };
        _proto.isAfter = function isAfter(dateTime) {
          if (!this.isValid)
            return false;
          return this.s > dateTime;
        };
        _proto.isBefore = function isBefore(dateTime) {
          if (!this.isValid)
            return false;
          return this.e <= dateTime;
        };
        _proto.contains = function contains(dateTime) {
          if (!this.isValid)
            return false;
          return this.s <= dateTime && this.e > dateTime;
        };
        _proto.set = function set5(_temp) {
          var _ref = _temp === void 0 ? {} : _temp, start = _ref.start, end = _ref.end;
          if (!this.isValid)
            return this;
          return Interval2.fromDateTimes(start || this.s, end || this.e);
        };
        _proto.splitAt = function splitAt() {
          var _this = this;
          if (!this.isValid)
            return [];
          for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
            dateTimes[_key] = arguments[_key];
          }
          var sorted = dateTimes.map(friendlyDateTime).filter(function(d2) {
            return _this.contains(d2);
          }).sort(), results = [];
          var s6 = this.s, i3 = 0;
          while (s6 < this.e) {
            var added = sorted[i3] || this.e, next = +added > +this.e ? this.e : added;
            results.push(Interval2.fromDateTimes(s6, next));
            s6 = next;
            i3 += 1;
          }
          return results;
        };
        _proto.splitBy = function splitBy(duration) {
          var dur = Duration.fromDurationLike(duration);
          if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
            return [];
          }
          var s6 = this.s, idx = 1, next;
          var results = [];
          while (s6 < this.e) {
            var added = this.start.plus(dur.mapUnits(function(x2) {
              return x2 * idx;
            }));
            next = +added > +this.e ? this.e : added;
            results.push(Interval2.fromDateTimes(s6, next));
            s6 = next;
            idx += 1;
          }
          return results;
        };
        _proto.divideEqually = function divideEqually(numberOfParts) {
          if (!this.isValid)
            return [];
          return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
        };
        _proto.overlaps = function overlaps(other) {
          return this.e > other.s && this.s < other.e;
        };
        _proto.abutsStart = function abutsStart(other) {
          if (!this.isValid)
            return false;
          return +this.e === +other.s;
        };
        _proto.abutsEnd = function abutsEnd(other) {
          if (!this.isValid)
            return false;
          return +other.e === +this.s;
        };
        _proto.engulfs = function engulfs(other) {
          if (!this.isValid)
            return false;
          return this.s <= other.s && this.e >= other.e;
        };
        _proto.equals = function equals(other) {
          if (!this.isValid || !other.isValid) {
            return false;
          }
          return this.s.equals(other.s) && this.e.equals(other.e);
        };
        _proto.intersection = function intersection(other) {
          if (!this.isValid)
            return this;
          var s6 = this.s > other.s ? this.s : other.s, e5 = this.e < other.e ? this.e : other.e;
          if (s6 >= e5) {
            return null;
          } else {
            return Interval2.fromDateTimes(s6, e5);
          }
        };
        _proto.union = function union2(other) {
          if (!this.isValid)
            return this;
          var s6 = this.s < other.s ? this.s : other.s, e5 = this.e > other.e ? this.e : other.e;
          return Interval2.fromDateTimes(s6, e5);
        };
        Interval2.merge = function merge(intervals) {
          var _intervals$sort$reduc = intervals.sort(function(a2, b2) {
            return a2.s - b2.s;
          }).reduce(function(_ref2, item) {
            var sofar = _ref2[0], current = _ref2[1];
            if (!current) {
              return [sofar, item];
            } else if (current.overlaps(item) || current.abutsStart(item)) {
              return [sofar, current.union(item)];
            } else {
              return [sofar.concat([current]), item];
            }
          }, [[], null]), found = _intervals$sort$reduc[0], final = _intervals$sort$reduc[1];
          if (final) {
            found.push(final);
          }
          return found;
        };
        Interval2.xor = function xor(intervals) {
          var _Array$prototype;
          var start = null, currentCount = 0;
          var results = [], ends = intervals.map(function(i4) {
            return [{
              time: i4.s,
              type: "s"
            }, {
              time: i4.e,
              type: "e"
            }];
          }), flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends), arr = flattened.sort(function(a2, b2) {
            return a2.time - b2.time;
          });
          for (var _iterator = _createForOfIteratorHelperLoose2(arr), _step; !(_step = _iterator()).done; ) {
            var i3 = _step.value;
            currentCount += i3.type === "s" ? 1 : -1;
            if (currentCount === 1) {
              start = i3.time;
            } else {
              if (start && +start !== +i3.time) {
                results.push(Interval2.fromDateTimes(start, i3.time));
              }
              start = null;
            }
          }
          return Interval2.merge(results);
        };
        _proto.difference = function difference() {
          var _this2 = this;
          for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            intervals[_key2] = arguments[_key2];
          }
          return Interval2.xor([this].concat(intervals)).map(function(i3) {
            return _this2.intersection(i3);
          }).filter(function(i3) {
            return i3 && !i3.isEmpty();
          });
        };
        _proto.toString = function toString2() {
          if (!this.isValid)
            return INVALID$1;
          return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
        };
        _proto.toISO = function toISO(opts) {
          if (!this.isValid)
            return INVALID$1;
          return this.s.toISO(opts) + "/" + this.e.toISO(opts);
        };
        _proto.toISODate = function toISODate() {
          if (!this.isValid)
            return INVALID$1;
          return this.s.toISODate() + "/" + this.e.toISODate();
        };
        _proto.toISOTime = function toISOTime(opts) {
          if (!this.isValid)
            return INVALID$1;
          return this.s.toISOTime(opts) + "/" + this.e.toISOTime(opts);
        };
        _proto.toFormat = function toFormat(dateFormat, _temp2) {
          var _ref3 = _temp2 === void 0 ? {} : _temp2, _ref3$separator = _ref3.separator, separator = _ref3$separator === void 0 ? " \u2013 " : _ref3$separator;
          if (!this.isValid)
            return INVALID$1;
          return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
        };
        _proto.toDuration = function toDuration(unit, opts) {
          if (!this.isValid) {
            return Duration.invalid(this.invalidReason);
          }
          return this.e.diff(this.s, unit, opts);
        };
        _proto.mapEndpoints = function mapEndpoints(mapFn) {
          return Interval2.fromDateTimes(mapFn(this.s), mapFn(this.e));
        };
        _createClass2(Interval2, [{
          key: "start",
          get: function get3() {
            return this.isValid ? this.s : null;
          }
        }, {
          key: "end",
          get: function get3() {
            return this.isValid ? this.e : null;
          }
        }, {
          key: "isValid",
          get: function get3() {
            return this.invalidReason === null;
          }
        }, {
          key: "invalidReason",
          get: function get3() {
            return this.invalid ? this.invalid.reason : null;
          }
        }, {
          key: "invalidExplanation",
          get: function get3() {
            return this.invalid ? this.invalid.explanation : null;
          }
        }]);
        return Interval2;
      }();
      var Info = /* @__PURE__ */ function() {
        function Info2() {
        }
        Info2.hasDST = function hasDST(zone) {
          if (zone === void 0) {
            zone = Settings.defaultZone;
          }
          var proto = DateTime2.now().setZone(zone).set({
            month: 12
          });
          return !zone.isUniversal && proto.offset !== proto.set({
            month: 6
          }).offset;
        };
        Info2.isValidIANAZone = function isValidIANAZone(zone) {
          return IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
        };
        Info2.normalizeZone = function normalizeZone$1(input2) {
          return normalizeZone(input2, Settings.defaultZone);
        };
        Info2.months = function months2(length, _temp) {
          if (length === void 0) {
            length = "long";
          }
          var _ref = _temp === void 0 ? {} : _temp, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? null : _ref$locale, _ref$numberingSystem = _ref.numberingSystem, numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem, _ref$locObj = _ref.locObj, locObj = _ref$locObj === void 0 ? null : _ref$locObj, _ref$outputCalendar = _ref.outputCalendar, outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;
          return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length);
        };
        Info2.monthsFormat = function monthsFormat(length, _temp2) {
          if (length === void 0) {
            length = "long";
          }
          var _ref2 = _temp2 === void 0 ? {} : _temp2, _ref2$locale = _ref2.locale, locale = _ref2$locale === void 0 ? null : _ref2$locale, _ref2$numberingSystem = _ref2.numberingSystem, numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem, _ref2$locObj = _ref2.locObj, locObj = _ref2$locObj === void 0 ? null : _ref2$locObj, _ref2$outputCalendar = _ref2.outputCalendar, outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;
          return (locObj || Locale.create(locale, numberingSystem, outputCalendar)).months(length, true);
        };
        Info2.weekdays = function weekdays2(length, _temp3) {
          if (length === void 0) {
            length = "long";
          }
          var _ref3 = _temp3 === void 0 ? {} : _temp3, _ref3$locale = _ref3.locale, locale = _ref3$locale === void 0 ? null : _ref3$locale, _ref3$numberingSystem = _ref3.numberingSystem, numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem, _ref3$locObj = _ref3.locObj, locObj = _ref3$locObj === void 0 ? null : _ref3$locObj;
          return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length);
        };
        Info2.weekdaysFormat = function weekdaysFormat(length, _temp4) {
          if (length === void 0) {
            length = "long";
          }
          var _ref4 = _temp4 === void 0 ? {} : _temp4, _ref4$locale = _ref4.locale, locale = _ref4$locale === void 0 ? null : _ref4$locale, _ref4$numberingSystem = _ref4.numberingSystem, numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem, _ref4$locObj = _ref4.locObj, locObj = _ref4$locObj === void 0 ? null : _ref4$locObj;
          return (locObj || Locale.create(locale, numberingSystem, null)).weekdays(length, true);
        };
        Info2.meridiems = function meridiems2(_temp5) {
          var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$locale = _ref5.locale, locale = _ref5$locale === void 0 ? null : _ref5$locale;
          return Locale.create(locale).meridiems();
        };
        Info2.eras = function eras2(length, _temp6) {
          if (length === void 0) {
            length = "short";
          }
          var _ref6 = _temp6 === void 0 ? {} : _temp6, _ref6$locale = _ref6.locale, locale = _ref6$locale === void 0 ? null : _ref6$locale;
          return Locale.create(locale, null, "gregory").eras(length);
        };
        Info2.features = function features() {
          return {
            relative: hasRelative()
          };
        };
        return Info2;
      }();
      function dayDiff(earlier, later) {
        var utcDayStart = function utcDayStart2(dt) {
          return dt.toUTC(0, {
            keepLocalTime: true
          }).startOf("day").valueOf();
        }, ms = utcDayStart(later) - utcDayStart(earlier);
        return Math.floor(Duration.fromMillis(ms).as("days"));
      }
      function highOrderDiffs(cursor, later, units) {
        var differs = [["years", function(a2, b2) {
          return b2.year - a2.year;
        }], ["quarters", function(a2, b2) {
          return b2.quarter - a2.quarter;
        }], ["months", function(a2, b2) {
          return b2.month - a2.month + (b2.year - a2.year) * 12;
        }], ["weeks", function(a2, b2) {
          var days = dayDiff(a2, b2);
          return (days - days % 7) / 7;
        }], ["days", dayDiff]];
        var results = {};
        var lowestOrder, highWater;
        for (var _i = 0, _differs = differs; _i < _differs.length; _i++) {
          var _differs$_i = _differs[_i], unit = _differs$_i[0], differ = _differs$_i[1];
          if (units.indexOf(unit) >= 0) {
            var _cursor$plus;
            lowestOrder = unit;
            var delta = differ(cursor, later);
            highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));
            if (highWater > later) {
              var _cursor$plus2;
              cursor = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[unit] = delta - 1, _cursor$plus2));
              delta -= 1;
            } else {
              cursor = highWater;
            }
            results[unit] = delta;
          }
        }
        return [cursor, results, highWater, lowestOrder];
      }
      function _diff(earlier, later, units, opts) {
        var _highOrderDiffs = highOrderDiffs(earlier, later, units), cursor = _highOrderDiffs[0], results = _highOrderDiffs[1], highWater = _highOrderDiffs[2], lowestOrder = _highOrderDiffs[3];
        var remainingMillis = later - cursor;
        var lowerOrderUnits = units.filter(function(u2) {
          return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u2) >= 0;
        });
        if (lowerOrderUnits.length === 0) {
          if (highWater < later) {
            var _cursor$plus3;
            highWater = cursor.plus((_cursor$plus3 = {}, _cursor$plus3[lowestOrder] = 1, _cursor$plus3));
          }
          if (highWater !== cursor) {
            results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
          }
        }
        var duration = Duration.fromObject(results, opts);
        if (lowerOrderUnits.length > 0) {
          var _Duration$fromMillis;
          return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
        } else {
          return duration;
        }
      }
      var numberingSystems = {
        arab: "[\u0660-\u0669]",
        arabext: "[\u06F0-\u06F9]",
        bali: "[\u1B50-\u1B59]",
        beng: "[\u09E6-\u09EF]",
        deva: "[\u0966-\u096F]",
        fullwide: "[\uFF10-\uFF19]",
        gujr: "[\u0AE6-\u0AEF]",
        hanidec: "[\u3007|\u4E00|\u4E8C|\u4E09|\u56DB|\u4E94|\u516D|\u4E03|\u516B|\u4E5D]",
        khmr: "[\u17E0-\u17E9]",
        knda: "[\u0CE6-\u0CEF]",
        laoo: "[\u0ED0-\u0ED9]",
        limb: "[\u1946-\u194F]",
        mlym: "[\u0D66-\u0D6F]",
        mong: "[\u1810-\u1819]",
        mymr: "[\u1040-\u1049]",
        orya: "[\u0B66-\u0B6F]",
        tamldec: "[\u0BE6-\u0BEF]",
        telu: "[\u0C66-\u0C6F]",
        thai: "[\u0E50-\u0E59]",
        tibt: "[\u0F20-\u0F29]",
        latn: "\\d"
      };
      var numberingSystemsUTF16 = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881]
      };
      var hanidecChars = numberingSystems.hanidec.replace(/[\[|\]]/g, "").split("");
      function parseDigits(str) {
        var value = parseInt(str, 10);
        if (isNaN(value)) {
          value = "";
          for (var i3 = 0; i3 < str.length; i3++) {
            var code = str.charCodeAt(i3);
            if (str[i3].search(numberingSystems.hanidec) !== -1) {
              value += hanidecChars.indexOf(str[i3]);
            } else {
              for (var key in numberingSystemsUTF16) {
                var _numberingSystemsUTF = numberingSystemsUTF16[key], min = _numberingSystemsUTF[0], max = _numberingSystemsUTF[1];
                if (code >= min && code <= max) {
                  value += code - min;
                }
              }
            }
          }
          return parseInt(value, 10);
        } else {
          return value;
        }
      }
      function digitRegex(_ref, append) {
        var numberingSystem = _ref.numberingSystem;
        if (append === void 0) {
          append = "";
        }
        return new RegExp("" + numberingSystems[numberingSystem || "latn"] + append);
      }
      var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";
      function intUnit(regex, post) {
        if (post === void 0) {
          post = function post2(i3) {
            return i3;
          };
        }
        return {
          regex,
          deser: function deser(_ref) {
            var s6 = _ref[0];
            return post(parseDigits(s6));
          }
        };
      }
      var NBSP = String.fromCharCode(160);
      var spaceOrNBSP = "( |" + NBSP + ")";
      var spaceOrNBSPRegExp = new RegExp(spaceOrNBSP, "g");
      function fixListRegex(s6) {
        return s6.replace(/\./g, "\\.?").replace(spaceOrNBSPRegExp, spaceOrNBSP);
      }
      function stripInsensitivities(s6) {
        return s6.replace(/\./g, "").replace(spaceOrNBSPRegExp, " ").toLowerCase();
      }
      function oneOf(strings, startIndex) {
        if (strings === null) {
          return null;
        } else {
          return {
            regex: RegExp(strings.map(fixListRegex).join("|")),
            deser: function deser(_ref2) {
              var s6 = _ref2[0];
              return strings.findIndex(function(i3) {
                return stripInsensitivities(s6) === stripInsensitivities(i3);
              }) + startIndex;
            }
          };
        }
      }
      function offset(regex, groups) {
        return {
          regex,
          deser: function deser(_ref3) {
            var h3 = _ref3[1], m2 = _ref3[2];
            return signedOffset(h3, m2);
          },
          groups
        };
      }
      function simple(regex) {
        return {
          regex,
          deser: function deser(_ref4) {
            var s6 = _ref4[0];
            return s6;
          }
        };
      }
      function escapeToken(value) {
        return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
      }
      function unitForToken(token, loc) {
        var one = digitRegex(loc), two = digitRegex(loc, "{2}"), three = digitRegex(loc, "{3}"), four = digitRegex(loc, "{4}"), six = digitRegex(loc, "{6}"), oneOrTwo = digitRegex(loc, "{1,2}"), oneToThree = digitRegex(loc, "{1,3}"), oneToSix = digitRegex(loc, "{1,6}"), oneToNine = digitRegex(loc, "{1,9}"), twoToFour = digitRegex(loc, "{2,4}"), fourToSix = digitRegex(loc, "{4,6}"), literal2 = function literal3(t3) {
          return {
            regex: RegExp(escapeToken(t3.val)),
            deser: function deser(_ref5) {
              var s6 = _ref5[0];
              return s6;
            },
            literal: true
          };
        }, unitate = function unitate2(t3) {
          if (token.literal) {
            return literal2(t3);
          }
          switch (t3.val) {
            case "G":
              return oneOf(loc.eras("short", false), 0);
            case "GG":
              return oneOf(loc.eras("long", false), 0);
            case "y":
              return intUnit(oneToSix);
            case "yy":
              return intUnit(twoToFour, untruncateYear);
            case "yyyy":
              return intUnit(four);
            case "yyyyy":
              return intUnit(fourToSix);
            case "yyyyyy":
              return intUnit(six);
            case "M":
              return intUnit(oneOrTwo);
            case "MM":
              return intUnit(two);
            case "MMM":
              return oneOf(loc.months("short", true, false), 1);
            case "MMMM":
              return oneOf(loc.months("long", true, false), 1);
            case "L":
              return intUnit(oneOrTwo);
            case "LL":
              return intUnit(two);
            case "LLL":
              return oneOf(loc.months("short", false, false), 1);
            case "LLLL":
              return oneOf(loc.months("long", false, false), 1);
            case "d":
              return intUnit(oneOrTwo);
            case "dd":
              return intUnit(two);
            case "o":
              return intUnit(oneToThree);
            case "ooo":
              return intUnit(three);
            case "HH":
              return intUnit(two);
            case "H":
              return intUnit(oneOrTwo);
            case "hh":
              return intUnit(two);
            case "h":
              return intUnit(oneOrTwo);
            case "mm":
              return intUnit(two);
            case "m":
              return intUnit(oneOrTwo);
            case "q":
              return intUnit(oneOrTwo);
            case "qq":
              return intUnit(two);
            case "s":
              return intUnit(oneOrTwo);
            case "ss":
              return intUnit(two);
            case "S":
              return intUnit(oneToThree);
            case "SSS":
              return intUnit(three);
            case "u":
              return simple(oneToNine);
            case "uu":
              return simple(oneOrTwo);
            case "uuu":
              return intUnit(one);
            case "a":
              return oneOf(loc.meridiems(), 0);
            case "kkkk":
              return intUnit(four);
            case "kk":
              return intUnit(twoToFour, untruncateYear);
            case "W":
              return intUnit(oneOrTwo);
            case "WW":
              return intUnit(two);
            case "E":
            case "c":
              return intUnit(one);
            case "EEE":
              return oneOf(loc.weekdays("short", false, false), 1);
            case "EEEE":
              return oneOf(loc.weekdays("long", false, false), 1);
            case "ccc":
              return oneOf(loc.weekdays("short", true, false), 1);
            case "cccc":
              return oneOf(loc.weekdays("long", true, false), 1);
            case "Z":
            case "ZZ":
              return offset(new RegExp("([+-]" + oneOrTwo.source + ")(?::(" + two.source + "))?"), 2);
            case "ZZZ":
              return offset(new RegExp("([+-]" + oneOrTwo.source + ")(" + two.source + ")?"), 2);
            case "z":
              return simple(/[a-z_+-/]{1,256}?/i);
            default:
              return literal2(t3);
          }
        };
        var unit = unitate(token) || {
          invalidReason: MISSING_FTP
        };
        unit.token = token;
        return unit;
      }
      var partTypeStyleToTokenVal = {
        year: {
          "2-digit": "yy",
          numeric: "yyyyy"
        },
        month: {
          numeric: "M",
          "2-digit": "MM",
          short: "MMM",
          long: "MMMM"
        },
        day: {
          numeric: "d",
          "2-digit": "dd"
        },
        weekday: {
          short: "EEE",
          long: "EEEE"
        },
        dayperiod: "a",
        dayPeriod: "a",
        hour: {
          numeric: "h",
          "2-digit": "hh"
        },
        minute: {
          numeric: "m",
          "2-digit": "mm"
        },
        second: {
          numeric: "s",
          "2-digit": "ss"
        }
      };
      function tokenForPart(part, locale, formatOpts) {
        var type = part.type, value = part.value;
        if (type === "literal") {
          return {
            literal: true,
            val: value
          };
        }
        var style = formatOpts[type];
        var val = partTypeStyleToTokenVal[type];
        if (typeof val === "object") {
          val = val[style];
        }
        if (val) {
          return {
            literal: false,
            val
          };
        }
        return void 0;
      }
      function buildRegex(units) {
        var re = units.map(function(u2) {
          return u2.regex;
        }).reduce(function(f2, r4) {
          return f2 + "(" + r4.source + ")";
        }, "");
        return ["^" + re + "$", units];
      }
      function match(input2, regex, handlers) {
        var matches = input2.match(regex);
        if (matches) {
          var all = {};
          var matchIndex = 1;
          for (var i3 in handlers) {
            if (hasOwnProperty(handlers, i3)) {
              var h3 = handlers[i3], groups = h3.groups ? h3.groups + 1 : 1;
              if (!h3.literal && h3.token) {
                all[h3.token.val[0]] = h3.deser(matches.slice(matchIndex, matchIndex + groups));
              }
              matchIndex += groups;
            }
          }
          return [matches, all];
        } else {
          return [matches, {}];
        }
      }
      function dateTimeFromMatches(matches) {
        var toField = function toField2(token) {
          switch (token) {
            case "S":
              return "millisecond";
            case "s":
              return "second";
            case "m":
              return "minute";
            case "h":
            case "H":
              return "hour";
            case "d":
              return "day";
            case "o":
              return "ordinal";
            case "L":
            case "M":
              return "month";
            case "y":
              return "year";
            case "E":
            case "c":
              return "weekday";
            case "W":
              return "weekNumber";
            case "k":
              return "weekYear";
            case "q":
              return "quarter";
            default:
              return null;
          }
        };
        var zone;
        if (!isUndefined(matches.Z)) {
          zone = new FixedOffsetZone(matches.Z);
        } else if (!isUndefined(matches.z)) {
          zone = IANAZone.create(matches.z);
        } else {
          zone = null;
        }
        if (!isUndefined(matches.q)) {
          matches.M = (matches.q - 1) * 3 + 1;
        }
        if (!isUndefined(matches.h)) {
          if (matches.h < 12 && matches.a === 1) {
            matches.h += 12;
          } else if (matches.h === 12 && matches.a === 0) {
            matches.h = 0;
          }
        }
        if (matches.G === 0 && matches.y) {
          matches.y = -matches.y;
        }
        if (!isUndefined(matches.u)) {
          matches.S = parseMillis(matches.u);
        }
        var vals = Object.keys(matches).reduce(function(r4, k2) {
          var f2 = toField(k2);
          if (f2) {
            r4[f2] = matches[k2];
          }
          return r4;
        }, {});
        return [vals, zone];
      }
      var dummyDateTimeCache = null;
      function getDummyDateTime() {
        if (!dummyDateTimeCache) {
          dummyDateTimeCache = DateTime2.fromMillis(1555555555555);
        }
        return dummyDateTimeCache;
      }
      function maybeExpandMacroToken(token, locale) {
        if (token.literal) {
          return token;
        }
        var formatOpts = Formatter.macroTokenToFormatOpts(token.val);
        if (!formatOpts) {
          return token;
        }
        var formatter = Formatter.create(locale, formatOpts);
        var parts = formatter.formatDateTimeParts(getDummyDateTime());
        var tokens = parts.map(function(p2) {
          return tokenForPart(p2, locale, formatOpts);
        });
        if (tokens.includes(void 0)) {
          return token;
        }
        return tokens;
      }
      function expandMacroTokens(tokens, locale) {
        var _Array$prototype;
        return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, tokens.map(function(t3) {
          return maybeExpandMacroToken(t3, locale);
        }));
      }
      function explainFromTokens(locale, input2, format) {
        var tokens = expandMacroTokens(Formatter.parseFormat(format), locale), units = tokens.map(function(t3) {
          return unitForToken(t3, locale);
        }), disqualifyingUnit = units.find(function(t3) {
          return t3.invalidReason;
        });
        if (disqualifyingUnit) {
          return {
            input: input2,
            tokens,
            invalidReason: disqualifyingUnit.invalidReason
          };
        } else {
          var _buildRegex = buildRegex(units), regexString = _buildRegex[0], handlers = _buildRegex[1], regex = RegExp(regexString, "i"), _match = match(input2, regex, handlers), rawMatches = _match[0], matches = _match[1], _ref6 = matches ? dateTimeFromMatches(matches) : [null, null], result = _ref6[0], zone = _ref6[1];
          if (hasOwnProperty(matches, "a") && hasOwnProperty(matches, "H")) {
            throw new ConflictingSpecificationError("Can't include meridiem when specifying 24-hour format");
          }
          return {
            input: input2,
            tokens,
            regex,
            rawMatches,
            matches,
            result,
            zone
          };
        }
      }
      function parseFromTokens(locale, input2, format) {
        var _explainFromTokens = explainFromTokens(locale, input2, format), result = _explainFromTokens.result, zone = _explainFromTokens.zone, invalidReason = _explainFromTokens.invalidReason;
        return [result, zone, invalidReason];
      }
      var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      var leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
      function unitOutOfRange(unit, value) {
        return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
      }
      function dayOfWeek(year, month, day) {
        var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
        return js === 0 ? 7 : js;
      }
      function computeOrdinal(year, month, day) {
        return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
      }
      function uncomputeOrdinal(year, ordinal) {
        var table2 = isLeapYear(year) ? leapLadder : nonLeapLadder, month0 = table2.findIndex(function(i3) {
          return i3 < ordinal;
        }), day = ordinal - table2[month0];
        return {
          month: month0 + 1,
          day
        };
      }
      function gregorianToWeek(gregObj) {
        var year = gregObj.year, month = gregObj.month, day = gregObj.day, ordinal = computeOrdinal(year, month, day), weekday = dayOfWeek(year, month, day);
        var weekNumber = Math.floor((ordinal - weekday + 10) / 7), weekYear;
        if (weekNumber < 1) {
          weekYear = year - 1;
          weekNumber = weeksInWeekYear(weekYear);
        } else if (weekNumber > weeksInWeekYear(year)) {
          weekYear = year + 1;
          weekNumber = 1;
        } else {
          weekYear = year;
        }
        return _extends2({
          weekYear,
          weekNumber,
          weekday
        }, timeObject(gregObj));
      }
      function weekToGregorian(weekData) {
        var weekYear = weekData.weekYear, weekNumber = weekData.weekNumber, weekday = weekData.weekday, weekdayOfJan4 = dayOfWeek(weekYear, 1, 4), yearInDays = daysInYear(weekYear);
        var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3, year;
        if (ordinal < 1) {
          year = weekYear - 1;
          ordinal += daysInYear(year);
        } else if (ordinal > yearInDays) {
          year = weekYear + 1;
          ordinal -= daysInYear(weekYear);
        } else {
          year = weekYear;
        }
        var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal.month, day = _uncomputeOrdinal.day;
        return _extends2({
          year,
          month,
          day
        }, timeObject(weekData));
      }
      function gregorianToOrdinal(gregData) {
        var year = gregData.year, month = gregData.month, day = gregData.day;
        var ordinal = computeOrdinal(year, month, day);
        return _extends2({
          year,
          ordinal
        }, timeObject(gregData));
      }
      function ordinalToGregorian(ordinalData) {
        var year = ordinalData.year, ordinal = ordinalData.ordinal;
        var _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal), month = _uncomputeOrdinal2.month, day = _uncomputeOrdinal2.day;
        return _extends2({
          year,
          month,
          day
        }, timeObject(ordinalData));
      }
      function hasInvalidWeekData(obj) {
        var validYear = isInteger2(obj.weekYear), validWeek = integerBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)), validWeekday = integerBetween(obj.weekday, 1, 7);
        if (!validYear) {
          return unitOutOfRange("weekYear", obj.weekYear);
        } else if (!validWeek) {
          return unitOutOfRange("week", obj.week);
        } else if (!validWeekday) {
          return unitOutOfRange("weekday", obj.weekday);
        } else
          return false;
      }
      function hasInvalidOrdinalData(obj) {
        var validYear = isInteger2(obj.year), validOrdinal = integerBetween(obj.ordinal, 1, daysInYear(obj.year));
        if (!validYear) {
          return unitOutOfRange("year", obj.year);
        } else if (!validOrdinal) {
          return unitOutOfRange("ordinal", obj.ordinal);
        } else
          return false;
      }
      function hasInvalidGregorianData(obj) {
        var validYear = isInteger2(obj.year), validMonth = integerBetween(obj.month, 1, 12), validDay = integerBetween(obj.day, 1, daysInMonth(obj.year, obj.month));
        if (!validYear) {
          return unitOutOfRange("year", obj.year);
        } else if (!validMonth) {
          return unitOutOfRange("month", obj.month);
        } else if (!validDay) {
          return unitOutOfRange("day", obj.day);
        } else
          return false;
      }
      function hasInvalidTimeData(obj) {
        var hour = obj.hour, minute = obj.minute, second = obj.second, millisecond = obj.millisecond;
        var validHour = integerBetween(hour, 0, 23) || hour === 24 && minute === 0 && second === 0 && millisecond === 0, validMinute = integerBetween(minute, 0, 59), validSecond = integerBetween(second, 0, 59), validMillisecond = integerBetween(millisecond, 0, 999);
        if (!validHour) {
          return unitOutOfRange("hour", hour);
        } else if (!validMinute) {
          return unitOutOfRange("minute", minute);
        } else if (!validSecond) {
          return unitOutOfRange("second", second);
        } else if (!validMillisecond) {
          return unitOutOfRange("millisecond", millisecond);
        } else
          return false;
      }
      var INVALID = "Invalid DateTime";
      var MAX_DATE = 864e13;
      function unsupportedZone(zone) {
        return new Invalid("unsupported zone", 'the zone "' + zone.name + '" is not supported');
      }
      function possiblyCachedWeekData(dt) {
        if (dt.weekData === null) {
          dt.weekData = gregorianToWeek(dt.c);
        }
        return dt.weekData;
      }
      function clone(inst, alts) {
        var current = {
          ts: inst.ts,
          zone: inst.zone,
          c: inst.c,
          o: inst.o,
          loc: inst.loc,
          invalid: inst.invalid
        };
        return new DateTime2(_extends2({}, current, alts, {
          old: current
        }));
      }
      function fixOffset(localTS, o6, tz) {
        var utcGuess = localTS - o6 * 60 * 1e3;
        var o22 = tz.offset(utcGuess);
        if (o6 === o22) {
          return [utcGuess, o6];
        }
        utcGuess -= (o22 - o6) * 60 * 1e3;
        var o32 = tz.offset(utcGuess);
        if (o22 === o32) {
          return [utcGuess, o22];
        }
        return [localTS - Math.min(o22, o32) * 60 * 1e3, Math.max(o22, o32)];
      }
      function tsToObj(ts, offset2) {
        ts += offset2 * 60 * 1e3;
        var d2 = new Date(ts);
        return {
          year: d2.getUTCFullYear(),
          month: d2.getUTCMonth() + 1,
          day: d2.getUTCDate(),
          hour: d2.getUTCHours(),
          minute: d2.getUTCMinutes(),
          second: d2.getUTCSeconds(),
          millisecond: d2.getUTCMilliseconds()
        };
      }
      function objToTS(obj, offset2, zone) {
        return fixOffset(objToLocalTS(obj), offset2, zone);
      }
      function adjustTime(inst, dur) {
        var oPre = inst.o, year = inst.c.year + Math.trunc(dur.years), month = inst.c.month + Math.trunc(dur.months) + Math.trunc(dur.quarters) * 3, c2 = _extends2({}, inst.c, {
          year,
          month,
          day: Math.min(inst.c.day, daysInMonth(year, month)) + Math.trunc(dur.days) + Math.trunc(dur.weeks) * 7
        }), millisToAdd = Duration.fromObject({
          years: dur.years - Math.trunc(dur.years),
          quarters: dur.quarters - Math.trunc(dur.quarters),
          months: dur.months - Math.trunc(dur.months),
          weeks: dur.weeks - Math.trunc(dur.weeks),
          days: dur.days - Math.trunc(dur.days),
          hours: dur.hours,
          minutes: dur.minutes,
          seconds: dur.seconds,
          milliseconds: dur.milliseconds
        }).as("milliseconds"), localTS = objToLocalTS(c2);
        var _fixOffset = fixOffset(localTS, oPre, inst.zone), ts = _fixOffset[0], o6 = _fixOffset[1];
        if (millisToAdd !== 0) {
          ts += millisToAdd;
          o6 = inst.zone.offset(ts);
        }
        return {
          ts,
          o: o6
        };
      }
      function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
        var setZone = opts.setZone, zone = opts.zone;
        if (parsed && Object.keys(parsed).length !== 0) {
          var interpretationZone = parsedZone || zone, inst = DateTime2.fromObject(parsed, _extends2({}, opts, {
            zone: interpretationZone
          }));
          return setZone ? inst : inst.setZone(zone);
        } else {
          return DateTime2.invalid(new Invalid("unparsable", 'the input "' + text + `" can't be parsed as ` + format));
        }
      }
      function toTechFormat(dt, format, allowZ) {
        if (allowZ === void 0) {
          allowZ = true;
        }
        return dt.isValid ? Formatter.create(Locale.create("en-US"), {
          allowZ,
          forceSimple: true
        }).formatDateTimeFromString(dt, format) : null;
      }
      function toTechTimeFormat(dt, _ref) {
        var _ref$suppressSeconds = _ref.suppressSeconds, suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds, _ref$suppressMillisec = _ref.suppressMilliseconds, suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec, includeOffset = _ref.includeOffset, _ref$includePrefix = _ref.includePrefix, includePrefix = _ref$includePrefix === void 0 ? false : _ref$includePrefix, _ref$includeZone = _ref.includeZone, includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone, _ref$spaceZone = _ref.spaceZone, spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone, _ref$format = _ref.format, format = _ref$format === void 0 ? "extended" : _ref$format;
        var fmt = format === "basic" ? "HHmm" : "HH:mm";
        if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
          fmt += format === "basic" ? "ss" : ":ss";
          if (!suppressMilliseconds || dt.millisecond !== 0) {
            fmt += ".SSS";
          }
        }
        if ((includeZone || includeOffset) && spaceZone) {
          fmt += " ";
        }
        if (includeZone) {
          fmt += "z";
        } else if (includeOffset) {
          fmt += format === "basic" ? "ZZZ" : "ZZ";
        }
        var str = toTechFormat(dt, fmt);
        if (includePrefix) {
          str = "T" + str;
        }
        return str;
      }
      var defaultUnitValues = {
        month: 1,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var defaultWeekUnitValues = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var defaultOrdinalUnitValues = {
        ordinal: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0
      };
      var orderedUnits = ["year", "month", "day", "hour", "minute", "second", "millisecond"];
      var orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"];
      var orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
      function normalizeUnit(unit) {
        var normalized = {
          year: "year",
          years: "year",
          month: "month",
          months: "month",
          day: "day",
          days: "day",
          hour: "hour",
          hours: "hour",
          minute: "minute",
          minutes: "minute",
          quarter: "quarter",
          quarters: "quarter",
          second: "second",
          seconds: "second",
          millisecond: "millisecond",
          milliseconds: "millisecond",
          weekday: "weekday",
          weekdays: "weekday",
          weeknumber: "weekNumber",
          weeksnumber: "weekNumber",
          weeknumbers: "weekNumber",
          weekyear: "weekYear",
          weekyears: "weekYear",
          ordinal: "ordinal"
        }[unit.toLowerCase()];
        if (!normalized)
          throw new InvalidUnitError(unit);
        return normalized;
      }
      function quickDT(obj, opts) {
        var zone = normalizeZone(opts.zone, Settings.defaultZone), loc = Locale.fromObject(opts), tsNow = Settings.now();
        var ts, o6;
        if (!isUndefined(obj.year)) {
          for (var _iterator = _createForOfIteratorHelperLoose2(orderedUnits), _step; !(_step = _iterator()).done; ) {
            var u2 = _step.value;
            if (isUndefined(obj[u2])) {
              obj[u2] = defaultUnitValues[u2];
            }
          }
          var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
          if (invalid) {
            return DateTime2.invalid(invalid);
          }
          var offsetProvis = zone.offset(tsNow);
          var _objToTS = objToTS(obj, offsetProvis, zone);
          ts = _objToTS[0];
          o6 = _objToTS[1];
        } else {
          ts = tsNow;
        }
        return new DateTime2({
          ts,
          zone,
          loc,
          o: o6
        });
      }
      function diffRelative(start, end, opts) {
        var round = isUndefined(opts.round) ? true : opts.round, format = function format2(c2, unit2) {
          c2 = roundTo(c2, round || opts.calendary ? 0 : 2, true);
          var formatter = end.loc.clone(opts).relFormatter(opts);
          return formatter.format(c2, unit2);
        }, differ = function differ2(unit2) {
          if (opts.calendary) {
            if (!end.hasSame(start, unit2)) {
              return end.startOf(unit2).diff(start.startOf(unit2), unit2).get(unit2);
            } else
              return 0;
          } else {
            return end.diff(start, unit2).get(unit2);
          }
        };
        if (opts.unit) {
          return format(differ(opts.unit), opts.unit);
        }
        for (var _iterator2 = _createForOfIteratorHelperLoose2(opts.units), _step2; !(_step2 = _iterator2()).done; ) {
          var unit = _step2.value;
          var count = differ(unit);
          if (Math.abs(count) >= 1) {
            return format(count, unit);
          }
        }
        return format(start > end ? -0 : 0, opts.units[opts.units.length - 1]);
      }
      function lastOpts(argList) {
        var opts = {}, args;
        if (argList.length > 0 && typeof argList[argList.length - 1] === "object") {
          opts = argList[argList.length - 1];
          args = Array.from(argList).slice(0, argList.length - 1);
        } else {
          args = Array.from(argList);
        }
        return [opts, args];
      }
      var DateTime2 = /* @__PURE__ */ function() {
        function DateTime3(config) {
          var zone = config.zone || Settings.defaultZone;
          var invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
          this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
          var c2 = null, o6 = null;
          if (!invalid) {
            var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
            if (unchanged) {
              var _ref2 = [config.old.c, config.old.o];
              c2 = _ref2[0];
              o6 = _ref2[1];
            } else {
              var ot = zone.offset(this.ts);
              c2 = tsToObj(this.ts, ot);
              invalid = Number.isNaN(c2.year) ? new Invalid("invalid input") : null;
              c2 = invalid ? null : c2;
              o6 = invalid ? null : ot;
            }
          }
          this._zone = zone;
          this.loc = config.loc || Locale.create();
          this.invalid = invalid;
          this.weekData = null;
          this.c = c2;
          this.o = o6;
          this.isLuxonDateTime = true;
        }
        DateTime3.now = function now2() {
          return new DateTime3({});
        };
        DateTime3.local = function local() {
          var _lastOpts = lastOpts(arguments), opts = _lastOpts[0], args = _lastOpts[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
          return quickDT({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
          }, opts);
        };
        DateTime3.utc = function utc() {
          var _lastOpts2 = lastOpts(arguments), opts = _lastOpts2[0], args = _lastOpts2[1], year = args[0], month = args[1], day = args[2], hour = args[3], minute = args[4], second = args[5], millisecond = args[6];
          opts.zone = FixedOffsetZone.utcInstance;
          return quickDT({
            year,
            month,
            day,
            hour,
            minute,
            second,
            millisecond
          }, opts);
        };
        DateTime3.fromJSDate = function fromJSDate(date, options) {
          if (options === void 0) {
            options = {};
          }
          var ts = isDate(date) ? date.valueOf() : NaN;
          if (Number.isNaN(ts)) {
            return DateTime3.invalid("invalid input");
          }
          var zoneToUse = normalizeZone(options.zone, Settings.defaultZone);
          if (!zoneToUse.isValid) {
            return DateTime3.invalid(unsupportedZone(zoneToUse));
          }
          return new DateTime3({
            ts,
            zone: zoneToUse,
            loc: Locale.fromObject(options)
          });
        };
        DateTime3.fromMillis = function fromMillis(milliseconds, options) {
          if (options === void 0) {
            options = {};
          }
          if (!isNumber2(milliseconds)) {
            throw new InvalidArgumentError("fromMillis requires a numerical input, but received a " + typeof milliseconds + " with value " + milliseconds);
          } else if (milliseconds < -MAX_DATE || milliseconds > MAX_DATE) {
            return DateTime3.invalid("Timestamp out of range");
          } else {
            return new DateTime3({
              ts: milliseconds,
              zone: normalizeZone(options.zone, Settings.defaultZone),
              loc: Locale.fromObject(options)
            });
          }
        };
        DateTime3.fromSeconds = function fromSeconds(seconds, options) {
          if (options === void 0) {
            options = {};
          }
          if (!isNumber2(seconds)) {
            throw new InvalidArgumentError("fromSeconds requires a numerical input");
          } else {
            return new DateTime3({
              ts: seconds * 1e3,
              zone: normalizeZone(options.zone, Settings.defaultZone),
              loc: Locale.fromObject(options)
            });
          }
        };
        DateTime3.fromObject = function fromObject(obj, opts) {
          if (opts === void 0) {
            opts = {};
          }
          obj = obj || {};
          var zoneToUse = normalizeZone(opts.zone, Settings.defaultZone);
          if (!zoneToUse.isValid) {
            return DateTime3.invalid(unsupportedZone(zoneToUse));
          }
          var tsNow = Settings.now(), offsetProvis = zoneToUse.offset(tsNow), normalized = normalizeObject(obj, normalizeUnit), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber, loc = Locale.fromObject(opts);
          if ((containsGregor || containsOrdinal) && definiteWeekDef) {
            throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          }
          if (containsGregorMD && containsOrdinal) {
            throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
          }
          var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;
          var units, defaultValues, objNow = tsToObj(tsNow, offsetProvis);
          if (useWeekData) {
            units = orderedWeekUnits;
            defaultValues = defaultWeekUnitValues;
            objNow = gregorianToWeek(objNow);
          } else if (containsOrdinal) {
            units = orderedOrdinalUnits;
            defaultValues = defaultOrdinalUnitValues;
            objNow = gregorianToOrdinal(objNow);
          } else {
            units = orderedUnits;
            defaultValues = defaultUnitValues;
          }
          var foundFirst = false;
          for (var _iterator3 = _createForOfIteratorHelperLoose2(units), _step3; !(_step3 = _iterator3()).done; ) {
            var u2 = _step3.value;
            var v2 = normalized[u2];
            if (!isUndefined(v2)) {
              foundFirst = true;
            } else if (foundFirst) {
              normalized[u2] = defaultValues[u2];
            } else {
              normalized[u2] = objNow[u2];
            }
          }
          var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized), invalid = higherOrderInvalid || hasInvalidTimeData(normalized);
          if (invalid) {
            return DateTime3.invalid(invalid);
          }
          var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized, _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse), tsFinal = _objToTS2[0], offsetFinal = _objToTS2[1], inst = new DateTime3({
            ts: tsFinal,
            zone: zoneToUse,
            o: offsetFinal,
            loc
          });
          if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
            return DateTime3.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
          }
          return inst;
        };
        DateTime3.fromISO = function fromISO(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseISODate = parseISODate(text), vals = _parseISODate[0], parsedZone = _parseISODate[1];
          return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
        };
        DateTime3.fromRFC2822 = function fromRFC2822(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseRFC2822Date = parseRFC2822Date(text), vals = _parseRFC2822Date[0], parsedZone = _parseRFC2822Date[1];
          return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
        };
        DateTime3.fromHTTP = function fromHTTP(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseHTTPDate = parseHTTPDate(text), vals = _parseHTTPDate[0], parsedZone = _parseHTTPDate[1];
          return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
        };
        DateTime3.fromFormat = function fromFormat(text, fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (isUndefined(text) || isUndefined(fmt)) {
            throw new InvalidArgumentError("fromFormat requires an input string and a format");
          }
          var _opts = opts, _opts$locale = _opts.locale, locale = _opts$locale === void 0 ? null : _opts$locale, _opts$numberingSystem = _opts.numberingSystem, numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
          }), _parseFromTokens = parseFromTokens(localeToUse, text, fmt), vals = _parseFromTokens[0], parsedZone = _parseFromTokens[1], invalid = _parseFromTokens[2];
          if (invalid) {
            return DateTime3.invalid(invalid);
          } else {
            return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
          }
        };
        DateTime3.fromString = function fromString(text, fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return DateTime3.fromFormat(text, fmt, opts);
        };
        DateTime3.fromSQL = function fromSQL(text, opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _parseSQL = parseSQL(text), vals = _parseSQL[0], parsedZone = _parseSQL[1];
          return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
        };
        DateTime3.invalid = function invalid(reason, explanation) {
          if (explanation === void 0) {
            explanation = null;
          }
          if (!reason) {
            throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
          }
          var invalid2 = reason instanceof Invalid ? reason : new Invalid(reason, explanation);
          if (Settings.throwOnInvalid) {
            throw new InvalidDateTimeError(invalid2);
          } else {
            return new DateTime3({
              invalid: invalid2
            });
          }
        };
        DateTime3.isDateTime = function isDateTime(o6) {
          return o6 && o6.isLuxonDateTime || false;
        };
        var _proto = DateTime3.prototype;
        _proto.get = function get3(unit) {
          return this[unit];
        };
        _proto.resolvedLocaleOptions = function resolvedLocaleOptions(opts) {
          if (opts === void 0) {
            opts = {};
          }
          var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this), locale = _Formatter$create$res.locale, numberingSystem = _Formatter$create$res.numberingSystem, calendar = _Formatter$create$res.calendar;
          return {
            locale,
            numberingSystem,
            outputCalendar: calendar
          };
        };
        _proto.toUTC = function toUTC(offset2, opts) {
          if (offset2 === void 0) {
            offset2 = 0;
          }
          if (opts === void 0) {
            opts = {};
          }
          return this.setZone(FixedOffsetZone.instance(offset2), opts);
        };
        _proto.toLocal = function toLocal() {
          return this.setZone(Settings.defaultZone);
        };
        _proto.setZone = function setZone(zone, _temp) {
          var _ref3 = _temp === void 0 ? {} : _temp, _ref3$keepLocalTime = _ref3.keepLocalTime, keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime, _ref3$keepCalendarTim = _ref3.keepCalendarTime, keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;
          zone = normalizeZone(zone, Settings.defaultZone);
          if (zone.equals(this.zone)) {
            return this;
          } else if (!zone.isValid) {
            return DateTime3.invalid(unsupportedZone(zone));
          } else {
            var newTS = this.ts;
            if (keepLocalTime || keepCalendarTime) {
              var offsetGuess = zone.offset(this.ts);
              var asObj = this.toObject();
              var _objToTS3 = objToTS(asObj, offsetGuess, zone);
              newTS = _objToTS3[0];
            }
            return clone(this, {
              ts: newTS,
              zone
            });
          }
        };
        _proto.reconfigure = function reconfigure(_temp2) {
          var _ref4 = _temp2 === void 0 ? {} : _temp2, locale = _ref4.locale, numberingSystem = _ref4.numberingSystem, outputCalendar = _ref4.outputCalendar;
          var loc = this.loc.clone({
            locale,
            numberingSystem,
            outputCalendar
          });
          return clone(this, {
            loc
          });
        };
        _proto.setLocale = function setLocale(locale) {
          return this.reconfigure({
            locale
          });
        };
        _proto.set = function set5(values2) {
          if (!this.isValid)
            return this;
          var normalized = normalizeObject(values2, normalizeUnit), settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday), containsOrdinal = !isUndefined(normalized.ordinal), containsGregorYear = !isUndefined(normalized.year), containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day), containsGregor = containsGregorYear || containsGregorMD, definiteWeekDef = normalized.weekYear || normalized.weekNumber;
          if ((containsGregor || containsOrdinal) && definiteWeekDef) {
            throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
          }
          if (containsGregorMD && containsOrdinal) {
            throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
          }
          var mixed;
          if (settingWeekStuff) {
            mixed = weekToGregorian(_extends2({}, gregorianToWeek(this.c), normalized));
          } else if (!isUndefined(normalized.ordinal)) {
            mixed = ordinalToGregorian(_extends2({}, gregorianToOrdinal(this.c), normalized));
          } else {
            mixed = _extends2({}, this.toObject(), normalized);
            if (isUndefined(normalized.day)) {
              mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
            }
          }
          var _objToTS4 = objToTS(mixed, this.o, this.zone), ts = _objToTS4[0], o6 = _objToTS4[1];
          return clone(this, {
            ts,
            o: o6
          });
        };
        _proto.plus = function plus(duration) {
          if (!this.isValid)
            return this;
          var dur = Duration.fromDurationLike(duration);
          return clone(this, adjustTime(this, dur));
        };
        _proto.minus = function minus(duration) {
          if (!this.isValid)
            return this;
          var dur = Duration.fromDurationLike(duration).negate();
          return clone(this, adjustTime(this, dur));
        };
        _proto.startOf = function startOf(unit) {
          if (!this.isValid)
            return this;
          var o6 = {}, normalizedUnit = Duration.normalizeUnit(unit);
          switch (normalizedUnit) {
            case "years":
              o6.month = 1;
            case "quarters":
            case "months":
              o6.day = 1;
            case "weeks":
            case "days":
              o6.hour = 0;
            case "hours":
              o6.minute = 0;
            case "minutes":
              o6.second = 0;
            case "seconds":
              o6.millisecond = 0;
              break;
          }
          if (normalizedUnit === "weeks") {
            o6.weekday = 1;
          }
          if (normalizedUnit === "quarters") {
            var q = Math.ceil(this.month / 3);
            o6.month = (q - 1) * 3 + 1;
          }
          return this.set(o6);
        };
        _proto.endOf = function endOf(unit) {
          var _this$plus;
          return this.isValid ? this.plus((_this$plus = {}, _this$plus[unit] = 1, _this$plus)).startOf(unit).minus(1) : this;
        };
        _proto.toFormat = function toFormat(fmt, opts) {
          if (opts === void 0) {
            opts = {};
          }
          return this.isValid ? Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this, fmt) : INVALID;
        };
        _proto.toLocaleString = function toLocaleString(formatOpts, opts) {
          if (formatOpts === void 0) {
            formatOpts = DATE_SHORT;
          }
          if (opts === void 0) {
            opts = {};
          }
          return this.isValid ? Formatter.create(this.loc.clone(opts), formatOpts).formatDateTime(this) : INVALID;
        };
        _proto.toLocaleParts = function toLocaleParts(opts) {
          if (opts === void 0) {
            opts = {};
          }
          return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
        };
        _proto.toISO = function toISO(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid) {
            return null;
          }
          return this.toISODate(opts) + "T" + this.toISOTime(opts);
        };
        _proto.toISODate = function toISODate(_temp3) {
          var _ref5 = _temp3 === void 0 ? {} : _temp3, _ref5$format = _ref5.format, format = _ref5$format === void 0 ? "extended" : _ref5$format;
          var fmt = format === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
          if (this.year > 9999) {
            fmt = "+" + fmt;
          }
          return toTechFormat(this, fmt);
        };
        _proto.toISOWeekDate = function toISOWeekDate() {
          return toTechFormat(this, "kkkk-'W'WW-c");
        };
        _proto.toISOTime = function toISOTime(_temp4) {
          var _ref6 = _temp4 === void 0 ? {} : _temp4, _ref6$suppressMillise = _ref6.suppressMilliseconds, suppressMilliseconds = _ref6$suppressMillise === void 0 ? false : _ref6$suppressMillise, _ref6$suppressSeconds = _ref6.suppressSeconds, suppressSeconds = _ref6$suppressSeconds === void 0 ? false : _ref6$suppressSeconds, _ref6$includeOffset = _ref6.includeOffset, includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset, _ref6$includePrefix = _ref6.includePrefix, includePrefix = _ref6$includePrefix === void 0 ? false : _ref6$includePrefix, _ref6$format = _ref6.format, format = _ref6$format === void 0 ? "extended" : _ref6$format;
          return toTechTimeFormat(this, {
            suppressSeconds,
            suppressMilliseconds,
            includeOffset,
            includePrefix,
            format
          });
        };
        _proto.toRFC2822 = function toRFC2822() {
          return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", false);
        };
        _proto.toHTTP = function toHTTP() {
          return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        };
        _proto.toSQLDate = function toSQLDate() {
          return toTechFormat(this, "yyyy-MM-dd");
        };
        _proto.toSQLTime = function toSQLTime(_temp5) {
          var _ref7 = _temp5 === void 0 ? {} : _temp5, _ref7$includeOffset = _ref7.includeOffset, includeOffset = _ref7$includeOffset === void 0 ? true : _ref7$includeOffset, _ref7$includeZone = _ref7.includeZone, includeZone = _ref7$includeZone === void 0 ? false : _ref7$includeZone;
          return toTechTimeFormat(this, {
            includeOffset,
            includeZone,
            spaceZone: true
          });
        };
        _proto.toSQL = function toSQL(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid) {
            return null;
          }
          return this.toSQLDate() + " " + this.toSQLTime(opts);
        };
        _proto.toString = function toString2() {
          return this.isValid ? this.toISO() : INVALID;
        };
        _proto.valueOf = function valueOf() {
          return this.toMillis();
        };
        _proto.toMillis = function toMillis() {
          return this.isValid ? this.ts : NaN;
        };
        _proto.toSeconds = function toSeconds() {
          return this.isValid ? this.ts / 1e3 : NaN;
        };
        _proto.toJSON = function toJSON3() {
          return this.toISO();
        };
        _proto.toBSON = function toBSON() {
          return this.toJSDate();
        };
        _proto.toObject = function toObject(opts) {
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid)
            return {};
          var base = _extends2({}, this.c);
          if (opts.includeConfig) {
            base.outputCalendar = this.outputCalendar;
            base.numberingSystem = this.loc.numberingSystem;
            base.locale = this.loc.locale;
          }
          return base;
        };
        _proto.toJSDate = function toJSDate() {
          return new Date(this.isValid ? this.ts : NaN);
        };
        _proto.diff = function diff(otherDateTime, unit, opts) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          if (opts === void 0) {
            opts = {};
          }
          if (!this.isValid || !otherDateTime.isValid) {
            return Duration.invalid("created by diffing an invalid DateTime");
          }
          var durOpts = _extends2({
            locale: this.locale,
            numberingSystem: this.numberingSystem
          }, opts);
          var units = maybeArray(unit).map(Duration.normalizeUnit), otherIsLater = otherDateTime.valueOf() > this.valueOf(), earlier = otherIsLater ? this : otherDateTime, later = otherIsLater ? otherDateTime : this, diffed = _diff(earlier, later, units, durOpts);
          return otherIsLater ? diffed.negate() : diffed;
        };
        _proto.diffNow = function diffNow(unit, opts) {
          if (unit === void 0) {
            unit = "milliseconds";
          }
          if (opts === void 0) {
            opts = {};
          }
          return this.diff(DateTime3.now(), unit, opts);
        };
        _proto.until = function until(otherDateTime) {
          return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
        };
        _proto.hasSame = function hasSame(otherDateTime, unit) {
          if (!this.isValid)
            return false;
          var inputMs = otherDateTime.valueOf();
          var otherZoneDateTime = this.setZone(otherDateTime.zone, {
            keepLocalTime: true
          });
          return otherZoneDateTime.startOf(unit) <= inputMs && inputMs <= otherZoneDateTime.endOf(unit);
        };
        _proto.equals = function equals(other) {
          return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
        };
        _proto.toRelative = function toRelative(options) {
          if (options === void 0) {
            options = {};
          }
          if (!this.isValid)
            return null;
          var base = options.base || DateTime3.fromObject({}, {
            zone: this.zone
          }), padding = options.padding ? this < base ? -options.padding : options.padding : 0;
          var units = ["years", "months", "days", "hours", "minutes", "seconds"];
          var unit = options.unit;
          if (Array.isArray(options.unit)) {
            units = options.unit;
            unit = void 0;
          }
          return diffRelative(base, this.plus(padding), _extends2({}, options, {
            numeric: "always",
            units,
            unit
          }));
        };
        _proto.toRelativeCalendar = function toRelativeCalendar(options) {
          if (options === void 0) {
            options = {};
          }
          if (!this.isValid)
            return null;
          return diffRelative(options.base || DateTime3.fromObject({}, {
            zone: this.zone
          }), this, _extends2({}, options, {
            numeric: "auto",
            units: ["years", "months", "days"],
            calendary: true
          }));
        };
        DateTime3.min = function min() {
          for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
            dateTimes[_key] = arguments[_key];
          }
          if (!dateTimes.every(DateTime3.isDateTime)) {
            throw new InvalidArgumentError("min requires all arguments be DateTimes");
          }
          return bestBy(dateTimes, function(i3) {
            return i3.valueOf();
          }, Math.min);
        };
        DateTime3.max = function max() {
          for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            dateTimes[_key2] = arguments[_key2];
          }
          if (!dateTimes.every(DateTime3.isDateTime)) {
            throw new InvalidArgumentError("max requires all arguments be DateTimes");
          }
          return bestBy(dateTimes, function(i3) {
            return i3.valueOf();
          }, Math.max);
        };
        DateTime3.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
          if (options === void 0) {
            options = {};
          }
          var _options = options, _options$locale = _options.locale, locale = _options$locale === void 0 ? null : _options$locale, _options$numberingSys = _options.numberingSystem, numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys, localeToUse = Locale.fromOpts({
            locale,
            numberingSystem,
            defaultToEN: true
          });
          return explainFromTokens(localeToUse, text, fmt);
        };
        DateTime3.fromStringExplain = function fromStringExplain(text, fmt, options) {
          if (options === void 0) {
            options = {};
          }
          return DateTime3.fromFormatExplain(text, fmt, options);
        };
        _createClass2(DateTime3, [{
          key: "isValid",
          get: function get3() {
            return this.invalid === null;
          }
        }, {
          key: "invalidReason",
          get: function get3() {
            return this.invalid ? this.invalid.reason : null;
          }
        }, {
          key: "invalidExplanation",
          get: function get3() {
            return this.invalid ? this.invalid.explanation : null;
          }
        }, {
          key: "locale",
          get: function get3() {
            return this.isValid ? this.loc.locale : null;
          }
        }, {
          key: "numberingSystem",
          get: function get3() {
            return this.isValid ? this.loc.numberingSystem : null;
          }
        }, {
          key: "outputCalendar",
          get: function get3() {
            return this.isValid ? this.loc.outputCalendar : null;
          }
        }, {
          key: "zone",
          get: function get3() {
            return this._zone;
          }
        }, {
          key: "zoneName",
          get: function get3() {
            return this.isValid ? this.zone.name : null;
          }
        }, {
          key: "year",
          get: function get3() {
            return this.isValid ? this.c.year : NaN;
          }
        }, {
          key: "quarter",
          get: function get3() {
            return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
          }
        }, {
          key: "month",
          get: function get3() {
            return this.isValid ? this.c.month : NaN;
          }
        }, {
          key: "day",
          get: function get3() {
            return this.isValid ? this.c.day : NaN;
          }
        }, {
          key: "hour",
          get: function get3() {
            return this.isValid ? this.c.hour : NaN;
          }
        }, {
          key: "minute",
          get: function get3() {
            return this.isValid ? this.c.minute : NaN;
          }
        }, {
          key: "second",
          get: function get3() {
            return this.isValid ? this.c.second : NaN;
          }
        }, {
          key: "millisecond",
          get: function get3() {
            return this.isValid ? this.c.millisecond : NaN;
          }
        }, {
          key: "weekYear",
          get: function get3() {
            return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
          }
        }, {
          key: "weekNumber",
          get: function get3() {
            return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
          }
        }, {
          key: "weekday",
          get: function get3() {
            return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
          }
        }, {
          key: "ordinal",
          get: function get3() {
            return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
          }
        }, {
          key: "monthShort",
          get: function get3() {
            return this.isValid ? Info.months("short", {
              locObj: this.loc
            })[this.month - 1] : null;
          }
        }, {
          key: "monthLong",
          get: function get3() {
            return this.isValid ? Info.months("long", {
              locObj: this.loc
            })[this.month - 1] : null;
          }
        }, {
          key: "weekdayShort",
          get: function get3() {
            return this.isValid ? Info.weekdays("short", {
              locObj: this.loc
            })[this.weekday - 1] : null;
          }
        }, {
          key: "weekdayLong",
          get: function get3() {
            return this.isValid ? Info.weekdays("long", {
              locObj: this.loc
            })[this.weekday - 1] : null;
          }
        }, {
          key: "offset",
          get: function get3() {
            return this.isValid ? +this.o : NaN;
          }
        }, {
          key: "offsetNameShort",
          get: function get3() {
            if (this.isValid) {
              return this.zone.offsetName(this.ts, {
                format: "short",
                locale: this.locale
              });
            } else {
              return null;
            }
          }
        }, {
          key: "offsetNameLong",
          get: function get3() {
            if (this.isValid) {
              return this.zone.offsetName(this.ts, {
                format: "long",
                locale: this.locale
              });
            } else {
              return null;
            }
          }
        }, {
          key: "isOffsetFixed",
          get: function get3() {
            return this.isValid ? this.zone.isUniversal : null;
          }
        }, {
          key: "isInDST",
          get: function get3() {
            if (this.isOffsetFixed) {
              return false;
            } else {
              return this.offset > this.set({
                month: 1
              }).offset || this.offset > this.set({
                month: 5
              }).offset;
            }
          }
        }, {
          key: "isInLeapYear",
          get: function get3() {
            return isLeapYear(this.year);
          }
        }, {
          key: "daysInMonth",
          get: function get3() {
            return daysInMonth(this.year, this.month);
          }
        }, {
          key: "daysInYear",
          get: function get3() {
            return this.isValid ? daysInYear(this.year) : NaN;
          }
        }, {
          key: "weeksInWeekYear",
          get: function get3() {
            return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
          }
        }], [{
          key: "DATE_SHORT",
          get: function get3() {
            return DATE_SHORT;
          }
        }, {
          key: "DATE_MED",
          get: function get3() {
            return DATE_MED;
          }
        }, {
          key: "DATE_MED_WITH_WEEKDAY",
          get: function get3() {
            return DATE_MED_WITH_WEEKDAY;
          }
        }, {
          key: "DATE_FULL",
          get: function get3() {
            return DATE_FULL;
          }
        }, {
          key: "DATE_HUGE",
          get: function get3() {
            return DATE_HUGE;
          }
        }, {
          key: "TIME_SIMPLE",
          get: function get3() {
            return TIME_SIMPLE;
          }
        }, {
          key: "TIME_WITH_SECONDS",
          get: function get3() {
            return TIME_WITH_SECONDS;
          }
        }, {
          key: "TIME_WITH_SHORT_OFFSET",
          get: function get3() {
            return TIME_WITH_SHORT_OFFSET;
          }
        }, {
          key: "TIME_WITH_LONG_OFFSET",
          get: function get3() {
            return TIME_WITH_LONG_OFFSET;
          }
        }, {
          key: "TIME_24_SIMPLE",
          get: function get3() {
            return TIME_24_SIMPLE;
          }
        }, {
          key: "TIME_24_WITH_SECONDS",
          get: function get3() {
            return TIME_24_WITH_SECONDS;
          }
        }, {
          key: "TIME_24_WITH_SHORT_OFFSET",
          get: function get3() {
            return TIME_24_WITH_SHORT_OFFSET;
          }
        }, {
          key: "TIME_24_WITH_LONG_OFFSET",
          get: function get3() {
            return TIME_24_WITH_LONG_OFFSET;
          }
        }, {
          key: "DATETIME_SHORT",
          get: function get3() {
            return DATETIME_SHORT;
          }
        }, {
          key: "DATETIME_SHORT_WITH_SECONDS",
          get: function get3() {
            return DATETIME_SHORT_WITH_SECONDS;
          }
        }, {
          key: "DATETIME_MED",
          get: function get3() {
            return DATETIME_MED;
          }
        }, {
          key: "DATETIME_MED_WITH_SECONDS",
          get: function get3() {
            return DATETIME_MED_WITH_SECONDS;
          }
        }, {
          key: "DATETIME_MED_WITH_WEEKDAY",
          get: function get3() {
            return DATETIME_MED_WITH_WEEKDAY;
          }
        }, {
          key: "DATETIME_FULL",
          get: function get3() {
            return DATETIME_FULL;
          }
        }, {
          key: "DATETIME_FULL_WITH_SECONDS",
          get: function get3() {
            return DATETIME_FULL_WITH_SECONDS;
          }
        }, {
          key: "DATETIME_HUGE",
          get: function get3() {
            return DATETIME_HUGE;
          }
        }, {
          key: "DATETIME_HUGE_WITH_SECONDS",
          get: function get3() {
            return DATETIME_HUGE_WITH_SECONDS;
          }
        }]);
        return DateTime3;
      }();
      function friendlyDateTime(dateTimeish) {
        if (DateTime2.isDateTime(dateTimeish)) {
          return dateTimeish;
        } else if (dateTimeish && dateTimeish.valueOf && isNumber2(dateTimeish.valueOf())) {
          return DateTime2.fromJSDate(dateTimeish);
        } else if (dateTimeish && typeof dateTimeish === "object") {
          return DateTime2.fromObject(dateTimeish);
        } else {
          throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
        }
      }
      var VERSION = "2.1.1";
      exports.DateTime = DateTime2;
      exports.Duration = Duration;
      exports.FixedOffsetZone = FixedOffsetZone;
      exports.IANAZone = IANAZone;
      exports.Info = Info;
      exports.Interval = Interval;
      exports.InvalidZone = InvalidZone;
      exports.Settings = Settings;
      exports.SystemZone = SystemZone;
      exports.VERSION = VERSION;
      exports.Zone = Zone;
    }
  });

  // node_modules/mobx/dist/mobx.esm.js
  var niceErrors = {
    0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
    1: function _(annotationType, key) {
      return "Cannot apply '" + annotationType + "' to '" + key.toString() + "': Field not found.";
    },
    5: "'keys()' can only be used on observable objects, arrays, sets and maps",
    6: "'values()' can only be used on observable objects, arrays, sets and maps",
    7: "'entries()' can only be used on observable objects, arrays and maps",
    8: "'set()' can only be used on observable objects, arrays and maps",
    9: "'remove()' can only be used on observable objects, arrays and maps",
    10: "'has()' can only be used on observable objects, arrays and maps",
    11: "'get()' can only be used on observable objects, arrays and maps",
    12: "Invalid annotation",
    13: "Dynamic observable objects cannot be frozen",
    14: "Intercept handlers should return nothing or a change object",
    15: "Observable arrays cannot be frozen",
    16: "Modification exception: the internal structure of an observable array was changed.",
    17: function _2(index, length) {
      return "[mobx.array] Index out of bounds, " + index + " is larger than " + length;
    },
    18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
    19: function _3(other) {
      return "Cannot initialize from classes that inherit from Map: " + other.constructor.name;
    },
    20: function _4(other) {
      return "Cannot initialize map from " + other;
    },
    21: function _5(dataStructure) {
      return "Cannot convert to map from '" + dataStructure + "'";
    },
    22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
    23: "It is not possible to get index atoms from arrays",
    24: function _6(thing) {
      return "Cannot obtain administration from " + thing;
    },
    25: function _7(property, name) {
      return "the entry '" + property + "' does not exist in the observable map '" + name + "'";
    },
    26: "please specify a property",
    27: function _8(property, name) {
      return "no observable property '" + property.toString() + "' found on the observable object '" + name + "'";
    },
    28: function _9(thing) {
      return "Cannot obtain atom from " + thing;
    },
    29: "Expecting some object",
    30: "invalid action stack. did you forget to finish an action?",
    31: "missing option for computed: get",
    32: function _10(name, derivation) {
      return "Cycle detected in computation " + name + ": " + derivation;
    },
    33: function _11(name) {
      return "The setter of computed value '" + name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
    },
    34: function _12(name) {
      return "[ComputedValue '" + name + "'] It is not possible to assign a new value to a computed value.";
    },
    35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
    36: "isolateGlobalState should be called before MobX is running any reactions",
    37: function _13(method) {
      return "[mobx] `observableArray." + method + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + method + "()` instead";
    },
    38: "'ownKeys()' can only be used on observable objects",
    39: "'defineProperty()' can only be used on observable objects"
  };
  var errors = true ? niceErrors : {};
  function die(error) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (true) {
      var e5 = typeof error === "string" ? error : errors[error];
      if (typeof e5 === "function")
        e5 = e5.apply(null, args);
      throw new Error("[MobX] " + e5);
    }
    throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
  }
  var mockGlobal = {};
  function getGlobal() {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    return mockGlobal;
  }
  var assign = Object.assign;
  var getDescriptor = Object.getOwnPropertyDescriptor;
  var defineProperty = Object.defineProperty;
  var objectPrototype = Object.prototype;
  var EMPTY_ARRAY = [];
  Object.freeze(EMPTY_ARRAY);
  var EMPTY_OBJECT = {};
  Object.freeze(EMPTY_OBJECT);
  var hasProxy = typeof Proxy !== "undefined";
  var plainObjectString = /* @__PURE__ */ Object.toString();
  function assertProxies() {
    if (!hasProxy) {
      die(true ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
    }
  }
  function warnAboutProxyRequirement(msg) {
    if (globalState.verifyProxies) {
      die("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + msg);
    }
  }
  function getNextId() {
    return ++globalState.mobxGuid;
  }
  function once(func) {
    var invoked = false;
    return function() {
      if (invoked)
        return;
      invoked = true;
      return func.apply(this, arguments);
    };
  }
  var noop = function noop2() {
  };
  function isFunction(fn) {
    return typeof fn === "function";
  }
  function isStringish(value) {
    var t3 = typeof value;
    switch (t3) {
      case "string":
      case "symbol":
      case "number":
        return true;
    }
    return false;
  }
  function isObject(value) {
    return value !== null && typeof value === "object";
  }
  function isPlainObject(value) {
    var _proto$constructor;
    if (!isObject(value))
      return false;
    var proto = Object.getPrototypeOf(value);
    if (proto == null)
      return true;
    return ((_proto$constructor = proto.constructor) == null ? void 0 : _proto$constructor.toString()) === plainObjectString;
  }
  function isGenerator(obj) {
    var constructor = obj == null ? void 0 : obj.constructor;
    if (!constructor)
      return false;
    if (constructor.name === "GeneratorFunction" || constructor.displayName === "GeneratorFunction")
      return true;
    return false;
  }
  function addHiddenProp(object2, propName, value) {
    defineProperty(object2, propName, {
      enumerable: false,
      writable: true,
      configurable: true,
      value
    });
  }
  function addHiddenFinalProp(object2, propName, value) {
    defineProperty(object2, propName, {
      enumerable: false,
      writable: false,
      configurable: true,
      value
    });
  }
  function createInstanceofPredicate(name, theClass) {
    var propName = "isMobX" + name;
    theClass.prototype[propName] = true;
    return function(x2) {
      return isObject(x2) && x2[propName] === true;
    };
  }
  function isES6Map(thing) {
    return thing instanceof Map;
  }
  function isES6Set(thing) {
    return thing instanceof Set;
  }
  var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
  function getPlainObjectKeys(object2) {
    var keys2 = Object.keys(object2);
    if (!hasGetOwnPropertySymbols)
      return keys2;
    var symbols = Object.getOwnPropertySymbols(object2);
    if (!symbols.length)
      return keys2;
    return [].concat(keys2, symbols.filter(function(s5) {
      return objectPrototype.propertyIsEnumerable.call(object2, s5);
    }));
  }
  var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function(obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
  } : Object.getOwnPropertyNames;
  function stringifyKey(key) {
    if (typeof key === "string")
      return key;
    if (typeof key === "symbol")
      return key.toString();
    return new String(key).toString();
  }
  function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
  }
  function hasProp(target, prop) {
    return objectPrototype.hasOwnProperty.call(target, prop);
  }
  var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(target) {
    var res = {};
    ownKeys(target).forEach(function(key) {
      res[key] = getDescriptor(target, key);
    });
    return res;
  };
  function _defineProperties(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i3 = 1; i3 < arguments.length; i3++) {
        var source = arguments[i3];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _unsupportedIterableToArray(o6, minLen) {
    if (!o6)
      return;
    if (typeof o6 === "string")
      return _arrayLikeToArray(o6, minLen);
    var n6 = Object.prototype.toString.call(o6).slice(8, -1);
    if (n6 === "Object" && o6.constructor)
      n6 = o6.constructor.name;
    if (n6 === "Map" || n6 === "Set")
      return Array.from(o6);
    if (n6 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n6))
      return _arrayLikeToArray(o6, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++)
      arr2[i3] = arr[i3];
    return arr2;
  }
  function _createForOfIteratorHelperLoose(o6, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o6[Symbol.iterator] == null) {
      if (Array.isArray(o6) || (it = _unsupportedIterableToArray(o6)) || allowArrayLike && o6 && typeof o6.length === "number") {
        if (it)
          o6 = it;
        var i3 = 0;
        return function() {
          if (i3 >= o6.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o6[i3++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    it = o6[Symbol.iterator]();
    return it.next.bind(it);
  }
  var storedAnnotationsSymbol = /* @__PURE__ */ Symbol("mobx-stored-annotations");
  function createDecoratorAnnotation(annotation) {
    function decorator(target, property) {
      storeAnnotation(target, property, annotation);
    }
    return Object.assign(decorator, annotation);
  }
  function storeAnnotation(prototype, key, annotation) {
    if (!hasProp(prototype, storedAnnotationsSymbol)) {
      addHiddenProp(prototype, storedAnnotationsSymbol, _extends({}, prototype[storedAnnotationsSymbol]));
    }
    if (isOverride(annotation) && !hasProp(prototype[storedAnnotationsSymbol], key)) {
      var fieldName = prototype.constructor.name + ".prototype." + key.toString();
      die("'" + fieldName + "' is decorated with 'override', but no such decorated member was found on prototype.");
    }
    assertNotDecorated(prototype, annotation, key);
    if (!isOverride(annotation)) {
      prototype[storedAnnotationsSymbol][key] = annotation;
    }
  }
  function assertNotDecorated(prototype, annotation, key) {
    if (!isOverride(annotation) && hasProp(prototype[storedAnnotationsSymbol], key)) {
      var fieldName = prototype.constructor.name + ".prototype." + key.toString();
      var currentAnnotationType = prototype[storedAnnotationsSymbol][key].annotationType_;
      var requestedAnnotationType = annotation.annotationType_;
      die("Cannot apply '@" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already decorated with '@" + currentAnnotationType + "'.") + "\nRe-decorating fields is not allowed.\nUse '@override' decorator for methods overriden by subclass.");
    }
  }
  function collectStoredAnnotations(target) {
    if (!hasProp(target, storedAnnotationsSymbol)) {
      if (!target[storedAnnotationsSymbol]) {
        die("No annotations were passed to makeObservable, but no decorated members have been found either");
      }
      addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
    }
    return target[storedAnnotationsSymbol];
  }
  var $mobx = /* @__PURE__ */ Symbol("mobx administration");
  var Atom = /* @__PURE__ */ function() {
    function Atom2(name_) {
      if (name_ === void 0) {
        name_ = true ? "Atom@" + getNextId() : "Atom";
      }
      this.name_ = void 0;
      this.isPendingUnobservation_ = false;
      this.isBeingObserved_ = false;
      this.observers_ = new Set();
      this.diffValue_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
      this.onBOL = void 0;
      this.onBUOL = void 0;
      this.name_ = name_;
    }
    var _proto = Atom2.prototype;
    _proto.onBO = function onBO() {
      if (this.onBOL) {
        this.onBOL.forEach(function(listener) {
          return listener();
        });
      }
    };
    _proto.onBUO = function onBUO() {
      if (this.onBUOL) {
        this.onBUOL.forEach(function(listener) {
          return listener();
        });
      }
    };
    _proto.reportObserved = function reportObserved$1() {
      return reportObserved(this);
    };
    _proto.reportChanged = function reportChanged() {
      startBatch();
      propagateChanged(this);
      endBatch();
    };
    _proto.toString = function toString2() {
      return this.name_;
    };
    return Atom2;
  }();
  var isAtom = /* @__PURE__ */ createInstanceofPredicate("Atom", Atom);
  function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) {
      onBecomeObservedHandler = noop;
    }
    if (onBecomeUnobservedHandler === void 0) {
      onBecomeUnobservedHandler = noop;
    }
    var atom = new Atom(name);
    if (onBecomeObservedHandler !== noop) {
      onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
      onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
  }
  function identityComparer(a2, b2) {
    return a2 === b2;
  }
  function structuralComparer(a2, b2) {
    return deepEqual(a2, b2);
  }
  function shallowComparer(a2, b2) {
    return deepEqual(a2, b2, 1);
  }
  function defaultComparer(a2, b2) {
    if (Object.is)
      return Object.is(a2, b2);
    return a2 === b2 ? a2 !== 0 || 1 / a2 === 1 / b2 : a2 !== a2 && b2 !== b2;
  }
  var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    "default": defaultComparer,
    shallow: shallowComparer
  };
  function deepEnhancer(v2, _15, name) {
    if (isObservable(v2))
      return v2;
    if (Array.isArray(v2))
      return observable.array(v2, {
        name
      });
    if (isPlainObject(v2))
      return observable.object(v2, void 0, {
        name
      });
    if (isES6Map(v2))
      return observable.map(v2, {
        name
      });
    if (isES6Set(v2))
      return observable.set(v2, {
        name
      });
    if (typeof v2 === "function" && !isAction(v2) && !isFlow(v2)) {
      if (isGenerator(v2)) {
        return flow(v2);
      } else {
        return autoAction(name, v2);
      }
    }
    return v2;
  }
  function shallowEnhancer(v2, _15, name) {
    if (v2 === void 0 || v2 === null)
      return v2;
    if (isObservableObject(v2) || isObservableArray(v2) || isObservableMap(v2) || isObservableSet(v2))
      return v2;
    if (Array.isArray(v2))
      return observable.array(v2, {
        name,
        deep: false
      });
    if (isPlainObject(v2))
      return observable.object(v2, void 0, {
        name,
        deep: false
      });
    if (isES6Map(v2))
      return observable.map(v2, {
        name,
        deep: false
      });
    if (isES6Set(v2))
      return observable.set(v2, {
        name,
        deep: false
      });
    if (true)
      die("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
  }
  function referenceEnhancer(newValue) {
    return newValue;
  }
  function refStructEnhancer(v2, oldValue) {
    if (isObservable(v2))
      die("observable.struct should not be used with observable values");
    if (deepEqual(v2, oldValue))
      return oldValue;
    return v2;
  }
  var OVERRIDE = "override";
  function isOverride(annotation) {
    return annotation.annotationType_ === OVERRIDE;
  }
  function createActionAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$1,
      extend_: extend_$1
    };
  }
  function make_$1(adm, key, descriptor, source) {
    var _this$options_;
    if ((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) {
      return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
    }
    if (source === adm.target_) {
      return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
    }
    if (isAction(descriptor.value)) {
      return 1;
    }
    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
    defineProperty(source, key, actionDescriptor);
    return 2;
  }
  function extend_$1(adm, key, descriptor, proxyTrap) {
    var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
    return adm.defineProperty_(key, actionDescriptor, proxyTrap);
  }
  function assertActionDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var value = _ref2.value;
    if (!isFunction(value)) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a function value."));
    }
  }
  function createActionDescriptor(adm, annotation, key, descriptor, safeDescriptors) {
    var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;
    if (safeDescriptors === void 0) {
      safeDescriptors = globalState.safeDescriptors;
    }
    assertActionDescriptor(adm, annotation, key, descriptor);
    var value = descriptor.value;
    if ((_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.bound) {
      var _adm$proxy_;
      value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }
    return {
      value: createAction((_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(), value, (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false, ((_annotation$options_4 = annotation.options_) == null ? void 0 : _annotation$options_4.bound) ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : void 0),
      configurable: safeDescriptors ? adm.isPlainObject_ : true,
      enumerable: false,
      writable: safeDescriptors ? false : true
    };
  }
  function createFlowAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$2,
      extend_: extend_$2
    };
  }
  function make_$2(adm, key, descriptor, source) {
    var _this$options_;
    if (source === adm.target_) {
      return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
    }
    if (((_this$options_ = this.options_) == null ? void 0 : _this$options_.bound) && !isFlow(adm.target_[key])) {
      if (this.extend_(adm, key, descriptor, false) === null)
        return 0;
    }
    if (isFlow(descriptor.value)) {
      return 1;
    }
    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
    defineProperty(source, key, flowDescriptor);
    return 2;
  }
  function extend_$2(adm, key, descriptor, proxyTrap) {
    var _this$options_2;
    var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
    return adm.defineProperty_(key, flowDescriptor, proxyTrap);
  }
  function assertFlowDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var value = _ref2.value;
    if (!isFunction(value)) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on properties with a generator function value."));
    }
  }
  function createFlowDescriptor(adm, annotation, key, descriptor, bound, safeDescriptors) {
    if (safeDescriptors === void 0) {
      safeDescriptors = globalState.safeDescriptors;
    }
    assertFlowDescriptor(adm, annotation, key, descriptor);
    var value = descriptor.value;
    if (bound) {
      var _adm$proxy_;
      value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }
    return {
      value: flow(value),
      configurable: safeDescriptors ? adm.isPlainObject_ : true,
      enumerable: false,
      writable: safeDescriptors ? false : true
    };
  }
  function createComputedAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$3,
      extend_: extend_$3
    };
  }
  function make_$3(adm, key, descriptor) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
  }
  function extend_$3(adm, key, descriptor, proxyTrap) {
    assertComputedDescriptor(adm, this, key, descriptor);
    return adm.defineComputedProperty_(key, _extends({}, this.options_, {
      get: descriptor.get,
      set: descriptor.set
    }), proxyTrap);
  }
  function assertComputedDescriptor(adm, _ref, key, _ref2) {
    var annotationType_ = _ref.annotationType_;
    var get3 = _ref2.get;
    if (!get3) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' can only be used on getter(+setter) properties."));
    }
  }
  function createObservableAnnotation(name, options) {
    return {
      annotationType_: name,
      options_: options,
      make_: make_$4,
      extend_: extend_$4
    };
  }
  function make_$4(adm, key, descriptor) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
  }
  function extend_$4(adm, key, descriptor, proxyTrap) {
    var _this$options_$enhanc, _this$options_;
    assertObservableDescriptor(adm, this, key, descriptor);
    return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
  }
  function assertObservableDescriptor(adm, _ref, key, descriptor) {
    var annotationType_ = _ref.annotationType_;
    if (!("value" in descriptor)) {
      die("Cannot apply '" + annotationType_ + "' to '" + adm.name_ + "." + key.toString() + "':" + ("\n'" + annotationType_ + "' cannot be used on getter/setter properties"));
    }
  }
  var AUTO = "true";
  var autoAnnotation = /* @__PURE__ */ createAutoAnnotation();
  function createAutoAnnotation(options) {
    return {
      annotationType_: AUTO,
      options_: options,
      make_: make_$5,
      extend_: extend_$5
    };
  }
  function make_$5(adm, key, descriptor, source) {
    var _this$options_3, _this$options_4;
    if (descriptor.get) {
      return computed.make_(adm, key, descriptor, source);
    }
    if (descriptor.set) {
      var set5 = createAction(key.toString(), descriptor.set);
      if (source === adm.target_) {
        return adm.defineProperty_(key, {
          configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
          set: set5
        }) === null ? 0 : 2;
      }
      defineProperty(source, key, {
        configurable: true,
        set: set5
      });
      return 2;
    }
    if (source !== adm.target_ && typeof descriptor.value === "function") {
      var _this$options_2;
      if (isGenerator(descriptor.value)) {
        var _this$options_;
        var flowAnnotation2 = ((_this$options_ = this.options_) == null ? void 0 : _this$options_.autoBind) ? flow.bound : flow;
        return flowAnnotation2.make_(adm, key, descriptor, source);
      }
      var actionAnnotation2 = ((_this$options_2 = this.options_) == null ? void 0 : _this$options_2.autoBind) ? autoAction.bound : autoAction;
      return actionAnnotation2.make_(adm, key, descriptor, source);
    }
    var observableAnnotation2 = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable;
    if (typeof descriptor.value === "function" && ((_this$options_4 = this.options_) == null ? void 0 : _this$options_4.autoBind)) {
      var _adm$proxy_;
      descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    }
    return observableAnnotation2.make_(adm, key, descriptor, source);
  }
  function extend_$5(adm, key, descriptor, proxyTrap) {
    var _this$options_5, _this$options_6;
    if (descriptor.get) {
      return computed.extend_(adm, key, descriptor, proxyTrap);
    }
    if (descriptor.set) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: createAction(key.toString(), descriptor.set)
      }, proxyTrap);
    }
    if (typeof descriptor.value === "function" && ((_this$options_5 = this.options_) == null ? void 0 : _this$options_5.autoBind)) {
      var _adm$proxy_2;
      descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
    }
    var observableAnnotation2 = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
    return observableAnnotation2.extend_(adm, key, descriptor, proxyTrap);
  }
  var OBSERVABLE = "observable";
  var OBSERVABLE_REF = "observable.ref";
  var OBSERVABLE_SHALLOW = "observable.shallow";
  var OBSERVABLE_STRUCT = "observable.struct";
  var defaultCreateObservableOptions = {
    deep: true,
    name: void 0,
    defaultDecorator: void 0,
    proxy: true
  };
  Object.freeze(defaultCreateObservableOptions);
  function asCreateObservableOptions(thing) {
    return thing || defaultCreateObservableOptions;
  }
  var observableAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE);
  var observableRefAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_REF, {
    enhancer: referenceEnhancer
  });
  var observableShallowAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_SHALLOW, {
    enhancer: shallowEnhancer
  });
  var observableStructAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_STRUCT, {
    enhancer: refStructEnhancer
  });
  var observableDecoratorAnnotation = /* @__PURE__ */ createDecoratorAnnotation(observableAnnotation);
  function getEnhancerFromOptions(options) {
    return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
  }
  function getAnnotationFromOptions(options) {
    var _options$defaultDecor;
    return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : void 0;
  }
  function getEnhancerFromAnnotation(annotation) {
    var _annotation$options_$, _annotation$options_;
    return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
  }
  function createObservable(v2, arg2, arg3) {
    if (isStringish(arg2)) {
      storeAnnotation(v2, arg2, observableAnnotation);
      return;
    }
    if (isObservable(v2))
      return v2;
    if (isPlainObject(v2))
      return observable.object(v2, arg2, arg3);
    if (Array.isArray(v2))
      return observable.array(v2, arg2);
    if (isES6Map(v2))
      return observable.map(v2, arg2);
    if (isES6Set(v2))
      return observable.set(v2, arg2);
    if (typeof v2 === "object" && v2 !== null)
      return v2;
    return observable.box(v2, arg2);
  }
  Object.assign(createObservable, observableDecoratorAnnotation);
  var observableFactories = {
    box: function box(value, options) {
      var o6 = asCreateObservableOptions(options);
      return new ObservableValue(value, getEnhancerFromOptions(o6), o6.name, true, o6.equals);
    },
    array: function array(initialValues, options) {
      var o6 = asCreateObservableOptions(options);
      return (globalState.useProxies === false || o6.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o6), o6.name);
    },
    map: function map(initialValues, options) {
      var o6 = asCreateObservableOptions(options);
      return new ObservableMap(initialValues, getEnhancerFromOptions(o6), o6.name);
    },
    set: function set(initialValues, options) {
      var o6 = asCreateObservableOptions(options);
      return new ObservableSet(initialValues, getEnhancerFromOptions(o6), o6.name);
    },
    object: function object(props, decorators, options) {
      return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
    },
    ref: /* @__PURE__ */ createDecoratorAnnotation(observableRefAnnotation),
    shallow: /* @__PURE__ */ createDecoratorAnnotation(observableShallowAnnotation),
    deep: observableDecoratorAnnotation,
    struct: /* @__PURE__ */ createDecoratorAnnotation(observableStructAnnotation)
  };
  var observable = /* @__PURE__ */ assign(createObservable, observableFactories);
  var COMPUTED = "computed";
  var COMPUTED_STRUCT = "computed.struct";
  var computedAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED);
  var computedStructAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED_STRUCT, {
    equals: comparer.structural
  });
  var computed = function computed2(arg1, arg2) {
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, computedAnnotation);
    }
    if (isPlainObject(arg1)) {
      return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
    }
    if (true) {
      if (!isFunction(arg1))
        die("First argument to `computed` should be an expression.");
      if (isFunction(arg2))
        die("A setter as second argument is no longer supported, use `{ set: fn }` option instead");
    }
    var opts = isPlainObject(arg2) ? arg2 : {};
    opts.get = arg1;
    opts.name || (opts.name = arg1.name || "");
    return new ComputedValue(opts);
  };
  Object.assign(computed, computedAnnotation);
  computed.struct = /* @__PURE__ */ createDecoratorAnnotation(computedStructAnnotation);
  var _getDescriptor$config;
  var _getDescriptor;
  var currentActionId = 0;
  var nextActionId = 1;
  var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /* @__PURE__ */ getDescriptor(function() {
  }, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false;
  var tmpNameDescriptor = {
    value: "action",
    configurable: true,
    writable: false,
    enumerable: false
  };
  function createAction(actionName, fn, autoAction2, ref) {
    if (autoAction2 === void 0) {
      autoAction2 = false;
    }
    if (true) {
      if (!isFunction(fn))
        die("`action` can only be invoked on functions");
      if (typeof actionName !== "string" || !actionName)
        die("actions should have valid names, got: '" + actionName + "'");
    }
    function res() {
      return executeAction(actionName, autoAction2, fn, ref || this, arguments);
    }
    res.isMobxAction = true;
    if (isFunctionNameConfigurable) {
      tmpNameDescriptor.value = actionName;
      Object.defineProperty(res, "name", tmpNameDescriptor);
    }
    return res;
  }
  function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
    var runInfo = _startAction(actionName, canRunAsDerivation, scope, args);
    try {
      return fn.apply(scope, args);
    } catch (err) {
      runInfo.error_ = err;
      throw err;
    } finally {
      _endAction(runInfo);
    }
  }
  function _startAction(actionName, canRunAsDerivation, scope, args) {
    var notifySpy_ = isSpyEnabled() && !!actionName;
    var startTime_ = 0;
    if (notifySpy_) {
      startTime_ = Date.now();
      var flattenedArgs = args ? Array.from(args) : EMPTY_ARRAY;
      spyReportStart({
        type: ACTION,
        name: actionName,
        object: scope,
        arguments: flattenedArgs
      });
    }
    var prevDerivation_ = globalState.trackingDerivation;
    var runAsAction = !canRunAsDerivation || !prevDerivation_;
    startBatch();
    var prevAllowStateChanges_ = globalState.allowStateChanges;
    if (runAsAction) {
      untrackedStart();
      prevAllowStateChanges_ = allowStateChangesStart(true);
    }
    var prevAllowStateReads_ = allowStateReadsStart(true);
    var runInfo = {
      runAsAction_: runAsAction,
      prevDerivation_,
      prevAllowStateChanges_,
      prevAllowStateReads_,
      notifySpy_,
      startTime_,
      actionId_: nextActionId++,
      parentActionId_: currentActionId
    };
    currentActionId = runInfo.actionId_;
    return runInfo;
  }
  function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId_) {
      die(30);
    }
    currentActionId = runInfo.parentActionId_;
    if (runInfo.error_ !== void 0) {
      globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges_);
    allowStateReadsEnd(runInfo.prevAllowStateReads_);
    endBatch();
    if (runInfo.runAsAction_)
      untrackedEnd(runInfo.prevDerivation_);
    if (runInfo.notifySpy_) {
      spyReportEnd({
        time: Date.now() - runInfo.startTime_
      });
    }
    globalState.suppressReactionErrors = false;
  }
  function allowStateChanges(allowStateChanges2, func) {
    var prev = allowStateChangesStart(allowStateChanges2);
    try {
      return func();
    } finally {
      allowStateChangesEnd(prev);
    }
  }
  function allowStateChangesStart(allowStateChanges2) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges2;
    return prev;
  }
  function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
  }
  var _Symbol$toPrimitive;
  var CREATE = "create";
  _Symbol$toPrimitive = Symbol.toPrimitive;
  var ObservableValue = /* @__PURE__ */ function(_Atom) {
    _inheritsLoose(ObservableValue2, _Atom);
    function ObservableValue2(value, enhancer, name_, notifySpy, equals) {
      var _this;
      if (name_ === void 0) {
        name_ = true ? "ObservableValue@" + getNextId() : "ObservableValue";
      }
      if (notifySpy === void 0) {
        notifySpy = true;
      }
      if (equals === void 0) {
        equals = comparer["default"];
      }
      _this = _Atom.call(this, name_) || this;
      _this.enhancer = void 0;
      _this.name_ = void 0;
      _this.equals = void 0;
      _this.hasUnreportedChange_ = false;
      _this.interceptors_ = void 0;
      _this.changeListeners_ = void 0;
      _this.value_ = void 0;
      _this.dehancer = void 0;
      _this.enhancer = enhancer;
      _this.name_ = name_;
      _this.equals = equals;
      _this.value_ = enhancer(value, void 0, name_);
      if (notifySpy && isSpyEnabled()) {
        spyReport({
          type: CREATE,
          object: _assertThisInitialized(_this),
          observableKind: "value",
          debugObjectName: _this.name_,
          newValue: "" + _this.value_
        });
      }
      return _this;
    }
    var _proto = ObservableValue2.prototype;
    _proto.dehanceValue = function dehanceValue(value) {
      if (this.dehancer !== void 0)
        return this.dehancer(value);
      return value;
    };
    _proto.set = function set5(newValue) {
      var oldValue = this.value_;
      newValue = this.prepareNewValue_(newValue);
      if (newValue !== globalState.UNCHANGED) {
        var notifySpy = isSpyEnabled();
        if (notifySpy) {
          spyReportStart({
            type: UPDATE,
            object: this,
            observableKind: "value",
            debugObjectName: this.name_,
            newValue,
            oldValue
          });
        }
        this.setNewValue_(newValue);
        if (notifySpy)
          spyReportEnd();
      }
    };
    _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
      checkIfStateModificationsAreAllowed(this);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this,
          type: UPDATE,
          newValue
        });
        if (!change)
          return globalState.UNCHANGED;
        newValue = change.newValue;
      }
      newValue = this.enhancer(newValue, this.value_, this.name_);
      return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
    };
    _proto.setNewValue_ = function setNewValue_(newValue) {
      var oldValue = this.value_;
      this.value_ = newValue;
      this.reportChanged();
      if (hasListeners(this)) {
        notifyListeners(this, {
          type: UPDATE,
          object: this,
          newValue,
          oldValue
        });
      }
    };
    _proto.get = function get3() {
      this.reportObserved();
      return this.dehanceValue(this.value_);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately)
        listener({
          observableKind: "value",
          debugObjectName: this.name_,
          object: this,
          type: UPDATE,
          newValue: this.value_,
          oldValue: void 0
        });
      return registerListener(this, listener);
    };
    _proto.raw = function raw() {
      return this.value_;
    };
    _proto.toJSON = function toJSON3() {
      return this.get();
    };
    _proto.toString = function toString2() {
      return this.name_ + "[" + this.value_ + "]";
    };
    _proto.valueOf = function valueOf() {
      return toPrimitive(this.get());
    };
    _proto[_Symbol$toPrimitive] = function() {
      return this.valueOf();
    };
    return ObservableValue2;
  }(Atom);
  var isObservableValue = /* @__PURE__ */ createInstanceofPredicate("ObservableValue", ObservableValue);
  var _Symbol$toPrimitive$1;
  _Symbol$toPrimitive$1 = Symbol.toPrimitive;
  var ComputedValue = /* @__PURE__ */ function() {
    function ComputedValue2(options) {
      this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      this.observing_ = [];
      this.newObserving_ = null;
      this.isBeingObserved_ = false;
      this.isPendingUnobservation_ = false;
      this.observers_ = new Set();
      this.diffValue_ = 0;
      this.runId_ = 0;
      this.lastAccessedBy_ = 0;
      this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
      this.unboundDepsCount_ = 0;
      this.value_ = new CaughtException(null);
      this.name_ = void 0;
      this.triggeredBy_ = void 0;
      this.isComputing_ = false;
      this.isRunningSetter_ = false;
      this.derivation = void 0;
      this.setter_ = void 0;
      this.isTracing_ = TraceMode.NONE;
      this.scope_ = void 0;
      this.equals_ = void 0;
      this.requiresReaction_ = void 0;
      this.keepAlive_ = void 0;
      this.onBOL = void 0;
      this.onBUOL = void 0;
      if (!options.get)
        die(31);
      this.derivation = options.get;
      this.name_ = options.name || (true ? "ComputedValue@" + getNextId() : "ComputedValue");
      if (options.set) {
        this.setter_ = createAction(true ? this.name_ + "-setter" : "ComputedValue-setter", options.set);
      }
      this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
      this.scope_ = options.context;
      this.requiresReaction_ = !!options.requiresReaction;
      this.keepAlive_ = !!options.keepAlive;
    }
    var _proto = ComputedValue2.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
      propagateMaybeChanged(this);
    };
    _proto.onBO = function onBO() {
      if (this.onBOL) {
        this.onBOL.forEach(function(listener) {
          return listener();
        });
      }
    };
    _proto.onBUO = function onBUO() {
      if (this.onBUOL) {
        this.onBUOL.forEach(function(listener) {
          return listener();
        });
      }
    };
    _proto.get = function get3() {
      if (this.isComputing_)
        die(32, this.name_, this.derivation);
      if (globalState.inBatch === 0 && this.observers_.size === 0 && !this.keepAlive_) {
        if (shouldCompute(this)) {
          this.warnAboutUntrackedRead_();
          startBatch();
          this.value_ = this.computeValue_(false);
          endBatch();
        }
      } else {
        reportObserved(this);
        if (shouldCompute(this)) {
          var prevTrackingContext = globalState.trackingContext;
          if (this.keepAlive_ && !prevTrackingContext)
            globalState.trackingContext = this;
          if (this.trackAndCompute())
            propagateChangeConfirmed(this);
          globalState.trackingContext = prevTrackingContext;
        }
      }
      var result = this.value_;
      if (isCaughtException(result))
        throw result.cause;
      return result;
    };
    _proto.set = function set5(value) {
      if (this.setter_) {
        if (this.isRunningSetter_)
          die(33, this.name_);
        this.isRunningSetter_ = true;
        try {
          this.setter_.call(this.scope_, value);
        } finally {
          this.isRunningSetter_ = false;
        }
      } else
        die(34, this.name_);
    };
    _proto.trackAndCompute = function trackAndCompute() {
      var oldValue = this.value_;
      var wasSuspended = this.dependenciesState_ === IDerivationState_.NOT_TRACKING_;
      var newValue = this.computeValue_(true);
      var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
      if (changed) {
        this.value_ = newValue;
        if (isSpyEnabled()) {
          spyReport({
            observableKind: "computed",
            debugObjectName: this.name_,
            object: this.scope_,
            type: "update",
            oldValue,
            newValue
          });
        }
      }
      return changed;
    };
    _proto.computeValue_ = function computeValue_(track) {
      this.isComputing_ = true;
      var prev = allowStateChangesStart(false);
      var res;
      if (track) {
        res = trackDerivedFunction(this, this.derivation, this.scope_);
      } else {
        if (globalState.disableErrorBoundaries === true) {
          res = this.derivation.call(this.scope_);
        } else {
          try {
            res = this.derivation.call(this.scope_);
          } catch (e5) {
            res = new CaughtException(e5);
          }
        }
      }
      allowStateChangesEnd(prev);
      this.isComputing_ = false;
      return res;
    };
    _proto.suspend_ = function suspend_() {
      if (!this.keepAlive_) {
        clearObserving(this);
        this.value_ = void 0;
        if (this.isTracing_ !== TraceMode.NONE) {
          console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access.");
        }
      }
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      var _this = this;
      var firstTime = true;
      var prevValue = void 0;
      return autorun(function() {
        var newValue = _this.get();
        if (!firstTime || fireImmediately) {
          var prevU = untrackedStart();
          listener({
            observableKind: "computed",
            debugObjectName: _this.name_,
            type: UPDATE,
            object: _this,
            newValue,
            oldValue: prevValue
          });
          untrackedEnd(prevU);
        }
        firstTime = false;
        prevValue = newValue;
      });
    };
    _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
      if (false)
        return;
      if (this.isTracing_ !== TraceMode.NONE) {
        console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
      }
      if (globalState.computedRequiresReaction || this.requiresReaction_) {
        console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute.");
      }
    };
    _proto.toString = function toString2() {
      return this.name_ + "[" + this.derivation.toString() + "]";
    };
    _proto.valueOf = function valueOf() {
      return toPrimitive(this.get());
    };
    _proto[_Symbol$toPrimitive$1] = function() {
      return this.valueOf();
    };
    return ComputedValue2;
  }();
  var isComputedValue = /* @__PURE__ */ createInstanceofPredicate("ComputedValue", ComputedValue);
  var IDerivationState_;
  (function(IDerivationState_2) {
    IDerivationState_2[IDerivationState_2["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
    IDerivationState_2[IDerivationState_2["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
    IDerivationState_2[IDerivationState_2["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
    IDerivationState_2[IDerivationState_2["STALE_"] = 2] = "STALE_";
  })(IDerivationState_ || (IDerivationState_ = {}));
  var TraceMode;
  (function(TraceMode2) {
    TraceMode2[TraceMode2["NONE"] = 0] = "NONE";
    TraceMode2[TraceMode2["LOG"] = 1] = "LOG";
    TraceMode2[TraceMode2["BREAK"] = 2] = "BREAK";
  })(TraceMode || (TraceMode = {}));
  var CaughtException = function CaughtException2(cause) {
    this.cause = void 0;
    this.cause = cause;
  };
  function isCaughtException(e5) {
    return e5 instanceof CaughtException;
  }
  function shouldCompute(derivation) {
    switch (derivation.dependenciesState_) {
      case IDerivationState_.UP_TO_DATE_:
        return false;
      case IDerivationState_.NOT_TRACKING_:
      case IDerivationState_.STALE_:
        return true;
      case IDerivationState_.POSSIBLY_STALE_: {
        var prevAllowStateReads = allowStateReadsStart(true);
        var prevUntracked = untrackedStart();
        var obs = derivation.observing_, l3 = obs.length;
        for (var i3 = 0; i3 < l3; i3++) {
          var obj = obs[i3];
          if (isComputedValue(obj)) {
            if (globalState.disableErrorBoundaries) {
              obj.get();
            } else {
              try {
                obj.get();
              } catch (e5) {
                untrackedEnd(prevUntracked);
                allowStateReadsEnd(prevAllowStateReads);
                return true;
              }
            }
            if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
        }
        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        allowStateReadsEnd(prevAllowStateReads);
        return false;
      }
    }
  }
  function checkIfStateModificationsAreAllowed(atom) {
    if (false) {
      return;
    }
    var hasObservers = atom.observers_.size > 0;
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "always"))
      console.warn("[MobX] " + (globalState.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + atom.name_);
  }
  function checkIfStateReadsAreAllowed(observable2) {
    if (!globalState.allowStateReads && globalState.observableRequiresReaction) {
      console.warn("[mobx] Observable '" + observable2.name_ + "' being read outside a reactive context.");
    }
  }
  function trackDerivedFunction(derivation, f2, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    changeDependenciesStateTo0(derivation);
    derivation.newObserving_ = new Array(derivation.observing_.length + 100);
    derivation.unboundDepsCount_ = 0;
    derivation.runId_ = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    globalState.inBatch++;
    var result;
    if (globalState.disableErrorBoundaries === true) {
      result = f2.call(context);
    } else {
      try {
        result = f2.call(context);
      } catch (e5) {
        result = new CaughtException(e5);
      }
    }
    globalState.inBatch--;
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
  }
  function warnAboutDerivationWithoutDependencies(derivation) {
    if (false)
      return;
    if (derivation.observing_.length !== 0)
      return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable_) {
      console.warn("[mobx] Derivation '" + derivation.name_ + "' is created/updated without reading any observable value.");
    }
  }
  function bindDependencies(derivation) {
    var prevObserving = derivation.observing_;
    var observing = derivation.observing_ = derivation.newObserving_;
    var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;
    var i0 = 0, l3 = derivation.unboundDepsCount_;
    for (var i3 = 0; i3 < l3; i3++) {
      var dep = observing[i3];
      if (dep.diffValue_ === 0) {
        dep.diffValue_ = 1;
        if (i0 !== i3)
          observing[i0] = dep;
        i0++;
      }
      if (dep.dependenciesState_ > lowestNewObservingDerivationState) {
        lowestNewObservingDerivationState = dep.dependenciesState_;
      }
    }
    observing.length = i0;
    derivation.newObserving_ = null;
    l3 = prevObserving.length;
    while (l3--) {
      var _dep = prevObserving[l3];
      if (_dep.diffValue_ === 0) {
        removeObserver(_dep, derivation);
      }
      _dep.diffValue_ = 0;
    }
    while (i0--) {
      var _dep2 = observing[i0];
      if (_dep2.diffValue_ === 1) {
        _dep2.diffValue_ = 0;
        addObserver(_dep2, derivation);
      }
    }
    if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
      derivation.dependenciesState_ = lowestNewObservingDerivationState;
      derivation.onBecomeStale_();
    }
  }
  function clearObserving(derivation) {
    var obs = derivation.observing_;
    derivation.observing_ = [];
    var i3 = obs.length;
    while (i3--) {
      removeObserver(obs[i3], derivation);
    }
    derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
  }
  function untracked(action2) {
    var prev = untrackedStart();
    try {
      return action2();
    } finally {
      untrackedEnd(prev);
    }
  }
  function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
  }
  function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
  }
  function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
  }
  function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
  }
  function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_)
      return;
    derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
    var obs = derivation.observing_;
    var i3 = obs.length;
    while (i3--) {
      obs[i3].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  }
  var MobXGlobals = function MobXGlobals2() {
    this.version = 6;
    this.UNCHANGED = {};
    this.trackingDerivation = null;
    this.trackingContext = null;
    this.runId = 0;
    this.mobxGuid = 0;
    this.inBatch = 0;
    this.pendingUnobservations = [];
    this.pendingReactions = [];
    this.isRunningReactions = false;
    this.allowStateChanges = false;
    this.allowStateReads = true;
    this.enforceActions = true;
    this.spyListeners = [];
    this.globalReactionErrorHandlers = [];
    this.computedRequiresReaction = false;
    this.reactionRequiresObservable = false;
    this.observableRequiresReaction = false;
    this.disableErrorBoundaries = false;
    this.suppressReactionErrors = false;
    this.useProxies = true;
    this.verifyProxies = false;
    this.safeDescriptors = true;
  };
  var canMergeGlobalState = true;
  var isolateCalled = false;
  var globalState = /* @__PURE__ */ function() {
    var global2 = /* @__PURE__ */ getGlobal();
    if (global2.__mobxInstanceCount > 0 && !global2.__mobxGlobals)
      canMergeGlobalState = false;
    if (global2.__mobxGlobals && global2.__mobxGlobals.version !== new MobXGlobals().version)
      canMergeGlobalState = false;
    if (!canMergeGlobalState) {
      setTimeout(function() {
        if (!isolateCalled) {
          die(35);
        }
      }, 1);
      return new MobXGlobals();
    } else if (global2.__mobxGlobals) {
      global2.__mobxInstanceCount += 1;
      if (!global2.__mobxGlobals.UNCHANGED)
        global2.__mobxGlobals.UNCHANGED = {};
      return global2.__mobxGlobals;
    } else {
      global2.__mobxInstanceCount = 1;
      return global2.__mobxGlobals = /* @__PURE__ */ new MobXGlobals();
    }
  }();
  function getGlobalState() {
    return globalState;
  }
  function addObserver(observable2, node) {
    observable2.observers_.add(node);
    if (observable2.lowestObserverState_ > node.dependenciesState_)
      observable2.lowestObserverState_ = node.dependenciesState_;
  }
  function removeObserver(observable2, node) {
    observable2.observers_["delete"](node);
    if (observable2.observers_.size === 0) {
      queueForUnobservation(observable2);
    }
  }
  function queueForUnobservation(observable2) {
    if (observable2.isPendingUnobservation_ === false) {
      observable2.isPendingUnobservation_ = true;
      globalState.pendingUnobservations.push(observable2);
    }
  }
  function startBatch() {
    globalState.inBatch++;
  }
  function endBatch() {
    if (--globalState.inBatch === 0) {
      runReactions();
      var list = globalState.pendingUnobservations;
      for (var i3 = 0; i3 < list.length; i3++) {
        var observable2 = list[i3];
        observable2.isPendingUnobservation_ = false;
        if (observable2.observers_.size === 0) {
          if (observable2.isBeingObserved_) {
            observable2.isBeingObserved_ = false;
            observable2.onBUO();
          }
          if (observable2 instanceof ComputedValue) {
            observable2.suspend_();
          }
        }
      }
      globalState.pendingUnobservations = [];
    }
  }
  function reportObserved(observable2) {
    checkIfStateReadsAreAllowed(observable2);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
      if (derivation.runId_ !== observable2.lastAccessedBy_) {
        observable2.lastAccessedBy_ = derivation.runId_;
        derivation.newObserving_[derivation.unboundDepsCount_++] = observable2;
        if (!observable2.isBeingObserved_ && globalState.trackingContext) {
          observable2.isBeingObserved_ = true;
          observable2.onBO();
        }
      }
      return true;
    } else if (observable2.observers_.size === 0 && globalState.inBatch > 0) {
      queueForUnobservation(observable2);
    }
    return false;
  }
  function propagateChanged(observable2) {
    if (observable2.lowestObserverState_ === IDerivationState_.STALE_)
      return;
    observable2.lowestObserverState_ = IDerivationState_.STALE_;
    observable2.observers_.forEach(function(d2) {
      if (d2.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        if (d2.isTracing_ !== TraceMode.NONE) {
          logTraceInfo(d2, observable2);
        }
        d2.onBecomeStale_();
      }
      d2.dependenciesState_ = IDerivationState_.STALE_;
    });
  }
  function propagateChangeConfirmed(observable2) {
    if (observable2.lowestObserverState_ === IDerivationState_.STALE_)
      return;
    observable2.lowestObserverState_ = IDerivationState_.STALE_;
    observable2.observers_.forEach(function(d2) {
      if (d2.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
        d2.dependenciesState_ = IDerivationState_.STALE_;
        if (d2.isTracing_ !== TraceMode.NONE) {
          logTraceInfo(d2, observable2);
        }
      } else if (d2.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        observable2.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
      }
    });
  }
  function propagateMaybeChanged(observable2) {
    if (observable2.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_)
      return;
    observable2.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
    observable2.observers_.forEach(function(d2) {
      if (d2.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
        d2.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
        d2.onBecomeStale_();
      }
    });
  }
  function logTraceInfo(derivation, observable2) {
    console.log("[mobx.trace] '" + derivation.name_ + "' is invalidated due to a change in: '" + observable2.name_ + "'");
    if (derivation.isTracing_ === TraceMode.BREAK) {
      var lines = [];
      printDepTree(getDependencyTree(derivation), lines, 1);
      new Function("debugger;\n/*\nTracing '" + derivation.name_ + "'\n\nYou are entering this break point because derivation '" + derivation.name_ + "' is being traced and '" + observable2.name_ + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
  }
  function printDepTree(tree, lines, depth) {
    if (lines.length >= 1e3) {
      lines.push("(and many more)");
      return;
    }
    lines.push("" + "	".repeat(depth - 1) + tree.name);
    if (tree.dependencies)
      tree.dependencies.forEach(function(child) {
        return printDepTree(child, lines, depth + 1);
      });
  }
  var Reaction = /* @__PURE__ */ function() {
    function Reaction2(name_, onInvalidate_, errorHandler_, requiresObservable_) {
      if (name_ === void 0) {
        name_ = true ? "Reaction@" + getNextId() : "Reaction";
      }
      if (requiresObservable_ === void 0) {
        requiresObservable_ = false;
      }
      this.name_ = void 0;
      this.onInvalidate_ = void 0;
      this.errorHandler_ = void 0;
      this.requiresObservable_ = void 0;
      this.observing_ = [];
      this.newObserving_ = [];
      this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
      this.diffValue_ = 0;
      this.runId_ = 0;
      this.unboundDepsCount_ = 0;
      this.isDisposed_ = false;
      this.isScheduled_ = false;
      this.isTrackPending_ = false;
      this.isRunning_ = false;
      this.isTracing_ = TraceMode.NONE;
      this.name_ = name_;
      this.onInvalidate_ = onInvalidate_;
      this.errorHandler_ = errorHandler_;
      this.requiresObservable_ = requiresObservable_;
    }
    var _proto = Reaction2.prototype;
    _proto.onBecomeStale_ = function onBecomeStale_() {
      this.schedule_();
    };
    _proto.schedule_ = function schedule_() {
      if (!this.isScheduled_) {
        this.isScheduled_ = true;
        globalState.pendingReactions.push(this);
        runReactions();
      }
    };
    _proto.isScheduled = function isScheduled() {
      return this.isScheduled_;
    };
    _proto.runReaction_ = function runReaction_() {
      if (!this.isDisposed_) {
        startBatch();
        this.isScheduled_ = false;
        var prev = globalState.trackingContext;
        globalState.trackingContext = this;
        if (shouldCompute(this)) {
          this.isTrackPending_ = true;
          try {
            this.onInvalidate_();
            if (this.isTrackPending_ && isSpyEnabled()) {
              spyReport({
                name: this.name_,
                type: "scheduled-reaction"
              });
            }
          } catch (e5) {
            this.reportExceptionInDerivation_(e5);
          }
        }
        globalState.trackingContext = prev;
        endBatch();
      }
    };
    _proto.track = function track(fn) {
      if (this.isDisposed_) {
        return;
      }
      startBatch();
      var notify = isSpyEnabled();
      var startTime;
      if (notify) {
        startTime = Date.now();
        spyReportStart({
          name: this.name_,
          type: "reaction"
        });
      }
      this.isRunning_ = true;
      var prevReaction = globalState.trackingContext;
      globalState.trackingContext = this;
      var result = trackDerivedFunction(this, fn, void 0);
      globalState.trackingContext = prevReaction;
      this.isRunning_ = false;
      this.isTrackPending_ = false;
      if (this.isDisposed_) {
        clearObserving(this);
      }
      if (isCaughtException(result))
        this.reportExceptionInDerivation_(result.cause);
      if (notify) {
        spyReportEnd({
          time: Date.now() - startTime
        });
      }
      endBatch();
    };
    _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
      var _this = this;
      if (this.errorHandler_) {
        this.errorHandler_(error, this);
        return;
      }
      if (globalState.disableErrorBoundaries)
        throw error;
      var message = true ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
      if (!globalState.suppressReactionErrors) {
        console.error(message, error);
      } else if (true)
        console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)");
      if (isSpyEnabled()) {
        spyReport({
          type: "error",
          name: this.name_,
          message,
          error: "" + error
        });
      }
      globalState.globalReactionErrorHandlers.forEach(function(f2) {
        return f2(error, _this);
      });
    };
    _proto.dispose = function dispose() {
      if (!this.isDisposed_) {
        this.isDisposed_ = true;
        if (!this.isRunning_) {
          startBatch();
          clearObserving(this);
          endBatch();
        }
      }
    };
    _proto.getDisposer_ = function getDisposer_() {
      var r4 = this.dispose.bind(this);
      r4[$mobx] = this;
      return r4;
    };
    _proto.toString = function toString2() {
      return "Reaction[" + this.name_ + "]";
    };
    _proto.trace = function trace$1(enterBreakPoint) {
      if (enterBreakPoint === void 0) {
        enterBreakPoint = false;
      }
      trace(this, enterBreakPoint);
    };
    return Reaction2;
  }();
  var MAX_REACTION_ITERATIONS = 100;
  var reactionScheduler = function reactionScheduler2(f2) {
    return f2();
  };
  function runReactions() {
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
      return;
    reactionScheduler(runReactionsHelper);
  }
  function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    while (allReactions.length > 0) {
      if (++iterations === MAX_REACTION_ITERATIONS) {
        console.error(true ? "Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]) : "[mobx] cycle in reaction: " + allReactions[0]);
        allReactions.splice(0);
      }
      var remainingReactions = allReactions.splice(0);
      for (var i3 = 0, l3 = remainingReactions.length; i3 < l3; i3++) {
        remainingReactions[i3].runReaction_();
      }
    }
    globalState.isRunningReactions = false;
  }
  var isReaction = /* @__PURE__ */ createInstanceofPredicate("Reaction", Reaction);
  function isSpyEnabled() {
    return !!globalState.spyListeners.length;
  }
  function spyReport(event) {
    if (false)
      return;
    if (!globalState.spyListeners.length)
      return;
    var listeners = globalState.spyListeners;
    for (var i3 = 0, l3 = listeners.length; i3 < l3; i3++) {
      listeners[i3](event);
    }
  }
  function spyReportStart(event) {
    if (false)
      return;
    var change = _extends({}, event, {
      spyReportStart: true
    });
    spyReport(change);
  }
  var END_EVENT = {
    type: "report-end",
    spyReportEnd: true
  };
  function spyReportEnd(change) {
    if (false)
      return;
    if (change)
      spyReport(_extends({}, change, {
        type: "report-end",
        spyReportEnd: true
      }));
    else
      spyReport(END_EVENT);
  }
  function spy(listener) {
    if (false) {
      console.warn("[mobx.spy] Is a no-op in production builds");
      return function() {
      };
    } else {
      globalState.spyListeners.push(listener);
      return once(function() {
        globalState.spyListeners = globalState.spyListeners.filter(function(l3) {
          return l3 !== listener;
        });
      });
    }
  }
  var ACTION = "action";
  var ACTION_BOUND = "action.bound";
  var AUTOACTION = "autoAction";
  var AUTOACTION_BOUND = "autoAction.bound";
  var DEFAULT_ACTION_NAME = "<unnamed action>";
  var actionAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION);
  var actionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION_BOUND, {
    bound: true
  });
  var autoActionAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION, {
    autoAction: true
  });
  var autoActionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION_BOUND, {
    autoAction: true,
    bound: true
  });
  function createActionFactory(autoAction2) {
    var res = function action2(arg1, arg2) {
      if (isFunction(arg1))
        return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction2);
      if (isFunction(arg2))
        return createAction(arg1, arg2, autoAction2);
      if (isStringish(arg2)) {
        return storeAnnotation(arg1, arg2, autoAction2 ? autoActionAnnotation : actionAnnotation);
      }
      if (isStringish(arg1)) {
        return createDecoratorAnnotation(createActionAnnotation(autoAction2 ? AUTOACTION : ACTION, {
          name: arg1,
          autoAction: autoAction2
        }));
      }
      if (true)
        die("Invalid arguments for `action`");
    };
    return res;
  }
  var action = /* @__PURE__ */ createActionFactory(false);
  Object.assign(action, actionAnnotation);
  var autoAction = /* @__PURE__ */ createActionFactory(true);
  Object.assign(autoAction, autoActionAnnotation);
  action.bound = /* @__PURE__ */ createDecoratorAnnotation(actionBoundAnnotation);
  autoAction.bound = /* @__PURE__ */ createDecoratorAnnotation(autoActionBoundAnnotation);
  function runInAction(fn) {
    return executeAction(fn.name || DEFAULT_ACTION_NAME, false, fn, this, void 0);
  }
  function isAction(thing) {
    return isFunction(thing) && thing.isMobxAction === true;
  }
  function autorun(view, opts) {
    var _opts$name, _opts;
    if (opts === void 0) {
      opts = EMPTY_OBJECT;
    }
    if (true) {
      if (!isFunction(view))
        die("Autorun expects a function as first argument");
      if (isAction(view))
        die("Autorun does not accept actions since actions are untrackable");
    }
    var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : true ? view.name || "Autorun@" + getNextId() : "Autorun";
    var runSync = !opts.scheduler && !opts.delay;
    var reaction3;
    if (runSync) {
      reaction3 = new Reaction(name, function() {
        this.track(reactionRunner);
      }, opts.onError, opts.requiresObservable);
    } else {
      var scheduler = createSchedulerFromOptions(opts);
      var isScheduled = false;
      reaction3 = new Reaction(name, function() {
        if (!isScheduled) {
          isScheduled = true;
          scheduler(function() {
            isScheduled = false;
            if (!reaction3.isDisposed_)
              reaction3.track(reactionRunner);
          });
        }
      }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
      view(reaction3);
    }
    reaction3.schedule_();
    return reaction3.getDisposer_();
  }
  var run = function run2(f2) {
    return f2();
  };
  function createSchedulerFromOptions(opts) {
    return opts.scheduler ? opts.scheduler : opts.delay ? function(f2) {
      return setTimeout(f2, opts.delay);
    } : run;
  }
  function reaction(expression, effect, opts) {
    var _opts$name2;
    if (opts === void 0) {
      opts = EMPTY_OBJECT;
    }
    if (true) {
      if (!isFunction(expression) || !isFunction(effect))
        die("First and second argument to reaction should be functions");
      if (!isPlainObject(opts))
        die("Third argument of reactions should be an object");
    }
    var name = (_opts$name2 = opts.name) != null ? _opts$name2 : true ? "Reaction@" + getNextId() : "Reaction";
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var oldValue;
    var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer["default"];
    var r4 = new Reaction(name, function() {
      if (firstTime || runSync) {
        reactionRunner();
      } else if (!isScheduled) {
        isScheduled = true;
        scheduler(reactionRunner);
      }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
      isScheduled = false;
      if (r4.isDisposed_)
        return;
      var changed = false;
      r4.track(function() {
        var nextValue = allowStateChanges(false, function() {
          return expression(r4);
        });
        changed = firstTime || !equals(value, nextValue);
        oldValue = value;
        value = nextValue;
      });
      if (firstTime && opts.fireImmediately)
        effectAction(value, oldValue, r4);
      else if (!firstTime && changed)
        effectAction(value, oldValue, r4);
      firstTime = false;
    }
    r4.schedule_();
    return r4.getDisposer_();
  }
  function wrapErrorHandler(errorHandler, baseFn) {
    return function() {
      try {
        return baseFn.apply(this, arguments);
      } catch (e5) {
        errorHandler.call(this, e5);
      }
    };
  }
  var ON_BECOME_OBSERVED = "onBO";
  var ON_BECOME_UNOBSERVED = "onBUO";
  function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
  }
  function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
  }
  function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = isFunction(arg3) ? arg3 : arg2;
    var listenersKey = hook + "L";
    if (atom[listenersKey]) {
      atom[listenersKey].add(cb);
    } else {
      atom[listenersKey] = new Set([cb]);
    }
    return function() {
      var hookListeners = atom[listenersKey];
      if (hookListeners) {
        hookListeners["delete"](cb);
        if (hookListeners.size === 0) {
          delete atom[listenersKey];
        }
      }
    };
  }
  function extendObservable(target, properties, annotations, options) {
    if (true) {
      if (arguments.length > 4)
        die("'extendObservable' expected 2-4 arguments");
      if (typeof target !== "object")
        die("'extendObservable' expects an object as first argument");
      if (isObservableMap(target))
        die("'extendObservable' should not be used on maps, use map.merge instead");
      if (!isPlainObject(properties))
        die("'extendObservable' only accepts plain objects as second argument");
      if (isObservable(properties) || isObservable(annotations))
        die("Extending an object with another observable (object) is not supported");
    }
    var descriptors = getOwnPropertyDescriptors(properties);
    var adm = asObservableObject(target, options)[$mobx];
    startBatch();
    try {
      ownKeys(descriptors).forEach(function(key) {
        adm.extend_(key, descriptors[key], !annotations ? true : key in annotations ? annotations[key] : true);
      });
    } finally {
      endBatch();
    }
    return target;
  }
  function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
  }
  function nodeToDependencyTree(node) {
    var result = {
      name: node.name_
    };
    if (node.observing_ && node.observing_.length > 0)
      result.dependencies = unique(node.observing_).map(nodeToDependencyTree);
    return result;
  }
  function unique(list) {
    return Array.from(new Set(list));
  }
  var generatorId = 0;
  function FlowCancellationError() {
    this.message = "FLOW_CANCELLED";
  }
  FlowCancellationError.prototype = /* @__PURE__ */ Object.create(Error.prototype);
  var flowAnnotation = /* @__PURE__ */ createFlowAnnotation("flow");
  var flowBoundAnnotation = /* @__PURE__ */ createFlowAnnotation("flow.bound", {
    bound: true
  });
  var flow = /* @__PURE__ */ Object.assign(function flow2(arg1, arg2) {
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, flowAnnotation);
    }
    if (arguments.length !== 1)
      die("Flow expects single argument with generator function");
    var generator = arg1;
    var name = generator.name || "<unnamed flow>";
    var res = function res2() {
      var ctx = this;
      var args = arguments;
      var runId = ++generatorId;
      var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
      var rejector;
      var pendingPromise = void 0;
      var promise = new Promise(function(resolve, reject) {
        var stepId = 0;
        rejector = reject;
        function onFulfilled(res3) {
          pendingPromise = void 0;
          var ret;
          try {
            ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res3);
          } catch (e5) {
            return reject(e5);
          }
          next(ret);
        }
        function onRejected(err) {
          pendingPromise = void 0;
          var ret;
          try {
            ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
          } catch (e5) {
            return reject(e5);
          }
          next(ret);
        }
        function next(ret) {
          if (isFunction(ret == null ? void 0 : ret.then)) {
            ret.then(next, reject);
            return;
          }
          if (ret.done)
            return resolve(ret.value);
          pendingPromise = Promise.resolve(ret.value);
          return pendingPromise.then(onFulfilled, onRejected);
        }
        onFulfilled(void 0);
      });
      promise.cancel = action(name + " - runid: " + runId + " - cancel", function() {
        try {
          if (pendingPromise)
            cancelPromise(pendingPromise);
          var _res = gen["return"](void 0);
          var yieldedPromise = Promise.resolve(_res.value);
          yieldedPromise.then(noop, noop);
          cancelPromise(yieldedPromise);
          rejector(new FlowCancellationError());
        } catch (e5) {
          rejector(e5);
        }
      });
      return promise;
    };
    res.isMobXFlow = true;
    return res;
  }, flowAnnotation);
  flow.bound = /* @__PURE__ */ createDecoratorAnnotation(flowBoundAnnotation);
  function cancelPromise(promise) {
    if (isFunction(promise.cancel))
      promise.cancel();
  }
  function isFlow(fn) {
    return (fn == null ? void 0 : fn.isMobXFlow) === true;
  }
  function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
      target = getAdministration(thing);
    } else if (isObservableObject(thing)) {
      if (!isStringish(propOrHandler))
        return die("InterceptReads can only be used with a specific property, not with an object in general");
      target = getAdministration(thing, propOrHandler);
    } else if (true) {
      return die("Expected observable map, object or array as first array");
    }
    if (target.dehancer !== void 0)
      return die("An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function() {
      target.dehancer = void 0;
    };
  }
  function intercept(thing, propOrHandler, handler) {
    if (isFunction(handler))
      return interceptProperty(thing, propOrHandler, handler);
    else
      return interceptInterceptable(thing, propOrHandler);
  }
  function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept_(handler);
  }
  function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept_(handler);
  }
  function _isObservable(value, property) {
    if (!value)
      return false;
    if (property !== void 0) {
      if (isObservableMap(value) || isObservableArray(value))
        return die("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
      if (isObservableObject(value)) {
        return value[$mobx].values_.has(property);
      }
      return false;
    }
    return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
  }
  function isObservable(value) {
    if (arguments.length !== 1)
      die("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
  }
  function keys(obj) {
    if (isObservableObject(obj)) {
      return obj[$mobx].keys_();
    }
    if (isObservableMap(obj) || isObservableSet(obj)) {
      return Array.from(obj.keys());
    }
    if (isObservableArray(obj)) {
      return obj.map(function(_15, index) {
        return index;
      });
    }
    die(5);
  }
  function values(obj) {
    if (isObservableObject(obj)) {
      return keys(obj).map(function(key) {
        return obj[key];
      });
    }
    if (isObservableMap(obj)) {
      return keys(obj).map(function(key) {
        return obj.get(key);
      });
    }
    if (isObservableSet(obj)) {
      return Array.from(obj.values());
    }
    if (isObservableArray(obj)) {
      return obj.slice();
    }
    die(6);
  }
  function entries(obj) {
    if (isObservableObject(obj)) {
      return keys(obj).map(function(key) {
        return [key, obj[key]];
      });
    }
    if (isObservableMap(obj)) {
      return keys(obj).map(function(key) {
        return [key, obj.get(key)];
      });
    }
    if (isObservableSet(obj)) {
      return Array.from(obj.entries());
    }
    if (isObservableArray(obj)) {
      return obj.map(function(key, index) {
        return [index, key];
      });
    }
    die(7);
  }
  function set2(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
      startBatch();
      var _values = key;
      try {
        for (var _key in _values) {
          set2(obj, _key, _values[_key]);
        }
      } finally {
        endBatch();
      }
      return;
    }
    if (isObservableObject(obj)) {
      obj[$mobx].set_(key, value);
    } else if (isObservableMap(obj)) {
      obj.set(key, value);
    } else if (isObservableSet(obj)) {
      obj.add(key);
    } else if (isObservableArray(obj)) {
      if (typeof key !== "number")
        key = parseInt(key, 10);
      if (key < 0)
        die("Invalid index: '" + key + "'");
      startBatch();
      if (key >= obj.length)
        obj.length = key + 1;
      obj[key] = value;
      endBatch();
    } else
      die(8);
  }
  function apiDefineProperty(obj, key, descriptor) {
    if (isObservableObject(obj)) {
      return obj[$mobx].defineProperty_(key, descriptor);
    }
    die(39);
  }
  function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (isFunction(cbOrFire))
      return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
      return observeObservable(thing, propOrCb, cbOrFire);
  }
  function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe_(listener, fireImmediately);
  }
  function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe_(listener, fireImmediately);
  }
  function trace() {
    if (false)
      die("trace() is not available in production builds");
    var enterBreakPoint = false;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (typeof args[args.length - 1] === "boolean")
      enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
      return die("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing_ === TraceMode.NONE) {
      console.log("[mobx.trace] '" + derivation.name_ + "' tracing enabled");
    }
    derivation.isTracing_ = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
  }
  function getAtomFromArgs(args) {
    switch (args.length) {
      case 0:
        return globalState.trackingDerivation;
      case 1:
        return getAtom(args[0]);
      case 2:
        return getAtom(args[0], args[1]);
    }
  }
  function transaction(action2, thisArg) {
    if (thisArg === void 0) {
      thisArg = void 0;
    }
    startBatch();
    try {
      return action2.apply(thisArg);
    } finally {
      endBatch();
    }
  }
  function getAdm(target) {
    return target[$mobx];
  }
  var objectProxyTraps = {
    has: function has(target, name) {
      if (globalState.trackingDerivation)
        warnAboutProxyRequirement("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead.");
      return getAdm(target).has_(name);
    },
    get: function get(target, name) {
      return getAdm(target).get_(name);
    },
    set: function set3(target, name, value) {
      var _getAdm$set_;
      if (!isStringish(name))
        return false;
      if (!getAdm(target).values_.has(name)) {
        warnAboutProxyRequirement("add a new observable property through direct assignment. Use 'set' from 'mobx' instead.");
      }
      return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
    },
    deleteProperty: function deleteProperty(target, name) {
      var _getAdm$delete_;
      if (true) {
        warnAboutProxyRequirement("delete properties from an observable object. Use 'remove' from 'mobx' instead.");
      }
      if (!isStringish(name))
        return false;
      return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
    },
    defineProperty: function defineProperty2(target, name, descriptor) {
      var _getAdm$definePropert;
      if (true) {
        warnAboutProxyRequirement("define property on an observable object. Use 'defineProperty' from 'mobx' instead.");
      }
      return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
    },
    ownKeys: function ownKeys2(target) {
      if (globalState.trackingDerivation)
        warnAboutProxyRequirement("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead.");
      return getAdm(target).ownKeys_();
    },
    preventExtensions: function preventExtensions(target) {
      die(13);
    }
  };
  function asDynamicObservableObject(target, options) {
    var _target$$mobx, _target$$mobx$proxy_;
    assertProxies();
    target = asObservableObject(target, options);
    return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
  }
  function hasInterceptors(interceptable) {
    return interceptable.interceptors_ !== void 0 && interceptable.interceptors_.length > 0;
  }
  function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
    interceptors.push(handler);
    return once(function() {
      var idx = interceptors.indexOf(handler);
      if (idx !== -1)
        interceptors.splice(idx, 1);
    });
  }
  function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
      var interceptors = [].concat(interceptable.interceptors_ || []);
      for (var i3 = 0, l3 = interceptors.length; i3 < l3; i3++) {
        change = interceptors[i3](change);
        if (change && !change.type)
          die(14);
        if (!change)
          break;
      }
      return change;
    } finally {
      untrackedEnd(prevU);
    }
  }
  function hasListeners(listenable) {
    return listenable.changeListeners_ !== void 0 && listenable.changeListeners_.length > 0;
  }
  function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
    listeners.push(handler);
    return once(function() {
      var idx = listeners.indexOf(handler);
      if (idx !== -1)
        listeners.splice(idx, 1);
    });
  }
  function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners_;
    if (!listeners)
      return;
    listeners = listeners.slice();
    for (var i3 = 0, l3 = listeners.length; i3 < l3; i3++) {
      listeners[i3](change);
    }
    untrackedEnd(prevU);
  }
  function makeObservable(target, annotations, options) {
    var adm = asObservableObject(target, options)[$mobx];
    startBatch();
    try {
      var _annotations;
      if (annotations && target[storedAnnotationsSymbol]) {
        die("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported.");
      }
      (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target);
      ownKeys(annotations).forEach(function(key) {
        return adm.make_(key, annotations[key]);
      });
    } finally {
      endBatch();
    }
    return target;
  }
  var SPLICE = "splice";
  var UPDATE = "update";
  var MAX_SPLICE_SIZE = 1e4;
  var arrayTraps = {
    get: function get2(target, name) {
      var adm = target[$mobx];
      if (name === $mobx)
        return adm;
      if (name === "length")
        return adm.getArrayLength_();
      if (typeof name === "string" && !isNaN(name)) {
        return adm.get_(parseInt(name));
      }
      if (hasProp(arrayExtensions, name)) {
        return arrayExtensions[name];
      }
      return target[name];
    },
    set: function set4(target, name, value) {
      var adm = target[$mobx];
      if (name === "length") {
        adm.setArrayLength_(value);
      }
      if (typeof name === "symbol" || isNaN(name)) {
        target[name] = value;
      } else {
        adm.set_(parseInt(name), value);
      }
      return true;
    },
    preventExtensions: function preventExtensions2() {
      die(15);
    }
  };
  var ObservableArrayAdministration = /* @__PURE__ */ function() {
    function ObservableArrayAdministration2(name, enhancer, owned_, legacyMode_) {
      if (name === void 0) {
        name = true ? "ObservableArray@" + getNextId() : "ObservableArray";
      }
      this.owned_ = void 0;
      this.legacyMode_ = void 0;
      this.atom_ = void 0;
      this.values_ = [];
      this.interceptors_ = void 0;
      this.changeListeners_ = void 0;
      this.enhancer_ = void 0;
      this.dehancer = void 0;
      this.proxy_ = void 0;
      this.lastKnownLength_ = 0;
      this.owned_ = owned_;
      this.legacyMode_ = legacyMode_;
      this.atom_ = new Atom(name);
      this.enhancer_ = function(newV, oldV) {
        return enhancer(newV, oldV, true ? name + "[..]" : "ObservableArray[..]");
      };
    }
    var _proto = ObservableArrayAdministration2.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== void 0)
        return this.dehancer(value);
      return value;
    };
    _proto.dehanceValues_ = function dehanceValues_(values2) {
      if (this.dehancer !== void 0 && values2.length > 0)
        return values2.map(this.dehancer);
      return values2;
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately === void 0) {
        fireImmediately = false;
      }
      if (fireImmediately) {
        listener({
          observableKind: "array",
          object: this.proxy_,
          debugObjectName: this.atom_.name_,
          type: "splice",
          index: 0,
          added: this.values_.slice(),
          addedCount: this.values_.length,
          removed: [],
          removedCount: 0
        });
      }
      return registerListener(this, listener);
    };
    _proto.getArrayLength_ = function getArrayLength_() {
      this.atom_.reportObserved();
      return this.values_.length;
    };
    _proto.setArrayLength_ = function setArrayLength_(newLength) {
      if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0)
        die("Out of range: " + newLength);
      var currentLength = this.values_.length;
      if (newLength === currentLength)
        return;
      else if (newLength > currentLength) {
        var newItems = new Array(newLength - currentLength);
        for (var i3 = 0; i3 < newLength - currentLength; i3++) {
          newItems[i3] = void 0;
        }
        this.spliceWithArray_(currentLength, 0, newItems);
      } else
        this.spliceWithArray_(newLength, currentLength - newLength);
    };
    _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
      if (oldLength !== this.lastKnownLength_)
        die(16);
      this.lastKnownLength_ += delta;
      if (this.legacyMode_ && delta > 0)
        reserveArrayBuffer(oldLength + delta + 1);
    };
    _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
      var _this = this;
      checkIfStateModificationsAreAllowed(this.atom_);
      var length = this.values_.length;
      if (index === void 0)
        index = 0;
      else if (index > length)
        index = length;
      else if (index < 0)
        index = Math.max(0, length + index);
      if (arguments.length === 1)
        deleteCount = length - index;
      else if (deleteCount === void 0 || deleteCount === null)
        deleteCount = 0;
      else
        deleteCount = Math.max(0, Math.min(deleteCount, length - index));
      if (newItems === void 0)
        newItems = EMPTY_ARRAY;
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_,
          type: SPLICE,
          index,
          removedCount: deleteCount,
          added: newItems
        });
        if (!change)
          return EMPTY_ARRAY;
        deleteCount = change.removedCount;
        newItems = change.added;
      }
      newItems = newItems.length === 0 ? newItems : newItems.map(function(v2) {
        return _this.enhancer_(v2, void 0);
      });
      if (this.legacyMode_ || true) {
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength_(length, lengthDelta);
      }
      var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
      if (deleteCount !== 0 || newItems.length !== 0)
        this.notifyArraySplice_(index, newItems, res);
      return this.dehanceValues_(res);
    };
    _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
      if (newItems.length < MAX_SPLICE_SIZE) {
        var _this$values_;
        return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
      } else {
        var res = this.values_.slice(index, index + deleteCount);
        var oldItems = this.values_.slice(index + deleteCount);
        this.values_.length = index + newItems.length - deleteCount;
        for (var i3 = 0; i3 < newItems.length; i3++) {
          this.values_[index + i3] = newItems[i3];
        }
        for (var _i = 0; _i < oldItems.length; _i++) {
          this.values_[index + newItems.length + _i] = oldItems[_i];
        }
        return res;
      }
    };
    _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
      var notifySpy = !this.owned_ && isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "array",
        object: this.proxy_,
        type: UPDATE,
        debugObjectName: this.atom_.name_,
        index,
        newValue,
        oldValue
      } : null;
      if (notifySpy)
        spyReportStart(change);
      this.atom_.reportChanged();
      if (notify)
        notifyListeners(this, change);
      if (notifySpy)
        spyReportEnd();
    };
    _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
      var notifySpy = !this.owned_ && isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: SPLICE,
        index,
        removed,
        added,
        removedCount: removed.length,
        addedCount: added.length
      } : null;
      if (notifySpy)
        spyReportStart(change);
      this.atom_.reportChanged();
      if (notify)
        notifyListeners(this, change);
      if (notifySpy)
        spyReportEnd();
    };
    _proto.get_ = function get_(index) {
      if (index < this.values_.length) {
        this.atom_.reportObserved();
        return this.dehanceValue_(this.values_[index]);
      }
      console.warn(true ? "[mobx] Out of bounds read: " + index : "[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
    };
    _proto.set_ = function set_(index, newValue) {
      var values2 = this.values_;
      if (index < values2.length) {
        checkIfStateModificationsAreAllowed(this.atom_);
        var oldValue = values2[index];
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            type: UPDATE,
            object: this.proxy_,
            index,
            newValue
          });
          if (!change)
            return;
          newValue = change.newValue;
        }
        newValue = this.enhancer_(newValue, oldValue);
        var changed = newValue !== oldValue;
        if (changed) {
          values2[index] = newValue;
          this.notifyArrayChildUpdate_(index, newValue, oldValue);
        }
      } else if (index === values2.length) {
        this.spliceWithArray_(index, 0, [newValue]);
      } else {
        die(17, index, values2.length);
      }
    };
    return ObservableArrayAdministration2;
  }();
  function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
      name = true ? "ObservableArray@" + getNextId() : "ObservableArray";
    }
    if (owned === void 0) {
      owned = false;
    }
    assertProxies();
    var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
    addHiddenFinalProp(adm.values_, $mobx, adm);
    var proxy = new Proxy(adm.values_, arrayTraps);
    adm.proxy_ = proxy;
    if (initialValues && initialValues.length) {
      var prev = allowStateChangesStart(true);
      adm.spliceWithArray_(0, 0, initialValues);
      allowStateChangesEnd(prev);
    }
    return proxy;
  }
  var arrayExtensions = {
    clear: function clear() {
      return this.splice(0);
    },
    replace: function replace(newItems) {
      var adm = this[$mobx];
      return adm.spliceWithArray_(0, adm.values_.length, newItems);
    },
    toJSON: function toJSON() {
      return this.slice();
    },
    splice: function splice(index, deleteCount) {
      for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        newItems[_key - 2] = arguments[_key];
      }
      var adm = this[$mobx];
      switch (arguments.length) {
        case 0:
          return [];
        case 1:
          return adm.spliceWithArray_(index);
        case 2:
          return adm.spliceWithArray_(index, deleteCount);
      }
      return adm.spliceWithArray_(index, deleteCount, newItems);
    },
    spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
      return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
    },
    push: function push() {
      var adm = this[$mobx];
      for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        items[_key2] = arguments[_key2];
      }
      adm.spliceWithArray_(adm.values_.length, 0, items);
      return adm.values_.length;
    },
    pop: function pop() {
      return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
    },
    shift: function shift() {
      return this.splice(0, 1)[0];
    },
    unshift: function unshift() {
      var adm = this[$mobx];
      for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        items[_key3] = arguments[_key3];
      }
      adm.spliceWithArray_(0, 0, items);
      return adm.values_.length;
    },
    reverse: function reverse() {
      if (globalState.trackingDerivation) {
        die(37, "reverse");
      }
      this.replace(this.slice().reverse());
      return this;
    },
    sort: function sort() {
      if (globalState.trackingDerivation) {
        die(37, "sort");
      }
      var copy = this.slice();
      copy.sort.apply(copy, arguments);
      this.replace(copy);
      return this;
    },
    remove: function remove(value) {
      var adm = this[$mobx];
      var idx = adm.dehanceValues_(adm.values_).indexOf(value);
      if (idx > -1) {
        this.splice(idx, 1);
        return true;
      }
      return false;
    }
  };
  addArrayExtension("concat", simpleFunc);
  addArrayExtension("flat", simpleFunc);
  addArrayExtension("includes", simpleFunc);
  addArrayExtension("indexOf", simpleFunc);
  addArrayExtension("join", simpleFunc);
  addArrayExtension("lastIndexOf", simpleFunc);
  addArrayExtension("slice", simpleFunc);
  addArrayExtension("toString", simpleFunc);
  addArrayExtension("toLocaleString", simpleFunc);
  addArrayExtension("every", mapLikeFunc);
  addArrayExtension("filter", mapLikeFunc);
  addArrayExtension("find", mapLikeFunc);
  addArrayExtension("findIndex", mapLikeFunc);
  addArrayExtension("flatMap", mapLikeFunc);
  addArrayExtension("forEach", mapLikeFunc);
  addArrayExtension("map", mapLikeFunc);
  addArrayExtension("some", mapLikeFunc);
  addArrayExtension("reduce", reduceLikeFunc);
  addArrayExtension("reduceRight", reduceLikeFunc);
  function addArrayExtension(funcName, funcFactory) {
    if (typeof Array.prototype[funcName] === "function") {
      arrayExtensions[funcName] = funcFactory(funcName);
    }
  }
  function simpleFunc(funcName) {
    return function() {
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
  }
  function mapLikeFunc(funcName) {
    return function(callback, thisArg) {
      var _this2 = this;
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      return dehancedValues[funcName](function(element, index) {
        return callback.call(thisArg, element, index, _this2);
      });
    };
  }
  function reduceLikeFunc(funcName) {
    return function() {
      var _this3 = this;
      var adm = this[$mobx];
      adm.atom_.reportObserved();
      var dehancedValues = adm.dehanceValues_(adm.values_);
      var callback = arguments[0];
      arguments[0] = function(accumulator, currentValue, index) {
        return callback(accumulator, currentValue, index, _this3);
      };
      return dehancedValues[funcName].apply(dehancedValues, arguments);
    };
  }
  var isObservableArrayAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
  function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
  }
  var _Symbol$iterator;
  var _Symbol$toStringTag;
  var ObservableMapMarker = {};
  var ADD = "add";
  var DELETE = "delete";
  _Symbol$iterator = Symbol.iterator;
  _Symbol$toStringTag = Symbol.toStringTag;
  var ObservableMap = /* @__PURE__ */ function() {
    function ObservableMap2(initialData, enhancer_, name_) {
      if (enhancer_ === void 0) {
        enhancer_ = deepEnhancer;
      }
      if (name_ === void 0) {
        name_ = true ? "ObservableMap@" + getNextId() : "ObservableMap";
      }
      this.enhancer_ = void 0;
      this.name_ = void 0;
      this[$mobx] = ObservableMapMarker;
      this.data_ = void 0;
      this.hasMap_ = void 0;
      this.keysAtom_ = void 0;
      this.interceptors_ = void 0;
      this.changeListeners_ = void 0;
      this.dehancer = void 0;
      this.enhancer_ = enhancer_;
      this.name_ = name_;
      if (!isFunction(Map)) {
        die(18);
      }
      this.keysAtom_ = createAtom(true ? this.name_ + ".keys()" : "ObservableMap.keys()");
      this.data_ = new Map();
      this.hasMap_ = new Map();
      this.merge(initialData);
    }
    var _proto = ObservableMap2.prototype;
    _proto.has_ = function has_(key) {
      return this.data_.has(key);
    };
    _proto.has = function has2(key) {
      var _this = this;
      if (!globalState.trackingDerivation)
        return this.has_(key);
      var entry = this.hasMap_.get(key);
      if (!entry) {
        var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, true ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableMap.key?", false);
        this.hasMap_.set(key, newEntry);
        onBecomeUnobserved(newEntry, function() {
          return _this.hasMap_["delete"](key);
        });
      }
      return entry.get();
    };
    _proto.set = function set5(key, value) {
      var hasKey = this.has_(key);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: hasKey ? UPDATE : ADD,
          object: this,
          newValue: value,
          name: key
        });
        if (!change)
          return this;
        value = change.newValue;
      }
      if (hasKey) {
        this.updateValue_(key, value);
      } else {
        this.addValue_(key, value);
      }
      return this;
    };
    _proto["delete"] = function _delete(key) {
      var _this2 = this;
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: DELETE,
          object: this,
          name: key
        });
        if (!change)
          return false;
      }
      if (this.has_(key)) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var _change = notify || notifySpy ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: DELETE,
          object: this,
          oldValue: this.data_.get(key).value_,
          name: key
        } : null;
        if (notifySpy)
          spyReportStart(_change);
        transaction(function() {
          var _this2$hasMap_$get;
          _this2.keysAtom_.reportChanged();
          (_this2$hasMap_$get = _this2.hasMap_.get(key)) == null ? void 0 : _this2$hasMap_$get.setNewValue_(false);
          var observable2 = _this2.data_.get(key);
          observable2.setNewValue_(void 0);
          _this2.data_["delete"](key);
        });
        if (notify)
          notifyListeners(this, _change);
        if (notifySpy)
          spyReportEnd();
        return true;
      }
      return false;
    };
    _proto.updateValue_ = function updateValue_(key, newValue) {
      var observable2 = this.data_.get(key);
      newValue = observable2.prepareNewValue_(newValue);
      if (newValue !== globalState.UNCHANGED) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
          observableKind: "map",
          debugObjectName: this.name_,
          type: UPDATE,
          object: this,
          oldValue: observable2.value_,
          name: key,
          newValue
        } : null;
        if (notifySpy)
          spyReportStart(change);
        observable2.setNewValue_(newValue);
        if (notify)
          notifyListeners(this, change);
        if (notifySpy)
          spyReportEnd();
      }
    };
    _proto.addValue_ = function addValue_(key, newValue) {
      var _this3 = this;
      checkIfStateModificationsAreAllowed(this.keysAtom_);
      transaction(function() {
        var _this3$hasMap_$get;
        var observable2 = new ObservableValue(newValue, _this3.enhancer_, true ? _this3.name_ + "." + stringifyKey(key) : "ObservableMap.key", false);
        _this3.data_.set(key, observable2);
        newValue = observable2.value_;
        (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null ? void 0 : _this3$hasMap_$get.setNewValue_(true);
        _this3.keysAtom_.reportChanged();
      });
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        name: key,
        newValue
      } : null;
      if (notifySpy)
        spyReportStart(change);
      if (notify)
        notifyListeners(this, change);
      if (notifySpy)
        spyReportEnd();
    };
    _proto.get = function get3(key) {
      if (this.has(key))
        return this.dehanceValue_(this.data_.get(key).get());
      return this.dehanceValue_(void 0);
    };
    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== void 0) {
        return this.dehancer(value);
      }
      return value;
    };
    _proto.keys = function keys2() {
      this.keysAtom_.reportObserved();
      return this.data_.keys();
    };
    _proto.values = function values2() {
      var self2 = this;
      var keys2 = this.keys();
      return makeIterable({
        next: function next() {
          var _keys$next = keys2.next(), done = _keys$next.done, value = _keys$next.value;
          return {
            done,
            value: done ? void 0 : self2.get(value)
          };
        }
      });
    };
    _proto.entries = function entries2() {
      var self2 = this;
      var keys2 = this.keys();
      return makeIterable({
        next: function next() {
          var _keys$next2 = keys2.next(), done = _keys$next2.done, value = _keys$next2.value;
          return {
            done,
            value: done ? void 0 : [value, self2.get(value)]
          };
        }
      });
    };
    _proto[_Symbol$iterator] = function() {
      return this.entries();
    };
    _proto.forEach = function forEach(callback, thisArg) {
      for (var _iterator = _createForOfIteratorHelperLoose(this), _step; !(_step = _iterator()).done; ) {
        var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
        callback.call(thisArg, value, key, this);
      }
    };
    _proto.merge = function merge(other) {
      var _this4 = this;
      if (isObservableMap(other)) {
        other = new Map(other);
      }
      transaction(function() {
        if (isPlainObject(other))
          getPlainObjectKeys(other).forEach(function(key) {
            return _this4.set(key, other[key]);
          });
        else if (Array.isArray(other))
          other.forEach(function(_ref) {
            var key = _ref[0], value = _ref[1];
            return _this4.set(key, value);
          });
        else if (isES6Map(other)) {
          if (other.constructor !== Map)
            die(19, other);
          other.forEach(function(value, key) {
            return _this4.set(key, value);
          });
        } else if (other !== null && other !== void 0)
          die(20, other);
      });
      return this;
    };
    _proto.clear = function clear2() {
      var _this5 = this;
      transaction(function() {
        untracked(function() {
          for (var _iterator2 = _createForOfIteratorHelperLoose(_this5.keys()), _step2; !(_step2 = _iterator2()).done; ) {
            var key = _step2.value;
            _this5["delete"](key);
          }
        });
      });
    };
    _proto.replace = function replace2(values2) {
      var _this6 = this;
      transaction(function() {
        var replacementMap = convertToMap(values2);
        var orderedData = new Map();
        var keysReportChangedCalled = false;
        for (var _iterator3 = _createForOfIteratorHelperLoose(_this6.data_.keys()), _step3; !(_step3 = _iterator3()).done; ) {
          var key = _step3.value;
          if (!replacementMap.has(key)) {
            var deleted = _this6["delete"](key);
            if (deleted) {
              keysReportChangedCalled = true;
            } else {
              var value = _this6.data_.get(key);
              orderedData.set(key, value);
            }
          }
        }
        for (var _iterator4 = _createForOfIteratorHelperLoose(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done; ) {
          var _step4$value = _step4.value, _key = _step4$value[0], _value = _step4$value[1];
          var keyExisted = _this6.data_.has(_key);
          _this6.set(_key, _value);
          if (_this6.data_.has(_key)) {
            var _value2 = _this6.data_.get(_key);
            orderedData.set(_key, _value2);
            if (!keyExisted) {
              keysReportChangedCalled = true;
            }
          }
        }
        if (!keysReportChangedCalled) {
          if (_this6.data_.size !== orderedData.size) {
            _this6.keysAtom_.reportChanged();
          } else {
            var iter1 = _this6.data_.keys();
            var iter2 = orderedData.keys();
            var next1 = iter1.next();
            var next2 = iter2.next();
            while (!next1.done) {
              if (next1.value !== next2.value) {
                _this6.keysAtom_.reportChanged();
                break;
              }
              next1 = iter1.next();
              next2 = iter2.next();
            }
          }
        }
        _this6.data_ = orderedData;
      });
      return this;
    };
    _proto.toString = function toString2() {
      return "[object ObservableMap]";
    };
    _proto.toJSON = function toJSON3() {
      return Array.from(this);
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately === true)
        die("`observe` doesn't support fireImmediately=true in combination with maps.");
      return registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _createClass(ObservableMap2, [{
      key: "size",
      get: function get3() {
        this.keysAtom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: _Symbol$toStringTag,
      get: function get3() {
        return "Map";
      }
    }]);
    return ObservableMap2;
  }();
  var isObservableMap = /* @__PURE__ */ createInstanceofPredicate("ObservableMap", ObservableMap);
  function convertToMap(dataStructure) {
    if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
      return dataStructure;
    } else if (Array.isArray(dataStructure)) {
      return new Map(dataStructure);
    } else if (isPlainObject(dataStructure)) {
      var map3 = new Map();
      for (var key in dataStructure) {
        map3.set(key, dataStructure[key]);
      }
      return map3;
    } else {
      return die(21, dataStructure);
    }
  }
  var _Symbol$iterator$1;
  var _Symbol$toStringTag$1;
  var ObservableSetMarker = {};
  _Symbol$iterator$1 = Symbol.iterator;
  _Symbol$toStringTag$1 = Symbol.toStringTag;
  var ObservableSet = /* @__PURE__ */ function() {
    function ObservableSet2(initialData, enhancer, name_) {
      if (enhancer === void 0) {
        enhancer = deepEnhancer;
      }
      if (name_ === void 0) {
        name_ = true ? "ObservableSet@" + getNextId() : "ObservableSet";
      }
      this.name_ = void 0;
      this[$mobx] = ObservableSetMarker;
      this.data_ = new Set();
      this.atom_ = void 0;
      this.changeListeners_ = void 0;
      this.interceptors_ = void 0;
      this.dehancer = void 0;
      this.enhancer_ = void 0;
      this.name_ = name_;
      if (!isFunction(Set)) {
        die(22);
      }
      this.atom_ = createAtom(this.name_);
      this.enhancer_ = function(newV, oldV) {
        return enhancer(newV, oldV, name_);
      };
      if (initialData) {
        this.replace(initialData);
      }
    }
    var _proto = ObservableSet2.prototype;
    _proto.dehanceValue_ = function dehanceValue_(value) {
      if (this.dehancer !== void 0) {
        return this.dehancer(value);
      }
      return value;
    };
    _proto.clear = function clear2() {
      var _this = this;
      transaction(function() {
        untracked(function() {
          for (var _iterator = _createForOfIteratorHelperLoose(_this.data_.values()), _step; !(_step = _iterator()).done; ) {
            var value = _step.value;
            _this["delete"](value);
          }
        });
      });
    };
    _proto.forEach = function forEach(callbackFn, thisArg) {
      for (var _iterator2 = _createForOfIteratorHelperLoose(this), _step2; !(_step2 = _iterator2()).done; ) {
        var value = _step2.value;
        callbackFn.call(thisArg, value, value, this);
      }
    };
    _proto.add = function add(value) {
      var _this2 = this;
      checkIfStateModificationsAreAllowed(this.atom_);
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: ADD,
          object: this,
          newValue: value
        });
        if (!change)
          return this;
      }
      if (!this.has(value)) {
        transaction(function() {
          _this2.data_.add(_this2.enhancer_(value, void 0));
          _this2.atom_.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var _change = notify || notifySpy ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: ADD,
          object: this,
          newValue: value
        } : null;
        if (notifySpy && true)
          spyReportStart(_change);
        if (notify)
          notifyListeners(this, _change);
        if (notifySpy && true)
          spyReportEnd();
      }
      return this;
    };
    _proto["delete"] = function _delete(value) {
      var _this3 = this;
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: DELETE,
          object: this,
          oldValue: value
        });
        if (!change)
          return false;
      }
      if (this.has(value)) {
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var _change2 = notify || notifySpy ? {
          observableKind: "set",
          debugObjectName: this.name_,
          type: DELETE,
          object: this,
          oldValue: value
        } : null;
        if (notifySpy && true)
          spyReportStart(_change2);
        transaction(function() {
          _this3.atom_.reportChanged();
          _this3.data_["delete"](value);
        });
        if (notify)
          notifyListeners(this, _change2);
        if (notifySpy && true)
          spyReportEnd();
        return true;
      }
      return false;
    };
    _proto.has = function has2(value) {
      this.atom_.reportObserved();
      return this.data_.has(this.dehanceValue_(value));
    };
    _proto.entries = function entries2() {
      var nextIndex = 0;
      var keys2 = Array.from(this.keys());
      var values2 = Array.from(this.values());
      return makeIterable({
        next: function next() {
          var index = nextIndex;
          nextIndex += 1;
          return index < values2.length ? {
            value: [keys2[index], values2[index]],
            done: false
          } : {
            done: true
          };
        }
      });
    };
    _proto.keys = function keys2() {
      return this.values();
    };
    _proto.values = function values2() {
      this.atom_.reportObserved();
      var self2 = this;
      var nextIndex = 0;
      var observableValues = Array.from(this.data_.values());
      return makeIterable({
        next: function next() {
          return nextIndex < observableValues.length ? {
            value: self2.dehanceValue_(observableValues[nextIndex++]),
            done: false
          } : {
            done: true
          };
        }
      });
    };
    _proto.replace = function replace2(other) {
      var _this4 = this;
      if (isObservableSet(other)) {
        other = new Set(other);
      }
      transaction(function() {
        if (Array.isArray(other)) {
          _this4.clear();
          other.forEach(function(value) {
            return _this4.add(value);
          });
        } else if (isES6Set(other)) {
          _this4.clear();
          other.forEach(function(value) {
            return _this4.add(value);
          });
        } else if (other !== null && other !== void 0) {
          die("Cannot initialize set from " + other);
        }
      });
      return this;
    };
    _proto.observe_ = function observe_(listener, fireImmediately) {
      if (fireImmediately === true)
        die("`observe` doesn't support fireImmediately=true in combination with sets.");
      return registerListener(this, listener);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.toJSON = function toJSON3() {
      return Array.from(this);
    };
    _proto.toString = function toString2() {
      return "[object ObservableSet]";
    };
    _proto[_Symbol$iterator$1] = function() {
      return this.values();
    };
    _createClass(ObservableSet2, [{
      key: "size",
      get: function get3() {
        this.atom_.reportObserved();
        return this.data_.size;
      }
    }, {
      key: _Symbol$toStringTag$1,
      get: function get3() {
        return "Set";
      }
    }]);
    return ObservableSet2;
  }();
  var isObservableSet = /* @__PURE__ */ createInstanceofPredicate("ObservableSet", ObservableSet);
  var descriptorCache = /* @__PURE__ */ Object.create(null);
  var REMOVE = "remove";
  var ObservableObjectAdministration = /* @__PURE__ */ function() {
    function ObservableObjectAdministration2(target_, values_, name_, defaultAnnotation_) {
      if (values_ === void 0) {
        values_ = new Map();
      }
      if (defaultAnnotation_ === void 0) {
        defaultAnnotation_ = autoAnnotation;
      }
      this.target_ = void 0;
      this.values_ = void 0;
      this.name_ = void 0;
      this.defaultAnnotation_ = void 0;
      this.keysAtom_ = void 0;
      this.changeListeners_ = void 0;
      this.interceptors_ = void 0;
      this.proxy_ = void 0;
      this.isPlainObject_ = void 0;
      this.appliedAnnotations_ = void 0;
      this.pendingKeys_ = void 0;
      this.target_ = target_;
      this.values_ = values_;
      this.name_ = name_;
      this.defaultAnnotation_ = defaultAnnotation_;
      this.keysAtom_ = new Atom(true ? this.name_ + ".keys" : "ObservableObject.keys");
      this.isPlainObject_ = isPlainObject(this.target_);
      if (!isAnnotation(this.defaultAnnotation_)) {
        die("defaultAnnotation must be valid annotation");
      }
      if (true) {
        this.appliedAnnotations_ = {};
      }
    }
    var _proto = ObservableObjectAdministration2.prototype;
    _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
      return this.values_.get(key).get();
    };
    _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
      var observable2 = this.values_.get(key);
      if (observable2 instanceof ComputedValue) {
        observable2.set(newValue);
        return true;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_ || this.target_,
          name: key,
          newValue
        });
        if (!change)
          return null;
        newValue = change.newValue;
      }
      newValue = observable2.prepareNewValue_(newValue);
      if (newValue !== globalState.UNCHANGED) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var _change = notify || notifySpy ? {
          type: UPDATE,
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || this.target_,
          oldValue: observable2.value_,
          name: key,
          newValue
        } : null;
        if (notifySpy)
          spyReportStart(_change);
        observable2.setNewValue_(newValue);
        if (notify)
          notifyListeners(this, _change);
        if (notifySpy)
          spyReportEnd();
      }
      return true;
    };
    _proto.get_ = function get_(key) {
      if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
        this.has_(key);
      }
      return this.target_[key];
    };
    _proto.set_ = function set_(key, value, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      if (hasProp(this.target_, key)) {
        if (this.values_.has(key)) {
          return this.setObservablePropValue_(key, value);
        } else if (proxyTrap) {
          return Reflect.set(this.target_, key, value);
        } else {
          this.target_[key] = value;
          return true;
        }
      } else {
        return this.extend_(key, {
          value,
          enumerable: true,
          writable: true,
          configurable: true
        }, this.defaultAnnotation_, proxyTrap);
      }
    };
    _proto.has_ = function has_(key) {
      if (!globalState.trackingDerivation) {
        return key in this.target_;
      }
      this.pendingKeys_ || (this.pendingKeys_ = new Map());
      var entry = this.pendingKeys_.get(key);
      if (!entry) {
        entry = new ObservableValue(key in this.target_, referenceEnhancer, true ? this.name_ + "." + stringifyKey(key) + "?" : "ObservableObject.key?", false);
        this.pendingKeys_.set(key, entry);
      }
      return entry.get();
    };
    _proto.make_ = function make_(key, annotation) {
      if (annotation === true) {
        annotation = this.defaultAnnotation_;
      }
      if (annotation === false) {
        return;
      }
      assertAnnotable(this, annotation, key);
      if (!(key in this.target_)) {
        var _this$target_$storedA;
        if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) == null ? void 0 : _this$target_$storedA[key]) {
          return;
        } else {
          die(1, annotation.annotationType_, this.name_ + "." + key.toString());
        }
      }
      var source = this.target_;
      while (source && source !== objectPrototype) {
        var descriptor = getDescriptor(source, key);
        if (descriptor) {
          var outcome = annotation.make_(this, key, descriptor, source);
          if (outcome === 0)
            return;
          if (outcome === 1)
            break;
        }
        source = Object.getPrototypeOf(source);
      }
      recordAnnotationApplied(this, annotation, key);
    };
    _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      if (annotation === true) {
        annotation = this.defaultAnnotation_;
      }
      if (annotation === false) {
        return this.defineProperty_(key, descriptor, proxyTrap);
      }
      assertAnnotable(this, annotation, key);
      var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
      if (outcome) {
        recordAnnotationApplied(this, annotation, key);
      }
      return outcome;
    };
    _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      try {
        startBatch();
        var deleteOutcome = this.delete_(key);
        if (!deleteOutcome) {
          return deleteOutcome;
        }
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: descriptor.value
          });
          if (!change)
            return null;
          var newValue = change.newValue;
          if (descriptor.value !== newValue) {
            descriptor = _extends({}, descriptor, {
              value: newValue
            });
          }
        }
        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }
        this.notifyPropertyAddition_(key, descriptor.value);
      } finally {
        endBatch();
      }
      return true;
    };
    _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      try {
        startBatch();
        var deleteOutcome = this.delete_(key);
        if (!deleteOutcome) {
          return deleteOutcome;
        }
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: value
          });
          if (!change)
            return null;
          value = change.newValue;
        }
        var cachedDescriptor = getCachedObservablePropDescriptor(key);
        var descriptor = {
          configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
          enumerable: true,
          get: cachedDescriptor.get,
          set: cachedDescriptor.set
        };
        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }
        var observable2 = new ObservableValue(value, enhancer, true ? this.name_ + "." + key.toString() : "ObservableObject.key", false);
        this.values_.set(key, observable2);
        this.notifyPropertyAddition_(key, observable2.value_);
      } finally {
        endBatch();
      }
      return true;
    };
    _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      try {
        startBatch();
        var deleteOutcome = this.delete_(key);
        if (!deleteOutcome) {
          return deleteOutcome;
        }
        if (hasInterceptors(this)) {
          var change = interceptChange(this, {
            object: this.proxy_ || this.target_,
            name: key,
            type: ADD,
            newValue: void 0
          });
          if (!change)
            return null;
        }
        options.name || (options.name = true ? this.name_ + "." + key.toString() : "ObservableObject.key");
        options.context = this.proxy_ || this.target_;
        var cachedDescriptor = getCachedObservablePropDescriptor(key);
        var descriptor = {
          configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
          enumerable: false,
          get: cachedDescriptor.get,
          set: cachedDescriptor.set
        };
        if (proxyTrap) {
          if (!Reflect.defineProperty(this.target_, key, descriptor)) {
            return false;
          }
        } else {
          defineProperty(this.target_, key, descriptor);
        }
        this.values_.set(key, new ComputedValue(options));
        this.notifyPropertyAddition_(key, void 0);
      } finally {
        endBatch();
      }
      return true;
    };
    _proto.delete_ = function delete_(key, proxyTrap) {
      if (proxyTrap === void 0) {
        proxyTrap = false;
      }
      if (!hasProp(this.target_, key)) {
        return true;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: REMOVE
        });
        if (!change)
          return null;
      }
      try {
        var _this$pendingKeys_, _this$pendingKeys_$ge;
        startBatch();
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var observable2 = this.values_.get(key);
        var value = void 0;
        if (!observable2 && (notify || notifySpy)) {
          var _getDescriptor2;
          value = (_getDescriptor2 = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor2.value;
        }
        if (proxyTrap) {
          if (!Reflect.deleteProperty(this.target_, key)) {
            return false;
          }
        } else {
          delete this.target_[key];
        }
        if (true) {
          delete this.appliedAnnotations_[key];
        }
        if (observable2) {
          this.values_["delete"](key);
          if (observable2 instanceof ObservableValue) {
            value = observable2.value_;
          }
          propagateChanged(observable2);
        }
        this.keysAtom_.reportChanged();
        (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_);
        if (notify || notifySpy) {
          var _change2 = {
            type: REMOVE,
            observableKind: "object",
            object: this.proxy_ || this.target_,
            debugObjectName: this.name_,
            oldValue: value,
            name: key
          };
          if (notifySpy)
            spyReportStart(_change2);
          if (notify)
            notifyListeners(this, _change2);
          if (notifySpy)
            spyReportEnd();
        }
      } finally {
        endBatch();
      }
      return true;
    };
    _proto.observe_ = function observe_(callback, fireImmediately) {
      if (fireImmediately === true)
        die("`observe` doesn't support the fire immediately property for observable objects.");
      return registerListener(this, callback);
    };
    _proto.intercept_ = function intercept_(handler) {
      return registerInterceptor(this, handler);
    };
    _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
      var _this$pendingKeys_2, _this$pendingKeys_2$g;
      var notify = hasListeners(this);
      var notifySpy = isSpyEnabled();
      if (notify || notifySpy) {
        var change = notify || notifySpy ? {
          type: ADD,
          observableKind: "object",
          debugObjectName: this.name_,
          object: this.proxy_ || this.target_,
          name: key,
          newValue: value
        } : null;
        if (notifySpy)
          spyReportStart(change);
        if (notify)
          notifyListeners(this, change);
        if (notifySpy)
          spyReportEnd();
      }
      (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true);
      this.keysAtom_.reportChanged();
    };
    _proto.ownKeys_ = function ownKeys_() {
      this.keysAtom_.reportObserved();
      return ownKeys(this.target_);
    };
    _proto.keys_ = function keys_() {
      this.keysAtom_.reportObserved();
      return Object.keys(this.target_);
    };
    return ObservableObjectAdministration2;
  }();
  function asObservableObject(target, options) {
    var _options$name;
    if (options && isObservableObject(target)) {
      die("Options can't be provided for already observable objects.");
    }
    if (hasProp(target, $mobx)) {
      if (!(getAdministration(target) instanceof ObservableObjectAdministration)) {
        die("Cannot convert '" + getDebugName(target) + "' into observable object:\nThe target is already observable of different type.\nExtending builtins is not supported.");
      }
      return target;
    }
    if (!Object.isExtensible(target))
      die("Cannot make the designated object observable; it is not extensible");
    var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : true ? (isPlainObject(target) ? "ObservableObject" : target.constructor.name) + "@" + getNextId() : "ObservableObject";
    var adm = new ObservableObjectAdministration(target, new Map(), String(name), getAnnotationFromOptions(options));
    addHiddenProp(target, $mobx, adm);
    return target;
  }
  var isObservableObjectAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
  function getCachedObservablePropDescriptor(key) {
    return descriptorCache[key] || (descriptorCache[key] = {
      get: function get3() {
        return this[$mobx].getObservablePropValue_(key);
      },
      set: function set5(value) {
        return this[$mobx].setObservablePropValue_(key, value);
      }
    });
  }
  function isObservableObject(thing) {
    if (isObject(thing)) {
      return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
  }
  function recordAnnotationApplied(adm, annotation, key) {
    var _adm$target_$storedAn;
    if (true) {
      adm.appliedAnnotations_[key] = annotation;
    }
    (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
  }
  function assertAnnotable(adm, annotation, key) {
    if (!isAnnotation(annotation)) {
      die("Cannot annotate '" + adm.name_ + "." + key.toString() + "': Invalid annotation.");
    }
    if (!isOverride(annotation) && hasProp(adm.appliedAnnotations_, key)) {
      var fieldName = adm.name_ + "." + key.toString();
      var currentAnnotationType = adm.appliedAnnotations_[key].annotationType_;
      var requestedAnnotationType = annotation.annotationType_;
      die("Cannot apply '" + requestedAnnotationType + "' to '" + fieldName + "':" + ("\nThe field is already annotated with '" + currentAnnotationType + "'.") + "\nRe-annotating fields is not allowed.\nUse 'override' annotation for methods overriden by subclass.");
    }
  }
  var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
  var StubArray = function StubArray2() {
  };
  function inherit(ctor, proto) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(ctor.prototype, proto);
    } else if (ctor.prototype.__proto__ !== void 0) {
      ctor.prototype.__proto__ = proto;
    } else {
      ctor.prototype = proto;
    }
  }
  inherit(StubArray, Array.prototype);
  var LegacyObservableArray = /* @__PURE__ */ function(_StubArray) {
    _inheritsLoose(LegacyObservableArray2, _StubArray);
    function LegacyObservableArray2(initialValues, enhancer, name, owned) {
      var _this;
      if (name === void 0) {
        name = true ? "ObservableArray@" + getNextId() : "ObservableArray";
      }
      if (owned === void 0) {
        owned = false;
      }
      _this = _StubArray.call(this) || this;
      var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
      adm.proxy_ = _assertThisInitialized(_this);
      addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);
      if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        _this.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd(prev);
      }
      return _this;
    }
    var _proto = LegacyObservableArray2.prototype;
    _proto.concat = function concat() {
      this[$mobx].atom_.reportObserved();
      for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
        arrays[_key] = arguments[_key];
      }
      return Array.prototype.concat.apply(this.slice(), arrays.map(function(a2) {
        return isObservableArray(a2) ? a2.slice() : a2;
      }));
    };
    _proto[Symbol.iterator] = function() {
      var self2 = this;
      var nextIndex = 0;
      return makeIterable({
        next: function next() {
          return nextIndex < self2.length ? {
            value: self2[nextIndex++],
            done: false
          } : {
            done: true,
            value: void 0
          };
        }
      });
    };
    _createClass(LegacyObservableArray2, [{
      key: "length",
      get: function get3() {
        return this[$mobx].getArrayLength_();
      },
      set: function set5(newLength) {
        this[$mobx].setArrayLength_(newLength);
      }
    }, {
      key: Symbol.toStringTag,
      get: function get3() {
        return "Array";
      }
    }]);
    return LegacyObservableArray2;
  }(StubArray);
  Object.entries(arrayExtensions).forEach(function(_ref) {
    var prop = _ref[0], fn = _ref[1];
    if (prop !== "concat")
      addHiddenProp(LegacyObservableArray.prototype, prop, fn);
  });
  function createArrayEntryDescriptor(index) {
    return {
      enumerable: false,
      configurable: true,
      get: function get3() {
        return this[$mobx].get_(index);
      },
      set: function set5(value) {
        this[$mobx].set_(index, value);
      }
    };
  }
  function createArrayBufferItem(index) {
    defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
  }
  function reserveArrayBuffer(max) {
    if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
      for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
        createArrayBufferItem(index);
      }
      OBSERVABLE_ARRAY_BUFFER_SIZE = max;
    }
  }
  reserveArrayBuffer(1e3);
  function createLegacyArray(initialValues, enhancer, name) {
    return new LegacyObservableArray(initialValues, enhancer, name);
  }
  function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
      if (isObservableArray(thing)) {
        if (property !== void 0)
          die(23);
        return thing[$mobx].atom_;
      }
      if (isObservableSet(thing)) {
        return thing[$mobx];
      }
      if (isObservableMap(thing)) {
        if (property === void 0)
          return thing.keysAtom_;
        var observable2 = thing.data_.get(property) || thing.hasMap_.get(property);
        if (!observable2)
          die(25, property, getDebugName(thing));
        return observable2;
      }
      if (isObservableObject(thing)) {
        if (!property)
          return die(26);
        var _observable = thing[$mobx].values_.get(property);
        if (!_observable)
          die(27, property, getDebugName(thing));
        return _observable;
      }
      if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
        return thing;
      }
    } else if (isFunction(thing)) {
      if (isReaction(thing[$mobx])) {
        return thing[$mobx];
      }
    }
    die(28);
  }
  function getAdministration(thing, property) {
    if (!thing)
      die(29);
    if (property !== void 0)
      return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
      return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
      return thing;
    if (thing[$mobx])
      return thing[$mobx];
    die(24, thing);
  }
  function getDebugName(thing, property) {
    var named;
    if (property !== void 0) {
      named = getAtom(thing, property);
    } else if (isAction(thing)) {
      return thing.name;
    } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
      named = getAdministration(thing);
    } else {
      named = getAtom(thing);
    }
    return named.name_;
  }
  var toString = objectPrototype.toString;
  function deepEqual(a2, b2, depth) {
    if (depth === void 0) {
      depth = -1;
    }
    return eq(a2, b2, depth);
  }
  function eq(a2, b2, depth, aStack, bStack) {
    if (a2 === b2)
      return a2 !== 0 || 1 / a2 === 1 / b2;
    if (a2 == null || b2 == null)
      return false;
    if (a2 !== a2)
      return b2 !== b2;
    var type = typeof a2;
    if (!isFunction(type) && type !== "object" && typeof b2 != "object")
      return false;
    var className = toString.call(a2);
    if (className !== toString.call(b2))
      return false;
    switch (className) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a2 === "" + b2;
      case "[object Number]":
        if (+a2 !== +a2)
          return +b2 !== +b2;
        return +a2 === 0 ? 1 / +a2 === 1 / b2 : +a2 === +b2;
      case "[object Date]":
      case "[object Boolean]":
        return +a2 === +b2;
      case "[object Symbol]":
        return typeof Symbol !== "undefined" && Symbol.valueOf.call(a2) === Symbol.valueOf.call(b2);
      case "[object Map]":
      case "[object Set]":
        if (depth >= 0) {
          depth++;
        }
        break;
    }
    a2 = unwrap(a2);
    b2 = unwrap(b2);
    var areArrays = className === "[object Array]";
    if (!areArrays) {
      if (typeof a2 != "object" || typeof b2 != "object")
        return false;
      var aCtor = a2.constructor, bCtor = b2.constructor;
      if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a2 && "constructor" in b2) {
        return false;
      }
    }
    if (depth === 0) {
      return false;
    } else if (depth < 0) {
      depth = -1;
    }
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      if (aStack[length] === a2)
        return bStack[length] === b2;
    }
    aStack.push(a2);
    bStack.push(b2);
    if (areArrays) {
      length = a2.length;
      if (length !== b2.length)
        return false;
      while (length--) {
        if (!eq(a2[length], b2[length], depth - 1, aStack, bStack))
          return false;
      }
    } else {
      var keys2 = Object.keys(a2);
      var key;
      length = keys2.length;
      if (Object.keys(b2).length !== length)
        return false;
      while (length--) {
        key = keys2[length];
        if (!(hasProp(b2, key) && eq(a2[key], b2[key], depth - 1, aStack, bStack)))
          return false;
      }
    }
    aStack.pop();
    bStack.pop();
    return true;
  }
  function unwrap(a2) {
    if (isObservableArray(a2))
      return a2.slice();
    if (isES6Map(a2) || isObservableMap(a2))
      return Array.from(a2.entries());
    if (isES6Set(a2) || isObservableSet(a2))
      return Array.from(a2.entries());
    return a2;
  }
  function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
  }
  function getSelf() {
    return this;
  }
  function isAnnotation(thing) {
    return thing instanceof Object && typeof thing.annotationType_ === "string" && isFunction(thing.make_) && isFunction(thing.extend_);
  }
  ["Symbol", "Map", "Set"].forEach(function(m2) {
    var g2 = getGlobal();
    if (typeof g2[m2] === "undefined") {
      die("MobX requires global '" + m2 + "' to be available or polyfilled");
    }
  });
  if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
      spy,
      extras: {
        getDebugName
      },
      $mobx
    });
  }

  // node_modules/@adobe/lit-mobx/lib/mixin.js
  var reaction2 = Symbol("LitMobxRenderReaction");
  var cachedRequestUpdate = Symbol("LitMobxRequestUpdate");
  function MobxReactionUpdate(constructor) {
    var _a2, _b;
    return _b = class MobxReactingElement extends constructor {
      constructor() {
        super(...arguments);
        this[_a2] = () => {
          this.requestUpdate();
        };
      }
      connectedCallback() {
        super.connectedCallback();
        const name = this.constructor.name || this.nodeName;
        this[reaction2] = new Reaction(`${name}.update()`, this[cachedRequestUpdate]);
        if (this.hasUpdated)
          this.requestUpdate();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        if (this[reaction2]) {
          this[reaction2].dispose();
          this[reaction2] = void 0;
        }
      }
      update(changedProperties) {
        if (this[reaction2]) {
          this[reaction2].track(super.update.bind(this, changedProperties));
        } else {
          super.update(changedProperties);
        }
      }
    }, _a2 = cachedRequestUpdate, _b;
  }

  // node_modules/@lit/reactive-element/css-tag.js
  var t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var e = Symbol();
  var n = new Map();
  var s = class {
    constructor(t3, n6) {
      if (this._$cssResult$ = true, n6 !== e)
        throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t3;
    }
    get styleSheet() {
      let e5 = n.get(this.cssText);
      return t && e5 === void 0 && (n.set(this.cssText, e5 = new CSSStyleSheet()), e5.replaceSync(this.cssText)), e5;
    }
    toString() {
      return this.cssText;
    }
  };
  var o = (t3) => new s(typeof t3 == "string" ? t3 : t3 + "", e);
  var r = (t3, ...n6) => {
    const o6 = t3.length === 1 ? t3[0] : n6.reduce((e5, n7, s5) => e5 + ((t4) => {
      if (t4._$cssResult$ === true)
        return t4.cssText;
      if (typeof t4 == "number")
        return t4;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(n7) + t3[s5 + 1], t3[0]);
    return new s(o6, e);
  };
  var i = (e5, n6) => {
    t ? e5.adoptedStyleSheets = n6.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet) : n6.forEach((t3) => {
      const n7 = document.createElement("style"), s5 = window.litNonce;
      s5 !== void 0 && n7.setAttribute("nonce", s5), n7.textContent = t3.cssText, e5.appendChild(n7);
    });
  };
  var S = t ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
    let e5 = "";
    for (const n6 of t4.cssRules)
      e5 += n6.cssText;
    return o(e5);
  })(t3) : t3;

  // node_modules/@lit/reactive-element/reactive-element.js
  var s2;
  var e2 = window.reactiveElementPolyfillSupport;
  var r2 = { toAttribute(t3, i3) {
    switch (i3) {
      case Boolean:
        t3 = t3 ? "" : null;
        break;
      case Object:
      case Array:
        t3 = t3 == null ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, i3) {
    let s5 = t3;
    switch (i3) {
      case Boolean:
        s5 = t3 !== null;
        break;
      case Number:
        s5 = t3 === null ? null : Number(t3);
        break;
      case Object:
      case Array:
        try {
          s5 = JSON.parse(t3);
        } catch (t4) {
          s5 = null;
        }
    }
    return s5;
  } };
  var h = (t3, i3) => i3 !== t3 && (i3 == i3 || t3 == t3);
  var o2 = { attribute: true, type: String, converter: r2, reflect: false, hasChanged: h };
  var n2 = class extends HTMLElement {
    constructor() {
      super(), this._$Et = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
    }
    static addInitializer(t3) {
      var i3;
      (i3 = this.l) !== null && i3 !== void 0 || (this.l = []), this.l.push(t3);
    }
    static get observedAttributes() {
      this.finalize();
      const t3 = [];
      return this.elementProperties.forEach((i3, s5) => {
        const e5 = this._$Eh(s5, i3);
        e5 !== void 0 && (this._$Eu.set(e5, s5), t3.push(e5));
      }), t3;
    }
    static createProperty(t3, i3 = o2) {
      if (i3.state && (i3.attribute = false), this.finalize(), this.elementProperties.set(t3, i3), !i3.noAccessor && !this.prototype.hasOwnProperty(t3)) {
        const s5 = typeof t3 == "symbol" ? Symbol() : "__" + t3, e5 = this.getPropertyDescriptor(t3, s5, i3);
        e5 !== void 0 && Object.defineProperty(this.prototype, t3, e5);
      }
    }
    static getPropertyDescriptor(t3, i3, s5) {
      return { get() {
        return this[i3];
      }, set(e5) {
        const r4 = this[t3];
        this[i3] = e5, this.requestUpdate(t3, r4, s5);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t3) {
      return this.elementProperties.get(t3) || o2;
    }
    static finalize() {
      if (this.hasOwnProperty("finalized"))
        return false;
      this.finalized = true;
      const t3 = Object.getPrototypeOf(this);
      if (t3.finalize(), this.elementProperties = new Map(t3.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
        const t4 = this.properties, i3 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
        for (const s5 of i3)
          this.createProperty(s5, t4[s5]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i3) {
      const s5 = [];
      if (Array.isArray(i3)) {
        const e5 = new Set(i3.flat(1 / 0).reverse());
        for (const i4 of e5)
          s5.unshift(S(i4));
      } else
        i3 !== void 0 && s5.push(S(i3));
      return s5;
    }
    static _$Eh(t3, i3) {
      const s5 = i3.attribute;
      return s5 === false ? void 0 : typeof s5 == "string" ? s5 : typeof t3 == "string" ? t3.toLowerCase() : void 0;
    }
    o() {
      var t3;
      this._$Ev = new Promise((t4) => this.enableUpdating = t4), this._$AL = new Map(), this._$Ep(), this.requestUpdate(), (t3 = this.constructor.l) === null || t3 === void 0 || t3.forEach((t4) => t4(this));
    }
    addController(t3) {
      var i3, s5;
      ((i3 = this._$Em) !== null && i3 !== void 0 ? i3 : this._$Em = []).push(t3), this.renderRoot !== void 0 && this.isConnected && ((s5 = t3.hostConnected) === null || s5 === void 0 || s5.call(t3));
    }
    removeController(t3) {
      var i3;
      (i3 = this._$Em) === null || i3 === void 0 || i3.splice(this._$Em.indexOf(t3) >>> 0, 1);
    }
    _$Ep() {
      this.constructor.elementProperties.forEach((t3, i3) => {
        this.hasOwnProperty(i3) && (this._$Et.set(i3, this[i3]), delete this[i3]);
      });
    }
    createRenderRoot() {
      var t3;
      const s5 = (t3 = this.shadowRoot) !== null && t3 !== void 0 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
      return i(s5, this.constructor.elementStyles), s5;
    }
    connectedCallback() {
      var t3;
      this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t3 = this._$Em) === null || t3 === void 0 || t3.forEach((t4) => {
        var i3;
        return (i3 = t4.hostConnected) === null || i3 === void 0 ? void 0 : i3.call(t4);
      });
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      var t3;
      (t3 = this._$Em) === null || t3 === void 0 || t3.forEach((t4) => {
        var i3;
        return (i3 = t4.hostDisconnected) === null || i3 === void 0 ? void 0 : i3.call(t4);
      });
    }
    attributeChangedCallback(t3, i3, s5) {
      this._$AK(t3, s5);
    }
    _$Eg(t3, i3, s5 = o2) {
      var e5, h3;
      const n6 = this.constructor._$Eh(t3, s5);
      if (n6 !== void 0 && s5.reflect === true) {
        const o6 = ((h3 = (e5 = s5.converter) === null || e5 === void 0 ? void 0 : e5.toAttribute) !== null && h3 !== void 0 ? h3 : r2.toAttribute)(i3, s5.type);
        this._$Ei = t3, o6 == null ? this.removeAttribute(n6) : this.setAttribute(n6, o6), this._$Ei = null;
      }
    }
    _$AK(t3, i3) {
      var s5, e5, h3;
      const o6 = this.constructor, n6 = o6._$Eu.get(t3);
      if (n6 !== void 0 && this._$Ei !== n6) {
        const t4 = o6.getPropertyOptions(n6), l3 = t4.converter, a2 = (h3 = (e5 = (s5 = l3) === null || s5 === void 0 ? void 0 : s5.fromAttribute) !== null && e5 !== void 0 ? e5 : typeof l3 == "function" ? l3 : null) !== null && h3 !== void 0 ? h3 : r2.fromAttribute;
        this._$Ei = n6, this[n6] = a2(i3, t4.type), this._$Ei = null;
      }
    }
    requestUpdate(t3, i3, s5) {
      let e5 = true;
      t3 !== void 0 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || h)(this[t3], i3) ? (this._$AL.has(t3) || this._$AL.set(t3, i3), s5.reflect === true && this._$Ei !== t3 && (this._$ES === void 0 && (this._$ES = new Map()), this._$ES.set(t3, s5))) : e5 = false), !this.isUpdatePending && e5 && (this._$Ev = this._$EC());
    }
    async _$EC() {
      this.isUpdatePending = true;
      try {
        await this._$Ev;
      } catch (t4) {
        Promise.reject(t4);
      }
      const t3 = this.scheduleUpdate();
      return t3 != null && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      var t3;
      if (!this.isUpdatePending)
        return;
      this.hasUpdated, this._$Et && (this._$Et.forEach((t4, i4) => this[i4] = t4), this._$Et = void 0);
      let i3 = false;
      const s5 = this._$AL;
      try {
        i3 = this.shouldUpdate(s5), i3 ? (this.willUpdate(s5), (t3 = this._$Em) === null || t3 === void 0 || t3.forEach((t4) => {
          var i4;
          return (i4 = t4.hostUpdate) === null || i4 === void 0 ? void 0 : i4.call(t4);
        }), this.update(s5)) : this._$EU();
      } catch (t4) {
        throw i3 = false, this._$EU(), t4;
      }
      i3 && this._$AE(s5);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      var i3;
      (i3 = this._$Em) === null || i3 === void 0 || i3.forEach((t4) => {
        var i4;
        return (i4 = t4.hostUpdated) === null || i4 === void 0 ? void 0 : i4.call(t4);
      }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$EU() {
      this._$AL = new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$Ev;
    }
    shouldUpdate(t3) {
      return true;
    }
    update(t3) {
      this._$ES !== void 0 && (this._$ES.forEach((t4, i3) => this._$Eg(i3, this[i3], t4)), this._$ES = void 0), this._$EU();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
  };
  n2.finalized = true, n2.elementProperties = new Map(), n2.elementStyles = [], n2.shadowRootOptions = { mode: "open" }, e2 == null || e2({ ReactiveElement: n2 }), ((s2 = globalThis.reactiveElementVersions) !== null && s2 !== void 0 ? s2 : globalThis.reactiveElementVersions = []).push("1.0.1");

  // node_modules/lit-html/lit-html.js
  var t2;
  var i2 = globalThis.trustedTypes;
  var s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
  var e3 = `lit$${(Math.random() + "").slice(9)}$`;
  var o3 = "?" + e3;
  var n3 = `<${o3}>`;
  var l = document;
  var h2 = (t3 = "") => l.createComment(t3);
  var r3 = (t3) => t3 === null || typeof t3 != "object" && typeof t3 != "function";
  var d = Array.isArray;
  var u = (t3) => {
    var i3;
    return d(t3) || typeof ((i3 = t3) === null || i3 === void 0 ? void 0 : i3[Symbol.iterator]) == "function";
  };
  var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var a = />/g;
  var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
  var _14 = /'/g;
  var m = /"/g;
  var g = /^(?:script|style|textarea)$/i;
  var $ = (t3) => (i3, ...s5) => ({ _$litType$: t3, strings: i3, values: s5 });
  var p = $(1);
  var y = $(2);
  var b = Symbol.for("lit-noChange");
  var T = Symbol.for("lit-nothing");
  var x = new WeakMap();
  var w = (t3, i3, s5) => {
    var e5, o6;
    const n6 = (e5 = s5 == null ? void 0 : s5.renderBefore) !== null && e5 !== void 0 ? e5 : i3;
    let l3 = n6._$litPart$;
    if (l3 === void 0) {
      const t4 = (o6 = s5 == null ? void 0 : s5.renderBefore) !== null && o6 !== void 0 ? o6 : null;
      n6._$litPart$ = l3 = new N(i3.insertBefore(h2(), t4), t4, void 0, s5 != null ? s5 : {});
    }
    return l3._$AI(t3), l3;
  };
  var A = l.createTreeWalker(l, 129, null, false);
  var C = (t3, i3) => {
    const o6 = t3.length - 1, l3 = [];
    let h3, r4 = i3 === 2 ? "<svg>" : "", d2 = c;
    for (let i4 = 0; i4 < o6; i4++) {
      const s5 = t3[i4];
      let o7, u3, $2 = -1, p2 = 0;
      for (; p2 < s5.length && (d2.lastIndex = p2, u3 = d2.exec(s5), u3 !== null); )
        p2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a : u3[2] !== void 0 ? (g.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h3 != null ? h3 : c, $2 = -1) : u3[1] === void 0 ? $2 = -2 : ($2 = d2.lastIndex - u3[2].length, o7 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _14) : d2 === m || d2 === _14 ? d2 = f : d2 === v || d2 === a ? d2 = c : (d2 = f, h3 = void 0);
      const y2 = d2 === f && t3[i4 + 1].startsWith("/>") ? " " : "";
      r4 += d2 === c ? s5 + n3 : $2 >= 0 ? (l3.push(o7), s5.slice(0, $2) + "$lit$" + s5.slice($2) + e3 + y2) : s5 + e3 + ($2 === -2 ? (l3.push(void 0), i4) : y2);
    }
    const u2 = r4 + (t3[o6] || "<?>") + (i3 === 2 ? "</svg>" : "");
    return [s3 !== void 0 ? s3.createHTML(u2) : u2, l3];
  };
  var P = class {
    constructor({ strings: t3, _$litType$: s5 }, n6) {
      let l3;
      this.parts = [];
      let r4 = 0, d2 = 0;
      const u2 = t3.length - 1, c2 = this.parts, [v2, a2] = C(t3, s5);
      if (this.el = P.createElement(v2, n6), A.currentNode = this.el.content, s5 === 2) {
        const t4 = this.el.content, i3 = t4.firstChild;
        i3.remove(), t4.append(...i3.childNodes);
      }
      for (; (l3 = A.nextNode()) !== null && c2.length < u2; ) {
        if (l3.nodeType === 1) {
          if (l3.hasAttributes()) {
            const t4 = [];
            for (const i3 of l3.getAttributeNames())
              if (i3.endsWith("$lit$") || i3.startsWith(e3)) {
                const s6 = a2[d2++];
                if (t4.push(i3), s6 !== void 0) {
                  const t5 = l3.getAttribute(s6.toLowerCase() + "$lit$").split(e3), i4 = /([.?@])?(.*)/.exec(s6);
                  c2.push({ type: 1, index: r4, name: i4[2], strings: t5, ctor: i4[1] === "." ? M : i4[1] === "?" ? k : i4[1] === "@" ? H : S2 });
                } else
                  c2.push({ type: 6, index: r4 });
              }
            for (const i3 of t4)
              l3.removeAttribute(i3);
          }
          if (g.test(l3.tagName)) {
            const t4 = l3.textContent.split(e3), s6 = t4.length - 1;
            if (s6 > 0) {
              l3.textContent = i2 ? i2.emptyScript : "";
              for (let i3 = 0; i3 < s6; i3++)
                l3.append(t4[i3], h2()), A.nextNode(), c2.push({ type: 2, index: ++r4 });
              l3.append(t4[s6], h2());
            }
          }
        } else if (l3.nodeType === 8)
          if (l3.data === o3)
            c2.push({ type: 2, index: r4 });
          else {
            let t4 = -1;
            for (; (t4 = l3.data.indexOf(e3, t4 + 1)) !== -1; )
              c2.push({ type: 7, index: r4 }), t4 += e3.length - 1;
          }
        r4++;
      }
    }
    static createElement(t3, i3) {
      const s5 = l.createElement("template");
      return s5.innerHTML = t3, s5;
    }
  };
  function V(t3, i3, s5 = t3, e5) {
    var o6, n6, l3, h3;
    if (i3 === b)
      return i3;
    let d2 = e5 !== void 0 ? (o6 = s5._$Cl) === null || o6 === void 0 ? void 0 : o6[e5] : s5._$Cu;
    const u2 = r3(i3) ? void 0 : i3._$litDirective$;
    return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n6 = d2 == null ? void 0 : d2._$AO) === null || n6 === void 0 || n6.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t3), d2._$AT(t3, s5, e5)), e5 !== void 0 ? ((l3 = (h3 = s5)._$Cl) !== null && l3 !== void 0 ? l3 : h3._$Cl = [])[e5] = d2 : s5._$Cu = d2), d2 !== void 0 && (i3 = V(t3, d2._$AS(t3, i3.values), d2, e5)), i3;
  }
  var E = class {
    constructor(t3, i3) {
      this.v = [], this._$AN = void 0, this._$AD = t3, this._$AM = i3;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    p(t3) {
      var i3;
      const { el: { content: s5 }, parts: e5 } = this._$AD, o6 = ((i3 = t3 == null ? void 0 : t3.creationScope) !== null && i3 !== void 0 ? i3 : l).importNode(s5, true);
      A.currentNode = o6;
      let n6 = A.nextNode(), h3 = 0, r4 = 0, d2 = e5[0];
      for (; d2 !== void 0; ) {
        if (h3 === d2.index) {
          let i4;
          d2.type === 2 ? i4 = new N(n6, n6.nextSibling, this, t3) : d2.type === 1 ? i4 = new d2.ctor(n6, d2.name, d2.strings, this, t3) : d2.type === 6 && (i4 = new I(n6, this, t3)), this.v.push(i4), d2 = e5[++r4];
        }
        h3 !== (d2 == null ? void 0 : d2.index) && (n6 = A.nextNode(), h3++);
      }
      return o6;
    }
    m(t3) {
      let i3 = 0;
      for (const s5 of this.v)
        s5 !== void 0 && (s5.strings !== void 0 ? (s5._$AI(t3, s5, i3), i3 += s5.strings.length - 2) : s5._$AI(t3[i3])), i3++;
    }
  };
  var N = class {
    constructor(t3, i3, s5, e5) {
      var o6;
      this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t3, this._$AB = i3, this._$AM = s5, this.options = e5, this._$Cg = (o6 = e5 == null ? void 0 : e5.isConnected) === null || o6 === void 0 || o6;
    }
    get _$AU() {
      var t3, i3;
      return (i3 = (t3 = this._$AM) === null || t3 === void 0 ? void 0 : t3._$AU) !== null && i3 !== void 0 ? i3 : this._$Cg;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i3 = this._$AM;
      return i3 !== void 0 && t3.nodeType === 11 && (t3 = i3.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i3 = this) {
      t3 = V(this, t3, i3), r3(t3) ? t3 === T || t3 == null || t3 === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t3 !== this._$AH && t3 !== b && this.$(t3) : t3._$litType$ !== void 0 ? this.T(t3) : t3.nodeType !== void 0 ? this.S(t3) : u(t3) ? this.M(t3) : this.$(t3);
    }
    A(t3, i3 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t3, i3);
    }
    S(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.A(t3));
    }
    $(t3) {
      this._$AH !== T && r3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.S(l.createTextNode(t3)), this._$AH = t3;
    }
    T(t3) {
      var i3;
      const { values: s5, _$litType$: e5 } = t3, o6 = typeof e5 == "number" ? this._$AC(t3) : (e5.el === void 0 && (e5.el = P.createElement(e5.h, this.options)), e5);
      if (((i3 = this._$AH) === null || i3 === void 0 ? void 0 : i3._$AD) === o6)
        this._$AH.m(s5);
      else {
        const t4 = new E(o6, this), i4 = t4.p(this.options);
        t4.m(s5), this.S(i4), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i3 = x.get(t3.strings);
      return i3 === void 0 && x.set(t3.strings, i3 = new P(t3)), i3;
    }
    M(t3) {
      d(this._$AH) || (this._$AH = [], this._$AR());
      const i3 = this._$AH;
      let s5, e5 = 0;
      for (const o6 of t3)
        e5 === i3.length ? i3.push(s5 = new N(this.A(h2()), this.A(h2()), this, this.options)) : s5 = i3[e5], s5._$AI(o6), e5++;
      e5 < i3.length && (this._$AR(s5 && s5._$AB.nextSibling, e5), i3.length = e5);
    }
    _$AR(t3 = this._$AA.nextSibling, i3) {
      var s5;
      for ((s5 = this._$AP) === null || s5 === void 0 || s5.call(this, false, true, i3); t3 && t3 !== this._$AB; ) {
        const i4 = t3.nextSibling;
        t3.remove(), t3 = i4;
      }
    }
    setConnected(t3) {
      var i3;
      this._$AM === void 0 && (this._$Cg = t3, (i3 = this._$AP) === null || i3 === void 0 || i3.call(this, t3));
    }
  };
  var S2 = class {
    constructor(t3, i3, s5, e5, o6) {
      this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t3, this.name = i3, this._$AM = e5, this.options = o6, s5.length > 2 || s5[0] !== "" || s5[1] !== "" ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = T;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3, i3 = this, s5, e5) {
      const o6 = this.strings;
      let n6 = false;
      if (o6 === void 0)
        t3 = V(this, t3, i3, 0), n6 = !r3(t3) || t3 !== this._$AH && t3 !== b, n6 && (this._$AH = t3);
      else {
        const e6 = t3;
        let l3, h3;
        for (t3 = o6[0], l3 = 0; l3 < o6.length - 1; l3++)
          h3 = V(this, e6[s5 + l3], i3, l3), h3 === b && (h3 = this._$AH[l3]), n6 || (n6 = !r3(h3) || h3 !== this._$AH[l3]), h3 === T ? t3 = T : t3 !== T && (t3 += (h3 != null ? h3 : "") + o6[l3 + 1]), this._$AH[l3] = h3;
      }
      n6 && !e5 && this.k(t3);
    }
    k(t3) {
      t3 === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 != null ? t3 : "");
    }
  };
  var M = class extends S2 {
    constructor() {
      super(...arguments), this.type = 3;
    }
    k(t3) {
      this.element[this.name] = t3 === T ? void 0 : t3;
    }
  };
  var k = class extends S2 {
    constructor() {
      super(...arguments), this.type = 4;
    }
    k(t3) {
      t3 && t3 !== T ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
    }
  };
  var H = class extends S2 {
    constructor(t3, i3, s5, e5, o6) {
      super(t3, i3, s5, e5, o6), this.type = 5;
    }
    _$AI(t3, i3 = this) {
      var s5;
      if ((t3 = (s5 = V(this, t3, i3, 0)) !== null && s5 !== void 0 ? s5 : T) === b)
        return;
      const e5 = this._$AH, o6 = t3 === T && e5 !== T || t3.capture !== e5.capture || t3.once !== e5.once || t3.passive !== e5.passive, n6 = t3 !== T && (e5 === T || o6);
      o6 && this.element.removeEventListener(this.name, this, e5), n6 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      var i3, s5;
      typeof this._$AH == "function" ? this._$AH.call((s5 = (i3 = this.options) === null || i3 === void 0 ? void 0 : i3.host) !== null && s5 !== void 0 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var I = class {
    constructor(t3, i3, s5) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3) {
      V(this, t3);
    }
  };
  var R = window.litHtmlPolyfillSupport;
  R == null || R(P, N), ((t2 = globalThis.litHtmlVersions) !== null && t2 !== void 0 ? t2 : globalThis.litHtmlVersions = []).push("2.0.1");

  // node_modules/lit-element/lit-element.js
  var l2;
  var o4;
  var s4 = class extends n2 {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
    }
    createRenderRoot() {
      var t3, e5;
      const i3 = super.createRenderRoot();
      return (t3 = (e5 = this.renderOptions).renderBefore) !== null && t3 !== void 0 || (e5.renderBefore = i3.firstChild), i3;
    }
    update(t3) {
      const i3 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Dt = w(i3, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      var t3;
      super.connectedCallback(), (t3 = this._$Dt) === null || t3 === void 0 || t3.setConnected(true);
    }
    disconnectedCallback() {
      var t3;
      super.disconnectedCallback(), (t3 = this._$Dt) === null || t3 === void 0 || t3.setConnected(false);
    }
    render() {
      return b;
    }
  };
  s4.finalized = true, s4._$litElement$ = true, (l2 = globalThis.litElementHydrateSupport) === null || l2 === void 0 || l2.call(globalThis, { LitElement: s4 });
  var n4 = globalThis.litElementPolyfillSupport;
  n4 == null || n4({ LitElement: s4 });
  ((o4 = globalThis.litElementVersions) !== null && o4 !== void 0 ? o4 : globalThis.litElementVersions = []).push("3.0.1");

  // node_modules/@adobe/lit-mobx/lit-mobx.js
  var MobxLitElement = class extends MobxReactionUpdate(s4) {
  };

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var n5 = (n6) => (e5) => typeof e5 == "function" ? ((n7, e6) => (window.customElements.define(n7, e6), e6))(n6, e5) : ((n7, e6) => {
    const { kind: t3, elements: i3 } = e6;
    return { kind: t3, elements: i3, finisher(e7) {
      window.customElements.define(n7, e7);
    } };
  })(n6, e5);

  // node_modules/mobx-state-tree/dist/mobx-state-tree.module.js
  var livelinessChecking = "warn";
  function getLivelinessChecking() {
    return livelinessChecking;
  }
  var Hook;
  (function(Hook2) {
    Hook2["afterCreate"] = "afterCreate";
    Hook2["afterAttach"] = "afterAttach";
    Hook2["afterCreationFinalization"] = "afterCreationFinalization";
    Hook2["beforeDetach"] = "beforeDetach";
    Hook2["beforeDestroy"] = "beforeDestroy";
  })(Hook || (Hook = {}));
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (b3.hasOwnProperty(p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  function __extends(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t3) {
      for (var s5, i3 = 1, n6 = arguments.length; i3 < n6; i3++) {
        s5 = arguments[i3];
        for (var p2 in s5)
          if (Object.prototype.hasOwnProperty.call(s5, p2))
            t3[p2] = s5[p2];
      }
      return t3;
    };
    return __assign.apply(this, arguments);
  };
  function __rest(s5, e5) {
    var t3 = {};
    for (var p2 in s5)
      if (Object.prototype.hasOwnProperty.call(s5, p2) && e5.indexOf(p2) < 0)
        t3[p2] = s5[p2];
    if (s5 != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i3 = 0, p2 = Object.getOwnPropertySymbols(s5); i3 < p2.length; i3++) {
        if (e5.indexOf(p2[i3]) < 0 && Object.prototype.propertyIsEnumerable.call(s5, p2[i3]))
          t3[p2[i3]] = s5[p2[i3]];
      }
    return t3;
  }
  function __values(o6) {
    var s5 = typeof Symbol === "function" && Symbol.iterator, m2 = s5 && o6[s5], i3 = 0;
    if (m2)
      return m2.call(o6);
    if (o6 && typeof o6.length === "number")
      return {
        next: function() {
          if (o6 && i3 >= o6.length)
            o6 = void 0;
          return { value: o6 && o6[i3++], done: !o6 };
        }
      };
    throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o6, n6) {
    var m2 = typeof Symbol === "function" && o6[Symbol.iterator];
    if (!m2)
      return o6;
    var i3 = m2.call(o6), r4, ar = [], e5;
    try {
      while ((n6 === void 0 || n6-- > 0) && !(r4 = i3.next()).done)
        ar.push(r4.value);
    } catch (error) {
      e5 = { error };
    } finally {
      try {
        if (r4 && !r4.done && (m2 = i3["return"]))
          m2.call(i3);
      } finally {
        if (e5)
          throw e5.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i3 = 0; i3 < arguments.length; i3++)
      ar = ar.concat(__read(arguments[i3]));
    return ar;
  }
  function getType(object2) {
    assertIsStateTreeNode(object2, 1);
    return getStateTreeNode(object2).type;
  }
  function applyPatch(target, patch) {
    assertIsStateTreeNode(target, 1);
    assertArg(patch, function(p2) {
      return typeof p2 === "object";
    }, "object or array", 2);
    getStateTreeNode(target).applyPatches(asArray(patch));
  }
  function getSnapshot(target, applyPostProcess) {
    if (applyPostProcess === void 0) {
      applyPostProcess = true;
    }
    assertIsStateTreeNode(target, 1);
    var node = getStateTreeNode(target);
    if (applyPostProcess)
      return node.snapshot;
    return freeze(node.type.getSnapshot(node, false));
  }
  function getRoot(target) {
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).root.storedValue;
  }
  function getPath(target) {
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).path;
  }
  function getIdentifier(target) {
    assertIsStateTreeNode(target, 1);
    return getStateTreeNode(target).identifier;
  }
  var BaseNode = function() {
    function BaseNode2(type, parent, subpath, environment) {
      Object.defineProperty(this, "type", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: type
      });
      Object.defineProperty(this, "environment", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: environment
      });
      Object.defineProperty(this, "_escapedSubpath", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "_subpath", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "_subpathUponDeath", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "_pathUponDeath", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "storedValue", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "aliveAtom", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "_state", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: NodeLifeCycle.INITIALIZING
      });
      Object.defineProperty(this, "_hookSubscribers", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "_parent", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "pathAtom", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      this.environment = environment;
      this.baseSetParent(parent, subpath);
    }
    Object.defineProperty(BaseNode2.prototype, "subpath", {
      get: function() {
        return this._subpath;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseNode2.prototype, "subpathUponDeath", {
      get: function() {
        return this._subpathUponDeath;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseNode2.prototype, "pathUponDeath", {
      get: function() {
        return this._pathUponDeath;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseNode2.prototype, "value", {
      get: function() {
        return this.type.getValue(this);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseNode2.prototype, "state", {
      get: function() {
        return this._state;
      },
      set: function(val) {
        var wasAlive = this.isAlive;
        this._state = val;
        var isAlive = this.isAlive;
        if (this.aliveAtom && wasAlive !== isAlive) {
          this.aliveAtom.reportChanged();
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseNode2.prototype, "fireInternalHook", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(name) {
        if (this._hookSubscribers) {
          this._hookSubscribers.emit(name, this, name);
        }
      }
    });
    Object.defineProperty(BaseNode2.prototype, "registerHook", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(hook, hookHandler) {
        if (!this._hookSubscribers) {
          this._hookSubscribers = new EventHandlers();
        }
        return this._hookSubscribers.register(hook, hookHandler);
      }
    });
    Object.defineProperty(BaseNode2.prototype, "parent", {
      get: function() {
        return this._parent;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseNode2.prototype, "baseSetParent", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath) {
        this._parent = parent;
        this._subpath = subpath;
        this._escapedSubpath = void 0;
        if (this.pathAtom) {
          this.pathAtom.reportChanged();
        }
      }
    });
    Object.defineProperty(BaseNode2.prototype, "path", {
      get: function() {
        return this.getEscapedPath(true);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseNode2.prototype, "getEscapedPath", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(reportObserved2) {
        if (reportObserved2) {
          if (!this.pathAtom) {
            this.pathAtom = createAtom("path");
          }
          this.pathAtom.reportObserved();
        }
        if (!this.parent)
          return "";
        if (this._escapedSubpath === void 0) {
          this._escapedSubpath = !this._subpath ? "" : escapeJsonPath(this._subpath);
        }
        return this.parent.getEscapedPath(reportObserved2) + "/" + this._escapedSubpath;
      }
    });
    Object.defineProperty(BaseNode2.prototype, "isRoot", {
      get: function() {
        return this.parent === null;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseNode2.prototype, "isAlive", {
      get: function() {
        return this.state !== NodeLifeCycle.DEAD;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseNode2.prototype, "isDetaching", {
      get: function() {
        return this.state === NodeLifeCycle.DETACHING;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseNode2.prototype, "observableIsAlive", {
      get: function() {
        if (!this.aliveAtom) {
          this.aliveAtom = createAtom("alive");
        }
        this.aliveAtom.reportObserved();
        return this.isAlive;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseNode2.prototype, "baseFinalizeCreation", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(whenFinalized) {
        if (devMode()) {
          if (!this.isAlive) {
            throw fail("assertion failed: cannot finalize the creation of a node that is already dead");
          }
        }
        if (this.state === NodeLifeCycle.CREATED) {
          if (this.parent) {
            if (this.parent.state !== NodeLifeCycle.FINALIZED) {
              return;
            }
            this.fireHook(Hook.afterAttach);
          }
          this.state = NodeLifeCycle.FINALIZED;
          if (whenFinalized) {
            whenFinalized();
          }
        }
      }
    });
    Object.defineProperty(BaseNode2.prototype, "baseFinalizeDeath", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (this._hookSubscribers) {
          this._hookSubscribers.clearAll();
        }
        this._subpathUponDeath = this._subpath;
        this._pathUponDeath = this.getEscapedPath(false);
        this.baseSetParent(null, "");
        this.state = NodeLifeCycle.DEAD;
      }
    });
    Object.defineProperty(BaseNode2.prototype, "baseAboutToDie", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        this.fireHook(Hook.beforeDestroy);
      }
    });
    return BaseNode2;
  }();
  var ScalarNode = function(_super) {
    __extends(ScalarNode2, _super);
    function ScalarNode2(simpleType, parent, subpath, environment, initialSnapshot) {
      var _this = _super.call(this, simpleType, parent, subpath, environment) || this;
      try {
        _this.storedValue = simpleType.createNewInstance(initialSnapshot);
      } catch (e5) {
        _this.state = NodeLifeCycle.DEAD;
        throw e5;
      }
      _this.state = NodeLifeCycle.CREATED;
      _this.finalizeCreation();
      return _this;
    }
    Object.defineProperty(ScalarNode2.prototype, "root", {
      get: function() {
        if (!this.parent)
          throw fail$1("This scalar node is not part of a tree");
        return this.parent.root;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ScalarNode2.prototype, "setParent", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(newParent, subpath) {
        var parentChanged = this.parent !== newParent;
        var subpathChanged = this.subpath !== subpath;
        if (!parentChanged && !subpathChanged) {
          return;
        }
        if (devMode()) {
          if (!subpath) {
            throw fail$1("assertion failed: subpath expected");
          }
          if (!newParent) {
            throw fail$1("assertion failed: parent expected");
          }
          if (parentChanged) {
            throw fail$1("assertion failed: scalar nodes cannot change their parent");
          }
        }
        this.environment = void 0;
        this.baseSetParent(this.parent, subpath);
      }
    });
    Object.defineProperty(ScalarNode2.prototype, "snapshot", {
      get: function() {
        return freeze(this.getSnapshot());
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ScalarNode2.prototype, "getSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this.type.getSnapshot(this);
      }
    });
    Object.defineProperty(ScalarNode2.prototype, "toString", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var path = (this.isAlive ? this.path : this.pathUponDeath) || "<root>";
        return this.type.name + "@" + path + (this.isAlive ? "" : " [dead]");
      }
    });
    Object.defineProperty(ScalarNode2.prototype, "die", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (!this.isAlive || this.state === NodeLifeCycle.DETACHING)
          return;
        this.aboutToDie();
        this.finalizeDeath();
      }
    });
    Object.defineProperty(ScalarNode2.prototype, "finalizeCreation", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        this.baseFinalizeCreation();
      }
    });
    Object.defineProperty(ScalarNode2.prototype, "aboutToDie", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        this.baseAboutToDie();
      }
    });
    Object.defineProperty(ScalarNode2.prototype, "finalizeDeath", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        this.baseFinalizeDeath();
      }
    });
    Object.defineProperty(ScalarNode2.prototype, "fireHook", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(name) {
        this.fireInternalHook(name);
      }
    });
    return ScalarNode2;
  }(BaseNode);
  ScalarNode.prototype.die = action(ScalarNode.prototype.die);
  var nextNodeId = 1;
  var snapshotReactionOptions = {
    onError: function(e5) {
      throw e5;
    }
  };
  var ObjectNode = function(_super) {
    __extends(ObjectNode2, _super);
    function ObjectNode2(complexType, parent, subpath, environment, initialValue) {
      var _this = _super.call(this, complexType, parent, subpath, environment) || this;
      Object.defineProperty(_this, "nodeId", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: ++nextNodeId
      });
      Object.defineProperty(_this, "identifierAttribute", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "identifier", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "unnormalizedIdentifier", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "identifierCache", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "isProtectionEnabled", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: true
      });
      Object.defineProperty(_this, "middlewares", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "_applyPatches", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "_applySnapshot", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "_autoUnbox", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: true
      });
      Object.defineProperty(_this, "_isRunningAction", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: false
      });
      Object.defineProperty(_this, "_hasSnapshotReaction", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: false
      });
      Object.defineProperty(_this, "_observableInstanceState", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: 0
      });
      Object.defineProperty(_this, "_childNodes", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "_initialSnapshot", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "_cachedInitialSnapshot", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "_cachedInitialSnapshotCreated", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: false
      });
      Object.defineProperty(_this, "_snapshotComputed", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "_snapshotUponDeath", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "_internalEvents", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      _this._snapshotComputed = computed(function() {
        return freeze(_this.getSnapshot());
      });
      _this.unbox = _this.unbox.bind(_this);
      _this._initialSnapshot = freeze(initialValue);
      _this.identifierAttribute = complexType.identifierAttribute;
      if (!parent) {
        _this.identifierCache = new IdentifierCache();
      }
      _this._childNodes = complexType.initializeChildNodes(_this, _this._initialSnapshot);
      _this.identifier = null;
      _this.unnormalizedIdentifier = null;
      if (_this.identifierAttribute && _this._initialSnapshot) {
        var id = _this._initialSnapshot[_this.identifierAttribute];
        if (id === void 0) {
          var childNode = _this._childNodes[_this.identifierAttribute];
          if (childNode) {
            id = childNode.value;
          }
        }
        if (typeof id !== "string" && typeof id !== "number") {
          throw fail$1("Instance identifier '" + _this.identifierAttribute + "' for type '" + _this.type.name + "' must be a string or a number");
        }
        _this.identifier = normalizeIdentifier(id);
        _this.unnormalizedIdentifier = id;
      }
      if (!parent) {
        _this.identifierCache.addNodeToCache(_this);
      } else {
        parent.root.identifierCache.addNodeToCache(_this);
      }
      return _this;
    }
    Object.defineProperty(ObjectNode2.prototype, "applyPatches", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(patches) {
        this.createObservableInstanceIfNeeded();
        this._applyPatches(patches);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "applySnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(snapshot) {
        this.createObservableInstanceIfNeeded();
        this._applySnapshot(snapshot);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "createObservableInstanceIfNeeded", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (this._observableInstanceState === 0) {
          this.createObservableInstance();
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "createObservableInstance", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var e_1, _a2;
        if (devMode()) {
          if (this.state !== NodeLifeCycle.INITIALIZING) {
            throw fail$1("assertion failed: the creation of the observable instance must be done on the initializing phase");
          }
        }
        this._observableInstanceState = 1;
        var parentChain = [];
        var parent = this.parent;
        while (parent && parent._observableInstanceState === 0) {
          parentChain.unshift(parent);
          parent = parent.parent;
        }
        try {
          for (var parentChain_1 = __values(parentChain), parentChain_1_1 = parentChain_1.next(); !parentChain_1_1.done; parentChain_1_1 = parentChain_1.next()) {
            var p2 = parentChain_1_1.value;
            p2.createObservableInstanceIfNeeded();
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (parentChain_1_1 && !parentChain_1_1.done && (_a2 = parentChain_1.return))
              _a2.call(parentChain_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        var type = this.type;
        try {
          this.storedValue = type.createNewInstance(this._childNodes);
          this.preboot();
          this._isRunningAction = true;
          type.finalizeNewInstance(this, this.storedValue);
        } catch (e5) {
          this.state = NodeLifeCycle.DEAD;
          throw e5;
        } finally {
          this._isRunningAction = false;
        }
        this._observableInstanceState = 2;
        this._snapshotComputed.trackAndCompute();
        if (this.isRoot)
          this._addSnapshotReaction();
        this._childNodes = EMPTY_OBJECT2;
        this.state = NodeLifeCycle.CREATED;
        this.fireHook(Hook.afterCreate);
        this.finalizeCreation();
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "root", {
      get: function() {
        var parent = this.parent;
        return parent ? parent.root : this;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ObjectNode2.prototype, "clearParent", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (!this.parent)
          return;
        this.fireHook(Hook.beforeDetach);
        var previousState = this.state;
        this.state = NodeLifeCycle.DETACHING;
        var root = this.root;
        var newEnv = root.environment;
        var newIdCache = root.identifierCache.splitCache(this);
        try {
          this.parent.removeChild(this.subpath);
          this.baseSetParent(null, "");
          this.environment = newEnv;
          this.identifierCache = newIdCache;
        } finally {
          this.state = previousState;
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "setParent", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(newParent, subpath) {
        var parentChanged = newParent !== this.parent;
        var subpathChanged = subpath !== this.subpath;
        if (!parentChanged && !subpathChanged) {
          return;
        }
        if (devMode()) {
          if (!subpath) {
            throw fail$1("assertion failed: subpath expected");
          }
          if (!newParent) {
            throw fail$1("assertion failed: new parent expected");
          }
          if (this.parent && parentChanged) {
            throw fail$1("A node cannot exists twice in the state tree. Failed to add " + this + " to path '" + newParent.path + "/" + subpath + "'.");
          }
          if (!this.parent && newParent.root === this) {
            throw fail$1("A state tree is not allowed to contain itself. Cannot assign " + this + " to path '" + newParent.path + "/" + subpath + "'");
          }
          if (!this.parent && !!this.environment && this.environment !== newParent.root.environment) {
            throw fail$1("A state tree cannot be made part of another state tree as long as their environments are different.");
          }
        }
        if (parentChanged) {
          this.environment = void 0;
          newParent.root.identifierCache.mergeCache(this);
          this.baseSetParent(newParent, subpath);
          this.fireHook(Hook.afterAttach);
        } else if (subpathChanged) {
          this.baseSetParent(this.parent, subpath);
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "fireHook", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(name) {
        var _this = this;
        this.fireInternalHook(name);
        var fn = this.storedValue && typeof this.storedValue === "object" && this.storedValue[name];
        if (typeof fn === "function") {
          if (runInAction) {
            runInAction(function() {
              fn.apply(_this.storedValue);
            });
          } else {
            fn.apply(this.storedValue);
          }
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "snapshot", {
      get: function() {
        return this._snapshotComputed.get();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ObjectNode2.prototype, "getSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (!this.isAlive)
          return this._snapshotUponDeath;
        return this._observableInstanceState === 2 ? this._getActualSnapshot() : this._getCachedInitialSnapshot();
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "_getActualSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this.type.getSnapshot(this);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "_getCachedInitialSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (!this._cachedInitialSnapshotCreated) {
          var type = this.type;
          var childNodes = this._childNodes;
          var snapshot = this._initialSnapshot;
          this._cachedInitialSnapshot = type.processInitialSnapshot(childNodes, snapshot);
          this._cachedInitialSnapshotCreated = true;
        }
        return this._cachedInitialSnapshot;
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "isRunningAction", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (this._isRunningAction)
          return true;
        if (this.isRoot)
          return false;
        return this.parent.isRunningAction();
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "assertAlive", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(context) {
        var livelinessChecking2 = getLivelinessChecking();
        if (!this.isAlive && livelinessChecking2 !== "ignore") {
          var error = this._getAssertAliveError(context);
          switch (livelinessChecking2) {
            case "error":
              throw fail$1(error);
            case "warn":
              warnError(error);
          }
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "_getAssertAliveError", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(context) {
        var escapedPath = this.getEscapedPath(false) || this.pathUponDeath || "";
        var subpath = context.subpath && escapeJsonPath(context.subpath) || "";
        var actionContext = context.actionContext || getCurrentActionContext();
        if (actionContext && actionContext.type !== "action" && actionContext.parentActionEvent) {
          actionContext = actionContext.parentActionEvent;
        }
        var actionFullPath = "";
        if (actionContext && actionContext.name != null) {
          var actionPath = actionContext && actionContext.context && getPath(actionContext.context) || escapedPath;
          actionFullPath = actionPath + "." + actionContext.name + "()";
        }
        return "You are trying to read or write to an object that is no longer part of a state tree. (Object type: '" + this.type.name + "', Path upon death: '" + escapedPath + "', Subpath: '" + subpath + "', Action: '" + actionFullPath + "'). Either detach nodes first, or don't use objects after removing / replacing them in the tree.";
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "getChildNode", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(subpath) {
        this.assertAlive({
          subpath
        });
        this._autoUnbox = false;
        try {
          return this._observableInstanceState === 2 ? this.type.getChildNode(this, subpath) : this._childNodes[subpath];
        } finally {
          this._autoUnbox = true;
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "getChildren", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        this.assertAlive(EMPTY_OBJECT2);
        this._autoUnbox = false;
        try {
          return this._observableInstanceState === 2 ? this.type.getChildren(this) : convertChildNodesToArray(this._childNodes);
        } finally {
          this._autoUnbox = true;
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "getChildType", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(propertyName) {
        return this.type.getChildType(propertyName);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "isProtected", {
      get: function() {
        return this.root.isProtectionEnabled;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ObjectNode2.prototype, "assertWritable", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(context) {
        this.assertAlive(context);
        if (!this.isRunningAction() && this.isProtected) {
          throw fail$1("Cannot modify '" + this + "', the object is protected and can only be modified by using an action.");
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "removeChild", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(subpath) {
        this.type.removeChild(this, subpath);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "unbox", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(childNode) {
        if (!childNode)
          return childNode;
        this.assertAlive({
          subpath: childNode.subpath || childNode.subpathUponDeath
        });
        return this._autoUnbox ? childNode.value : childNode;
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "toString", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var path = (this.isAlive ? this.path : this.pathUponDeath) || "<root>";
        var identifier2 = this.identifier ? "(id: " + this.identifier + ")" : "";
        return this.type.name + "@" + path + identifier2 + (this.isAlive ? "" : " [dead]");
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "finalizeCreation", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var _this = this;
        this.baseFinalizeCreation(function() {
          var e_2, _a2;
          try {
            for (var _b = __values(_this.getChildren()), _c = _b.next(); !_c.done; _c = _b.next()) {
              var child = _c.value;
              child.finalizeCreation();
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_c && !_c.done && (_a2 = _b.return))
                _a2.call(_b);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
          _this.fireInternalHook(Hook.afterCreationFinalization);
        });
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "detach", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (!this.isAlive)
          throw fail$1("Error while detaching, node is not alive.");
        this.clearParent();
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "preboot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var self2 = this;
        this._applyPatches = createActionInvoker(this.storedValue, "@APPLY_PATCHES", function(patches) {
          patches.forEach(function(patch) {
            if (!patch.path) {
              self2.type.applySnapshot(self2, patch.value);
              return;
            }
            var parts = splitJsonPath(patch.path);
            var node = resolveNodeByPathParts(self2, parts.slice(0, -1));
            node.applyPatchLocally(parts[parts.length - 1], patch);
          });
        });
        this._applySnapshot = createActionInvoker(this.storedValue, "@APPLY_SNAPSHOT", function(snapshot) {
          if (snapshot === self2.snapshot)
            return;
          return self2.type.applySnapshot(self2, snapshot);
        });
        addHiddenFinalProp2(this.storedValue, "$treenode", this);
        addHiddenFinalProp2(this.storedValue, "toJSON", toJSON2);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "die", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (!this.isAlive || this.state === NodeLifeCycle.DETACHING)
          return;
        this.aboutToDie();
        this.finalizeDeath();
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "aboutToDie", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (this._observableInstanceState === 0) {
          return;
        }
        this.getChildren().forEach(function(node) {
          node.aboutToDie();
        });
        this.baseAboutToDie();
        this._internalEventsEmit("dispose");
        this._internalEventsClear("dispose");
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "finalizeDeath", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        this.getChildren().forEach(function(node) {
          node.finalizeDeath();
        });
        this.root.identifierCache.notifyDied(this);
        var snapshot = this.snapshot;
        this._snapshotUponDeath = snapshot;
        this._internalEventsClearAll();
        this.baseFinalizeDeath();
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "onSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(onChange) {
        this._addSnapshotReaction();
        return this._internalEventsRegister("snapshot", onChange);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "emitSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(snapshot) {
        this._internalEventsEmit("snapshot", snapshot);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "onPatch", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(handler) {
        return this._internalEventsRegister("patch", handler);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "emitPatch", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(basePatch, source) {
        if (this._internalEventsHasSubscribers("patch")) {
          var localizedPatch = extend({}, basePatch, {
            path: source.path.substr(this.path.length) + "/" + basePatch.path
          });
          var _a2 = __read(splitPatch(localizedPatch), 2), patch = _a2[0], reversePatch = _a2[1];
          this._internalEventsEmit("patch", patch, reversePatch);
        }
        if (this.parent)
          this.parent.emitPatch(basePatch, source);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "hasDisposer", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(disposer) {
        return this._internalEventsHas("dispose", disposer);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "addDisposer", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(disposer) {
        if (!this.hasDisposer(disposer)) {
          this._internalEventsRegister("dispose", disposer, true);
          return;
        }
        throw fail$1("cannot add a disposer when it is already registered for execution");
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "removeDisposer", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(disposer) {
        if (!this._internalEventsHas("dispose", disposer)) {
          throw fail$1("cannot remove a disposer which was never registered for execution");
        }
        this._internalEventsUnregister("dispose", disposer);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "removeMiddleware", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(middleware) {
        if (this.middlewares) {
          var index = this.middlewares.indexOf(middleware);
          if (index >= 0) {
            this.middlewares.splice(index, 1);
          }
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "addMiddleWare", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(handler, includeHooks) {
        var _this = this;
        if (includeHooks === void 0) {
          includeHooks = true;
        }
        var middleware = { handler, includeHooks };
        if (!this.middlewares)
          this.middlewares = [middleware];
        else
          this.middlewares.push(middleware);
        return function() {
          _this.removeMiddleware(middleware);
        };
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "applyPatchLocally", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(subpath, patch) {
        this.assertWritable({
          subpath
        });
        this.createObservableInstanceIfNeeded();
        this.type.applyPatchLocally(this, subpath, patch);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "_addSnapshotReaction", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var _this = this;
        if (!this._hasSnapshotReaction) {
          var snapshotDisposer = reaction(function() {
            return _this.snapshot;
          }, function(snapshot) {
            return _this.emitSnapshot(snapshot);
          }, snapshotReactionOptions);
          this.addDisposer(snapshotDisposer);
          this._hasSnapshotReaction = true;
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "_internalEventsHasSubscribers", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(event) {
        return !!this._internalEvents && this._internalEvents.hasSubscribers(event);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "_internalEventsRegister", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(event, eventHandler, atTheBeginning) {
        if (atTheBeginning === void 0) {
          atTheBeginning = false;
        }
        if (!this._internalEvents) {
          this._internalEvents = new EventHandlers();
        }
        return this._internalEvents.register(event, eventHandler, atTheBeginning);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "_internalEventsHas", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(event, eventHandler) {
        return !!this._internalEvents && this._internalEvents.has(event, eventHandler);
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "_internalEventsUnregister", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(event, eventHandler) {
        if (this._internalEvents) {
          this._internalEvents.unregister(event, eventHandler);
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "_internalEventsEmit", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(event) {
        var _a2;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        if (this._internalEvents) {
          (_a2 = this._internalEvents).emit.apply(_a2, __spread([event], args));
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "_internalEventsClear", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(event) {
        if (this._internalEvents) {
          this._internalEvents.clear(event);
        }
      }
    });
    Object.defineProperty(ObjectNode2.prototype, "_internalEventsClearAll", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (this._internalEvents) {
          this._internalEvents.clearAll();
        }
      }
    });
    return ObjectNode2;
  }(BaseNode);
  ObjectNode.prototype.createObservableInstance = action(ObjectNode.prototype.createObservableInstance);
  ObjectNode.prototype.detach = action(ObjectNode.prototype.detach);
  ObjectNode.prototype.die = action(ObjectNode.prototype.die);
  var _a;
  var TypeFlags;
  (function(TypeFlags2) {
    TypeFlags2[TypeFlags2["String"] = 1] = "String";
    TypeFlags2[TypeFlags2["Number"] = 2] = "Number";
    TypeFlags2[TypeFlags2["Boolean"] = 4] = "Boolean";
    TypeFlags2[TypeFlags2["Date"] = 8] = "Date";
    TypeFlags2[TypeFlags2["Literal"] = 16] = "Literal";
    TypeFlags2[TypeFlags2["Array"] = 32] = "Array";
    TypeFlags2[TypeFlags2["Map"] = 64] = "Map";
    TypeFlags2[TypeFlags2["Object"] = 128] = "Object";
    TypeFlags2[TypeFlags2["Frozen"] = 256] = "Frozen";
    TypeFlags2[TypeFlags2["Optional"] = 512] = "Optional";
    TypeFlags2[TypeFlags2["Reference"] = 1024] = "Reference";
    TypeFlags2[TypeFlags2["Identifier"] = 2048] = "Identifier";
    TypeFlags2[TypeFlags2["Late"] = 4096] = "Late";
    TypeFlags2[TypeFlags2["Refinement"] = 8192] = "Refinement";
    TypeFlags2[TypeFlags2["Union"] = 16384] = "Union";
    TypeFlags2[TypeFlags2["Null"] = 32768] = "Null";
    TypeFlags2[TypeFlags2["Undefined"] = 65536] = "Undefined";
    TypeFlags2[TypeFlags2["Integer"] = 131072] = "Integer";
    TypeFlags2[TypeFlags2["Custom"] = 262144] = "Custom";
    TypeFlags2[TypeFlags2["SnapshotProcessor"] = 524288] = "SnapshotProcessor";
  })(TypeFlags || (TypeFlags = {}));
  var cannotDetermineSubtype = "cannotDetermine";
  var $type = Symbol("$type");
  var BaseType = function() {
    function BaseType2(name) {
      Object.defineProperty(this, _a, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "C", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "S", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "T", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "N", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "isType", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: true
      });
      Object.defineProperty(this, "name", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      this.name = name;
    }
    Object.defineProperty(BaseType2.prototype, "create", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(snapshot, environment) {
        typecheckInternal(this, snapshot);
        return this.instantiate(null, "", environment, snapshot).value;
      }
    });
    Object.defineProperty(BaseType2.prototype, "getSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, applyPostProcess) {
        throw fail$1("unimplemented method");
      }
    });
    Object.defineProperty(BaseType2.prototype, "isAssignableFrom", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(type) {
        return type === this;
      }
    });
    Object.defineProperty(BaseType2.prototype, "validate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        var node = getStateTreeNodeSafe(value);
        if (node) {
          var valueType = getType(value);
          return this.isAssignableFrom(valueType) ? typeCheckSuccess() : typeCheckFailure(context, value);
        }
        return this.isValidSnapshot(value, context);
      }
    });
    Object.defineProperty(BaseType2.prototype, "is", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(thing) {
        return this.validate(thing, [{ path: "", type: this }]).length === 0;
      }
    });
    Object.defineProperty(BaseType2.prototype, "Type", {
      get: function() {
        throw fail$1("Factory.Type should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.Type`");
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseType2.prototype, "TypeWithoutSTN", {
      get: function() {
        throw fail$1("Factory.TypeWithoutSTN should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.TypeWithoutSTN`");
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseType2.prototype, "SnapshotType", {
      get: function() {
        throw fail$1("Factory.SnapshotType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.SnapshotType`");
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseType2.prototype, "CreationType", {
      get: function() {
        throw fail$1("Factory.CreationType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.CreationType`");
      },
      enumerable: false,
      configurable: true
    });
    return BaseType2;
  }();
  _a = $type;
  BaseType.prototype.create = action(BaseType.prototype.create);
  var ComplexType = function(_super) {
    __extends(ComplexType2, _super);
    function ComplexType2(name) {
      var _this = _super.call(this, name) || this;
      Object.defineProperty(_this, "identifierAttribute", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      return _this;
    }
    Object.defineProperty(ComplexType2.prototype, "create", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(snapshot, environment) {
        if (snapshot === void 0) {
          snapshot = this.getDefaultSnapshot();
        }
        return _super.prototype.create.call(this, snapshot, environment);
      }
    });
    Object.defineProperty(ComplexType2.prototype, "getValue", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        node.createObservableInstanceIfNeeded();
        return node.storedValue;
      }
    });
    Object.defineProperty(ComplexType2.prototype, "tryToReconcileNode", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(current, newValue) {
        if (current.isDetaching)
          return false;
        if (current.snapshot === newValue) {
          return true;
        }
        if (isStateTreeNode(newValue) && getStateTreeNode(newValue) === current) {
          return true;
        }
        if (current.type === this && isMutable(newValue) && !isStateTreeNode(newValue) && (!current.identifierAttribute || current.identifier === normalizeIdentifier(newValue[current.identifierAttribute]))) {
          current.applySnapshot(newValue);
          return true;
        }
        return false;
      }
    });
    Object.defineProperty(ComplexType2.prototype, "reconcile", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(current, newValue, parent, subpath) {
        var nodeReconciled = this.tryToReconcileNode(current, newValue);
        if (nodeReconciled) {
          current.setParent(parent, subpath);
          return current;
        }
        current.die();
        if (isStateTreeNode(newValue) && this.isAssignableFrom(getType(newValue))) {
          var newNode = getStateTreeNode(newValue);
          newNode.setParent(parent, subpath);
          return newNode;
        }
        return this.instantiate(parent, subpath, void 0, newValue);
      }
    });
    Object.defineProperty(ComplexType2.prototype, "getSubTypes", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return null;
      }
    });
    return ComplexType2;
  }(BaseType);
  ComplexType.prototype.create = action(ComplexType.prototype.create);
  var SimpleType = function(_super) {
    __extends(SimpleType2, _super);
    function SimpleType2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SimpleType2.prototype, "createNewInstance", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(snapshot) {
        return snapshot;
      }
    });
    Object.defineProperty(SimpleType2.prototype, "getValue", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        return node.storedValue;
      }
    });
    Object.defineProperty(SimpleType2.prototype, "getSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        return node.storedValue;
      }
    });
    Object.defineProperty(SimpleType2.prototype, "reconcile", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(current, newValue, parent, subpath) {
        if (!current.isDetaching && current.type === this && current.storedValue === newValue) {
          return current;
        }
        var res = this.instantiate(parent, subpath, void 0, newValue);
        current.die();
        return res;
      }
    });
    Object.defineProperty(SimpleType2.prototype, "getSubTypes", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return null;
      }
    });
    return SimpleType2;
  }(BaseType);
  function isType(value) {
    return typeof value === "object" && value && value.isType === true;
  }
  function assertIsType(type, argNumber) {
    assertArg(type, isType, "mobx-state-tree type", argNumber);
  }
  var runningActions = new Map();
  var RunningAction = function() {
    function RunningAction2(hooks, call) {
      Object.defineProperty(this, "hooks", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: hooks
      });
      Object.defineProperty(this, "call", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: call
      });
      Object.defineProperty(this, "flowsPending", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: 0
      });
      Object.defineProperty(this, "running", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: true
      });
      if (hooks) {
        hooks.onStart(call);
      }
    }
    Object.defineProperty(RunningAction2.prototype, "finish", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(error) {
        if (this.running) {
          this.running = false;
          if (this.hooks) {
            this.hooks.onFinish(this.call, error);
          }
        }
      }
    });
    Object.defineProperty(RunningAction2.prototype, "incFlowsPending", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        this.flowsPending++;
      }
    });
    Object.defineProperty(RunningAction2.prototype, "decFlowsPending", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        this.flowsPending--;
      }
    });
    Object.defineProperty(RunningAction2.prototype, "hasFlowsPending", {
      get: function() {
        return this.flowsPending > 0;
      },
      enumerable: false,
      configurable: true
    });
    return RunningAction2;
  }();
  var nextActionId2 = 1;
  var currentActionContext;
  function getCurrentActionContext() {
    return currentActionContext;
  }
  function getNextActionId() {
    return nextActionId2++;
  }
  function runWithActionContext(context, fn) {
    var node = getStateTreeNode(context.context);
    if (context.type === "action") {
      node.assertAlive({
        actionContext: context
      });
    }
    var baseIsRunningAction = node._isRunningAction;
    node._isRunningAction = true;
    var previousContext = currentActionContext;
    currentActionContext = context;
    try {
      return runMiddleWares(node, context, fn);
    } finally {
      currentActionContext = previousContext;
      node._isRunningAction = baseIsRunningAction;
    }
  }
  function getParentActionContext(parentContext) {
    if (!parentContext)
      return void 0;
    if (parentContext.type === "action")
      return parentContext;
    return parentContext.parentActionEvent;
  }
  function createActionInvoker(target, name, fn) {
    var res = function() {
      var id = getNextActionId();
      var parentContext = currentActionContext;
      var parentActionContext = getParentActionContext(parentContext);
      return runWithActionContext({
        type: "action",
        name,
        id,
        args: argsToArray(arguments),
        context: target,
        tree: getRoot(target),
        rootId: parentContext ? parentContext.rootId : id,
        parentId: parentContext ? parentContext.id : 0,
        allParentIds: parentContext ? __spread(parentContext.allParentIds, [parentContext.id]) : [],
        parentEvent: parentContext,
        parentActionEvent: parentActionContext
      }, fn);
    };
    res._isMSTAction = true;
    return res;
  }
  var CollectedMiddlewares = function() {
    function CollectedMiddlewares2(node, fn) {
      Object.defineProperty(this, "arrayIndex", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: 0
      });
      Object.defineProperty(this, "inArrayIndex", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: 0
      });
      Object.defineProperty(this, "middlewares", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: []
      });
      if (fn.$mst_middleware) {
        this.middlewares.push(fn.$mst_middleware);
      }
      var n6 = node;
      while (n6) {
        if (n6.middlewares)
          this.middlewares.push(n6.middlewares);
        n6 = n6.parent;
      }
    }
    Object.defineProperty(CollectedMiddlewares2.prototype, "isEmpty", {
      get: function() {
        return this.middlewares.length <= 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CollectedMiddlewares2.prototype, "getNextMiddleware", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var array3 = this.middlewares[this.arrayIndex];
        if (!array3)
          return void 0;
        var item = array3[this.inArrayIndex++];
        if (!item) {
          this.arrayIndex++;
          this.inArrayIndex = 0;
          return this.getNextMiddleware();
        }
        return item;
      }
    });
    return CollectedMiddlewares2;
  }();
  function runMiddleWares(node, baseCall, originalFn) {
    var middlewares = new CollectedMiddlewares(node, originalFn);
    if (middlewares.isEmpty)
      return action(originalFn).apply(null, baseCall.args);
    var result = null;
    function runNextMiddleware(call) {
      var middleware = middlewares.getNextMiddleware();
      var handler = middleware && middleware.handler;
      if (!handler) {
        return action(originalFn).apply(null, call.args);
      }
      if (!middleware.includeHooks && Hook[call.name]) {
        return runNextMiddleware(call);
      }
      var nextInvoked = false;
      function next(call2, callback) {
        nextInvoked = true;
        result = runNextMiddleware(call2);
        if (callback) {
          result = callback(result);
        }
      }
      var abortInvoked = false;
      function abort(value) {
        abortInvoked = true;
        result = value;
      }
      handler(call, next, abort);
      if (devMode()) {
        if (!nextInvoked && !abortInvoked) {
          var node2 = getStateTreeNode(call.tree);
          throw fail$1("Neither the next() nor the abort() callback within the middleware " + handler.name + ' for the action: "' + call.name + '" on the node: ' + node2.type.name + " was invoked.");
        } else if (nextInvoked && abortInvoked) {
          var node2 = getStateTreeNode(call.tree);
          throw fail$1("The next() and abort() callback within the middleware " + handler.name + ' for the action: "' + call.name + '" on the node: ' + node2.type.name + " were invoked.");
        }
      }
      return result;
    }
    return runNextMiddleware(baseCall);
  }
  function safeStringify(value) {
    try {
      return JSON.stringify(value);
    } catch (e5) {
      return "<Unserializable: " + e5 + ">";
    }
  }
  function prettyPrintValue(value) {
    return typeof value === "function" ? "<function" + (value.name ? " " + value.name : "") + ">" : isStateTreeNode(value) ? "<" + value + ">" : "`" + safeStringify(value) + "`";
  }
  function shortenPrintValue(valueInString) {
    return valueInString.length < 280 ? valueInString : valueInString.substring(0, 272) + "......" + valueInString.substring(valueInString.length - 8);
  }
  function toErrorString(error) {
    var value = error.value;
    var type = error.context[error.context.length - 1].type;
    var fullPath = error.context.map(function(_a2) {
      var path = _a2.path;
      return path;
    }).filter(function(path) {
      return path.length > 0;
    }).join("/");
    var pathPrefix = fullPath.length > 0 ? 'at path "/' + fullPath + '" ' : "";
    var currentTypename = isStateTreeNode(value) ? "value of type " + getStateTreeNode(value).type.name + ":" : isPrimitive(value) ? "value" : "snapshot";
    var isSnapshotCompatible = type && isStateTreeNode(value) && type.is(getStateTreeNode(value).snapshot);
    return "" + pathPrefix + currentTypename + " " + prettyPrintValue(value) + " is not assignable " + (type ? "to type: `" + type.name + "`" : "") + (error.message ? " (" + error.message + ")" : "") + (type ? isPrimitiveType(type) || isPrimitive(value) ? "." : ", expected an instance of `" + type.name + "` or a snapshot like `" + type.describe() + "` instead." + (isSnapshotCompatible ? " (Note that a snapshot of the provided value is compatible with the targeted type)" : "") : ".");
  }
  function getContextForPath(context, path, type) {
    return context.concat([{ path, type }]);
  }
  function typeCheckSuccess() {
    return EMPTY_ARRAY2;
  }
  function typeCheckFailure(context, value, message) {
    return [{ context, value, message }];
  }
  function flattenTypeErrors(errors2) {
    return errors2.reduce(function(a2, i3) {
      return a2.concat(i3);
    }, []);
  }
  function typecheckInternal(type, value) {
    if (isTypeCheckingEnabled()) {
      typecheck(type, value);
    }
  }
  function typecheck(type, value) {
    var errors2 = type.validate(value, [{ path: "", type }]);
    if (errors2.length > 0) {
      throw fail$1(validationErrorsToString(type, value, errors2));
    }
  }
  function validationErrorsToString(type, value, errors2) {
    if (errors2.length === 0) {
      return void 0;
    }
    return "Error while converting " + shortenPrintValue(prettyPrintValue(value)) + " to `" + type.name + "`:\n\n    " + errors2.map(toErrorString).join("\n    ");
  }
  var identifierCacheId = 0;
  var IdentifierCache = function() {
    function IdentifierCache2() {
      Object.defineProperty(this, "cacheId", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: identifierCacheId++
      });
      Object.defineProperty(this, "cache", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: observable.map()
      });
      Object.defineProperty(this, "lastCacheModificationPerId", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: observable.map()
      });
    }
    Object.defineProperty(IdentifierCache2.prototype, "updateLastCacheModificationPerId", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(identifier2) {
        var lcm = this.lastCacheModificationPerId.get(identifier2);
        this.lastCacheModificationPerId.set(identifier2, lcm === void 0 ? 1 : lcm + 1);
      }
    });
    Object.defineProperty(IdentifierCache2.prototype, "getLastCacheModificationPerId", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(identifier2) {
        var modificationId = this.lastCacheModificationPerId.get(identifier2) || 0;
        return this.cacheId + "-" + modificationId;
      }
    });
    Object.defineProperty(IdentifierCache2.prototype, "addNodeToCache", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, lastCacheUpdate) {
        if (lastCacheUpdate === void 0) {
          lastCacheUpdate = true;
        }
        if (node.identifierAttribute) {
          var identifier2 = node.identifier;
          if (!this.cache.has(identifier2)) {
            this.cache.set(identifier2, observable.array([], mobxShallow));
          }
          var set5 = this.cache.get(identifier2);
          if (set5.indexOf(node) !== -1)
            throw fail$1("Already registered");
          set5.push(node);
          if (lastCacheUpdate) {
            this.updateLastCacheModificationPerId(identifier2);
          }
        }
      }
    });
    Object.defineProperty(IdentifierCache2.prototype, "mergeCache", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        var _this = this;
        values(node.identifierCache.cache).forEach(function(nodes) {
          return nodes.forEach(function(child) {
            _this.addNodeToCache(child);
          });
        });
      }
    });
    Object.defineProperty(IdentifierCache2.prototype, "notifyDied", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        if (node.identifierAttribute) {
          var id = node.identifier;
          var set5 = this.cache.get(id);
          if (set5) {
            set5.remove(node);
            if (!set5.length) {
              this.cache.delete(id);
            }
            this.updateLastCacheModificationPerId(node.identifier);
          }
        }
      }
    });
    Object.defineProperty(IdentifierCache2.prototype, "splitCache", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        var _this = this;
        var res = new IdentifierCache2();
        var basePath = node.path;
        entries(this.cache).forEach(function(_a2) {
          var _b = __read(_a2, 2), id = _b[0], nodes = _b[1];
          var modified = false;
          for (var i3 = nodes.length - 1; i3 >= 0; i3--) {
            if (nodes[i3].path.indexOf(basePath) === 0) {
              res.addNodeToCache(nodes[i3], false);
              nodes.splice(i3, 1);
              modified = true;
            }
          }
          if (modified) {
            _this.updateLastCacheModificationPerId(id);
          }
        });
        return res;
      }
    });
    Object.defineProperty(IdentifierCache2.prototype, "has", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(type, identifier2) {
        var set5 = this.cache.get(identifier2);
        if (!set5)
          return false;
        return set5.some(function(candidate) {
          return type.isAssignableFrom(candidate.type);
        });
      }
    });
    Object.defineProperty(IdentifierCache2.prototype, "resolve", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(type, identifier2) {
        var set5 = this.cache.get(identifier2);
        if (!set5)
          return null;
        var matches = set5.filter(function(candidate) {
          return type.isAssignableFrom(candidate.type);
        });
        switch (matches.length) {
          case 0:
            return null;
          case 1:
            return matches[0];
          default:
            throw fail$1("Cannot resolve a reference to type '" + type.name + "' with id: '" + identifier2 + "' unambigously, there are multiple candidates: " + matches.map(function(n6) {
              return n6.path;
            }).join(", "));
        }
      }
    });
    return IdentifierCache2;
  }();
  function createObjectNode(type, parent, subpath, environment, initialValue) {
    var existingNode = getStateTreeNodeSafe(initialValue);
    if (existingNode) {
      if (existingNode.parent) {
        throw fail$1("Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '" + (parent ? parent.path : "") + "/" + subpath + "', but it lives already at '" + existingNode.path + "'");
      }
      if (parent) {
        existingNode.setParent(parent, subpath);
      }
      return existingNode;
    }
    return new ObjectNode(type, parent, subpath, environment, initialValue);
  }
  function createScalarNode(type, parent, subpath, environment, initialValue) {
    return new ScalarNode(type, parent, subpath, environment, initialValue);
  }
  function isNode(value) {
    return value instanceof ScalarNode || value instanceof ObjectNode;
  }
  var NodeLifeCycle;
  (function(NodeLifeCycle2) {
    NodeLifeCycle2[NodeLifeCycle2["INITIALIZING"] = 0] = "INITIALIZING";
    NodeLifeCycle2[NodeLifeCycle2["CREATED"] = 1] = "CREATED";
    NodeLifeCycle2[NodeLifeCycle2["FINALIZED"] = 2] = "FINALIZED";
    NodeLifeCycle2[NodeLifeCycle2["DETACHING"] = 3] = "DETACHING";
    NodeLifeCycle2[NodeLifeCycle2["DEAD"] = 4] = "DEAD";
  })(NodeLifeCycle || (NodeLifeCycle = {}));
  function isStateTreeNode(value) {
    return !!(value && value.$treenode);
  }
  function assertIsStateTreeNode(value, argNumber) {
    assertArg(value, isStateTreeNode, "mobx-state-tree node", argNumber);
  }
  function getStateTreeNode(value) {
    if (!isStateTreeNode(value)) {
      throw fail$1("Value " + value + " is no MST Node");
    }
    return value.$treenode;
  }
  function getStateTreeNodeSafe(value) {
    return value && value.$treenode || null;
  }
  function toJSON2() {
    return getStateTreeNode(this).snapshot;
  }
  function resolveNodeByPathParts(base, pathParts, failIfResolveFails) {
    if (failIfResolveFails === void 0) {
      failIfResolveFails = true;
    }
    var current = base;
    for (var i3 = 0; i3 < pathParts.length; i3++) {
      var part = pathParts[i3];
      if (part === "..") {
        current = current.parent;
        if (current)
          continue;
      } else if (part === ".") {
        continue;
      } else if (current) {
        if (current instanceof ScalarNode) {
          try {
            var value = current.value;
            if (isStateTreeNode(value)) {
              current = getStateTreeNode(value);
            }
          } catch (e5) {
            if (!failIfResolveFails) {
              return void 0;
            }
            throw e5;
          }
        }
        if (current instanceof ObjectNode) {
          var subType = current.getChildType(part);
          if (subType) {
            current = current.getChildNode(part);
            if (current)
              continue;
          }
        }
      }
      if (failIfResolveFails)
        throw fail$1("Could not resolve '" + part + "' in path '" + (joinJsonPath(pathParts.slice(0, i3)) || "/") + "' while resolving '" + joinJsonPath(pathParts) + "'");
      else
        return void 0;
    }
    return current;
  }
  function convertChildNodesToArray(childNodes) {
    if (!childNodes)
      return EMPTY_ARRAY2;
    var keys2 = Object.keys(childNodes);
    if (!keys2.length)
      return EMPTY_ARRAY2;
    var result = new Array(keys2.length);
    keys2.forEach(function(key, index) {
      result[index] = childNodes[key];
    });
    return result;
  }
  var plainObjectString2 = Object.toString();
  var EMPTY_ARRAY2 = Object.freeze([]);
  var EMPTY_OBJECT2 = Object.freeze({});
  var mobxShallow = getGlobalState().useProxies ? { deep: false } : { deep: false, proxy: false };
  Object.freeze(mobxShallow);
  function fail$1(message) {
    if (message === void 0) {
      message = "Illegal state";
    }
    return new Error("[mobx-state-tree] " + message);
  }
  function identity(_15) {
    return _15;
  }
  var isInteger = Number.isInteger || function(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
  };
  function isArray(val) {
    return Array.isArray(val) || isObservableArray(val);
  }
  function asArray(val) {
    if (!val)
      return EMPTY_ARRAY2;
    if (isArray(val))
      return val;
    return [val];
  }
  function extend(a2) {
    var b2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      b2[_i - 1] = arguments[_i];
    }
    for (var i3 = 0; i3 < b2.length; i3++) {
      var current = b2[i3];
      for (var key in current)
        a2[key] = current[key];
    }
    return a2;
  }
  function isPlainObject2(value) {
    var _a2;
    if (value === null || typeof value !== "object")
      return false;
    var proto = Object.getPrototypeOf(value);
    if (proto == null)
      return true;
    return ((_a2 = proto.constructor) === null || _a2 === void 0 ? void 0 : _a2.toString()) === plainObjectString2;
  }
  function isMutable(value) {
    return value !== null && typeof value === "object" && !(value instanceof Date) && !(value instanceof RegExp);
  }
  function isPrimitive(value, includeDate) {
    if (includeDate === void 0) {
      includeDate = true;
    }
    if (value === null || value === void 0)
      return true;
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean" || includeDate && value instanceof Date)
      return true;
    return false;
  }
  function freeze(value) {
    if (!devMode())
      return value;
    return isPrimitive(value) || isObservableArray(value) ? value : Object.freeze(value);
  }
  function deepFreeze(value) {
    if (!devMode())
      return value;
    freeze(value);
    if (isPlainObject2(value)) {
      Object.keys(value).forEach(function(propKey) {
        if (!isPrimitive(value[propKey]) && !Object.isFrozen(value[propKey])) {
          deepFreeze(value[propKey]);
        }
      });
    }
    return value;
  }
  function isSerializable(value) {
    return typeof value !== "function";
  }
  function defineProperty3(object2, key, descriptor) {
    isObservableObject(object2) ? apiDefineProperty(object2, key, descriptor) : Object.defineProperty(object2, key, descriptor);
  }
  function addHiddenFinalProp2(object2, propName, value) {
    defineProperty3(object2, propName, {
      enumerable: false,
      writable: false,
      configurable: true,
      value
    });
  }
  function addHiddenWritableProp(object2, propName, value) {
    defineProperty3(object2, propName, {
      enumerable: false,
      writable: true,
      configurable: true,
      value
    });
  }
  var EventHandler = function() {
    function EventHandler2() {
      Object.defineProperty(this, "handlers", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: []
      });
    }
    Object.defineProperty(EventHandler2.prototype, "hasSubscribers", {
      get: function() {
        return this.handlers.length > 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(EventHandler2.prototype, "register", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(fn, atTheBeginning) {
        var _this = this;
        if (atTheBeginning === void 0) {
          atTheBeginning = false;
        }
        if (atTheBeginning) {
          this.handlers.unshift(fn);
        } else {
          this.handlers.push(fn);
        }
        return function() {
          _this.unregister(fn);
        };
      }
    });
    Object.defineProperty(EventHandler2.prototype, "has", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(fn) {
        return this.handlers.indexOf(fn) >= 0;
      }
    });
    Object.defineProperty(EventHandler2.prototype, "unregister", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(fn) {
        var index = this.handlers.indexOf(fn);
        if (index >= 0) {
          this.handlers.splice(index, 1);
        }
      }
    });
    Object.defineProperty(EventHandler2.prototype, "clear", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        this.handlers.length = 0;
      }
    });
    Object.defineProperty(EventHandler2.prototype, "emit", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var handlers = this.handlers.slice();
        handlers.forEach(function(f2) {
          return f2.apply(void 0, __spread(args));
        });
      }
    });
    return EventHandler2;
  }();
  var EventHandlers = function() {
    function EventHandlers2() {
      Object.defineProperty(this, "eventHandlers", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
    }
    Object.defineProperty(EventHandlers2.prototype, "hasSubscribers", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(event) {
        var handler = this.eventHandlers && this.eventHandlers[event];
        return !!handler && handler.hasSubscribers;
      }
    });
    Object.defineProperty(EventHandlers2.prototype, "register", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(event, fn, atTheBeginning) {
        if (atTheBeginning === void 0) {
          atTheBeginning = false;
        }
        if (!this.eventHandlers) {
          this.eventHandlers = {};
        }
        var handler = this.eventHandlers[event];
        if (!handler) {
          handler = this.eventHandlers[event] = new EventHandler();
        }
        return handler.register(fn, atTheBeginning);
      }
    });
    Object.defineProperty(EventHandlers2.prototype, "has", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(event, fn) {
        var handler = this.eventHandlers && this.eventHandlers[event];
        return !!handler && handler.has(fn);
      }
    });
    Object.defineProperty(EventHandlers2.prototype, "unregister", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(event, fn) {
        var handler = this.eventHandlers && this.eventHandlers[event];
        if (handler) {
          handler.unregister(fn);
        }
      }
    });
    Object.defineProperty(EventHandlers2.prototype, "clear", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(event) {
        if (this.eventHandlers) {
          delete this.eventHandlers[event];
        }
      }
    });
    Object.defineProperty(EventHandlers2.prototype, "clearAll", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        this.eventHandlers = void 0;
      }
    });
    Object.defineProperty(EventHandlers2.prototype, "emit", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(event) {
        var _a2;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          args[_i - 1] = arguments[_i];
        }
        var handler = this.eventHandlers && this.eventHandlers[event];
        if (handler) {
          (_a2 = handler).emit.apply(_a2, __spread(args));
        }
      }
    });
    return EventHandlers2;
  }();
  function argsToArray(args) {
    var res = new Array(args.length);
    for (var i3 = 0; i3 < args.length; i3++)
      res[i3] = args[i3];
    return res;
  }
  function stringStartsWith(str, beginning) {
    return str.indexOf(beginning) === 0;
  }
  var deprecated = function(id, message) {
    if (!devMode())
      return;
    if (deprecated.ids && !deprecated.ids.hasOwnProperty(id)) {
      warnError("Deprecation warning: " + message);
    }
    if (deprecated.ids)
      deprecated.ids[id] = true;
  };
  deprecated.ids = {};
  function warnError(msg) {
    console.warn(new Error("[mobx-state-tree] " + msg));
  }
  function isTypeCheckingEnabled() {
    return devMode() || typeof process !== "undefined" && process.env && process.env.ENABLE_TYPE_CHECK === "true";
  }
  function devMode() {
    return true;
  }
  function assertArg(value, fn, typeName, argNumber) {
    if (devMode()) {
      if (!fn(value)) {
        throw fail$1("expected " + typeName + " as argument " + asArray(argNumber).join(" or ") + ", got " + value + " instead");
      }
    }
  }
  function assertIsFunction(value, argNumber) {
    assertArg(value, function(fn) {
      return typeof fn === "function";
    }, "function", argNumber);
  }
  function assertIsString(value, argNumber, canBeEmpty) {
    if (canBeEmpty === void 0) {
      canBeEmpty = true;
    }
    assertArg(value, function(s5) {
      return typeof s5 === "string";
    }, "string", argNumber);
    if (!canBeEmpty) {
      assertArg(value, function(s5) {
        return s5 !== "";
      }, "not empty string", argNumber);
    }
  }
  function setImmediateWithFallback(fn) {
    if (typeof queueMicrotask === "function") {
      queueMicrotask(fn);
    } else if (typeof setImmediate === "function") {
      setImmediate(fn);
    } else {
      setTimeout(fn, 1);
    }
  }
  function flow3(generator) {
    return createFlowSpawner(generator.name, generator);
  }
  function createFlowSpawner(name, generator) {
    var spawner = function flowSpawner() {
      var runId = getNextActionId();
      var parentContext = getCurrentActionContext();
      if (!parentContext) {
        throw fail$1("a mst flow must always have a parent context");
      }
      var parentActionContext = getParentActionContext(parentContext);
      if (!parentActionContext) {
        throw fail$1("a mst flow must always have a parent action context");
      }
      var contextBase = {
        name,
        id: runId,
        tree: parentContext.tree,
        context: parentContext.context,
        parentId: parentContext.id,
        allParentIds: __spread(parentContext.allParentIds, [parentContext.id]),
        rootId: parentContext.rootId,
        parentEvent: parentContext,
        parentActionEvent: parentActionContext
      };
      var args = arguments;
      function wrap(fn, type, arg) {
        fn.$mst_middleware = spawner.$mst_middleware;
        runWithActionContext(__assign(__assign({}, contextBase), { type, args: [arg] }), fn);
      }
      return new Promise(function(resolve, reject) {
        var gen;
        var init = function asyncActionInit() {
          gen = generator.apply(null, arguments);
          onFulfilled(void 0);
        };
        init.$mst_middleware = spawner.$mst_middleware;
        runWithActionContext(__assign(__assign({}, contextBase), { type: "flow_spawn", args: argsToArray(args) }), init);
        function onFulfilled(res) {
          var ret;
          try {
            wrap(function(r4) {
              ret = gen.next(r4);
            }, "flow_resume", res);
          } catch (e5) {
            setImmediateWithFallback(function() {
              wrap(function(r4) {
                reject(e5);
              }, "flow_throw", e5);
            });
            return;
          }
          next(ret);
          return;
        }
        function onRejected(err) {
          var ret;
          try {
            wrap(function(r4) {
              ret = gen.throw(r4);
            }, "flow_resume_error", err);
          } catch (e5) {
            setImmediateWithFallback(function() {
              wrap(function(r4) {
                reject(e5);
              }, "flow_throw", e5);
            });
            return;
          }
          next(ret);
        }
        function next(ret) {
          if (ret.done) {
            setImmediateWithFallback(function() {
              wrap(function(r4) {
                resolve(r4);
              }, "flow_return", ret.value);
            });
            return;
          }
          if (!ret.value || typeof ret.value.then !== "function") {
            throw fail$1("Only promises can be yielded to `async`, got: " + ret);
          }
          return ret.value.then(onFulfilled, onRejected);
        }
      });
    };
    return spawner;
  }
  function splitPatch(patch) {
    if (!("oldValue" in patch))
      throw fail$1("Patches without `oldValue` field cannot be inversed");
    return [stripPatch(patch), invertPatch(patch)];
  }
  function stripPatch(patch) {
    switch (patch.op) {
      case "add":
        return { op: "add", path: patch.path, value: patch.value };
      case "remove":
        return { op: "remove", path: patch.path };
      case "replace":
        return { op: "replace", path: patch.path, value: patch.value };
    }
  }
  function invertPatch(patch) {
    switch (patch.op) {
      case "add":
        return {
          op: "remove",
          path: patch.path
        };
      case "remove":
        return {
          op: "add",
          path: patch.path,
          value: patch.oldValue
        };
      case "replace":
        return {
          op: "replace",
          path: patch.path,
          value: patch.oldValue
        };
    }
  }
  function isNumber(x2) {
    return typeof x2 === "number";
  }
  function escapeJsonPath(path) {
    if (isNumber(path) === true) {
      return "" + path;
    }
    if (path.indexOf("/") === -1 && path.indexOf("~") === -1)
      return path;
    return path.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  function unescapeJsonPath(path) {
    return path.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  function joinJsonPath(path) {
    if (path.length === 0)
      return "";
    var getPathStr = function(p2) {
      return p2.map(escapeJsonPath).join("/");
    };
    if (path[0] === "." || path[0] === "..") {
      return getPathStr(path);
    } else {
      return "/" + getPathStr(path);
    }
  }
  function splitJsonPath(path) {
    var parts = path.split("/").map(unescapeJsonPath);
    var valid = path === "" || path === "." || path === ".." || stringStartsWith(path, "/") || stringStartsWith(path, "./") || stringStartsWith(path, "../");
    if (!valid) {
      throw fail$1("a json path must be either rooted, empty or relative, but got '" + path + "'");
    }
    if (parts[0] === "") {
      parts.shift();
    }
    return parts;
  }
  var SnapshotProcessor = function(_super) {
    __extends(SnapshotProcessor2, _super);
    function SnapshotProcessor2(_subtype, _processors, name) {
      var _this = _super.call(this, name || _subtype.name) || this;
      Object.defineProperty(_this, "_subtype", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _subtype
      });
      Object.defineProperty(_this, "_processors", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _processors
      });
      return _this;
    }
    Object.defineProperty(SnapshotProcessor2.prototype, "flags", {
      get: function() {
        return this._subtype.flags | TypeFlags.SnapshotProcessor;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SnapshotProcessor2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return "snapshotProcessor(" + this._subtype.describe() + ")";
      }
    });
    Object.defineProperty(SnapshotProcessor2.prototype, "preProcessSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(sn) {
        if (this._processors.preProcessor) {
          return this._processors.preProcessor.call(null, sn);
        }
        return sn;
      }
    });
    Object.defineProperty(SnapshotProcessor2.prototype, "postProcessSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(sn) {
        if (this._processors.postProcessor) {
          return this._processors.postProcessor.call(null, sn);
        }
        return sn;
      }
    });
    Object.defineProperty(SnapshotProcessor2.prototype, "_fixNode", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        var _this = this;
        proxyNodeTypeMethods(node.type, this, "create");
        var oldGetSnapshot = node.getSnapshot;
        node.getSnapshot = function() {
          return _this.postProcessSnapshot(oldGetSnapshot.call(node));
        };
      }
    });
    Object.defineProperty(SnapshotProcessor2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        var processedInitialValue = isStateTreeNode(initialValue) ? initialValue : this.preProcessSnapshot(initialValue);
        var node = this._subtype.instantiate(parent, subpath, environment, processedInitialValue);
        this._fixNode(node);
        return node;
      }
    });
    Object.defineProperty(SnapshotProcessor2.prototype, "reconcile", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(current, newValue, parent, subpath) {
        var node = this._subtype.reconcile(current, isStateTreeNode(newValue) ? newValue : this.preProcessSnapshot(newValue), parent, subpath);
        if (node !== current) {
          this._fixNode(node);
        }
        return node;
      }
    });
    Object.defineProperty(SnapshotProcessor2.prototype, "getSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, applyPostProcess) {
        if (applyPostProcess === void 0) {
          applyPostProcess = true;
        }
        var sn = this._subtype.getSnapshot(node);
        return applyPostProcess ? this.postProcessSnapshot(sn) : sn;
      }
    });
    Object.defineProperty(SnapshotProcessor2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        var processedSn = this.preProcessSnapshot(value);
        return this._subtype.validate(processedSn, context);
      }
    });
    Object.defineProperty(SnapshotProcessor2.prototype, "getSubTypes", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this._subtype;
      }
    });
    Object.defineProperty(SnapshotProcessor2.prototype, "is", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(thing) {
        var value = isType(thing) ? this._subtype : isStateTreeNode(thing) ? getSnapshot(thing, false) : this.preProcessSnapshot(thing);
        return this._subtype.validate(value, [{ path: "", type: this._subtype }]).length === 0;
      }
    });
    Object.defineProperty(SnapshotProcessor2.prototype, "isAssignableFrom", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(type) {
        return this._subtype.isAssignableFrom(type);
      }
    });
    return SnapshotProcessor2;
  }(BaseType);
  function proxyNodeTypeMethods(nodeType, snapshotProcessorType) {
    var e_1, _a2;
    var methods = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      methods[_i - 2] = arguments[_i];
    }
    try {
      for (var methods_1 = __values(methods), methods_1_1 = methods_1.next(); !methods_1_1.done; methods_1_1 = methods_1.next()) {
        var method = methods_1_1.value;
        nodeType[method] = snapshotProcessorType[method].bind(snapshotProcessorType);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (methods_1_1 && !methods_1_1.done && (_a2 = methods_1.return))
          _a2.call(methods_1);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  }
  function snapshotProcessor(type, processors, name) {
    assertIsType(type, 1);
    if (devMode()) {
      if (processors.postProcessor && typeof processors.postProcessor !== "function") {
        throw fail("postSnapshotProcessor must be a function");
      }
      if (processors.preProcessor && typeof processors.preProcessor !== "function") {
        throw fail("preSnapshotProcessor must be a function");
      }
    }
    return new SnapshotProcessor(type, processors, name);
  }
  var needsIdentifierError = "Map.put can only be used to store complex values that have an identifier type attribute";
  function tryCollectModelTypes(type, modelTypes) {
    var e_1, _a2;
    var subtypes = type.getSubTypes();
    if (subtypes === cannotDetermineSubtype) {
      return false;
    }
    if (subtypes) {
      var subtypesArray = asArray(subtypes);
      try {
        for (var subtypesArray_1 = __values(subtypesArray), subtypesArray_1_1 = subtypesArray_1.next(); !subtypesArray_1_1.done; subtypesArray_1_1 = subtypesArray_1.next()) {
          var subtype = subtypesArray_1_1.value;
          if (!tryCollectModelTypes(subtype, modelTypes))
            return false;
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (subtypesArray_1_1 && !subtypesArray_1_1.done && (_a2 = subtypesArray_1.return))
            _a2.call(subtypesArray_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    }
    if (type instanceof ModelType) {
      modelTypes.push(type);
    }
    return true;
  }
  var MapIdentifierMode;
  (function(MapIdentifierMode2) {
    MapIdentifierMode2[MapIdentifierMode2["UNKNOWN"] = 0] = "UNKNOWN";
    MapIdentifierMode2[MapIdentifierMode2["YES"] = 1] = "YES";
    MapIdentifierMode2[MapIdentifierMode2["NO"] = 2] = "NO";
  })(MapIdentifierMode || (MapIdentifierMode = {}));
  var MSTMap = function(_super) {
    __extends(MSTMap2, _super);
    function MSTMap2(initialData) {
      return _super.call(this, initialData, observable.ref.enhancer) || this;
    }
    Object.defineProperty(MSTMap2.prototype, "get", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(key) {
        return _super.prototype.get.call(this, "" + key);
      }
    });
    Object.defineProperty(MSTMap2.prototype, "has", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(key) {
        return _super.prototype.has.call(this, "" + key);
      }
    });
    Object.defineProperty(MSTMap2.prototype, "delete", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(key) {
        return _super.prototype.delete.call(this, "" + key);
      }
    });
    Object.defineProperty(MSTMap2.prototype, "set", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(key, value) {
        return _super.prototype.set.call(this, "" + key, value);
      }
    });
    Object.defineProperty(MSTMap2.prototype, "put", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value) {
        if (!value)
          throw fail$1("Map.put cannot be used to set empty values");
        if (isStateTreeNode(value)) {
          var node = getStateTreeNode(value);
          if (devMode()) {
            if (!node.identifierAttribute) {
              throw fail$1(needsIdentifierError);
            }
          }
          if (node.identifier === null) {
            throw fail$1(needsIdentifierError);
          }
          this.set(node.identifier, value);
          return value;
        } else if (!isMutable(value)) {
          throw fail$1("Map.put can only be used to store complex values");
        } else {
          var mapNode = getStateTreeNode(this);
          var mapType = mapNode.type;
          if (mapType.identifierMode !== MapIdentifierMode.YES) {
            throw fail$1(needsIdentifierError);
          }
          var idAttr = mapType.mapIdentifierAttribute;
          var id = value[idAttr];
          if (!isValidIdentifier(id)) {
            var newNode = this.put(mapType.getChildType().create(value, mapNode.environment));
            return this.put(getSnapshot(newNode));
          }
          var key = normalizeIdentifier(id);
          this.set(key, value);
          return this.get(key);
        }
      }
    });
    return MSTMap2;
  }(ObservableMap);
  var MapType = function(_super) {
    __extends(MapType2, _super);
    function MapType2(name, _subType, hookInitializers) {
      if (hookInitializers === void 0) {
        hookInitializers = [];
      }
      var _this = _super.call(this, name) || this;
      Object.defineProperty(_this, "_subType", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _subType
      });
      Object.defineProperty(_this, "identifierMode", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: MapIdentifierMode.UNKNOWN
      });
      Object.defineProperty(_this, "mapIdentifierAttribute", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "flags", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: TypeFlags.Map
      });
      Object.defineProperty(_this, "hookInitializers", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: []
      });
      _this._determineIdentifierMode();
      _this.hookInitializers = hookInitializers;
      return _this;
    }
    Object.defineProperty(MapType2.prototype, "hooks", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(hooks) {
        var hookInitializers = this.hookInitializers.length > 0 ? this.hookInitializers.concat(hooks) : [hooks];
        return new MapType2(this.name, this._subType, hookInitializers);
      }
    });
    Object.defineProperty(MapType2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        this._determineIdentifierMode();
        return createObjectNode(this, parent, subpath, environment, initialValue);
      }
    });
    Object.defineProperty(MapType2.prototype, "_determineIdentifierMode", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        if (this.identifierMode !== MapIdentifierMode.UNKNOWN) {
          return;
        }
        var modelTypes = [];
        if (tryCollectModelTypes(this._subType, modelTypes)) {
          var identifierAttribute_1 = void 0;
          modelTypes.forEach(function(type) {
            if (type.identifierAttribute) {
              if (identifierAttribute_1 && identifierAttribute_1 !== type.identifierAttribute) {
                throw fail$1("The objects in a map should all have the same identifier attribute, expected '" + identifierAttribute_1 + "', but child of type '" + type.name + "' declared attribute '" + type.identifierAttribute + "' as identifier");
              }
              identifierAttribute_1 = type.identifierAttribute;
            }
          });
          if (identifierAttribute_1) {
            this.identifierMode = MapIdentifierMode.YES;
            this.mapIdentifierAttribute = identifierAttribute_1;
          } else {
            this.identifierMode = MapIdentifierMode.NO;
          }
        }
      }
    });
    Object.defineProperty(MapType2.prototype, "initializeChildNodes", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(objNode, initialSnapshot) {
        if (initialSnapshot === void 0) {
          initialSnapshot = {};
        }
        var subType = objNode.type._subType;
        var result = {};
        Object.keys(initialSnapshot).forEach(function(name) {
          result[name] = subType.instantiate(objNode, name, void 0, initialSnapshot[name]);
        });
        return result;
      }
    });
    Object.defineProperty(MapType2.prototype, "createNewInstance", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(childNodes) {
        return new MSTMap(childNodes);
      }
    });
    Object.defineProperty(MapType2.prototype, "finalizeNewInstance", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, instance) {
        interceptReads(instance, node.unbox);
        var type = node.type;
        type.hookInitializers.forEach(function(initializer) {
          var hooks = initializer(instance);
          Object.keys(hooks).forEach(function(name) {
            var hook = hooks[name];
            var actionInvoker = createActionInvoker(instance, name, hook);
            (!devMode() ? addHiddenFinalProp2 : addHiddenWritableProp)(instance, name, actionInvoker);
          });
        });
        intercept(instance, this.willChange);
        observe(instance, this.didChange);
      }
    });
    Object.defineProperty(MapType2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return "Map<string, " + this._subType.describe() + ">";
      }
    });
    Object.defineProperty(MapType2.prototype, "getChildren", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        return values(node.storedValue);
      }
    });
    Object.defineProperty(MapType2.prototype, "getChildNode", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, key) {
        var childNode = node.storedValue.get("" + key);
        if (!childNode)
          throw fail$1("Not a child " + key);
        return childNode;
      }
    });
    Object.defineProperty(MapType2.prototype, "willChange", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(change) {
        var node = getStateTreeNode(change.object);
        var key = change.name;
        node.assertWritable({ subpath: key });
        var mapType = node.type;
        var subType = mapType._subType;
        switch (change.type) {
          case "update":
            {
              var newValue = change.newValue;
              var oldValue = change.object.get(key);
              if (newValue === oldValue)
                return null;
              typecheckInternal(subType, newValue);
              change.newValue = subType.reconcile(node.getChildNode(key), change.newValue, node, key);
              mapType.processIdentifier(key, change.newValue);
            }
            break;
          case "add":
            {
              typecheckInternal(subType, change.newValue);
              change.newValue = subType.instantiate(node, key, void 0, change.newValue);
              mapType.processIdentifier(key, change.newValue);
            }
            break;
        }
        return change;
      }
    });
    Object.defineProperty(MapType2.prototype, "processIdentifier", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(expected, node) {
        if (this.identifierMode === MapIdentifierMode.YES && node instanceof ObjectNode) {
          var identifier2 = node.identifier;
          if (identifier2 !== expected)
            throw fail$1("A map of objects containing an identifier should always store the object under their own identifier. Trying to store key '" + identifier2 + "', but expected: '" + expected + "'");
        }
      }
    });
    Object.defineProperty(MapType2.prototype, "getSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        var res = {};
        node.getChildren().forEach(function(childNode) {
          res[childNode.subpath] = childNode.snapshot;
        });
        return res;
      }
    });
    Object.defineProperty(MapType2.prototype, "processInitialSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(childNodes) {
        var processed = {};
        Object.keys(childNodes).forEach(function(key) {
          processed[key] = childNodes[key].getSnapshot();
        });
        return processed;
      }
    });
    Object.defineProperty(MapType2.prototype, "didChange", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(change) {
        var node = getStateTreeNode(change.object);
        switch (change.type) {
          case "update":
            return void node.emitPatch({
              op: "replace",
              path: escapeJsonPath(change.name),
              value: change.newValue.snapshot,
              oldValue: change.oldValue ? change.oldValue.snapshot : void 0
            }, node);
          case "add":
            return void node.emitPatch({
              op: "add",
              path: escapeJsonPath(change.name),
              value: change.newValue.snapshot,
              oldValue: void 0
            }, node);
          case "delete":
            var oldSnapshot = change.oldValue.snapshot;
            change.oldValue.die();
            return void node.emitPatch({
              op: "remove",
              path: escapeJsonPath(change.name),
              oldValue: oldSnapshot
            }, node);
        }
      }
    });
    Object.defineProperty(MapType2.prototype, "applyPatchLocally", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, subpath, patch) {
        var target = node.storedValue;
        switch (patch.op) {
          case "add":
          case "replace":
            target.set(subpath, patch.value);
            break;
          case "remove":
            target.delete(subpath);
            break;
        }
      }
    });
    Object.defineProperty(MapType2.prototype, "applySnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, snapshot) {
        typecheckInternal(this, snapshot);
        var target = node.storedValue;
        var currentKeys = {};
        Array.from(target.keys()).forEach(function(key2) {
          currentKeys[key2] = false;
        });
        if (snapshot) {
          for (var key in snapshot) {
            target.set(key, snapshot[key]);
            currentKeys["" + key] = true;
          }
        }
        Object.keys(currentKeys).forEach(function(key2) {
          if (currentKeys[key2] === false)
            target.delete(key2);
        });
      }
    });
    Object.defineProperty(MapType2.prototype, "getChildType", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this._subType;
      }
    });
    Object.defineProperty(MapType2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        var _this = this;
        if (!isPlainObject2(value)) {
          return typeCheckFailure(context, value, "Value is not a plain object");
        }
        return flattenTypeErrors(Object.keys(value).map(function(path) {
          return _this._subType.validate(value[path], getContextForPath(context, path, _this._subType));
        }));
      }
    });
    Object.defineProperty(MapType2.prototype, "getDefaultSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return EMPTY_OBJECT2;
      }
    });
    Object.defineProperty(MapType2.prototype, "removeChild", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, subpath) {
        node.storedValue.delete(subpath);
      }
    });
    return MapType2;
  }(ComplexType);
  MapType.prototype.applySnapshot = action(MapType.prototype.applySnapshot);
  function map2(subtype) {
    return new MapType("map<string, " + subtype.name + ">", subtype);
  }
  var ArrayType = function(_super) {
    __extends(ArrayType2, _super);
    function ArrayType2(name, _subType, hookInitializers) {
      if (hookInitializers === void 0) {
        hookInitializers = [];
      }
      var _this = _super.call(this, name) || this;
      Object.defineProperty(_this, "_subType", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _subType
      });
      Object.defineProperty(_this, "flags", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: TypeFlags.Array
      });
      Object.defineProperty(_this, "hookInitializers", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: []
      });
      _this.hookInitializers = hookInitializers;
      return _this;
    }
    Object.defineProperty(ArrayType2.prototype, "hooks", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(hooks) {
        var hookInitializers = this.hookInitializers.length > 0 ? this.hookInitializers.concat(hooks) : [hooks];
        return new ArrayType2(this.name, this._subType, hookInitializers);
      }
    });
    Object.defineProperty(ArrayType2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        return createObjectNode(this, parent, subpath, environment, initialValue);
      }
    });
    Object.defineProperty(ArrayType2.prototype, "initializeChildNodes", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(objNode, snapshot) {
        if (snapshot === void 0) {
          snapshot = [];
        }
        var subType = objNode.type._subType;
        var result = {};
        snapshot.forEach(function(item, index) {
          var subpath = "" + index;
          result[subpath] = subType.instantiate(objNode, subpath, void 0, item);
        });
        return result;
      }
    });
    Object.defineProperty(ArrayType2.prototype, "createNewInstance", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(childNodes) {
        return observable.array(convertChildNodesToArray(childNodes), mobxShallow);
      }
    });
    Object.defineProperty(ArrayType2.prototype, "finalizeNewInstance", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, instance) {
        getAdministration(instance).dehancer = node.unbox;
        var type = node.type;
        type.hookInitializers.forEach(function(initializer) {
          var hooks = initializer(instance);
          Object.keys(hooks).forEach(function(name) {
            var hook = hooks[name];
            var actionInvoker = createActionInvoker(instance, name, hook);
            (!devMode() ? addHiddenFinalProp2 : addHiddenWritableProp)(instance, name, actionInvoker);
          });
        });
        intercept(instance, this.willChange);
        observe(instance, this.didChange);
      }
    });
    Object.defineProperty(ArrayType2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this._subType.describe() + "[]";
      }
    });
    Object.defineProperty(ArrayType2.prototype, "getChildren", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        return node.storedValue.slice();
      }
    });
    Object.defineProperty(ArrayType2.prototype, "getChildNode", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, key) {
        var index = Number(key);
        if (index < node.storedValue.length)
          return node.storedValue[index];
        throw fail$1("Not a child: " + key);
      }
    });
    Object.defineProperty(ArrayType2.prototype, "willChange", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(change) {
        var node = getStateTreeNode(change.object);
        node.assertWritable({ subpath: "" + change.index });
        var subType = node.type._subType;
        var childNodes = node.getChildren();
        switch (change.type) {
          case "update":
            {
              if (change.newValue === change.object[change.index])
                return null;
              var updatedNodes = reconcileArrayChildren(node, subType, [childNodes[change.index]], [change.newValue], [change.index]);
              if (!updatedNodes) {
                return null;
              }
              change.newValue = updatedNodes[0];
            }
            break;
          case "splice":
            {
              var index_1 = change.index, removedCount = change.removedCount, added = change.added;
              var addedNodes = reconcileArrayChildren(node, subType, childNodes.slice(index_1, index_1 + removedCount), added, added.map(function(_15, i4) {
                return index_1 + i4;
              }));
              if (!addedNodes) {
                return null;
              }
              change.added = addedNodes;
              for (var i3 = index_1 + removedCount; i3 < childNodes.length; i3++) {
                childNodes[i3].setParent(node, "" + (i3 + added.length - removedCount));
              }
            }
            break;
        }
        return change;
      }
    });
    Object.defineProperty(ArrayType2.prototype, "getSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        return node.getChildren().map(function(childNode) {
          return childNode.snapshot;
        });
      }
    });
    Object.defineProperty(ArrayType2.prototype, "processInitialSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(childNodes) {
        var processed = [];
        Object.keys(childNodes).forEach(function(key) {
          processed.push(childNodes[key].getSnapshot());
        });
        return processed;
      }
    });
    Object.defineProperty(ArrayType2.prototype, "didChange", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(change) {
        var node = getStateTreeNode(change.object);
        switch (change.type) {
          case "update":
            return void node.emitPatch({
              op: "replace",
              path: "" + change.index,
              value: change.newValue.snapshot,
              oldValue: change.oldValue ? change.oldValue.snapshot : void 0
            }, node);
          case "splice":
            for (var i3 = change.removedCount - 1; i3 >= 0; i3--)
              node.emitPatch({
                op: "remove",
                path: "" + (change.index + i3),
                oldValue: change.removed[i3].snapshot
              }, node);
            for (var i3 = 0; i3 < change.addedCount; i3++)
              node.emitPatch({
                op: "add",
                path: "" + (change.index + i3),
                value: node.getChildNode("" + (change.index + i3)).snapshot,
                oldValue: void 0
              }, node);
            return;
        }
      }
    });
    Object.defineProperty(ArrayType2.prototype, "applyPatchLocally", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, subpath, patch) {
        var target = node.storedValue;
        var index = subpath === "-" ? target.length : Number(subpath);
        switch (patch.op) {
          case "replace":
            target[index] = patch.value;
            break;
          case "add":
            target.splice(index, 0, patch.value);
            break;
          case "remove":
            target.splice(index, 1);
            break;
        }
      }
    });
    Object.defineProperty(ArrayType2.prototype, "applySnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, snapshot) {
        typecheckInternal(this, snapshot);
        var target = node.storedValue;
        target.replace(snapshot);
      }
    });
    Object.defineProperty(ArrayType2.prototype, "getChildType", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this._subType;
      }
    });
    Object.defineProperty(ArrayType2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        var _this = this;
        if (!isArray(value)) {
          return typeCheckFailure(context, value, "Value is not an array");
        }
        return flattenTypeErrors(value.map(function(item, index) {
          return _this._subType.validate(item, getContextForPath(context, "" + index, _this._subType));
        }));
      }
    });
    Object.defineProperty(ArrayType2.prototype, "getDefaultSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return EMPTY_ARRAY2;
      }
    });
    Object.defineProperty(ArrayType2.prototype, "removeChild", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, subpath) {
        node.storedValue.splice(Number(subpath), 1);
      }
    });
    return ArrayType2;
  }(ComplexType);
  ArrayType.prototype.applySnapshot = action(ArrayType.prototype.applySnapshot);
  function array2(subtype) {
    assertIsType(subtype, 1);
    return new ArrayType(subtype.name + "[]", subtype);
  }
  function reconcileArrayChildren(parent, childType, oldNodes, newValues, newPaths) {
    var nothingChanged = true;
    for (var i3 = 0; ; i3++) {
      var hasNewNode = i3 <= newValues.length - 1;
      var oldNode = oldNodes[i3];
      var newValue = hasNewNode ? newValues[i3] : void 0;
      var newPath = "" + newPaths[i3];
      if (isNode(newValue))
        newValue = newValue.storedValue;
      if (!oldNode && !hasNewNode) {
        break;
      } else if (!hasNewNode) {
        nothingChanged = false;
        oldNodes.splice(i3, 1);
        if (oldNode instanceof ObjectNode) {
          oldNode.createObservableInstanceIfNeeded();
        }
        oldNode.die();
        i3--;
      } else if (!oldNode) {
        if (isStateTreeNode(newValue) && getStateTreeNode(newValue).parent === parent) {
          throw fail$1("Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '" + parent.path + "/" + newPath + "', but it lives already at '" + getStateTreeNode(newValue).path + "'");
        }
        nothingChanged = false;
        var newNode = valueAsNode(childType, parent, newPath, newValue);
        oldNodes.splice(i3, 0, newNode);
      } else if (areSame(oldNode, newValue)) {
        oldNodes[i3] = valueAsNode(childType, parent, newPath, newValue, oldNode);
      } else {
        var oldMatch = void 0;
        for (var j = i3; j < oldNodes.length; j++) {
          if (areSame(oldNodes[j], newValue)) {
            oldMatch = oldNodes.splice(j, 1)[0];
            break;
          }
        }
        nothingChanged = false;
        var newNode = valueAsNode(childType, parent, newPath, newValue, oldMatch);
        oldNodes.splice(i3, 0, newNode);
      }
    }
    return nothingChanged ? null : oldNodes;
  }
  function valueAsNode(childType, parent, subpath, newValue, oldNode) {
    typecheckInternal(childType, newValue);
    function getNewNode() {
      if (isStateTreeNode(newValue)) {
        var childNode = getStateTreeNode(newValue);
        childNode.assertAlive(EMPTY_OBJECT2);
        if (childNode.parent !== null && childNode.parent === parent) {
          childNode.setParent(parent, subpath);
          return childNode;
        }
      }
      if (oldNode) {
        return childType.reconcile(oldNode, newValue, parent, subpath);
      }
      return childType.instantiate(parent, subpath, void 0, newValue);
    }
    var newNode = getNewNode();
    if (oldNode && oldNode !== newNode) {
      if (oldNode instanceof ObjectNode) {
        oldNode.createObservableInstanceIfNeeded();
      }
      oldNode.die();
    }
    return newNode;
  }
  function areSame(oldNode, newValue) {
    if (!oldNode.isAlive) {
      return false;
    }
    if (isStateTreeNode(newValue)) {
      var newNode = getStateTreeNode(newValue);
      return newNode.isAlive && newNode === oldNode;
    }
    if (oldNode.snapshot === newValue) {
      return true;
    }
    return oldNode instanceof ObjectNode && oldNode.identifier !== null && oldNode.identifierAttribute && isPlainObject2(newValue) && oldNode.identifier === normalizeIdentifier(newValue[oldNode.identifierAttribute]) && oldNode.type.is(newValue);
  }
  var PRE_PROCESS_SNAPSHOT = "preProcessSnapshot";
  var POST_PROCESS_SNAPSHOT = "postProcessSnapshot";
  function objectTypeToString() {
    return getStateTreeNode(this).toString();
  }
  var defaultObjectOptions = {
    name: "AnonymousModel",
    properties: {},
    initializers: EMPTY_ARRAY2
  };
  function toPropertiesObject(declaredProps) {
    return Object.keys(declaredProps).reduce(function(props, key) {
      var _a2, _b, _c;
      if (key in Hook)
        throw fail$1("Hook '" + key + "' was defined as property. Hooks should be defined as part of the actions");
      var descriptor = Object.getOwnPropertyDescriptor(props, key);
      if ("get" in descriptor) {
        throw fail$1("Getters are not supported as properties. Please use views instead");
      }
      var value = descriptor.value;
      if (value === null || value === void 0) {
        throw fail$1("The default value of an attribute cannot be null or undefined as the type cannot be inferred. Did you mean `types.maybe(someType)`?");
      } else if (isPrimitive(value)) {
        return Object.assign({}, props, (_a2 = {}, _a2[key] = optional(getPrimitiveFactoryFromValue(value), value), _a2));
      } else if (value instanceof MapType) {
        return Object.assign({}, props, (_b = {}, _b[key] = optional(value, {}), _b));
      } else if (value instanceof ArrayType) {
        return Object.assign({}, props, (_c = {}, _c[key] = optional(value, []), _c));
      } else if (isType(value)) {
        return props;
      } else if (devMode() && typeof value === "function") {
        throw fail$1("Invalid type definition for property '" + key + "', it looks like you passed a function. Did you forget to invoke it, or did you intend to declare a view / action?");
      } else if (devMode() && typeof value === "object") {
        throw fail$1("Invalid type definition for property '" + key + "', it looks like you passed an object. Try passing another model type or a types.frozen.");
      } else {
        throw fail$1("Invalid type definition for property '" + key + "', cannot infer a type from a value like '" + value + "' (" + typeof value + ")");
      }
    }, declaredProps);
  }
  var ModelType = function(_super) {
    __extends(ModelType2, _super);
    function ModelType2(opts) {
      var _this = _super.call(this, opts.name || defaultObjectOptions.name) || this;
      Object.defineProperty(_this, "flags", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: TypeFlags.Object
      });
      Object.defineProperty(_this, "initializers", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "properties", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "preProcessor", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "postProcessor", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "propertyNames", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "named", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: function(name) {
          return _this.cloneAndEnhance({ name });
        }
      });
      Object.defineProperty(_this, "props", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: function(properties) {
          return _this.cloneAndEnhance({ properties });
        }
      });
      Object.defineProperty(_this, "preProcessSnapshot", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: function(preProcessor) {
          var currentPreprocessor = _this.preProcessor;
          if (!currentPreprocessor)
            return _this.cloneAndEnhance({ preProcessor });
          else
            return _this.cloneAndEnhance({
              preProcessor: function(snapshot) {
                return currentPreprocessor(preProcessor(snapshot));
              }
            });
        }
      });
      Object.defineProperty(_this, "postProcessSnapshot", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: function(postProcessor2) {
          var currentPostprocessor = _this.postProcessor;
          if (!currentPostprocessor)
            return _this.cloneAndEnhance({ postProcessor: postProcessor2 });
          else
            return _this.cloneAndEnhance({
              postProcessor: function(snapshot) {
                return postProcessor2(currentPostprocessor(snapshot));
              }
            });
        }
      });
      Object.assign(_this, defaultObjectOptions, opts);
      _this.properties = toPropertiesObject(_this.properties);
      freeze(_this.properties);
      _this.propertyNames = Object.keys(_this.properties);
      _this.identifierAttribute = _this._getIdentifierAttribute();
      return _this;
    }
    Object.defineProperty(ModelType2.prototype, "_getIdentifierAttribute", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var identifierAttribute = void 0;
        this.forAllProps(function(propName, propType) {
          if (propType.flags & TypeFlags.Identifier) {
            if (identifierAttribute)
              throw fail$1("Cannot define property '" + propName + "' as object identifier, property '" + identifierAttribute + "' is already defined as identifier property");
            identifierAttribute = propName;
          }
        });
        return identifierAttribute;
      }
    });
    Object.defineProperty(ModelType2.prototype, "cloneAndEnhance", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(opts) {
        return new ModelType2({
          name: opts.name || this.name,
          properties: Object.assign({}, this.properties, opts.properties),
          initializers: this.initializers.concat(opts.initializers || []),
          preProcessor: opts.preProcessor || this.preProcessor,
          postProcessor: opts.postProcessor || this.postProcessor
        });
      }
    });
    Object.defineProperty(ModelType2.prototype, "actions", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(fn) {
        var _this = this;
        var actionInitializer = function(self2) {
          _this.instantiateActions(self2, fn(self2));
          return self2;
        };
        return this.cloneAndEnhance({ initializers: [actionInitializer] });
      }
    });
    Object.defineProperty(ModelType2.prototype, "instantiateActions", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(self2, actions) {
        if (!isPlainObject2(actions))
          throw fail$1("actions initializer should return a plain object containing actions");
        Object.keys(actions).forEach(function(name) {
          if (name === PRE_PROCESS_SNAPSHOT)
            throw fail$1("Cannot define action '" + PRE_PROCESS_SNAPSHOT + "', it should be defined using 'type.preProcessSnapshot(fn)' instead");
          if (name === POST_PROCESS_SNAPSHOT)
            throw fail$1("Cannot define action '" + POST_PROCESS_SNAPSHOT + "', it should be defined using 'type.postProcessSnapshot(fn)' instead");
          var action2 = actions[name];
          var baseAction = self2[name];
          if (name in Hook && baseAction) {
            var specializedAction_1 = action2;
            action2 = function() {
              baseAction.apply(null, arguments);
              specializedAction_1.apply(null, arguments);
            };
          }
          var middlewares = action2.$mst_middleware;
          var boundAction = action2.bind(actions);
          boundAction.$mst_middleware = middlewares;
          var actionInvoker = createActionInvoker(self2, name, boundAction);
          actions[name] = actionInvoker;
          (!devMode() ? addHiddenFinalProp2 : addHiddenWritableProp)(self2, name, actionInvoker);
        });
      }
    });
    Object.defineProperty(ModelType2.prototype, "volatile", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(fn) {
        var _this = this;
        if (typeof fn !== "function") {
          throw fail$1("You passed an " + typeof fn + " to volatile state as an argument, when function is expected");
        }
        var stateInitializer = function(self2) {
          _this.instantiateVolatileState(self2, fn(self2));
          return self2;
        };
        return this.cloneAndEnhance({ initializers: [stateInitializer] });
      }
    });
    Object.defineProperty(ModelType2.prototype, "instantiateVolatileState", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(self2, state) {
        if (!isPlainObject2(state))
          throw fail$1("volatile state initializer should return a plain object containing state");
        set2(self2, state);
      }
    });
    Object.defineProperty(ModelType2.prototype, "extend", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(fn) {
        var _this = this;
        var initializer = function(self2) {
          var _a2 = fn(self2), actions = _a2.actions, views = _a2.views, state = _a2.state, rest = __rest(_a2, ["actions", "views", "state"]);
          for (var key in rest)
            throw fail$1("The `extend` function should return an object with a subset of the fields 'actions', 'views' and 'state'. Found invalid key '" + key + "'");
          if (state)
            _this.instantiateVolatileState(self2, state);
          if (views)
            _this.instantiateViews(self2, views);
          if (actions)
            _this.instantiateActions(self2, actions);
          return self2;
        };
        return this.cloneAndEnhance({ initializers: [initializer] });
      }
    });
    Object.defineProperty(ModelType2.prototype, "views", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(fn) {
        var _this = this;
        var viewInitializer = function(self2) {
          _this.instantiateViews(self2, fn(self2));
          return self2;
        };
        return this.cloneAndEnhance({ initializers: [viewInitializer] });
      }
    });
    Object.defineProperty(ModelType2.prototype, "instantiateViews", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(self2, views) {
        if (!isPlainObject2(views))
          throw fail$1("views initializer should return a plain object containing views");
        Object.keys(views).forEach(function(key) {
          var _a2;
          var descriptor = Object.getOwnPropertyDescriptor(views, key);
          if ("get" in descriptor) {
            apiDefineProperty(self2, key, descriptor);
            makeObservable(self2, (_a2 = {}, _a2[key] = computed, _a2));
          } else if (typeof descriptor.value === "function") {
            (!devMode() ? addHiddenFinalProp2 : addHiddenWritableProp)(self2, key, descriptor.value);
          } else {
            throw fail$1("A view member should either be a function or getter based property");
          }
        });
      }
    });
    Object.defineProperty(ModelType2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        var value = isStateTreeNode(initialValue) ? initialValue : this.applySnapshotPreProcessor(initialValue);
        return createObjectNode(this, parent, subpath, environment, value);
      }
    });
    Object.defineProperty(ModelType2.prototype, "initializeChildNodes", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(objNode, initialSnapshot) {
        if (initialSnapshot === void 0) {
          initialSnapshot = {};
        }
        var type = objNode.type;
        var result = {};
        type.forAllProps(function(name, childType) {
          result[name] = childType.instantiate(objNode, name, void 0, initialSnapshot[name]);
        });
        return result;
      }
    });
    Object.defineProperty(ModelType2.prototype, "createNewInstance", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(childNodes) {
        return observable.object(childNodes, EMPTY_OBJECT2, mobxShallow);
      }
    });
    Object.defineProperty(ModelType2.prototype, "finalizeNewInstance", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, instance) {
        addHiddenFinalProp2(instance, "toString", objectTypeToString);
        this.forAllProps(function(name) {
          interceptReads(instance, name, node.unbox);
        });
        this.initializers.reduce(function(self2, fn) {
          return fn(self2);
        }, instance);
        intercept(instance, this.willChange);
        observe(instance, this.didChange);
      }
    });
    Object.defineProperty(ModelType2.prototype, "willChange", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(chg) {
        var change = chg;
        var node = getStateTreeNode(change.object);
        var subpath = change.name;
        node.assertWritable({ subpath });
        var childType = node.type.properties[subpath];
        if (childType) {
          typecheckInternal(childType, change.newValue);
          change.newValue = childType.reconcile(node.getChildNode(subpath), change.newValue, node, subpath);
        }
        return change;
      }
    });
    Object.defineProperty(ModelType2.prototype, "didChange", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(chg) {
        var change = chg;
        var childNode = getStateTreeNode(change.object);
        var childType = childNode.type.properties[change.name];
        if (!childType) {
          return;
        }
        var oldChildValue = change.oldValue ? change.oldValue.snapshot : void 0;
        childNode.emitPatch({
          op: "replace",
          path: escapeJsonPath(change.name),
          value: change.newValue.snapshot,
          oldValue: oldChildValue
        }, childNode);
      }
    });
    Object.defineProperty(ModelType2.prototype, "getChildren", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        var _this = this;
        var res = [];
        this.forAllProps(function(name) {
          res.push(_this.getChildNode(node, name));
        });
        return res;
      }
    });
    Object.defineProperty(ModelType2.prototype, "getChildNode", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, key) {
        if (!(key in this.properties))
          throw fail$1("Not a value property: " + key);
        var adm = getAdministration(node.storedValue, key);
        var childNode = adm.raw();
        if (!childNode)
          throw fail$1("Node not available for property " + key);
        return childNode;
      }
    });
    Object.defineProperty(ModelType2.prototype, "getSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, applyPostProcess) {
        var _this = this;
        if (applyPostProcess === void 0) {
          applyPostProcess = true;
        }
        var res = {};
        this.forAllProps(function(name, type) {
          getAtom(node.storedValue, name).reportObserved();
          res[name] = _this.getChildNode(node, name).snapshot;
        });
        if (applyPostProcess) {
          return this.applySnapshotPostProcessor(res);
        }
        return res;
      }
    });
    Object.defineProperty(ModelType2.prototype, "processInitialSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(childNodes) {
        var processed = {};
        Object.keys(childNodes).forEach(function(key) {
          processed[key] = childNodes[key].getSnapshot();
        });
        return this.applySnapshotPostProcessor(processed);
      }
    });
    Object.defineProperty(ModelType2.prototype, "applyPatchLocally", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, subpath, patch) {
        if (!(patch.op === "replace" || patch.op === "add")) {
          throw fail$1("object does not support operation " + patch.op);
        }
        node.storedValue[subpath] = patch.value;
      }
    });
    Object.defineProperty(ModelType2.prototype, "applySnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, snapshot) {
        var preProcessedSnapshot = this.applySnapshotPreProcessor(snapshot);
        typecheckInternal(this, preProcessedSnapshot);
        this.forAllProps(function(name) {
          node.storedValue[name] = preProcessedSnapshot[name];
        });
      }
    });
    Object.defineProperty(ModelType2.prototype, "applySnapshotPreProcessor", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(snapshot) {
        var processor = this.preProcessor;
        return processor ? processor.call(null, snapshot) : snapshot;
      }
    });
    Object.defineProperty(ModelType2.prototype, "applySnapshotPostProcessor", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(snapshot) {
        var postProcessor2 = this.postProcessor;
        if (postProcessor2)
          return postProcessor2.call(null, snapshot);
        return snapshot;
      }
    });
    Object.defineProperty(ModelType2.prototype, "getChildType", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(propertyName) {
        assertIsString(propertyName, 1);
        return this.properties[propertyName];
      }
    });
    Object.defineProperty(ModelType2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        var _this = this;
        var snapshot = this.applySnapshotPreProcessor(value);
        if (!isPlainObject2(snapshot)) {
          return typeCheckFailure(context, snapshot, "Value is not a plain object");
        }
        return flattenTypeErrors(this.propertyNames.map(function(key) {
          return _this.properties[key].validate(snapshot[key], getContextForPath(context, key, _this.properties[key]));
        }));
      }
    });
    Object.defineProperty(ModelType2.prototype, "forAllProps", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(fn) {
        var _this = this;
        this.propertyNames.forEach(function(key) {
          return fn(key, _this.properties[key]);
        });
      }
    });
    Object.defineProperty(ModelType2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var _this = this;
        return "{ " + this.propertyNames.map(function(key) {
          return key + ": " + _this.properties[key].describe();
        }).join("; ") + " }";
      }
    });
    Object.defineProperty(ModelType2.prototype, "getDefaultSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return EMPTY_OBJECT2;
      }
    });
    Object.defineProperty(ModelType2.prototype, "removeChild", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node, subpath) {
        node.storedValue[subpath] = void 0;
      }
    });
    return ModelType2;
  }(ComplexType);
  ModelType.prototype.applySnapshot = action(ModelType.prototype.applySnapshot);
  function model() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var name = typeof args[0] === "string" ? args.shift() : "AnonymousModel";
    var properties = args.shift() || {};
    return new ModelType({ name, properties });
  }
  function compose() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var hasTypename = typeof args[0] === "string";
    var typeName = hasTypename ? args[0] : "AnonymousModel";
    if (hasTypename) {
      args.shift();
    }
    if (devMode()) {
      args.forEach(function(type, i3) {
        assertArg(type, isModelType, "mobx-state-tree model type", hasTypename ? i3 + 2 : i3 + 1);
      });
    }
    return args.reduce(function(prev, cur) {
      return prev.cloneAndEnhance({
        name: prev.name + "_" + cur.name,
        properties: cur.properties,
        initializers: cur.initializers,
        preProcessor: function(snapshot) {
          return cur.applySnapshotPreProcessor(prev.applySnapshotPreProcessor(snapshot));
        },
        postProcessor: function(snapshot) {
          return cur.applySnapshotPostProcessor(prev.applySnapshotPostProcessor(snapshot));
        }
      });
    }).named(typeName);
  }
  function isModelType(type) {
    return isType(type) && (type.flags & TypeFlags.Object) > 0;
  }
  var CoreType = function(_super) {
    __extends(CoreType2, _super);
    function CoreType2(name, flags, checker, initializer) {
      if (initializer === void 0) {
        initializer = identity;
      }
      var _this = _super.call(this, name) || this;
      Object.defineProperty(_this, "flags", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: flags
      });
      Object.defineProperty(_this, "checker", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: checker
      });
      Object.defineProperty(_this, "initializer", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: initializer
      });
      _this.flags = flags;
      return _this;
    }
    Object.defineProperty(CoreType2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this.name;
      }
    });
    Object.defineProperty(CoreType2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        return createScalarNode(this, parent, subpath, environment, initialValue);
      }
    });
    Object.defineProperty(CoreType2.prototype, "createNewInstance", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(snapshot) {
        return this.initializer(snapshot);
      }
    });
    Object.defineProperty(CoreType2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        if (isPrimitive(value) && this.checker(value)) {
          return typeCheckSuccess();
        }
        var typeName = this.name === "Date" ? "Date or a unix milliseconds timestamp" : this.name;
        return typeCheckFailure(context, value, "Value is not a " + typeName);
      }
    });
    return CoreType2;
  }(SimpleType);
  var string = new CoreType("string", TypeFlags.String, function(v2) {
    return typeof v2 === "string";
  });
  var number = new CoreType("number", TypeFlags.Number, function(v2) {
    return typeof v2 === "number";
  });
  var integer = new CoreType("integer", TypeFlags.Integer, function(v2) {
    return isInteger(v2);
  });
  var boolean = new CoreType("boolean", TypeFlags.Boolean, function(v2) {
    return typeof v2 === "boolean";
  });
  var nullType = new CoreType("null", TypeFlags.Null, function(v2) {
    return v2 === null;
  });
  var undefinedType = new CoreType("undefined", TypeFlags.Undefined, function(v2) {
    return v2 === void 0;
  });
  var _DatePrimitive = new CoreType("Date", TypeFlags.Date, function(v2) {
    return typeof v2 === "number" || v2 instanceof Date;
  }, function(v2) {
    return v2 instanceof Date ? v2 : new Date(v2);
  });
  _DatePrimitive.getSnapshot = function(node) {
    return node.storedValue.getTime();
  };
  var DatePrimitive = _DatePrimitive;
  function getPrimitiveFactoryFromValue(value) {
    switch (typeof value) {
      case "string":
        return string;
      case "number":
        return number;
      case "boolean":
        return boolean;
      case "object":
        if (value instanceof Date)
          return DatePrimitive;
    }
    throw fail$1("Cannot determine primitive type from value " + value);
  }
  function isPrimitiveType(type) {
    return isType(type) && (type.flags & (TypeFlags.String | TypeFlags.Number | TypeFlags.Integer | TypeFlags.Boolean | TypeFlags.Date)) > 0;
  }
  var Literal = function(_super) {
    __extends(Literal2, _super);
    function Literal2(value) {
      var _this = _super.call(this, JSON.stringify(value)) || this;
      Object.defineProperty(_this, "value", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "flags", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: TypeFlags.Literal
      });
      _this.value = value;
      return _this;
    }
    Object.defineProperty(Literal2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        return createScalarNode(this, parent, subpath, environment, initialValue);
      }
    });
    Object.defineProperty(Literal2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return JSON.stringify(this.value);
      }
    });
    Object.defineProperty(Literal2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        if (isPrimitive(value) && value === this.value) {
          return typeCheckSuccess();
        }
        return typeCheckFailure(context, value, "Value is not a literal " + JSON.stringify(this.value));
      }
    });
    return Literal2;
  }(SimpleType);
  function literal(value) {
    assertArg(value, isPrimitive, "primitive", 1);
    return new Literal(value);
  }
  var Refinement = function(_super) {
    __extends(Refinement2, _super);
    function Refinement2(name, _subtype, _predicate, _message) {
      var _this = _super.call(this, name) || this;
      Object.defineProperty(_this, "_subtype", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _subtype
      });
      Object.defineProperty(_this, "_predicate", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _predicate
      });
      Object.defineProperty(_this, "_message", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _message
      });
      return _this;
    }
    Object.defineProperty(Refinement2.prototype, "flags", {
      get: function() {
        return this._subtype.flags | TypeFlags.Refinement;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Refinement2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this.name;
      }
    });
    Object.defineProperty(Refinement2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        return this._subtype.instantiate(parent, subpath, environment, initialValue);
      }
    });
    Object.defineProperty(Refinement2.prototype, "isAssignableFrom", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(type) {
        return this._subtype.isAssignableFrom(type);
      }
    });
    Object.defineProperty(Refinement2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        var subtypeErrors = this._subtype.validate(value, context);
        if (subtypeErrors.length > 0)
          return subtypeErrors;
        var snapshot = isStateTreeNode(value) ? getStateTreeNode(value).snapshot : value;
        if (!this._predicate(snapshot)) {
          return typeCheckFailure(context, value, this._message(value));
        }
        return typeCheckSuccess();
      }
    });
    Object.defineProperty(Refinement2.prototype, "reconcile", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(current, newValue, parent, subpath) {
        return this._subtype.reconcile(current, newValue, parent, subpath);
      }
    });
    Object.defineProperty(Refinement2.prototype, "getSubTypes", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this._subtype;
      }
    });
    return Refinement2;
  }(BaseType);
  function refinement() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var name = typeof args[0] === "string" ? args.shift() : isType(args[0]) ? args[0].name : null;
    var type = args[0];
    var predicate = args[1];
    var message = args[2] ? args[2] : function(v2) {
      return "Value does not respect the refinement predicate";
    };
    assertIsType(type, [1, 2]);
    assertIsString(name, 1);
    assertIsFunction(predicate, [2, 3]);
    assertIsFunction(message, [3, 4]);
    return new Refinement(name, type, predicate, message);
  }
  function enumeration(name, options) {
    var realOptions = typeof name === "string" ? options : name;
    if (devMode()) {
      realOptions.forEach(function(option, i3) {
        assertIsString(option, i3 + 1);
      });
    }
    var type = union.apply(void 0, __spread(realOptions.map(function(option) {
      return literal("" + option);
    })));
    if (typeof name === "string")
      type.name = name;
    return type;
  }
  var Union = function(_super) {
    __extends(Union2, _super);
    function Union2(name, _types, options) {
      var _this = _super.call(this, name) || this;
      Object.defineProperty(_this, "_types", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _types
      });
      Object.defineProperty(_this, "_dispatcher", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(_this, "_eager", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: true
      });
      options = __assign({ eager: true, dispatcher: void 0 }, options);
      _this._dispatcher = options.dispatcher;
      if (!options.eager)
        _this._eager = false;
      return _this;
    }
    Object.defineProperty(Union2.prototype, "flags", {
      get: function() {
        var result = TypeFlags.Union;
        this._types.forEach(function(type) {
          result |= type.flags;
        });
        return result;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Union2.prototype, "isAssignableFrom", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(type) {
        return this._types.some(function(subType) {
          return subType.isAssignableFrom(type);
        });
      }
    });
    Object.defineProperty(Union2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return "(" + this._types.map(function(factory) {
          return factory.describe();
        }).join(" | ") + ")";
      }
    });
    Object.defineProperty(Union2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        var type = this.determineType(initialValue, void 0);
        if (!type)
          throw fail$1("No matching type for union " + this.describe());
        return type.instantiate(parent, subpath, environment, initialValue);
      }
    });
    Object.defineProperty(Union2.prototype, "reconcile", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(current, newValue, parent, subpath) {
        var type = this.determineType(newValue, current.type);
        if (!type)
          throw fail$1("No matching type for union " + this.describe());
        return type.reconcile(current, newValue, parent, subpath);
      }
    });
    Object.defineProperty(Union2.prototype, "determineType", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, reconcileCurrentType) {
        if (this._dispatcher) {
          return this._dispatcher(value);
        }
        if (reconcileCurrentType) {
          if (reconcileCurrentType.is(value)) {
            return reconcileCurrentType;
          }
          return this._types.filter(function(t3) {
            return t3 !== reconcileCurrentType;
          }).find(function(type) {
            return type.is(value);
          });
        } else {
          return this._types.find(function(type) {
            return type.is(value);
          });
        }
      }
    });
    Object.defineProperty(Union2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        if (this._dispatcher) {
          return this._dispatcher(value).validate(value, context);
        }
        var allErrors = [];
        var applicableTypes = 0;
        for (var i3 = 0; i3 < this._types.length; i3++) {
          var type = this._types[i3];
          var errors2 = type.validate(value, context);
          if (errors2.length === 0) {
            if (this._eager)
              return typeCheckSuccess();
            else
              applicableTypes++;
          } else {
            allErrors.push(errors2);
          }
        }
        if (applicableTypes === 1)
          return typeCheckSuccess();
        return typeCheckFailure(context, value, "No type is applicable for the union").concat(flattenTypeErrors(allErrors));
      }
    });
    Object.defineProperty(Union2.prototype, "getSubTypes", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this._types;
      }
    });
    return Union2;
  }(BaseType);
  function union(optionsOrType) {
    var otherTypes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      otherTypes[_i - 1] = arguments[_i];
    }
    var options = isType(optionsOrType) ? void 0 : optionsOrType;
    var types2 = isType(optionsOrType) ? __spread([optionsOrType], otherTypes) : otherTypes;
    var name = "(" + types2.map(function(type) {
      return type.name;
    }).join(" | ") + ")";
    if (devMode()) {
      if (options) {
        assertArg(options, function(o6) {
          return isPlainObject2(o6);
        }, "object { eager?: boolean, dispatcher?: Function }", 1);
      }
      types2.forEach(function(type, i3) {
        assertIsType(type, options ? i3 + 2 : i3 + 1);
      });
    }
    return new Union(name, types2, options);
  }
  var OptionalValue = function(_super) {
    __extends(OptionalValue2, _super);
    function OptionalValue2(_subtype, _defaultValue, optionalValues) {
      var _this = _super.call(this, _subtype.name) || this;
      Object.defineProperty(_this, "_subtype", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _subtype
      });
      Object.defineProperty(_this, "_defaultValue", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _defaultValue
      });
      Object.defineProperty(_this, "optionalValues", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: optionalValues
      });
      return _this;
    }
    Object.defineProperty(OptionalValue2.prototype, "flags", {
      get: function() {
        return this._subtype.flags | TypeFlags.Optional;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(OptionalValue2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this._subtype.describe() + "?";
      }
    });
    Object.defineProperty(OptionalValue2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        if (this.optionalValues.indexOf(initialValue) >= 0) {
          var defaultInstanceOrSnapshot = this.getDefaultInstanceOrSnapshot();
          return this._subtype.instantiate(parent, subpath, environment, defaultInstanceOrSnapshot);
        }
        return this._subtype.instantiate(parent, subpath, environment, initialValue);
      }
    });
    Object.defineProperty(OptionalValue2.prototype, "reconcile", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(current, newValue, parent, subpath) {
        return this._subtype.reconcile(current, this.optionalValues.indexOf(newValue) < 0 && this._subtype.is(newValue) ? newValue : this.getDefaultInstanceOrSnapshot(), parent, subpath);
      }
    });
    Object.defineProperty(OptionalValue2.prototype, "getDefaultInstanceOrSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var defaultInstanceOrSnapshot = typeof this._defaultValue === "function" ? this._defaultValue() : this._defaultValue;
        if (typeof this._defaultValue === "function") {
          typecheckInternal(this, defaultInstanceOrSnapshot);
        }
        return defaultInstanceOrSnapshot;
      }
    });
    Object.defineProperty(OptionalValue2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        if (this.optionalValues.indexOf(value) >= 0) {
          return typeCheckSuccess();
        }
        return this._subtype.validate(value, context);
      }
    });
    Object.defineProperty(OptionalValue2.prototype, "isAssignableFrom", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(type) {
        return this._subtype.isAssignableFrom(type);
      }
    });
    Object.defineProperty(OptionalValue2.prototype, "getSubTypes", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this._subtype;
      }
    });
    return OptionalValue2;
  }(BaseType);
  function checkOptionalPreconditions(type, defaultValueOrFunction) {
    if (typeof defaultValueOrFunction !== "function" && isStateTreeNode(defaultValueOrFunction)) {
      throw fail$1("default value cannot be an instance, pass a snapshot or a function that creates an instance/snapshot instead");
    }
    assertIsType(type, 1);
    if (devMode()) {
      if (typeof defaultValueOrFunction !== "function") {
        typecheckInternal(type, defaultValueOrFunction);
      }
    }
  }
  function optional(type, defaultValueOrFunction, optionalValues) {
    checkOptionalPreconditions(type, defaultValueOrFunction);
    return new OptionalValue(type, defaultValueOrFunction, optionalValues ? optionalValues : undefinedAsOptionalValues);
  }
  var undefinedAsOptionalValues = [void 0];
  var optionalUndefinedType = optional(undefinedType, void 0);
  var optionalNullType = optional(nullType, null);
  function maybe(type) {
    assertIsType(type, 1);
    return union(type, optionalUndefinedType);
  }
  function maybeNull(type) {
    assertIsType(type, 1);
    return union(type, optionalNullType);
  }
  var Late = function(_super) {
    __extends(Late2, _super);
    function Late2(name, _definition) {
      var _this = _super.call(this, name) || this;
      Object.defineProperty(_this, "_definition", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _definition
      });
      Object.defineProperty(_this, "_subType", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      return _this;
    }
    Object.defineProperty(Late2.prototype, "flags", {
      get: function() {
        return (this._subType ? this._subType.flags : 0) | TypeFlags.Late;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Late2.prototype, "getSubType", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(mustSucceed) {
        if (!this._subType) {
          var t3 = void 0;
          try {
            t3 = this._definition();
          } catch (e5) {
            if (e5 instanceof ReferenceError)
              t3 = void 0;
            else
              throw e5;
          }
          if (mustSucceed && t3 === void 0)
            throw fail$1("Late type seems to be used too early, the definition (still) returns undefined");
          if (t3) {
            if (devMode() && !isType(t3))
              throw fail$1("Failed to determine subtype, make sure types.late returns a type definition.");
            this._subType = t3;
          }
        }
        return this._subType;
      }
    });
    Object.defineProperty(Late2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        return this.getSubType(true).instantiate(parent, subpath, environment, initialValue);
      }
    });
    Object.defineProperty(Late2.prototype, "reconcile", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(current, newValue, parent, subpath) {
        return this.getSubType(true).reconcile(current, newValue, parent, subpath);
      }
    });
    Object.defineProperty(Late2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var t3 = this.getSubType(false);
        return t3 ? t3.name : "<uknown late type>";
      }
    });
    Object.defineProperty(Late2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        var t3 = this.getSubType(false);
        if (!t3) {
          return typeCheckSuccess();
        }
        return t3.validate(value, context);
      }
    });
    Object.defineProperty(Late2.prototype, "isAssignableFrom", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(type) {
        var t3 = this.getSubType(false);
        return t3 ? t3.isAssignableFrom(type) : false;
      }
    });
    Object.defineProperty(Late2.prototype, "getSubTypes", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        var subtype = this.getSubType(false);
        return subtype ? subtype : cannotDetermineSubtype;
      }
    });
    return Late2;
  }(BaseType);
  function late(nameOrType, maybeType) {
    var name = typeof nameOrType === "string" ? nameOrType : "late(" + nameOrType.toString() + ")";
    var type = typeof nameOrType === "string" ? maybeType : nameOrType;
    if (devMode()) {
      if (!(typeof type === "function" && type.length === 0))
        throw fail$1("Invalid late type, expected a function with zero arguments that returns a type, got: " + type);
    }
    return new Late(name, type);
  }
  var Frozen = function(_super) {
    __extends(Frozen2, _super);
    function Frozen2(subType) {
      var _this = _super.call(this, subType ? "frozen(" + subType.name + ")" : "frozen") || this;
      Object.defineProperty(_this, "subType", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: subType
      });
      Object.defineProperty(_this, "flags", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: TypeFlags.Frozen
      });
      return _this;
    }
    Object.defineProperty(Frozen2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return "<any immutable value>";
      }
    });
    Object.defineProperty(Frozen2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, value) {
        return createScalarNode(this, parent, subpath, environment, deepFreeze(value));
      }
    });
    Object.defineProperty(Frozen2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        if (!isSerializable(value)) {
          return typeCheckFailure(context, value, "Value is not serializable and cannot be frozen");
        }
        if (this.subType)
          return this.subType.validate(value, context);
        return typeCheckSuccess();
      }
    });
    return Frozen2;
  }(SimpleType);
  var untypedFrozenInstance = new Frozen();
  function frozen(arg) {
    if (arguments.length === 0)
      return untypedFrozenInstance;
    else if (isType(arg))
      return new Frozen(arg);
    else
      return optional(untypedFrozenInstance, arg);
  }
  function getInvalidationCause(hook) {
    switch (hook) {
      case Hook.beforeDestroy:
        return "destroy";
      case Hook.beforeDetach:
        return "detach";
      default:
        return void 0;
    }
  }
  var StoredReference = function() {
    function StoredReference2(value, targetType) {
      Object.defineProperty(this, "targetType", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: targetType
      });
      Object.defineProperty(this, "identifier", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "node", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, "resolvedReference", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: void 0
      });
      if (isValidIdentifier(value)) {
        this.identifier = value;
      } else if (isStateTreeNode(value)) {
        var targetNode = getStateTreeNode(value);
        if (!targetNode.identifierAttribute)
          throw fail$1("Can only store references with a defined identifier attribute.");
        var id = targetNode.unnormalizedIdentifier;
        if (id === null || id === void 0) {
          throw fail$1("Can only store references to tree nodes with a defined identifier.");
        }
        this.identifier = id;
      } else {
        throw fail$1("Can only store references to tree nodes or identifiers, got: '" + value + "'");
      }
    }
    Object.defineProperty(StoredReference2.prototype, "updateResolvedReference", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        var normalizedId = normalizeIdentifier(this.identifier);
        var root = node.root;
        var lastCacheModification = root.identifierCache.getLastCacheModificationPerId(normalizedId);
        if (!this.resolvedReference || this.resolvedReference.lastCacheModification !== lastCacheModification) {
          var targetType = this.targetType;
          var target = root.identifierCache.resolve(targetType, normalizedId);
          if (!target) {
            throw new InvalidReferenceError("[mobx-state-tree] Failed to resolve reference '" + this.identifier + "' to type '" + this.targetType.name + "' (from node: " + node.path + ")");
          }
          this.resolvedReference = {
            node: target,
            lastCacheModification
          };
        }
      }
    });
    Object.defineProperty(StoredReference2.prototype, "resolvedValue", {
      get: function() {
        this.updateResolvedReference(this.node);
        return this.resolvedReference.node.value;
      },
      enumerable: false,
      configurable: true
    });
    return StoredReference2;
  }();
  var InvalidReferenceError = function(_super) {
    __extends(InvalidReferenceError2, _super);
    function InvalidReferenceError2(m2) {
      var _this = _super.call(this, m2) || this;
      Object.setPrototypeOf(_this, InvalidReferenceError2.prototype);
      return _this;
    }
    return InvalidReferenceError2;
  }(Error);
  var BaseReferenceType = function(_super) {
    __extends(BaseReferenceType2, _super);
    function BaseReferenceType2(targetType, onInvalidated) {
      var _this = _super.call(this, "reference(" + targetType.name + ")") || this;
      Object.defineProperty(_this, "targetType", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: targetType
      });
      Object.defineProperty(_this, "onInvalidated", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: onInvalidated
      });
      Object.defineProperty(_this, "flags", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: TypeFlags.Reference
      });
      return _this;
    }
    Object.defineProperty(BaseReferenceType2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this.name;
      }
    });
    Object.defineProperty(BaseReferenceType2.prototype, "isAssignableFrom", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(type) {
        return this.targetType.isAssignableFrom(type);
      }
    });
    Object.defineProperty(BaseReferenceType2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        return isValidIdentifier(value) ? typeCheckSuccess() : typeCheckFailure(context, value, "Value is not a valid identifier, which is a string or a number");
      }
    });
    Object.defineProperty(BaseReferenceType2.prototype, "fireInvalidated", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(cause, storedRefNode, referenceId, refTargetNode) {
        var storedRefParentNode = storedRefNode.parent;
        if (!storedRefParentNode || !storedRefParentNode.isAlive) {
          return;
        }
        var storedRefParentValue = storedRefParentNode.storedValue;
        if (!storedRefParentValue) {
          return;
        }
        this.onInvalidated({
          cause,
          parent: storedRefParentValue,
          invalidTarget: refTargetNode ? refTargetNode.storedValue : void 0,
          invalidId: referenceId,
          replaceRef: function(newRef) {
            applyPatch(storedRefNode.root.storedValue, {
              op: "replace",
              value: newRef,
              path: storedRefNode.path
            });
          },
          removeRef: function() {
            if (isModelType(storedRefParentNode.type)) {
              this.replaceRef(void 0);
            } else {
              applyPatch(storedRefNode.root.storedValue, {
                op: "remove",
                path: storedRefNode.path
              });
            }
          }
        });
      }
    });
    Object.defineProperty(BaseReferenceType2.prototype, "addTargetNodeWatcher", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(storedRefNode, referenceId) {
        var _this = this;
        var refTargetValue = this.getValue(storedRefNode);
        if (!refTargetValue) {
          return void 0;
        }
        var refTargetNode = getStateTreeNode(refTargetValue);
        var hookHandler = function(_15, refTargetNodeHook) {
          var cause = getInvalidationCause(refTargetNodeHook);
          if (!cause) {
            return;
          }
          _this.fireInvalidated(cause, storedRefNode, referenceId, refTargetNode);
        };
        var refTargetDetachHookDisposer = refTargetNode.registerHook(Hook.beforeDetach, hookHandler);
        var refTargetDestroyHookDisposer = refTargetNode.registerHook(Hook.beforeDestroy, hookHandler);
        return function() {
          refTargetDetachHookDisposer();
          refTargetDestroyHookDisposer();
        };
      }
    });
    Object.defineProperty(BaseReferenceType2.prototype, "watchTargetNodeForInvalidations", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(storedRefNode, identifier2, customGetSet) {
        var _this = this;
        if (!this.onInvalidated) {
          return;
        }
        var onRefTargetDestroyedHookDisposer;
        storedRefNode.registerHook(Hook.beforeDestroy, function() {
          if (onRefTargetDestroyedHookDisposer) {
            onRefTargetDestroyedHookDisposer();
          }
        });
        var startWatching = function(sync) {
          if (onRefTargetDestroyedHookDisposer) {
            onRefTargetDestroyedHookDisposer();
          }
          var storedRefParentNode = storedRefNode.parent;
          var storedRefParentValue = storedRefParentNode && storedRefParentNode.storedValue;
          if (storedRefParentNode && storedRefParentNode.isAlive && storedRefParentValue) {
            var refTargetNodeExists = void 0;
            if (customGetSet) {
              refTargetNodeExists = !!customGetSet.get(identifier2, storedRefParentValue);
            } else {
              refTargetNodeExists = storedRefNode.root.identifierCache.has(_this.targetType, normalizeIdentifier(identifier2));
            }
            if (!refTargetNodeExists) {
              if (!sync) {
                _this.fireInvalidated("invalidSnapshotReference", storedRefNode, identifier2, null);
              }
            } else {
              onRefTargetDestroyedHookDisposer = _this.addTargetNodeWatcher(storedRefNode, identifier2);
            }
          }
        };
        if (storedRefNode.state === NodeLifeCycle.FINALIZED) {
          startWatching(true);
        } else {
          if (!storedRefNode.isRoot) {
            storedRefNode.root.registerHook(Hook.afterCreationFinalization, function() {
              if (storedRefNode.parent) {
                storedRefNode.parent.createObservableInstanceIfNeeded();
              }
            });
          }
          storedRefNode.registerHook(Hook.afterAttach, function() {
            startWatching(false);
          });
        }
      }
    });
    return BaseReferenceType2;
  }(SimpleType);
  var IdentifierReferenceType = function(_super) {
    __extends(IdentifierReferenceType2, _super);
    function IdentifierReferenceType2(targetType, onInvalidated) {
      return _super.call(this, targetType, onInvalidated) || this;
    }
    Object.defineProperty(IdentifierReferenceType2.prototype, "getValue", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(storedRefNode) {
        if (!storedRefNode.isAlive)
          return void 0;
        var storedRef = storedRefNode.storedValue;
        return storedRef.resolvedValue;
      }
    });
    Object.defineProperty(IdentifierReferenceType2.prototype, "getSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(storedRefNode) {
        var ref = storedRefNode.storedValue;
        return ref.identifier;
      }
    });
    Object.defineProperty(IdentifierReferenceType2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        var identifier2 = isStateTreeNode(initialValue) ? getIdentifier(initialValue) : initialValue;
        var storedRef = new StoredReference(initialValue, this.targetType);
        var storedRefNode = createScalarNode(this, parent, subpath, environment, storedRef);
        storedRef.node = storedRefNode;
        this.watchTargetNodeForInvalidations(storedRefNode, identifier2, void 0);
        return storedRefNode;
      }
    });
    Object.defineProperty(IdentifierReferenceType2.prototype, "reconcile", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(current, newValue, parent, subpath) {
        if (!current.isDetaching && current.type === this) {
          var compareByValue = isStateTreeNode(newValue);
          var ref = current.storedValue;
          if (!compareByValue && ref.identifier === newValue || compareByValue && ref.resolvedValue === newValue) {
            current.setParent(parent, subpath);
            return current;
          }
        }
        var newNode = this.instantiate(parent, subpath, void 0, newValue);
        current.die();
        return newNode;
      }
    });
    return IdentifierReferenceType2;
  }(BaseReferenceType);
  var CustomReferenceType = function(_super) {
    __extends(CustomReferenceType2, _super);
    function CustomReferenceType2(targetType, options, onInvalidated) {
      var _this = _super.call(this, targetType, onInvalidated) || this;
      Object.defineProperty(_this, "options", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: options
      });
      return _this;
    }
    Object.defineProperty(CustomReferenceType2.prototype, "getValue", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(storedRefNode) {
        if (!storedRefNode.isAlive)
          return void 0;
        var referencedNode = this.options.get(storedRefNode.storedValue, storedRefNode.parent ? storedRefNode.parent.storedValue : null);
        return referencedNode;
      }
    });
    Object.defineProperty(CustomReferenceType2.prototype, "getSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(storedRefNode) {
        return storedRefNode.storedValue;
      }
    });
    Object.defineProperty(CustomReferenceType2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, newValue) {
        var identifier2 = isStateTreeNode(newValue) ? this.options.set(newValue, parent ? parent.storedValue : null) : newValue;
        var storedRefNode = createScalarNode(this, parent, subpath, environment, identifier2);
        this.watchTargetNodeForInvalidations(storedRefNode, identifier2, this.options);
        return storedRefNode;
      }
    });
    Object.defineProperty(CustomReferenceType2.prototype, "reconcile", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(current, newValue, parent, subpath) {
        var newIdentifier = isStateTreeNode(newValue) ? this.options.set(newValue, current ? current.storedValue : null) : newValue;
        if (!current.isDetaching && current.type === this && current.storedValue === newIdentifier) {
          current.setParent(parent, subpath);
          return current;
        }
        var newNode = this.instantiate(parent, subpath, void 0, newIdentifier);
        current.die();
        return newNode;
      }
    });
    return CustomReferenceType2;
  }(BaseReferenceType);
  function reference(subType, options) {
    assertIsType(subType, 1);
    if (devMode()) {
      if (arguments.length === 2 && typeof arguments[1] === "string") {
        throw fail$1("References with base path are no longer supported. Please remove the base path.");
      }
    }
    var getSetOptions = options ? options : void 0;
    var onInvalidated = options ? options.onInvalidated : void 0;
    if (getSetOptions && (getSetOptions.get || getSetOptions.set)) {
      if (devMode()) {
        if (!getSetOptions.get || !getSetOptions.set) {
          throw fail$1("reference options must either contain both a 'get' and a 'set' method or none of them");
        }
      }
      return new CustomReferenceType(subType, {
        get: getSetOptions.get,
        set: getSetOptions.set
      }, onInvalidated);
    } else {
      return new IdentifierReferenceType(subType, onInvalidated);
    }
  }
  function safeReference(subType, options) {
    var refType = reference(subType, __assign(__assign({}, options), { onInvalidated: function(ev) {
      if (options && options.onInvalidated) {
        options.onInvalidated(ev);
      }
      ev.removeRef();
    } }));
    if (options && options.acceptsUndefined === false) {
      return refType;
    } else {
      return maybe(refType);
    }
  }
  var BaseIdentifierType = function(_super) {
    __extends(BaseIdentifierType2, _super);
    function BaseIdentifierType2(name, validType) {
      var _this = _super.call(this, name) || this;
      Object.defineProperty(_this, "validType", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: validType
      });
      Object.defineProperty(_this, "flags", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: TypeFlags.Identifier
      });
      return _this;
    }
    Object.defineProperty(BaseIdentifierType2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        if (!parent || !(parent.type instanceof ModelType))
          throw fail$1("Identifier types can only be instantiated as direct child of a model type");
        return createScalarNode(this, parent, subpath, environment, initialValue);
      }
    });
    Object.defineProperty(BaseIdentifierType2.prototype, "reconcile", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(current, newValue, parent, subpath) {
        if (current.storedValue !== newValue)
          throw fail$1("Tried to change identifier from '" + current.storedValue + "' to '" + newValue + "'. Changing identifiers is not allowed.");
        current.setParent(parent, subpath);
        return current;
      }
    });
    Object.defineProperty(BaseIdentifierType2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        if (typeof value !== this.validType) {
          return typeCheckFailure(context, value, "Value is not a valid " + this.describe() + ", expected a " + this.validType);
        }
        return typeCheckSuccess();
      }
    });
    return BaseIdentifierType2;
  }(SimpleType);
  var IdentifierType = function(_super) {
    __extends(IdentifierType2, _super);
    function IdentifierType2() {
      var _this = _super.call(this, "identifier", "string") || this;
      Object.defineProperty(_this, "flags", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: TypeFlags.Identifier
      });
      return _this;
    }
    Object.defineProperty(IdentifierType2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return "identifier";
      }
    });
    return IdentifierType2;
  }(BaseIdentifierType);
  var IdentifierNumberType = function(_super) {
    __extends(IdentifierNumberType2, _super);
    function IdentifierNumberType2() {
      return _super.call(this, "identifierNumber", "number") || this;
    }
    Object.defineProperty(IdentifierNumberType2.prototype, "getSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        return node.storedValue;
      }
    });
    Object.defineProperty(IdentifierNumberType2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return "identifierNumber";
      }
    });
    return IdentifierNumberType2;
  }(BaseIdentifierType);
  var identifier = new IdentifierType();
  var identifierNumber = new IdentifierNumberType();
  function normalizeIdentifier(id) {
    return "" + id;
  }
  function isValidIdentifier(id) {
    return typeof id === "string" || typeof id === "number";
  }
  function custom(options) {
    return new CustomType(options);
  }
  var CustomType = function(_super) {
    __extends(CustomType2, _super);
    function CustomType2(options) {
      var _this = _super.call(this, options.name) || this;
      Object.defineProperty(_this, "options", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: options
      });
      Object.defineProperty(_this, "flags", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: TypeFlags.Custom
      });
      return _this;
    }
    Object.defineProperty(CustomType2.prototype, "describe", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function() {
        return this.name;
      }
    });
    Object.defineProperty(CustomType2.prototype, "isValidSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(value, context) {
        if (this.options.isTargetType(value))
          return typeCheckSuccess();
        var typeError = this.options.getValidationMessage(value);
        if (typeError) {
          return typeCheckFailure(context, value, "Invalid value for type '" + this.name + "': " + typeError);
        }
        return typeCheckSuccess();
      }
    });
    Object.defineProperty(CustomType2.prototype, "getSnapshot", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(node) {
        return this.options.toSnapshot(node.storedValue);
      }
    });
    Object.defineProperty(CustomType2.prototype, "instantiate", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(parent, subpath, environment, initialValue) {
        var valueToStore = this.options.isTargetType(initialValue) ? initialValue : this.options.fromSnapshot(initialValue, parent && parent.root.environment);
        return createScalarNode(this, parent, subpath, environment, valueToStore);
      }
    });
    Object.defineProperty(CustomType2.prototype, "reconcile", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function(current, value, parent, subpath) {
        var isSnapshot = !this.options.isTargetType(value);
        if (!current.isDetaching) {
          var unchanged = current.type === this && (isSnapshot ? value === current.snapshot : value === current.storedValue);
          if (unchanged) {
            current.setParent(parent, subpath);
            return current;
          }
        }
        var valueToStore = isSnapshot ? this.options.fromSnapshot(value, parent.root.environment) : value;
        var newNode = this.instantiate(parent, subpath, void 0, valueToStore);
        current.die();
        return newNode;
      }
    });
    return CustomType2;
  }(SimpleType);
  var types = {
    enumeration,
    model,
    compose,
    custom,
    reference,
    safeReference,
    union,
    optional,
    literal,
    maybe,
    maybeNull,
    refinement,
    string,
    boolean,
    number,
    integer,
    Date: DatePrimitive,
    map: map2,
    array: array2,
    frozen,
    identifier,
    identifierNumber,
    late,
    undefined: undefinedType,
    null: nullType,
    snapshotProcessor
  };

  // src/common/formTools.ts
  var priceToCurrency = (price) => price?.toLocaleString("en-CA", { style: "currency", currency: "CAD" }) ?? "";
  var getStatus = (status) => {
    switch (status) {
      case 1:
        return "\u23F3 Pending payment";
      case 2:
        return "\u{1F9FE} Payment received";
      case 3:
        return "\u{1F4E6} Shipped";
      case 4:
        return "\u{1F69A} On vehicle for delivery";
      case 5:
        return "\u2705 Delivered";
      case 6:
        return "\u274C Canceled";
      case 7:
        return "\u21A9 Returned to sender";
      default:
        return "No status";
    }
  };

  // src/orders/Order.ts
  var import_luxon = __toModule(require_luxon());

  // src/common/recordPostProcessor.ts
  var postProcessor = (snapshot) => ({
    ...snapshot,
    id: snapshot.id || void 0
  });

  // src/customers/Customer.ts
  var BaseInventoryItem = types.model("Customer", {
    id: types.optional(types.identifier, ""),
    firstName: types.optional(types.string, ""),
    lastName: types.optional(types.string, ""),
    deliveryAddress: types.optional(types.string, ""),
    city: types.optional(types.string, ""),
    state: types.enumeration("state", [
      "Ontario",
      "Quebec",
      "Nova Scotia",
      "New Brunswick",
      "Manitoba",
      "British Columbia",
      "Prince Edward Island",
      "Saskatchewan",
      "Alberta",
      "Newfoundland and Labrador"
    ]),
    postalCode: types.optional(types.refinement(types.string, (p2) => /^$|[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(p2)), ""),
    country: types.optional(types.string, "Canada"),
    emailAddress: types.optional(types.refinement(types.string, (e5) => /^$|\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(e5)), ""),
    phoneNumber: types.optional(types.refinement(types.string, (p2) => /^$|(?:\d{1}\s)?\(?(\d{3})\)?-?\s?(\d{3})-?\s?(\d{4})/g.test(p2)), "")
  }).actions((self2) => ({
    setFirstName(firstName) {
      self2.firstName = firstName;
    },
    setLastName(lastName) {
      self2.lastName = lastName;
    },
    setDeliveryAddress(deliveryAddress) {
      self2.deliveryAddress = deliveryAddress;
    },
    setCity(city) {
      self2.city = city;
    },
    setState(state) {
      self2.state = state;
    },
    setPostalCode(postalCode) {
      self2.postalCode = postalCode;
    },
    setCountry(country) {
      self2.country = country;
    },
    setEmailAddress(emailAddress) {
      self2.emailAddress = emailAddress;
    },
    setPhoneNumber(phoneNumber) {
      self2.phoneNumber = phoneNumber;
    }
  })).views((self2) => ({
    get fullName() {
      return `${self2.firstName} ${self2.lastName}`;
    },
    get fullAddress() {
      return `${self2.deliveryAddress}, ${self2.city}, ${self2.country} - PC: ${self2.postalCode}`;
    }
  }));
  var Customer = types.snapshotProcessor(BaseInventoryItem, { postProcessor });

  // src/inventory/InventoryItem.ts
  var BaseInventoryItem2 = types.model("InventoryItem", {
    id: types.optional(types.identifier, ""),
    name: types.string,
    price: types.number,
    image: types.optional(types.string, "")
  }).actions((self2) => ({
    setName(name) {
      self2.name = name;
    },
    setPrice(price) {
      self2.price = price;
    },
    setImage(image) {
      self2.image = image;
    }
  }));
  var InventoryItem = types.snapshotProcessor(BaseInventoryItem2, { postProcessor });

  // src/orders/OrderItem.ts
  var BaseOrderItem = types.model("OrderItem", {
    id: types.optional(types.identifier, ""),
    inventoryItemId: types.maybe(types.reference(InventoryItem)),
    quantity: types.optional(types.number, 1),
    buyPricePerUnit: types.optional(types.number, 0),
    tax: types.optional(types.number, 0.15)
  }).actions((self2) => ({
    setInventoryItem(inventoryItem) {
      self2.inventoryItemId = inventoryItem;
    },
    setQuantity(quantity) {
      self2.quantity = quantity;
    },
    setBuyPricePerUnit(buyPricePerUnit) {
      self2.buyPricePerUnit = buyPricePerUnit;
      return self2.buyPricePerUnit;
    }
  })).views((self2) => ({
    get unitPrice() {
      return self2.inventoryItemId?.price;
    },
    get totalPrice() {
      if (self2.inventoryItemId === void 0 || self2.quantity < 1) {
        return void 0;
      }
      return self2.inventoryItemId.price * self2.quantity * self2.tax + self2.inventoryItemId.price * self2.quantity;
    },
    get totalPriceOnDate() {
      return self2.buyPricePerUnit * self2.quantity * self2.tax + self2.buyPricePerUnit * self2.quantity;
    }
  }));
  var postProcessSnapshot = (snapshot) => ({
    ...snapshot,
    id: snapshot.id || void 0,
    inventoryItemId: snapshot.inventoryItemId
  });
  var OrderItem = types.snapshotProcessor(BaseOrderItem, { postProcessor: postProcessSnapshot });

  // src/orders/Order.ts
  var BaseOrder = types.model("Order", {
    id: types.optional(types.identifier, ""),
    customerId: types.maybe(types.reference(Customer)),
    orderDate: types.optional(types.string, import_luxon.DateTime.now().toUTC().toJSON()),
    status: types.optional(types.number, 1),
    items: types.array(OrderItem)
  }).actions((self2) => ({
    setCustomer(customer) {
      self2.customerId = customer;
    },
    setOrderDate(orderDate) {
      self2.orderDate = orderDate;
    },
    setOrderStatus(orderStatus) {
      self2.status = orderStatus;
    },
    addItem() {
      self2.items.push(OrderItem.create({}));
    },
    removeItem(item) {
      self2.items.remove(item);
    }
  })).views((self2) => ({
    get totalPrice() {
      return self2.items.reduce((total, item) => total === void 0 ? void 0 : self2.id === "" ? item?.totalPrice === void 0 ? total : total + item.totalPrice : item?.totalPriceOnDate === void 0 ? total : total + item.totalPriceOnDate, 0);
    }
  }));
  var postProcessSnapshot2 = (snapshot) => ({
    ...snapshot,
    id: snapshot.id || void 0,
    customerId: snapshot.customerId
  });
  var Order = types.snapshotProcessor(BaseOrder, { postProcessor: postProcessSnapshot2 });

  // src/orders/ordersApi.ts
  var getOrders = async () => {
    const response = await fetch(`${AppBasePath}/api/orders`);
    const results = await response.json();
    return results.map((i3) => Order.create(i3));
  };

  // src/inventory/inventoryApi.ts
  var getInventoryItems = async () => {
    const response = await fetch(`${AppBasePath}/api/inventory`);
    const results = await response.json();
    return results.map((i3) => InventoryItem.create(i3));
  };

  // src/customers/customersApi.ts
  var getCustomers = async () => {
    const response = await fetch(`${AppBasePath}/api/customers`);
    const results = await response.json();
    return results.map((i3) => Customer.create(i3));
  };

  // src/orders/OrderListStore.ts
  var OrderListStore = types.model("OrderListStore", {
    orders: types.maybe(types.array(Order)),
    inventoryItems: types.array(InventoryItem),
    customers: types.array(Customer)
  }).actions((self2) => ({
    load: flow3(function* () {
      self2.inventoryItems = yield getInventoryItems();
      self2.customers = yield getCustomers();
      self2.orders = yield getOrders();
    })
  })).views((self2) => ({
    get sortedOrders() {
      return self2.orders?.slice().sort((a2, b2) => a2.customerId.firstName.localeCompare(b2.customerId.firstName, void 0, { caseFirst: "upper" })) ?? [];
    }
  }));

  // src/common/componentStyle.ts
  var table = r`
    table {
        /*margin: 0 auto;*/
        color: #333;
        background: white;
        border: 1px solid grey;
        font-size: 12pt;
        border-collapse: collapse;
    }

    table thead th,
    table tfoot th {
        color: #777;
        background: rgba(0,0,0,.1);
    }
    table caption {
        padding:.5em;
    }
    table th,
    table td {
        padding: .5em;
        border: 1px solid lightgrey;
    }
`;
  var button = r`
    button {
        background-color: navy;
        border: none;
        color: white;
        padding: 5px 10px;
        text-align: center;
        font-size: 16px;
        margin: 4px 2px;
        opacity: 0.6;
        transition: 0.3s;
        display: inline-block;
        text-decoration: none;
        cursor: pointer;
    }

    button:hover {
        opacity: 1
    }

    .btnRemove {
        background-color: white;
        padding: 0;
    }
`;
  var input = r`
    input[type=text], input[type=number], textarea, select {
        width: 60%;
        padding: 6px 10px;
        margin: 4px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .customer {
        width:40%;
    }

    .tableInput {
        padding: 0;
        width:80%;
    }
`;

  // src/orders/OrderList.ts
  var ordersRow = ({ id, customerId, totalPrice, status, orderDate }) => p`
    <tr>
        <td>${customerId?.fullName}</td>
        <td>${orderDate.substring(0, orderDate.indexOf("T"))}</td>
        <td>${getStatus(status)}</td>
        <td>${priceToCurrency(totalPrice)}</td>
        <td>
            <a href="${AppBasePath}/orders/View/${id}">View</a>
        </td>
    </tr>
    `;
  var ordersTable = (orders = []) => p`
    <table>
        <thead>
            <tr>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th></th>
            </tr>
        </thead>
    
        <tbody>
            ${orders.map(ordersRow)}
        </tbody>
    </table> <br /><br />
    `;
  var OrderList = class extends MobxLitElement {
    store = OrderListStore.create();
    firstUpdated = async () => {
      await this.store.load();
    };
    render = () => this.store.orders ? ordersTable(this.store.sortedOrders) : "Loading...";
  };
  __publicField(OrderList, "styles", r`
        ${table}
        ${button}
    `);
  OrderList = __decorateClass([
    n5("order-list")
  ], OrderList);
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=OrderList.js.map
