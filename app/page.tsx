import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
  <div>
  <Head>
    <title>Murials Porfolio</title>
  </Head>
  <main className="bg-white px-10">
 <section className="min-h-screen">
  <nav className="py-10 mb-12 flex justify-between">
    <h1 className="text-xl">Developed By Murial</h1>
    <ul className="flex items-center">
      <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
      <li><a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume </a></li>
    </ul>
  </nav>
 <div className="text-center p-10 py-10">
  <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">Murial Anindo</h2>
  <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Software Developer and Coffee Lover</h3>
  <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id massa sed urna porta rutrum nec eget purus. 
    Nunc et massa lorem. Etiam nec tempor ligula. Nullam vel hendrerit metus. Nunc nibh risus, eleifend non tincidunt in, elementum et nisi. 
    Maecenas pharetra arcu at risus malesuada volutpat. 
    Sed lacinia et risus dapibus molestie.</p>
 </div>
 </section>
  </main>
  </div>
  );
}
