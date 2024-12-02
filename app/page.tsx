import React from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Shoes08 from "./_components/Shoes08";
import Shoes07 from "./_components/Shoes07";
import Shoes06 from "./_components/Shoes06";
import Shoes05 from "./_components/Shoes05";
import Shoes04 from "./_components/Shoes04";
import Shoes03 from "./_components/Shoes03";
import Shoes02 from "./_components/Shoes02";
import Shoes01 from "./_components/Shoes01";

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
                            <Shoes01 />
                            <Shoes02 />
                            <Shoes03 />
                            <Shoes04 />
                            <Shoes05 />
                            <Shoes06 />
                            <Shoes07 />
                            <Shoes08 />
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
