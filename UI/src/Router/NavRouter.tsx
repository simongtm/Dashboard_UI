import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import App from "../App";
import { IntlProvider } from "react-intl";
import { IState } from "../Store/Root/RootState";
import { connect } from "react-redux";
import { IIntlState } from "../Interfaces/State/IIntlState";
import SignUpComponent from "../Component/SignUpComponent";
import Dashboard from "../Component/DashboardComponent";
interface IProps {
  intlData: IIntlState;
}
const NavRouter: React.FC<IProps> = (props) => {
  return (
    <IntlProvider
      locale={props.intlData.locale}
      messages={props.intlData.messages[props.intlData.locale]}
    >
      <Router>
        <Switch>
          <Route exact={true} path="/" component={App} />
          <Route
            exact={true}
            path="/Registration"
            component={SignUpComponent}
          />
          <Route exact={true} path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </IntlProvider>
  );
};
const mapStateToProps = (state: IState) => ({ intlData: state.intl });

export default connect(mapStateToProps)(NavRouter);
