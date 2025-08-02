import { v4 as uuidv4 } from "uuid";
import type { ProjectRequest } from "../types/Project.types";

export const createNewProject = async(ProjectDetails: ProjectRequest) => {
  const projId = uuidv4();
  console.log("Creating project:", ProjectDetails);
  return fetch(`/api/projects/${projId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ProjectDetails.auth0Id}`,
    },
    body: JSON.stringify({
      projName: ProjectDetails.projName,
      projDescription: ProjectDetails.projDescription,
    }),
  });
};
