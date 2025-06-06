import { useState, useEffect } from "react";

export default function SectionHeader({ title, isVisible }) {
  return (
    <h2 className={`font-extrabold text-3xl md:text-4xl mb-12 text-gray-900 text-center ${isVisible ? 'fade-in' : ''}`}>
      {title}
    </h2>
  );
} 