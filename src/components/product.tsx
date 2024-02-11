
import React from 'react';
import useSWR from 'swr';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    code: number;
    created_at: string;
    updated_at: string;
}
//@ts-ignore
const fetcher = (...args) => fetch(...args ).then(res => res.json());

const Product: React.FC = () => {
    const { data: products, error } = useSWR<Product[]>('http://localhost:8000/api/products', fetcher);

    if (error) return <p>Error fetching products...</p>;
    if (!products) return <p>Loading...</p>;

    return (
        <div className="row">
            {products.map(product => (
                <div key={product.id} className="col-6 col-sm-6 col-md-3 col-lg-3 item grid-view-item style2">
                    <div className="grid-view_image">
                        {/* start product image */}
                        <a href="product-layout-1.html" className="grid-view-item__link">
                            {/* image */}
                            <img
                                className="grid-view-item__image primary blur-up lazyload"
                                data-src={`/assets/images/product-images/product-image1.jpg`}
                                src={`/assets/images/product-images/product-image1.jpg`}
                                alt="Product Image"
                                title={product.name}
                            />
                            {/* End image */}
                            {/* Hover image */}
                            <img
                                className="grid-view-item__image hover blur-up lazyload"
                                data-src={`/assets/images/product-images/product-image${product.id}-1.jpg`}
                                src={`/assets/images/product-images/product-image${product.id}-1.jpg`}
                                alt="Product Image Hover"
                                title={product.name}
                            />
                            {/* End hover image */}
                        </a>
                        {/* end product image */}
                        {/*start product details */}
                        <div className="product-details hoverDetails text-center mobile">
                            {/*Vendor/Brand*/}
                            <div className="brand-name">
                                <a href="#" title="Jesse Kamm">
                                    {product.name}
                                </a>
                            </div>
                            {/*End Vendor/Brand*/}
                            {/* product name */}
                            <div className="product-name">
                                <a href={`product-layout-1.html?id=${product.id}`}>{product.name}</a>
                                {product.description}
                            </div>
                            {/* End product name */}
                            {/* product price */}
                            <div className="product-price">
                                <span className="price">${product.price}</span>
                            </div>
                            {/* product button */}
                            <div className="button-set">
                                <a
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
            ))}
        </div>
    );
};

export default Product;
