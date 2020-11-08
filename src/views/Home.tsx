import React from 'react';
import {Box, Container, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Blob from "../assets/svg/Homepage/Presentation attributes/blob_big.svg";
import Image from "../components/Image";
import clsx from "clsx";
import Plate from "../assets/svg/Homepage/Presentation attributes/plate.svg";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Rectangle from "../assets/svg/Homepage/Presentation attributes/Rectangle 2.svg";
import WhiteBlob from "../assets/svg/Homepage/Presentation attributes/Path 46.svg";

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
        marginBottom: `${theme.spacing(4)}px`,
        position: 'relative'
    },
    menuStory: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        position: 'relative',
        minHeight: '800px'
    },
    plateSection: {
        marginTop: `${theme.spacing(10)}px`,
    }
}))

const Home = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <section className={classes.root}>
                <div className={classes.elm}>
                    <figure className={classes.next}>
                        <img style={{height: '1300px', width: '100%'}} src={Blob} alt="Blob" />
                    </figure>
                </div>
                <div className={clsx(classes.plateContainer, classes.upperPlate)}>
                    <figure className={classes.next}>
                        <img style={{height: '300px', width: '100%'}} src={Plate} alt="Plate" />
                    </figure>
                </div>
                <div className={clsx(classes.plateContainer, classes.bottomPlate)}>
                    <figure className={classes.next}>
                        <img style={{height: '400px', width: '100%'}} src={Plate} alt="Plate" />
                    </figure>
                </div>
                <Container>
                    <div className={classes.intro}>
                        <Grid container justify="center">
                            <Grid item lg={5} xl={6}>
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
                    </div>
                </Container>
            </section>
            <section className={classes.storySection}>
                <Container>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <div>
                                <Image style={{height: '600px', zIndex: -1, position: 'absolute'}} src={Rectangle} alt="rectangle" />
                                <Image style={{marginTop: '7%'}} src={Plate} alt="plate" />
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
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
                            <Box mt={2}>
                                <Button color="primary" variant="contained" size="large">
                                    About us
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className={classes.menuStory}>
                <Container>
                    <Grid container>
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
                                        <Image src={Plate} alt="Plate" />
                                        <Typography variant="h6" align="center" color="inherit" gutterBottom>
                                            Dish name
                                        </Typography>
                                        <Typography variant="h6" align="center" color="inherit">
                                            £5.99
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Image src={Plate} alt="Plate" />
                                        <Typography variant="h6" align="center" color="inherit" gutterBottom>
                                            Dish name
                                        </Typography>
                                        <Typography variant="h6" align="center" color="inherit">
                                            £5.99
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={4}>
                                        <Image src={Plate} alt="Plate" />
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
            <section className={classes.plateSection}>
                <Container>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <Image src={Plate} alt="plate" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
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
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Home;