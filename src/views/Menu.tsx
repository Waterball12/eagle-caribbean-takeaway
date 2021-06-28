import React from 'react';
import {Box, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Image from "../components/Image";
import DishOne from "../assets/images/Dish1Small.png";
import DishTwo from "../assets/images/Dish2FishSmall.png";
import DishThree from "../assets/images/Dish3CarrotsSmall.png";
import DishFour from "../assets/images/Dish4RiceSmall.png";
import DishFive from "../assets/images/Dish5RiceAndsaladSmall.png";
import DishSix from "../assets/images/Dish6avocadoSmall.png";
import DishSeven from "../assets/images/Dish7Small.png";
import DishEight from "../assets/images/Dish8homepage.png";
import FullMenu from "../assets/images/Menu_full.png";
import DishNine from "../assets/images/Dish9Small.png";
import DishCard from "../components/Card/DishCard";

const useStyles = makeStyles(theme => ({
    heroHeadingContainer: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`
    }
}))

const Menu = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Box width="100%" height="100%" position="relative" py={5}>
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
                                heading="Curry goat, white rice with steam veg"
                                image={DishOne}
                                overline=""
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Steam fish with steam veg"
                                image={DishTwo}
                                overline=""
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Rice and peas, fry chicken with veg"
                                image={DishFour}
                                overline=""
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.heroHeadingContainer}>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Macaroni and cheese"
                                image={DishNine}
                                overline=""
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Steam fish with hard food"
                                image={DishSix}
                                overline=""
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Aubergine + sweet potato curry"
                                image={DishFive}
                                overline=""
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.heroHeadingContainer}>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Fried fish"
                                image={DishThree}
                                overline=""
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="BBQ Wings"
                                image={DishSeven}
                                overline=""
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body=""
                                heading="Stuff dumplings"
                                image={DishEight}
                                overline=""
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box component="section" position="relative" minHeight="800px">
                <Container>
                    <Box py={3} textAlign="center">
                        <Typography variant="h3" align="center" color="textSecondary" gutterBottom>
                            Full menu
                        </Typography>
                        <Image src={FullMenu} />
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default Menu;
