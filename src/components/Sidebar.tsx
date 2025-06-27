import { useState } from "react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { SideNavItem } from "./SideNavItem"; // Adjust path if needed

type SideNavElement = {
  id: string;
  name: string;
  hint: string;
};

export function Sidebar() {
  const [sideNavElements, setSideNavElements] = useState<SideNavElement[]>([
    { id: "element-1", name: "Element 1", hint: "Hint 1" },
    { id: "element-2", name: "Element 2", hint: "Hint 2" },
    { id: "element-3", name: "Element 3", hint: "Hint 3" },
    { id: "element-4", name: "Element 4", hint: "Hint 4" },
  ]);

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
