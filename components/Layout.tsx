import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Herald\'s Showcase' }: Props) => (
  <div className='min-h-screen flex flex-col'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
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

export default Layout
