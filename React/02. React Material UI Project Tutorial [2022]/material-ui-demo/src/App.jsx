import * as React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  // Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";

import Grid from "@mui/material/Grid2";

import useStyles from "./styles";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="realtive">
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container
            maxWidth="sm"
            // style={{ marginTop: '100px' }}
            className={classes.container}
          >
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>

            <div className={classes.buttons}></div>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque ducimus nisi ratione reiciendis ipsa doloribus qui,
              deleniti veniam maiores odit.
            </Typography>

            <div>
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: "center",
                }}
              >
                <Grid>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.CardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reprehenderit quisquam consequuntur, a magnam ab?
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">View</Button>
                  <Button size="small" color="primary">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
