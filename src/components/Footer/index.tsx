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
import WorkIcon from "@material-ui/icons/Work";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    contactAvatar: {
        color: theme.palette.primary.main,
        backgroundColor: 'unset'
    }
}))

const Footer = () => {
    const classes = useStyles();

    return (
        <footer style={{width: '100%', padding: '20px 0'}}>
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
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Designers & Developers" secondary="Jasraj Singh, Satbir Singh" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Photographers" secondary="John Doe, Jane Doe" />
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
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="202-255-0186"/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className={classes.contactAvatar}>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="75 Bootham Crescent"/>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar className={classes.contactAvatar}>
                                        <WorkIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="eagles@gmail.com"/>
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
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="display more actions" edge="end" color="primary">
                            <InstagramIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="textSecondary">
                            COPYRIGHT 2020 Eagles Caribbean & English Take-Away
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Image
                            src="https://lh3.googleusercontent.com/proxy/MDEJrwyfBZiTEawlEZc2OVqG5F33Ny7Fh202xcjAtaBqzA0fjIE3if6bO1NN5Zz8O-nHiogw_JEqznEoQU3JcFNvlZFfBiyORvKPPxeDta6gJ_OCg4puLOWgWavwbpfo_C8"
                            alt="Just eat"
                            style={{height: '48px', width: '68px'}}
                        />
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;