import React, { ReactNode, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Herald\'s Showcase' }: Props) => {

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
        <nav className='gap-16 hidden md:flex flex-row-reverse'>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/'>
            <a>Projects</a>
          </Link>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <Link href='/'>
            <a>Contact</a>
          </Link>
        </nav>
      </header>
      <div className='grow flex'>
        {children}
      </div>
      <footer className='px-10 flex justify-end py-8'>
        <span className='hover:cursor-pointer'>Follow me</span>
      </footer>
    </div>
  )
}

export default Layout
