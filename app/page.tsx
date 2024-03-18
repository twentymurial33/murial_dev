"use client"

import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import web1 from "../public/Murial.jpg";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Developed by Murial</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              
               >
              <Link href="/Resume.pdf" />
              <button>Resume</button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Murial Anindo
            </h2>
          <ReactTyped
          className="typed-text text-2xl py-2 dark:text-white md:text-3xl"
          strings={["Aspiring FullStack Developer", "Coffee Lover", "Bulldog Mom","CrossFitter"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <Link href="https://github.com/twentymurial33">
            <button> <AiFillGithub /></button>
          </Link>
          <Link href="https://www.linkedin.com/in/murial-anindo/">
            <button>  <AiFillLinkedin /> </button>
          </Link>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
               <Image src={web1} alt="murials" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white " style={{textAlign:"center"}}>Software Projects</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <Link href="https://murialsmenu.netlify.app/">
            <button className="text-teal-600 text-lg font-medium pt-8 pb-2 bg-teal-300 rounded-md">
                 Murials Menu </button>
            </Link>
              <p className="py-2">
                Users can easily explore, organize, and edit their culinary experiences, 
               ensuring that no delightful dish is forgotten.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I  Used</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">NodeJs</p>
              <p className="text-gray-800 py-1">Prisma</p>
              <p className="text-gray-800 py-1">PostgreSQL</p>
              <p className="text-gray-800 py-1">StyledComponents</p>
              <p className="text-gray-800 py-1">Cloudinary API</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                <Link href="https://github.com/twentymurial33/fitness_pal">
            <button className="text-teal-600 text-lg font-medium pt-8 pb-2 bg-teal-300 rounded-md">
                 Fitness Pal </button>
            </Link>
       
              <p className="py-2">
                Fitness Enthusiasts can track their daily workouts and create customized workout plans.
              </p>
              <h4 className="py-4 text-teal-600">Technologies I  Used</h4>
              <p className="text-gray-800 py-1">NextJS</p>
              <p className="text-gray-800 py-1">Prisma</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">PostgreSQL</p>
              <p className="text-gray-800 py-1">StyledComponents</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}