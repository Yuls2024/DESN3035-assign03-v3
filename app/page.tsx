import React from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <div className="productContainer">
                    <div className="productItems">
                        <div>
                            <h2>Dance Shoes</h2>
                        </div>
                        <section id="projects" className="projects grid-container">
                            {/* Shoes 1 */}
                            <div className="projectCard">
                                <a href="./product01">
                                    <img
                                        src="images/shoes01.jpeg"
                                        alt="Silver Dance shoes"
                                    />
                                    <h6>Silver - Women's Latin Dance Shoes</h6>
                                    <p>$227 CAD</p>
                                </a>
                            </div>
                            {/* Shoes 2 */}
                            <div className="projectCard">
                                <a href="./product02">
                                    <img
                                        src="images/shoes02.jpeg"
                                        alt="Black Dance shoes"
                                    />
                                    <h6>Olivia - Women's Latin Dance Shoes</h6>
                                    <p>$275 CAD</p>
                                </a>
                            </div>
                            {/* Shoes 3 */}
                            <div className="projectCard">
                                <a href="./product03">
                                    <img
                                        src="images/shoes03.jpeg"
                                        alt="Magenta Dance shoes"
                                    />
                                    <h6>Fuchsia - Women's Latin Dance Shoes</h6>
                                    <p>$235 CAD</p>
                                </a>
                            </div>
                            {/* Shoes 4 */}
                            <div className="projectCard">
                                <a href="./product04">
                                    <img
                                        src="images/shoes04.jpeg"
                                        alt="Nude Dance shoes"
                                    />
                                    <h6>Bacall - Women's Latin Dance Shoes</h6>
                                    <p>$200 CAD</p>
                                </a>
                            </div>
                            {/* Shoes 5 */}
                            <div className="projectCard">
                                <a href="./product05">
                                    <img
                                        src="images/shoes05.jpeg"
                                        alt="Gold Dance shoes"
                                    />
                                    <h6>Rose - Women's Latin Dance Shoes</h6>
                                    <p>$150 CAD</p>
                                </a>
                            </div>
                            {/* Shoes 6 */}
                            <div className="projectCard">
                                <a href="./product06">
                                    <img
                                        src="images/shoes06.jpeg"
                                        alt="Red Dance shoes"
                                    />
                                    <h6>Danica - Women's Latin Dance Shoes</h6>
                                    <p>$250 CAD</p>
                                </a>
                            </div>
                            {/* Shoes 7 */}
                            <div className="projectCard">
                                <a href="./product07">
                                    <img
                                        src="images/shoes07.jpeg"
                                        alt="Bronze Dance shoes"
                                    />
                                    <h6>Jeannie - Women's Latin Dance Shoes</h6>
                                    <p>$195 CAD</p>
                                </a>
                            </div>
                            {/* Shoes 8 */}
                            <div className="projectCard">
                                <a href="./product08">
                                    <img
                                        src="images/shoes08.jpeg"
                                        alt="Black Dance shoes"
                                    />
                                    <h6>Boots - Women's Latin Dance Shoes</h6>
                                    <p>$210 CAD</p>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
