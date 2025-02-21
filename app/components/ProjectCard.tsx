// src/app/components/ProjectCard.tsx
import React, { FC } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  companyName: string;
  imageUrl: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  category,
  companyName,
  imageUrl,
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg max-sm:pb-7">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg hover:scale-140 w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
          priority
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-400 mb-2">
          {category} • {companyName}
        </p>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <a
          href="#"
          className="text-orange-500 text-sm font-semibold hover:underline"
        >
          {/* Learn more → */}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;