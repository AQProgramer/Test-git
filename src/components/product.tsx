import React, { Component } from "react";

class Product extends Component {
  state = {
    count: 0,
    produntName: "laptop",
  };
  render() {
    return (
      <div>
        <span className="m-2 text-info">{this.state.produntName}</span>
        <span className="m-2 badge bg-primary">{this.getCount()}</span>
        <button onClick={this.decrease} className="m-2 btn btn-sm btn-success">
          -
        </button>
        <button onClick={this.increase} className="m-2 btn btn-sm btn-warning">
          +
        </button>
        <button className="m-2 btn btn-sm btn-danger">Delete</button>
      </div>
    );
  }

  getCount(): string {
    if (this.state.count === 0) return "Zero";
    return this.state.count + "";
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  decrease = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };
}

export default Product;
