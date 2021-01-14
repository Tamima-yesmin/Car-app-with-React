import React from 'react'
import './App.css'
import Data from './components/Product_Folder/data.json'
import Product from './components/Product_Folder/Product'



export default function Home() {
    return (
        <>
            <section id="header" className="">
                <div className="header-containr d-flex align-item-center ">


                    <div className="header-content text-center   ">
                        <h1 className="display-4">Eirmod ipsum  </h1>
                        <p>
                            Eirmod ipsum stet lorem nonumy accusam duo, labore sed gubergren.
                    </p>
                    </div>
                </div>

            </section>

            {/* //-------------------produc call ---------------------------- */}
            {Data.map((item, index) => <Product Key={index} titleText={item.title} descText={item.des} img={item.img} id={item.id} />)}
        </>
    )
}
