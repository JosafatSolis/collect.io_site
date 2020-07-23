import React from "react";
import { Switch, Route } from "react-router-dom";
import ViewDataSection from "./ViewDataSection";
import AdminFormatsSection from "./AdminFormatsSection";

const SectionContainer = () => (
        <Switch>
          <Route exact path="/home/adminformats" component={AdminFormatsSection} />
          <Route exact path="/home" component={ViewDataSection} />
        </Switch>
);

export default SectionContainer;