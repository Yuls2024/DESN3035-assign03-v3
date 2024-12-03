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
            <h4 className="pt-5" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900, fontSize: '20px' }}>
                Surprise
            </h4>
            <VideoPlayer />
            <Footer />
        </>
    );
}
