'use client';

import { motion } from 'framer-motion';
import { projects } from '../../public/projectListData.jsx';
import { ProjectCorner, ProjectTitle } from '../components/styles/main-content';
import { addClick } from '../actions/addClick.js';
import { useLogoClicksContext } from '../context/logoClicksContext.jsx';
import { useProjectContext } from '../context/projectContext.jsx';
import { variants, listItem } from '../../public/animations';

const ProjectList = () => {
  const { setCurrentProject } = useProjectContext();
  const { hexadecimals } = useLogoClicksContext();
  const h1 = hexadecimals[0];
  const h2 = hexadecimals[1];
  return (
    <motion.aside
      variants={variants}
      initial="hidden"
      animate="show"
      className="basis-[30%] flex-1 min-w-[280px]"
    >
      <motion.h2 variants={listItem} className={`my-8 text-3xl text-[#d1d1d1]`}>
        Projects
      </motion.h2>
      <ProjectCorner
        h1={h1}
        h2={h2}
        className="flex flex-col px-[30px] pt-[30px] grow shrink relative"
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="group"
            variants={listItem}
            onClick={() => {
              addClick(project.click);
              setCurrentProject(project.title);
            }}
          >
            <ProjectTitle
              h1={h1}
              h2={h2}
              className="group-hover:tracking-[1px] group-hover:text-white duration-300"
            >
              {project.title}
            </ProjectTitle>
          </motion.div>
        ))}
      </ProjectCorner>
    </motion.aside>
  );
};

export default ProjectList;
