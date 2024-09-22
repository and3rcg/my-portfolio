/* eslint-disable react/no-unescaped-entities */

"use client";

import React from 'react';


const Projects = () => {
  const projectList = [
    {
      title: "Project 1",
      shortDescription: "My first project",
      githubRepo: "https://github.com/"
    },
    {
      title: "Project 2",
      shortDescription: "My second project",
      githubRepo: "https://github.com/"
    },
    {
      title: "Project 3",
      shortDescription: "My third project",
      githubRepo: "https://github.com/"
    }
  ]

  return (
    <div>
      <div className="flex flex-col max-w-full">
        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl text-accent-300 mb-8">My projects</h1>
        </div>
        <div>
          Welcome to my projects! Here I'll showcase some of my work experience, and talk about the process of
          coding these apps, as well as the technologies used to bring them to life.
        </div>
      </div>

      {/* project list */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        {projectList.map(project => {
          return(
            <div key={project.title} className="flex flex-col align-middle bg-primary-800 border-2 border-accent-300 m-2 cursor-pointer rounded-lg hover:scale-110 duration-300 ease-in-out">
              <div>image</div>
              <div className="my-2">{project.title}</div>
              <div>{project.shortDescription}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
