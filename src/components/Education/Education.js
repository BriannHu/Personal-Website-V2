import React from "react";

import { Box, Grid, Paper, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  innerBox: {
    margin: "0 auto",
    maxWidth: 1236,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  mcgillLogo: {
    maxWidth: 80,
  },
  paperContainer: {
    backgroundColor: "#42423e",
    color: "white",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
  },
  paperDate: {
    fontWeight: 100,
  },
  paperHeaderBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paperItem: {
    fontWeight: 100,
  },
  paperSubtitle: {
    fontWeight: 100,
  },
  paperTitle: {
    fontWeight: 600,
  },
  rootBox: {
    backgroundColor: "#1F1F1E",
  },
  subtitle: {
    fontWeight: 600,
    marginBottom: theme.spacing(3),
    textTransform: "uppercase",
  },
  titleBox: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
    textAlign: "center",
  },
}));

export default function Education(props) {
  const classes = useStyles();
  return (
    <Box className={classes.rootBox}>
      <Box className={classes.innerBox}>
        <Box className={classes.titleBox}>
          {" "}
          <Typography
            className={classes.subtitle}
            variant="h3"
            style={{ color: props.color }}
          >
            Education
          </Typography>
        </Box>
        <Paper className={classes.paperContainer}>
          <Grid
            className={classes.outerGridHeader}
            container
            justifyContent="space-between"
          >
            <Grid item>
              <Typography className={classes.paperTitle} variant="h5">
                Honors Computer Science & Statistics Minor (BSc.)
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.paperDate}
                gutterBottom
                style={{ color: props.color }}
                variant="h6"
              >
                September 2019 - Present
              </Typography>
            </Grid>
          </Grid>
          <Typography className={classes.paperItem}>
            <Box component="span" style={{ color: props.color }}>
              Location:
            </Box>{" "}
            McGill University (Montreal, QC)
          </Typography>
          <Typography className={classes.paperItem}>
            <Box component="span" style={{ color: props.color }}>
              Expected Graduation:
            </Box>{" "}
            April 2023
          </Typography>
          <Typography className={classes.paperItem}>
            <Box component="span" style={{ color: props.color }}>
              CGPA:
            </Box>{" "}
            4.00/4.00
          </Typography>
          <Typography className={classes.paperItem}>
            <Box component="span" style={{ color: props.color }}>
              Awards:
            </Box>{" "}
            Dean's List, Faculty of Science Scholarship, MES bourses
            d'excellences
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
