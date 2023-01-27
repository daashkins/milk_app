"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var productsContext_1 = require("../context/productsContext");
var BackButton_1 = require("./BackButton");
var CardSmall_1 = require("./CardSmall");
var Cart = function () {
    var cart = react_1.useContext(productsContext_1.ProductsContext).cart;
    var submitCart = react_1.useContext(productsContext_1.ProductsContext).submitCart;
    var handleBuy = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, submitCart(cart)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var subTotal = (cart.reduce(function (sum, _a) {
        var price = _a.price, quantity = _a.quantity;
        return sum + price * quantity;
    }, 0).toFixed(2));
    var total = (Number(subTotal) + 3.65).toFixed(2);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "container mx-auto ", key: "" + Math.random() * 10 },
            react_1["default"].createElement(BackButton_1["default"], null),
            react_1["default"].createElement("div", { className: "flex md:flex-row flex-col justify-center", id: "cart" },
                react_1["default"].createElement("div", { className: "lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen align-center", id: "scroll" },
                    react_1["default"].createElement("p", { className: "text-4xl font-black leading-9 text-gray-800" }, "Shopping Cart"),
                    cart.map(function (productInCart) {
                        return (react_1["default"].createElement(CardSmall_1["default"], { product: productInCart, key: "productCart" + productInCart.id }));
                    })),
                react_1["default"].createElement("div", { className: "xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full" },
                    react_1["default"].createElement("div", { className: "flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("p", { className: "text-4xl font-black leading-9 text-gray-800" }, "Summary"),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between pt-16" },
                                react_1["default"].createElement("p", { className: "text-base leading-none text-gray-800" }, "Subtotal"),
                                react_1["default"].createElement("p", { className: "text-base leading-none text-gray-800" },
                                    "$",
                                    subTotal)),
                            react_1["default"].createElement("div", { className: "flex items-center justify-between pt-5" },
                                react_1["default"].createElement("p", { className: "text-base leading-none text-gray-800" }, "Shipping"),
                                react_1["default"].createElement("p", { className: "text-base leading-none text-gray-800" }, "$3.65")),
                            react_1["default"].createElement("div", { className: "flex items-center pb-6 justify-between lg:pt-5 pt-20" },
                                react_1["default"].createElement("p", { className: "text-2xl leading-normal text-gray-800" }, "Total"),
                                react_1["default"].createElement("p", { className: "text-2xl font-bold leading-normal text-right text-gray-800" },
                                    "$",
                                    total))),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("div", { className: "flex items-center pb-6 justify-center lg:pt-5 pt-20" },
                                react_1["default"].createElement("button", { className: "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded w-36", onClick: handleBuy },
                                    react_1["default"].createElement("span", null, "Buy"))))))))));
};
exports["default"] = Cart;
