import { useAuth0 } from "@auth0/auth0-react";
import { createNewProject } from "../../services/project.service";

export const Projects = () => {
  const { getAccessTokenSilently } = useAuth0();
  const handleProjCreate = async () => {
    const token = await getAccessTokenSilently();
    createNewProject({ auth0Id: token, projName: "Test Project", projDescription: "This is a test project" });
  };
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
