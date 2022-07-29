"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var theme_context_1 = __importDefault(require("./theme-context"));
var ThemeProvider = function (_a) {
    var variables = _a.variables, styles = _a.styles, children = _a.children;
    var hasMounted = (0, react_1.useRef)(false);
    var _b = (0, react_1.useState)({ variables: variables, styles: styles }), contextValue = _b[0], setContextValue = _b[1];
    (0, react_1.useEffect)(function () {
        if (hasMounted.current) {
            setContextValue({ variables: variables, styles: styles });
        }
        else {
            hasMounted.current = true;
        }
    }, [variables, styles]);
    return (<theme_context_1.default.Provider value={contextValue}>
      {children}
    </theme_context_1.default.Provider>);
};
exports.default = ThemeProvider;
//# sourceMappingURL=theme-provider.js.map