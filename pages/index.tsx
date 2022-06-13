import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => {

  const handleScroll = (e) => {
    e.preventDefault();
      // try using useref?
    e.target.scrollBy({
      left: e.deltaY < 0 ? -30 : 30,
    });

  }

  return (
    <Layout >
      <div className='grow min-h-full overflow-x-scroll scrollbar-hide'>
        <ul className='flex min-h-full gap-10 text-8xl font-extrabold' onWheel={handleScroll}>
          <li className='px-14 flex items-center justify-center hover:text-green-500'>
            <Link href='/'>
              <a>Projects</a>
            </Link>
          </li>
          <li className='px-14 flex items-center justify-center hover:text-green-500'>
            <Link href='/'>
              <a>Blogs</a>
            </Link>
          </li>
          <li className='px-14 flex items-center justify-center hover:text-green-500'>
            <Link href='/'>
              <a>Resume</a>
            </Link>
          </li>
          <li className='px-14 flex items-center justify-center hover:text-green-500'>
            <Link href='/'>
              <a>Education</a>
            </Link>
          </li>
          <li className='px-14 flex items-center justify-center hover:text-green-500'>
            <Link href='/'>
              <a className='whitespace-nowrap'>Photo Gallery</a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
