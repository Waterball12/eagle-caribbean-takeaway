import React from 'react';
import {Box, Paper, Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import {Rating} from "@material-ui/lab";
import {makeStyles} from "@material-ui/core/styles";

export interface TestimonialCardProps {
    rating: number;
    body: string;
    author: string;

}

const useStyles = makeStyles(() => ({
    paper: {
        boxShadow: "0 0.46875rem 2.1875rem rgb(59 62 102 / 3%), 0 0.9375rem 1.40625rem rgb(59 62 102 / 3%), 0 0.25rem 0.53125rem rgb(59 62 102 / 5%), 0 0.125rem 0.1875rem rgb(59 62 102 / 3%)"
    }
}))

const TestimonialCard = (props: TestimonialCardProps) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <CardContent>
                <Box mb={4} color="primary.main">
                    <FormatQuoteIcon />
                </Box>
                <Rating
                    value={props.rating}
                    readOnly
                />
                <Typography variant="body2" color="textSecondary" gutterBottom component="blockquote">
                    {props.body}
                </Typography>
                <Typography variant="subtitle2" style={{fontWeight: 'bold'}} align="right">
                    {props.author}
                </Typography>
            </CardContent>
        </Paper>
    );
};

export default TestimonialCard;
