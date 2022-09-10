import Link from 'next/link'
import { useRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import Layout from '../components/Layout'

const IndexPage = () => {

  const containerToScroll = useRef<HTMLDivElement>(null)
  const containerToSwipe = useRef<HTMLUListElement>(null)

  const swipeHandlers = useSwipeable({
    onSwipeStart: (event) => {
      if (event.dir == 'Down') {
        containerToScroll.current.scrollBy({
          left: 150,
        });
      }
      else if (event.dir == 'Up') {
        containerToScroll.current.scrollBy({
          left: -150
        })
      }
    }
  })

  const handleScroll = (e) => {
    e.preventDefault();

    containerToScroll.current.scrollBy({
      left: e.deltaY < 0 ? -30 : 30,
    });
  }

  const refPassthrough = (el) => {
    // call useSwipeable ref prop with el
    swipeHandlers.ref(el);

    // set myRef el so you can access it yourself
    containerToSwipe.current = el;
  }

  return (
    <Layout >
      <div
        className='grow min-h-full overflow-x-scroll scrollbar-hide transition duration-500'
        ref={containerToScroll}
      >
        
        {/* main sections */}
        <ul
          className='flex min-h-full lg:gap-10 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold'
          onWheel={handleScroll}
          {...swipeHandlers}
          ref={refPassthrough}

        >
          <li className='px-4 md:px-10 lg:px-14 flex items-center justify-center hover:text-green-500'>
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li className='px-4 md:px-10 lg:px-14 flex items-center justify-center hover:text-green-500'>
            <Link href='/'>
              <a>Blogs</a>
            </Link>
          </li>
          <li className='px-4 md:px-10 lg:px-14 flex items-center justify-center hover:text-green-500'>
            <Link href='/resume'>
              <a>Resume</a>
            </Link>
          </li>
          <li className='px-4 md:px-10 lg:px-14 flex items-center justify-center hover:text-green-500'>
            <Link href='/'>
              <a>Education</a>
            </Link>
          </li>
          <li className='px-4 md:px-10 lg:px-14 flex items-center justify-center hover:text-green-500'>
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
