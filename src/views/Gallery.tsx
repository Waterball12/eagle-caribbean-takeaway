import React from 'react';
import {Box, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import DishCard from "../components/Card/DishCard";
import DishOne from "../assets/images/Dish1Small.png";
import DishTwo from "../assets/images/Dish2FishSmall.png";
import DishThree from "../assets/images/Dish3CarrotsSmall.png";
import DishFour from "../assets/images/Dish4RiceSmall.png";
import DishFive from "../assets/images/Dish5RiceAndsaladSmall.png";
import DishSix from "../assets/images/Dish6avocadoSmall.png";
import DishSeven from "../assets/images/Dish7Small.png";
import DishEight from "../assets/images/Dish8homepage.png";
import DishNine from "../assets/images/Dish9Small.png";
import {SocialLink, SocialProvider} from "@mui-treasury/components/socialLink";
import {useBallSocialLinkStyles} from "@mui-treasury/styles/socialLink/ball";

const useStyles = makeStyles(theme => ({
    menuSection: {
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
        padding: '48px 16px',
        [theme.breakpoints.up('sm')]: {
            padding: '64px 64px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '96px 96px'
        }
    },
    gallerySection: {
        padding: '48px 16px',
        [theme.breakpoints.up('sm')]: {
            padding: '64px 64px'
        }
    }
}))

export interface GalleryElement {
    src: any;
}

const images: GalleryElement[] = [
    {src: DishOne},
    {src: DishTwo},
    {src: DishThree},
    {src: DishFour},
    {src: DishFive},
    {src: DishSix},
    {src: DishSeven},
    {src: DishEight},
    {src: DishNine}
]

const Gallery = () => {
    const classes = useStyles();

    return (
        <div>
            <section className={classes.menuSection}>
                <Container>
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={12}>
                            <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}} align="center">
                                Out complete gallery
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" color="textSecondary" align="center">
                                We have over X dishes, ready for you
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box mt={1} textAlign="center">
                                {/*@ts-ignore*/}
                                <SocialProvider useStyles={useBallSocialLinkStyles}>
                                    <SocialLink brand={'Facebook'}  />
                                    <SocialLink brand={'Twitter'} />
                                </SocialProvider>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className={classes.gallerySection}>
                <Container>
                    <Grid container spacing={3}>
                        {images.map((i, key) => (
                            <Grid item xs={12} sm={6} md={4}>
                                <DishCard image={i.src} body="" heading="" overline="" />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>
        </div>
    );
};

export default Gallery;
