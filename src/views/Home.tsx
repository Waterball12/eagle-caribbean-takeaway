import React, {useState} from 'react';
import {Box, Container, Dialog, DialogActions, DialogContent, Grid, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Image from "../components/Image";
import Button from "@material-ui/core/Button";
import DishFour from "../assets/images/Dish5RiceAndsaladSmall.png";
import DishPlate from "../assets/images/homepage_Banner.jpg";
import DishPlate2 from "../assets/images/homepage_Banner_2.jpg";
import DishPlate3 from "../assets/images/homepage_Banner_3.jpg";
import CategoryCard from "../components/Card/CategoryCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {SocialLink, SocialProvider} from '@mui-treasury/components/socialLink'
import {useBallSocialLinkStyles} from '@mui-treasury/styles/socialLink/ball';
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import dishIcons, {DishCategories} from "../shared/DishCategories";
import LinearImage from "../assets/images/lineart_background_2.jpg";
import TestimonialCard from "../components/TestimonialCard";
import ShopOutsideImage from "../assets/images/eagle_outside.jpg";
import {AboutLink, MenuLink} from "../shared/Links";
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
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={2} className={classes.heroHeadingContainer}>
                                <Grid item xs={12}>
                                    <Typography variant="subtitle1" color="primary" >
                                        Takeaway
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h4" color="textPrimary" style={{fontWeight: 'bold'}} component="h1">
                                        Welcome to the Eagle Caribbean Take Away
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body1" color="textSecondary">
                                        The heart of real traditional Caribbean food within the West Midlands where good food warms the heart and feeds the soul.
                                        Transforming the freshest ingredients into a simply mouth watering dining experience.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button color="primary" variant="contained" size="large" component={MenuLink}>
                                        View menu
                                    </Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box mt={1}>
                                        {/*@ts-ignore*/}
                                        <SocialProvider useStyles={useBallSocialLinkStyles}>
                                            <SocialLink brand={'Facebook'} href="https://en-gb.facebook.com/pages/category/Jamaican-Restaurant/Eagles-Caribbean-Take-Away-1222285761241079/"  />
                                            <SocialLink brand={'Instagram'} href="https://www.instagram.com/english_takeaways/"  />
                                        </SocialProvider>
                                    </Box>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation
                                autoplay
                            >
                                <SwiperSlide><Image src={DishPlate} /></SwiperSlide>
                                <SwiperSlide><Image src={DishPlate2} /></SwiperSlide>
                                <SwiperSlide><Image src={DishPlate3} /></SwiperSlide>
                                <SwiperSlide><Image src={ShopOutsideImage} /></SwiperSlide>
                            </Swiper>
                        </Grid>
                    </Grid>
                </div>
            </section>
            <Box component="section" width="100%" height="100%" position="relative">
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
            </Box>
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
                                        <Button color="primary" variant="contained" size="large" component={AboutLink}>
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
                            TESTIMONIALS
                        </Typography>
                        <Typography variant="h3" color="textPrimary" style={{fontWeight: 'bold'}}>
                            Our customers
                        </Typography>
                    </Box>
                    <Grid container spacing={2} className={classes.heroHeadingContainer}>
                        <Grid item xs={12} md={4}>
                            <TestimonialCard
                                rating={5}
                                body="Having read reviews we thought we'd give this a go today. Well, all the reviews are correct we can't wait to go again! The food was divine and the owners are so friendly. Both had the medium sized tray and that was a plentiful amount. I had curried chicken, rice & veg my husband had curried goat. A massive round of applause to the owners 👋👋"
                                author="Alison B"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TestimonialCard
                                rating={5}
                                body="Ordered Jerk Chicken/Curried Goat/Oxtail/Rice and Peas/Fried Chicken/Fried Dumplings/Mac & Cheese(I was hungry and the variety of Jamaican food on offer is amazing). Every morsel of every item purchased was fantastic! Full of flavour! Freshly cooked and large portion sizes; excellent value for money! I will definetely be going back even if it is nearly a two hour drive away! What's distance when it comes to excellent food!"
                                author="Linda B"
                            />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TestimonialCard
                                rating={5}
                                body="Gorgeous food. The chicken literally fell off the bone and was juicy. The rice was cooked to perfection. Full of flavour and absolutely adored it. Cannot wait to eat from here again <3"
                                author="Anna L"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Home;
