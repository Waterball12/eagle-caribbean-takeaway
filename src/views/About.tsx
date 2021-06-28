import React from 'react';
import {Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Theme, Typography} from "@material-ui/core";
import Image from "../components/Image";
import {makeStyles} from "@material-ui/core/styles";
import ManBlobPresentation from "../assets/svg/About/Presentation attributes/Group 50.svg"
import LadyBlobAbout from "../assets/svg/About/Presentation attributes/Group 49.svg";
import Button from "@material-ui/core/Button";
import ShopOutsideImage from "../assets/images/eagle_outside.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavigationToImage from "../assets/images/undraw_Navigation_re_wxx4.svg";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Divider from "@material-ui/core/Divider";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import {MenuLink} from "../shared/Links";

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
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={2} className={classes.heroHeadingContainer}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" color="primary" >
                                        About us
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h4" color="textPrimary" style={{fontWeight: 'bold'}}>
                                        Eagle's Caribbean and English Takeaway
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1" color="textSecondary">
                                        Eagle’s Caribbean and English Takeaway was first established in July 2018 where we began to build a great customer base.
                                        Being situated in Smethwick Birmingham means we are close in proximity to a number of towns and cities surrounding Birmingham.
                                        Available on JUST EAT and UBEREAT we also offer a collection and delivery service. With a 4 star rating from the food standard
                                        agency our food is prepared to the highest of standards.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button color="primary" variant="contained" size="large" href="#chefs">
                                        Meet the managers
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Image src={ShopOutsideImage} />
                        </Grid>
                    </Grid>
                </div>
            </section>
            <Box width="100%" height="100%" position="relative">
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Image src={LadyBlobAbout} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Grid container spacing={2} className={classes.heroHeadingContainer}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" color="textPrimary" style={{fontWeight: 'bold'}}>
                                        Faith Donalds
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1" color="textSecondary">
                                        Faith has been the jubilant and pleasurable manageress representing the business for a number of years.
                                        She shares a passion for exploring exotic foods and incorporates her own culture into the
                                        flavourful dishes produced in the kitchen. She represents both Caribbean and English cultures
                                        with pride and also caters for weddings, parties and family functions.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box width="100%" height="100%" position="relative">
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Grid container spacing={2} className={classes.heroHeadingContainer}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" color="textPrimary" style={{fontWeight: 'bold'}}>
                                        Eric Thompson
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1" color="textSecondary">
                                        Eric has been the master behind creating the most delicious delicacies we offer here at Eagle's
                                        Caribbean and English Takeaway. With over 30 years’ experience from around the globe bringing both
                                        Caribbean and English dishes together in one place. Eric's experience includes cooking at
                                        various Carnivals and festivals including Jamaica's renown Independence celebration in St.
                                        Paul's Square, Birmingham.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Image src={ManBlobPresentation} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box bgcolor="rgb(39 176 40 / 15%)" width="100%" height="100%" position="relative" mt={4}>
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
                                            63 CHURCH ROAD
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" color="textSecondary">
                                            SMETHWICK
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" color="textSecondary">
                                            B67 6HA
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
                                                primary="0121-565-1093"
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
                                                primary="eaglescaribbeantakeaway@gmail.com"
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
            </Box>
            <Box component="section" width="100%" height="100%" position="relative" overflow="hidden">
                <Box width="100%" height="100%" overflow="hidden">
                    <div className={classes.mapSection}>
                        <section className={classes.mapInfo}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1" color="primary" style={{fontWeight: 'bold'}}>
                                                Maps & Time
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h4" color="textPrimary" style={{fontWeight: 'bold'}}>
                                                Opening hours
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TableContainer>
                                                <Table>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>
                                                                Monday to Friday
                                                            </TableCell>
                                                            <TableCell>
                                                                8AM-9PM
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>
                                                                Saturday
                                                            </TableCell>
                                                            <TableCell>
                                                                8AM-9PM
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>
                                                                Sunday
                                                            </TableCell>
                                                            <TableCell>
                                                                Closed
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </section>
                        <div className={classes.mapContainer}>
                            <div className={classes.mapCover}>
                                <Box width="100%" height="100%" overflow="hidden">
                                    <div className={classes.mapShape}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.650308434639!2d-1.9719873841938116!3d52.48546697980768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd6564d777e9%3A0x6549df04cd00057d!2s63%20Church%20Rd%2C%20Smethwick%20B67%206HA!5e0!3m2!1sen!2suk!4v1624352550347!5m2!1sen!2suk"
                                            title="map"
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            loading="lazy"
                                            style={{border:0}}
                                        />
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </div>
                </Box>
                <Divider variant="fullWidth" />
            </Box>
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
                                We have mounth watering dishes ready for you
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box textAlign="center">
                                <Button color="primary" variant="contained" component={MenuLink}>
                                    View menu
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default About;
