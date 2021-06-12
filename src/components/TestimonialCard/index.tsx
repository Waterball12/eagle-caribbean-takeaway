import React from 'react';
import {Box, Paper, Typography} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import {Rating} from "@material-ui/lab";

export interface TestimonialCardProps {
    rating: number;
    body: string;
    author: string;

}

const TestimonialCard = (props: TestimonialCardProps) => {
    return (
        <Paper elevation={4}>
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
