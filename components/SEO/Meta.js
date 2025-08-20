import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>Mizanur Portfolio - Developer Mode</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Mizanur Portfolio - Developer Mode" />
            <meta name="description"
                content="Mizanur's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Mizanur" />
            <meta name="keywords"
                content="mizanur, mizanur's portfolio, mizanur linux, ubuntu portfolio, mizanur portfolio,mizanur computer, mizanur, mizanur ubuntu, mizanur ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/favicon.ico" />
            /* Schema.org for Google */
            <meta itemProp="name" content="Mizanur Portfolio - Developer Mode" />
            <meta itemProp="description"
                content="Mizanur's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta itemProp="image" content="images/logos/favicon.ico" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Mizanur Portfolio - Developer Mode" />
            <meta name="twitter:description"
                content="Mizanur's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="twitter:site" content="mizanur" />
            <meta name="twitter:creator" content="mizanur" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="Mizanur Portfolio - Developer Mode" />
            <meta name="og:description"
                content="Mizanur's Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="og:image" content="images/logos/logo_1024.png" />
            <meta name="og:url" content="https://mizanur.in/" />
            <meta name="og:site_name" content="Mizanur Personal Portfolio Dev mode" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/favicon.ico" />
            <link rel="apple-touch-icon" href="images/logos/favicon.ico" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
