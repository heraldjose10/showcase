import { motion } from "framer-motion";
import Head from "next/head";

import Layout from "../components/Layout";

const ContactPage = () => (
    <Layout>
        <Head>
            <meta property="og:description" content={'Showcase | Contact'} />
            <meta name="description" content={'Showcase | Contact'} />
            <meta property="twitter:description" content={'Showcase | Contact'} />
        </Head>
        <motion.div
            className='max-w-screen-lg grow-0 mx-auto mt-28 px-10 flex flex-col gap-20'
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0, transition: { duration: .2 } }}
            exit={{ opacity: 0, y: '100%', transition: { duration: .2 } }}
        >

            {/* address section */}
            <section className="flex flex-col gap-6">
                <div className="flex items-end gap-4 w-fit">
                    <h1 className="text-5xl font-extrabold md:text-7xl lg:text-8xl font-Fjalla">Address</h1>
                </div>
                <address className="text-lg md:text-xl font-Noto">
                    Olakkengil House<br></br>
                    Pavaratty P.O<br></br>
                    Thrissur<br></br>
                    Kerala
                </address>
            </section>

            {/* email section */}
            <section className="flex flex-col gap-6">
                <div className="flex items-end gap-4 w-fit">
                    <h1 className="text-5xl font-extrabold md:text-7xl lg:text-8xl font-Fjalla">Email</h1>
                </div>
                <a
                    className="text-lg md:text-xl font-Noto"
                    href="mailto:heraldjose10@gmail.com"
                >
                    heraldjose10@gmail.com
                </a>
            </section>

        </motion.div>
    </Layout>
)

export default ContactPage