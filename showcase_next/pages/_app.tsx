import React from "react";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";

import '../styles/index.scss'

export default function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
        </AnimatePresence>
    )
}