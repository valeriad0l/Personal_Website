"use client";
import React from 'react';
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Briefcase, GraduationCap, Laptop} from 'lucide-react';
import { StarsCanvas } from "../components/canvas/Stars";

import ComputersCanvas from "./canvas/ComputersCanvas";

const educationData = [
   {
      title: 'education',
      data: [
         {
            university: 'Concordia University, Montreal QC',
            qualification: 'Bachelor of Engineering – Software Engineering (Co-op)',
            years: '2021-2025 (Expected)',
         },
         {
            university: 'Vanier College, Saint-Laurent QC',
            qualification: 'DEC in Pure and Applied Sciences',
            years: '2019-2021',
         },
         {
            university: 'Collège Saint-Louis, Lachine QC',
            qualification: 'DES, SÉBIQ, IB MYP',
            years: '2014-2019',
         }
      ],

   },
];

const workData = [
   {
      title: 'experience',
      data: [
         {
            company: 'Bombardier Inc., Montreal QC',
            role: 'Software Developer Intern',
            years: 'May 2023 – August 2023',
         },
         {
            company: 'Modulus Data, Boston MA',
            role: 'Full-Stack Software Developer Intern',
            years: 'January 2023 – April 2023',
         },
      ],
   },
];


const skillsData = [
   
   {
      title: 'programming',
      data: [
         {
            imgPath: '/about/java.svg',
         },
         {
            imgPath: '/about/python.svg',
         },
         {
            imgPath: '/about/c.svg',
         },
         {
            imgPath: '/about/js.svg',
         },
         {
            imgPath: '/about/sql.svg',
         },
         {
            imgPath: '/about/react.svg',
         },

      ],
   },
   {
      title: 'platforms',
      data: [
         {
            imgPath: '/about/eclipse.svg',
         },
         {
            imgPath: '/about/vscode.svg',
         },
         {
            imgPath: '/about/intellij.svg',
         },
         {
            imgPath: '/about/figma.svg',
         },
         {
            imgPath: '/about/atlassian.svg',
         },
         {
            imgPath: '/about/docker.svg',
         },
         {
            imgPath: '/about/jenkins.svg',
         },
         {
            imgPath: '/about/mongo.svg',
         },

      ],
   },

   {
      title: 'languages',
      data: [
         {
            name: 'English (Native)',
         },
         {
            name: 'French (Native)',
         },
         {
            name: 'Russian (Native)',
         },
         {
            name: 'Spanish (Limited)',
         },

      ],
   },

];

const AboutSection = () => {
   const getData = (arr, title) => {
      return arr.find((item) => item.title === title);
   };

   return (
      <section id="about" className="text-black">


         <div className="p-[20px]">


            <h2 className="section-title mb-8 font-bold text-black xl:mb-16 text-center mx-auto">About Me</h2>

            <div className="flex flex-col xl:flex-row gap-x-5">


               {/*Image */}
               <div className="hidden xl:flex flex-1 relative">

                  <ComputersCanvas />

               </div>

               {/*Skills, Experience & Education*/}
               <div className="flex-1">
                  <Tabs defaultValue="education">
                     <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border">
                        <TabsTrigger value="education" className="relative w-[162px] xl:w-auto">Education</TabsTrigger>
                        <TabsTrigger value="work" className="relative w-[162px] xl:w-auto">Work Experience</TabsTrigger>
                        <TabsTrigger value="skills" className="relative w-[162px] xl:w-auto">Skills</TabsTrigger>
                     </TabsList>
                     {/*Image*/}
                     <div className="text-lg mt-12 xl:mt-8">
                        <TabsContent value="education">
                           <div className="flex flex-col gap-y-6">
                              <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                 <GraduationCap />
                                 <h4 className="capitalize font-medium">
                                    {getData(educationData, 'education').title}
                                 </h4>
                              </div>

                              <div className="flex flex-col gap-y-8">
                                 {getData(educationData, 'education').data.map((item, index) => {
                                    const { university, qualification, years } = item;
                                    return (
                                       <div className="relative flex gap-x-8 group" key={index}>
                                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                             <div className="relative w-[11px] h-[11px] rounded-full bg-[#4844FF] -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"> </div>
                                          </div>
                                          <div>
                                             <div className="font-semibold text-lg leading-none mb-2">{university}</div>
                                             <div className="text-md leading-none text-muted-foreground mb-4 italic">{qualification}</div>
                                             <div className="text-base font-medium">{years}</div>
                                          </div>
                                       </div>
                                    )
                                 })}
                              </div>
                           </div>
                        </TabsContent>

                        <TabsContent value="work">
                           <div className="flex flex-col gap-y-6">
                              <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                 <Briefcase />
                                 <h4 className="capitalize font-medium">
                                    {getData(workData, 'experience').title}
                                 </h4>
                              </div>

                              <div className="flex flex-col gap-y-8">
                                 {getData(workData, 'experience').data.map((item, index) => {
                                    const { company, role, years } = item;
                                    return (
                                       <div className="flex gap-x-8 group" key={index}>
                                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                             <div className="w-[11px] h-[11px] rounded-full bg-[#4844FF] absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"> </div>
                                          </div>
                                          <div>
                                             <div className="font-semibold text-lg leading-none mb-2">{company}</div>
                                             <div className="text-md leading-none text-muted-foreground mb-4 italic">{role}</div>
                                             <div className="text-base font-medium">{years}</div>
                                          </div>
                                       </div>
                                    )
                                 })}
                              </div>
                           </div>

                        </TabsContent>

                        <TabsContent value="skills">
                           <div className="text-center gap-y-5 xl:text-left">
                          
                              <div className="mb-6 flex gap-x-4 items-center text-[22px] text-primary">
                                 <Laptop/>
                                 <h4 className="capitalize font-medium">
                                    Stack & Tools
                                 </h4>
                              </div>

                              <div className="mb-10">
                                 <h4 className="text-lg font-semibold mb-2">Programming</h4>
                                 <div className="border-b border-border mb-4"></div>
                                 <div className="flex gap-x-3 justify-center xl:justify-start">
                                    {getData(skillsData, 'programming').data.map((item, index) => {
                                       const { imgPath } = item;
                                       return (
                                          <div key={index}>
                                             <Image src={imgPath} width={45} height={45} alt="tool" priority />
                                          </div>
                                       )
                                    })}
                                 </div>
                              </div>

                              <div className="mb-8">
                                 <h3 className="text-lg font-semibold mb-2 xl:text-left">Platforms</h3>
                                 <div className="border-b border-border mb-4"></div>

                                 <div className="flex gap-x-3 justify-center xl:justify-start">
                                    {getData(skillsData, 'platforms').data.map((item, index) => {
                                       const { imgPath } = item;
                                       return (
                                          <div key={index}>
                                             <Image src={imgPath} width={45} height={45} alt="tool" priority />
                                          </div>
                                       )
                                    })}
                                 </div>
                              </div>

                              <div>
                                 <h4 className="text-lg font-semibold mb-2">Languages</h4>
                                 <div className="border-b border-border mb-4"></div>

                                 <div className="flex flex-row gap-3">
                                      {getData(skillsData, 'languages').data.map((item,index) => {
                                        const {name} = item;
                                         return(
                                         <div className="text-md text-center xl:text-left mx-auto xl:mx-0 italic" key={index}>
                                             <div>{name} </div>

                                         </div>
                                         )
                                      })}

                                   </div>
                              </div>

                           </div>
                        </TabsContent>
                     </div>
                  </Tabs>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;