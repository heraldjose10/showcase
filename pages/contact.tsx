import Layout from "../components/Layout";

const ContactPage = () => (
    <Layout>
        <div className='w-[1100px] grow-0 mx-auto mt-[100px] px-10 flex flex-col gap-20'>

            {/* address section */}
            <section className="flex flex-col gap-6">
                <div className="flex items-end gap-4 w-fit">
                    <h2 className="text-5xl md:text-8xl font-semibold bg-green-500 text-white animate-grand-reveal">Address</h2>
                </div>
                <address className="text-lg md:text-xl">
                    Olakkengil House<br></br>
                    Pavaratty P.O<br></br>
                    Thrissur<br></br>
                    Kerala
                </address>
            </section>

            {/* email section */}
            <section className="flex flex-col gap-6">
                <div className="flex items-end gap-4 w-fit">
                    <h2 className="text-5xl md:text-8xl font-semibold bg-green-500 text-white animate-grand-reveal">Email</h2>
                </div>
                <a
                    className="text-lg md:text-xl"
                    href="mailto:heraldjose10@gmail.com"
                >
                    heraldjose10@gmail.com
                </a>
            </section>

        </div>
    </Layout>
)

export default ContactPage