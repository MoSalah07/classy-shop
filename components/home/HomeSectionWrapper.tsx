import React from "react";

interface IProps {
  children: React.ReactNode;
  bg?: string;
  title: string;
}

export default function HomeSectionWrapper({
  children,
  title,
  bg = "bg-transparent",
}: IProps) {
  return (
    <section className={`py-5 ${bg}`}>
      <div className="main-container">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex flex-col gap-y-8">{children}</div>
      </div>
    </section>
  );
}
