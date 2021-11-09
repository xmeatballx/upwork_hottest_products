import { useState, useEffect } from "react";

import { Header } from "./components/Header";
import { Article } from "./components/Article";
import { Conclusion } from "./components/Conclusion";
import { GlobalStyles } from "./components/GlobalStyles";
import { Footer } from "./components/Footer";

function App() {
  const [items, setItems] = useState({});
  const [productOrder, setProductOrder] = useState([]);
  let fetched = false;

  const urlParams = new URLSearchParams(window.location.search);
  const glcid = urlParams.get("glcid");
  console.log(glcid);
  useEffect(() => {
    fetch(
      "https://cdn.contentful.com/spaces/o6cj1t1pbl2q/environments/master/entries?access_token=6yymc6OcB1VaebTGOmRRmY4rcgh9McCzh0Ut8Ea4icQ&content_type=productOrder"
    )
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        const hottestProductsMeta = json.items.find(
          (item) => (item.fields.title = document.title)
        );

        // console.log(hottestProductsMeta);

        const hottestProductsOrderedIds =
          hottestProductsMeta.fields.productOrder.map(
            (product) => product.sys.id
          );

        fetch(
          "https://cdn.contentful.com/spaces/o6cj1t1pbl2q/environments/master/entries?access_token=6yymc6OcB1VaebTGOmRRmY4rcgh9McCzh0Ut8Ea4icQ&metadata.tags.sys.id[in]=" +
            document
              .getElementsByName("campaign")[0]
              .getAttribute("description")
        )
          .then((response) => response.json())
          .then((products) => {
            let orderedProducts = [];
            hottestProductsOrderedIds.forEach((id) => {
              products.items.forEach((product) => {
                if (product.sys.id === id) {
                  orderedProducts.push(product);
                }
              });
            });
            setItems(orderedProducts);
            fetched = true;
          });
        // getImageUrl(data);
        // setItems(data);
      });
  }, [fetched]);

  return (
    <div className="App">
      <GlobalStyles />
      <Header></Header>
      <main>
        {items.length > 0
          ? items.map((item, index) => {
              return <Article key={index} items={item} index={index} />;
            })
          : ""}
        <Conclusion></Conclusion>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
