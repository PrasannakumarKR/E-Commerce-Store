import React from "react";
import GooglePayButton from "@google-pay/button-react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Buy = () => {
    const {
        totalUniqueItems,
    } = useCart();
    return (
        <div className="screen">
            <section id="header">
                <h1 className="header"> E-Commerce Store </h1>
                <div id="cart">
                    <h5>{totalUniqueItems}</h5>
                    <Link to="/cart"><img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="cart" width='20px' /></Link>
                </div>
            </section>
            <section className="gpay">
            <GooglePayButton
                environment="TEST"
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: 'example',
                                    gatewayMerchantId: 'exampleGatewayMerchantId',
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: "100",
                        currencyCode: 'USD',
                        countryCode: 'US',
                    },
                }}
                onLoadPaymentData={paymentRequest => {
                    console.log('load payment data', paymentRequest);
                }}

            />
            <h3>Buy your favourite game by click on above G-pay button</h3>
            </section>
            </div>)
}
export default Buy;