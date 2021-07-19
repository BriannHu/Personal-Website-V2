import React from "react";

import {
  Accordion,
  AccordionDetails,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { CSItems, MathItems } from "./CourseItems";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowIcon from "@material-ui/icons/ArrowRightAltOutlined";

import { makeStyles, withStyles } from "@material-ui/core/styles";

const AccordionSummary = withStyles({
  root: {
    flexDirection: "column",
  },
  content: {
    marginBottom: 0,
  },
  expandIcon: {
    marginRight: 0,
    paddingTop: 0,
  },
})(MuiAccordionSummary);

const useStyles = makeStyles((theme) => ({
  accordion: {
    backgroundColor: "inherit",
    "&::before": {
      display: "none",
    },
  },
  accordionDetails: {
    color: "white",
  },
  accordionGridItem: {
    textAlign: "center",
  },
  accordionGridSubtitle: {
    fontWeight: 600,
    textTransform: "uppercase",
  },
  innerBox: {
    margin: "0 auto",
    maxWidth: 1236,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  listContainer: {
    paddingLeft: theme.spacing(10),
    // eslint-disable-next-line
    ["@media (max-width:960px)"]: {
      paddingLeft: theme.spacing(0),
    },
  },
  listItemIcon: {
    minWidth: 40,
  },
  mcgillLogo: {
    maxWidth: 80,
  },
  paperContainer: {
    backgroundColor: "#42423e",
    color: "white",
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
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
    <Box className={classes.rootBox} id="education">
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
          <Accordion className={classes.accordion} elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: props.color }} />}
            >
              <Typography style={{ color: props.color, fontWeight: 100 }}>
                Relevant Coursework
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <Grid container spacing={2}>
                <Grid className={classes.accordionGridItem} item xs={12} md={6}>
                  <Typography
                    className={classes.accordionGridSubtitle}
                    style={{ color: props.color }}
                  >
                    Computer Science
                  </Typography>
                  <List className={classes.listContainer}>
                    {CSItems.map((item, index) => {
                      return (
                        <ListItem alignItems="flex-start" key={index}>
                          <ListItemIcon
                            className={classes.listItemIcon}
                            style={{ margin: 0 }}
                          >
                            <ArrowIcon style={{ color: props.color }} />
                          </ListItemIcon>
                          <ListItemText style={{ margin: 0 }}>
                            <Typography style={{ fontWeight: 100 }}>
                              {item.name}
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid>
                <Grid className={classes.accordionGridItem} item xs={12} md={6}>
                  <Typography
                    className={classes.accordionGridSubtitle}
                    style={{ color: props.color }}
                  >
                    Mathematics
                  </Typography>
                  <List className={classes.listContainer}>
                    {MathItems.map((item, index) => {
                      return (
                        <ListItem alignItems="flex-start" key={index}>
                          <ListItemIcon
                            className={classes.listItemIcon}
                            style={{ margin: 0 }}
                          >
                            <ArrowIcon style={{ color: props.color }} />
                          </ListItemIcon>
                          <ListItemText style={{ margin: 0 }}>
                            <Typography style={{ fontWeight: 100 }}>
                              {item.name}
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Box>
    </Box>
  );
}
