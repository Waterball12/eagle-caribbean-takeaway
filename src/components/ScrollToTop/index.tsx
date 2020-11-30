import {useEffect} from "react";
import {useLocation} from "react-router-dom";

export interface IProps {
    children?: JSX.Element;
}

/**
 * Component for automatically scrolling at top once the provided pathname changes
 * @param children
 * @constructor
 */
export default function ScrollToTop({children}: IProps): JSX.Element | null {
    const { pathname } = useLocation();

    useEffect(() => {
        try {
            window.scrollTo(0, 0);
        } catch (e) {
            console.log(e);
        }

    }, [pathname]);

    return children || null;
}
