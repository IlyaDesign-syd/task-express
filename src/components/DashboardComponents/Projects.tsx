import { useAuth0 } from "@auth0/auth0-react";
import { createNewProject, getProjects } from "../../services/project.service";
import { useEffect, useState } from "react";
import type { ProjectResponse } from "../../types/Project.types";

export const Projects = () => {

  const [projects, setProjects] = useState<ProjectResponse[]>([]);
  
  const { getAccessTokenSilently } = useAuth0();
  const handleProjCreate = async () => {
    const token = await getAccessTokenSilently();
    // TODO: Create form and replace default values with input
    const createdProject = await createNewProject({ auth0Id: token, projName: "Test Project", projDescription: "This is a test project" });
    setProjects([...projects, createdProject]);
  };


  useEffect(() => {
    const getUserProjects = async () => {
      const token = await getAccessTokenSilently();
      const userProjects = await getProjects(token)
      getProjects(token).then(res => res.json()).then(res => setProjects(res))
    }
  }, [])
  return (
    <div className="">
      <h1>My Projects</h1>
      <div className="flex flex-col">
        <div onClick={handleProjCreate} className="w-full h-[150px] rounded-2xl bg-gray-200 shadow-inner backdrop-blur-sm bg-opacity-50 border border-gray-300" />
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};
