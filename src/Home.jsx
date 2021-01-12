import React from 'react'
import Card from './components/Card'
import Data from './Data.json'

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

            {Data.map((item, index) => <Card Key={index} titleText={item.title} descText={item.des} img={item.img} />)}
        </>
    )
}
