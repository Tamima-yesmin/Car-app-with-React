import React from 'react'
import { useStateValue } from '../../StateProvider'

export default function CartProduct({ titleText, descText, img, id }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'Remove_From_Cart',
            id: id,
        })

    }
    return (
        <div>
            <img src={img} />
            <div>
                <h2 className="cardTitle">{titleText} </h2>
                <p className="cardDes"> {descText}</p>
                <button onClick={removeFromCart}> Remove From Cart </button>
            </div>
        </div>
    )
}
