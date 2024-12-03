import React from "react";
import Header from "./_components/header";
import Footer from "./_components/footer";
import Flowers01 from "./_components/Flowers01";
import Flowers02 from "./_components/Flowers02";
import Flowers03 from "./_components/Flowers03";
import Flowers04 from "./_components/Flowers04";
import Flowers05 from "./_components/Flowers05";
import Flowers06 from "./_components/Flowers06";
import Flowers07 from "./_components/Flowers07";
import Flowers08 from "./_components/Flowers08";

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
                            <Flowers05 />
                            <Flowers06 /> 
                            <Flowers07 />
                            <Flowers08 />
                           
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
