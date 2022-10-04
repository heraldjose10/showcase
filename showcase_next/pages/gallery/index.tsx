import Image from "next/image";
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
            <motion.div
                variants={container}
                initial='hidden'
                animate='show'
                exit='exit'
                className="flex flex-wrap gap-2 justify-center content-start my-auto py-10 w-full max-w-[900px] md:gap-3"
            >
                {
                    images.map(image => {
                        return (
                            <motion.div
                                variants={item}
                                className="relative w-[calc(50vw-4px)] h-[calc(50vw-4px)] md:w-[270px] md:h-[270px] md:border-black md:border-2"
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