import Head from "next/head";
import Navbar from "../components/navbar";

import Link from "next/link";
import {} from "@heroicons/react/outline";
import { FaGithub, FaDev, FaReact } from "react-icons/fa";
import { SiFlutter, SiRust } from "react-icons/si";
import axios from "axios";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  let repos = await axios.get(
    "https://api.github.com/users/arcticspacefox/repos",
    {
      auth: "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",
    }
  );

  return {
    props: {
      repos: repos.data.length,
    },
  };
}

export default function Home({ repos }) {
  const [visited, setVisited] = useState(0);

  useEffect(() => {
    fetch("/api/visited");
    let re = new RegExp("visited" + "=([^;]+)");
    setVisited(re.exec(document.cookie)[1] ?? 0);
  }, []);

  return (
    <div className="bg-[#00111A]">
      <Head>
        <title>SpaceFoxLabs</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className="flex flex-col">
        <Navbar />
        <div className="px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          {/* Header Section */}
          <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 flex flex-col justify-center">
            <Image
              src="/img/logo.png"
              className="w-60 md:w-96 mx-auto md:mx-0"
            />
            <div className="mx-auto md:mx-0">
              <h1 className="text-gray-50 text-4xl md:text-6xl font-semibold tracking-wide">
                Hi I'm a <span className="text-orange-600">Developer</span>
              </h1>
              <p className="text-gray-500 mt-2 lg:mt-4 md:text-lg max-w-xl tracking-wide text-justify">
                My name is Alexander, I am a space enthusiast and developer.
                Currently, I study computer science at the{" "}
                <Link href="https://www.uni-rostock.de/en/">
                  <span className="text-orange-600 hover:text-orange-500 hover:underline font-medium cursor-pointer">
                    University of Rostock
                  </span>
                </Link>
                . My goal is to make the world easier to use and stunning as the
                night sky with its shining stars.
              </p>
              <div className="max-w-xl md:max-w-none grid grid-cols-2 md:grid-cols-1">
                <div className="mt-2 lg:mt-4 flex space-x-4">
                  <p className="bg-orange-600 hover:bg-orange-500 text-white px-3 py-2 rounded-md text-sm font-semibold cursor-pointer">
                    Get in Contact
                  </p>
                  <p className="hidden md:block bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white px-3 py-2 rounded-md text-sm font-semibold cursor-pointer">
                    Read more
                  </p>
                </div>
                <div className="justify-self-end md:justify-self-auto mt-4 md:mt-8 lg:mt-12 text-gray-50 flex space-x-4">
                  <Link href="https://github.com/arcticspacefox/">
                    <FaGithub
                      size={"1.4em"}
                      className="cursor-pointer hover:text-orange-500"
                    />
                  </Link>
                  <Link href="https://dev.to/arcticspacefox/">
                    <FaDev
                      size={"1.4em"}
                      className="cursor-pointer hover:text-orange-500"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-12 lg:mt-24 grid grid-cols-2 md:grid-cols-4 md:divide-x gap-4 text-gray-400 divide-gray-700">
            <div>
              <h1 className="text-white font-bold font-mono text-4xl text-center">
                <CountUp
                  start={0}
                  end={repos ?? 0}
                  duration={2.75}
                  useEasing={true}
                />
              </h1>
              <p className="text-center">Repositories</p>
            </div>
            <div>
              <h1 className="text-white font-bold font-mono text-4xl text-center">
                <CountUp
                  start={0}
                  end={
                    new Date(
                      Date.now() - new Date("07/02/2000")
                    ).getUTCFullYear() - 1970
                  }
                  duration={2.75}
                  useEasing={true}
                />
              </h1>
              <p className="text-center">Years old</p>
            </div>
            <div>
              <h1 className="text-white font-bold font-mono text-4xl text-center">
                <CountUp
                  start={0}
                  end={visited}
                  duration={2.75}
                  useEasing={true}
                />
              </h1>
              <p className="text-center">Times you looked at this</p>
            </div>
            <div>
              <h1 className="text-white font-bold font-mono text-4xl text-center">
                <CountUp
                  start={0}
                  end={4242}
                  duration={2.75}
                  useEasing={true}
                />
              </h1>
              <p className="text-center">Cups of Coffee</p>
            </div>
          </div>
        </div>

        {/* Learning */}
        <section id="learning" className="mx-4">
          <div className="max-w-5xl mx-auto mt-12 md:mt-24">
            <h1 className="text-gray-50 text-3xl font-semibold tracking-wide">
              Currently Learning
            </h1>
          </div>
          <div className="max-w-5xl mx-auto mt-2 md:mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 text-gray-100 rounded-lg px-3 py-2">
              <div className="my-2 flex justify-center">
                <FaReact size={"6em"} className="text-blue-500" />
              </div>
              <h1 className="text-2xl text-center font-semibold font-mono">
                NextJs
              </h1>
              <p className="mt-2 text-justify text-gray-400">
                NextJs enables high performance ServerSideRendered Web Apps and
                optimized sites for a faster web
              </p>
            </div>
            <div className="bg-gray-800 text-gray-100 rounded-lg px-3 py-2">
              <div className="my-2 flex justify-center">
                <SiFlutter size={"6em"} className="text-cyan-600" />
              </div>
              <h1 className="text-2xl text-center font-semibold font-mono">
                Flutter
              </h1>
              <p className="mt-2 text-justify text-gray-400">
                Flutter is a high performance ui framework written in dart. It
                enables a single codebase to be compiled for iOS and Android.
                Web, Tv, ... support are coming too.
              </p>
            </div>
            <div className="bg-gray-800 text-gray-100 rounded-lg px-3 py-2">
              <div className="my-2 flex justify-center">
                <SiRust size={"6em"} className="text-orange-600" />
              </div>
              <h1 className="text-2xl text-center font-semibold font-mono">
                Rust
              </h1>
              <p className="mt-2 text-justify text-gray-400">
                Rust is a language that promises to eliminate memory bugs in low
                level Programming, while still providing us with speed. Rust is
                used in many Applications today as in the Firefox browser,
                NextJs compiler, ...
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="max-w-5xl mx-auto mt-12 mb-12 md:mt-18 grid grid-cols-2">
            <div>
              <h1 className="text-gray-50 text-3xl font-semibold tracking-wide">
                Want to get in contact
              </h1>
              <div className="flex justify-center">
                <Image src="/img/planet.png" className="w-60 mt-6" />
              </div>
            </div>
            <div className="rounded-lg bg-gray-800 transition-all px-3 py-3 grid grid-cols-1 items-center">
              <form method="POST" action="https://formspree.io/f/xyyozogp">
                <div className="flex gap-2 mb-2">
                  <input
                    name="first"
                    required="true"
                    className="form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-300
                              bg-gray-800 bg-clip-padding
                              border border-solid border-gray-700
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-300 focus:border-orange-600 focus:outline-none"
                    placeholder="John"
                  />
                  <input
                    name="last"
                    required="true"
                    className="form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-300
                              bg-gray-800 bg-clip-padding
                              border border-solid border-gray-700
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-300 focus:border-orange-600 focus:outline-none"
                    placeholder="Doe"
                  />
                </div>
                <input
                  name="email"
                  required="true"
                  className="form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-300
                              bg-gray-800 bg-clip-padding
                              border border-solid border-gray-700
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-300 focus:border-orange-600 focus:outline-none"
                  placeholder="john.doe@testmail.org"
                  type="email"
                />
                <div className="mt-2 flex justify-between">
                  <p className="text-gray-500 px-3 py-1.5 align-middle">
                    I will contact you back
                  </p>
                  <button
                    type="submit"
                    className="px-3 py-1.5 rounded inline-block bg-orange-600 hover:bg-orange-500 text-gray-100"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
