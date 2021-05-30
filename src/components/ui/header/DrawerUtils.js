import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "0.3rem",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.8rem",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "45px",
    width: "45px",
    color: "#fff",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "#fff",
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
    // minWidth: "250px",
  },
  drawerEstimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    // borderRadius:'50px',
    // height:'45px',
    // margin:"10px 0px 0px opx",
  },
}));

const DrawerUtils = ({ setOpenDrawer, setTab, activeTab, openDrawer }) => {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            divider
            button
            component={Link}
            to="/"
            onClick={(e) => {
              setOpenDrawer(false);
              setTab(0);
            }}
            selected={0 === activeTab}
          >
            <ListItemText
              disableTypography
              className={
                activeTab === 0
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
            >
              Home
            </ListItemText>
          </ListItem>

          <ListItem
            divider
            button
            component={Link}
            to="/services"
            onClick={(e) => {
              setOpenDrawer(false);
              setTab(1);
            }}
            selected={1 === activeTab}
          >
            <ListItemText
              disableTypography
              className={
                activeTab === 1
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
            >
              Services
            </ListItemText>
          </ListItem>

          <ListItem
            divider
            button
            component={Link}
            to="/revolution"
            onClick={(e) => {
              setOpenDrawer(false);
              setTab(2);
            }}
            selected={2 === activeTab}
          >
            <ListItemText
              disableTypography
              className={
                activeTab === 2
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
            >
              The Revolution
            </ListItemText>
          </ListItem>

          <ListItem
            divider
            button
            component={Link}
            to="/about"
            onClick={(e) => {
              setOpenDrawer(false);
              setTab(3);
            }}
            selected={3 === activeTab}
          >
            <ListItemText
              disableTypography
              className={
                activeTab === 3
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
            >
              About Us
            </ListItemText>
          </ListItem>

          <ListItem
            divider
            button
            component={Link}
            to="/contact-us"
            onClick={(e) => {
              setOpenDrawer(false);
              setTab(4);
            }}
            selected={4 === activeTab}
          >
            <ListItemText
              disableTypography
              className={
                activeTab === 4
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
            >
              Contact Us
            </ListItemText>
          </ListItem>

          <ListItem
            divider
            button
            component={Link}
            to="/estimate"
            onClick={(e) => {
              setOpenDrawer(false);
              setTab(5);
            }}
            className={classes.drawerEstimateButton}
            selected={5 === activeTab}
          >
            <ListItemText
              disableTypography
              className={
                activeTab === 5
                  ? `${classes.drawerItem} ${classes.drawerItemSelected}`
                  : classes.drawerItem
              }
            >
              Free Estimate
            </ListItemText>
            {/* <Button variant="contained" className={classes.drawerEstimateButton}>
              Free Estimate
            </Button> */}
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
        
      >
        <MenuIcon  className={classes.drawerIcon}></MenuIcon>
      </IconButton>
    </>
  );
};

export default DrawerUtils;
