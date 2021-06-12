import React from 'react';
import routes from "../routes";
import {Route, Switch} from 'react-router-dom';
import Header from "../components/Header";
import Error404 from "../views/Error";
import Footer from "../components/Footer";

const components = (
    <Switch>
        {routes.map((prop, key) => {
            let exact = true;

            // In future exact could be changed

            return <Route path={prop.path} exact={exact} component={prop.component} key={key} />
        })}
        <Route path="/" component={Error404} />
    </Switch>
);

const Basic = () => {
    return (
        <React.Fragment>
            <Header />
            {components}
            <Footer />
        </React.Fragment>
    );
};

export default Basic;