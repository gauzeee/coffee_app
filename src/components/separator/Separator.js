import React, { Component } from "react";
import InlineSVG from "svg-inline-react";
import seeds from "../../images/seeds.svg";

class Separator extends Component {
  render() {
    const { light } = this.props;
    return (
      <div>
        <div className={`${light}-seeds-block`}>
          <hr />
          <InlineSVG className={`${light}__seeds`} src={seeds} />
          <hr />
        </div>
      </div>
    );
  }
}

export default Separator;
