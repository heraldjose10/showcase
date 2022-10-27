import Image from "next/image"
import { motion } from "framer-motion"

const Gallery = ({images}) => {

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
        < motion.div
            variants={container}
            initial='hidden'
            animate='show'
            exit='exit'
            className="sm:hidden flex flex-wrap gap-2 justify-center content-start my-auto py-10 w-full max-w-xs sm:max-w-xl md:max-w-4xl md:gap-3"
        >
            {
                images.map((image, index) => {
                    return (
                        <motion.div
                            variants={item}
                            className="relative w-36 h-36 sm:w-64 sm:h-64 md:w-64 md:h-64 md:border-black md:border-2"
                            key={index}
                        >
                            <Image
                                src={image.link}
                                layout='fill'
                                className="object-contain"
                            />
                        </motion.div>
                    )
                })
            }
        </motion.div >
    )
}

export default Gallery