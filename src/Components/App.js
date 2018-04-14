import React, { Component, Fragment } from "react";

import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Transactions from "./Transactions";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
          <Transactions />
        <Footer />
      </Fragment>
    );
  }
}
