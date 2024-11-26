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
                                <div><img className="itemPhoto" src="images/shoes04.jpeg" alt="Blog photo" />
                                </div>
                                <div>
                                    <h2>Bacall - Women's Latin Dance Shoes</h2>
                                    <h3>$200 CAD</h3>

                                    <p>Nude-colored dance shoes are a versatile and stylish choice, designed to blend seamlessly with any outfit while enhancing the appearance of leg length. Their neutral tone makes them perfect for dancers who prefer a subtle, elegant look on the dance floor.</p>

                                    <p>These shoes offer comfort and support with their adjustable fit and stable heel, allowing for smooth, confident movement. The lightweight design ensures ease of motion, making them ideal for long performances or practice sessions.</p>

                                    <p>Suitable for a variety of dance styles, nude-colored shoes are both functional and fashionable. They provide the flexibility and comfort dancers need, while maintaining a timeless, understated elegance.</p>
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
