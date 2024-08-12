import React from "react";

const ProductLayoutContainer = ({ children }) => {
  return (
    <section className="bg-secondary flex flex-col gap-4 justify-center items-center z-10 w-4/5 absolute left-1/2 -translate-x-1/2 top-[25%] text-white py-4 px-4 rounded-lg container mx-auto">
      {children}
    </section>
  );
};

export default ProductLayoutContainer;
