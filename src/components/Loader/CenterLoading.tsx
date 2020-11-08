import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {CircularProgress} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: {
        marginTop: `${theme.spacing(2)}px`,
        marginLeft: `${theme.spacing(0.5)}px`
    }
}));

export interface IProps  {
    text?: string;
    color?: | 'initial'
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'textPrimary'
        | 'textSecondary'
        | 'error';
}

const CenterLoader = (props: IProps) => {
    const classes = useStyles();
    const {
        text = 'Loading...',
        color = 'textPrimary'
    } = props;
    return (
        <div className={classes.container}>
            <CircularProgress />
            <Typography className={classes.text} variant="caption" component="div" color={color}>
                {text}
            </Typography>
        </div>
    );
};

export default CenterLoader;
