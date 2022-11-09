import Head from 'next/head'
import { motion } from 'framer-motion'

import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About Me">
    <Head>
      <meta property="og:description" content={'Showcase | About Me'} />
      <meta name="description" content={'Showcase | About Me'} />
      <meta property="twitter:description" content={'Showcase | About Me'} />
    </Head>
    <motion.div
      className='max-w-screen-lg grow-0 mx-auto mt-28 px-10'
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0, transition: { duration: .4 } }}
      exit={{ opacity: 0, y: '100%' }}
    >
      <h1 className='text-5xl font-extrabold md:text-7xl lg:text-8xl font-Fjalla'>Herald<br /> Olakkengil</h1>
      <p className='text-lg my-8 lg:text-2xl font-Noto'>
        I'm a web developer learning <a href='https://flask.palletsprojects.com/en/2.1.x/' className='underline' target='_blank'>Flask</a>, and <a href='https://reactjs.org/' className='underline' target='_blank'>React</a> frameworks. This is my portfolio website. I made this webpage using <a href='https://nextjs.org/' className='underline' target='_blank'>NextJS</a>. I started using React back in 2021. Check out my <a href='https://github.com/heraldjose10' className='underline' target='_blank'>Github</a> for more projects. Follow me on <a href='https://twitter.com/heraldjose10' className='underline' target='_blank'>Twitter</a> and <a href='https://www.linkedin.com/in/herald-olakkengil-5b47491b3/' className='underline' target='_blank'>LinkedIn</a> to connect with me.
      </p>
      <p className='text-lg my-8 lg:text-2xl font-Noto'>
        Feel free to write your feedback to me!
      </p>
    </motion.div>
  </Layout>
)

export default AboutPage
