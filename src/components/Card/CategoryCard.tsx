import React from 'react';
import {Box, CardContent, Grid, Paper, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

export interface CategoryCardProps {
    title: string;
    icon: React.ReactNode;
    onClick?: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
    card: {
        background: theme.palette.background.default,
        borderRadius: theme.shape.borderRadius,
        border: 0,
        boxShadow: "none",
        width: '100%',
        height: '100%',
        transition: "box-shadow .25s ease,transform .25s ease,-webkit-transform .25s ease",
        "&:hover": {
            boxShadow: "0 1.5rem 2.5rem rgba(22,28,45,.1),0 .3rem 0.5rem -.50rem rgba(22,28,45,.05)",
            transform: "translate3d(0,-5px,0)"
        }
    },
    content: {
        flexDirection: 'column',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '48px 24px'
    },
    iconContainer: {
        width: '100%',
        textAlign: 'center',
        "&>svg": {
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            marginBottom: `${theme.spacing(5)}px`
        },
        "&>img": {
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            marginBottom: `${theme.spacing(5)}px`
        }
    }
}))

const CategoryCard = (props: CategoryCardProps) => {
    const classes = useStyles();

    const {
        title,
        icon,
        onClick
    } = props;

    return (
        <Paper className={classes.card} onClick={onClick}>
            <CardContent className={classes.content}>
                <Box display="flex" flexWrap="wrap">
                    <Grid item xs={12} className={classes.iconContainer}>
                        {icon}
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="textPrimary" align="center">
                            {title}
                        </Typography>
                    </Grid>
                </Box>
            </CardContent>
        </Paper>
    );
};

export default CategoryCard;
