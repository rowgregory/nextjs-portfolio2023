'use client'

import { addClick } from '../actions/addClick.js'
import { projectDetails } from '../../public/projectDetailsData'
import { variants, listItem } from '../../public/animations'
import { motion } from 'framer-motion'
import { DescriptionBox, VisitSite } from '../components/styles/main-content'
import { useLogoClicksContext } from '../context/logoClicksContext.jsx'
import { useProjectContext } from '../context/projectContext.jsx'

const ProjectDescription = () => {
  const { currentProject } = useProjectContext()
  const { hexadecimals } = useLogoClicksContext()
  const h1 = hexadecimals[0]
  const h2 = hexadecimals[1]
  return (
    <motion.section
      key={currentProject}
      variants={variants}
      initial="hidden"
      animate="show"
      className="relative basis-[53%] grow shrink min-h-[269px]"
    >
      <h2
        variants={listItem}
        className="text-3xl x9:mt-12 mb-[30px] text-[#bfbfbf] flex items-start justify-start w-9/12 x9:w-full"
      >
        {projectDetails[currentProject].title}
      </h2>
      <DescriptionBox h1={h1} h2={h2}>
        <motion.p
          variants={listItem}
          className={`block mb-3 text-sm text-[#c8c8c8] leading-6`}
        >
          {projectDetails[currentProject].desc1}
        </motion.p>
        {projectDetails[currentProject].link && (
          <motion.div
            variants={listItem}
            onClick={() => addClick(projectDetails[currentProject].click)}
            className="group"
          >
            <VisitSite
              href={projectDetails[currentProject].link}
              h1={h1}
              h2={h2}
              className="group-hover:text-white duration-300"
              target={
                projectDetails[currentProject].internalLink ? '' : '_blank'
              }
            >
              {projectDetails[currentProject].internalLink
                ? 'Play'
                : 'Visit Site'}
            </VisitSite>
          </motion.div>
        )}
        {projectDetails[currentProject].desc2 && (
          <motion.p
            variants={listItem}
            className={`block text-sm text-[#c8c8c8] leading-6`}
          >
            {projectDetails[currentProject].desc2}
          </motion.p>
        )}
      </DescriptionBox>
    </motion.section>
  )
}

export default ProjectDescription
