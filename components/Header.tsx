import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

function Header() {
  const session = false

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4">
      <div className="item-center flex justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src={`https://rb.gy/vsvv2o`}
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a href="/" className="headerLink">
          Product
        </a>
        <a href="/" className="headerLink">
          Explore
        </a>
        <a href="/" className="headerLink">
          Support
        </a>
        <a href="/" className="headerLink">
          Business
        </a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
              5
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <UserIcon className="headerIcon" />
        ) : (
          <UserIcon className="headerIcon" />
        )}
      </div>
    </header>
  )
}

export default Header
