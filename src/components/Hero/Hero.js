import React from "react";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TextLoop from "react-text-loop";

import GitHubIcon from "@material-ui/icons/GitHub";
import ResumeIcon from "@material-ui/icons/MenuBook";

import "./Hero.css";

const useStyles = makeStyles((theme) => ({
  buttonIcon: {
    marginLeft: theme.spacing(1),
  },
  innerBox: {
    margin: "0 auto",
    maxWidth: 1236,
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
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
    color: "white",
    marginBottom: theme.spacing(2),
  },
  textBox2: {
    color: "grey",
    marginBottom: theme.spacing(3),
  },
  textBox3: {
    alignItems: "flex-start",
    display: "flex",
  },
  typical: {
    display: "inline-block",
    margin: 0,
  },
  rootBox: {
    backgroundColor: "#1F1F1E",
  },
  rootContainer: {
    marginTop: theme.spacing(-4),
    marginLeft: theme.spacing(-4),
  },
  textBoxButton: {
    color: "white",
    fontSize: "1.1rem",
    marginRight: theme.spacing(2),
    padding: "8px 24px",
    textTransform: "none",
  },
}));

export default function Hero(props) {
  const classes = useStyles();

  return (
    <Box className={classes.rootBox}>
      <Box className={classes.innerBox}>
        <Grid className={classes.outerGridItem} container>
          <Grid className={classes.innerGridItem} container xs={12} md={6}>
            <Box>
              <Box className={classes.textBox1} component="div">
                <Typography variant="h2" style={{ fontWeight: 900 }}>
                  Hi, I'm Brian! <br /> I love to{" "}
                  <Typography
                    component="span"
                    variant="h2"
                    style={{ color: props.color, fontWeight: 900 }}
                  >
                    <TextLoop
                      children={[
                        "design 🎨",
                        "build 💻",
                        "research 🔬",
                        "learn 📖",
                      ]}
                      className="text-loop"
                      interval={2000}
                      mask={true}
                      adjustingSpeed={100}
                    ></TextLoop>
                  </Typography>
                </Typography>
              </Box>
              <Box className={classes.textBox2} component="div">
                <Typography variant="h6">
                  Currently third-year @ McGill University
                  <br />
                  Honors Computer Science + Minor in Statistics
                </Typography>
              </Box>
              <Box className={classes.textBox3} component="div">
                <Button
                  className={classes.textBoxButton}
                  style={{
                    borderColor: props.color,
                    color: props.color,
                  }}
                  variant="outlined"
                >
                  Explore Github <GitHubIcon className={classes.buttonIcon} />
                </Button>
                <Button
                  className={classes.textBoxButton}
                  style={{ borderColor: props.color, color: props.color }}
                  variant="outlined"
                >
                  View Resume <ResumeIcon className={classes.buttonIcon} />
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid className={classes.innerGridItem} item xs={12} md={6}>
            <Box className={classes.imageBox}>
              <img className="hero-image" src={props.image} alt=""></img>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
