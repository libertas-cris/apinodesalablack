"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/phoneConverter.ts
var phoneConverter_exports = {};
__export(phoneConverter_exports, {
  phoneConverter: () => phoneConverter
});
module.exports = __toCommonJS(phoneConverter_exports);
function phoneConverter(number) {
  number = number.toString().replace(/[^\d]/g, "");
  let ddi = "55";
  let ddd = parseInt(number.substring(0, 2));
  if (number.length == 13) {
    let ddi2 = number.substring(0, 2);
    let ddd2 = parseInt(number.substring(2, 4));
    return ddi2 + ddd2 + (ddd2 <= 28 ? number.substring(4, 13) : number.substring(5, 13));
  } else if (number.length == 11) {
    return ddi + ddd + (ddd <= 28 ? number.substring(2, 11) : number.substring(3, 11));
  } else if (number.length == 10) {
    return ddi + ddd + (ddd <= 28 ? "9" : "") + number.substring(2, 11);
  } else if (number.length == 12) {
    return number.substring(0, 2) == "55" ? number : number.substring(0, 1) == "0" ? phoneConverter(number.substring(1, 12)) : number;
  } else {
    return number;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  phoneConverter
});
