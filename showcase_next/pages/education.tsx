import Image from "next/image"
import { motion } from "framer-motion"
import Layout from "../components/Layout"

import { educationDetails } from '../data/education'

const Education = () => {

    const container = {
        'start': { opacity: 0 },
        'final': {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: '.5'
            }
        },
        'exit': { opacity: 0 }
    }

    const item = {
        'start': {
            y: '-200px',
            opacity: 0
        },
        'final': {
            opacity: 1,
            y: '0px'
        }
    }

    return (
        <Layout>
            <motion.section
                variants={container}
                initial='start'
                animate='final'
                exit='exit'
                className="flex gap-6 pt-6"
            >
                {
                    educationDetails.map(edu => (
                        <motion.div
                            variants={item}
                            className="relative h-[70vh] w-[40vw] md:w-[30vw] lg:w-[20vw]"
                            key={edu.name}
                        >
                            <Image
                                className="object-cover"
                                src={edu.image}
                                layout='fill'
                            />
                        </motion.div>
                    ))
                }
            </motion.section>
        </Layout>
    )
}

export default Education