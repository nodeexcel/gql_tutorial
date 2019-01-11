"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//this is our data store. this can changed to mongodb/mysql etc anything later on. for now its static json
var users = [{
    id: 1,
    name: "manish"
}, {
    id: 2,
    name: "test"
}, {
    id: 3,
    name: "test2"
}];

var address = [{
    id: 1,
    address: "test",
    country: "IN",
    phone: "000",
    user_id: 1
}, {
    id: 2,
    address: "test2",
    country: "IN",
    phone: "2222",
    user_id: 1
}, {
    id: 3,
    address: "test3",
    country: "IN",
    phone: "3333",
    user_id: 2
}];

//using async/await here as when we do actual integration with db, it will be async function only
exports.default = {
    getUsers: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.abrupt("return", users);

                        case 1:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function getUsers() {
            return _ref.apply(this, arguments);
        }

        return getUsers;
    }(),
    getAddress: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            return _context2.abrupt("return", address);

                        case 1:
                        case "end":
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        function getAddress() {
            return _ref2.apply(this, arguments);
        }

        return getAddress;
    }()
};