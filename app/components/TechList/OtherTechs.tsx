import React from 'react'
import Image from 'next/image'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import go from "../../assets/svg/go.svg"
import svelte from "../../assets/svg/svelte.svg"
import kubernetes from "../../assets/svg/kubernetes.svg"
import googleCloud from "../../assets/svg/google-cloud.svg"
import grafana from "../../assets/svg/grafana.svg"
import prometheus from "../../assets/svg/prometheus.svg"
import sentry from "../../assets/svg/sentry.svg"

const OtherTechs = () => {
  const techList = [
    {
      name: 'Go',
      logo: go,
      description: "Helped develop a role-based access control application. Used Fiber, Asynq, Redis and GORM, using the Object Manager design pattern"

    },
    {
      name: 'Svelte',
      logo: svelte,
      description: "Helped develop from scratch a frontend application with TypeScript, establishing communication with a backend and creating a responsive multi-themed app"

    },
    {
      name: 'Kubernetes',
      logo: kubernetes,
      description: "Created deployments and services for multiple apps in personal/school projects, currently studying on integrating it with Google Cloud Platform"

    },
    {
      name: 'Google Cloud',
      logo: googleCloud,
      description: "Created Compute instances, worked with secrets, deployed serverless applications with triggers, set up Google Cloud SQL and currently studying GKE"

    },
    {
      name: 'Grafana',
      logo: grafana,
      description: "Used alongside Prometheus to generate visualizations of the generated metrics"

    },
    {
      name: 'Prometheus',
      logo: prometheus,
      description: "Used it in personal and school projects for observability, implemented both in Python and Go"

    },
    {
      name: 'Sentry',
      logo: sentry,
      description: "Used it to track errors and help quickly debug Python applications"
    },
  ]

  return (
    <div className="flex flex-col gap-8 max-w-full">
      <div className="flex justify-center">
        <h1 className="text-3xl lg:text-5xl text-accent-300">Other techs</h1>
      </div>
      <div className="flex gap-4 justify-around items-center">
        {techList.map((tech, index) => {
          return (
            <div key={index} className="flex-none">
              <TooltipProvider>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger><Image src={tech.logo} alt={tech.name} width={112} height={112} className="drop-shadow-lg overflow-x-auto size-16 lg:size-28 cursor-pointer hover:-translate-y-2 duration-500"/></TooltipTrigger>
                  <TooltipContent className=" p-4 border-1 border-accent-200 bg-secondary-600 text-text-100">
                    <div className="max-w-80 whitespace-break-spaces">
                      <p>{tech.description}</p>
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

export default OtherTechs
