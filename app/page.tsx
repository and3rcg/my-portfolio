/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";

import placeholder from "./assets/img/placeholder.webp"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import MainTechs from "./components/TechList/MainTechs";
import OtherTechs from "./components/TechList/OtherTechs";
import WorkExperience from "./components/WorkExperience/WorkExperience";


export default function Home() {
  return (
  <div className="container flex flex-col gap-y-48">
    {/* introduction */}
    <main>
      <div className="flex flex-col gap-8 lg:gap-0 py-10 justify-items-center lg:flex-row lg:justify-content-center">
        <div className="flex-1 flex flex-col gap-10 self-center px-4">
          <h1 className="text-7xl text-center text-accent-400">Hello World!</h1>
          <p className="text-xl text-justify">
            My name is Anderson Caminha. I am a software developer with 2 years of work experience, 
            primarily working with backend Web development and cloud. Currently, I'm taking a postgraduate 
            software engineering and DevOps course, and there, I have amazing opportunities to not 
            only get to know, but also use many of the most relevant technologies in the market today. 
          </p>
          <p className="text-xl text-justify">
            What drives me forward in this field is the leveraging of computing power, one of mankind's 
            greatest inventions to help people make time for the things that matter most in life, and 
            how most of that can be achieved with problem solving, like a giant puzzle. Also, I love 
            the challenge of constantly having to learn something new, whether it's a new framework 
            or how any process works, really.
          </p>
          <p className="text-xl text-justify">
            For example, imagine if you're hired to code the business logic of a company
            whose product is deeply involved with forests. You'll have to take a crash course on forest
            engineering so you can grasp the concepts and calculations necessary to put together, for
            example, automatically generated spreadsheets with many parameters describing the behavior
            of the trees in a plot of land. Every single row of the files you'll be spewing describe 
            a living being, and that's fascinating for me.
          </p>
        </div>
        <div className="flex-1 self-center">
          <div className="flex flex-col gap-8">
            <Image src={placeholder} alt={"Profile picture"} className="rounded-full size-96 mx-auto"/>
            <div className="flex justify-evenly">
              <Link href={"https://github.com/and3rcg"}><FontAwesomeIcon icon={faGithub} color="foreground" width={40} /></Link>
              <Link href={"https://www.linkedin.com/in/anderson-cg"}><FontAwesomeIcon icon={faLinkedin} color="foreground" width={40} /></Link>
            </div>
          </div>
        </div>
      </div>
    </main>

    {/* tech */}
    <section className="flex flex-col py-8 gap-16">
      <div>
        <MainTechs />
      </div>
      <div>
        <OtherTechs />
      </div>
    </section>

    {/* work experience */}
    <section className="flex flex-col py-8 gap-8">
      <div>
        <WorkExperience />
      </div>
    </section>

    {/* education */}
    <section className="flex flex-col">
      <div>
        <Education />
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="flex flex-col">
      <div>
        <Contact />
      </div>
    </section>
  </div>
  );
}
