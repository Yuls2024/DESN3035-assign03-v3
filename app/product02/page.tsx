import React from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";

export default function Product02() {
    return (
        <>
            <Header />
            <main>
                <div className="productItemContainer">
                    <div className="itemContainer">
                        <div className="itemText">
                            <section id="itemEntry01" className="itemEntry">
                                <div><img className="itemPhoto" src="images/shoes02.jpeg" alt="Shoes02 photo" />
                                </div>
                                <div>
                                    <h2>Olivia - Women's Latin Dance Shoes</h2>
                                    <h3>$275 CAD</h3>
                                    <p>Black criss-cross dance shoes combine style and comfort, with their criss-cross straps adding both a fashionable look and extra support. These shoes are perfect for dancers wanting a sleek, classic design.</p>
                                    <p>The adjustable ankle straps and stable heel provide a secure fit, giving dancers confidence during fast moves. The sturdy heel adds balance, making them a great choice for various dance styles. </p>
                                    <p>Ideal for Latin, ballroom, and more, black criss-cross shoes offer both comfort and elegance. They let you move freely while showcasing your footwork with ease and style.</p>
                                </div>
                            </section>
                            <a className="goBack" href="./">Back to Catalog</a>
                        </div>
                    </div>



                </div>
            </main>
            <Footer />
        </>
    );
}
