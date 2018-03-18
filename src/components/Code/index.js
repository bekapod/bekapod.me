import React, { Component } from "react";
import PropTypes from "prop-types";
import Lowlight from "react-lowlight";
import js from "highlight.js/lib/languages/javascript";
import { equals } from "ramda";

Lowlight.registerLanguage("js", js);

export default class Code extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: "js"
  };

  shouldComponentUpdate(nextProps) {
    return !equals(this.props, nextProps);
  }

  render() {
    return (
      <Lowlight
        language={this.props.language || "js"}
        value={this.props.value}
      />
    );
  }
}
