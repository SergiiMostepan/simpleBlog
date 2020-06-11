"use strict";
exports.__esModule = true;
exports.deleteContactsError = exports.deleteContactsSucsess = exports.deleteContactsStart = exports.postContactsError = exports.postContactsSucsess = exports.postContactsStart = exports.getContactsError = exports.getContactsSucsess = exports.getContactsStart = void 0;
var types = require("./types");
// Get posts
exports.getContactsStart = function () { return ({ type: types.GETCONTACTSSTART }); };
exports.getContactsSucsess = function (data) { return ({
    type: types.GETCONTACTSSUCSESS,
    payload: data
}); };
exports.getContactsError = function () { return ({ type: types.GETCONTACTSERROR }); };
//Post posts
exports.postContactsStart = function () { return ({ type: types.POSTCONTACTSSTART }); };
exports.postContactsSucsess = function (data) { return ({
    type: types.POSTCONTACTSSUCSESS,
    payload: data
}); };
exports.postContactsError = function () { return ({ type: types.POSTCONTACTSERROR }); };
// delete posts
exports.deleteContactsStart = function () { return ({ type: types.DELETECONTACTSSTART }); };
exports.deleteContactsSucsess = function (data) { return ({
    type: types.DELETECONTACTSSUCSESS,
    payload: data
}); };
exports.deleteContactsError = function () { return ({ type: types.DELETECONTACTSERROR }); };
