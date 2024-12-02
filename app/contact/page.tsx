"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
{/*import ReactPlayer from 'react-player';*/ }
import Header from "../_components/header";
import Footer from "../_components/footer";
import VideoPlayer from "../_components/VideoPlayer";
import ContactMain from "../_components/ContactMain";

export default function Page() {
    return (
        <>
            <Header />
            <ContactMain />
            {/*<h4 className="text-center"> Please contact us by calling: 123-567-8900</h4>*/}
            <VideoPlayer />
            <Footer />
        </>
    );
}
