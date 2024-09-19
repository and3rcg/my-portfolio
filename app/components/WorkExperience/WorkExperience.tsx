import Link from 'next/link'
import React from 'react'

const WorkExperience = () => {
  const workData = [
    {
      company: "Geplant Forest Technology",
      position: "Backend Systems Development Analyst",
      duration: "2024 - current",
      url: "https://geplant.com.br/",
      activities: [
        "Developing new features in a Django application and a Node.js with Sequelize application",
        "Further expanded internal tools for data analysis and diagnostic for backoffice usage",
        "Setting up containers and Google Cloud infrastructure, as well as setting up automated deployment via serverless",
        "Performed profiling and fine tuning in SQL queries, cutting average query timings by 20%",
      ]
    },
    {
      company: "Vindula Intranet",
      position: "Web Developer",
      duration: "2022 - 2024",
      url: "https://www.vindula.com.br/",
      activities: [
        "Developed new features and maintaned existing backend code",
        "Maintained a satisfaction rate of over 90% while keeping a 24 hour SLA for support tickets",
        "Setting up the infrastructure for dev, staging and production environments",
        "Used Docker Autobuilds and Cloudflare Pages to automate the system's update process",
        "Improved background worker performance by about 50% by optimizing tasks and container structure",
        "Implemented caching in several places to improve navigation speeds by up to 80%",
        "Used Go and Svelte to help create the new version of the company's product from scratch, making decisions about the tech and frameworks used",
        "Trained newly hired developers",
      ]
    }
  ]

  return (
    <div>
      <div className="flex flex-col max-w-full">
        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl text-accent-300 pb-4">Work Experience</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4">
          {workData.map(obj => {
            return (
              <div key={obj.company} className="p-4 flex flex-col">
                <div className="text-primary-300 text-3xl">{obj.position} <span className="py-2 text-primary-500 text-lg">({obj.duration})</span></div>
                <div className="py-2 text-primary-500"><Link href={obj.url} target='_blank'>{obj.company}</Link></div>
                <div className="px-8 mt-2">
                  {obj.activities.map((activity, index) => {
                    return (
                      <li key={index} className="my-1">{activity}</li>
                    )
                  })}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default WorkExperience
