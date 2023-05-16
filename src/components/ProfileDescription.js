import React from "react";

class ProfileDescription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
  }

  // After initial render
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Set Interval");
    }, 1000);
  }

  // This method is called whenever the DOM is updated.
  componentDidUpdate() {
    console.log("This is component did update");
  }

  // This will be callled when the component is unmounted -> page change etc.
  // This is generally used for cleanup
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="profile-description-div">
        <h3>{this.props.name}</h3>
        <h4>{this.props.email}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Order Count
        </button>
        <span>{" " + this.state.count}</span>
        <br />
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 1,
            });
          }}
        >
          Demo Count
        </button>
        <span>{this.state.count2}</span>
      </div>
    );
  }
}

export default ProfileDescription;
