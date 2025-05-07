import React from "react";

interface ContactItemProps {
  icon: React.ReactElement;
  text?: string;
  color?: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ icon, text, color }) => (
  <div className="flex items-center gap-2">
    <span className={color}>{icon}</span>
    <span>{text}</span>
  </div>
);