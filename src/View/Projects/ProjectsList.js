import {projectsData} from "./projectsData"

import { Box } from '@chakra-ui/react';

//components
import ProjectCard from './ProjectCard';



const ProjectsList = () => {
  return (
    <>
      <Box pt="20vh" id="proyectos" as="section">
        {projectsData.map(project => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            img={project.img}
            url={project.url}
            repoUrl={project.repoUrl}
          />
        ))}
      </Box>
    </>
  );
};

export default ProjectsList;
