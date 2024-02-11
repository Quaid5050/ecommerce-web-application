
import { auth } from "@/auth";
import { doLogout, doSocialLogin } from "@/lib/actions";
import React from "react";
import { cookies } from "next/headers";
const TopHeader = async () => {



    const session = await auth();
    const accessToken = cookies().get('accessToken')
    if (session) {
        //@ts-ignore
        console.log("Session Active user:" + session?.userId);
    }


    return (
        <div className="top-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 col-sm-8 col-md-5 col-lg-4">
                        <div className="currency-picker">
                            <span className="selected-currency">USD</span>
                            <ul id="currencies">
                                <li data-currency="INR" className="">
                                    INR
                                </li>
                                <li data-currency="GBP" className="">
                                    GBP
                                </li>
                                <li data-currency="CAD" className="">
                                    CAD
                                </li>
                                <li data-currency="USD" className="selected">
                                    USD
                                </li>
                                <li data-currency="AUD" className="">
                                    AUD
                                </li>
                                <li data-currency="EUR" className="">
                                    EUR
                                </li>
                                <li data-currency="JPY" className="">
                                    JPY
                                </li>
                            </ul>
                        </div>
                        <div className="language-dropdown">
                            <span className="language-dd">English</span>
                            <ul id="language">
                                <li className="">German</li>
                                <li className="">French</li>
                            </ul>
                        </div>
                        <p className="phone-no">
                            <i className="anm anm-phone-s" /> +440 0(111) 044 833
                        </p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 d-none d-lg-none d-md-block d-lg-block">
                        <div className="text-center">
                            <p className="top-header_middle-text">
                                {" "}
                                Worldwide Express Shipping
                            </p>
                        </div>
                    </div>
                    <div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
                        <span className="user-menu d-block d-lg-none">
                            <i className="anm anm-user-al" aria-hidden="true" />
                        </span>
                        <ul className="customer-links list-inline">

                            <li>
                                {!session ? (
                                    <form action={doSocialLogin}>
                                        {/* <a href="login.html">Login</a> */}
                                        <button
                                            type="submit"
                                            name="action"
                                            value="google"
                                            style={{
                                                cursor: 'pointer',
                                                border: 'none',
                                                backgroundColor: 'transparent',
                                                color: 'white',
                                            }}
                                        >Login with Google(client)</button>
                                    </form>
                                ) : (
                                    <form action={doLogout}>
                                        {/* <a href="login.html">Login</a> */}
                                        <button
                                            type="submit"
                                            style={{
                                                cursor: 'pointer',
                                                border: 'none',
                                                backgroundColor: 'transparent',
                                                color: 'white',
                                            }}
                                        >LogOut {session?.user?.name}(client)</button>
                                    </form>
                                )}
                            </li>
                            <li>
                                <a href="register.html">Create Account</a>
                            </li>
                            <li>
                                <a href="wishlist.html">Wishlist</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;
