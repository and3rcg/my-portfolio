/* eslint-disable react/no-unescaped-entities */

"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const Projects = () => {
  type Project = {
    id: number,
    title: string,
    short_description: string,
    long_description: string,
    repo_url: string,
    created_at: string,
  }

  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await fetch('/api/projects', { next: { revalidate: 720 } });
      const data = await res.json();

      setLoading(false);

      if (res.status != 200) {
        alert(data.error);
        return;
      }

      setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-col max-w-full">
        <div className="flex justify-center">
          <h1 className="text-3xl lg:text-5xl text-accent-300 mb-8">My projects</h1>
        </div>
        <div className="mb-8">
          Welcome to my projects! Here I'll showcase some of my work experience, and talk about the process of
          coding these apps, as well as the technologies used to bring them to life.
        </div>
      </div>

      {/* project list */}
      {loading ?
        <div className="flex justify-center text-2xl animate-bounce">
          Loading...
        </div>
      :
        data.map(project => {
          return(
            <div key={project.id} className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
              <div className="flex flex-col align-middle bg-primary-800 border-2 border-accent-300 m-2 cursor-pointer rounded-lg hover:scale-110 duration-300 ease-in-out">
                <Dialog modal={true}>
                  <DialogTrigger>
                    <div className="flex flex-col">
                      <div>
                        <Image className="rounded-lg" src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?cs=srgb&dl=pexels-veeterzy-39811.jpg&fm=jpg" alt={project.title} width={400} height={200}/>
                      </div>
                      <div className="px-4 pt-2 pb-3">
                        <div className="text-xl">{project.title}</div>
                        <div className="text-sm">{project.short_description}</div>
                      </div>
                    </div>
                  </DialogTrigger>
                  {!project.repo_url ?
                      "" 
                  :
                    <>
                      <hr />
                      <a href={project.repo_url} className="w-full text-center" target="_blank">
                        <div className="py-2 flex justify-center">
                          <FontAwesomeIcon icon={faGithub} className="text-3xl" width={50}/><span className="my-auto">View on Github</span>
                        </div>
                      </a>
                    </>
                  }
                  <DialogContent className="bg-secondary-900 min-w-full lg:min-w-[60%]">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription className="whitespace-pre-wrap text-text-200">
                        {project.long_description}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Projects
