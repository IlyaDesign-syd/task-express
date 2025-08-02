import type { TaskColumn } from "./Task.types";

// Every project belongs to a user, auth0 ties users to auth0Id
export interface ProjectRequest {
  auth0Id: string;
  projName: string;
  projDescription?: string;
}

export interface ProjectResponse {
  projId: string;
  projName: string;
  projDescription?: string;
  taskColumns: TaskColumn[]
  createdAt?: string;
}
