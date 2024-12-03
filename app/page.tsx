import React from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Shoes08 from "./_components/Shoes08";
import Shoes07 from "./_components/Shoes07";
import Shoes06 from "./_components/Shoes06";
import Shoes05 from "./_components/Shoes05";

import Flowers01 from "./_components/Flowers01";
import Flowers02 from "./_components/Flowers02";
import Flowers03 from "./_components/Flowers03";
import Flowers04 from "./_components/Flowers04";

export default function Page() {
    return (
        <>
            <Header />
            <main>
                <div className="productContainer">
                    <div className="productItems">
                        <div>
                            <h2>Portfolio</h2>
                        </div>
                        <section id="projects" className="projects grid-container">
                            
                            <Flowers01 />
                            <Flowers02 />
                            <Flowers03 />                          
                            <Flowers04 />
                           
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
