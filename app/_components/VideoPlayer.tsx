"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from 'react-player';


export default function VideoPlayer() {
    return (
        <>
            <div className="col-12 my-4 d-flex justify-content-center">
                <ReactPlayer url='https://youtu.be/95y9CalPpPQ' />
            </div>
        </>
    );
}
