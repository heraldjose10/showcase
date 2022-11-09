import Image from "next/image";
import Head from "next/head";
import { motion } from 'framer-motion'
import Layout from "../../components/Layout"
import { fetchAPI } from "../../lib/api"

const Gallery = ({ images }) => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            }
        },
        exit: {
            opacity: 0
        }
    }

    const item = {
        hidden: {
            y: '-100px',
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <Layout>
            <Head>
                <meta property="og:description" content={'Showcase | Gallery'} />
            </Head>
            <motion.div
                variants={container}
                initial='hidden'
                animate='show'
                exit='exit'
                className="flex flex-wrap gap-2 justify-center content-start my-auto py-10 w-full max-w-xs sm:max-w-xl md:max-w-4xl md:gap-3"
            >
                {
                    images.map(image => {
                        return (
                            <motion.div
                                variants={item}
                                className="relative w-36 h-36 sm:w-64 sm:h-64 md:w-64 md:h-64 md:border-black md:border-2"
                                key={image.id}
                            >
                                <Image
                                    src={
                                        image.attributes.image.data.attributes.formats.medium ? image.attributes.image.data.attributes.formats.medium.url : image.attributes.image.data.attributes.formats.small.url
                                    }
                                    layout='fill'
                                    className="object-contain"
                                    key={image.id}
                                />
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    const response = await fetchAPI(
        '/gallary-images',
        { populate: '*' }
    )

    return {
        props: { images: response.data }
    }
}

export default Gallery