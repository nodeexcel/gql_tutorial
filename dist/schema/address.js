"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.countryEnumType = undefined;

var _graphql = require("graphql");

var countryEnumType = exports.countryEnumType = new _graphql.GraphQLEnumType({
    name: 'countryEnum',
    values: {
        IN: {
            value: "IN"
        },
        US: {
            value: "US"
        }
    }
});

exports.default = new _graphql.GraphQLObjectType({
    name: "address",
    fields: {
        id: { type: _graphql.GraphQLID },
        address: { type: _graphql.GraphQLString },
        country: { type: countryEnumType },
        phone: { type: _graphql.GraphQLString }
    }
});