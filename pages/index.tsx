/* eslint-disable react/function-component-definition */
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '@/components/Header'

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

      <main>
        <h1 className="font-semibold ">Lets build Apple Redesign</h1>
      </main>
    </div>
  )
}

export default Home
