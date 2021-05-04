import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import {AboutLink, HomeLink, MenuLink} from "../../shared/Links";
//import Logo from "../../assets/images/logo.png";
import Image from "../Image";
import {Container} from "@material-ui/core";
import AnotherLogo from "../../assets/images/eagle_logo_animation_transparent_colour_small.gif";
// import {useDarkContext} from "../../assets/theme/MaterialTheme";

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    navigationButton: {
        "borderRadius": theme.shape.borderRadius,
        "fontSize": "14px",
        "boxSizing": "border-box",
        "letterSpacing": "0.02857em"
    },
    title: {
        lineHeight: '30px',
        fontSize: '18px',
        borderRadius: '3px',
        textTransform: 'none',
        color: 'inherit',
        "&:hover,&:focus": {color: 'inherit', background: 'transparent'}
    },
    toolbar: {
        justifyContent: 'space-between',
        color: theme.palette.background.paper
    }
}));

const Header = () => {
    const classes = useStyles();
    // const {isDark, setTheme} = useDarkContext();
    //
    // const handleDarkThemeToggle = () => {
    //     localStorage.setItem('theme', isDark ? 'light' : 'dark');
    //     // @ts-ignore
    //     setTheme(!isDark);
    // }
    return (
        <React.Fragment>
            <AppBar position="static" elevation={1} className={classes.appBar}>
                <Container>
                    <Toolbar disableGutters className={classes.toolbar}>
                        <div>
                            <Hidden smDown>
                                <Image src={AnotherLogo} style={{height: '54px'}} />
                            </Hidden>
                        </div>
                        <div>
                            <Button className={classes.navigationButton} color="inherit" component={HomeLink}>
                                Home
                            </Button>
                            <Button className={classes.navigationButton} color="inherit" component={AboutLink}>
                                About
                            </Button>
                            <Button className={classes.navigationButton} color="inherit" component={MenuLink}>
                                Menu
                            </Button>
                        </div>
                        <div>
                            {/*<Button className={classes.navigationButton} color="inherit" onClick={handleDarkThemeToggle}>*/}
                            {/*    Gallery*/}
                            {/*</Button>*/}
                        </div>
                    </Toolbar>
                </Container>

            </AppBar>
        </React.Fragment>
    );
};

export default Header;

