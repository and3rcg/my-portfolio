import React from 'react'
import Image from 'next/image'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import python from "../../assets/svg/python.svg"
import node from "../../assets/svg/node.svg"
import next from "../../assets/svg/next.svg"
import typescript from "../../assets/svg/typescript.svg"
import docker from "../../assets/svg/docker.svg"
import redis from "../../assets/svg/redis.svg"
import postgresql from "../../assets/svg/postgresql.svg"

const MainTechs = () => {
  const techList = [
    {
      name: 'Python',
      logo: python,
      description: "With 3 years of experience, this is my main programming language. Capable of developing complex web apps using Django, and familiar with libraries such as Pandas, Celery, SQLAlchemy and FastAPI"
    },
    {
      name: 'Node',
      logo: node,
      description: "1 year of experience, developing backend applications with Express, and using Sequelize to communicate with databases"
    },
    {
      name: 'Next.js',
      logo: next,
      description: "Currently with no working experience, but this is my starting point in frontend. This website was made with Next, and I'm already planning the next (no pun intended) projects"
    },
    {
      name: 'Typescript',
      logo: typescript,
      description: "1 year of experience, using it to guarantee robust code with Next, React and Node"
    },
    {
      name: 'Docker',
      logo: docker,
      description: "2 years of experience, writing Compose files for dev/prod environments, optimizing images with multi-stage builds, building, tagging and pushing images."
    },
    {
      name: 'Redis',
      logo: redis,
      description: "Used Redis as a caching backend and message broker for Django apps, as well as some Go systems"
    },
    {
      name: 'PostgreSQL',
      logo: postgresql,
      description: "2 years of experience, capable of fine tuning queries and working with joins and subqueries"
    },
  ]

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <h1 className="text-3xl lg:text-5xl text-accent-200">Main techs</h1>
      </div>
      <div className="flex justify-around items-center p-2">
        {techList.map((tech, index) => {
          return (
            <div key={index} className="flex-none">
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger><Image src={tech.logo} alt={tech.name} width={112} height={112} className="drop-shadow-lg overflow-x-auto size-16 lg:size-28 cursor-pointer hover:-translate-y-2 duration-500"/></TooltipTrigger>
                  <TooltipContent>
                    <div className="max-w-80 whitespace-break-spaces">
                      <p className="text-justify">{tech.description}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainTechs
