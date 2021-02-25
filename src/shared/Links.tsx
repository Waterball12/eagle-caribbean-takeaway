import React from 'react';
import {Link} from "react-router-dom";


export const HomeLink = React.forwardRef((props, ref: React.Ref<HTMLAnchorElement>) => <Link innerRef={ref} to="/" {...props} />);
export const AboutLink = React.forwardRef((props, ref: React.Ref<HTMLAnchorElement>) => <Link innerRef={ref} to="/about" {...props} />);
export const MenuLink = React.forwardRef((props, ref: React.Ref<HTMLAnchorElement>) => <Link innerRef={ref} to="/menu" {...props} />);
export const GalleryLink = React.forwardRef((props, ref: React.Ref<HTMLAnchorElement>) => <Link innerRef={ref} to="/gallery" {...props} />);
