import * as React from "react";
import { useEffect, useState } from "react";
import { get } from "../../services/request";
import Footer from "../footer/footer";
import Main from "../main/main";
import { Grid } from "@mui/material";
import Text from "../../components/text/text";
import Product from "../../components/product/product";

const Home = () => {
  const [catalog, setCatalog] = useState([]);

  const loadData = async () => {
    const response = await get(" http://demo4033977.mockable.io/home");
    setCatalog(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <div className="container">
        <Main />
        <Text
          variant="h4"
          component="h1"
          text="Ofertas imperdíveis"
          style={{
            color: "#0098",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        />
        <Grid
          container
          spacing={2}
          style={{
            padding: "15px",
            boxSizing: "border-box",
            margin: "0 auto",
            maxWidth: "2000px",
            width: " 100%",
          }}
        >
          {catalog.length > 0
            ? catalog.map((product) => {
                return (
                  <Grid item xs={12} sm={6} md={3}>
                    <Product product={product} />
                  </Grid>
                );
              })
            : "Nenhum produto encontrado"}
        </Grid>
        <Footer />
      </div>
    </>
  );
};

export default Home;
