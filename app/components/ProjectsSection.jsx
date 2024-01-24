'use client';
import React, { useState } from 'react';
import {Tabs, TabsList, TabsContent, TabsTrigger} from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: '/work/projectImage.png',
    name: 'Comming Soon',
    description: "Coming Soon",
    link:"/",
    category: "Website",
  },
  {
    image: '/work/projectImage.png',
    name: 'Comming Soon',
    description: "Coming Soon",
    link:"/",
    category: "Website",
  },
  {
    image: '/work/projectImage.png',
    name: 'Comming Soon',
    description: "Coming Soon",
    link:"/",
    category: "Mobile",
  },
]

//removes category duplicate
const uniqueCategories =[
  'All projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, SetCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('All projects');

  const filteredProjects = projectData.filter((project) => {
     return category === 'All projects'
     ? project
     : project.category === category;
  });

  return (
    <section id="projects" className="min-h-screen pt-12">
      <div className="relative container mx-auto">
         <h2 className="relative section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
          
          <Tabs defaultValue={category} className="mb-24 xl:mb-48"> 
             <TabsList className='w-[500px] grid h-full md:grid-cols-3 lg:max-w-{740px] mb-12 mx-auto md:border dark:border-none'>
              {categories.map((category, index) => {
                 return(
                  <TabsTrigger 
                  onClick={() => setCategory(category)}
                  value={category}
                  key = {index}
                  className='capitalize w-[162px] md:w-auto'
                  >{category}</TabsTrigger>
                 ) 
              })}
             
             </TabsList>
              
              <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {filteredProjects.map((project, index) => {
                  return (
                    <TabsContent value={category} key = {index}>
                      <ProjectCard project = {project}/>
                    </TabsContent>
                  )
                })}
              </div>



          </Tabs>
      </div>
      </section>
  )
};

export default Projects;