import React from 'react';
import './App.css';
import {AppBar, Toolbar, Button, makeStyles} from "@material-ui/core";
import { Link } from "react-router-dom";

const headersData = [
    {
      label: "Questionairre",
      href: "/quiz",
    },
    {
      label: "Get EV Stations",
      href: "/statistics",
    },
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "History",
      href: "/history",
    }
  ];

const useStyles = makeStyles(() => ({
    header: {
      background: "transparent",
      boxShadow: 'none',
      paddingRight: "2%",
      paddingLeft: "2%",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        textAlign: "right",
        color: '#f5efed',
        fontSize: 25

    },
    headerButton: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: '#f5efed'
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

function HomeHeader() {
    const { header, logo, headerButton, toolbar } = useStyles();

    const displayDesktop = () => {
      return <Toolbar className={toolbar}>{evandgoLogo} <div>{getMenuButtons()}</div></Toolbar>;
    };

    const evandgoLogo = (
        <Button className={logo} to="/" component={Link}>
          EV Switch
        </Button>
      );
    
    const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
        return (
        <Button
            {...{
            key: label,
            color: "inherit",
            to: href,
            component: Link,
            className: headerButton
            }}
        >
            {label}
        </Button>
        );
    });
    };
      
      
    
    return (
      <header>
        <AppBar className={header}>{displayDesktop()}</AppBar>
      </header>
    );
  }

export default HomeHeader