import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { IoMdArrowRoundBack } from 'react-icons/io'

import Layout from "../components/Layout"
import { useMediaQuery } from '../hooks/useMediaQuery'

import { educationDetails } from '../data/education'

const Education = () => {

    const [selected, setSelected] = useState(false)
    const [selectedId, setSelectedId] = useState<number | null>()

    const isSmall: boolean = useMediaQuery('(max-width: 480px)')

    const animateX = isSmall ? 0 : -50

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
                className="flex max-w-[100vw] gap-6 pt-6 items-center"
            >
                {
                    educationDetails.map(edu => (
                        <>
                            <motion.div
                                onClick={() => {
                                    setSelected(true)
                                    setSelectedId(edu.id)
                                }}
                                variants={item}
                                animate={{
                                    x: selected && selectedId === edu.id ? animateX : 0,
                                }}
                                className={`relative h-[70vh] w-[40vw] md:w-[30vw] lg:w-[20vw] ${selected && selectedId !== edu.id ? 'hidden' : ''}`}
                                key={edu.id}
                            >
                                <Image
                                    className="object-cover"
                                    src={edu.image}
                                    layout='fill'
                                />
                            </motion.div>
                            {
                                selected && selectedId === edu.id ? (
                                    (
                                        <motion.div
                                            className="w-[150px] md:w-[400px] flex flex-col"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            <h1 className="font-bold text-2xl font-Fjalla">{edu.name}</h1>
                                            <p className="font-Noto">{`${edu.start.toUpperCase()} - ${edu.end.toUpperCase()}`}</p>
                                            <p className="font-semibold font-Noto">{edu.degree}</p>
                                            <a
                                                className="grow-0 md:h-5 md:w-5 mt-2 hover:cursor-pointer max-w-full"
                                                onClick={() => {
                                                    setSelected(false)
                                                    setSelectedId(null)
                                                }}
                                            >
                                                <IoMdArrowRoundBack className="h-7 w-7 hover:scale-150" />
                                            </a>
                                        </motion.div>
                                    )
                                ) : ''
                            }
                        </>
                    ))
                }
            </motion.section>
        </Layout>
    )
}

export default Education