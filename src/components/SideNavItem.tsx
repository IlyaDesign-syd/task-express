import { useSortable } from "@dnd-kit/sortable";
import type { SideNavElement } from "../types";
import { CSS } from "@dnd-kit/utilities";

/**
 * A single, drag n drop side navigation button:
 * Can be rearranged vertically by user (custom UI).
 * 
 * `useSortable` hook from dnd enables this functionality.
 * 
 * Style feedback like shadows applied on dragging state (`isDragging`)
 */

export function SideNavItem(props: SideNavElement) {
  const { name, hint, id } = { ...props };

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  // Style block required for dynamic dragging styles (minimized as much as possible)
  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const baseClass =
    "p-2 mb-2 bg-gray-100 rounded cursor-grab select-none";

  const draggingClass = isDragging ? "shadow-md cursor-grabbing opacity-70 z-10" : "z-0";

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`${baseClass} ${draggingClass}`}
      {...attributes}
      {...listeners}
    >
      <div className="text-sm font-medium">{name}</div>
      <div className="text-xs text-gray-500">{hint}</div>
    </li>
  );
}
