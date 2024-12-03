import React from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";

export default function About() {
    return (
        <>
            <Header />

            <main>
                <div className="mainContainer">
                    <div className="mainText">
                        <section id="aboutMe" className="aboutMe">
                            <h2>About Us</h2>
                            <p>At Floral Essence, I believe that flowers are more than just gifts—they’re heartfelt expressions of love, joy, and connection. With a passion for creating beautiful and unique floral designs, I craft every arrangement with care and creativity, ensuring each piece is as special as the moment it celebrates. From vibrant bouquets to whimsical creations like flower monkeys and edible arrangements, I personally select the freshest blooms and finest ingredients to deliver something truly memorable. Every design reflects my dedication to quality, artistry, and the beauty of nature.
                            </p>
                            <p>
                                As a one-person business, I am deeply committed to providing personalized service and attention to detail. Whether you're celebrating a milestone, surprising someone special, or simply brightening your day, I am here to bring your vision to life with stunning floral creations. Each arrangement is handcrafted with love and care, ensuring a personal touch that sets my work apart. Let me help you make every moment beautiful, one bloom at a time.
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
