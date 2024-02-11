"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Product = function (_a) {
    var product = _a.product;
    return (react_1["default"].createElement("div", { className: "col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2" },
        react_1["default"].createElement("div", { className: "grid-view_image" },
            react_1["default"].createElement("a", { href: "product-layout-1.html", className: "grid-view-item__link" },
                react_1["default"].createElement("img", { className: "grid-view-item__image primary blur-up lazyload", "data-src": "/assets/images/product-images/product-image1.jpg", src: "/assets/images/product-images/product-image1.jpg", alt: "Product Image", title: product.name }),
                react_1["default"].createElement("img", { className: "grid-view-item__image hover blur-up lazyload", "data-src": "/assets/images/product-images/product-image1-1.jpg", src: "/assets/images/product-images/product-image1-1.jpg", alt: "Product Image Hover", title: product.name })),
            react_1["default"].createElement("div", { className: "product-details hoverDetails text-center mobile" },
                react_1["default"].createElement("div", { className: "brand-name" },
                    react_1["default"].createElement("a", { href: "#", title: "Jesse Kamm" }, product.name)),
                react_1["default"].createElement("div", { className: "product-name" },
                    react_1["default"].createElement("a", { href: "product-layout-1.html?id=1" }, product.name),
                    product.description),
                react_1["default"].createElement("div", { className: "product-price" },
                    react_1["default"].createElement("span", { className: "price" },
                        "$",
                        product.price)),
                react_1["default"].createElement("div", { className: "button-set" },
                    react_1["default"].createElement("a", { title: "Quick View", className: "quick-view-popup quick-view", "data-toggle": "modal", "data-target": "#content_quickview" },
                        react_1["default"].createElement("i", { className: "icon anm anm-search-plus-r" })),
                    react_1["default"].createElement("form", { className: "variants add", action: "#", method: "post" },
                        react_1["default"].createElement("button", { className: "btn cartIcon btn-addto-cart", type: "button", tabIndex: 0 },
                            react_1["default"].createElement("i", { className: "icon anm anm-bag-l" }))),
                    react_1["default"].createElement("div", { className: "wishlist-btn" },
                        react_1["default"].createElement("a", { className: "wishlist add-to-wishlist", href: "wishlist.html" },
                            react_1["default"].createElement("i", { className: "icon anm anm-heart-l" }))),
                    react_1["default"].createElement("div", { className: "compare-btn" },
                        react_1["default"].createElement("a", { className: "compare add-to-compare", href: "compare.html", title: "Add to Compare" },
                            react_1["default"].createElement("i", { className: "icon anm anm-random-r" }))))))));
};
exports["default"] = Product;
