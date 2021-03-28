import { Button, Menu, MenuItem, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  tabButton: {
    ...theme.typography.estimate,
    margin: " 0 25px 0 50px",
    height: "38px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "#fff",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  itemSelected: {
    opacity: 1,
  },
}));

export const TabsUtils = ({
  setTab,
  activeTab,
  setAnchorEl,
  anchorEl,
  setIndex,
  selectedIndex,
}) => {
  const classes = useStyles();

  const onChange = (e, selectedValue) => {
    setTab(selectedValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (e, ind) => {
    handleClose();
    setIndex(ind);
    setTab(1);
  };

  const menuOption = [
    { name: "Services", path: "/services" },
    { name: "Custom Software", path: "/customsoftware" },
    { name: "Mobile App Development", path: "/mobileapps" },
    { name: "Web Development", path: "/webapps" },
  ];
  return (
    <>
      <Tabs
        className={classes.tabContainer}
        onChange={onChange}
        value={activeTab}
        indicatorColor="primary"
      >
        <Tab label="Home" className={classes.tab} component={Link} to="/" />
        <Tab
          label="Services"
          className={classes.tab}
          aria-owns={Boolean(anchorEl) ? "simple-menu" : undefined}
          aria-haspopup={Boolean(anchorEl) ? "true" : undefined}
          onMouseOver={(e) => handleClick(e)}
          component={Link}
          to="/services"
        />
        <Tab
          label="The Revolution"
          className={classes.tab}
          component={Link}
          to="/revolution"
        />
        <Tab
          label="About Us"
          className={classes.tab}
          component={Link}
          to="/about"
        />
        <Tab
          label="Contact Us"
          className={classes.tab}
          component={Link}
          to="/contact-us"
        />
      </Tabs>
      <Button variant="contained" className={classes.tabButton}>
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
      >
        {menuOption.map((menu, ind) => (
          <MenuItem
            key={ind}
            onClick={(e) => {
              handleMenuItemClick(e, ind);
            }}
            component={Link}
            to={menu.path}
            classes={{
              root: classes.menuItem,
              selected: classes.itemSelected,
            }}
            selected={ind === selectedIndex && activeTab === 1}
          >
            {menu.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default TabsUtils;
