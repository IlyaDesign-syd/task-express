import type { SideNavElement } from '../types/navigation'; // adjust path as needed

export const sideNavButtons: SideNavElement[] = [
  { id: 'board', name: 'Board', hint: 'View and manage active tasks' },
  { id: 'backlog', name: 'Backlog', hint: 'Upcoming tasks and ideas' },
  { id: 'projects', name: 'Projects', hint: 'Manage multiple projects' },
  { id: 'insights', name: 'Insights', hint: 'AI-powered assistant and reports' },
];