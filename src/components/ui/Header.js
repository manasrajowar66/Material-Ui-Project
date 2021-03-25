import React,{useState,useEffect} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/world-grid.svg";
import {Link} from 'react-router-dom';


//Scroll Elevation Effect

const ElevetionScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

//MUI Styling classes

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  color: {
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    height: "2rem",
    margin: "0 0.3rem 0 0.5rem",
  },
  text: {
    textDecoration:'none',
    textTransform:'none',
    fontFamily: "Train One,cursive",
    color:'#fff'
  },
  tabContainer:{
    marginLeft:'auto'
  },
  tab:{
    ...theme.typography.tab,
    minWidth:10,
    marginLeft:'25px',
    
  },
  tabButton:{
    ...theme.typography.estimate,
    margin:' 0 25px 0 50px',
    height:'38px',
    backgroundColor:theme.palette.secondary.main,
    borderRadius:'50px',
  },
  buttonLogo:{
    '&:hover':{
      backgroundColor:'transparent'
    }
  }
}));


const Header = () => {
  const classes = useStyles();

  //State for active Tab

  const [activeTab,setTab] = useState(0);
  const [anchorEl,setAnchorEl] = useState(null);
  const [open,setOpen] = useState(false);
  const on ="true";

  const onChange = (e,selectedValue)=>{
    setTab(selectedValue);
  }

   const  onHandleClick = (e)=>{
     setAnchorEl(e.currentTarget);
     setOpen(true);
   }

   const onHandleClose = ()=>{
     setAnchorEl(null);
     setOpen(false);
   }

  useEffect(()=>{
    if(window.location.pathname === '/' && activeTab !== 0){
      setTab(0);
    }else if(window.location.pathname === '/services' && activeTab !== 1){
      setTab(1);
    }else if(window.location.pathname === '/revolution' && activeTab !== 2){
      setTab(2);
    }else if(window.location.pathname === '/about' && activeTab !== 3){
      setTab(3);
    }else if(window.location.pathname === '/contact-us' && activeTab !== 4){
      setTab(4);
    }else if(window.location.pathname === '/estimate' && activeTab !== 5){
      setTab(5);
    }
  },[setTab,activeTab]);

  return (
    <>
      <ElevetionScroll>
        <AppBar position="fixed" className={classes.color}>
          <Toolbar disableGutters>
          <Button component={Link} to='/' onClick={(e)=>setTab(0)} disableRipple className={classes.buttonLogo}>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography variant="h5" className={classes.text}>
              Dev Connector
            </Typography>
            </Button>
            <Tabs className={classes.tabContainer} onChange={onChange} value={activeTab} indicatorColor='primary' >
              <Tab label="Home" className={classes.tab} component={Link} to='/' on/>
              <Tab label="Services" className={classes.tab} component={Link} to='/services'
               aria-owns={anchorEl?"simple-menu":undefined}
                aria-haspopup={anchorEl?on:undefined}
                 onMouseOver={(e)=>onHandleClick(e)}
                 />
              <Tab label="The Revolution" className={classes.tab} component={Link} to='/revolution'/>
              <Tab label="About Us" className={classes.tab} component={Link} to='/about'/>
              <Tab label="Contact Us" className={classes.tab} component={Link} to='/contact-us'/>
            </Tabs>
            <Button variant='contained' className={classes.tabButton}>
              Free Estimate
            </Button>
            <Menu id='simple-menu' open={open} anchorEl={anchorEl} onClose={onHandleClose}
            MenuListProps={{onMouseLeave:onHandleClose}}
            >
              <MenuItem onClick={onHandleClose}>Custom Software Development</MenuItem>
              <MenuItem onClick={onHandleClose}>Mobile App Development</MenuItem>
              <MenuItem onClick={onHandleClose}>Website Development</MenuItem>
            </Menu> 
          </Toolbar>
        </AppBar>
      </ElevetionScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
