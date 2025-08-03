import React from "react";
import TopStrip from "./TopStrip";
import MidHeader from "./MidHeader";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <TopStrip />
      <MidHeader />
      <Navigation />
    </header>
  );
}
