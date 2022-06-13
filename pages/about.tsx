import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About Me">
    <div className='w-[1100px] shrink-0 grow-0 mx-auto mt-[100px]'>
      <h1 className='text-8xl font-extrabold'>Herald<br /> Olakkengil</h1>
      <p className='text-2xl my-8'>
        I'm a web developer learning Flask, and React frameworks. This is my portfolio website. I made this webpage using NextJS. I started using React back in 2021. Check out my Github for more projects.
      </p>
      <p className='text-2xl my-8'>
        Feel free to write your feedback to me!
      </p>
    </div>
  </Layout>
)

export default AboutPage
