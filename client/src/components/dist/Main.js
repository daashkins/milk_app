"use strict";
exports.__esModule = true;
var React = require("react");
var Card_1 = require("./Card");
var bi_1 = require("react-icons/bi");
var react_1 = require("react");
var productsContext_1 = require("../context/productsContext");
var bs_1 = require("react-icons/bs");
var BackButton_1 = require("./BackButton");
var Main = function () {
    var productsTypes = [
        'Whole milk',
        'Rice milk',
        'Coconut milk',
        'Macadamia milk',
        'Hemp milk',
        'Cashew milk',
        'Almond milk',
        'Soy milk',
        'Oat milk',
        'Walnut milk',
        'Pea milk',
    ];
    var products = react_1.useContext(productsContext_1.ProductsContext).products;
    var _a = react_1.useState(1), currentPage = _a[0], setCurrentPage = _a[1];
    var productsPerPage = react_1.useState(9)[0];
    var _b = react_1.useState('All'), filter = _b[0], setFilter = _b[1];
    var _c = react_1.useState(''), search = _c[0], setSearch = _c[1];
    var _d = react_1.useState(''), searchValue = _d[0], setSearchValue = _d[1];
    var lastPage = products.length / 9;
    var currentProducts = [];
    var indexOfLastProduct = currentPage * productsPerPage;
    var indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    var totalProductsToShow = products.length;
    var getCurrentProducts = function () {
        if (filter !== 'All') {
            var filteredProducts = products.filter(function (product) { return product.type === filter; });
            lastPage =
                filteredProducts.length > 9
                    ? Math.ceil(filteredProducts.length / 9)
                    : 1;
            totalProductsToShow = filteredProducts.length;
            currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
            return;
        }
        else if (search !== '') {
            var searchedProducts = products.filter(function (product) {
                return product.name.includes(search);
            });
            lastPage =
                searchedProducts.length > 9
                    ? Math.ceil(searchedProducts.length / 9)
                    : 1;
            totalProductsToShow = searchedProducts.length;
            currentProducts = searchedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
            return;
        }
        else {
            currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
            return;
        }
    };
    getCurrentProducts();
    var handleLastPage = function () {
        setCurrentPage(lastPage);
    };
    var paginateForward = function () {
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
        }
    };
    var paginateBackward = function () {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    var handleSearchChange = function (event) {
        setSearchValue(event.target.value);
    };
    var handleSearchSubmit = function (event) {
        event.preventDefault();
        setSearch(searchValue);
        setSearchValue('');
    };
    var handleFilter = function (event) {
        event.preventDefault();
        setFilter(event.target.value);
    };
    return (React.createElement("div", { className: "container mx-auto", key: "" + Math.random() * 10 },
        React.createElement("div", { className: "flex justify-between mt-24", key: "" + Math.random() * 10 },
            React.createElement("form", { className: "w-96 relative", key: "form", onSubmit: handleSearchSubmit },
                React.createElement(bi_1.BiSearch, { className: "absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" }),
                React.createElement("input", { key: "search", type: "text", autoFocus: true, placeholder: "Search", value: searchValue, className: "w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 ", onChange: handleSearchChange })),
            React.createElement("select", { id: "underline_select", className: "block py-2.5 px-0 w-80 text-lg font-normal text-gray-500 bg-transparent border-0 border-none border-transparent appearance-none focus:outline-none focus:outline-none focus:ring-0 focus:border-gray-200 peer", onChange: handleFilter },
                React.createElement("option", { key: "1" }, "Filter"),
                productsTypes.map(function (item, index) {
                    return (React.createElement("option", { key: "key" + index, value: "" + item }, item));
                }))),
        React.createElement("div", { className: "mt-10 mb-10", key: "" + Math.random() * 10 },
            React.createElement("h6", { className: "font-medium leading-tight text-base mt-0 mb-2 text-stone-900" },
                totalProductsToShow,
                " products")),
        totalProductsToShow === 0 && React.createElement(BackButton_1["default"], null),
        React.createElement("div", { className: "mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8", key: "" + Math.random() * 10 }, currentProducts.map(function (product) {
            return (React.createElement("div", { className: "group relative", key: "" + Math.random() * 10 },
                React.createElement(Card_1["default"], { product: product, key: product.id })));
        })),
        React.createElement("div", { className: "flex items-center justify-center border-t border-gray-200 bg-transparent mt-7 mb-7", key: "" + Math.random() * 10 },
            React.createElement("nav", { className: "isolate inline-flex -space-x-px rounded-md shadow-sm", "aria-label": "Pagination" },
                React.createElement("p", { className: "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20", onClick: paginateBackward },
                    React.createElement("span", { className: "sr-only" }, "Previous"),
                    React.createElement(bs_1.BsChevronLeft, { className: "h-5 w-5", "aria-hidden": "true" })),
                React.createElement("p", { "aria-current": "page", className: "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" }, currentPage),
                React.createElement("span", { className: "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700" }, "of"),
                React.createElement("p", { onClick: handleLastPage, className: "relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex" }, lastPage),
                React.createElement("p", { className: "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20", onClick: paginateForward },
                    React.createElement("span", { className: "sr-only" }, "Next"),
                    React.createElement(bs_1.BsChevronRight, { className: "h-5 w-5", "aria-hidden": "true" }))))));
};
exports["default"] = Main;
