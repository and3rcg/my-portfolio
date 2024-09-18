import React from "react"

const Education = () => {
  const educationObjects = [
    {
      institution: "University of Fortaleza",
      degree: "Postgraduate course: Specialist in Software Engineering with DevOps",
      year: "2024 (current)"
    },
    {
      institution: "Federal University of Ceará",
      degree: "Bachelor's Degree in Electrical Engineering",
      year: "2014-2021"
    }
  ]
  return (
    <div>
      <div className="flex flex-col gap-8 max-w-full">
        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl text-accent-300 pb-4">Education</h1>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {educationObjects.map((obj, index) => {
          return (
            <div key={index} className="flex flex-col justify-between p-4">
              <div className="text-primary-300 text-xl">{obj.degree}</div>
              <div className="py-2 text-sm text-primary-500">{obj.year}</div>
              <div>{obj.institution}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Education
