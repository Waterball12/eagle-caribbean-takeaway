import React from 'react';
import HeroImage from "../assets/svg/Menu/Presentation attributes/Group 35.svg";
import clsx from "clsx";
import {Box, Container, Grid, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Image from "../components/Image";
import Footer from "../components/Footer";
import CrossFire from "../assets/images/food-croos-fire.svg";
import DishOne from "../assets/images/Dish1Small.png";
import DishTwo from "../assets/images/Dish2FishSmall.png";
import DishThree from "../assets/images/Dish3CarrotsSmall.png";
import DishFour from "../assets/images/Dish4RiceSmall.png";
import DishFive from "../assets/images/Dish5RiceAndsaladSmall.png";
import DishSix from "../assets/images/Dish6avocadoSmall.png";
import DishSeven from "../assets/images/Dish7Small.png";
import DishEight from "../assets/images/Dish8homepage.png";
import DishNine from "../assets/images/Dish9Small.png";
import HeroHeader from "../assets/svg/About/Presentation attributes/Group 47.svg";

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
    lastStory: {
        marginBottom: '68px'
    }
}))

const Menu = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <section className={classes.root}>
                <div className={classes.elm}>
                    <figure className={classes.next}>
                        <img style={{height: '500px', width: '100%'}} src={HeroHeader} alt="Blob" />
                    </figure>
                </div>
                <Container>
                    <Box mt={10}>
                        <Grid container spacing={3}>
                            <Grid item lg={5} xl={6}>
                                <div style={{zIndex: 5, color: '#000000', marginTop: '28px'}}>
                                    <Typography variant="h1" color="primary" gutterBottom>
                                        Menu
                                    </Typography>
                                    <Typography variant="subtitle1" color="inherit">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing, Lorem ipsum dolor sit amet, consectetur adipiscing,
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                    </Typography>
                                    <Box mt={3}>
                                        <Button variant="contained" color="primary">
                                            Go to full menu
                                        </Button>
                                    </Box>
                                </div>
                            </Grid>
                            <Grid item lg={7} xl={6}>
                                <Image src={HeroImage} alt="Hero image" />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>
            <section>
                <Container>
                    <Image src={CrossFire} />
                </Container>
            </section>
            <section className={clsx(classes.menuStory, classes.primaryBackground, classes.mainStory)}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Box color="#fff" mt={10} mb={7} position="relative">
                                <Typography variant="h4" align="center" color="inherit" gutterBottom>
                                    Menu
                                </Typography>
                                <Typography variant="h6" color="inherit" align="center" gutterBottom>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                </Typography>
                            </Box>
                            <Box>
                                <Grid container>
                                    <Grid item xs={12} lg={4}>
                                        <Image src={DishOne} alt="Plate" />
                                        <Typography variant="h6" align="center" color="inherit" gutterBottom>
                                            Dish name
                                        </Typography>
                                        <Typography variant="h6" align="center" color="inherit">
                                            £5.99
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Image src={DishTwo} alt="Plate" />
                                        <Typography variant="h6" align="center" color="inherit" gutterBottom>
                                            Dish name
                                        </Typography>
                                        <Typography variant="h6" align="center" color="inherit">
                                            £5.99
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Image src={DishThree} alt="Plate" />
                                        <Typography variant="h6" align="center" color="inherit" gutterBottom>
                                            Dish name
                                        </Typography>
                                        <Typography variant="h6" align="center" color="inherit">
                                            £5.99
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className={classes.menuStory}>
                <Container>
                    <Box pt="15%">
                        <Grid container spacing={4}>
                            <Grid item xs={12} lg={4}>
                                <Image src={DishFour} alt="Plate" />
                                <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
                                    Dish name
                                </Typography>
                                <Typography variant="h6" align="center" color="textSecondary">
                                    £5.99
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Image src={DishFive} alt="Plate" />
                                <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
                                    Dish name
                                </Typography>
                                <Typography variant="h6" align="center" color="textSecondary">
                                    £5.99
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Image src={DishSix} alt="Plate" />
                                <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
                                    Dish name
                                </Typography>
                                <Typography variant="h6" align="center" color="textSecondary">
                                    £5.99
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>
            <section className={clsx(classes.menuStory, classes.primaryBackground, classes.lastStory)}>
                <Container>
                    <Box pt="15%">
                        <Grid container spacing={4}>
                            <Grid item xs={12} lg={4}>
                                <Image src={DishSeven} alt="Plate" />
                                <Typography variant="h6" align="center" color="inherit" gutterBottom>
                                    Dish name
                                </Typography>
                                <Typography variant="h6" align="center" color="inherit">
                                    £5.99
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Image src={DishEight} alt="Plate" />
                                <Typography variant="h6" align="center" color="inherit" gutterBottom>
                                    Dish name
                                </Typography>
                                <Typography variant="h6" align="center" color="inherit">
                                    £5.99
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={4}>
                                <Image src={DishNine} alt="Plate" />
                                <Typography variant="h6" align="center" color="inherit" gutterBottom>
                                    Dish name
                                </Typography>
                                <Typography variant="h6" align="center" color="inherit">
                                    £5.99
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default Menu;