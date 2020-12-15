import React, {Suspense} from 'react';
import CenterLoader from './components/Loader/CenterLoading';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Basic from "./layout/Basic";

const App = () => {
    return (
        <Suspense fallback={<CenterLoader />}>
            <BrowserRouter>
                <ScrollToTop />
                <Switch>
                    <Route path="/" component={Basic} />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
};

export default App;
