import React from "react";
import { Switch, Route, withRouter } from "react-router";
import Dashboard from "./components/Dashboard";
import Favourites from "./components/Favourites";

const Router: React.FC = (props: any) => {
  return (
    <>
      <Route
        render={() => (
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/zapisane" component={Favourites} />
          </Switch>
        )}
      />
    </>
  );
};

export default withRouter(Router);
