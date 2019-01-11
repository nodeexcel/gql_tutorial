"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require("graphql");

var _address = require("./address");

var _address2 = _interopRequireDefault(_address);

var _data = require("../data");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = new _graphql.GraphQLObjectType({
    name: 'Profile',
    fields: {
        id: {
            type: _graphql.GraphQLID
        },
        name: {
            type: _graphql.GraphQLString
        },
        address: {
            type: (0, _graphql.GraphQLNonNull)(new _graphql.GraphQLList(_address2.default)),
            resolve: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(user) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return _data2.default.getAddress();

                                case 2:
                                    address = _context.sent;
                                    return _context.abrupt("return", address.filter(function (addr) {
                                        return addr.user_id == user.id;
                                    }));

                                case 4:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, undefined);
                }));

                function resolve(_x) {
                    return _ref.apply(this, arguments);
                }

                return resolve;
            }()
        }
    }
});