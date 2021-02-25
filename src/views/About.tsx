import React from 'react';
import {Box, Container, Grid, Theme, Typography} from "@material-ui/core";
import Image from "../components/Image";
import {makeStyles} from "@material-ui/core/styles";
import ManBlobPresentation from "../assets/svg/About/Presentation attributes/Group 50.svg"
import LadyBlobAbout from "../assets/svg/About/Presentation attributes/Group 49.svg";
import Footer from "../components/Footer";
import Button from "@material-ui/core/Button";
import ShopOutsideImage from "../assets/images/eagle_outside.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme: Theme) => ({
    heroSection: {
        padding: `${theme.spacing(1)}px`,
        [theme.breakpoints.up('md')]: {
            paddingTop: '40px',
            padding: '96px 64px',
            margin: "0 auto",
            maxWidth: '1236px',
            overflow: 'hidden'
        }
    },
    heroHeadingContainer: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
        [theme.breakpoints.up('md')]: {
            paddingTop: `${theme.spacing(10)}px`
        }
    }
}))

const About = () => {
    const classes = useStyles();

    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

    return (
        <React.Fragment>
            <section className={classes.heroSection}>
                <div>
                    <Grid container spacing={2} direction={isMobile ? "column-reverse" : undefined}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2} className={classes.heroHeadingContainer}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" color="primary" >
                                        About us
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}}>
                                        Eagle caribbean and english takeaway
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="caption" color="textSecondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button color="primary" variant="contained" size="large">
                                        See the chiefs
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Image src={ShopOutsideImage} />
                        </Grid>
                    </Grid>
                </div>
            </section>

            <section style={{width: '100%', height: '100%', position: 'relative'}}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Image src={LadyBlobAbout} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Grid container spacing={2} className={classes.heroHeadingContainer}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" color="primary" >
                                        Jane Doe
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h4" color="textPrimary" style={{fontWeight: 'bold'}}>
                                        Get to know how the manager
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="caption" color="textSecondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={4}>
                                        <Button color="primary" variant="contained" size="large">
                                            Explore our story
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section style={{width: '100%', height: '100%', position: 'relative'}}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Grid container spacing={2} className={classes.heroHeadingContainer}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" color="primary" >
                                        John Doe
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h4" color="textPrimary" style={{fontWeight: 'bold'}}>
                                        Get to know how the chief
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="caption" color="textSecondary">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={4}>
                                        <Button color="primary" variant="contained" size="large">
                                            Explore our story
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Image src={ManBlobPresentation} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default About;
