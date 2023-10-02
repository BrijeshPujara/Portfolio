import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media.licdn.com/dms/image/D560BAQE5a0sQoGnEXQ/company-logo_100_100/0/1665774114750?e=1703721600&v=beta&t=WifyLfXGO1GS64PAQWpPIKqX0KW73xE07kmMi_3jUY8"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Developer</h4>
        <p className="font-bold text-2xl mt-1">Wondr Medical</p>

        <div className="flex space-x-2 my-2"></div>

        <p className="py-5 text-gray-300">Nov 2022 - Sept 2023</p>

        <ul className="list-disc space-y-4 ml-5 text-md">
          <li>
            Collaborated cross-functionally with UI/UX and product teams to
            develop core features.
          </li>
          <li>
            Managed the software development lifecycle, from sizing story points
            and epics to leveraging GitHub Actions CI/CD for deployment to
            production.
          </li>
          <li>
            Maintained GitHub version control, ensuring PRs supported
            comprehensive epic features.
          </li>
          <li>
            Conducted comprehensive testing using Minitest, supported the QA
            process in rotation.
          </li>
          <li>
            Prototyped features using tools like AWS Translate to enhance user
            experience and accessibility.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
