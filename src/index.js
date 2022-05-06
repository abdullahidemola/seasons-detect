import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./seasonDisplay";
import Load from "./load";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { lat: null, errorMessage: "" };

  // THE BEST METHOD TO WRITE THIS WITHOUT THE CONSTRUCTOR IS GIVEN BELOW
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
 // rendercontent is an optional render method that contains all to be rendered in a single 
 // function, which is later called in the normal render funtion.
  renderContent(){
     if (this.state.errorMessage && !this.state.lat) {
       return <div>Error: {this.state.errorMessage}</div>;
     } else if (this.state.lat && !this.state.errorMessage) {
       return (
         <div>
           <SeasonDisplay lat={this.state.lat} />
         </div>
       );
     } else {
       return <Load message="Please accept location request"></Load>;
     }
  }

  render() {
       return <div>{this.renderContent()}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
