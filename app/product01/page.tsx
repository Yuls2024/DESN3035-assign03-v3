import React from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";

export default function Product01() {
    return (
        <>
            <Header />
            Product 1
            <main>
        <div className="productItemContainer">
            <div className="itemContainer">
                <div className="itemText">
                    <section className="itemEntry">
                        <div><img className="itemPhoto" src="images/shoes01.jpeg" alt="Blog photo" />
                        </div>
                        <div className="itemDescription">
                            <h2>Silver - Women's Latin Dance Shoes</h2>
                            <h3>$227 CAD</h3>

                            <p>Mesh and sparkly silver dance shoes are a great mix of style and comfort. The mesh makes
                                them breathable and easy to move in, while the sparkly silver adds a fun, eye-catching
                                look. </p>
                            <p>These shoes have an adjustable ankle straps and a steady heel for extra support, making
                                them perfect for dancing confidently. </p>
                            <p>Whether for Latin, ballroom, or other types of dance, they let you look stylish while
                                staying comfortable during fast, detailed footwork. Mesh and sparkly silver shoes are a
                                great choice if you want to stand out on the dance floor.</p>
                        </div>
                    </section>
                    <a className="goBack" href="/">Back to Catalog</a>
                </div>
            </div>
        </div>
    </main>
            <Footer />
        </>
    );
}
