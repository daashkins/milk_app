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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ProductsContext = void 0;
var React = require("react");
// import { v4 as uuidv4 } from 'uuid'
var react_1 = require("react");
var axios_1 = require("axios");
var react_router_dom_1 = require("react-router-dom");
exports.ProductsContext = react_1.createContext(null);
var ProductsProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState([]), products = _b[0], setProducts = _b[1];
    var _c = react_1.useState([]), cart = _c[0], setCart = _c[1];
    var navigate = react_router_dom_1.useNavigate();
    react_1.useEffect(function () {
        axios_1["default"].get('http://localhost:8080/api/products').then(function (response) {
            setProducts(__spreadArrays(response.data));
        });
    }, []);
    react_1.useEffect(function () {
        var existingCart = window.localStorage.getItem('cart');
        if (existingCart) {
            var productsInExistCart = JSON.parse(existingCart);
            setCart(__spreadArrays(productsInExistCart));
        }
        else {
            window.localStorage.setItem('cart', '[]');
        }
    }, []);
    react_1.useEffect(function () {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    var addToCart = function (product, quantity) {
        var currentProducts = __spreadArrays(cart);
        var index = currentProducts.findIndex(function (productInCart) { return productInCart.id === product.id; });
        if (index >= 0) {
            currentProducts[index].quantity =
                currentProducts[index].quantity + quantity;
            setCart(__spreadArrays(currentProducts));
        }
        else {
            var newItemInCart = {
                id: product.id,
                name: product.name,
                type: product.type,
                quantity: quantity,
                price: product.price
            };
            setCart(__spreadArrays(cart, [newItemInCart]));
        }
    };
    var submitCart = function (cart) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                // await axios.post(`http://localhost:8080/api/cart`, {...cart})
                setTimeout(function () { return navigate('/'); }, 1000);
            }
            catch (err) {
                console.error(err);
                setTimeout(function () { return navigate('/'); }, 1000);
            }
            window.localStorage.setItem('cart', '[]');
            return [2 /*return*/];
        });
    }); };
    return (React.createElement(exports.ProductsContext.Provider, { value: { products: products, cart: cart, addToCart: addToCart, submitCart: submitCart } }, children));
};
exports["default"] = ProductsProvider;
