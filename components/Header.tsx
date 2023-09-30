import Image from 'next/image'
import React from 'react'
import header from '../assets/header-main.jpg'
import headerMobile from '../assets/header-main-mobile.jpg'
import Link from 'next/link'
const Header = () => {
  return (
    <section className='w-full'>
      <Link href="/">
      <Image 
      className='hidden sm:block'
      src={header}
      // src={IMAGES_BTS.btsPage.low}
      width={2140}
      height={700}
      alt="bts"
      priority
      placeholder="blur"
      layout="responsive"
      // blurDataURL={imageBlur}
      />
      <Image 
      className='sm:hidden'
      src={headerMobile}
      // src={IMAGES_BTS.btsPage.low}
      width={2140}
      height={700}
      alt="bts"
      priority
      placeholder="blur"
      layout="responsive"
      // blurDataURL={imageBlur}
      />
      </Link>
    </section>
  )
}

export default Header