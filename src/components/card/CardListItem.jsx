const CardListItem = ({
  image,
  name,
  popular,
  available,
  price,
  rating,
  votes,
}) => {
  return (
    <section className="w-[320px] rounded-md">
      <div className="relative">
        <img src={image} className="w-full h-full   bg-cover rounded-lg" />

        {popular && (
          <span className="absolute top-2 px-2 text-sm left-1 text-primary font-semibold rounded-md py-0.5 bg-[#F6C768]">
            Popular
          </span>
        )}
      </div>

      <h2 className="flex justify-between mt-5 items-center">
        {name}
        <span className="bg-[#BEE3CC] text-primary font-semibold px-2 py-1 rounded">
          {price}
        </span>
      </h2>

      {/* rate  */}
      <div className="flex mt-3">
        <img src="/images/Star_fill.svg" className="w-[24px] h-[24px]" />
        <p className="text-[#FEF7EE]">
          {rating}
          <span className="text-sm text-[#6F757C]">({votes} Votes)</span>
        </p>
      </div>
    </section>
  );
};

export default CardListItem;
