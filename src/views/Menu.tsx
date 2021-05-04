import React from 'react';
import {Box, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Image from "../components/Image";
import Footer from "../components/Footer";
import DishOne from "../assets/images/Dish1Small.png";
import DishTwo from "../assets/images/Dish2FishSmall.png";
import DishThree from "../assets/images/Dish3CarrotsSmall.png";
import DishFour from "../assets/images/Dish4RiceSmall.png";
import DishFive from "../assets/images/Dish5RiceAndsaladSmall.png";
import DishSix from "../assets/images/Dish6avocadoSmall.png";
import FullMenu from "../assets/images/Menu_full.png";
import DishCard from "../components/Card/DishCard";

const useStyles = makeStyles(theme => ({
    elm: {
        "backgroundRepeat": "no-repeat",
        "position": "absolute",
        "overflow": "hidden",
        "top": '-46%',
        "left": 0,
        "width": "100%",
        "height": "100%",
        backgroundSize: 'contain',
        "display": "flex !important",
        "alignItems": "center !important"
    },
    root: {
        "display": "block",
        "paddingTop": "147.188px",
        "minHeight": "780px",
        "overflow": "hidden",
        "background": "transparent",
        "position": "relative",
        "zIndex": 0
    },
    next: {
        width: '100%',
        display: 'block',
        maxWidth: '100%',
        minHeight: '1px',
        margin: 0,
    },
    menuStory: {
        position: 'relative',
        minHeight: '800px'
    },
    primaryBackground: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    mainStory: {
        marginTop: '48px'
    },
    heroHeadingContainer: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`
    },
    heroSection: {
        padding: `${theme.spacing(1)}px`,
        [theme.breakpoints.up('md')]: {
            paddingTop: '40px',
            padding: '96px 64px',
            margin: "0 auto",
            maxWidth: '1236px',
            overflow: 'hidden'
        }
    }
}))

const Menu = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <section style={{width: '100%', height: '100%', position: 'relative', paddingTop: '56px', paddingBottom: '56px'}}>
                <Container>
                    <Box textAlign="center">
                        <Typography variant="subtitle1" color="primary" >
                            Features
                        </Typography>
                        <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}}>
                            Our best dishes
                        </Typography>
                    </Box>
                    <Grid container spacing={2} className={classes.heroHeadingContainer}>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Curry"
                                image={DishOne}
                                overline="Lorem Ipsum"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Fish"
                                image={DishTwo}
                                overline="Lorem Ipsum"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Rice and something"
                                image={DishFour}
                                overline="Lorem Ipsum"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.heroHeadingContainer}>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Carrots with meat"
                                image={DishThree}
                                overline="Lorem Ipsum"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Meat maybe?"
                                image={DishSix}
                                overline="Lorem Ipsum"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Green yellow white"
                                image={DishFive}
                                overline="Lorem Ipsum"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className={classes.menuStory}>
                <Container>
                    <Box py={3} textAlign="center">
                        <Typography variant="h3" align="center" color="textSecondary" gutterBottom>
                            Full menu
                        </Typography>
                        <Image src={FullMenu} />
                    </Box>
                </Container>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default Menu;
