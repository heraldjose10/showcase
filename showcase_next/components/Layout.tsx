import React, { ReactNode, useRef, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { FaGripLines } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Heralds Showcase' }: Props) => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMouseMovement = (e) => {
    if (e.target.tagName == 'A') {
      cursor.current.style.height = '60px'
      cursor.current.style.width = '60px'
      cursor.current.style.left = `${e.pageX - 30}px`
      cursor.current.style.top = `${e.pageY - 30}px`
      cursor.current.style.border = 'None'
      cursor.current.style.backgroundColor = '#7be1a0'
    }
    else {
      cursor.current.style.height = '30px'
      cursor.current.style.width = '30px'
      cursor.current.style.left = `${e.pageX - 10}px`
      cursor.current.style.top = `${e.pageY - 10}px`
      cursor.current.style.border = 'solid'
      cursor.current.style.borderColor = '#4ade80'
      cursor.current.style.backgroundColor = 'transparent'
    }
  }

  const cursor = useRef<HTMLDivElement>()

  const listVariants = {
    visible: {
      opacity: 1,
      'z-index': 10,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hidden: {
      opacity: 0,
      'z-index': -100,
      transition: {
        when: "afterChildren"
      }
    }
  };

  const itemVarients = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .1
      }
    },
    hidden: {
      y: -50,
      opacity: 0
    },
  }

  return (
    <div className={`min-h-screen flex flex-col ${menuOpen ? 'max-h-screen overflow-hidden' : ''}`} onMouseMove={handleMouseMovement}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="heraldjose.me" />
        <meta name="twitter:title" content={title} />
        <meta name='twitter:image' content='/thumbnail.png' />
        <meta property="og:image" content="/thumbnail.png" />
        <link rel="icon" href="favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* custom cursor */}
      <div
        className='w-[30px] h-[30px] absolute top-0 left-0 bg-transparent border-4 border-green-400 rounded-full -z-10 transition duration-200'
        ref={cursor}
      >
      </div>

      {/* header */}
      <header className='px-5 py-8 sm:px-10 flex justify-between'>
        <div>
          <Link href='/'>
            <a className='uppercase font-Fjalla text-2xl'>Showcase</a>
          </Link>
        </div>
        <button
          className='lg:hidden flex flex-col justify-center'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='open menu'
        >
          {
            menuOpen
              ? <CgClose className='h-5 w-5 text-white z-20' />
              : <FaGripLines />
          }
        </button>
        <nav className={`gap-16 lg:flex hidden font-Noto`}>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </nav>
        {/* https://codesandbox.io/s/simple-framer-motion-animation-with-styled-components-with-children-8nryz?from-embed=&file=/src/components/List/styles.ts */}
        <motion.ul
          className={`font-Noto absolute opacity-0 z-0 top-0 left-0 flex-col items-center justify-center h-screen w-screen bg-black text-white text-3xl gap-10 flex lg:hidden`}
          animate={menuOpen ? 'visible' : 'hidden'}
          variants={listVariants}
        >
          <motion.li variants={itemVarients}>
            <Link href='/'>Home</Link>
          </motion.li>
          <motion.li variants={itemVarients}>
            <Link href='/projects'>Projects</Link>
          </motion.li>
          <motion.li variants={itemVarients}>
            <Link href='/about'>About</Link>
          </motion.li>
          <motion.li variants={itemVarients}>
            <Link href='/contact'>Contact</Link>
          </motion.li>
        </motion.ul>
      </header>

      {/* content */}
      <div className='grow flex justify-center'>
        {children}
      </div>

      {/* footer */}
      <footer className='pr-5 pl-10 flex justify-end py-8 relative min-h-[152px] font-Noto hover:mt-8 pointer-events-none'>
        <div className='md:flex hover:cursor-pointer p-8 pr-0 sm:pr-8 md:hover:-translate-y-8 md:hover:pt-0 transition group pointer-events-auto'>
          <span className='hidden md:flex'>Follow me</span>
          <ul className='md:hidden flex gap-4 font-semibold md:group-hover:flex md:group-hover:opacity-100 md:absolute md:right-8 md:top-10'>
            <li>
              <a href='https://www.linkedin.com/in/herald-olakkengil-5b47491b3/' target='_blank'>Ln</a>
            </li>
            <li>
              <a href='https://www.instagram.com/heraldjos/' target='_blank'>Ig</a>
            </li>
            <li>
              <a href='https://twitter.com/heraldjose10' target='_blank'>Tw</a>
            </li>
            <li>
              <a href='https://github.com/heraldjose10' target='_blank'>Gh</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Layout
