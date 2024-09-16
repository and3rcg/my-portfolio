import React from "react"

const Education = () => {
  const educationObjects = [
    {
      institution: "University of Fortaleza",
      degree: "Postgraduate course: Software Engineering with DevOps",
      year: "2024 (current)"
    },
    {
      institution: "Federal University of Ceará",
      degree: "Bachelor's in Electrical Engineering",
      year: "2014-2021"
    }
  ]
  return (
    <div>
      <div className="flex flex-col gap-8 max-w-full">
        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl text-accent-200">Education</h1>
        </div>
      </div>
      <div className="flex flex-col">
        {educationObjects.map((obj, index) => {
          return (
            <div key={index} className="flex flex-col justify-between items-center">
              <div className="text-accent-400">{obj.degree}</div>
              <div>{obj.year}</div>
              <div>{obj.institution}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Education
