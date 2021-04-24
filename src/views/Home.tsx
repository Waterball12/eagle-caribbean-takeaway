import React, {useState} from 'react';
import {Box, Container, Dialog, DialogActions, DialogContent, Grid, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Image from "../components/Image";
import Button from "@material-ui/core/Button";
import Footer from "../components/Footer";
import DishOne from "../assets/images/Dish1Small.png";
import DishTwo from "../assets/images/Dish3CarrotsSmall.png";
import DishFour from "../assets/images/Dish5RiceAndsaladSmall.png";
import DishPlate from "../assets/images/homepage_Banner.jpg";
import CategoryCard from "../components/Card/CategoryCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {SocialLink, SocialProvider} from '@mui-treasury/components/socialLink'
import {useBallSocialLinkStyles} from '@mui-treasury/styles/socialLink/ball';
import DishCard from "../components/Card/DishCard";
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import dishIcons, {DishCategories} from "../shared/DishCategories";
import LinearImage from "../assets/images/lineart_background_2.jpg";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const useStyles = makeStyles(theme => ({
    heroHeadingContainer: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2)}px`,
        [theme.breakpoints.up('md')]: {
            paddingTop: `${theme.spacing(10)}px`
        }
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

const Home = () => {
    const classes = useStyles();
    const [menu, setMenu] = useState<DishCategories | null>(null);


    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    return (
        <React.Fragment>
            <section className={classes.heroSection}>
                <div>
                    <Grid container spacing={2} direction={isMobile ? "column-reverse" : undefined}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2} className={classes.heroHeadingContainer}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" color="primary" >
                                        Takeaway
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}}>
                                        Caribbean food like never before.
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
                                        View menu
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={1}>
                                        {/*@ts-ignore*/}
                                        <SocialProvider useStyles={useBallSocialLinkStyles}>
                                            <SocialLink brand={'Facebook'}  />
                                            <SocialLink brand={'Twitter'} />
                                        </SocialProvider>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide><Image src={DishPlate} /></SwiperSlide>
                                <SwiperSlide><Image src={DishPlate} /></SwiperSlide>
                                <SwiperSlide><Image src={DishPlate} /></SwiperSlide>
                            </Swiper>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <section style={{width: '100%', height: '100%', position: 'relative'}}>
                <Container>
                    <Box mb={3}>
                        <Grid container spacing={2}>
                            <Typography variant="h4" color="textSecondary">
                                Categories
                            </Typography>
                        </Grid>
                    </Box>
                    <Grid container spacing={2}>
                        {dishIcons.slice(0, 6).map(category => (
                            <Grid item xs={6} md={2}>
                                <CategoryCard onClick={() => setMenu(category)} title={category.name} icon={<Image src={category.icon} />} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={2}>
                        {dishIcons.slice(6, 12).map(category => (
                            <Grid item xs={6} md={2}>
                                <CategoryCard onClick={() => setMenu(category)} title={category.name} icon={<Image src={category.icon} />} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                <Dialog open={Boolean(menu)} onClose={() => setMenu(null)} fullScreen={isMobile}>
                    <DialogContent>
                        <Box py={4}>
                            <Image variant="square" src={menu?.menu} />
                        </Box>
                    </DialogContent>
                    {isMobile && (
                        <DialogActions>
                            <Button variant="outlined" fullWidth onClick={() => setMenu(null)} >
                                Nice!
                            </Button>
                        </DialogActions>
                    )}
                </Dialog>
            </section>
            <section style={{backgroundImage: `url(${LinearImage})`, width: '100%', height: '100%', position: 'relative', marginTop: '36px'}}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Grid container spacing={2} className={classes.heroHeadingContainer}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" color="primary" >
                                        About us
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h4" color="textPrimary" style={{fontWeight: 'bold'}}>
                                        Get to know how the best food is made
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
                                    <Box mt={4}>
                                        <Button color="primary" variant="contained" size="large">
                                            Explore our story
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <Image src={DishFour} />
                        </Grid>
                    </Grid>
                </Container>
            </section>
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
                                body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                heading="Curry"
                                image={DishOne}
                                overline="Lorem Ipsum"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                heading="Carrots with meat"
                                image={DishTwo}
                                overline="Lorem Ipsum"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <DishCard
                                body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                heading="Rice and something"
                                image={DishFour}
                                overline="Lorem Ipsum"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <Footer />
        </React.Fragment>
    );
};

export default Home;
