import React from "react";
export default function Home() {
  return (
      <div>
          {/*Small Banners*/}
          <div className="section imgBanners pt-4">
              <div className="imgBnrOuter">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                              <div className="inner">
                                  <div className="inner btmleft">
                                      <a href="#">
                                          <img
                                              className="blur-up lazyload"
                                              data-src="assets/images/collection/home10-sm-banner1.jpg"
                                              src="assets/images/collection/home10-sm-banner1.jpg"
                                              alt="Festive Treasures"
                                              title="Festive Treasures"
                                          />
                                          <div className="ttl">
                                              Festive Treasures <h4>Embroidered Apparel</h4>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                              <div className="inner center">
                                  <a href="#">
                                      <img
                                          className="blur-up lazyload"
                                          data-src="assets/images/collection/home10-sm-banner2.jpg"
                                          src="assets/images/collection/home10-sm-banner2.jpg"
                                          alt="Keep it Simple"
                                          title="Keep it Simple"
                                      />
                                      <div className="ttl">
                                          Keep it Simple <h4>Denim Jeans</h4>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                              <div className="inner btmright mb-4">
                                  <a href="#">
                                      <img
                                          className="blur-up lazyload"
                                          data-src="assets/images/collection/home10-sm-banner3.jpg"
                                          src="assets/images/collection/home10-sm-banner3.jpg"
                                          alt="Carry in Style"
                                          title="Carry in Style"
                                      />
                                      <div className="ttl">
                                          Carry in Style <h4>Purse</h4>
                                      </div>
                                  </a>
                              </div>
                              <div className="inner topleft">
                                  <a href="#">
                                      <img
                                          className="blur-up lazyload"
                                          data-src="assets/images/collection/home10-sm-banner4.jpg"
                                          src="assets/images/collection/home10-sm-banner4.jpg"
                                          alt="The Sophisticated "
                                          title="The Sophisticated"
                                      />
                                      <div className="ttl">
                                          The Sophisticated <h4>Denim Jeans</h4>
                                      </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*End Small Banners*/}
          {/*Best seller of the week*/}
          <div className="product-rows section">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="section-header text-center">
                              <h2 className="h2">Best seller of the week</h2>
                          </div>
                      </div>
                  </div>
                  <div className="grid-products">
                      <div className="row">
                          <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                              <div className="grid-view_image">
                                  {/* start product image */}
                                  <a href="product-layout-1.html" className="grid-view-item__link">
                                      {/* image */}
                                      <img
                                          className="grid-view-item__image primary blur-up lazyload"
                                          data-src="assets/images/product-images/product-image1.jpg"
                                          src="assets/images/product-images/product-image1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End image */}
                                      {/* Hover image */}
                                      <img
                                          className="grid-view-item__image hover blur-up lazyload"
                                          data-src="assets/images/product-images/product-image1-1.jpg"
                                          src="assets/images/product-images/product-image1-1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End hover image */}
                                      {/* product label */}
                                      <div className="product-labels rectangular">
                                          <span className="lbl on-sale">-16%</span>{" "}
                                          <span className="lbl pr-label1">new</span>
                                      </div>
                                      {/* End product label */}
                                  </a>
                                  {/* end product image */}
                                  {/*start product details */}
                                  <div className="product-details hoverDetails text-center mobile">
                                      {/*Vendor/Brand*/}
                                      <div className="brand-name">
                                          <a href="#" title="Belle">
                                              Belle
                                          </a>
                                      </div>
                                      {/*End Vendor/Brand*/}
                                      {/* product name */}
                                      <div className="product-name">
                                          <a href="product-layout-1.html">Edna Dress</a>
                                      </div>
                                      {/* End product name */}
                                      {/* product price */}
                                      <div className="product-price">
                                          <span className="old-price">$500.00</span>
                                          <span className="price">$600.00</span>
                                      </div>
                                      {/* End product price */}
                                      {/* product button */}
                                      <div className="button-set">
                                          <a
                                              href="javascript:void(0)"
                                              title="Quick View"
                                              className="quick-view-popup quick-view"
                                              data-toggle="modal"
                                              data-target="#content_quickview"
                                          >
                                              <i className="icon anm anm-search-plus-r" />
                                          </a>
                                          {/* Start product button */}
                                          <form
                                              className="variants add"
                                              action="#"
                                              onClick="window.location.href='cart.html'"
                                              method="post"
                                          >
                                              <button
                                                  className="btn cartIcon btn-addto-cart"
                                                  type="button"
                                                  tabIndex={0}
                                              >
                                                  <i className="icon anm anm-bag-l" />
                                              </button>
                                          </form>
                                          <div className="wishlist-btn">
                                              <a
                                                  className="wishlist add-to-wishlist"
                                                  href="wishlist.html"
                                              >
                                                  <i className="icon anm anm-heart-l" />
                                              </a>
                                          </div>
                                          <div className="compare-btn">
                                              <a
                                                  className="compare add-to-compare"
                                                  href="compare.html"
                                                  title="Add to Compare"
                                              >
                                                  <i className="icon anm anm-random-r" />
                                              </a>
                                          </div>
                                      </div>
                                      {/* end product button */}
                                  </div>
                                  {/* End product details */}
                              </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                              <div className="grid-view_image">
                                  {/* start product image */}
                                  <a href="product-layout-1.html" className="grid-view-item__link">
                                      {/* image */}
                                      <img
                                          className="grid-view-item__image primary blur-up lazyload"
                                          data-src="assets/images/product-images/product-image2.jpg"
                                          src="assets/images/product-images/product-image2.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End image */}
                                      {/* Hover image */}
                                      <img
                                          className="grid-view-item__image hover blur-up lazyload"
                                          data-src="assets/images/product-images/product-image2-1.jpg"
                                          src="assets/images/product-images/product-image2-1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End hover image */}
                                      {/* product label */}
                                      <div className="product-labels rectangular">
                                          <span className="lbl on-sale">-16%</span>{" "}
                                          <span className="lbl pr-label1">new</span>
                                      </div>
                                      {/* End product label */}
                                  </a>
                                  {/* end product image */}
                                  {/*start product details */}
                                  <div className="product-details hoverDetails text-center mobile">
                                      {/*Vendor/Brand*/}
                                      <div className="brand-name">
                                          <a href="#" title="Belle">
                                              Belle
                                          </a>
                                      </div>
                                      {/*End Vendor/Brand*/}
                                      {/* product name */}
                                      <div className="product-name">
                                          <a href="product-layout-1.html">Elastic Waist Dress</a>
                                      </div>
                                      {/* End product name */}
                                      {/* product price */}
                                      <div className="product-price">
                                          <span className="price">$748.00</span>
                                      </div>
                                      {/* product button */}
                                      <div className="button-set">
                                          <a
                                              href="javascript:void(0)"
                                              title="Quick View"
                                              className="quick-view-popup quick-view"
                                              data-toggle="modal"
                                              data-target="#content_quickview"
                                          >
                                              <i className="icon anm anm-search-plus-r" />
                                          </a>
                                          {/* Start product button */}
                                          <form
                                              className="variants add"
                                              action="#"
                                              onClick="window.location.href='cart.html'"
                                              method="post"
                                          >
                                              <button
                                                  className="btn cartIcon btn-addto-cart"
                                                  type="button"
                                                  tabIndex={0}
                                              >
                                                  <i className="icon anm anm-bag-l" />
                                              </button>
                                          </form>
                                          <div className="wishlist-btn">
                                              <a
                                                  className="wishlist add-to-wishlist"
                                                  href="wishlist.html"
                                              >
                                                  <i className="icon anm anm-heart-l" />
                                              </a>
                                          </div>
                                          <div className="compare-btn">
                                              <a
                                                  className="compare add-to-compare"
                                                  href="compare.html"
                                                  title="Add to Compare"
                                              >
                                                  <i className="icon anm anm-random-r" />
                                              </a>
                                          </div>
                                      </div>
                                      {/* end product button */}
                                  </div>
                                  {/* End product details */}
                              </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                              <div className="grid-view_image">
                                  {/* start product image */}
                                  <a href="product-layout-1.html" className="grid-view-item__link">
                                      {/* image */}
                                      <img
                                          className="grid-view-item__image primary blur-up lazyload"
                                          data-src="assets/images/product-images/product-image3.jpg"
                                          src="assets/images/product-images/product-image3.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End image */}
                                      {/* Hover image */}
                                      <img
                                          className="grid-view-item__image hover blur-up lazyload"
                                          data-src="assets/images/product-images/product-image3-1.jpg"
                                          src="assets/images/product-images/product-image3-1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End hover image */}
                                      {/* product label */}
                                      <div className="product-labels rectangular">
                                          <span className="lbl on-sale">-16%</span>{" "}
                                          <span className="lbl pr-label1">new</span>
                                      </div>
                                      {/* End product label */}
                                  </a>
                                  {/* end product image */}
                                  {/*start product details */}
                                  <div className="product-details hoverDetails text-center mobile">
                                      {/*Vendor/Brand*/}
                                      <div className="brand-name">
                                          <a href="#" title="Antoni & Alisan">
                                              Antoni &amp; Alisan
                                          </a>
                                      </div>
                                      {/*End Vendor/Brand*/}
                                      {/* product name */}
                                      <div className="product-name">
                                          <a href="product-layout-1.html">3/4 Sleeve Kimono Dress</a>
                                      </div>
                                      {/* End product name */}
                                      {/* product price */}
                                      <div className="product-price">
                                          <span className="price">$550.00</span>
                                      </div>
                                      {/* product button */}
                                      <div className="button-set">
                                          <a
                                              href="javascript:void(0)"
                                              title="Quick View"
                                              className="quick-view-popup quick-view"
                                              data-toggle="modal"
                                              data-target="#content_quickview"
                                          >
                                              <i className="icon anm anm-search-plus-r" />
                                          </a>
                                          {/* Start product button */}
                                          <form
                                              className="variants add"
                                              action="#"
                                              onClick="window.location.href='cart.html'"
                                              method="post"
                                          >
                                              <button
                                                  className="btn cartIcon btn-addto-cart"
                                                  type="button"
                                                  tabIndex={0}
                                              >
                                                  <i className="icon anm anm-bag-l" />
                                              </button>
                                          </form>
                                          <div className="wishlist-btn">
                                              <a
                                                  className="wishlist add-to-wishlist"
                                                  href="wishlist.html"
                                              >
                                                  <i className="icon anm anm-heart-l" />
                                              </a>
                                          </div>
                                          <div className="compare-btn">
                                              <a
                                                  className="compare add-to-compare"
                                                  href="compare.html"
                                                  title="Add to Compare"
                                              >
                                                  <i className="icon anm anm-random-r" />
                                              </a>
                                          </div>
                                      </div>
                                      {/* end product button */}
                                  </div>
                                  {/* End product details */}
                              </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                              <div className="grid-view_image">
                                  {/* start product image */}
                                  <a href="product-layout-1.html" className="grid-view-item__link">
                                      {/* image */}
                                      <img
                                          className="grid-view-item__image primary blur-up lazyload"
                                          data-src="assets/images/product-images/product-image4.jpg"
                                          src="assets/images/product-images/product-image4.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End image */}
                                      {/* Hover image */}
                                      <img
                                          className="grid-view-item__image hover blur-up lazyload"
                                          data-src="assets/images/product-images/product-image4-1.jpg"
                                          src="assets/images/product-images/product-image4-1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End hover image */}
                                      {/* product label */}
                                      <div className="product-labels">
                                          <span className="lbl on-sale">Sale</span>
                                      </div>
                                      {/* End product label */}
                                  </a>
                                  {/* end product image */}
                                  {/*start product details */}
                                  <div className="product-details hoverDetails text-center mobile">
                                      {/*Vendor/Brand*/}
                                      <div className="brand-name">
                                          <a href="#" title="Lareida">
                                              Lareida
                                          </a>
                                      </div>
                                      {/*End Vendor/Brand*/}
                                      {/* product name */}
                                      <div className="product-name">
                                          <a href="product-layout-1.html">Cape Dress</a>
                                      </div>
                                      {/* End product name */}
                                      {/* product price */}
                                      <div className="product-price">
                                          <span className="old-price">$900.00</span>
                                          <span className="price">$788.00</span>
                                      </div>
                                      {/* product button */}
                                      <div className="button-set">
                                          <a
                                              href="javascript:void(0)"
                                              title="Quick View"
                                              className="quick-view-popup quick-view"
                                              data-toggle="modal"
                                              data-target="#content_quickview"
                                          >
                                              <i className="icon anm anm-search-plus-r" />
                                          </a>
                                          {/* Start product button */}
                                          <form
                                              className="variants add"
                                              action="#"
                                              onClick="window.location.href='cart.html'"
                                              method="post"
                                          >
                                              <button
                                                  className="btn cartIcon btn-addto-cart"
                                                  type="button"
                                                  tabIndex={0}
                                              >
                                                  <i className="icon anm anm-bag-l" />
                                              </button>
                                          </form>
                                          <div className="wishlist-btn">
                                              <a
                                                  className="wishlist add-to-wishlist"
                                                  href="wishlist.html"
                                              >
                                                  <i className="icon anm anm-heart-l" />
                                              </a>
                                          </div>
                                          <div className="compare-btn">
                                              <a
                                                  className="compare add-to-compare"
                                                  href="compare.html"
                                                  title="Add to Compare"
                                              >
                                                  <i className="icon anm anm-random-r" />
                                              </a>
                                          </div>
                                      </div>
                                      {/* end product button */}
                                  </div>
                                  {/* End product details */}
                              </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                              <div className="grid-view_image">
                                  {/* start product image */}
                                  <a href="product-layout-1.html" className="grid-view-item__link">
                                      {/* image */}
                                      <img
                                          className="grid-view-item__image primary blur-up lazyload"
                                          data-src="assets/images/product-images/product-image5.jpg"
                                          src="assets/images/product-images/product-image5.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End image */}
                                      {/* Hover image */}
                                      <img
                                          className="grid-view-item__image hover blur-up lazyload"
                                          data-src="assets/images/product-images/product-image5-1.jpg"
                                          src="assets/images/product-images/product-image5-1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End hover image */}
                                  </a>
                                  {/* end product image */}
                                  {/*start product details */}
                                  <div className="product-details hoverDetails text-center mobile">
                                      {/*Vendor/Brand*/}
                                      <div className="brand-name">
                                          <a href="#" title="Lilith">
                                              Lilith
                                          </a>
                                      </div>
                                      {/*End Vendor/Brand*/}
                                      {/* product name */}
                                      <div className="product-name">
                                          <a href="product-layout-1.html">Paper Dress</a>
                                      </div>
                                      {/* End product name */}
                                      {/* product price */}
                                      <div className="product-price">
                                          <span className="old-price">$900.00</span>
                                          <span className="price">$788.00</span>
                                      </div>
                                      {/* product button */}
                                      <div className="button-set">
                                          <a
                                              href="javascript:void(0)"
                                              title="Quick View"
                                              className="quick-view-popup quick-view"
                                              data-toggle="modal"
                                              data-target="#content_quickview"
                                          >
                                              <i className="icon anm anm-search-plus-r" />
                                          </a>
                                          {/* Start product button */}
                                          <form
                                              className="variants add"
                                              action="#"
                                              onClick="window.location.href='cart.html'"
                                              method="post"
                                          >
                                              <button
                                                  className="btn cartIcon btn-addto-cart"
                                                  type="button"
                                                  tabIndex={0}
                                              >
                                                  <i className="icon anm anm-bag-l" />
                                              </button>
                                          </form>
                                          <div className="wishlist-btn">
                                              <a
                                                  className="wishlist add-to-wishlist"
                                                  href="wishlist.html"
                                              >
                                                  <i className="icon anm anm-heart-l" />
                                              </a>
                                          </div>
                                          <div className="compare-btn">
                                              <a
                                                  className="compare add-to-compare"
                                                  href="compare.html"
                                                  title="Add to Compare"
                                              >
                                                  <i className="icon anm anm-random-r" />
                                              </a>
                                          </div>
                                      </div>
                                      {/* end product button */}
                                  </div>
                                  {/* End product details */}
                              </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                              <div className="grid-view_image">
                                  {/* start product image */}
                                  <a href="product-layout-1.html" className="grid-view-item__link">
                                      {/* image */}
                                      <img
                                          className="grid-view-item__image primary blur-up lazyload"
                                          data-src="assets/images/product-images/product-image16.jpg"
                                          src="assets/images/product-images/product-image16.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End image */}
                                      {/* Hover image */}
                                      <img
                                          className="grid-view-item__image hover blur-up lazyload"
                                          data-src="assets/images/product-images/product-image16-1.jpg"
                                          src="assets/images/product-images/product-image16-1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End hover image */}
                                  </a>
                                  {/* end product image */}
                                  {/*start product details */}
                                  <div className="product-details hoverDetails text-center mobile">
                                      {/*Vendor/Brand*/}
                                      <div className="brand-name">
                                          <a href="#" title="Belle">
                                              Belle
                                          </a>
                                      </div>
                                      {/*End Vendor/Brand*/}
                                      {/* product name */}
                                      <div className="product-name">
                                          <a href="product-layout-1.html">Buttercup Dress</a>
                                      </div>
                                      {/* End product name */}
                                      {/* product price */}
                                      <div className="product-price">
                                          <span className="price">$420.00</span>
                                      </div>
                                      {/* product button */}
                                      <div className="button-set">
                                          <a
                                              href="javascript:void(0)"
                                              title="Quick View"
                                              className="quick-view-popup quick-view"
                                              data-toggle="modal"
                                              data-target="#content_quickview"
                                          >
                                              <i className="icon anm anm-search-plus-r" />
                                          </a>
                                          {/* Start product button */}
                                          <form
                                              className="variants add"
                                              action="#"
                                              onClick="window.location.href='cart.html'"
                                              method="post"
                                          >
                                              <button
                                                  className="btn cartIcon btn-addto-cart"
                                                  type="button"
                                                  tabIndex={0}
                                              >
                                                  <i className="icon anm anm-bag-l" />
                                              </button>
                                          </form>
                                          <div className="wishlist-btn">
                                              <a
                                                  className="wishlist add-to-wishlist"
                                                  href="wishlist.html"
                                              >
                                                  <i className="icon anm anm-heart-l" />
                                              </a>
                                          </div>
                                          <div className="compare-btn">
                                              <a
                                                  className="compare add-to-compare"
                                                  href="compare.html"
                                                  title="Add to Compare"
                                              >
                                                  <i className="icon anm anm-random-r" />
                                              </a>
                                          </div>
                                      </div>
                                      {/* end product button */}
                                  </div>
                                  {/* End product details */}
                              </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                              <div className="grid-view_image">
                                  {/* start product image */}
                                  <a href="product-layout-1.html" className="grid-view-item__link">
                                      {/* image */}
                                      <img
                                          className="grid-view-item__image primary blur-up lazyload"
                                          data-src="assets/images/product-images/cape-dress-2.jpg"
                                          src="assets/images/product-images/cape-dress-2.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End image */}
                                      {/* Hover image */}
                                      <img
                                          className="grid-view-item__image hover blur-up lazyload"
                                          data-src="assets/images/product-images/cape-dress-1.jpg"
                                          src="assets/images/product-images/cape-dress-1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End hover image */}
                                  </a>
                                  {/* end product image */}
                                  {/*start product details */}
                                  <div className="product-details hoverDetails text-center mobile">
                                      {/*Vendor/Brand*/}
                                      <div className="brand-name">
                                          <a href="#" title="Belle">
                                              Belle
                                          </a>
                                      </div>
                                      {/*End Vendor/Brand*/}
                                      {/* product name */}
                                      <div className="product-name">
                                          <a href="product-layout-1.html">Lima Shirt</a>
                                      </div>
                                      {/* End product name */}
                                      {/* product price */}
                                      <div className="product-price">
                                          <span className="price">$420.00</span>
                                      </div>
                                      {/* product button */}
                                      <div className="button-set">
                                          <a
                                              href="javascript:void(0)"
                                              title="Quick View"
                                              className="quick-view-popup quick-view"
                                              data-toggle="modal"
                                              data-target="#content_quickview"
                                          >
                                              <i className="icon anm anm-search-plus-r" />
                                          </a>
                                          {/* Start product button */}
                                          <form
                                              className="variants add"
                                              action="#"
                                              onClick="window.location.href='cart.html'"
                                              method="post"
                                          >
                                              <button
                                                  className="btn cartIcon btn-addto-cart"
                                                  type="button"
                                                  tabIndex={0}
                                              >
                                                  <i className="icon anm anm-bag-l" />
                                              </button>
                                          </form>
                                          <div className="wishlist-btn">
                                              <a
                                                  className="wishlist add-to-wishlist"
                                                  href="wishlist.html"
                                              >
                                                  <i className="icon anm anm-heart-l" />
                                              </a>
                                          </div>
                                          <div className="compare-btn">
                                              <a
                                                  className="compare add-to-compare"
                                                  href="compare.html"
                                                  title="Add to Compare"
                                              >
                                                  <i className="icon anm anm-random-r" />
                                              </a>
                                          </div>
                                      </div>
                                      {/* end product button */}
                                  </div>
                                  {/* End product details */}
                              </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                              <div className="grid-view_image">
                                  {/* start product image */}
                                  <a href="product-layout-1.html" className="grid-view-item__link">
                                      {/* image */}
                                      <img
                                          className="grid-view-item__image primary blur-up lazyload"
                                          data-src="assets/images/product-images/product-image19.jpg"
                                          src="assets/images/product-images/product-image19.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End image */}
                                      {/* Hover image */}
                                      <img
                                          className="grid-view-item__image hover blur-up lazyload"
                                          data-src="assets/images/product-images/product-image19-1.jpg"
                                          src="assets/images/product-images/product-image19-1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End hover image */}
                                  </a>
                                  {/* end product image */}
                                  {/*start product details */}
                                  <div className="product-details hoverDetails text-center mobile">
                                      {/*Vendor/Brand*/}
                                      <div className="brand-name">
                                          <a href="#" title="Belle">
                                              Belle
                                          </a>
                                      </div>
                                      {/*End Vendor/Brand*/}
                                      {/* product name */}
                                      <div className="product-name">
                                          <a href="product-layout-1.html">Romary Dress</a>
                                      </div>
                                      {/* End product name */}
                                      {/* product price */}
                                      <div className="product-price">
                                          <span className="price">$420.00</span>
                                      </div>
                                      {/* product button */}
                                      <div className="button-set">
                                          <a
                                              href="javascript:void(0)"
                                              title="Quick View"
                                              className="quick-view-popup quick-view"
                                              data-toggle="modal"
                                              data-target="#content_quickview"
                                          >
                                              <i className="icon anm anm-search-plus-r" />
                                          </a>
                                          {/* Start product button */}
                                          <form
                                              className="variants add"
                                              action="#"
                                              onclick="window.location.href='cart.html'"
                                              method="post"
                                          >
                                              <button
                                                  className="btn cartIcon btn-addto-cart"
                                                  type="button"
                                                  tabIndex={0}
                                              >
                                                  <i className="icon anm anm-bag-l" />
                                              </button>
                                          </form>
                                          <div className="wishlist-btn">
                                              <a
                                                  className="wishlist add-to-wishlist"
                                                  href="wishlist.html"
                                              >
                                                  <i className="icon anm anm-heart-l" />
                                              </a>
                                          </div>
                                          <div className="compare-btn">
                                              <a
                                                  className="compare add-to-compare"
                                                  href="compare.html"
                                                  title="Add to Compare"
                                              >
                                                  <i className="icon anm anm-random-r" />
                                              </a>
                                          </div>
                                      </div>
                                      {/* end product button */}
                                  </div>
                                  {/* End product details */}
                              </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                              <div className="grid-view_image">
                                  {/* start product image */}
                                  <a href="product-layout-1.html" className="grid-view-item__link">
                                      {/* image */}
                                      <img
                                          className="grid-view-item__image primary blur-up lazyload"
                                          data-src="assets/images/product-images/product-image20.jpg"
                                          src="assets/images/product-images/product-image20.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End image */}
                                      {/* Hover image */}
                                      <img
                                          className="grid-view-item__image hover blur-up lazyload"
                                          data-src="assets/images/product-images/product-image20-1.jpg"
                                          src="assets/images/product-images/product-image20-1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End hover image */}
                                  </a>
                                  {/* end product image */}
                                  {/*start product details */}
                                  <div className="product-details hoverDetails text-center mobile">
                                      {/*Vendor/Brand*/}
                                      <div className="brand-name">
                                          <a href="#" title="Lareida">
                                              Lareida
                                          </a>
                                      </div>
                                      {/*End Vendor/Brand*/}
                                      {/* product name */}
                                      <div className="product-name">
                                          <a href="product-layout-1.html">Romary Dress</a>
                                      </div>
                                      {/* End product name */}
                                      {/* product price */}
                                      <div className="product-price">
                                          <span className="price">$420.00</span>
                                      </div>
                                      {/* product button */}
                                      <div className="button-set">
                                          <a
                                              href="javascript:void(0)"
                                              title="Quick View"
                                              className="quick-view-popup quick-view"
                                              data-toggle="modal"
                                              data-target="#content_quickview"
                                          >
                                              <i className="icon anm anm-search-plus-r" />
                                          </a>
                                          {/* Start product button */}
                                          <form
                                              className="variants add"
                                              action="#"
                                              onclick="window.location.href='cart.html'"
                                              method="post"
                                          >
                                              <button
                                                  className="btn cartIcon btn-addto-cart"
                                                  type="button"
                                                  tabIndex={0}
                                              >
                                                  <i className="icon anm anm-bag-l" />
                                              </button>
                                          </form>
                                          <div className="wishlist-btn">
                                              <a
                                                  className="wishlist add-to-wishlist"
                                                  href="wishlist.html"
                                              >
                                                  <i className="icon anm anm-heart-l" />
                                              </a>
                                          </div>
                                          <div className="compare-btn">
                                              <a
                                                  className="compare add-to-compare"
                                                  href="compare.html"
                                                  title="Add to Compare"
                                              >
                                                  <i className="icon anm anm-random-r" />
                                              </a>
                                          </div>
                                      </div>
                                      {/* end product button */}
                                  </div>
                                  {/* End product details */}
                              </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                              <div className="grid-view_image">
                                  {/* start product image */}
                                  <a href="product-layout-1.html" className="grid-view-item__link">
                                      {/* image */}
                                      <img
                                          className="grid-view-item__image primary blur-up lazyload"
                                          data-src="assets/images/product-images/product-image23.jpg"
                                          src="assets/images/product-images/product-image23.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End image */}
                                      {/* Hover image */}
                                      <img
                                          className="grid-view-item__image hover blur-up lazyload"
                                          data-src="assets/images/product-images/product-image23-1.jpg"
                                          src="assets/images/product-images/product-image23-1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End hover image */}
                                  </a>
                                  {/* end product image */}
                                  {/*start product details */}
                                  <div className="product-details hoverDetails text-center mobile">
                                      {/*Vendor/Brand*/}
                                      <div className="brand-name">
                                          <a href="#" title="Lareida">
                                              Lareida
                                          </a>
                                      </div>
                                      {/*End Vendor/Brand*/}
                                      {/* product name */}
                                      <div className="product-name">
                                          <a href="product-layout-1.html">One Shoulder Dress in Navy</a>
                                      </div>
                                      {/* End product name */}
                                      {/* product price */}
                                      <div className="product-price">
                                          <span className="price">$420.00</span>
                                      </div>
                                      {/* product button */}
                                      <div className="button-set">
                                          <a
                                              href="javascript:void(0)"
                                              title="Quick View"
                                              className="quick-view-popup quick-view"
                                              data-toggle="modal"
                                              data-target="#content_quickview"
                                          >
                                              <i className="icon anm anm-search-plus-r" />
                                          </a>
                                          {/* Start product button */}
                                          <form
                                              className="variants add"
                                              action="#"
                                              onclick="window.location.href='cart.html'"
                                              method="post"
                                          >
                                              <button
                                                  className="btn cartIcon btn-addto-cart"
                                                  type="button"
                                                  tabIndex={0}
                                              >
                                                  <i className="icon anm anm-bag-l" />
                                              </button>
                                          </form>
                                          <div className="wishlist-btn">
                                              <a
                                                  className="wishlist add-to-wishlist"
                                                  href="wishlist.html"
                                              >
                                                  <i className="icon anm anm-heart-l" />
                                              </a>
                                          </div>
                                          <div className="compare-btn">
                                              <a
                                                  className="compare add-to-compare"
                                                  href="compare.html"
                                                  title="Add to Compare"
                                              >
                                                  <i className="icon anm anm-random-r" />
                                              </a>
                                          </div>
                                      </div>
                                      {/* end product button */}
                                  </div>
                                  {/* End product details */}
                              </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                              <div className="grid-view_image">
                                  {/* start product image */}
                                  <a href="product-layout-1.html" className="grid-view-item__link">
                                      {/* image */}
                                      <img
                                          className="grid-view-item__image primary blur-up lazyload"
                                          data-src="assets/images/product-images/product-image24.jpg"
                                          src="assets/images/product-images/product-image24.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End image */}
                                      {/* Hover image */}
                                      <img
                                          className="grid-view-item__image hover blur-up lazyload"
                                          data-src="assets/images/product-images/product-image24-1.jpg"
                                          src="assets/images/product-images/product-image24-1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End hover image */}
                                  </a>
                                  {/* end product image */}
                                  {/*start product details */}
                                  <div className="product-details hoverDetails text-center mobile">
                                      {/*Vendor/Brand*/}
                                      <div className="brand-name">
                                          <a href="#" title="Lareida">
                                              Lareida
                                          </a>
                                      </div>
                                      {/*End Vendor/Brand*/}
                                      {/* product name */}
                                      <div className="product-name">
                                          <a href="product-layout-1.html">
                                              Triangle Sleeveless Dress in Multi
                                          </a>
                                      </div>
                                      {/* End product name */}
                                      {/* product price */}
                                      <div className="product-price">
                                          <span className="price">$420.00</span>
                                      </div>
                                      {/* product button */}
                                      <div className="button-set">
                                          <a
                                              href="javascript:void(0)"
                                              title="Quick View"
                                              className="quick-view-popup quick-view"
                                              data-toggle="modal"
                                              data-target="#content_quickview"
                                          >
                                              <i className="icon anm anm-search-plus-r" />
                                          </a>
                                          {/* Start product button */}
                                          <form
                                              className="variants add"
                                              action="#"
                                              onclick="window.location.href='cart.html'"
                                              method="post"
                                          >
                                              <button
                                                  className="btn cartIcon btn-addto-cart"
                                                  type="button"
                                                  tabIndex={0}
                                              >
                                                  <i className="icon anm anm-bag-l" />
                                              </button>
                                          </form>
                                          <div className="wishlist-btn">
                                              <a
                                                  className="wishlist add-to-wishlist"
                                                  href="wishlist.html"
                                              >
                                                  <i className="icon anm anm-heart-l" />
                                              </a>
                                          </div>
                                          <div className="compare-btn">
                                              <a
                                                  className="compare add-to-compare"
                                                  href="compare.html"
                                                  title="Add to Compare"
                                              >
                                                  <i className="icon anm anm-random-r" />
                                              </a>
                                          </div>
                                      </div>
                                      {/* end product button */}
                                  </div>
                                  {/* End product details */}
                              </div>
                          </div>
                          <div className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                              <div className="grid-view_image">
                                  {/* start product image */}
                                  <a href="product-layout-1.html" className="grid-view-item__link">
                                      {/* image */}
                                      <img
                                          className="grid-view-item__image primary blur-up lazyload"
                                          data-src="assets/images/product-images/product-image25.jpg"
                                          src="assets/images/product-images/product-image25.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End image */}
                                      {/* Hover image */}
                                      <img
                                          className="grid-view-item__image hover blur-up lazyload"
                                          data-src="assets/images/product-images/product-image25-1.jpg"
                                          src="assets/images/product-images/product-image25-1.jpg"
                                          alt="image"
                                          title="product"
                                      />
                                      {/* End hover image */}
                                  </a>
                                  {/* end product image */}
                                  {/*start product details */}
                                  <div className="product-details hoverDetails text-center mobile">
                                      {/*Vendor/Brand*/}
                                      <div className="brand-name">
                                          <a href="#" title="Jesse Kamm">
                                              Jesse Kamm
                                          </a>
                                      </div>
                                      {/*End Vendor/Brand*/}
                                      {/* product name */}
                                      <div className="product-name">
                                          <a href="product-layout-1.html">ACB Top</a>
                                      </div>
                                      {/* End product name */}
                                      {/* product price */}
                                      <div className="product-price">
                                          <span className="price">$420.00</span>
                                      </div>
                                      {/* product button */}
                                      <div className="button-set">
                                          <a
                                              href="javascript:void(0)"
                                              title="Quick View"
                                              className="quick-view-popup quick-view"
                                              data-toggle="modal"
                                              data-target="#content_quickview"
                                          >
                                              <i className="icon anm anm-search-plus-r" />
                                          </a>
                                          {/* Start product button */}
                                          <form
                                              className="variants add"
                                              action="#"
                                              onclick="window.location.href='cart.html'"
                                              method="post"
                                          >
                                              <button
                                                  className="btn cartIcon btn-addto-cart"
                                                  type="button"
                                                  tabIndex={0}
                                              >
                                                  <i className="icon anm anm-bag-l" />
                                              </button>
                                          </form>
                                          <div className="wishlist-btn">
                                              <a
                                                  className="wishlist add-to-wishlist"
                                                  href="wishlist.html"
                                              >
                                                  <i className="icon anm anm-heart-l" />
                                              </a>
                                          </div>
                                          <div className="compare-btn">
                                              <a
                                                  className="compare add-to-compare"
                                                  href="compare.html"
                                                  title="Add to Compare"
                                              >
                                                  <i className="icon anm anm-random-r" />
                                              </a>
                                          </div>
                                      </div>
                                      {/* end product button */}
                                  </div>
                                  {/* End product details */}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="clear text-center">
                      <a href="#" className="btn">
                          View all
                      </a>
                  </div>
              </div>
          </div>
          {/*End Featured Product*/}
          {/*Store Information*/}
          <div className="section store-information">
              <div className="container-fluid">
                  <div className="row">
                      <ul className="display-table store-info">
                          <li className="display-table-cell">
                              {" "}
                              <i className="icon anm anm-truck-l" aria-hidden="true" />
                              <h5>Free Shipping Worldwide</h5>
                              <span className="sub-text">
              Diam augue augue in fusce voluptatem
            </span>
                          </li>
                          <li className="display-table-cell">
                              {" "}
                              <i className="icon anm anm-money-bill-ar" aria-hidden="true" />
                              <h5>Money Back Guarantee</h5>
                              <span className="sub-text">
              Use this text to display your store information
            </span>{" "}
                          </li>
                          <li className="display-table-cell">
                              {" "}
                              <i className="icon anm anm-comments-l" aria-hidden="true" />
                              <h5>24/7 Help Center</h5>
                              <span className="sub-text">
              Use this text to display your store information
            </span>{" "}
                          </li>
                          <li className="display-table-cell">
                              {" "}
                              <i className="icon anm anm-dollar-sign-l" aria-hidden="true" />
                              <h5>cash on delivery</h5>
                              <span className="sub-text">
              Use this text to display your store information
            </span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          {/*End Store Information*/}
      </div>


  )
}
