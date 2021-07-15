import React from "react";
// import TextLoop from "react-text-loop";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./Hero.css";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  imageBox: {
    maxHeight: 600,
  },
  innerBox: {
    margin: "0 auto",
    maxWidth: "1236px",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  innerGridItem: {
    alignItems: "center",
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },
  outerGridItem: {
    display: "flex",
  },
  textBox1: {
    marginBottom: theme.spacing(2),
  },
  textBox2: {
    marginBottom: theme.spacing(3),
  },
  textBox3: {
    alignItems: "flex-start",
    display: "flex",
  },
  rootBox: {
    backgroundColor: "#BBD9FB",
  },
  rootContainer: {
    marginTop: theme.spacing(-4),
    marginLeft: theme.spacing(-4),
  },
  textBoxButton: {
    marginRight: theme.spacing(2),
    padding: "8px 24px",
    textTransform: "none",
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <Box className={classes.rootBox}>
      <Box className={classes.innerBox}>
        <Grid className={classes.outerGridItem} container>
          <Grid className={classes.innerGridItem} container xs={12} md={6}>
            <Box>
              <Box className={classes.textBox1} component="div">
                <Typography variant="h2" style={{ fontWeight: 600 }}>
                  Hi! I'm Brian and I love to research
                </Typography>
              </Box>
              <Box className={classes.textBox2} component="div">
                <Typography variant="h6">
                  I'm currently a third-year at McGill University, pursuing an
                  Honors in Computer Science with a minor in Statistics.
                </Typography>
              </Box>
              <Box className={classes.textBox3} component="div">
                <Button className={classes.textBoxButton} variant="outlined">
                  Explore Website
                </Button>
                <Button className={classes.textBoxButton} variant="outlined">
                  View Resume
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid className={classes.innerGridItem} item xs={12} md={6}>
            <Box className={classes.imageBox}>
              <img
                className="hero-image"
                src="/images/procreate.png"
                alt=""
              ></img>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
