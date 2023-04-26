import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Persons from '../components/Persons'

const Home: NextPage = () => {
  return (
    <div className={'w-full h-full flex flex-row p-5'}>
      <Persons />
    </div>
  )
}

export default Home
