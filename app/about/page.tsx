import React from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";

export default function About() {
    return (
        <>
            <Header />
            ABOUT
            <main>
        <div className="mainContainer">
            <div className="mainText">
                <section id="aboutMe" className="aboutMe">
                    <h2>About Us</h2>
                    <p>We are two former dance partners who shared a passion for Latin dancing. After years of performing and competing together, we realized how important the right shoes are for dancers. This led us to start our own dance shoe store, where we could help others find comfortable, stylish shoes that make dancing easier and more fun.
                    </p>
                    <p>
                        Our experience on the dance floor taught us what dancers really need in a shoe—support, comfort, and a touch of style. That’s why we’ve carefully selected shoes that are both beautiful and functional, perfect for every level of dancer. We believe that the right shoes can make all the difference, and we’re excited to share our love for dance through our store!
                    </p>
                </section>

            </div>
            <div>
                <img className="aboutPhoto" src="images/about.jpg" alt="My photo" />
            </div>
        </div>
    </main>
            <Footer />
        </>
    );
}
