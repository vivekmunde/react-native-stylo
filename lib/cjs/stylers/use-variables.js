"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var theme_context_1 = __importDefault(require("../theme-context"));
function useVariables(names) {
    var _a;
    var themeContext = (0, react_1.useContext)(theme_context_1.default);
    var themeVariables = (_a = themeContext.variables) !== null && _a !== void 0 ? _a : {};
    var namesJoined = names.join('');
    var variables = (0, react_1.useMemo)(function () { return names.map(function (name) { return themeVariables[name]; }); }, [themeVariables, namesJoined]);
    return variables;
}
exports.default = useVariables;
//# sourceMappingURL=use-variables.js.map