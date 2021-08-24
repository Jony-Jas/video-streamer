import React from "react";
import { createStream } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}


export default connect(null, { createStream })(StreamCreate);
