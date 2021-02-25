import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {AboutLink, GalleryLink, HomeLink, MenuLink} from "../../shared/Links";
import Logo from "../../assets/images/logo.png";
import Image from "../Image";

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

    return (
        <React.Fragment>
            <AppBar position="static" elevation={1} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div>
                        <Hidden smDown>
                            <Image src={Logo} style={{height: '64px'}} />
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
                        <Button className={classes.navigationButton} color="inherit" component={GalleryLink}>
                            Gallery
                        </Button>
                    </div>
                    <div />
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;

