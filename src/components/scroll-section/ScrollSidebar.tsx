import React from "react";

interface SidebarProps {
  sections: { id: string; label: string }[];
  activeId: string;
}

const ScrollSidebar = ({ sections, activeId }: SidebarProps) => {
  return (
    <div className="hidden lg:block sticky top-20 col-span-3 w-full h-fit self-start p-5 rounded-2xl border border-border-primary">
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={`px-4 py-3.5 text-base lg:text-lg border-b border-border-primary ${
              activeId === section.id
                ? "text-primary border-l-4 border-l-primary"
                : "text-text-muted"
            } transition-all duration-300`}
          >
            <a href={`#${section.id}`} className="block w-full">
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollSidebar;
