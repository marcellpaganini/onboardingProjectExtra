(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i4 = decorators.length - 1, decorator; i4 >= 0; i4--)
      if (decorator = decorators[i4])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

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
    for (var i4 = 0; i4 < props.length; i4++) {
      var descriptor = props[i4];
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
      for (var i4 = 1; i4 < arguments.length; i4++) {
        var source = arguments[i4];
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
    for (var i4 = 0, arr2 = new Array(len); i4 < len; i4++)
      arr2[i4] = arr[i4];
    return arr2;
  }
  function _createForOfIteratorHelperLoose(o6, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o6[Symbol.iterator] == null) {
      if (Array.isArray(o6) || (it = _unsupportedIterableToArray(o6)) || allowArrayLike && o6 && typeof o6.length === "number") {
        if (it)
          o6 = it;
        var i4 = 0;
        return function() {
          if (i4 >= o6.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o6[i4++]
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
        for (var i4 = 0; i4 < l3; i4++) {
          var obj = obs[i4];
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
    for (var i4 = 0; i4 < l3; i4++) {
      var dep = observing[i4];
      if (dep.diffValue_ === 0) {
        dep.diffValue_ = 1;
        if (i0 !== i4)
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
    var i4 = obs.length;
    while (i4--) {
      removeObserver(obs[i4], derivation);
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
    var i4 = obs.length;
    while (i4--) {
      obs[i4].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
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
      for (var i4 = 0; i4 < list.length; i4++) {
        var observable2 = list[i4];
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
      for (var i4 = 0, l3 = remainingReactions.length; i4 < l3; i4++) {
        remainingReactions[i4].runReaction_();
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
    for (var i4 = 0, l3 = listeners.length; i4 < l3; i4++) {
      listeners[i4](event);
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
      for (var i4 = 0, l3 = interceptors.length; i4 < l3; i4++) {
        change = interceptors[i4](change);
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
    for (var i4 = 0, l3 = listeners.length; i4 < l3; i4++) {
      listeners[i4](change);
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
        for (var i4 = 0; i4 < newLength - currentLength; i4++) {
          newItems[i4] = void 0;
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
        for (var i4 = 0; i4 < newItems.length; i4++) {
          this.values_[index + i4] = newItems[i4];
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
  var r2 = { toAttribute(t3, i4) {
    switch (i4) {
      case Boolean:
        t3 = t3 ? "" : null;
        break;
      case Object:
      case Array:
        t3 = t3 == null ? t3 : JSON.stringify(t3);
    }
    return t3;
  }, fromAttribute(t3, i4) {
    let s5 = t3;
    switch (i4) {
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
  var h = (t3, i4) => i4 !== t3 && (i4 == i4 || t3 == t3);
  var o2 = { attribute: true, type: String, converter: r2, reflect: false, hasChanged: h };
  var n2 = class extends HTMLElement {
    constructor() {
      super(), this._$Et = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
    }
    static addInitializer(t3) {
      var i4;
      (i4 = this.l) !== null && i4 !== void 0 || (this.l = []), this.l.push(t3);
    }
    static get observedAttributes() {
      this.finalize();
      const t3 = [];
      return this.elementProperties.forEach((i4, s5) => {
        const e5 = this._$Eh(s5, i4);
        e5 !== void 0 && (this._$Eu.set(e5, s5), t3.push(e5));
      }), t3;
    }
    static createProperty(t3, i4 = o2) {
      if (i4.state && (i4.attribute = false), this.finalize(), this.elementProperties.set(t3, i4), !i4.noAccessor && !this.prototype.hasOwnProperty(t3)) {
        const s5 = typeof t3 == "symbol" ? Symbol() : "__" + t3, e5 = this.getPropertyDescriptor(t3, s5, i4);
        e5 !== void 0 && Object.defineProperty(this.prototype, t3, e5);
      }
    }
    static getPropertyDescriptor(t3, i4, s5) {
      return { get() {
        return this[i4];
      }, set(e5) {
        const r4 = this[t3];
        this[i4] = e5, this.requestUpdate(t3, r4, s5);
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
        const t4 = this.properties, i4 = [...Object.getOwnPropertyNames(t4), ...Object.getOwnPropertySymbols(t4)];
        for (const s5 of i4)
          this.createProperty(s5, t4[s5]);
      }
      return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i4) {
      const s5 = [];
      if (Array.isArray(i4)) {
        const e5 = new Set(i4.flat(1 / 0).reverse());
        for (const i5 of e5)
          s5.unshift(S(i5));
      } else
        i4 !== void 0 && s5.push(S(i4));
      return s5;
    }
    static _$Eh(t3, i4) {
      const s5 = i4.attribute;
      return s5 === false ? void 0 : typeof s5 == "string" ? s5 : typeof t3 == "string" ? t3.toLowerCase() : void 0;
    }
    o() {
      var t3;
      this._$Ev = new Promise((t4) => this.enableUpdating = t4), this._$AL = new Map(), this._$Ep(), this.requestUpdate(), (t3 = this.constructor.l) === null || t3 === void 0 || t3.forEach((t4) => t4(this));
    }
    addController(t3) {
      var i4, s5;
      ((i4 = this._$Em) !== null && i4 !== void 0 ? i4 : this._$Em = []).push(t3), this.renderRoot !== void 0 && this.isConnected && ((s5 = t3.hostConnected) === null || s5 === void 0 || s5.call(t3));
    }
    removeController(t3) {
      var i4;
      (i4 = this._$Em) === null || i4 === void 0 || i4.splice(this._$Em.indexOf(t3) >>> 0, 1);
    }
    _$Ep() {
      this.constructor.elementProperties.forEach((t3, i4) => {
        this.hasOwnProperty(i4) && (this._$Et.set(i4, this[i4]), delete this[i4]);
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
        var i4;
        return (i4 = t4.hostConnected) === null || i4 === void 0 ? void 0 : i4.call(t4);
      });
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
      var t3;
      (t3 = this._$Em) === null || t3 === void 0 || t3.forEach((t4) => {
        var i4;
        return (i4 = t4.hostDisconnected) === null || i4 === void 0 ? void 0 : i4.call(t4);
      });
    }
    attributeChangedCallback(t3, i4, s5) {
      this._$AK(t3, s5);
    }
    _$Eg(t3, i4, s5 = o2) {
      var e5, h3;
      const n6 = this.constructor._$Eh(t3, s5);
      if (n6 !== void 0 && s5.reflect === true) {
        const o6 = ((h3 = (e5 = s5.converter) === null || e5 === void 0 ? void 0 : e5.toAttribute) !== null && h3 !== void 0 ? h3 : r2.toAttribute)(i4, s5.type);
        this._$Ei = t3, o6 == null ? this.removeAttribute(n6) : this.setAttribute(n6, o6), this._$Ei = null;
      }
    }
    _$AK(t3, i4) {
      var s5, e5, h3;
      const o6 = this.constructor, n6 = o6._$Eu.get(t3);
      if (n6 !== void 0 && this._$Ei !== n6) {
        const t4 = o6.getPropertyOptions(n6), l3 = t4.converter, a2 = (h3 = (e5 = (s5 = l3) === null || s5 === void 0 ? void 0 : s5.fromAttribute) !== null && e5 !== void 0 ? e5 : typeof l3 == "function" ? l3 : null) !== null && h3 !== void 0 ? h3 : r2.fromAttribute;
        this._$Ei = n6, this[n6] = a2(i4, t4.type), this._$Ei = null;
      }
    }
    requestUpdate(t3, i4, s5) {
      let e5 = true;
      t3 !== void 0 && (((s5 = s5 || this.constructor.getPropertyOptions(t3)).hasChanged || h)(this[t3], i4) ? (this._$AL.has(t3) || this._$AL.set(t3, i4), s5.reflect === true && this._$Ei !== t3 && (this._$ES === void 0 && (this._$ES = new Map()), this._$ES.set(t3, s5))) : e5 = false), !this.isUpdatePending && e5 && (this._$Ev = this._$EC());
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
      this.hasUpdated, this._$Et && (this._$Et.forEach((t4, i5) => this[i5] = t4), this._$Et = void 0);
      let i4 = false;
      const s5 = this._$AL;
      try {
        i4 = this.shouldUpdate(s5), i4 ? (this.willUpdate(s5), (t3 = this._$Em) === null || t3 === void 0 || t3.forEach((t4) => {
          var i5;
          return (i5 = t4.hostUpdate) === null || i5 === void 0 ? void 0 : i5.call(t4);
        }), this.update(s5)) : this._$EU();
      } catch (t4) {
        throw i4 = false, this._$EU(), t4;
      }
      i4 && this._$AE(s5);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
      var i4;
      (i4 = this._$Em) === null || i4 === void 0 || i4.forEach((t4) => {
        var i5;
        return (i5 = t4.hostUpdated) === null || i5 === void 0 ? void 0 : i5.call(t4);
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
      this._$ES !== void 0 && (this._$ES.forEach((t4, i4) => this._$Eg(i4, this[i4], t4)), this._$ES = void 0), this._$EU();
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
    var i4;
    return d(t3) || typeof ((i4 = t3) === null || i4 === void 0 ? void 0 : i4[Symbol.iterator]) == "function";
  };
  var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var a = />/g;
  var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
  var _14 = /'/g;
  var m = /"/g;
  var g = /^(?:script|style|textarea)$/i;
  var $ = (t3) => (i4, ...s5) => ({ _$litType$: t3, strings: i4, values: s5 });
  var p = $(1);
  var y = $(2);
  var b = Symbol.for("lit-noChange");
  var T = Symbol.for("lit-nothing");
  var x = new WeakMap();
  var w = (t3, i4, s5) => {
    var e5, o6;
    const n6 = (e5 = s5 == null ? void 0 : s5.renderBefore) !== null && e5 !== void 0 ? e5 : i4;
    let l3 = n6._$litPart$;
    if (l3 === void 0) {
      const t4 = (o6 = s5 == null ? void 0 : s5.renderBefore) !== null && o6 !== void 0 ? o6 : null;
      n6._$litPart$ = l3 = new N(i4.insertBefore(h2(), t4), t4, void 0, s5 != null ? s5 : {});
    }
    return l3._$AI(t3), l3;
  };
  var A = l.createTreeWalker(l, 129, null, false);
  var C = (t3, i4) => {
    const o6 = t3.length - 1, l3 = [];
    let h3, r4 = i4 === 2 ? "<svg>" : "", d2 = c;
    for (let i5 = 0; i5 < o6; i5++) {
      const s5 = t3[i5];
      let o7, u3, $2 = -1, p2 = 0;
      for (; p2 < s5.length && (d2.lastIndex = p2, u3 = d2.exec(s5), u3 !== null); )
        p2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = v : u3[1] !== void 0 ? d2 = a : u3[2] !== void 0 ? (g.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d2 = f) : u3[3] !== void 0 && (d2 = f) : d2 === f ? u3[0] === ">" ? (d2 = h3 != null ? h3 : c, $2 = -1) : u3[1] === void 0 ? $2 = -2 : ($2 = d2.lastIndex - u3[2].length, o7 = u3[1], d2 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _14) : d2 === m || d2 === _14 ? d2 = f : d2 === v || d2 === a ? d2 = c : (d2 = f, h3 = void 0);
      const y2 = d2 === f && t3[i5 + 1].startsWith("/>") ? " " : "";
      r4 += d2 === c ? s5 + n3 : $2 >= 0 ? (l3.push(o7), s5.slice(0, $2) + "$lit$" + s5.slice($2) + e3 + y2) : s5 + e3 + ($2 === -2 ? (l3.push(void 0), i5) : y2);
    }
    const u2 = r4 + (t3[o6] || "<?>") + (i4 === 2 ? "</svg>" : "");
    return [s3 !== void 0 ? s3.createHTML(u2) : u2, l3];
  };
  var P = class {
    constructor({ strings: t3, _$litType$: s5 }, n6) {
      let l3;
      this.parts = [];
      let r4 = 0, d2 = 0;
      const u2 = t3.length - 1, c2 = this.parts, [v2, a2] = C(t3, s5);
      if (this.el = P.createElement(v2, n6), A.currentNode = this.el.content, s5 === 2) {
        const t4 = this.el.content, i4 = t4.firstChild;
        i4.remove(), t4.append(...i4.childNodes);
      }
      for (; (l3 = A.nextNode()) !== null && c2.length < u2; ) {
        if (l3.nodeType === 1) {
          if (l3.hasAttributes()) {
            const t4 = [];
            for (const i4 of l3.getAttributeNames())
              if (i4.endsWith("$lit$") || i4.startsWith(e3)) {
                const s6 = a2[d2++];
                if (t4.push(i4), s6 !== void 0) {
                  const t5 = l3.getAttribute(s6.toLowerCase() + "$lit$").split(e3), i5 = /([.?@])?(.*)/.exec(s6);
                  c2.push({ type: 1, index: r4, name: i5[2], strings: t5, ctor: i5[1] === "." ? M : i5[1] === "?" ? k : i5[1] === "@" ? H : S2 });
                } else
                  c2.push({ type: 6, index: r4 });
              }
            for (const i4 of t4)
              l3.removeAttribute(i4);
          }
          if (g.test(l3.tagName)) {
            const t4 = l3.textContent.split(e3), s6 = t4.length - 1;
            if (s6 > 0) {
              l3.textContent = i2 ? i2.emptyScript : "";
              for (let i4 = 0; i4 < s6; i4++)
                l3.append(t4[i4], h2()), A.nextNode(), c2.push({ type: 2, index: ++r4 });
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
    static createElement(t3, i4) {
      const s5 = l.createElement("template");
      return s5.innerHTML = t3, s5;
    }
  };
  function V(t3, i4, s5 = t3, e5) {
    var o6, n6, l3, h3;
    if (i4 === b)
      return i4;
    let d2 = e5 !== void 0 ? (o6 = s5._$Cl) === null || o6 === void 0 ? void 0 : o6[e5] : s5._$Cu;
    const u2 = r3(i4) ? void 0 : i4._$litDirective$;
    return (d2 == null ? void 0 : d2.constructor) !== u2 && ((n6 = d2 == null ? void 0 : d2._$AO) === null || n6 === void 0 || n6.call(d2, false), u2 === void 0 ? d2 = void 0 : (d2 = new u2(t3), d2._$AT(t3, s5, e5)), e5 !== void 0 ? ((l3 = (h3 = s5)._$Cl) !== null && l3 !== void 0 ? l3 : h3._$Cl = [])[e5] = d2 : s5._$Cu = d2), d2 !== void 0 && (i4 = V(t3, d2._$AS(t3, i4.values), d2, e5)), i4;
  }
  var E = class {
    constructor(t3, i4) {
      this.v = [], this._$AN = void 0, this._$AD = t3, this._$AM = i4;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    p(t3) {
      var i4;
      const { el: { content: s5 }, parts: e5 } = this._$AD, o6 = ((i4 = t3 == null ? void 0 : t3.creationScope) !== null && i4 !== void 0 ? i4 : l).importNode(s5, true);
      A.currentNode = o6;
      let n6 = A.nextNode(), h3 = 0, r4 = 0, d2 = e5[0];
      for (; d2 !== void 0; ) {
        if (h3 === d2.index) {
          let i5;
          d2.type === 2 ? i5 = new N(n6, n6.nextSibling, this, t3) : d2.type === 1 ? i5 = new d2.ctor(n6, d2.name, d2.strings, this, t3) : d2.type === 6 && (i5 = new I(n6, this, t3)), this.v.push(i5), d2 = e5[++r4];
        }
        h3 !== (d2 == null ? void 0 : d2.index) && (n6 = A.nextNode(), h3++);
      }
      return o6;
    }
    m(t3) {
      let i4 = 0;
      for (const s5 of this.v)
        s5 !== void 0 && (s5.strings !== void 0 ? (s5._$AI(t3, s5, i4), i4 += s5.strings.length - 2) : s5._$AI(t3[i4])), i4++;
    }
  };
  var N = class {
    constructor(t3, i4, s5, e5) {
      var o6;
      this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = t3, this._$AB = i4, this._$AM = s5, this.options = e5, this._$Cg = (o6 = e5 == null ? void 0 : e5.isConnected) === null || o6 === void 0 || o6;
    }
    get _$AU() {
      var t3, i4;
      return (i4 = (t3 = this._$AM) === null || t3 === void 0 ? void 0 : t3._$AU) !== null && i4 !== void 0 ? i4 : this._$Cg;
    }
    get parentNode() {
      let t3 = this._$AA.parentNode;
      const i4 = this._$AM;
      return i4 !== void 0 && t3.nodeType === 11 && (t3 = i4.parentNode), t3;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t3, i4 = this) {
      t3 = V(this, t3, i4), r3(t3) ? t3 === T || t3 == null || t3 === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : t3 !== this._$AH && t3 !== b && this.$(t3) : t3._$litType$ !== void 0 ? this.T(t3) : t3.nodeType !== void 0 ? this.S(t3) : u(t3) ? this.M(t3) : this.$(t3);
    }
    A(t3, i4 = this._$AB) {
      return this._$AA.parentNode.insertBefore(t3, i4);
    }
    S(t3) {
      this._$AH !== t3 && (this._$AR(), this._$AH = this.A(t3));
    }
    $(t3) {
      this._$AH !== T && r3(this._$AH) ? this._$AA.nextSibling.data = t3 : this.S(l.createTextNode(t3)), this._$AH = t3;
    }
    T(t3) {
      var i4;
      const { values: s5, _$litType$: e5 } = t3, o6 = typeof e5 == "number" ? this._$AC(t3) : (e5.el === void 0 && (e5.el = P.createElement(e5.h, this.options)), e5);
      if (((i4 = this._$AH) === null || i4 === void 0 ? void 0 : i4._$AD) === o6)
        this._$AH.m(s5);
      else {
        const t4 = new E(o6, this), i5 = t4.p(this.options);
        t4.m(s5), this.S(i5), this._$AH = t4;
      }
    }
    _$AC(t3) {
      let i4 = x.get(t3.strings);
      return i4 === void 0 && x.set(t3.strings, i4 = new P(t3)), i4;
    }
    M(t3) {
      d(this._$AH) || (this._$AH = [], this._$AR());
      const i4 = this._$AH;
      let s5, e5 = 0;
      for (const o6 of t3)
        e5 === i4.length ? i4.push(s5 = new N(this.A(h2()), this.A(h2()), this, this.options)) : s5 = i4[e5], s5._$AI(o6), e5++;
      e5 < i4.length && (this._$AR(s5 && s5._$AB.nextSibling, e5), i4.length = e5);
    }
    _$AR(t3 = this._$AA.nextSibling, i4) {
      var s5;
      for ((s5 = this._$AP) === null || s5 === void 0 || s5.call(this, false, true, i4); t3 && t3 !== this._$AB; ) {
        const i5 = t3.nextSibling;
        t3.remove(), t3 = i5;
      }
    }
    setConnected(t3) {
      var i4;
      this._$AM === void 0 && (this._$Cg = t3, (i4 = this._$AP) === null || i4 === void 0 || i4.call(this, t3));
    }
  };
  var S2 = class {
    constructor(t3, i4, s5, e5, o6) {
      this.type = 1, this._$AH = T, this._$AN = void 0, this.element = t3, this.name = i4, this._$AM = e5, this.options = o6, s5.length > 2 || s5[0] !== "" || s5[1] !== "" ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = T;
    }
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t3, i4 = this, s5, e5) {
      const o6 = this.strings;
      let n6 = false;
      if (o6 === void 0)
        t3 = V(this, t3, i4, 0), n6 = !r3(t3) || t3 !== this._$AH && t3 !== b, n6 && (this._$AH = t3);
      else {
        const e6 = t3;
        let l3, h3;
        for (t3 = o6[0], l3 = 0; l3 < o6.length - 1; l3++)
          h3 = V(this, e6[s5 + l3], i4, l3), h3 === b && (h3 = this._$AH[l3]), n6 || (n6 = !r3(h3) || h3 !== this._$AH[l3]), h3 === T ? t3 = T : t3 !== T && (t3 += (h3 != null ? h3 : "") + o6[l3 + 1]), this._$AH[l3] = h3;
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
    constructor(t3, i4, s5, e5, o6) {
      super(t3, i4, s5, e5, o6), this.type = 5;
    }
    _$AI(t3, i4 = this) {
      var s5;
      if ((t3 = (s5 = V(this, t3, i4, 0)) !== null && s5 !== void 0 ? s5 : T) === b)
        return;
      const e5 = this._$AH, o6 = t3 === T && e5 !== T || t3.capture !== e5.capture || t3.once !== e5.once || t3.passive !== e5.passive, n6 = t3 !== T && (e5 === T || o6);
      o6 && this.element.removeEventListener(this.name, this, e5), n6 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
      var i4, s5;
      typeof this._$AH == "function" ? this._$AH.call((s5 = (i4 = this.options) === null || i4 === void 0 ? void 0 : i4.host) !== null && s5 !== void 0 ? s5 : this.element, t3) : this._$AH.handleEvent(t3);
    }
  };
  var I = class {
    constructor(t3, i4, s5) {
      this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i4, this.options = s5;
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
      const i4 = super.createRenderRoot();
      return (t3 = (e5 = this.renderOptions).renderBefore) !== null && t3 !== void 0 || (e5.renderBefore = i4.firstChild), i4;
    }
    update(t3) {
      const i4 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Dt = w(i4, this.renderRoot, this.renderOptions);
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
    const { kind: t3, elements: i4 } = e6;
    return { kind: t3, elements: i4, finisher(e7) {
      window.customElements.define(n7, e7);
    } };
  })(n6, e5);

  // node_modules/@lit/reactive-element/decorators/property.js
  var i3 = (i4, e5) => e5.kind === "method" && e5.descriptor && !("value" in e5.descriptor) ? { ...e5, finisher(n6) {
    n6.createProperty(e5.key, i4);
  } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e5.key, initializer() {
    typeof e5.initializer == "function" && (this[e5.key] = e5.initializer.call(this));
  }, finisher(n6) {
    n6.createProperty(e5.key, i4);
  } };
  function e4(e5) {
    return (n6, t3) => t3 !== void 0 ? ((i4, e6, n7) => {
      e6.constructor.createProperty(n7, i4);
    })(e5, n6, t3) : i3(e5, n6);
  }

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

    .long {
        font-size: 9pt;
        padding: .2em;
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

  // src/common/formTools.ts
  var handlePropChange = (item, handler) => (e5) => {
    const target = e5.currentTarget;
    const newVal = target.value;
    handler(item, newVal);
  };
  var handleSubmit = (f2) => (e5) => {
    e5.preventDefault();
    f2();
    return false;
  };

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
      for (var s5, i4 = 1, n6 = arguments.length; i4 < n6; i4++) {
        s5 = arguments[i4];
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
      for (var i4 = 0, p2 = Object.getOwnPropertySymbols(s5); i4 < p2.length; i4++) {
        if (e5.indexOf(p2[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s5, p2[i4]))
          t3[p2[i4]] = s5[p2[i4]];
      }
    return t3;
  }
  function __values(o6) {
    var s5 = typeof Symbol === "function" && Symbol.iterator, m2 = s5 && o6[s5], i4 = 0;
    if (m2)
      return m2.call(o6);
    if (o6 && typeof o6.length === "number")
      return {
        next: function() {
          if (o6 && i4 >= o6.length)
            o6 = void 0;
          return { value: o6 && o6[i4++], done: !o6 };
        }
      };
    throw new TypeError(s5 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o6, n6) {
    var m2 = typeof Symbol === "function" && o6[Symbol.iterator];
    if (!m2)
      return o6;
    var i4 = m2.call(o6), r4, ar = [], e5;
    try {
      while ((n6 === void 0 || n6-- > 0) && !(r4 = i4.next()).done)
        ar.push(r4.value);
    } catch (error) {
      e5 = { error };
    } finally {
      try {
        if (r4 && !r4.done && (m2 = i4["return"]))
          m2.call(i4);
      } finally {
        if (e5)
          throw e5.error;
      }
    }
    return ar;
  }
  function __spread() {
    for (var ar = [], i4 = 0; i4 < arguments.length; i4++)
      ar = ar.concat(__read(arguments[i4]));
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
    return errors2.reduce(function(a2, i4) {
      return a2.concat(i4);
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
          for (var i4 = nodes.length - 1; i4 >= 0; i4--) {
            if (nodes[i4].path.indexOf(basePath) === 0) {
              res.addNodeToCache(nodes[i4], false);
              nodes.splice(i4, 1);
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
    for (var i4 = 0; i4 < pathParts.length; i4++) {
      var part = pathParts[i4];
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
        throw fail$1("Could not resolve '" + part + "' in path '" + (joinJsonPath(pathParts.slice(0, i4)) || "/") + "' while resolving '" + joinJsonPath(pathParts) + "'");
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
    for (var i4 = 0; i4 < b2.length; i4++) {
      var current = b2[i4];
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
    for (var i4 = 0; i4 < args.length; i4++)
      res[i4] = args[i4];
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
              var addedNodes = reconcileArrayChildren(node, subType, childNodes.slice(index_1, index_1 + removedCount), added, added.map(function(_15, i5) {
                return index_1 + i5;
              }));
              if (!addedNodes) {
                return null;
              }
              change.added = addedNodes;
              for (var i4 = index_1 + removedCount; i4 < childNodes.length; i4++) {
                childNodes[i4].setParent(node, "" + (i4 + added.length - removedCount));
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
            for (var i4 = change.removedCount - 1; i4 >= 0; i4--)
              node.emitPatch({
                op: "remove",
                path: "" + (change.index + i4),
                oldValue: change.removed[i4].snapshot
              }, node);
            for (var i4 = 0; i4 < change.addedCount; i4++)
              node.emitPatch({
                op: "add",
                path: "" + (change.index + i4),
                value: node.getChildNode("" + (change.index + i4)).snapshot,
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
    for (var i4 = 0; ; i4++) {
      var hasNewNode = i4 <= newValues.length - 1;
      var oldNode = oldNodes[i4];
      var newValue = hasNewNode ? newValues[i4] : void 0;
      var newPath = "" + newPaths[i4];
      if (isNode(newValue))
        newValue = newValue.storedValue;
      if (!oldNode && !hasNewNode) {
        break;
      } else if (!hasNewNode) {
        nothingChanged = false;
        oldNodes.splice(i4, 1);
        if (oldNode instanceof ObjectNode) {
          oldNode.createObservableInstanceIfNeeded();
        }
        oldNode.die();
        i4--;
      } else if (!oldNode) {
        if (isStateTreeNode(newValue) && getStateTreeNode(newValue).parent === parent) {
          throw fail$1("Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '" + parent.path + "/" + newPath + "', but it lives already at '" + getStateTreeNode(newValue).path + "'");
        }
        nothingChanged = false;
        var newNode = valueAsNode(childType, parent, newPath, newValue);
        oldNodes.splice(i4, 0, newNode);
      } else if (areSame(oldNode, newValue)) {
        oldNodes[i4] = valueAsNode(childType, parent, newPath, newValue, oldNode);
      } else {
        var oldMatch = void 0;
        for (var j = i4; j < oldNodes.length; j++) {
          if (areSame(oldNodes[j], newValue)) {
            oldMatch = oldNodes.splice(j, 1)[0];
            break;
          }
        }
        nothingChanged = false;
        var newNode = valueAsNode(childType, parent, newPath, newValue, oldMatch);
        oldNodes.splice(i4, 0, newNode);
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
      args.forEach(function(type, i4) {
        assertArg(type, isModelType, "mobx-state-tree model type", hasTypename ? i4 + 2 : i4 + 1);
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
      realOptions.forEach(function(option, i4) {
        assertIsString(option, i4 + 1);
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
        for (var i4 = 0; i4 < this._types.length; i4++) {
          var type = this._types[i4];
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
      types2.forEach(function(type, i4) {
        assertIsType(type, options ? i4 + 2 : i4 + 1);
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

  // src/common/recordPostProcessor.ts
  var postProcessor = (snapshot) => ({
    ...snapshot,
    id: snapshot.id || void 0
  });

  // src/inventory/InventoryItem.ts
  var BaseInventoryItem = types.model("InventoryItem", {
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
  var InventoryItem = types.snapshotProcessor(BaseInventoryItem, { postProcessor });

  // src/inventory/inventoryApi.ts
  var getInventoryItem = async (id) => {
    const response = await fetch(`${AppBasePath}/api/inventory/${id}`);
    return InventoryItem.create(await response.json());
  };
  var saveInventoryItem = async (item) => {
    const response = await fetch(`${AppBasePath}/api/inventory`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(getSnapshot(item))
    });
    return InventoryItem.create(await response.json());
  };
  var deleteInventoryItem = async (item) => {
    const response = await fetch(`${AppBasePath}/api/inventory`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(getSnapshot(item))
    });
    return InventoryItem.create(await response.json());
  };

  // src/inventory/InventoryEditorStore.ts
  var defaultInventoryItem = {
    name: "",
    price: 0,
    image: ""
  };
  var InventoryEditorStore = types.model("InventoryEditorStore", {
    item: types.maybe(InventoryItem)
  }).actions((self2) => ({
    load: flow3(function* (id) {
      if (!id) {
        self2.item = InventoryItem.create(defaultInventoryItem);
        return;
      }
      const item = yield getInventoryItem(id);
      self2.item = item;
    }),
    save: flow3(function* () {
      if (self2.item) {
        self2.item = yield saveInventoryItem(self2.item);
      }
    }),
    delete: flow3(function* () {
      if (InventoryItem) {
        self2.item = yield deleteInventoryItem(self2.item);
      }
    })
  }));

  // src/inventory/InventoryEditor.ts
  var itemEditor = (item, onSave, onDelete) => p`
    <form @submit=${handleSubmit(() => onSave())}>
        <label>
            <p>Name</p>
            <input type="text" .value=${item.name} @change=${handlePropChange(item, (item2, val) => item2.setName(val))}
            required />
        </label>
    
        <label>
            <p>Price</p>
            <input type="number" step="0.01" min="0.01" .value=${item.price.toString()} @change=${handlePropChange(item, (item2, val) => item2.setPrice(Number(val) ?? 0.01))}
            required />
        </label>

        <label>
            <p>Image</p>
            <input type="text" .value=${item.image} @change=${handlePropChange(item, (item2, val) => item2.setImage(val))}
            required />
        </label>

        <br /> <br />

        <button>Submit</button> <button type="button" @click=${onDelete} >Delete</button>
    
    </form>
    `;
  var InventoryEditor = class extends MobxLitElement {
    itemId = "";
    store = InventoryEditorStore.create();
    firstUpdated = async () => {
      await this.store.load(this.itemId);
    };
    saveItem = async () => {
      await this.store.save();
      location.assign("../../");
      alert("Item saved successfully.");
    };
    deleteItem = async () => {
      await this.store.delete();
      confirm("Are you sure?.");
      location.assign("../../");
      alert("Item deleted successfully.");
    };
    render = () => this.store.item ? itemEditor(this.store.item, this.saveItem, this.deleteItem) : "Now loading...";
  };
  __publicField(InventoryEditor, "styles", r`
        ${table}
        ${button}
        ${input}
    `);
  __decorateClass([
    e4({ attribute: "item-id" })
  ], InventoryEditor.prototype, "itemId", 2);
  InventoryEditor = __decorateClass([
    n5("inventory-editor")
  ], InventoryEditor);
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
//# sourceMappingURL=InventoryEditor.js.map
