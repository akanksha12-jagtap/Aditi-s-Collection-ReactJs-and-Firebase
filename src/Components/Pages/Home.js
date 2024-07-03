import React from "react";
import { Container, Grid } from "@material-ui/core";
import Banner from "../Banner/Banner";
import Cards from "../MediCards/Cards";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Banner />
      <br /> <br /><br/>
      <Container>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={6} md={3}>
            <Link to={`/products-page/:wall-hangings`}>
              <Cards
                title="Wall Hangings"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfwEPagMBSMV5p5uqjnZv9khoqqP5_KUuyXu6UCeRVz9MFU9cxruf5NEQBE-48CGjbO0&usqp=CAU"
              />
            </Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <Link to={`/products-page/:key-holders`}>
              <Cards
                title="Key Holders"
                src="https://i.ytimg.com/vi/nsmpz4f9WiY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAIGRRjDm7yw7y4FFrTV1Vh2XP_6w"
              />
            </Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <Link to={`/products-page/:mirrors`}>
              <Cards
                title="Mirror Wall Hangings"
                src="https://imgshopimages.lbb.in/catalog/product/s/a/sa131_1_.jpg"
              />
            </Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <Link to={`/products-page/:door-hangings`}>
              <Cards
                title="Door Hangings"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdK7BeQTqQIIE4drR0VLm15lrakUC_xtFv7A&usqp=CAU"
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
