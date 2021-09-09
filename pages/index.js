import { Transition } from '@headlessui/react'

import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-blue-900 to-gray-900">
      <Head>
        <title>SpaceFoxLabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-5xl flex justify-around items-center">
        <img src="/logo.png" className="h-96 w-96 animate-float" />
        <Transition
          show={true}
          enter="transition-opacity duration-700 delay-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div>
            <h1 className="text-6xl font-bold tracking-wide text-gray-50 mb-2">Coming soon...</h1>
            <p className="text-2xl font-light tracking-wider text-gray-300 break-words">Please wait while we are trying to get your <span className="text-pink-600 font-bold">astronomical</span> experience set up</p>
          </div>
        </Transition>
      </div>
    </div>
  )
}
