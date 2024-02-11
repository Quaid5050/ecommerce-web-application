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
var product_details_1 = require("@/components/product/product-details");
function Page() {
    return __awaiter(this, void 0, void 0, function () {
        var res, products;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('http://localhost:8000/api/products', {
                        next: {
                            //secounds 30
                            revalidate: 30
                        }
                    })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    products = _a.sent();
                    return [2 /*return*/, (react_1["default"].createElement("div", null,
                            react_1["default"].createElement("div", { className: "section imgBanners pt-4" },
                                react_1["default"].createElement("div", { className: "imgBnrOuter" },
                                    react_1["default"].createElement("div", { className: "container-fluid" },
                                        react_1["default"].createElement("div", { className: "row" },
                                            react_1["default"].createElement("div", { className: "col-12 col-sm-12 col-md-6 col-lg-6" },
                                                react_1["default"].createElement("div", { className: "inner" },
                                                    react_1["default"].createElement("div", { className: "inner btmleft" },
                                                        react_1["default"].createElement("a", { href: "#" },
                                                            react_1["default"].createElement("img", { className: "blur-up lazyload", "data-src": "/assets/images/collection/home10-sm-banner1.jpg", src: "/assets/images/collection/home10-sm-banner1.jpg", alt: "Festive Treasures", title: "Festive Treasures" }),
                                                            react_1["default"].createElement("div", { className: "ttl" },
                                                                "Festive Treasures ",
                                                                react_1["default"].createElement("h4", null, "Embroidered Apparel")))))),
                                            react_1["default"].createElement("div", { className: "col-12 col-sm-12 col-md-3 col-lg-3" },
                                                react_1["default"].createElement("div", { className: "inner center" },
                                                    react_1["default"].createElement("a", { href: "#" },
                                                        react_1["default"].createElement("img", { className: "blur-up lazyload", "data-src": "/assets/images/collection/home10-sm-banner2.jpg", src: "/assets/images/collection/home10-sm-banner2.jpg", alt: "Keep it Simple", title: "Keep it Simple" }),
                                                        react_1["default"].createElement("div", { className: "ttl" },
                                                            "Keep it Simple ",
                                                            react_1["default"].createElement("h4", null, "Denim Jeans"))))),
                                            react_1["default"].createElement("div", { className: "col-12 col-sm-12 col-md-3 col-lg-3" },
                                                react_1["default"].createElement("div", { className: "inner btmright mb-4" },
                                                    react_1["default"].createElement("a", { href: "#" },
                                                        react_1["default"].createElement("img", { className: "blur-up lazyload", "data-src": "/assets/images/collection/home10-sm-banner3.jpg", src: "/assets/images/collection/home10-sm-banner3.jpg", alt: "Carry in Style", title: "Carry in Style" }),
                                                        react_1["default"].createElement("div", { className: "ttl" },
                                                            "Carry in Style ",
                                                            react_1["default"].createElement("h4", null, "Purse")))),
                                                react_1["default"].createElement("div", { className: "inner topleft" },
                                                    react_1["default"].createElement("a", { href: "#" },
                                                        react_1["default"].createElement("img", { className: "blur-up lazyload", "data-src": "/assets/images/collection/home10-sm-banner4.jpg", src: "/assets/images/collection/home10-sm-banner4.jpg", alt: "The Sophisticated ", title: "The Sophisticated" }),
                                                        react_1["default"].createElement("div", { className: "ttl" },
                                                            "The Sophisticated ",
                                                            react_1["default"].createElement("h4", null, "Denim Jeans"))))))))),
                            react_1["default"].createElement("div", { className: "product-rows section" },
                                react_1["default"].createElement("div", { className: "container-fluid" },
                                    react_1["default"].createElement("div", { className: "row" },
                                        react_1["default"].createElement("div", { className: "col-12 col-sm-12 col-md-12 col-lg-12" },
                                            react_1["default"].createElement("div", { className: "section-header text-center" },
                                                react_1["default"].createElement("h2", { className: "h2" }, "Best seller of the week")))),
                                    react_1["default"].createElement("div", { className: "grid-products" },
                                        react_1["default"].createElement("div", { className: "row" }, products && products.map(function (product) { return (react_1["default"].createElement(product_details_1["default"], { key: product.id, product: product })); }))),
                                    react_1["default"].createElement("div", { className: "clear text-center" },
                                        react_1["default"].createElement("a", { href: "#", className: "btn" }, "View all")))),
                            react_1["default"].createElement("div", { className: "section store-information" },
                                react_1["default"].createElement("div", { className: "container-fluid" },
                                    react_1["default"].createElement("div", { className: "row" },
                                        react_1["default"].createElement("ul", { className: "display-table store-info" },
                                            react_1["default"].createElement("li", { className: "display-table-cell" },
                                                " ",
                                                react_1["default"].createElement("i", { className: "icon anm anm-truck-l", "aria-hidden": "true" }),
                                                react_1["default"].createElement("h5", null, "Free Shipping Worldwide"),
                                                react_1["default"].createElement("span", { className: "sub-text" }, "Diam augue augue in fusce voluptatem")),
                                            react_1["default"].createElement("li", { className: "display-table-cell" },
                                                " ",
                                                react_1["default"].createElement("i", { className: "icon anm anm-money-bill-ar", "aria-hidden": "true" }),
                                                react_1["default"].createElement("h5", null, "Money Back Guarantee"),
                                                react_1["default"].createElement("span", { className: "sub-text" }, "Use this text to display your store information"),
                                                " "),
                                            react_1["default"].createElement("li", { className: "display-table-cell" },
                                                " ",
                                                react_1["default"].createElement("i", { className: "icon anm anm-comments-l", "aria-hidden": "true" }),
                                                react_1["default"].createElement("h5", null, "24/7 Help Center"),
                                                react_1["default"].createElement("span", { className: "sub-text" }, "Use this text to display your store information"),
                                                " "),
                                            react_1["default"].createElement("li", { className: "display-table-cell" },
                                                " ",
                                                react_1["default"].createElement("i", { className: "icon anm anm-dollar-sign-l", "aria-hidden": "true" }),
                                                react_1["default"].createElement("h5", null, "cash on delivery"),
                                                react_1["default"].createElement("span", { className: "sub-text" }, "Use this text to display your store information")))))),
                            react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement("div", { className: "modal fade quick-view-popup", id: "content_quickview" },
                                    react_1["default"].createElement("div", { className: "modal-dialog" },
                                        react_1["default"].createElement("div", { className: "modal-content" },
                                            react_1["default"].createElement("div", { className: "modal-body" },
                                                react_1["default"].createElement("div", { id: "ProductSection-product-template", className: "product-template__container prstyle1" },
                                                    react_1["default"].createElement("div", { className: "product-single" },
                                                        react_1["default"].createElement("a", { "data-dismiss": "modal", className: "model-close-btn pull-right", title: "close" },
                                                            react_1["default"].createElement("span", { className: "icon icon anm anm-times-l" })),
                                                        react_1["default"].createElement("div", { className: "row" },
                                                            react_1["default"].createElement("div", { className: "col-lg-6 col-md-6 col-sm-12 col-12" },
                                                                react_1["default"].createElement("div", { className: "product-details-img" },
                                                                    react_1["default"].createElement("div", { className: "pl-20" },
                                                                        react_1["default"].createElement("img", { src: "/assets/images/product-detail-page/camelia-reversible-big1.jpg", alt: "" })))),
                                                            react_1["default"].createElement("div", { className: "col-lg-6 col-md-6 col-sm-12 col-12" },
                                                                react_1["default"].createElement("div", { className: "product-single__meta" },
                                                                    react_1["default"].createElement("h2", { className: "product-single__title" }, "Product Quick View Popup"),
                                                                    react_1["default"].createElement("div", { className: "prInfoRow" },
                                                                        react_1["default"].createElement("div", { className: "product-stock" },
                                                                            " ",
                                                                            react_1["default"].createElement("span", { className: "instock " }, "In Stock"),
                                                                            " ",
                                                                            react_1["default"].createElement("span", { className: "outstock hide" }, "Unavailable"),
                                                                            " "),
                                                                        react_1["default"].createElement("div", { className: "product-sku" },
                                                                            "SKU: ",
                                                                            react_1["default"].createElement("span", { className: "variant-sku" }, "19115-rdxs"))),
                                                                    react_1["default"].createElement("p", { className: "product-single__price product-single__price-product-template" },
                                                                        react_1["default"].createElement("span", { className: "visually-hidden" }, "Regular price"),
                                                                        react_1["default"].createElement("s", { id: "ComparePrice-product-template" },
                                                                            react_1["default"].createElement("span", { className: "money" }, "$600.00")),
                                                                        react_1["default"].createElement("span", { className: "product-price__price product-price__price-product-template product-price__sale product-price__sale--single" },
                                                                            react_1["default"].createElement("span", { id: "ProductPrice-product-template" },
                                                                                react_1["default"].createElement("span", { className: "money" }, "$500.00")))),
                                                                    react_1["default"].createElement("div", { className: "product-single__description rte" }, "Belle Multipurpose Bootstrap 4 Html Template that will give you and your customers a smooth shopping experience which can be used for various kinds of stores such as fashion,..."),
                                                                    react_1["default"].createElement("form", { method: "post", action: "http://annimexweb.com/cart/add", id: "product_form_10508262282", acceptCharset: "UTF-8", className: "product-form product-form-product-template hidedropdown", encType: "multipart/form-data" },
                                                                        react_1["default"].createElement("div", { className: "swatch clearfix swatch-0 option1", "data-option-index": 0 },
                                                                            react_1["default"].createElement("div", { className: "product-form__item" },
                                                                                react_1["default"].createElement("label", { className: "header" },
                                                                                    "Color: ",
                                                                                    react_1["default"].createElement("span", { className: "slVariant" }, "Red")),
                                                                                react_1["default"].createElement("div", { "data-value": "Red", className: "swatch-element color red available" },
                                                                                    react_1["default"].createElement("input", { className: "swatchInput", id: "swatch-0-red", type: "radio", name: "option-0", defaultValue: "Red" }),
                                                                                    react_1["default"].createElement("label", { className: "swatchLbl color medium rectangle", htmlFor: "swatch-0-red", style: {
                                                                                            backgroundImage: "url(/assets/images/product-detail-page/variant1-1.jpg)"
                                                                                        }, title: "Red" })),
                                                                                react_1["default"].createElement("div", { "data-value": "Blue", className: "swatch-element color blue available" },
                                                                                    react_1["default"].createElement("input", { className: "swatchInput", id: "swatch-0-blue", type: "radio", name: "option-0", defaultValue: "Blue" }),
                                                                                    react_1["default"].createElement("label", { className: "swatchLbl color medium rectangle", htmlFor: "swatch-0-blue", style: {
                                                                                            backgroundImage: "url(/assets/images/product-detail-page/variant1-2.jpg)"
                                                                                        }, title: "Blue" })),
                                                                                react_1["default"].createElement("div", { "data-value": "Green", className: "swatch-element color green available" },
                                                                                    react_1["default"].createElement("input", { className: "swatchInput", id: "swatch-0-green", type: "radio", name: "option-0", defaultValue: "Green" }),
                                                                                    react_1["default"].createElement("label", { className: "swatchLbl color medium rectangle", htmlFor: "swatch-0-green", style: {
                                                                                            backgroundImage: "url(/assets/images/product-detail-page/variant1-3.jpg)"
                                                                                        }, title: "Green" })),
                                                                                react_1["default"].createElement("div", { "data-value": "Gray", className: "swatch-element color gray available" },
                                                                                    react_1["default"].createElement("input", { className: "swatchInput", id: "swatch-0-gray", type: "radio", name: "option-0", defaultValue: "Gray" }),
                                                                                    react_1["default"].createElement("label", { className: "swatchLbl color medium rectangle", htmlFor: "swatch-0-gray", style: {
                                                                                            backgroundImage: "url(/assets/images/product-detail-page/variant1-4.jpg)"
                                                                                        }, title: "Gray" })))),
                                                                        react_1["default"].createElement("div", { className: "swatch clearfix swatch-1 option2", "data-option-index": 1 },
                                                                            react_1["default"].createElement("div", { className: "product-form__item" },
                                                                                react_1["default"].createElement("label", { className: "header" },
                                                                                    "Size: ",
                                                                                    react_1["default"].createElement("span", { className: "slVariant" }, "XS")),
                                                                                react_1["default"].createElement("div", { "data-value": "XS", className: "swatch-element xs available" },
                                                                                    react_1["default"].createElement("input", { className: "swatchInput", id: "swatch-1-xs", type: "radio", name: "option-1", defaultValue: "XS" }),
                                                                                    react_1["default"].createElement("label", { className: "swatchLbl medium rectangle", htmlFor: "swatch-1-xs", title: "XS" }, "XS")),
                                                                                react_1["default"].createElement("div", { "data-value": "S", className: "swatch-element s available" },
                                                                                    react_1["default"].createElement("input", { className: "swatchInput", id: "swatch-1-s", type: "radio", name: "option-1", defaultValue: "S" }),
                                                                                    react_1["default"].createElement("label", { className: "swatchLbl medium rectangle", htmlFor: "swatch-1-s", title: "S" }, "S")),
                                                                                react_1["default"].createElement("div", { "data-value": "M", className: "swatch-element m available" },
                                                                                    react_1["default"].createElement("input", { className: "swatchInput", id: "swatch-1-m", type: "radio", name: "option-1", defaultValue: "M" }),
                                                                                    react_1["default"].createElement("label", { className: "swatchLbl medium rectangle", htmlFor: "swatch-1-m", title: "M" }, "M")),
                                                                                react_1["default"].createElement("div", { "data-value": "L", className: "swatch-element l available" },
                                                                                    react_1["default"].createElement("input", { className: "swatchInput", id: "swatch-1-l", type: "radio", name: "option-1", defaultValue: "L" }),
                                                                                    react_1["default"].createElement("label", { className: "swatchLbl medium rectangle", htmlFor: "swatch-1-l", title: "L" }, "L")))),
                                                                        react_1["default"].createElement("div", { className: "product-action clearfix" },
                                                                            react_1["default"].createElement("div", { className: "product-form__item--quantity" },
                                                                                react_1["default"].createElement("div", { className: "wrapQtyBtn" },
                                                                                    react_1["default"].createElement("div", { className: "qtyField" },
                                                                                        react_1["default"].createElement("a", { className: "qtyBtn minus" },
                                                                                            react_1["default"].createElement("i", { className: "fa anm anm-minus-r", "aria-hidden": "true" })),
                                                                                        react_1["default"].createElement("input", { type: "text", id: "Quantity", name: "quantity", defaultValue: 1, className: "product-form__input qty" }),
                                                                                        react_1["default"].createElement("a", { className: "qtyBtn plus" },
                                                                                            react_1["default"].createElement("i", { className: "fa anm anm-plus-r", "aria-hidden": "true" }))))),
                                                                            react_1["default"].createElement("div", { className: "product-form__item--submit" },
                                                                                react_1["default"].createElement("button", { type: "button", name: "add", className: "btn product-form__cart-submit" },
                                                                                    react_1["default"].createElement("span", null, "Add to cart"))))),
                                                                    react_1["default"].createElement("div", { className: "display-table shareRow" },
                                                                        react_1["default"].createElement("div", { className: "display-table-cell" },
                                                                            react_1["default"].createElement("div", { className: "wishlist-btn" },
                                                                                react_1["default"].createElement("a", { className: "wishlist add-to-wishlist", href: "#", title: "Add to Wishlist" },
                                                                                    react_1["default"].createElement("i", { className: "icon anm anm-heart-l", "aria-hidden": "true" }),
                                                                                    " ",
                                                                                    react_1["default"].createElement("span", null, "Add to Wishlist")))))))))))))))))];
            }
        });
    });
}
exports["default"] = Page;
