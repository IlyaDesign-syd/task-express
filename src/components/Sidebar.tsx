import { useState } from "react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { SideNavItem } from "./SideNavItem"; // Adjust path if needed
import { sideNavButtons } from "../data/navigationData";
import type { SideNavElement } from "../types";

export function Sidebar() {
  const [sideNavElements, setSideNavElements] = useState<SideNavElement[]>(sideNavButtons);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setSideNavElements((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={sideNavElements.map((e) => e.id)}>
        <ul>
          {sideNavElements.map((sideNav) => (
            <SideNavItem key={sideNav.id} {...sideNav} />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
