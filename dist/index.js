'use strict';

var _profile = require('./schema/profile');

var _profile2 = _interopRequireDefault(_profile);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

var queryType = new graphql.GraphQLObjectType({
    name: 'Query',
    fields: {
        profile: {
            type: _profile2.default,
            args: {
                id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) }
            },
            resolve: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref) {
                    var id = _ref.id;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return _data2.default.getUsers();

                                case 2:
                                    users = _context.sent;
                                    return _context.abrupt('return', users.find(function (user) {
                                        return user.id == id;
                                    }));

                                case 4:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, undefined);
                }));

                function resolve(_x, _x2) {
                    return _ref2.apply(this, arguments);
                }

                return resolve;
            }()
        }
    }
});

var schema = new graphql.GraphQLSchema({ query: queryType });

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');