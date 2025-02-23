"use client";

import React, { useState, Suspense, lazy } from "react";

const CategoryFilter = lazy(() => import("@/app/components/CategoryFilterProps"));
const ProjectCard = lazy(() => import("@/app/components/ProjectCard"));

const OurProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const projects = [
    {
      id: 1,
      title: "🌐 Patients Management System",
      description: "Doctors can monitor their patients efficiently.",
      category: "Web Apps",
      companyName: "MEDICA",
      imageUrl: "/assets/projects/Medica_web-Web.png",
    },
    {
      id: 2,
      title: "📱 Skill Improvement App",
      description: "Enhances students' technical knowledge with certification & ranking.",
      category: "Mobile Apps",
      companyName: "Skill UP",
      imageUrl: "/assets/projects/Skill_up-mobile.png",
    },
    {
      id: 3,
      title: "🌐 Restaurant Management System",
      description: "Manages orders, billing, branches & staff.",
      category: "Web Apps",
      companyName: "ROYAL PLAZA",
      imageUrl: "/assets/projects/Royal-Web.png",
    },
    {
      id: 4,
      title: "🤖 Diabetes Detection Model",
      description: "Analyzes foot images to identify diabetes levels.",
      category: "ML",
      companyName: "MEDICA",
      imageUrl: "/assets/projects/Foot_analyz-ML.png",
    },
    {
      id: 5,
      title: "🌐 Car Service Management System",
      description: "Handles appointments, billing & stock management.",
      category: "Web Apps",
      companyName: "AutoFlash",
      imageUrl: "/assets/projects/ServiceCenter-Web.png",
    },
    {
      id: 6,
      title: "📱 Diabetes Patients App",
      description: "Connects patients & doctors for daily health monitoring.",
      category: "Mobile Apps",
      companyName: "MEDICA",
      imageUrl: "/assets/projects/Medica-Mobile.png",
    },
    {
      id: 7,
      title: "🌐 Hardware Management System",
      description: "Manages orders, billing & stock for hardware businesses.",
      category: "Web Apps",
      companyName: "Hardware Hub",
      imageUrl: "/assets/projects/Hardware-Web.png",
    },
  ];

  // Filter projects based on selectedCategory
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Suspense>
      <div id="projects" className=" pt-16 py-3 ">
        <div className="max-w-7xl mx-auto py-3 text-white">
          {/* Section Header */}
          <section className="w-full h-auto py-8 mb-8">
            <div className="max-w-full text-start">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="tracking-wide text-blue-400">Projects</span>
              </h2>

              <p className="font-normal max-w-full text-start text-lg text-gray-300 leading-relaxed">
                Here, you&apos;ll discover a diverse collection of the work I’ve built—ranging from dynamic web applications 
                to full-stack platforms designed for efficiency and scalability.
                </p>
                <p className="mt-2 font-normal max-w-full text-start text-lg text-gray-300 leading-relaxed">
                Each project is a testament to my expertise in React, Next.js, Spring Boot, 
                .NET Core, and various modern technologies. I take pride in writing clean, 
                maintainable, and performance-optimized code to craft seamless digital experiences.
              </p>
            </div>
          </section>

          {/* Filter Section */}
          <div className="mb-4">
            <Suspense>
              <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            </Suspense>
          </div>

          <br />
          <br />

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 mt-[-20px] ">
            <Suspense>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </Suspense>
          </div>

          <br />
          <br />
        </div>
      </div>
    </Suspense>
  );
};

export default OurProjects;
