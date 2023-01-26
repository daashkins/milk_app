'use strict'
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i]
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p]
                }
                return t
            }
        return __assign.apply(this, arguments)
    }
var __spreadArrays =
    (this && this.__spreadArrays) ||
    function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j]
        return r
    }
exports.__esModule = true
exports.ProductsContext = void 0
var React = require('react')
var react_1 = require('react')
var axios_1 = require('axios')
exports.ProductsContext = react_1.createContext(null)
var ProductsProvider = function (_a) {
    var children = _a.children
    var _b = react_1.useState([]),
        products = _b[0],
        setProducts = _b[1]
    var _c = react_1.useState([]),
        cart = _c[0],
        setCart = _c[1]
    react_1.useEffect(function () {
        axios_1['default']
            .get('http://localhost:8000/api/products')
            .then(function (response) {
                console.log(response.data)
                setProducts(__spreadArrays(response.data))
            })
    }, [])
    react_1.useEffect(
        function () {
            // if(window.localStorage.getItem("cart") !== null){
            //     const existingCart = JSON.parse(window.localStorage.getItem("cart"))
            // }
            window.localStorage.setItem('cart', JSON.stringify(cart))
        },
        [cart]
    )
    var addToCart = function (product, quantity) {
        var currentProducts = __spreadArrays(cart.products)
        var index = currentProducts.findIndex(function (productInCart) {
            return productInCart.id === product.id
        })
        if (index >= 0) {
            currentProducts[index].quantity =
                currentProducts[index].quantity + quantity
            setCart(
                __assign(__assign({}, cart), {
                    products: __spreadArrays(currentProducts),
                })
            )
        } else {
            var newItemInCart = {
                id: product.id,
                name: product.name,
                type: product.type,
                quantity: quantity,
                price: product.price,
            }
            setCart(
                __assign(__assign({}, cart), {
                    products: __spreadArrays(cart.products, [newItemInCart]),
                })
            )
        }
    }
    console.log(cart)
    return React.createElement(
        exports.ProductsContext.Provider,
        { value: { products: products, cart: cart, addToCart: addToCart } },
        children
    )
}
exports['default'] = ProductsProvider
