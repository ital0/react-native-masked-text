Object.defineProperty(exports, '__esModule', { value: true });
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);
    if (parent === null) {return undefined;} else {return get(parent, property, receiver);}
  } else if ('value' in desc) {return desc.value;} else {
    var getter = desc.get;
    if (getter === undefined) {return undefined;}
    return getter.call(receiver);
  }
};
var _base = require('./_base.mask');
var _base2 = _interopRequireDefault(_base);
var _cpf = require('./cpf.mask');
var _cnpj = require('./cnpj.mask');

function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError('Cannot call a class as a function');}}

function _possibleConstructorReturn(self, call) {
  if (!self) {throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');}
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);}
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CPF_CNPJ = function (_BaseMask) {
    _inherits(CPF_CNPJ, _BaseMask);

    function CPF_CNPJ() {
      _classCallCheck(this, CPF_CNPJ);
      return _possibleConstructorReturn(this, (CPF_CNPJ.__proto__ || Object.getPrototypeOf(CPF_CNPJ)).apply(this, arguments));
    }

    _createClass(CPF_CNPJ, [{
      key: 'getValue', value: function getValue(
        value, settings) {
        var length = this.getLength(value);
        if (this.isCNPJ(length)) {
          return this.getVMasker().toPattern(value, _cnpj.CNPJ_MASK);
        }

        return this.getVMasker().toPattern(value, _cpf.CPF_MASK);
      }
    }, {
      key: 'getRawValue', value: function getRawValue(
        maskedValue, settings) {
        return _get(CPF_CNPJ.prototype.__proto__ || Object.getPrototypeOf(CPF_CNPJ.prototype), 'removeNotNumbers', this).call(this, maskedValue);
      }
    }, {
      key: 'getLength', value: function getLength(
        value) {
        return (value || '').trim().replace(/[.\-/]/g, '').length;
      }
    }, {
      key: 'isCNPJ', value: function isCNPJ(
        length) {
        return length > 11;
      }
    }, {
      key: 'validate', value: function validate(
        value, settings) {
        var length = this.getLength(value);
        var isEmpty = length === 0;

        if (isEmpty) {
          return false;
        }

        if (this.isCNPJ(length)) {
          return (0, _cnpj.validateCnpj)(value);
        }

        return (0, _cpf.validateCPF)(value);
      }
    }], [{ key: 'getType', value: function getType() {return 'cpf-cnpj';} }]);
    return CPF_CNPJ;
  }(_base2.default);
exports.default = CPF_CNPJ;