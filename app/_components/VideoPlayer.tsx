"use client";

import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.css";
import dynamic from 'next/dynamic';


export default function VideoPlayer() {

    const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

    return (
        <>
            <div className="col-12 my-4 d-flex justify-content-center">
                <ReactPlayer url='https://youtu.be/95y9CalPpPQ' />
            </div>
        </>
    );
}
