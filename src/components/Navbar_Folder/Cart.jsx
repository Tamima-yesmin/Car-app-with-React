import React from 'react'
import { useStateValue } from '../../StateProvider'
import CartProduct from '../Product_Folder/CartProduct'
import Subtotal from '../Product_Folder/Subtotal';

export default function Cart() {
    const [{ cart }] = useStateValue();


    return (
        <>

            <div className="row">
                <div className="col-8">
                    {cart?.length === 0 ? (
                        <div>
                            <h2>Your shopping Cart is empty</h2>
                        </div>
                    ) : (
                            <div>
                                <h2>Your shopping Cart </h2>

                                {cart?.map((item) => (
                                    <CartProduct
                                        id={item.id}
                                        titleText={item.titleText}
                                        descText={item.descText}
                                        img={item.img}
                                    />

                                ))}
                            </div>
                        )}
                </div>
                {cart.length > 0 && (
                    <div className="col-4">
                        <h1>Subtotal</h1>
                        <Subtotal />
                    </div>
                )}



            </div>
        </>
    )
}

