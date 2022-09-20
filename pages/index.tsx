/* eslint-disable react/function-component-definition */
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Tab } from '@headlessui/react'
import Header from '@/components/Header'
import Landing from '@/components/Landing'
import { fetchCategories } from '@/utils/fetchCategories'

interface Props {
  categories: Category[]
}

const Home = ({ categories }: Props) => {
  console.log(categories)

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
      <section className="relative z-40 mt-[-100vh] min-h-screen bg-[#1b1b1b] ">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>
          <Tab.Group>
            <Tab.List>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories()
  return {
    props: {
      categories,
    },
  }
}
