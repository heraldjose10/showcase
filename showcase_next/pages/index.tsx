import Link from 'next/link'
import { motion } from 'framer-motion'
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { scale: 0 },
    show: { scale: 1 }
  }

  return (
    <Layout >
      <motion.div
        className='grow min-h-full overflow-x-scroll scrollbar-hide transition duration-500'
        ref={containerToScroll}
        transition={{ times: [0, 1], ease: 'easeOut' }}
        exit={{ opacity: 0, y: 5000, scale: 0 }}
      >

        {/* main sections */}
        <motion.ul
          variants={container}
          initial='hidden'
          animate='show'
          className='flex min-h-full lg:gap-10 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold'
          onWheel={handleScroll}
          {...swipeHandlers}
          ref={refPassthrough}

        >
          <motion.li
            variants={item}
            className='px-4 md:px-10 lg:px-14 flex items-center justify-center hover:text-green-500'
          >
            <Link href='/projects'>
              <a>Projects</a>
            </Link>
          </motion.li>
          <motion.li
            variants={item}
            className='px-4 md:px-10 lg:px-14 flex items-center justify-center hover:text-green-500'
          >
            <Link href='/blogs'>
              <a>Blogs</a>
            </Link>
          </motion.li>
          <motion.li
            variants={item}
            className='px-4 md:px-10 lg:px-14 flex items-center justify-center hover:text-green-500'
          >
            <Link href='/resume'>
              <a>Resume</a>
            </Link>
          </motion.li>
          <motion.li
            variants={item}
            className='px-4 md:px-10 lg:px-14 flex items-center justify-center hover:text-green-500'
          >
            <Link href='/'>
              <a>Education</a>
            </Link>
          </motion.li>
          <motion.li
            variants={item}
            className='px-4 md:px-10 lg:px-14 flex items-center justify-center hover:text-green-500'
          >
            <Link href='/gallery'>
              <a className='whitespace-nowrap'>Photo Gallery</a>
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </Layout>
  )
}

export default IndexPage
