import React from "react";

const Container = ({ children }) => (
  <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
    {children}
  </div>
);

export default Container;
