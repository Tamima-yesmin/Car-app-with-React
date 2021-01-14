import React from 'react'
import { useStateValue } from '../../StateProvider';
import '../Product.css'

export default function Product(props) {
    const { titleText, descText, img, id } = props;
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'Add_To_Cart',
            item: {
                titleText: titleText,
                descText: descText,
                img: img,
            }
        })
    };

    return (
        <div>

            <div className="card ">
                <img src={img} alt="img" />
                <h2 className="cardTitle">{titleText} </h2>
                <p className="cardDes"> {descText}</p>

                <button onClick={addToCart} className="btn btn-success">Add</button>
            </div>
        </div>
    )
}
