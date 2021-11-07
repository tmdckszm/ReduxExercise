import React from "react";
import { connect } from "react-redux";
import { addSubscriber } from "../component/rudux/subscribers/actions";

const Subscribers = ({ count, addSubscriber }) => {
  return (
    <div className="items">
      <h2>구독자 수 : {count}</h2>
      <button onClick={() => addSubscriber()}>구독하기!</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  addSubscriber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribers);
