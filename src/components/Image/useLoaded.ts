import React from "react";

// @ts-ignore
export default function useLoaded({ src, srcSet }) {
    const [loaded, setLoaded] = React.useState<boolean | string>(false);

    React.useEffect(() => {
        if (!src && !srcSet) {
            return undefined;
        }

        setLoaded(false);

        let active = true;
        // @ts-ignore
        const image = new Image();
        image.src = src;
        image.onload = () => {
            if (!active) {
                return;
            }
            setLoaded('loaded');
        };
        image.onerror = () => {
            if (!active) {
                return;
            }
            setLoaded('error');
        };

        return () => {
            active = false;
        };
    }, [src, srcSet]);

    return loaded;
}
