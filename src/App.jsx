import React, { useEffect, useState } from "react";
import { getDataCoffe } from "./services/coffe";
import ProductContainer from "./components/container/ProductContainer";
import ProductLayoutContainer from "./components/container/ProductLayoutContainer";
import TextHeader from "./components/element/TextHeader";
import TextDescription from "./components/element/TextDescription";
import HeroImage from "./components/hero/HeroImage";
import PageContainer from "./components/container/PageContainer";
import CardListItem from "./components/card/CardListItem";
import ListContainer from "./components/container/ListContainer";

const HomePage = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const [indexPage, setIndexPage] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getListCoffe();
  }, []);
  const getListCoffe = async () => {
    const data = await getDataCoffe();
    setDatas([...datas, ...data]);
  };

  const handleAllProduct = () => {
    setIndexPage(indexPage - 1);
    setDatas([...datas]);
    queryParameters.set("item", "all-product");

    if (indexPage <= 0) {
      setIndexPage(0);
    }
  };

  const handleAvailable = () => {
    setIndexPage(indexPage + 1);
    queryParameters.set("item", "available-product");

    const filteredItem = datas.filter((item) => item.available && item);

    setDatas(filteredItem);
    setIsActive(true);
  };

  return (
    <PageContainer>
      <HeroImage />
      <ProductLayoutContainer>
        <TextHeader />
        <TextDescription />

        <ProductContainer>
          <button
            className={` font-semibold text-[#FEF7EE] ${
              isActive && "focus:bg-[#6F757C]"
            }  px-4 py-2 rounded`}
            onClick={handleAllProduct}
          >
            All products
          </button>
          <button
            className={`text-[#FEF7EE] px-4 py-2 rounded ${
              isActive && "focus:bg-[#6F757C]"
            }`}
            onClick={handleAvailable}
          >
            Available now
          </button>
        </ProductContainer>

        {/* card */}
        <ListContainer>
          {datas.length > 0 &&
            datas.map((item, index) => (
              <React.Fragment key={index}>
                <CardListItem
                  available={item.available}
                  image={item.image}
                  name={item.name}
                  popular={item.popular}
                  price={item.price}
                  rating={item.rating}
                  votes={item.votes}
                />
              </React.Fragment>
            ))}
        </ListContainer>
      </ProductLayoutContainer>
    </PageContainer>
  );
};

export default HomePage;
