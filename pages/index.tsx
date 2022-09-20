/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'
import Landing from '@/components/Landing'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Apple Redesign App</title>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_PATH_IMAGES}/favicon.ico`}
        />
      </Head>

      <Header />

      <main className="relative h-[200vh] bg-[#e7ecee]">
        <Landing />
      </main>
    </div>
  )
}

export default Home
