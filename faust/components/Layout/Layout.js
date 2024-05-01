import React from 'react';
import Head from 'next/head';
import Script from 'next/script';


export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Rentaly - Multipurpose Vehicle Car Rental Website Template</title>
                <link rel="icon" href="images/icon.png" type="image/gif" sizes="16x16" />
                <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta content="Rentaly - Multipurpose Vehicle Car Rental Website Template" name="description" />
                <meta content="" name="keywords" />
                <meta content="" name="author" />
                <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
                <link href="css/mdb.min.css" rel="stylesheet" type="text/css" id="mdb" />
                <link href="css/plugins.css" rel="stylesheet" type="text/css" />
                <link href="css/style.css" rel="stylesheet" type="text/css" />
                <link href="css/coloring.css" rel="stylesheet" type="text/css" />
                <link id="colors" href="css/colors/scheme-01.css" rel="stylesheet" type="text/css" />
            </Head>
            <div id="wrapper" style={{backgroundSize: "100%", backgroundRepeat: "no-repeat"}}>
                <div className="no-bottom no-top" id="content">
                    {children}
                </div>
            </div>
            <Script src="js/plugins.js" strategy="beforeInteractive"/>
            <Script src="js/designesia.js" strategy="afterInteractive"/>
            <Script src="https://maps.googleapis.com/maps/api/js?key=your_api_key&amp;libraries=places" strategy="afterInteractive" />
        </>
    );
}
