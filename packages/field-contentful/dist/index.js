"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// index.ts
var field_contentful_exports = {};
__export(field_contentful_exports, {
  createClient: () => import_contentful.createClient,
  createFieldContentful: () => createFieldContentful,
  default: () => field_contentful_default
});
module.exports = __toCommonJS(field_contentful_exports);

// ../tsup-config/react-import.js
var import_react = __toESM(require("react"));

// index.ts
var import_contentful = require("contentful");
function createFieldContentful(contentType, options = {}) {
  const {
    space,
    accessToken,
    titleField = "title",
    filterFields,
    initialFilters
  } = options;
  if (!options.client) {
    if (!space || !accessToken) {
      throw new Error(
        'field-contentful: Must either specify "client", or "space" and "accessToken"'
      );
    }
  }
  const client = options.client || (0, import_contentful.createClient)({ space, accessToken });
  const field = {
    type: "external",
    placeholder: "Select from Contentful",
    showSearch: true,
    fetchList: (_0) => __async(this, [_0], function* ({ query, filters = {} }) {
      const entries = yield client.getEntries(__spreadProps(__spreadValues({}, filters), {
        content_type: contentType,
        query
      }));
      return entries.items;
    }),
    mapRow: ({ fields }) => fields,
    getItemSummary: (item) => item.fields[titleField],
    filterFields,
    initialFilters
  };
  return field;
}
var field_contentful_default = createFieldContentful;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createClient,
  createFieldContentful
});
