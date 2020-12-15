import React from 'react';
import {Box, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Blob from "../assets/svg/Homepage/Presentation attributes/blob_big.svg";
import Image from "../components/Image";
import Plate from "../assets/images/Dish2FishSmall.png";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Footer from "../components/Footer";
import OurStoryImage from "../assets/images/homepage_our_story.svg";
import DishOne from "../assets/images/Dish1Small.png";
import DishTwo from "../assets/images/Dish3CarrotsSmall.png";
import DishThree from "../assets/images/Dish4RiceSmall.png";
import DishFour from "../assets/images/Dish5RiceAndsaladSmall.png";
//@ts-ignore
import Fade from "react-reveal/Fade";
//@ts-ignore
import Bounce from 'react-reveal/Bounce';


const useStyles = makeStyles(theme => ({
    elm: {
        "backgroundRepeat": "no-repeat",
        "position": "absolute",
        "overflow": "hidden",
        "top": '-25%',
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
    upperPlate: {
        "top": '5%',
        "left": '2%',
    },
    bottomPlate: {
        "top": '10%',
        "left": '-20%',
        [theme.breakpoints.down('sm')]: {
            left: '-15%',
            top: '7%'
        },
        [theme.breakpoints.up('lg')]: {
            left: '-15%'
        }
    },
    plateContainer: {
        "width": "100%",
        "height": "100%",
        backgroundSize: 'contain',
        "backgroundRepeat": "no-repeat",
        "position": "absolute",
        "overflow": "hidden",
    },
    intro: {
        zIndex: 100,
        paddingTop: `${theme.spacing(20)}px`,
        paddingLeft: '25%',
        paddingBottom: `${theme.spacing(2)}px`,
        position: 'relative'
    },
    storySection: {
        minHeight: '800px',
        position: 'relative',
        overflow: 'hidden'
    },
    menuStory: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        position: 'relative',
        minHeight: '800px',
        overflow: 'hidden'
    },
    plateSection: {
        marginTop: `${theme.spacing(10)}px`,
        overflow: 'hidden'
    },
    centerMd: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginBottom: `${theme.spacing(2)}px`
        }
    }
}))

const Home = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <section className={classes.root}>
                <Fade top>
                    <div className={classes.elm} style={{zIndex: -1}}>
                        <figure className={classes.next}>
                            <img style={{height: '1300px', width: '100%'}} src={Blob} alt="Blob" />
                        </figure>
                    </div>
                </Fade>
                <div style={{width: '100%', height: '100%', zIndex: 1, position: 'absolute', 'left': 0, top: '100px'}}>
                    <Container>
                        <Fade delay={700}>
                            <Grid container justify="center" alignItems="center">
                                <Grid item>
                                    <Image style={{height: '300px'}} src={Plate} />
                                </Grid>
                                <Grid item lg={4} xl={4}>
                                    <div style={{zIndex: 5, color: '#fff'}}>
                                        <Typography variant="h1" color="inherit">
                                            Eagles
                                        </Typography>
                                        <Typography variant="subtitle1" color="inherit">
                                            Caribbean & English Take-Away
                                        </Typography>
                                        <Box mt={2}>
                                            <Button variant="outlined" color="inherit">
                                                Find us
                                            </Button>
                                        </Box>
                                    </div>
                                </Grid>
                            </Grid>
                        </Fade>
                    </Container>
                </div>
            </section>
            <section className={classes.storySection}>
                <Container>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} sm={6} lg={6}>
                            <Bounce left>
                                <Image src={OurStoryImage} alt="Placeholder" />
                            </Bounce>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <Bounce right>
                                <Typography variant="h4" align="center" gutterBottom color="textPrimary">
                                    Our story
                                </Typography>
                                <Box mt={2} mb={3}>
                                    <Divider variant="middle" />
                                </Box>
                                <Box mb={3}>
                                    <Typography variant="h5" align="center" color="textSecondary">
                                        Eagle Caribbean & English Take-out
                                    </Typography>
                                </Box>
                                <Typography variant="subtitle1" color="textSecondary">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                    an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                                </Typography>
                                <Box mt={2} className={classes.centerMd}>
                                    <Button color="primary" variant="contained" size="large">
                                        About us
                                    </Button>
                                </Box>
                            </Bounce>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className={classes.menuStory}>
                    <Container>
                        <Grid container>
                            <Grid item xs={12}>
                                <Fade>
                                    <Box color="#fff" mt={10} mb={7} position="relative">
                                        <Typography variant="h4" align="center" color="inherit" gutterBottom>
                                            Menu
                                        </Typography>
                                        <Typography variant="h6" color="inherit" align="center" gutterBottom>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                        </Typography>
                                    </Box>
                                </Fade>
                                <Box>
                                    <Grid container>
                                        <Grid item xs={12} lg={4}>
                                            <Bounce left>
                                                <Image src={DishOne} alt="Plate" />
                                                <Typography variant="h6" align="center" color="inherit" gutterBottom>
                                                    Dish name
                                                </Typography>
                                                <Typography variant="h6" align="center" color="inherit">
                                                    £5.99
                                                </Typography>
                                            </Bounce>
                                        </Grid>
                                        <Grid item xs={12} lg={4}>
                                            <Fade bottom>
                                                <Image src={DishTwo} alt="Plate" />
                                                <Typography variant="h6" align="center" color="inherit" gutterBottom>
                                                    Dish name
                                                </Typography>
                                                <Typography variant="h6" align="center" color="inherit">
                                                    £5.99
                                                </Typography>
                                            </Fade>
                                        </Grid>
                                        <Grid item xs={12} lg={4}>
                                            <Bounce right>
                                                <Image src={DishThree} alt="Plate" />
                                                <Typography variant="h6" align="center" color="inherit" gutterBottom>
                                                    Dish name
                                                </Typography>
                                                <Typography variant="h6" align="center" color="inherit">
                                                    £5.99
                                                </Typography>
                                            </Bounce>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
            </section>
            <section className={classes.plateSection}>
                <Container>
                    <Grid container spacing={5} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <Bounce left>

                                <Image src={DishFour} alt="plate" />
                            </Bounce>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Bounce right>
                                <Typography variant="subtitle1" >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled
                                </Typography>
                                <Box mt={2}>
                                    <Button color="primary" variant="contained" size="large">
                                        About us
                                    </Button>
                                </Box>
                            </Bounce>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default Home;