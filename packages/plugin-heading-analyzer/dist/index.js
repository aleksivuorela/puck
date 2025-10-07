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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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

// ../tsup-config/react-import.js
var import_react;
var init_react_import = __esm({
  "../tsup-config/react-import.js"() {
    "use strict";
    import_react = __toESM(require("react"));
  }
});

// ../../node_modules/classnames/index.js
var require_classnames = __commonJS({
  "../../node_modules/classnames/index.js"(exports2, module2) {
    "use strict";
    init_react_import();
    (function() {
      "use strict";
      var hasOwn2 = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn2.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module2 !== "undefined" && module2.exports) {
        classNames.default = classNames;
        module2.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// ../../node_modules/flat/index.js
var require_flat = __commonJS({
  "../../node_modules/flat/index.js"(exports2, module2) {
    "use strict";
    init_react_import();
    module2.exports = flatten3;
    flatten3.flatten = flatten3;
    flatten3.unflatten = unflatten2;
    function isBuffer(obj) {
      return obj && obj.constructor && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
    }
    function keyIdentity(key) {
      return key;
    }
    function flatten3(target, opts) {
      opts = opts || {};
      const delimiter = opts.delimiter || ".";
      const maxDepth = opts.maxDepth;
      const transformKey = opts.transformKey || keyIdentity;
      const output = {};
      function step(object, prev, currentDepth) {
        currentDepth = currentDepth || 1;
        Object.keys(object).forEach(function(key) {
          const value = object[key];
          const isarray = opts.safe && Array.isArray(value);
          const type = Object.prototype.toString.call(value);
          const isbuffer = isBuffer(value);
          const isobject = type === "[object Object]" || type === "[object Array]";
          const newKey = prev ? prev + delimiter + transformKey(key) : transformKey(key);
          if (!isarray && !isbuffer && isobject && Object.keys(value).length && (!opts.maxDepth || currentDepth < maxDepth)) {
            return step(value, newKey, currentDepth + 1);
          }
          output[newKey] = value;
        });
      }
      step(target);
      return output;
    }
    function unflatten2(target, opts) {
      opts = opts || {};
      const delimiter = opts.delimiter || ".";
      const overwrite = opts.overwrite || false;
      const transformKey = opts.transformKey || keyIdentity;
      const result = {};
      const isbuffer = isBuffer(target);
      if (isbuffer || Object.prototype.toString.call(target) !== "[object Object]") {
        return target;
      }
      function getkey(key) {
        const parsedKey = Number(key);
        return isNaN(parsedKey) || key.indexOf(".") !== -1 || opts.object ? key : parsedKey;
      }
      function addKeys(keyPrefix, recipient, target2) {
        return Object.keys(target2).reduce(function(result2, key) {
          result2[keyPrefix + delimiter + key] = target2[key];
          return result2;
        }, recipient);
      }
      function isEmpty(val) {
        const type = Object.prototype.toString.call(val);
        const isArray2 = type === "[object Array]";
        const isObject = type === "[object Object]";
        if (!val) {
          return true;
        } else if (isArray2) {
          return !val.length;
        } else if (isObject) {
          return !Object.keys(val).length;
        }
      }
      target = Object.keys(target).reduce(function(result2, key) {
        const type = Object.prototype.toString.call(target[key]);
        const isObject = type === "[object Object]" || type === "[object Array]";
        if (!isObject || isEmpty(target[key])) {
          result2[key] = target[key];
          return result2;
        } else {
          return addKeys(
            key,
            result2,
            flatten3(target[key], opts)
          );
        }
      }, {});
      Object.keys(target).forEach(function(key) {
        const split = key.split(delimiter).map(transformKey);
        let key1 = getkey(split.shift());
        let key2 = getkey(split[0]);
        let recipient = result;
        while (key2 !== void 0) {
          if (key1 === "__proto__") {
            return;
          }
          const type = Object.prototype.toString.call(recipient[key1]);
          const isobject = type === "[object Object]" || type === "[object Array]";
          if (!overwrite && !isobject && typeof recipient[key1] !== "undefined") {
            return;
          }
          if (overwrite && !isobject || !overwrite && recipient[key1] == null) {
            recipient[key1] = typeof key2 === "number" && !opts.object ? [] : {};
          }
          recipient = recipient[key1];
          if (split.length > 0) {
            key1 = getkey(split.shift());
            key2 = getkey(split[0]);
          }
        }
        recipient[key1] = unflatten2(target[key], opts);
      });
      return result;
    }
  }
});

// index.ts
var plugin_heading_analyzer_exports = {};
__export(plugin_heading_analyzer_exports, {
  default: () => HeadingAnalyzer_default
});
module.exports = __toCommonJS(plugin_heading_analyzer_exports);
init_react_import();

// src/HeadingAnalyzer.tsx
init_react_import();
var import_react11 = require("react");

// css-module:/Users/user/projects/puck/packages/plugin-heading-analyzer/src/HeadingAnalyzer.module.css#css-module
init_react_import();
var HeadingAnalyzer_module_default = { "HeadingAnalyzer": "_HeadingAnalyzer_116v6_1", "HeadingAnalyzer-cssWarning": "_HeadingAnalyzer-cssWarning_116v6_5", "HeadingAnalyzerItem": "_HeadingAnalyzerItem_116v6_9", "HeadingAnalyzerItem--missing": "_HeadingAnalyzerItem--missing_116v6_13" };

// src/HeadingAnalyzer.tsx
var import_puck = require("@measured/puck");

// ../core/components/SidebarSection/index.tsx
init_react_import();

// css-module:/Users/user/projects/puck/packages/core/components/SidebarSection/styles.module.css#css-module
init_react_import();
var styles_module_default = { "SidebarSection": "_SidebarSection_8boj8_1", "SidebarSection-title": "_SidebarSection-title_8boj8_12", "SidebarSection--noBorderTop": "_SidebarSection--noBorderTop_8boj8_20", "SidebarSection-content": "_SidebarSection-content_8boj8_24", "SidebarSection--noPadding": "_SidebarSection--noPadding_8boj8_28", "SidebarSection-breadcrumbLabel": "_SidebarSection-breadcrumbLabel_8boj8_41", "SidebarSection-breadcrumbs": "_SidebarSection-breadcrumbs_8boj8_70", "SidebarSection-breadcrumb": "_SidebarSection-breadcrumb_8boj8_41", "SidebarSection-heading": "_SidebarSection-heading_8boj8_82", "SidebarSection-loadingOverlay": "_SidebarSection-loadingOverlay_8boj8_86" };

// ../core/lib/get-class-name-factory.ts
init_react_import();
var import_classnames = __toESM(require_classnames());
var getClassNameFactory = (rootClass, styles, config = { baseClass: "" }) => (options = {}) => {
  if (typeof options === "string") {
    const descendant = options;
    const style = styles[`${rootClass}-${descendant}`];
    if (style) {
      return config.baseClass + styles[`${rootClass}-${descendant}`] || "";
    }
    return "";
  } else if (typeof options === "object") {
    const modifiers = options;
    const prefixedModifiers = {};
    for (let modifier in modifiers) {
      prefixedModifiers[styles[`${rootClass}--${modifier}`]] = modifiers[modifier];
    }
    const c = styles[rootClass];
    return config.baseClass + (0, import_classnames.default)(__spreadValues({
      [c]: !!c
    }, prefixedModifiers));
  } else {
    return config.baseClass + styles[rootClass] || "";
  }
};
var get_class_name_factory_default = getClassNameFactory;

// ../core/components/Heading/index.tsx
init_react_import();

// css-module:/Users/user/projects/puck/packages/core/components/Heading/styles.module.css#css-module
init_react_import();
var styles_module_default2 = { "Heading": "_Heading_qxrry_1", "Heading--xxxxl": "_Heading--xxxxl_qxrry_12", "Heading--xxxl": "_Heading--xxxl_qxrry_18", "Heading--xxl": "_Heading--xxl_qxrry_22", "Heading--xl": "_Heading--xl_qxrry_26", "Heading--l": "_Heading--l_qxrry_30", "Heading--m": "_Heading--m_qxrry_34", "Heading--s": "_Heading--s_qxrry_38", "Heading--xs": "_Heading--xs_qxrry_42" };

// ../core/components/Heading/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var getClassName = get_class_name_factory_default("Heading", styles_module_default2);
var Heading = ({ children, rank, size = "m" }) => {
  const Tag = rank ? `h${rank}` : "span";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Tag,
    {
      className: getClassName({
        [size]: true
      }),
      children
    }
  );
};

// ../../node_modules/lucide-react/dist/esm/lucide-react.js
init_react_import();

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
init_react_import();
var import_react3 = require("react");

// ../../node_modules/lucide-react/dist/esm/shared/src/utils.js
init_react_import();
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

// ../../node_modules/lucide-react/dist/esm/Icon.js
init_react_import();
var import_react2 = require("react");

// ../../node_modules/lucide-react/dist/esm/defaultAttributes.js
init_react_import();
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../../node_modules/lucide-react/dist/esm/Icon.js
var Icon = (0, import_react2.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode
    } = _b, rest = __objRest(_b, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode"
    ]);
    return (0, import_react2.createElement)(
      "svg",
      __spreadValues(__spreadProps(__spreadValues({
        ref
      }, defaultAttributes), {
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className)
      }), rest),
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react2.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react3.forwardRef)(
    (_a, ref) => {
      var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
      return (0, import_react3.createElement)(Icon, __spreadValues({
        ref,
        iconNode,
        className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className)
      }, props));
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// ../../node_modules/lucide-react/dist/esm/icons/chevron-right.js
init_react_import();
var ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

// ../core/lib/use-breadcrumbs.ts
init_react_import();
var import_react10 = require("react");

// ../core/store/index.ts
init_react_import();

// ../core/reducer/index.ts
init_react_import();

// ../core/reducer/actions/set.ts
init_react_import();

// ../core/lib/data/walk-app-state.ts
init_react_import();

// ../core/lib/data/for-related-zones.ts
init_react_import();

// ../core/lib/get-zone-id.ts
init_react_import();

// ../core/lib/root-droppable-id.ts
init_react_import();
var rootAreaId = "root";
var rootZone = "default-zone";
var rootDroppableId = `${rootAreaId}:${rootZone}`;

// ../core/lib/get-zone-id.ts
var getZoneId = (zoneCompound) => {
  if (!zoneCompound) {
    return [];
  }
  if (zoneCompound && zoneCompound.indexOf(":") > -1) {
    return zoneCompound.split(":");
  }
  return [rootDroppableId, zoneCompound];
};

// ../core/lib/data/for-related-zones.ts
function forRelatedZones(item, data, cb, path = []) {
  Object.entries(data.zones || {}).forEach(([zoneCompound, content]) => {
    const [parentId] = getZoneId(zoneCompound);
    if (parentId === item.props.id) {
      cb(path, zoneCompound, content);
    }
  });
}

// ../core/lib/data/map-fields.ts
init_react_import();

// ../core/lib/data/default-slots.ts
init_react_import();
var defaultSlots = (value, fields) => Object.keys(fields).reduce(
  (acc, fieldName) => fields[fieldName].type === "slot" ? __spreadValues({ [fieldName]: [] }, acc) : acc,
  value
);

// ../core/lib/data/map-fields.ts
var isPromise = (v) => !!v && typeof v.then === "function";
var flatten = (values) => values.reduce((acc, item) => __spreadValues(__spreadValues({}, acc), item), {});
var containsPromise = (arr) => arr.some(isPromise);
var walkField = ({
  value,
  fields,
  mappers,
  propKey = "",
  propPath = "",
  id = "",
  config,
  recurseSlots = false
}) => {
  var _a, _b, _c;
  const fieldType = (_a = fields[propKey]) == null ? void 0 : _a.type;
  const map = mappers[fieldType];
  if (map && fieldType === "slot") {
    const content = value || [];
    const mappedContent = recurseSlots ? content.map((el) => {
      var _a2;
      const componentConfig = config.components[el.type];
      if (!componentConfig) {
        throw new Error(`Could not find component config for ${el.type}`);
      }
      const fields2 = (_a2 = componentConfig.fields) != null ? _a2 : {};
      return walkField({
        value: __spreadProps(__spreadValues({}, el), { props: defaultSlots(el.props, fields2) }),
        fields: fields2,
        mappers,
        id: el.props.id,
        config,
        recurseSlots
      });
    }) : content;
    if (containsPromise(mappedContent)) {
      return Promise.all(mappedContent);
    }
    return map({
      value: mappedContent,
      parentId: id,
      propName: propPath,
      field: fields[propKey],
      propPath
    });
  } else if (map && fields[propKey]) {
    return map({
      value,
      parentId: id,
      propName: propKey,
      field: fields[propKey],
      propPath
    });
  }
  if (value && typeof value === "object") {
    if (Array.isArray(value)) {
      const arrayFields = ((_b = fields[propKey]) == null ? void 0 : _b.type) === "array" ? fields[propKey].arrayFields : null;
      if (!arrayFields) return value;
      const newValue = value.map(
        (el, idx) => walkField({
          value: el,
          fields: arrayFields,
          mappers,
          propKey,
          propPath: `${propPath}[${idx}]`,
          id,
          config,
          recurseSlots
        })
      );
      if (containsPromise(newValue)) {
        return Promise.all(newValue);
      }
      return newValue;
    } else if ("$$typeof" in value) {
      return value;
    } else {
      const objectFields = ((_c = fields[propKey]) == null ? void 0 : _c.type) === "object" ? fields[propKey].objectFields : fields;
      return walkObject({
        value,
        fields: objectFields,
        mappers,
        id,
        getPropPath: (k) => `${propPath}.${k}`,
        config,
        recurseSlots
      });
    }
  }
  return value;
};
var walkObject = ({
  value,
  fields,
  mappers,
  id,
  getPropPath,
  config,
  recurseSlots
}) => {
  const newProps = Object.entries(value).map(([k, v]) => {
    const opts = {
      value: v,
      fields,
      mappers,
      propKey: k,
      propPath: getPropPath(k),
      id,
      config,
      recurseSlots
    };
    const newValue = walkField(opts);
    if (isPromise(newValue)) {
      return newValue.then((resolvedValue) => ({
        [k]: resolvedValue
      }));
    }
    return {
      [k]: newValue
    };
  }, {});
  if (containsPromise(newProps)) {
    return Promise.all(newProps).then(flatten);
  }
  return flatten(newProps);
};
function mapFields(item, mappers, config, recurseSlots = false) {
  var _a, _b, _c, _d, _e;
  const itemType = "type" in item ? item.type : "root";
  const componentConfig = itemType === "root" ? config.root : (_a = config.components) == null ? void 0 : _a[itemType];
  const newProps = walkObject({
    value: defaultSlots((_b = item.props) != null ? _b : {}, (_c = componentConfig == null ? void 0 : componentConfig.fields) != null ? _c : {}),
    fields: (_d = componentConfig == null ? void 0 : componentConfig.fields) != null ? _d : {},
    mappers,
    id: item.props ? (_e = item.props.id) != null ? _e : "root" : "root",
    getPropPath: (k) => k,
    config,
    recurseSlots
  });
  if (isPromise(newProps)) {
    return newProps.then((resolvedProps) => __spreadProps(__spreadValues({}, item), {
      props: resolvedProps
    }));
  }
  return __spreadProps(__spreadValues({}, item), {
    props: newProps
  });
}

// ../core/lib/data/flatten-node.ts
init_react_import();
var import_flat = __toESM(require_flat());

// ../core/lib/data/strip-slots.ts
init_react_import();
var stripSlots = (data, config) => {
  return mapFields(data, { slot: () => null }, config);
};

// ../core/lib/data/flatten-node.ts
var { flatten: flatten2, unflatten } = import_flat.default;
var flattenNode = (node, config) => {
  return __spreadProps(__spreadValues({}, node), {
    props: flatten2(stripSlots(node, config).props)
  });
};

// ../core/lib/data/walk-app-state.ts
function walkAppState(state, config, mapContent = (content) => content, mapNodeOrSkip = (item) => item) {
  var _a;
  let newZones = {};
  const newZoneIndex = {};
  const newNodeIndex = {};
  const processContent = (path, zoneCompound, content, zoneType, newId) => {
    var _a2;
    const [parentId] = zoneCompound.split(":");
    const mappedContent = ((_a2 = mapContent(content, zoneCompound, zoneType)) != null ? _a2 : content) || [];
    const [_2, zone] = zoneCompound.split(":");
    const newZoneCompound = `${newId || parentId}:${zone}`;
    const newContent2 = mappedContent.map(
      (zoneChild, index) => processItem(zoneChild, [...path, newZoneCompound], index)
    );
    newZoneIndex[newZoneCompound] = {
      contentIds: newContent2.map((item) => item.props.id),
      type: zoneType
    };
    return [newZoneCompound, newContent2];
  };
  const processRelatedZones = (item, newId, initialPath) => {
    forRelatedZones(
      item,
      state.data,
      (relatedPath, relatedZoneCompound, relatedContent) => {
        const [zoneCompound, newContent2] = processContent(
          relatedPath,
          relatedZoneCompound,
          relatedContent,
          "dropzone",
          newId
        );
        newZones[zoneCompound] = newContent2;
      },
      initialPath
    );
  };
  const processItem = (item, path, index) => {
    const mappedItem = mapNodeOrSkip(item, path, index);
    if (!mappedItem) return item;
    const id = mappedItem.props.id;
    const newProps = __spreadProps(__spreadValues({}, mapFields(
      mappedItem,
      {
        slot: ({ value, parentId: parentId2, propPath }) => {
          const content = value;
          const zoneCompound = `${parentId2}:${propPath}`;
          const [_2, newContent2] = processContent(
            path,
            zoneCompound,
            content,
            "slot",
            parentId2
          );
          return newContent2;
        }
      },
      config
    ).props), {
      id
    });
    processRelatedZones(item, id, path);
    const newItem = __spreadProps(__spreadValues({}, item), { props: newProps });
    const thisZoneCompound = path[path.length - 1];
    const [parentId, zone] = thisZoneCompound ? thisZoneCompound.split(":") : [null, ""];
    newNodeIndex[id] = {
      data: newItem,
      flatData: flattenNode(newItem, config),
      path,
      parentId,
      zone
    };
    const finalData = __spreadProps(__spreadValues({}, newItem), { props: __spreadValues({}, newItem.props) });
    if (newProps.id === "root") {
      delete finalData["type"];
      delete finalData.props["id"];
    }
    return finalData;
  };
  const zones = state.data.zones || {};
  const [_, newContent] = processContent(
    [],
    rootDroppableId,
    state.data.content,
    "root"
  );
  const processedContent = newContent;
  const zonesAlreadyProcessed = Object.keys(newZones);
  Object.keys(zones || {}).forEach((zoneCompound) => {
    const [parentId] = zoneCompound.split(":");
    if (zonesAlreadyProcessed.includes(zoneCompound)) {
      return;
    }
    const [_2, newContent2] = processContent(
      [rootDroppableId],
      zoneCompound,
      zones[zoneCompound],
      "dropzone",
      parentId
    );
    newZones[zoneCompound] = newContent2;
  }, newZones);
  const processedRoot = processItem(
    {
      type: "root",
      props: __spreadProps(__spreadValues({}, (_a = state.data.root.props) != null ? _a : state.data.root), { id: "root" })
    },
    [],
    -1
  );
  const root = __spreadProps(__spreadValues({}, state.data.root), {
    props: processedRoot.props
  });
  return __spreadProps(__spreadValues({}, state), {
    data: {
      root,
      content: processedContent,
      zones: __spreadValues(__spreadValues({}, state.data.zones), newZones)
    },
    indexes: {
      nodes: __spreadValues(__spreadValues({}, state.indexes.nodes), newNodeIndex),
      zones: __spreadValues(__spreadValues({}, state.indexes.zones), newZoneIndex)
    }
  });
}

// ../core/reducer/actions/set.ts
var setAction = (state, action, appStore) => {
  if (typeof action.state === "object") {
    const newState = __spreadValues(__spreadValues({}, state), action.state);
    if (action.state.indexes) {
      return newState;
    }
    console.warn(
      "`set` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."
    );
    return walkAppState(newState, appStore.config);
  }
  return __spreadValues(__spreadValues({}, state), action.state(state));
};

// ../core/reducer/actions/insert.ts
init_react_import();

// ../core/lib/data/insert.ts
init_react_import();
var insert = (list, index, item) => {
  const result = Array.from(list || []);
  result.splice(index, 0, item);
  return result;
};

// ../core/lib/generate-id.ts
init_react_import();

// ../../node_modules/uuid/dist/esm-node/index.js
init_react_import();

// ../../node_modules/uuid/dist/esm-node/rng.js
init_react_import();
var import_crypto = __toESM(require("crypto"));
var rnds8Pool = new Uint8Array(256);
var poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    import_crypto.default.randomFillSync(rnds8Pool);
    poolPtr = 0;
  }
  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

// ../../node_modules/uuid/dist/esm-node/stringify.js
init_react_import();
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

// ../../node_modules/uuid/dist/esm-node/v4.js
init_react_import();

// ../../node_modules/uuid/dist/esm-node/native.js
init_react_import();
var import_crypto2 = __toESM(require("crypto"));
var native_default = {
  randomUUID: import_crypto2.default.randomUUID
};

// ../../node_modules/uuid/dist/esm-node/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
var v4_default = v4;

// ../core/lib/generate-id.ts
var generateId = (type) => type ? `${type}-${v4_default()}` : v4_default();

// ../core/lib/data/get-ids-for-parent.ts
init_react_import();
var getIdsForParent = (zoneCompound, state) => {
  const [parentId] = zoneCompound.split(":");
  const node = state.indexes.nodes[parentId];
  return ((node == null ? void 0 : node.path) || []).map((p) => p.split(":")[0]);
};

// ../core/lib/data/populate-ids.ts
init_react_import();

// ../core/lib/data/walk-tree.ts
init_react_import();
function walkTree(data, config, callbackFn) {
  var _a, _b;
  const walkItem = (item) => {
    return mapFields(
      item,
      {
        slot: ({ value, parentId, propName }) => {
          var _a2;
          const content = value;
          return (_a2 = callbackFn(content, { parentId, propName })) != null ? _a2 : content;
        }
      },
      config,
      true
    );
  };
  if ("props" in data) {
    return walkItem(data);
  }
  const _data = data;
  const zones = (_a = _data.zones) != null ? _a : {};
  const mappedContent = _data.content.map(walkItem);
  return {
    root: walkItem(_data.root),
    content: (_b = callbackFn(mappedContent, {
      parentId: "root",
      propName: "default-zone"
    })) != null ? _b : mappedContent,
    zones: Object.keys(zones).reduce(
      (acc, zoneCompound) => __spreadProps(__spreadValues({}, acc), {
        [zoneCompound]: zones[zoneCompound].map(walkItem)
      }),
      {}
    )
  };
}

// ../core/lib/data/populate-ids.ts
var populateIds = (data, config, override = false) => {
  const id = generateId(data.type);
  return walkTree(
    __spreadProps(__spreadValues({}, data), {
      props: override ? __spreadProps(__spreadValues({}, data.props), { id }) : __spreadValues({}, data.props)
    }),
    config,
    (contents) => contents.map((item) => {
      const id2 = generateId(item.type);
      return __spreadProps(__spreadValues({}, item), {
        props: override ? __spreadProps(__spreadValues({}, item.props), { id: id2 }) : __spreadValues({ id: id2 }, item.props)
      });
    })
  );
};

// ../core/reducer/actions/insert.ts
function insertAction(state, action, appStore) {
  const id = action.id || generateId(action.componentType);
  const emptyComponentData = populateIds(
    {
      type: action.componentType,
      props: __spreadProps(__spreadValues({}, appStore.config.components[action.componentType].defaultProps || {}), {
        id
      })
    },
    appStore.config
  );
  const [parentId] = action.destinationZone.split(":");
  const idsInPath = getIdsForParent(action.destinationZone, state);
  return walkAppState(
    state,
    appStore.config,
    (content, zoneCompound) => {
      if (zoneCompound === action.destinationZone) {
        return insert(
          content || [],
          action.destinationIndex,
          emptyComponentData
        );
      }
      return content;
    },
    (childItem, path) => {
      if (childItem.props.id === id || childItem.props.id === parentId) {
        return childItem;
      } else if (idsInPath.includes(childItem.props.id)) {
        return childItem;
      } else if (path.includes(action.destinationZone)) {
        return childItem;
      }
      return null;
    }
  );
}

// ../core/reducer/actions/replace.ts
init_react_import();
var replaceAction = (state, action, appStore) => {
  const [parentId] = action.destinationZone.split(":");
  const idsInPath = getIdsForParent(action.destinationZone, state);
  const originalId = state.indexes.zones[action.destinationZone].contentIds[action.destinationIndex];
  const idChanged = originalId !== action.data.props.id;
  if (idChanged) {
    throw new Error(
      `Can't change the id during a replace action. Please us "remove" and "insert" to define a new node.`
    );
  }
  const newSlotIds = [];
  const data = walkTree(action.data, appStore.config, (contents, opts) => {
    newSlotIds.push(`${opts.parentId}:${opts.propName}`);
    return contents.map((item) => {
      const id = generateId(item.type);
      return __spreadProps(__spreadValues({}, item), {
        props: __spreadValues({ id }, item.props)
      });
    });
  });
  const stateWithDeepSlotsRemoved = __spreadValues({}, state);
  Object.keys(state.indexes.zones).forEach((zoneCompound) => {
    const id = zoneCompound.split(":")[0];
    if (id === originalId) {
      if (!newSlotIds.includes(zoneCompound)) {
        delete stateWithDeepSlotsRemoved.indexes.zones[zoneCompound];
      }
    }
  });
  return walkAppState(
    stateWithDeepSlotsRemoved,
    appStore.config,
    (content, zoneCompound) => {
      const newContent = [...content];
      if (zoneCompound === action.destinationZone) {
        newContent[action.destinationIndex] = data;
      }
      return newContent;
    },
    (childItem, path) => {
      const pathIds = path.map((p) => p.split(":")[0]);
      if (childItem.props.id === data.props.id) {
        return data;
      } else if (childItem.props.id === parentId) {
        return childItem;
      } else if (idsInPath.indexOf(childItem.props.id) > -1) {
        return childItem;
      } else if (pathIds.indexOf(data.props.id) > -1) {
        return childItem;
      }
      return null;
    }
  );
};

// ../core/reducer/actions/replace-root.ts
init_react_import();
var replaceRootAction = (state, action, appStore) => {
  return walkAppState(
    state,
    appStore.config,
    (content) => content,
    (childItem) => {
      if (childItem.props.id === "root") {
        return __spreadProps(__spreadValues({}, childItem), {
          props: __spreadValues(__spreadValues({}, childItem.props), action.root.props),
          readOnly: action.root.readOnly
        });
      }
      return childItem;
    }
  );
};

// ../core/reducer/actions/duplicate.ts
init_react_import();

// ../core/lib/data/get-item.ts
init_react_import();
function getItem(selector, state) {
  var _a, _b;
  const zone = (_a = state.indexes.zones) == null ? void 0 : _a[selector.zone || rootDroppableId];
  return zone ? (_b = state.indexes.nodes[zone.contentIds[selector.index]]) == null ? void 0 : _b.data : void 0;
}

// ../core/reducer/actions/duplicate.ts
function duplicateAction(state, action, appStore) {
  const item = getItem(
    { index: action.sourceIndex, zone: action.sourceZone },
    state
  );
  const idsInPath = getIdsForParent(action.sourceZone, state);
  const newItem = __spreadProps(__spreadValues({}, item), {
    props: __spreadProps(__spreadValues({}, item.props), {
      id: generateId(item.type)
    })
  });
  const modified = walkAppState(
    state,
    appStore.config,
    (content, zoneCompound) => {
      if (zoneCompound === action.sourceZone) {
        return insert(content, action.sourceIndex + 1, item);
      }
      return content;
    },
    (childItem, path, index) => {
      const zoneCompound = path[path.length - 1];
      const parents = path.map((p) => p.split(":")[0]);
      if (parents.indexOf(newItem.props.id) > -1) {
        return __spreadProps(__spreadValues({}, childItem), {
          props: __spreadProps(__spreadValues({}, childItem.props), {
            id: generateId(childItem.type)
          })
        });
      }
      if (zoneCompound === action.sourceZone && index === action.sourceIndex + 1) {
        return newItem;
      }
      const [sourceZoneParent] = action.sourceZone.split(":");
      if (sourceZoneParent === childItem.props.id || idsInPath.indexOf(childItem.props.id) > -1) {
        return childItem;
      }
      return null;
    }
  );
  return __spreadProps(__spreadValues({}, modified), {
    ui: __spreadProps(__spreadValues({}, modified.ui), {
      itemSelector: {
        index: action.sourceIndex + 1,
        zone: action.sourceZone
      }
    })
  });
}

// ../core/reducer/actions/reorder.ts
init_react_import();

// ../core/reducer/actions/move.ts
init_react_import();

// ../core/lib/data/remove.ts
init_react_import();
var remove = (list, index) => {
  const result = Array.from(list);
  result.splice(index, 1);
  return result;
};

// ../core/reducer/actions/move.ts
var moveAction = (state, action, appStore) => {
  if (action.sourceZone === action.destinationZone && action.sourceIndex === action.destinationIndex) {
    return state;
  }
  const item = getItem(
    { zone: action.sourceZone, index: action.sourceIndex },
    state
  );
  if (!item) return state;
  const idsInSourcePath = getIdsForParent(action.sourceZone, state);
  const idsInDestinationPath = getIdsForParent(action.destinationZone, state);
  return walkAppState(
    state,
    appStore.config,
    (content, zoneCompound) => {
      if (zoneCompound === action.sourceZone && zoneCompound === action.destinationZone) {
        return insert(
          remove(content, action.sourceIndex),
          action.destinationIndex,
          item
        );
      } else if (zoneCompound === action.sourceZone) {
        return remove(content, action.sourceIndex);
      } else if (zoneCompound === action.destinationZone) {
        return insert(content, action.destinationIndex, item);
      }
      return content;
    },
    (childItem, path) => {
      const [sourceZoneParent] = action.sourceZone.split(":");
      const [destinationZoneParent] = action.destinationZone.split(":");
      const childId = childItem.props.id;
      if (sourceZoneParent === childId || destinationZoneParent === childId || item.props.id === childId || idsInSourcePath.indexOf(childId) > -1 || idsInDestinationPath.indexOf(childId) > -1 || path.includes(action.destinationZone)) {
        return childItem;
      }
      return null;
    }
  );
};

// ../core/reducer/actions/reorder.ts
var reorderAction = (state, action, appStore) => {
  return moveAction(
    state,
    {
      type: "move",
      sourceIndex: action.sourceIndex,
      sourceZone: action.destinationZone,
      destinationIndex: action.destinationIndex,
      destinationZone: action.destinationZone
    },
    appStore
  );
};

// ../core/reducer/actions/remove.ts
init_react_import();
var removeAction = (state, action, appStore) => {
  const item = getItem({ index: action.index, zone: action.zone }, state);
  const nodesToDelete = Object.entries(state.indexes.nodes).reduce(
    (acc, [nodeId, nodeData]) => {
      const pathIds = nodeData.path.map((p) => p.split(":")[0]);
      if (pathIds.includes(item.props.id)) {
        return [...acc, nodeId];
      }
      return acc;
    },
    [item.props.id]
  );
  const newState = walkAppState(
    state,
    appStore.config,
    (content, zoneCompound) => {
      if (zoneCompound === action.zone) {
        return remove(content, action.index);
      }
      return content;
    }
  );
  Object.keys(newState.data.zones || {}).forEach((zoneCompound) => {
    const parentId = zoneCompound.split(":")[0];
    if (nodesToDelete.includes(parentId) && newState.data.zones) {
      delete newState.data.zones[zoneCompound];
    }
  });
  Object.keys(newState.indexes.zones).forEach((zoneCompound) => {
    const parentId = zoneCompound.split(":")[0];
    if (nodesToDelete.includes(parentId)) {
      delete newState.indexes.zones[zoneCompound];
    }
  });
  nodesToDelete.forEach((id) => {
    delete newState.indexes.nodes[id];
  });
  return newState;
};

// ../core/reducer/actions/register-zone.ts
init_react_import();

// ../core/lib/data/setup-zone.ts
init_react_import();
var setupZone = (data, zoneKey) => {
  if (zoneKey === rootDroppableId) {
    return data;
  }
  const newData = __spreadProps(__spreadValues({}, data), {
    zones: data.zones ? __spreadValues({}, data.zones) : {}
  });
  newData.zones[zoneKey] = newData.zones[zoneKey] || [];
  return newData;
};

// ../core/reducer/actions/register-zone.ts
var zoneCache = {};
function registerZoneAction(state, action) {
  if (zoneCache[action.zone]) {
    return __spreadProps(__spreadValues({}, state), {
      data: __spreadProps(__spreadValues({}, state.data), {
        zones: __spreadProps(__spreadValues({}, state.data.zones), {
          [action.zone]: zoneCache[action.zone]
        })
      }),
      indexes: __spreadProps(__spreadValues({}, state.indexes), {
        zones: __spreadProps(__spreadValues({}, state.indexes.zones), {
          [action.zone]: __spreadProps(__spreadValues({}, state.indexes.zones[action.zone]), {
            contentIds: zoneCache[action.zone].map((item) => item.props.id),
            type: "dropzone"
          })
        })
      })
    });
  }
  return __spreadProps(__spreadValues({}, state), { data: setupZone(state.data, action.zone) });
}
function unregisterZoneAction(state, action) {
  const _zones = __spreadValues({}, state.data.zones || {});
  const zoneIndex = __spreadValues({}, state.indexes.zones || {});
  if (_zones[action.zone]) {
    zoneCache[action.zone] = _zones[action.zone];
    delete _zones[action.zone];
  }
  delete zoneIndex[action.zone];
  return __spreadProps(__spreadValues({}, state), {
    data: __spreadProps(__spreadValues({}, state.data), {
      zones: _zones
    }),
    indexes: __spreadProps(__spreadValues({}, state.indexes), {
      zones: zoneIndex
    })
  });
}

// ../core/reducer/actions/set-data.ts
init_react_import();
var setDataAction = (state, action, appStore) => {
  if (typeof action.data === "object") {
    console.warn(
      "`setData` is expensive and may cause unnecessary re-renders. Consider using a more atomic action instead."
    );
    return walkAppState(
      __spreadProps(__spreadValues({}, state), {
        data: __spreadValues(__spreadValues({}, state.data), action.data)
      }),
      appStore.config
    );
  }
  return walkAppState(
    __spreadProps(__spreadValues({}, state), {
      data: __spreadValues(__spreadValues({}, state.data), action.data(state.data))
    }),
    appStore.config
  );
};

// ../core/reducer/actions/set-ui.ts
init_react_import();
var setUiAction = (state, action) => {
  if (typeof action.ui === "object") {
    return __spreadProps(__spreadValues({}, state), {
      ui: __spreadValues(__spreadValues({}, state.ui), action.ui)
    });
  }
  return __spreadProps(__spreadValues({}, state), {
    ui: __spreadValues(__spreadValues({}, state.ui), action.ui(state.ui))
  });
};

// ../core/lib/data/make-state-public.ts
init_react_import();
var makeStatePublic = (state) => {
  const { data, ui } = state;
  return { data, ui };
};

// ../core/reducer/actions.tsx
init_react_import();

// ../core/reducer/index.ts
function storeInterceptor(reducer, record, onAction) {
  return (state, action) => {
    const newAppState = reducer(state, action);
    const isValidType = ![
      "registerZone",
      "unregisterZone",
      "setData",
      "setUi",
      "set"
    ].includes(action.type);
    if (typeof action.recordHistory !== "undefined" ? action.recordHistory : isValidType) {
      if (record) record(newAppState);
    }
    onAction == null ? void 0 : onAction(action, makeStatePublic(newAppState), makeStatePublic(state));
    return newAppState;
  };
}
function createReducer({
  record,
  onAction,
  appStore
}) {
  return storeInterceptor(
    (state, action) => {
      if (action.type === "set") {
        return setAction(state, action, appStore);
      }
      if (action.type === "insert") {
        return insertAction(state, action, appStore);
      }
      if (action.type === "replace") {
        return replaceAction(state, action, appStore);
      }
      if (action.type === "replaceRoot") {
        return replaceRootAction(state, action, appStore);
      }
      if (action.type === "duplicate") {
        return duplicateAction(state, action, appStore);
      }
      if (action.type === "reorder") {
        return reorderAction(state, action, appStore);
      }
      if (action.type === "move") {
        return moveAction(state, action, appStore);
      }
      if (action.type === "remove") {
        return removeAction(state, action, appStore);
      }
      if (action.type === "registerZone") {
        return registerZoneAction(state, action);
      }
      if (action.type === "unregisterZone") {
        return unregisterZoneAction(state, action);
      }
      if (action.type === "setData") {
        return setDataAction(state, action, appStore);
      }
      if (action.type === "setUi") {
        return setUiAction(state, action);
      }
      return state;
    },
    record,
    onAction
  );
}

// ../core/components/ViewportControls/default-viewports.ts
init_react_import();
var defaultViewports = [
  { width: 360, height: "auto", icon: "Smartphone", label: "Small" },
  { width: 768, height: "auto", icon: "Tablet", label: "Medium" },
  { width: 1280, height: "auto", icon: "Monitor", label: "Large" }
];

// ../../node_modules/zustand/esm/vanilla.mjs
init_react_import();
var createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

// ../../node_modules/zustand/esm/react.mjs
init_react_import();
var import_react4 = __toESM(require("react"), 1);
var identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = import_react4.default.useSyncExternalStore(
    api.subscribe,
    () => selector(api.getState()),
    () => selector(api.getInitialState())
  );
  import_react4.default.useDebugValue(slice);
  return slice;
}
var createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
var create = (createState) => createState ? createImpl(createState) : createImpl;

// ../../node_modules/zustand/esm/middleware.mjs
init_react_import();
var subscribeWithSelectorImpl = (fn) => (set, get, api) => {
  const origSubscribe = api.subscribe;
  api.subscribe = (selector, optListener, options) => {
    let listener = selector;
    if (optListener) {
      const equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
      let currentSlice = selector(api.getState());
      listener = (state) => {
        const nextSlice = selector(state);
        if (!equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          optListener(currentSlice = nextSlice, previousSlice);
        }
      };
      if (options == null ? void 0 : options.fireImmediately) {
        optListener(currentSlice, currentSlice);
      }
    }
    return origSubscribe(listener);
  };
  const initialState = fn(set, get, api);
  return initialState;
};
var subscribeWithSelector = subscribeWithSelectorImpl;

// ../core/store/index.ts
var import_react9 = require("react");

// ../core/store/slices/history.ts
init_react_import();
var import_react6 = require("react");

// ../core/lib/use-hotkey.ts
init_react_import();
var import_react5 = require("react");
var useHotkeyStore = create()(
  subscribeWithSelector((set) => ({
    held: {},
    hold: (key) => set((s) => s.held[key] ? s : { held: __spreadProps(__spreadValues({}, s.held), { [key]: true }) }),
    release: (key) => set((s) => s.held[key] ? { held: __spreadProps(__spreadValues({}, s.held), { [key]: false }) } : s),
    reset: (held = {}) => set(() => ({ held })),
    triggers: {}
  }))
);

// ../core/store/slices/history.ts
var EMPTY_HISTORY_INDEX = 0;
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
var tidyState = (state) => {
  return __spreadProps(__spreadValues({}, state), {
    ui: __spreadProps(__spreadValues({}, state.ui), {
      field: {
        focus: null
      }
    })
  });
};
var createHistorySlice = (set, get) => {
  const record = debounce((state) => {
    const { histories, index } = get().history;
    const history = {
      state,
      id: generateId("history")
    };
    const newHistories = [...histories.slice(0, index + 1), history];
    set({
      history: __spreadProps(__spreadValues({}, get().history), {
        histories: newHistories,
        index: newHistories.length - 1
      })
    });
  }, 250);
  return {
    initialAppState: {},
    index: EMPTY_HISTORY_INDEX,
    histories: [],
    hasPast: () => get().history.index > EMPTY_HISTORY_INDEX,
    hasFuture: () => get().history.index < get().history.histories.length - 1,
    prevHistory: () => {
      const { history } = get();
      return history.hasPast() ? history.histories[history.index - 1] : null;
    },
    nextHistory: () => {
      const s = get().history;
      return s.hasFuture() ? s.histories[s.index + 1] : null;
    },
    currentHistory: () => get().history.histories[get().history.index],
    back: () => {
      var _a;
      const { history, dispatch } = get();
      if (history.hasPast()) {
        const state = tidyState(
          ((_a = history.prevHistory()) == null ? void 0 : _a.state) || history.initialAppState
        );
        dispatch({
          type: "set",
          state
        });
        set({ history: __spreadProps(__spreadValues({}, history), { index: history.index - 1 }) });
      }
    },
    forward: () => {
      var _a;
      const { history, dispatch } = get();
      if (history.hasFuture()) {
        const state = (_a = history.nextHistory()) == null ? void 0 : _a.state;
        dispatch({ type: "set", state: state ? tidyState(state) : {} });
        set({ history: __spreadProps(__spreadValues({}, history), { index: history.index + 1 }) });
      }
    },
    setHistories: (histories) => {
      var _a;
      const { dispatch, history } = get();
      dispatch({
        type: "set",
        state: ((_a = histories[histories.length - 1]) == null ? void 0 : _a.state) || history.initialAppState
      });
      set({ history: __spreadProps(__spreadValues({}, history), { histories, index: histories.length - 1 }) });
    },
    setHistoryIndex: (index) => {
      var _a;
      const { dispatch, history } = get();
      dispatch({
        type: "set",
        state: ((_a = history.histories[index]) == null ? void 0 : _a.state) || history.initialAppState
      });
      set({ history: __spreadProps(__spreadValues({}, history), { index }) });
    },
    record
  };
};

// ../core/store/slices/nodes.ts
init_react_import();
var createNodesSlice = (set, get) => ({
  nodes: {},
  registerNode: (id, node) => {
    const s = get().nodes;
    const emptyNode = {
      id,
      methods: {
        sync: () => null,
        hideOverlay: () => null,
        showOverlay: () => null
      },
      element: null
    };
    const existingNode = s.nodes[id];
    set({
      nodes: __spreadProps(__spreadValues({}, s), {
        nodes: __spreadProps(__spreadValues({}, s.nodes), {
          [id]: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, emptyNode), existingNode), node), {
            id
          })
        })
      })
    });
  },
  unregisterNode: (id) => {
    const s = get().nodes;
    const existingNode = s.nodes[id];
    if (existingNode) {
      const newNodes = __spreadValues({}, s.nodes);
      delete newNodes[id];
      set({
        nodes: __spreadProps(__spreadValues({}, s), {
          nodes: newNodes
        })
      });
    }
  }
});

// ../core/store/slices/permissions.ts
init_react_import();
var import_react7 = require("react");

// ../core/lib/data/flatten-data.ts
init_react_import();
var flattenData = (state, config) => {
  const data = [];
  walkAppState(
    state,
    config,
    (content) => content,
    (item) => {
      data.push(item);
      return item;
    }
  );
  return data;
};

// ../core/lib/get-changed.ts
init_react_import();

// ../../node_modules/fast-equals/dist/esm/index.mjs
init_react_import();
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function combineComparators(comparatorA, comparatorB) {
  return function isEqual(a, b, state) {
    return comparatorA(a, b, state) && comparatorB(a, b, state);
  };
}
function createIsCircular(areItemsEqual) {
  return function isCircular(a, b, state) {
    if (!a || !b || typeof a !== "object" || typeof b !== "object") {
      return areItemsEqual(a, b, state);
    }
    var cache2 = state.cache;
    var cachedA = cache2.get(a);
    var cachedB = cache2.get(b);
    if (cachedA && cachedB) {
      return cachedA === b && cachedB === a;
    }
    cache2.set(a, b);
    cache2.set(b, a);
    var result = areItemsEqual(a, b, state);
    cache2.delete(a);
    cache2.delete(b);
    return result;
  };
}
function getStrictProperties(object) {
  return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
}
var hasOwn = Object.hasOwn || function(object, property) {
  return hasOwnProperty.call(object, property);
};
function sameValueZeroEqual(a, b) {
  return a === b || !a && !b && a !== a && b !== b;
}
var PREACT_VNODE = "__v";
var PREACT_OWNER = "__o";
var REACT_OWNER = "_owner";
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var keys = Object.keys;
function areArraysEqual(a, b, state) {
  var index = a.length;
  if (b.length !== index) {
    return false;
  }
  while (index-- > 0) {
    if (!state.equals(a[index], b[index], index, index, a, b, state)) {
      return false;
    }
  }
  return true;
}
function areDatesEqual(a, b) {
  return sameValueZeroEqual(a.getTime(), b.getTime());
}
function areErrorsEqual(a, b) {
  return a.name === b.name && a.message === b.message && a.cause === b.cause && a.stack === b.stack;
}
function areFunctionsEqual(a, b) {
  return a === b;
}
function areMapsEqual(a, b, state) {
  var size = a.size;
  if (size !== b.size) {
    return false;
  }
  if (!size) {
    return true;
  }
  var matchedIndices = new Array(size);
  var aIterable = a.entries();
  var aResult;
  var bResult;
  var index = 0;
  while (aResult = aIterable.next()) {
    if (aResult.done) {
      break;
    }
    var bIterable = b.entries();
    var hasMatch = false;
    var matchIndex = 0;
    while (bResult = bIterable.next()) {
      if (bResult.done) {
        break;
      }
      if (matchedIndices[matchIndex]) {
        matchIndex++;
        continue;
      }
      var aEntry = aResult.value;
      var bEntry = bResult.value;
      if (state.equals(aEntry[0], bEntry[0], index, matchIndex, a, b, state) && state.equals(aEntry[1], bEntry[1], aEntry[0], bEntry[0], a, b, state)) {
        hasMatch = matchedIndices[matchIndex] = true;
        break;
      }
      matchIndex++;
    }
    if (!hasMatch) {
      return false;
    }
    index++;
  }
  return true;
}
var areNumbersEqual = sameValueZeroEqual;
function areObjectsEqual(a, b, state) {
  var properties = keys(a);
  var index = properties.length;
  if (keys(b).length !== index) {
    return false;
  }
  while (index-- > 0) {
    if (!isPropertyEqual(a, b, state, properties[index])) {
      return false;
    }
  }
  return true;
}
function areObjectsEqualStrict(a, b, state) {
  var properties = getStrictProperties(a);
  var index = properties.length;
  if (getStrictProperties(b).length !== index) {
    return false;
  }
  var property;
  var descriptorA;
  var descriptorB;
  while (index-- > 0) {
    property = properties[index];
    if (!isPropertyEqual(a, b, state, property)) {
      return false;
    }
    descriptorA = getOwnPropertyDescriptor(a, property);
    descriptorB = getOwnPropertyDescriptor(b, property);
    if ((descriptorA || descriptorB) && (!descriptorA || !descriptorB || descriptorA.configurable !== descriptorB.configurable || descriptorA.enumerable !== descriptorB.enumerable || descriptorA.writable !== descriptorB.writable)) {
      return false;
    }
  }
  return true;
}
function arePrimitiveWrappersEqual(a, b) {
  return sameValueZeroEqual(a.valueOf(), b.valueOf());
}
function areRegExpsEqual(a, b) {
  return a.source === b.source && a.flags === b.flags;
}
function areSetsEqual(a, b, state) {
  var size = a.size;
  if (size !== b.size) {
    return false;
  }
  if (!size) {
    return true;
  }
  var matchedIndices = new Array(size);
  var aIterable = a.values();
  var aResult;
  var bResult;
  while (aResult = aIterable.next()) {
    if (aResult.done) {
      break;
    }
    var bIterable = b.values();
    var hasMatch = false;
    var matchIndex = 0;
    while (bResult = bIterable.next()) {
      if (bResult.done) {
        break;
      }
      if (!matchedIndices[matchIndex] && state.equals(aResult.value, bResult.value, aResult.value, bResult.value, a, b, state)) {
        hasMatch = matchedIndices[matchIndex] = true;
        break;
      }
      matchIndex++;
    }
    if (!hasMatch) {
      return false;
    }
  }
  return true;
}
function areTypedArraysEqual(a, b) {
  var index = a.length;
  if (b.length !== index) {
    return false;
  }
  while (index-- > 0) {
    if (a[index] !== b[index]) {
      return false;
    }
  }
  return true;
}
function areUrlsEqual(a, b) {
  return a.hostname === b.hostname && a.pathname === b.pathname && a.protocol === b.protocol && a.port === b.port && a.hash === b.hash && a.username === b.username && a.password === b.password;
}
function isPropertyEqual(a, b, state, property) {
  if ((property === REACT_OWNER || property === PREACT_OWNER || property === PREACT_VNODE) && (a.$$typeof || b.$$typeof)) {
    return true;
  }
  return hasOwn(b, property) && state.equals(a[property], b[property], property, property, a, b, state);
}
var ARGUMENTS_TAG = "[object Arguments]";
var BOOLEAN_TAG = "[object Boolean]";
var DATE_TAG = "[object Date]";
var ERROR_TAG = "[object Error]";
var MAP_TAG = "[object Map]";
var NUMBER_TAG = "[object Number]";
var OBJECT_TAG = "[object Object]";
var REG_EXP_TAG = "[object RegExp]";
var SET_TAG = "[object Set]";
var STRING_TAG = "[object String]";
var URL_TAG = "[object URL]";
var isArray = Array.isArray;
var isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null;
var assign = Object.assign;
var getTag = Object.prototype.toString.call.bind(Object.prototype.toString);
function createEqualityComparator(_a) {
  var areArraysEqual2 = _a.areArraysEqual, areDatesEqual2 = _a.areDatesEqual, areErrorsEqual2 = _a.areErrorsEqual, areFunctionsEqual2 = _a.areFunctionsEqual, areMapsEqual2 = _a.areMapsEqual, areNumbersEqual2 = _a.areNumbersEqual, areObjectsEqual2 = _a.areObjectsEqual, arePrimitiveWrappersEqual2 = _a.arePrimitiveWrappersEqual, areRegExpsEqual2 = _a.areRegExpsEqual, areSetsEqual2 = _a.areSetsEqual, areTypedArraysEqual2 = _a.areTypedArraysEqual, areUrlsEqual2 = _a.areUrlsEqual;
  return function comparator(a, b, state) {
    if (a === b) {
      return true;
    }
    if (a == null || b == null) {
      return false;
    }
    var type = typeof a;
    if (type !== typeof b) {
      return false;
    }
    if (type !== "object") {
      if (type === "number") {
        return areNumbersEqual2(a, b, state);
      }
      if (type === "function") {
        return areFunctionsEqual2(a, b, state);
      }
      return false;
    }
    var constructor = a.constructor;
    if (constructor !== b.constructor) {
      return false;
    }
    if (constructor === Object) {
      return areObjectsEqual2(a, b, state);
    }
    if (isArray(a)) {
      return areArraysEqual2(a, b, state);
    }
    if (isTypedArray != null && isTypedArray(a)) {
      return areTypedArraysEqual2(a, b, state);
    }
    if (constructor === Date) {
      return areDatesEqual2(a, b, state);
    }
    if (constructor === RegExp) {
      return areRegExpsEqual2(a, b, state);
    }
    if (constructor === Map) {
      return areMapsEqual2(a, b, state);
    }
    if (constructor === Set) {
      return areSetsEqual2(a, b, state);
    }
    var tag = getTag(a);
    if (tag === DATE_TAG) {
      return areDatesEqual2(a, b, state);
    }
    if (tag === REG_EXP_TAG) {
      return areRegExpsEqual2(a, b, state);
    }
    if (tag === MAP_TAG) {
      return areMapsEqual2(a, b, state);
    }
    if (tag === SET_TAG) {
      return areSetsEqual2(a, b, state);
    }
    if (tag === OBJECT_TAG) {
      return typeof a.then !== "function" && typeof b.then !== "function" && areObjectsEqual2(a, b, state);
    }
    if (tag === URL_TAG) {
      return areUrlsEqual2(a, b, state);
    }
    if (tag === ERROR_TAG) {
      return areErrorsEqual2(a, b, state);
    }
    if (tag === ARGUMENTS_TAG) {
      return areObjectsEqual2(a, b, state);
    }
    if (tag === BOOLEAN_TAG || tag === NUMBER_TAG || tag === STRING_TAG) {
      return arePrimitiveWrappersEqual2(a, b, state);
    }
    return false;
  };
}
function createEqualityComparatorConfig(_a) {
  var circular = _a.circular, createCustomConfig = _a.createCustomConfig, strict = _a.strict;
  var config = {
    areArraysEqual: strict ? areObjectsEqualStrict : areArraysEqual,
    areDatesEqual,
    areErrorsEqual,
    areFunctionsEqual,
    areMapsEqual: strict ? combineComparators(areMapsEqual, areObjectsEqualStrict) : areMapsEqual,
    areNumbersEqual,
    areObjectsEqual: strict ? areObjectsEqualStrict : areObjectsEqual,
    arePrimitiveWrappersEqual,
    areRegExpsEqual,
    areSetsEqual: strict ? combineComparators(areSetsEqual, areObjectsEqualStrict) : areSetsEqual,
    areTypedArraysEqual: strict ? areObjectsEqualStrict : areTypedArraysEqual,
    areUrlsEqual
  };
  if (createCustomConfig) {
    config = assign({}, config, createCustomConfig(config));
  }
  if (circular) {
    var areArraysEqual$1 = createIsCircular(config.areArraysEqual);
    var areMapsEqual$1 = createIsCircular(config.areMapsEqual);
    var areObjectsEqual$1 = createIsCircular(config.areObjectsEqual);
    var areSetsEqual$1 = createIsCircular(config.areSetsEqual);
    config = assign({}, config, {
      areArraysEqual: areArraysEqual$1,
      areMapsEqual: areMapsEqual$1,
      areObjectsEqual: areObjectsEqual$1,
      areSetsEqual: areSetsEqual$1
    });
  }
  return config;
}
function createInternalEqualityComparator(compare) {
  return function(a, b, _indexOrKeyA, _indexOrKeyB, _parentA, _parentB, state) {
    return compare(a, b, state);
  };
}
function createIsEqual(_a) {
  var circular = _a.circular, comparator = _a.comparator, createState = _a.createState, equals = _a.equals, strict = _a.strict;
  if (createState) {
    return function isEqual(a, b) {
      var _a2 = createState(), _b = _a2.cache, cache2 = _b === void 0 ? circular ? /* @__PURE__ */ new WeakMap() : void 0 : _b, meta = _a2.meta;
      return comparator(a, b, {
        cache: cache2,
        equals,
        meta,
        strict
      });
    };
  }
  if (circular) {
    return function isEqual(a, b) {
      return comparator(a, b, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals,
        meta: void 0,
        strict
      });
    };
  }
  var state = {
    cache: void 0,
    equals,
    meta: void 0,
    strict
  };
  return function isEqual(a, b) {
    return comparator(a, b, state);
  };
}
var deepEqual = createCustomEqual();
var strictDeepEqual = createCustomEqual({ strict: true });
var circularDeepEqual = createCustomEqual({ circular: true });
var strictCircularDeepEqual = createCustomEqual({
  circular: true,
  strict: true
});
var shallowEqual = createCustomEqual({
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
var strictShallowEqual = createCustomEqual({
  strict: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
var circularShallowEqual = createCustomEqual({
  circular: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  }
});
var strictCircularShallowEqual = createCustomEqual({
  circular: true,
  createInternalComparator: function() {
    return sameValueZeroEqual;
  },
  strict: true
});
function createCustomEqual(options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.circular, circular = _a === void 0 ? false : _a, createCustomInternalComparator = options.createInternalComparator, createState = options.createState, _b = options.strict, strict = _b === void 0 ? false : _b;
  var config = createEqualityComparatorConfig(options);
  var comparator = createEqualityComparator(config);
  var equals = createCustomInternalComparator ? createCustomInternalComparator(comparator) : createInternalEqualityComparator(comparator);
  return createIsEqual({ circular, comparator, createState, equals, strict });
}

// ../core/lib/get-changed.ts
var getChanged = (newItem, oldItem) => {
  return newItem ? Object.keys(newItem.props || {}).reduce((acc, item) => {
    const newItemProps = (newItem == null ? void 0 : newItem.props) || {};
    const oldItemProps = (oldItem == null ? void 0 : oldItem.props) || {};
    return __spreadProps(__spreadValues({}, acc), {
      [item]: !deepEqual(oldItemProps[item], newItemProps[item])
    });
  }, {}) : {};
};

// ../core/store/slices/permissions.ts
var createPermissionsSlice = (set, get) => {
  const resolvePermissions = (..._0) => __async(void 0, [..._0], function* (params = {}, force) {
    const { state, permissions, config } = get();
    const { cache: cache2, globalPermissions } = permissions;
    const resolveDataForItem = (item2, force2 = false) => __async(void 0, null, function* () {
      var _a, _b, _c;
      const { config: config2, state: appState, setComponentLoading } = get();
      const componentConfig = item2.type === "root" ? config2.root : config2.components[item2.type];
      if (!componentConfig) {
        return;
      }
      const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), componentConfig.permissions);
      if (componentConfig.resolvePermissions) {
        const changed = getChanged(item2, (_a = cache2[item2.props.id]) == null ? void 0 : _a.lastData);
        if (Object.values(changed).some((el) => el === true) || force2) {
          const clearTimeout2 = setComponentLoading(item2.props.id, true, 50);
          const resolvedPermissions = yield componentConfig.resolvePermissions(
            item2,
            {
              changed,
              lastPermissions: ((_b = cache2[item2.props.id]) == null ? void 0 : _b.lastPermissions) || null,
              permissions: initialPermissions,
              appState: makeStatePublic(appState),
              lastData: ((_c = cache2[item2.props.id]) == null ? void 0 : _c.lastData) || null
            }
          );
          const latest = get().permissions;
          set({
            permissions: __spreadProps(__spreadValues({}, latest), {
              cache: __spreadProps(__spreadValues({}, latest.cache), {
                [item2.props.id]: {
                  lastData: item2,
                  lastPermissions: resolvedPermissions
                }
              }),
              resolvedPermissions: __spreadProps(__spreadValues({}, latest.resolvedPermissions), {
                [item2.props.id]: resolvedPermissions
              })
            })
          });
          clearTimeout2();
        }
      }
    });
    const resolveDataForRoot = (force2 = false) => {
      const { state: appState } = get();
      resolveDataForItem(
        // Shim the root data in by conforming to component data shape
        {
          type: "root",
          props: __spreadProps(__spreadValues({}, appState.data.root.props), { id: "root" })
        },
        force2
      );
    };
    const { item, type, root } = params;
    if (item) {
      yield resolveDataForItem(item, force);
    } else if (type) {
      flattenData(state, config).filter((item2) => item2.type === type).map((item2) => __async(void 0, null, function* () {
        yield resolveDataForItem(item2, force);
      }));
    } else if (root) {
      resolveDataForRoot(force);
    } else {
      flattenData(state, config).map((item2) => __async(void 0, null, function* () {
        yield resolveDataForItem(item2, force);
      }));
    }
  });
  const refreshPermissions = (params) => resolvePermissions(params, true);
  return {
    cache: {},
    globalPermissions: {
      drag: true,
      edit: true,
      delete: true,
      duplicate: true,
      insert: true
    },
    resolvedPermissions: {},
    getPermissions: ({ item, type, root } = {}) => {
      const { config, permissions } = get();
      const { globalPermissions, resolvedPermissions } = permissions;
      if (item) {
        const componentConfig = config.components[item.type];
        const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
        const resolvedForItem = resolvedPermissions[item.props.id];
        return resolvedForItem ? __spreadValues(__spreadValues({}, globalPermissions), resolvedForItem) : initialPermissions;
      } else if (type) {
        const componentConfig = config.components[type];
        return __spreadValues(__spreadValues({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
      } else if (root) {
        const rootConfig = config.root;
        const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), rootConfig == null ? void 0 : rootConfig.permissions);
        const resolvedForItem = resolvedPermissions["root"];
        return resolvedForItem ? __spreadValues(__spreadValues({}, globalPermissions), resolvedForItem) : initialPermissions;
      }
      return globalPermissions;
    },
    resolvePermissions,
    refreshPermissions
  };
};

// ../core/store/slices/fields.ts
init_react_import();
var import_react8 = require("react");
var createFieldsSlice = (_set, _get) => {
  return {
    fields: {},
    loading: false,
    lastResolvedData: {},
    id: void 0
  };
};

// ../core/lib/resolve-component-data.ts
init_react_import();
var cache = { lastChange: {} };
var resolveComponentData = (_0, _1, ..._2) => __async(void 0, [_0, _1, ..._2], function* (item, config, metadata = {}, onResolveStart, onResolveEnd, trigger = "replace") {
  const configForItem = "type" in item && item.type !== "root" ? config.components[item.type] : config.root;
  const resolvedItem = __spreadValues({}, item);
  const shouldRunResolver = (configForItem == null ? void 0 : configForItem.resolveData) && item.props;
  const id = "id" in item.props ? item.props.id : "root";
  if (shouldRunResolver) {
    const { item: oldItem = null, resolved = {} } = cache.lastChange[id] || {};
    if (trigger !== "force" && item && deepEqual(item, oldItem)) {
      return { node: resolved, didChange: false };
    }
    const changed = getChanged(item, oldItem);
    if (onResolveStart) {
      onResolveStart(item);
    }
    const { props: resolvedProps, readOnly = {} } = yield configForItem.resolveData(item, {
      changed,
      lastData: oldItem,
      metadata: __spreadValues(__spreadValues({}, metadata), configForItem.metadata),
      trigger
    });
    resolvedItem.props = __spreadValues(__spreadValues({}, item.props), resolvedProps);
    if (Object.keys(readOnly).length) {
      resolvedItem.readOnly = readOnly;
    }
  }
  let itemWithResolvedChildren = yield mapFields(
    resolvedItem,
    {
      slot: (_02) => __async(void 0, [_02], function* ({ value }) {
        const content = value;
        return yield Promise.all(
          content.map(
            (childItem) => __async(void 0, null, function* () {
              return (yield resolveComponentData(
                childItem,
                config,
                metadata,
                onResolveStart,
                onResolveEnd,
                trigger
              )).node;
            })
          )
        );
      })
    },
    config
  );
  if (shouldRunResolver && onResolveEnd) {
    onResolveEnd(resolvedItem);
  }
  cache.lastChange[id] = {
    item,
    resolved: itemWithResolvedChildren
  };
  return {
    node: itemWithResolvedChildren,
    didChange: !deepEqual(item, itemWithResolvedChildren)
  };
});

// ../core/lib/data/to-root.ts
init_react_import();
var toRoot = (item) => {
  if ("type" in item && item.type !== "root") {
    throw new Error("Converting non-root item to root.");
  }
  const { readOnly } = item;
  if (item.props) {
    if ("id" in item.props) {
      const _a = item.props, { id } = _a, props = __objRest(_a, ["id"]);
      return { props, readOnly };
    }
    return { props: item.props, readOnly };
  }
  return { props: {}, readOnly };
};

// ../core/store/default-app-state.ts
init_react_import();
var defaultAppState = {
  data: { content: [], root: {}, zones: {} },
  ui: {
    leftSideBarVisible: true,
    rightSideBarVisible: true,
    arrayState: {},
    itemSelector: null,
    componentList: {},
    isDragging: false,
    previewMode: "edit",
    viewports: {
      current: {
        width: defaultViewports[0].width,
        height: defaultViewports[0].height || "auto"
      },
      options: [],
      controlsVisible: true
    },
    field: { focus: null }
  },
  indexes: {
    nodes: {},
    zones: {}
  }
};

// ../core/store/index.ts
var defaultPageFields = {
  title: { type: "text" }
};
var createAppStore = (initialAppStore) => create()(
  subscribeWithSelector((set, get) => {
    var _a, _b;
    return __spreadProps(__spreadValues({
      state: defaultAppState,
      config: { components: {} },
      componentState: {},
      plugins: [],
      overrides: {},
      viewports: defaultViewports,
      zoomConfig: {
        autoZoom: 1,
        rootHeight: 0,
        zoom: 1
      },
      status: "LOADING",
      iframe: {},
      metadata: {},
      fieldTransforms: {}
    }, initialAppStore), {
      fields: createFieldsSlice(set, get),
      history: createHistorySlice(set, get),
      nodes: createNodesSlice(set, get),
      permissions: createPermissionsSlice(set, get),
      getComponentConfig: (type) => {
        var _a2;
        const { config, selectedItem } = get();
        const rootFields = ((_a2 = config.root) == null ? void 0 : _a2.fields) || defaultPageFields;
        return type && type !== "root" ? config.components[type] : selectedItem ? config.components[selectedItem.type] : __spreadProps(__spreadValues({}, config.root), { fields: rootFields });
      },
      selectedItem: ((_a = initialAppStore == null ? void 0 : initialAppStore.state) == null ? void 0 : _a.ui.itemSelector) ? getItem(
        (_b = initialAppStore == null ? void 0 : initialAppStore.state) == null ? void 0 : _b.ui.itemSelector,
        initialAppStore.state
      ) : null,
      dispatch: (action) => set((s) => {
        var _a2, _b2;
        const { record } = get().history;
        const dispatch = createReducer({
          record,
          appStore: s
        });
        const state = dispatch(s.state, action);
        const selectedItem = state.ui.itemSelector ? getItem(state.ui.itemSelector, state) : null;
        (_b2 = (_a2 = get()).onAction) == null ? void 0 : _b2.call(_a2, action, state, get().state);
        return __spreadProps(__spreadValues({}, s), { state, selectedItem });
      }),
      setZoomConfig: (zoomConfig) => set({ zoomConfig }),
      setStatus: (status) => set({ status }),
      setComponentState: (componentState) => set({ componentState }),
      pendingLoadTimeouts: {},
      setComponentLoading: (id, loading = true, defer = 0) => {
        const { setComponentState, pendingLoadTimeouts } = get();
        const loadId = generateId();
        const setLoading = () => {
          var _a2;
          const { componentState } = get();
          setComponentState(__spreadProps(__spreadValues({}, componentState), {
            [id]: __spreadProps(__spreadValues({}, componentState[id]), {
              loadingCount: (((_a2 = componentState[id]) == null ? void 0 : _a2.loadingCount) || 0) + 1
            })
          }));
        };
        const unsetLoading = () => {
          var _a2;
          const { componentState } = get();
          clearTimeout(timeout);
          delete pendingLoadTimeouts[loadId];
          set({ pendingLoadTimeouts });
          setComponentState(__spreadProps(__spreadValues({}, componentState), {
            [id]: __spreadProps(__spreadValues({}, componentState[id]), {
              loadingCount: Math.max(
                (((_a2 = componentState[id]) == null ? void 0 : _a2.loadingCount) || 0) - 1,
                0
              )
            })
          }));
        };
        const timeout = setTimeout(() => {
          if (loading) {
            setLoading();
          } else {
            unsetLoading();
          }
          delete pendingLoadTimeouts[loadId];
          set({ pendingLoadTimeouts });
        }, defer);
        set({
          pendingLoadTimeouts: __spreadProps(__spreadValues({}, pendingLoadTimeouts), {
            [id]: timeout
          })
        });
        return unsetLoading;
      },
      unsetComponentLoading: (id) => {
        const { setComponentLoading } = get();
        setComponentLoading(id, false);
      },
      // Helper
      setUi: (ui, recordHistory) => set((s) => {
        const dispatch = createReducer({
          record: () => {
          },
          appStore: s
        });
        const state = dispatch(s.state, {
          type: "setUi",
          ui,
          recordHistory
        });
        const selectedItem = state.ui.itemSelector ? getItem(state.ui.itemSelector, state) : null;
        return __spreadProps(__spreadValues({}, s), { state, selectedItem });
      }),
      resolveComponentData: (componentData, trigger) => __async(void 0, null, function* () {
        const { config, metadata, setComponentLoading, permissions } = get();
        const timeouts = {};
        return yield resolveComponentData(
          componentData,
          config,
          metadata,
          (item) => {
            const id = "id" in item.props ? item.props.id : "root";
            timeouts[id] = setComponentLoading(id, true, 50);
          },
          (item) => __async(void 0, null, function* () {
            const id = "id" in item.props ? item.props.id : "root";
            if ("type" in item) {
              yield permissions.refreshPermissions({ item });
            } else {
              yield permissions.refreshPermissions({ root: true });
            }
            timeouts[id]();
          }),
          trigger
        );
      }),
      resolveAndCommitData: () => __async(void 0, null, function* () {
        const { config, state, dispatch, resolveComponentData: resolveComponentData2 } = get();
        walkAppState(
          state,
          config,
          (content) => content,
          (childItem) => {
            resolveComponentData2(childItem, "load").then((resolved) => {
              const { state: state2 } = get();
              const node = state2.indexes.nodes[resolved.node.props.id];
              if (node && resolved.didChange) {
                if (resolved.node.props.id === "root") {
                  dispatch({
                    type: "replaceRoot",
                    root: toRoot(resolved.node)
                  });
                } else {
                  const zoneCompound = `${node.parentId}:${node.zone}`;
                  const parentZone = state2.indexes.zones[zoneCompound];
                  const index = parentZone.contentIds.indexOf(
                    resolved.node.props.id
                  );
                  dispatch({
                    type: "replace",
                    data: resolved.node,
                    destinationIndex: index,
                    destinationZone: zoneCompound
                  });
                }
              }
            });
            return childItem;
          }
        );
      })
    });
  })
);
var appStoreContext = (0, import_react9.createContext)(createAppStore());
function useAppStore(selector) {
  const context = (0, import_react9.useContext)(appStoreContext);
  return useStore(context, selector);
}
function useAppStoreApi() {
  return (0, import_react9.useContext)(appStoreContext);
}

// ../core/lib/use-breadcrumbs.ts
var useBreadcrumbs = (renderCount) => {
  const selectedId = useAppStore((s) => {
    var _a;
    return (_a = s.selectedItem) == null ? void 0 : _a.props.id;
  });
  const config = useAppStore((s) => s.config);
  const path = useAppStore((s) => {
    var _a;
    return (_a = s.state.indexes.nodes[selectedId]) == null ? void 0 : _a.path;
  });
  const appStore = useAppStoreApi();
  return (0, import_react10.useMemo)(() => {
    const breadcrumbs = (path == null ? void 0 : path.map((zoneCompound) => {
      var _a, _b, _c;
      const [componentId] = zoneCompound.split(":");
      if (componentId === "root") {
        return {
          label: "Page",
          selector: null
        };
      }
      const node = appStore.getState().state.indexes.nodes[componentId];
      const parentId = node.path[node.path.length - 1];
      const contentIds = ((_a = appStore.getState().state.indexes.zones[parentId]) == null ? void 0 : _a.contentIds) || [];
      const index = contentIds.indexOf(componentId);
      const label = node ? (_c = (_b = config.components[node.data.type]) == null ? void 0 : _b.label) != null ? _c : node.data.type : "Component";
      return {
        label,
        selector: node ? {
          index,
          zone: node.path[node.path.length - 1]
        } : null
      };
    })) || [];
    if (renderCount) {
      return breadcrumbs.slice(breadcrumbs.length - renderCount);
    }
    return breadcrumbs;
  }, [path, renderCount]);
};

// ../core/components/Loader/index.tsx
init_react_import();

// ../core/lib/index.ts
init_react_import();

// ../core/lib/filter.ts
init_react_import();

// ../core/lib/data/reorder.ts
init_react_import();

// ../core/lib/data/replace.ts
init_react_import();

// ../core/lib/use-reset-auto-zoom.ts
init_react_import();

// ../core/lib/get-zoom-config.ts
init_react_import();

// css-module:/Users/user/projects/puck/packages/core/components/Loader/styles.module.css#css-module
init_react_import();
var styles_module_default3 = { "Loader": "_Loader_nacdm_13", "loader-animation": "_loader-animation_nacdm_1" };

// ../core/components/Loader/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var getClassName2 = get_class_name_factory_default("Loader", styles_module_default3);
var Loader = (_a) => {
  var _b = _a, {
    color,
    size = 16
  } = _b, props = __objRest(_b, [
    "color",
    "size"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    __spreadValues({
      className: getClassName2(),
      style: {
        width: size,
        height: size,
        color
      },
      "aria-label": "loading"
    }, props)
  );
};

// ../core/components/SidebarSection/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var getClassName3 = get_class_name_factory_default("SidebarSection", styles_module_default);
var SidebarSection = ({
  children,
  title,
  background,
  showBreadcrumbs,
  noBorderTop,
  noPadding,
  isLoading
}) => {
  const setUi = useAppStore((s) => s.setUi);
  const breadcrumbs = useBreadcrumbs(1);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      className: getClassName3({ noBorderTop, noPadding }),
      style: { background },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: getClassName3("title"), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: getClassName3("breadcrumbs"), children: [
          showBreadcrumbs ? breadcrumbs.map((breadcrumb, i) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: getClassName3("breadcrumb"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "button",
              {
                type: "button",
                className: getClassName3("breadcrumbLabel"),
                onClick: () => setUi({ itemSelector: breadcrumb.selector }),
                children: breadcrumb.label
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ChevronRight, { size: 16 })
          ] }, i)) : null,
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: getClassName3("heading"), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Heading, { rank: "2", size: "xs", children: title }) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: getClassName3("content"), children }),
        isLoading && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: getClassName3("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Loader, { size: 32 }) })
      ]
    }
  );
};

// ../core/components/OutlineList/index.tsx
init_react_import();

// css-module:/Users/user/projects/puck/packages/core/components/OutlineList/styles.module.css#css-module
init_react_import();
var styles_module_default4 = { "OutlineList": "_OutlineList_w4lzv_1", "OutlineListItem": "_OutlineListItem_w4lzv_25", "OutlineListItem--clickable": "_OutlineListItem--clickable_w4lzv_45" };

// ../core/components/OutlineList/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var getClassName4 = get_class_name_factory_default("OutlineList", styles_module_default4);
var getClassNameItem = get_class_name_factory_default("OutlineListItem", styles_module_default4);
var OutlineList = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { className: getClassName4(), children });
};
OutlineList.Clickable = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: getClassNameItem({ clickable: true }), children });
OutlineList.Item = ({
  children,
  onClick
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "li",
    {
      className: getClassNameItem({ clickable: !!onClick }),
      onClick,
      children
    }
  );
};

// ../core/lib/scroll-into-view.ts
init_react_import();
var scrollIntoView = (el) => {
  const oldStyle = __spreadValues({}, el.style);
  el.style.scrollMargin = "256px";
  if (el) {
    el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
    el.style.scrollMargin = oldStyle.scrollMargin || "";
  }
};

// ../core/lib/get-frame.ts
init_react_import();
var getFrame = () => {
  if (typeof window === "undefined") return;
  let frameEl = document.querySelector("#preview-frame");
  if ((frameEl == null ? void 0 : frameEl.tagName) === "IFRAME") {
    return frameEl.contentDocument || document;
  }
  return (frameEl == null ? void 0 : frameEl.ownerDocument) || document;
};

// src/HeadingAnalyzer.tsx
var import_react_from_json = __toESM(require("react-from-json"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var getClassName5 = get_class_name_factory_default("HeadingAnalyzer", HeadingAnalyzer_module_default);
var getClassNameItem2 = get_class_name_factory_default("HeadingAnalyzerItem", HeadingAnalyzer_module_default);
var ReactFromJSON = import_react_from_json.default.default || import_react_from_json.default;
var getOutline = ({ frame } = {}) => {
  const headings = (frame == null ? void 0 : frame.querySelectorAll("h1,h2,h3,h4,h5,h6")) || [];
  const _outline = [];
  headings.forEach((item, i) => {
    if (item.closest("[data-dnd-dragging]")) {
      return;
    }
    _outline.push({
      rank: parseInt(item.tagName.split("H")[1]),
      text: item.textContent,
      element: item
    });
  });
  return _outline;
};
function buildHierarchy(frame) {
  var _a, _b;
  const headings = getOutline({ frame });
  const root = { rank: 0, children: [], text: "" };
  let path = [root];
  for (let heading of headings) {
    const node = {
      rank: heading.rank,
      text: heading.text,
      children: [],
      element: heading.element
    };
    if (node.rank === 1) {
      path = [root];
    } else {
      while (path[path.length - 1].rank >= node.rank) {
        path.pop();
      }
      while (path.length < node.rank) {
        const missingNode = {
          rank: path.length,
          missing: true,
          children: [],
          text: ""
        };
        (_a = path[path.length - 1].children) == null ? void 0 : _a.push(missingNode);
        path.push(missingNode);
      }
    }
    (_b = path[path.length - 1].children) == null ? void 0 : _b.push(node);
    path.push(node);
  }
  return root.children;
}
var usePuck = (0, import_puck.createUsePuck)();
var HeadingAnalyzer = () => {
  const data = usePuck((s) => s.appState.data);
  const [hierarchy, setHierarchy] = (0, import_react11.useState)([]);
  (0, import_react11.useEffect)(() => {
    const frame = getFrame();
    let entry = frame == null ? void 0 : frame.querySelector(`[data-puck-entry]`);
    const createHierarchy = () => {
      setHierarchy(buildHierarchy(entry));
    };
    const entryObserver = new MutationObserver(() => {
      createHierarchy();
    });
    const frameObserver = new MutationObserver(() => {
      entry = frame == null ? void 0 : frame.querySelector(`[data-puck-entry]`);
      if (entry) {
        registerEntryObserver();
        frameObserver.disconnect();
      }
    });
    const registerEntryObserver = () => {
      if (!entry) return;
      entryObserver.observe(entry, { subtree: true, childList: true });
    };
    const registerFrameObserver = () => {
      if (!frame) return;
      frameObserver.observe(frame, { subtree: true, childList: true });
    };
    if (entry) {
      createHierarchy();
      registerEntryObserver();
    } else {
      registerFrameObserver();
    }
    return () => {
      entryObserver.disconnect();
      frameObserver.disconnect();
    };
  }, [data]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: getClassName5(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "small",
      {
        className: getClassName5("cssWarning"),
        style: {
          color: "var(--puck-color-red-04)",
          display: "block",
          marginBottom: 16
        },
        children: [
          "Heading analyzer styles not loaded. Please review the",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: "https://github.com/measuredco/puck/blob/main/packages/plugin-heading-analyzer/README.md", children: "README" }),
          "."
        ]
      }
    ),
    hierarchy.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: "No headings." }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(OutlineList, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      ReactFromJSON,
      {
        mapping: {
          Root: (props) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: props.children }),
          OutlineListItem: (props) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(OutlineList.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(OutlineList.Clickable, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "small",
              {
                className: getClassNameItem2({ missing: props.missing }),
                onClick: typeof props.element == "undefined" ? void 0 : (e) => {
                  e.stopPropagation();
                  const el = props.element;
                  const oldStyle = __spreadValues({}, el.style);
                  if (el) {
                    scrollIntoView(el);
                    el.style.outline = "4px solid var(--puck-color-rose-06)";
                    el.style.outlineOffset = "4px";
                    setTimeout(() => {
                      el.style.outline = oldStyle.outline || "";
                      el.style.outlineOffset = oldStyle.outlineOffset || "";
                    }, 2e3);
                  }
                },
                children: props.missing ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("b", { children: [
                    "H",
                    props.rank
                  ] }),
                  ": Missing"
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("b", { children: [
                    "H",
                    props.rank
                  ] }),
                  ": ",
                  props.text
                ] })
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(OutlineList, { children: props.children })
          ] })
        },
        entry: {
          props: { children: hierarchy },
          type: "Root"
        },
        mapProp: (prop) => {
          if (prop && prop.rank) {
            return {
              type: "OutlineListItem",
              props: prop
            };
          }
          return prop;
        }
      }
    ) })
  ] });
};
var headingAnalyzer = {
  overrides: {
    fields: ({ children, itemSelector }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { display: itemSelector ? "none" : "block" }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SidebarSection, { title: "Heading Outline", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(HeadingAnalyzer, {}) }) })
    ] })
  }
};
var HeadingAnalyzer_default = headingAnalyzer;
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
