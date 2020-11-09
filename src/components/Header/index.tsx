import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import {AboutLink, HomeLink, MenuLink} from "../../shared/Links";

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
        color: '#fff'
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar position="absolute" color="transparent" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div>
                        <Hidden smDown>
                            <Typography variant="h6" color="primary">
                                <Link to="" className={classes.title}>Logo</Link>
                            </Typography>
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
                        <Button className={classes.navigationButton} color="inherit">
                            Gallery
                        </Button>
                    </div>
                    <div>
                        <IconButton aria-label="search" color="primary">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="display more actions" edge="end" color="primary">
                            <InstagramIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};

export default Header;

