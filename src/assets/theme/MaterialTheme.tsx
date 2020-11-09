import React, {useState} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export interface DarkProps {
    isDark: boolean;
    setTheme?: (value: boolean) => void;
}

export type DarkPropsType = DarkProps;

const DarkModeContext = React.createContext<DarkPropsType>({
    isDark: false,
    setTheme: undefined
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useDarkContext<DarkProps>() {
    const editor = React.useContext<DarkPropsType>(DarkModeContext);

    if (!editor) {
        console.error('Dark handler context is undefined')
    }

    return editor;
}

const MaterialTheme: React.FC = ({children}) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [isDark, setIsDark] = useState(() => {
        if (prefersDarkMode) {
            return true;
        }

        if(localStorage.getItem("theme")){
            if(localStorage.getItem("theme") === "dark"){
                return true;
            }
        }

        return prefersDarkMode;
    });

    const contextValue = {
        isDark: isDark,
        setTheme: setIsDark
    } as DarkProps;

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: isDark ? 'dark' : 'light',
                    primary: {
                        main: "#6BDB20",
                        contrastText: "#fff"
                    }
                },
                shape: {
                    borderRadius: 16
                }
            }),
        [isDark],
    );

    return (
        <DarkModeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </DarkModeContext.Provider>
    );
};

export default MaterialTheme;
