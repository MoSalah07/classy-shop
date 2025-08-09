import React from "react";

export default function FooterHeading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h3 className={`${className} text-lg font-semibold text-text-primary`}>
      {title}
    </h3>
  );
}
