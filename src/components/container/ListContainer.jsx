const ListContainer = ({ children }) => {
  return (
    <section className="flex flex-wrap gap-12 px-12 justify-center items-center mt-5">
      {children}
    </section>
  );
};

export default ListContainer;
