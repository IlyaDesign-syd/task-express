import { v4 as uuidv4 } from "uuid";
import type { ProjectRequest, ProjectResponse } from "../types/Project.types";

export const createNewProject = async(ProjectDetails: ProjectRequest): Promise<ProjectResponse> => {
  const projId = uuidv4();
  console.log("Creating project:", ProjectDetails);
  const res = await fetch(`/api/projects/${projId}`, {
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

  return res.json();
};

export const getProjects = async(authToken: string): Promise<ProjectResponse[]> => {
  const res = await fetch(`/api/projects/all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return res.json();
};
