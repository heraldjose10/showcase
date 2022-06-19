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

const MotionLink = motion(Link)

const Layout = ({ children, title = 'Herald\'s Showcase' }: Props) => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMouseMovement = (e) => {
    if (e.target.tagName == 'A') {
      cursor.current.style.height = '60px'
      cursor.current.style.width = '60px'
      cursor.current.style.left = `${e.clientX - 30}px`
      cursor.current.style.top = `${e.clientY - 30}px`
      cursor.current.style.border = 'None'
      cursor.current.style.backgroundColor = '#7be1a0'
    }
    else {
      cursor.current.style.height = '30px'
      cursor.current.style.width = '30px'
      cursor.current.style.left = `${e.clientX - 10}px`
      cursor.current.style.top = `${e.clientY - 10}px`
      cursor.current.style.border = 'solid'
      cursor.current.style.borderColor = '#4ade80'
      cursor.current.style.backgroundColor = 'transparent'
    }
  }

  const cursor = useRef<HTMLDivElement>()

  const item = {
    start: {
      y: -10,
      // opacity: 0
    },
    end: i => {
      // console.log(i);
      return {
        y: 0,
        // opacity: 1,
        transition: {
          duration: .5,
          delay: i
        }
      }
    },
    exit: {
      y: -10,
      // opacity: 0
    },
    transition: {
      duration: 1
    }
  }

  return (
    <div className='min-h-screen flex flex-col' onMouseMove={handleMouseMovement}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        className='w-[30px] h-[30px] absolute top-0 left-0 bg-transparent border-4 border-green-400 rounded-full -z-10 transition duration-200'
        ref={cursor}
      >
      </div>
      <header className='py-8 px-10 flex justify-between'>
        <div>
          <Link href='/'>
            <a className='uppercase'>Showcase</a>
          </Link>
        </div>
        <button
          className='lg:hidden flex flex-col justify-center'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {
            menuOpen
              ? <CgClose className='h-5 w-5 text-white z-10' />
              : <FaGripLines />
          }

        </button>
        {/* nav bar --refactor for better animation */}
        <motion.nav
          initial={{ backgroundColor: 'transparent' }}
          animate={{ backgroundColor: menuOpen ? 'black' : '' }}
          className={`gap-16 text-white text-2xl font-bold absolute top-0 left-0 flex-col h-screen w-screen items-center justify-center ${menuOpen ? 'flex' : 'hidden'} lg:flex lg:static lg:text-black lg:flex-row lg:h-fit lg:w-fit lg:text-base lg:font-medium transition-colors`}
        >
          <MotionLink href='/' custom={1} initial='start' animate={menuOpen?'end':'exit'} variants={item} className='transition'>
            <a>Home</a>
          </MotionLink>
          <MotionLink href='/' custom={2} initial='start' animate={menuOpen && 'end'} variants={item}>
            <a>Projects</a>
          </MotionLink>
          <MotionLink href='/about' custom={3} initial='start' animate={`${menuOpen && 'end'}`} variants={item}>
            <a>About</a>
          </MotionLink>
          <MotionLink href='/' custom={4} initial='start' animate={`${menuOpen && 'end'}`} variants={item}>
            <a>Contact</a>
          </MotionLink>
        </motion.nav>
      </header>
      <div className='grow flex'>
        {children}
      </div>
      <footer className='px-10 flex justify-end py-8'>
        <span className='hidden md:flex hover:cursor-pointer'>Follow me</span>
        <ul className='md:hidden flex gap-4 font-semibold'>
          <li>
            <a href=''>Ln</a>
          </li>
          <li>
            <a href=''>Ig</a>
          </li>
          <li>
            <a href=''>Yt</a>
          </li>
          <li>
            <a href=''>Gh</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout
