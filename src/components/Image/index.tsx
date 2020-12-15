import React from 'react';
import ImageIcon from '@material-ui/icons/Image';
import {createStyles, Theme, WithStyles, withStyles} from "@material-ui/core";
import clsx from 'clsx';
import useLoaded from "./useLoaded";

export interface ImageProps {
    /**
     * Possible variants of the image
     */
    variant?: 'circular' | 'rounded' | 'square' | 'thumbnail';
    /**
     * Alt attribute of the image
     */
    alt?: string;
    /**
     * Render inside the image
     */
    children?: React.ReactNode;
    /**
     * Props of the image element
     */
    imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
    /**
     * Source of the image
     */
    src?: string;
    /**
     * Responsive attribute
     */
    srcSet?: string;
    /**
     * Additional className
     */
    className?: string;
    /**
     *
     */
    fallback?: React.ReactElement;
    /**
     *
     */
    fallbackSrc?: string;
    /**
     * Override or extend the styles applied
     */
    classes?: {
        root?: string;
    }
    /**
     *
     */
    style?: React.CSSProperties;
}

export const styles = (theme: Theme) => createStyles({
    root: {
        borderStyle: 'none',
        verticalAlign: 'middle',
        maxWidth: '100%',
        height: 'auto',
        textAlign: 'center',
        objectFit: 'cover',
        color: 'transparent',
        textIndent: 10000
    },
    fallback: {},
    circular: {
        borderRadius: '50%'
    },
    rounded: {
        borderRadius: theme.shape.borderRadius
    },
    square: {
        borderRadius: 0
    },
    thumbnail: {
        padding: theme.spacing(1),
        backgroundColor: '#fff',
        border: '1px solid #dee2e6',
        borderRadius: theme.spacing(1)
    }
})

const Image = React.forwardRef<HTMLImageElement, ImageProps & WithStyles<typeof styles>>((props, ref) => {
    const {
        src,
        srcSet,
        classes,
        imgProps,
        fallback,
        fallbackSrc,
        className,
        variant = "rounded",
        alt,
        style,
        ...rest
    } = props;

    const result = useLoaded({src: src, srcSet: srcSet});
    let children;
    const hasImg = src || srcSet;
    const hasImgNotFailing = hasImg && result !== 'error';

    const imgClasses = clsx(
        classes.root,
        classes[variant],
        className
    )
    if (hasImgNotFailing) {
        children = (
            <img
                ref={ref}
                alt={alt}
                src={src}
                srcSet={srcSet}
                className={imgClasses}
                style={style}
                {...rest}
                {...imgProps}
            />
        );
    } else if (fallbackSrc) {
        children = (
            <img
                src={fallbackSrc}
                ref={ref}
                alt={alt}
                className={imgClasses}
                {...rest}
                {...imgProps}
            />
        )
    } else if (fallback) {
        children = fallback;
    } else {
        children = <ImageIcon className={classes.fallback} />;
    }

    return children;
})

export default withStyles(styles)(Image);
