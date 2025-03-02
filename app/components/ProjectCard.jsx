import Link from "next/link";
import React from 'react';
import Image from "next/image";
import {Card, CardHeader} from "@/components/ui/card";
import {Link2Icon} from 'lucide-react';
import {Badge} from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";

const ProjectCard =({project}) => {
    return (
    <Card className="relative group overflow-hidden">
        <CardHeader className="p-0">
            <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                <Image 
                className="absolute bottom-0 shadow-2xl"
                src={project.image}
                width={245}
                height={250}
                alt=""
                priority
                />
              
            <div className="flex flex-col gap-y-3 mt-12">
                <div className="">
                    <Link
                    href={project.link}
                    className="relative bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                    >
                      <Link2Icon className="text-[#4844FF]" />
                    </Link>
                </div>

                <div className="">
                    <Link
                    href={project.linkGithub}
                    className="relative bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                    >
                      <FaGithub  className="text-[#4844FF]"/>
                    </Link>
                </div>
            </div>

            </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
            <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">{project.category}</Badge>
            <h4 className="h4 mb-1">{project.name}</h4>
            <p className="text-muted-foreground text-md">{project.description}</p>
        </div>
    </Card>
    )
}

export default ProjectCard;