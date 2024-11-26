import React from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";

export default function Product04() {
    return (
        <>
            <Header />
            Product 4
            <main>
                <div className="productItemContainer">
                    <div className="itemContainer">
                        <div className="itemText">
                            <section id="itemEntry01" className="itemEntry">
                                <div><img className="itemPhoto" src="images/shoes03.jpeg" alt="Blog photo" />
                                </div>
                                <div>

                                    <h2>Fuchsia - Women's Latin Dance Shoes</h2>
                                    <h3>$235 CAD</h3>

                                    <p>Fuchsia dance shoes bring a bold pop of color and style to the dance floor. Their vibrant shade adds a fun, eye-catching element, making them perfect for dancers who want to stand out while still staying comfortable.</p>
                                    <p>With adjustable ankle straps and a supportive heel, these shoes offer both security and stability during fast moves. The bright color combined with a sturdy design ensures you can dance with confidence.</p>
                                    <p>Great for Latin, ballroom, or other dance styles, fuchsia dance shoes are both fashionable and functional. They add a splash of personality to your look while allowing you to move comfortably and gracefully.</p>
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
