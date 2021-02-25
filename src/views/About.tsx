import React from 'react';
import {Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Theme, Typography} from "@material-ui/core";
import Image from "../components/Image";
import {makeStyles} from "@material-ui/core/styles";
import ManBlobPresentation from "../assets/svg/About/Presentation attributes/Group 50.svg"
import LadyBlobAbout from "../assets/svg/About/Presentation attributes/Group 49.svg";
import Footer from "../components/Footer";
import Button from "@material-ui/core/Button";
import ShopOutsideImage from "../assets/images/eagle_outside.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavigationToImage from "../assets/images/undraw_Navigation_re_wxx4.svg";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Divider from "@material-ui/core/Divider";

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
    },
    mapContainer: {
        flex: '0 0 50%',
        position: 'relative',
        maxWidth: '50%',
        [theme.breakpoints.down('sm')]: {
            flex: '0 0 100%',
            height: '300px',
            maxWidth: '100%'
        }
    },
    mapCover: {
        width: '50vw',
        height: '100%',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    mapFrameContainer: {
        width: '100%',
        height: '100%',
        overflow: 'hidden'
    },
    mapShape: {
        left: '0%',
        width: '100%',
        height: '100%',
        position: 'absolute',
        [theme.breakpoints.up('sm')]: {
            clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
            shapeOutside: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)'
        }
    },
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
    mapSection: {
        width: '100%',
        height: '100%',
        margin: '0 auto',
        display: 'flex',
        position: 'relative',
        maxWidth: '1236px',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse'
        }
    },
    mapInfo: {
        padding: '48px 16px',
        width: '100%',
        margin: '0 auto',
        maxWidth: '1236px',
        [theme.breakpoints.up('sm')]: {
            padding: '64px 64px'
        },
        [theme.breakpoints.up('md')]: {
            padding: '96px 64px'
        },
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
            <section style={{backgroundColor: 'rgb(39 176 40 / 15%)',width: '100%', height: '100%', position: 'relative', marginTop: '36px'}}>
                <Container>
                    <Box textAlign="center" pb={5} pt={5}>
                        <Typography variant="subtitle1" color="primary" style={{fontWeight: 'bold'}}>
                            Location
                        </Typography>
                        <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}}>
                            Where to find us
                        </Typography>
                    </Box>
                    <Box pt={3} pb={7}>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} sm={4} md={4}>
                                <Image src={NavigationToImage} />
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" color="textSecondary">
                                            75 Bootham Crescent
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" color="textSecondary">
                                            RINGSHALL
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" color="textSecondary">
                                            IP14 4NW
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <Grid container spacing={2}>
                                    <List dense>
                                        <ListItem>
                                            <ListItemIcon>
                                                <PhoneIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="202-2555-0186"
                                                primaryTypographyProps={{
                                                    variant: "h6",
                                                    color: "textSecondary"
                                                }}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <EmailIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary="eagles@gmail.com"
                                                primaryTypographyProps={{
                                                    variant: "h6",
                                                    color: "textSecondary"
                                                }}
                                            />
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>
            <section style={{width: '100%', height: '100%', position: 'relative', overflow: 'hidden'}}>
                <div style={{width: '100%', height: '100%', overflow: 'hidden'}}>
                    <div className={classes.mapSection}>
                        <section className={classes.mapInfo}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1" color="primary" style={{fontWeight: 'bold'}}>
                                                Maps
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" color="textPrimary" style={{fontWeight: 'bold'}}>
                                                Lorem Ipsum is simply dummy text
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h6" color="textSecondary">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </section>
                        <div className={classes.mapContainer}>
                            <div className={classes.mapCover}>
                                <div className={classes.mapFrameContainer}>
                                    <div className={classes.mapShape}>
                                        <iframe
                                            title="map"
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            loading="lazy"
                                            style={{border:0}}
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.7887877704825!2d-1.9946781840467935!3d52.5191613440435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzA5LjAiTiAxwrA1OSczMy4wIlc!5e0!3m2!1sen!2suk!4v1614251881327!5m2!1sen!2suk"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider variant="fullWidth" />
            </section>
            <section className={classes.menuSection}>
                <Container>
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={12}>
                            <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}} align="center">
                                See our complete menu
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6" color="textSecondary" align="center">
                                We have over X dishes, ready for you
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box textAlign="center">
                                <Button color="primary" variant="contained">
                                    View menu
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default About;
