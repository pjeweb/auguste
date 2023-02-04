import React from "react";

export const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="absolute inset-0 m-auto aspect-video max-w-[100vw] max-h-[100vh]">
      {/* all the other elements */}

      <div className="absolute inset-0 w-full h-full">{children}</div>
    </div>
  );
};
