import React from 'react';
import {Box, Container, Grid, Typography} from "@material-ui/core";
import Image from "../components/Image";
import {makeStyles} from "@material-ui/core/styles";
import HeroHeader from "../assets/svg/About/Presentation attributes/Group 47.svg";
import ManBlobAbout from "../assets/svg/About/Presentation attributes/Group 45.svg";
import ManBlobPresentation from "../assets/svg/About/Presentation attributes/Group 50.svg"
import LadyBlobAbout from "../assets/svg/About/Presentation attributes/Group 49.svg";
import AboutLines from "../assets/svg/About/Presentation attributes/Group 46.svg"
import Divider from "../assets/svg/About/Presentation attributes/Group 54.svg"
import FindUseImage from "../assets/svg/About/Presentation attributes/Group 52.svg"
import GoogleMapsPlaceholder from "../assets/svg/About/Presentation attributes/Image 1.svg";
import Footer from "../components/Footer";

const useStyles = makeStyles(() => ({
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
}))

const About = () => {
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
                            <Grid item lg={6} xl={6}>
                                <Image src={AboutLines} alt="Hero image" />
                            </Grid>
                            <Grid item lg={6} xl={6}>
                                <Image src={ManBlobAbout} alt="Hero image" />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>
            <section>
                <Container>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={12} lg={6}>
                            <Image src={LadyBlobAbout} alt="rectangle" />
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Typography variant="h2" color="primary" gutterBottom>
                                Some title
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk
                                nown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, rema
                                ining essentially unchanged. It was popularised in the 1960s with the release o
                                f Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section style={{marginTop: '5%', marginBottom: '5%'}}>
                <Container>
                    <Box display="flex" justifyContent="center" height="100%">
                        <Image src={Divider} alt="Divider" />
                    </Box>
                </Container>
            </section>
            <section>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={6}>
                            <Typography variant="h2" color="primary" gutterBottom style={{marginTop: '23%'}}>
                                Some title
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unk
                                nown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, rema
                                ining essentially unchanged. It was popularised in the 1960s with the release o
                                f Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Image src={ManBlobPresentation} alt="rectangle" />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section>
                <Container>
                    <Box position="relative" width="100%">
                        <Image src={FindUseImage} alt="Find us" />
                    </Box>
                    <Box position="relative" width="100%" mt="48px">
                        <Image src={GoogleMapsPlaceholder} alt="Google maps" />
                    </Box>
                </Container>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default About;