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
        "act1",
        "act2",
        "act3",
      ]
    },
    {
      company: "Vindula Intranet",
      position: "Web Developer",
      duration: "2022 - 2024",
      url: "https://www.vindula.com.br/",
      activities: [
        "act1_2",
        "act2_2",
        "act3_2",
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
      <div className="flex flex-col gap-8">
          {workData.map(obj => {
            return (
              <div key={obj.company} className="p-4 flex flex-col bg-primary-800 rounded-lg drop-shadow-xl">
                <div className="text-primary-300 text-2xl">{obj.position}</div>
                <div className="py-2 text-sm text-primary-500"><Link href={obj.url} target='_blank'>{obj.company}</Link></div>
                <div className="py-2 text-sm text-primary-500">{obj.duration}</div>
                <div className="px-4">
                  {obj.activities.map((activity, index) => {
                    return (
                      <li key={index}>{activity}</li>
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