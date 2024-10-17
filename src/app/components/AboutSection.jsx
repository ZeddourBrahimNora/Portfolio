"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Java</li>
          <li>C#</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Sql</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Haute école libre de Bruxelles Ilya Prigogine</li>
          <li>Athénée Royal Alfred Verwée</li>
        </ul>
      ),
    },
  ];

  
const AboutSection = () => { 
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

 const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id)
    });
 }

  return (
    <section className="text-white"> <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px16">
       <Image src="/images/cat.png" width={500} height={500} />
       <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
        <p className="text-base lg:text-lg">
            Final-year student in Computer Science, with experience in object-oriented programming (Java, C#) and web technologies (HTML, CSS, JavaScript, React). I am seeking a 15-week internship starting January 2025 to contribute to your team while deepening my skills in web development, data analysis, and databases. I am eager to apply my knowledge and learn in a collaborative environment.
        </p>
        <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
       </div>
    </div>
    </section>
  );
};

export default AboutSection;