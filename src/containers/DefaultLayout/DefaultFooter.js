import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>
          <a
            href="https://github.com/yukixoma"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hà Viết Huy Phát &nbsp;
          </a>
          &copy; 2019
        </span>
        <span className="ml-auto">
          Powered by &nbsp;
          <a
            href="https://coreui.io/react"
            target="_blank"
            rel="noopener noreferrer"
          >
            CoreUI for React
          </a>
        </span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
