import React from "react";
import { Grid, InputLabel } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import logo from "assets/img/logo_tmp2.png";

function About({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={8}>
          <RegularCard
            cardTitle="About Copper Mail Server"
            cardSubtitle="Free and Opensource ready to deploy mail server"
            content={
              <div>
                Add content here ..
              </div>
            }
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <ProfileCard
            avatar={logo}
            subtitle="Lanka Software Foundation"
            title="OpenSource.lk"
            description="content here"
            footer={
              <Button color="primary" round>
                Follow
              </Button>
            }
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default About;
