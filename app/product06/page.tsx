import React from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";

export default function Product06() {
    return (
        <>
            <Header />

            <main>
                <div className="productItemContainer">
                    <div className="itemContainer">
                        <div className="itemText">
                            <section id="itemEntry01" className="itemEntry">
                                <div><img className="itemPhoto" src="images/shoes06.jpeg" alt="Shoes06 photo" />
                                </div>
                                <div>

                                    <h2>Danica - Women's Latin Dance Shoes</h2>
                                    <h3>$250 CAD</h3>

                                    <p>Danica women’s Latin dance shoes stand out with their striking red sparkly design, perfect for dancers looking to add a bold flair to their performances. The vibrant red color combined with the shimmer of the sparkles creates a show-stopping look, ensuring you’ll catch the eye on any dance floor.</p>

                                    <p>These shoes are not just about style; they also offer exceptional comfort and support. With an adjustable fit and a sturdy heel, Danica shoes provide stability during quick, intricate movements, allowing dancers to perform with confidence. The lightweight build ensures ease of movement, so you can focus on your footwork without feeling weighed down.</p>

                                    <p>Ideal for Latin dance styles such as salsa, samba, or cha-cha, Danica red sparkly shoes bring together fashion and function. Whether you’re performing on stage or practicing in the studio, these shoes give you both the comfort and the flair needed to shine in every routine.</p>
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
