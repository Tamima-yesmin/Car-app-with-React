import React, { useState } from 'react'




export default function Card(props) {
    const { titleText, descText, img } = props;
    const Data = props;
    // const [item, setitem] = useState([])
    const [cart, setcart] = useState([]);

    const addToCart = (item) => {
        setcart([...cart, item]);
    }
    return (
        <>
            <div>
                <button>go to cart ({cart.length}) </button>
            </div>
            <div className="card">
                <img src={img} alt="img" />
                <h2 className="cardTitle">{titleText} </h2>
                <p className="cardDes"> {descText}</p>

                <button className="btn btn-success"
                    onClick={() => addToCart(Data)}>Add</button>
            </div>
        </>
    )
}
