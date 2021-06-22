import React from 'react';
import {
    Avatar,
    Box,
    Container,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@material-ui/core";
import Image from "../Image";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import {makeStyles} from "@material-ui/core/styles";
import CodeIcon from '@material-ui/icons/Code';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    contactAvatar: {
        color: theme.palette.primary.main,
        backgroundColor: 'unset'
    }
}))

const Footer = () => {
    const classes = useStyles();

    return (
        <footer style={{width: '100%', padding: '20px 0',backgroundColor: 'rgba(0,0,0,.04)'}}>
            <Container style={{marginBottom: '50px'}}>
                <Grid container spacing={4} justify="center" alignItems="center">
                    <Grid item xs={12} md={4} lg={4}>
                        <Image
                            src="https://www.sandwell.ac.uk/app/uploads/2019/02/Sandwell-College.jpg"
                            alt="Sandwell college"
                        />
                    </Grid>
                    <Grid item xs={12} md={8} lg={4}>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CodeIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Designers & Developers" secondary="Jasraj Singh, Satbir Singh" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CameraAltIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Photographers" secondary="Sandwell College photographers" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={8} lg={4} style={{ marginLeft: 'auto' }}>
                        <Box pl={3}>
                            <Typography variant="h5" color="primary">
                                Contact us
                            </Typography>
                        </Box>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className={classes.contactAvatar}>
                                        <PhoneIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="0121-565-1093"/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className={classes.contactAvatar}>
                                        <LocationCityIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="63 CHURCH ROAD"/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className={classes.contactAvatar}>
                                        <EmailIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="eaglescaribbeantakeaway@gmail.com"/>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
            <Divider style={{marginLeft: '25%', marginRight: '25%', height: '2px'}} />
            <Container>
                <Grid container justify="space-between" alignItems="center" style={{marginTop: '16px', marginBottom: '8px'}}>
                    <Grid item>
                        <IconButton aria-label="search" color="primary">
                            <FacebookIcon href="https://en-gb.facebook.com/pages/category/Jamaican-Restaurant/Eagles-Caribbean-Take-Away-1222285761241079/" target="_blank" />
                        </IconButton>
                        <IconButton aria-label="display more actions" edge="end" color="primary">
                            <InstagramIcon href="https://www.instagram.com/english_takeaways/" target="_blank" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="textSecondary">
                            COPYRIGHT 2021 Eagles Caribbean & English Take-Away
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Image
                            src="https://www.just-eat.co.uk/CmsAssets/media/Images/Blogs/UK/2019/05/Our-Brand/icon-just-eat.jpg"
                            alt="Just eat"
                            style={{height: '48px'}}
                        />
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
