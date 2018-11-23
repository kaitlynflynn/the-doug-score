import React, { Component } from 'react';
import config from '../config';
import load from '../helpers/spreadsheet';
// import './CarList.css';

class CarList extends Component {
// Set default state
  state = {
    cars: [],
    error: null
  };

componentDidMount() {
    // Step 1. Load JavaScript client library
    window.gapi.load('client', this.initClient);
}

 onLoad = (data, error) => {
        if (data) {
          const cars = data.cars;
          this.setState({ cars });
        } else {
          this.setState({ error });
        }
      };
      
initClient = () => {
    // Step 2. Initialize JavaScript client library
    window.gapi.client
      .init({
        apiKey: config.apiKey, // config is coming from the config.js file created
        // API key automatically added to Discovery Document URLs
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
      // Step 3. Initialize/make the API request
      load(this.onLoad);
      // If load function returns data from spreadsheet.js, cars state is set to that data. Otherwise an error will show.
     
    });
  };

    render() {
        const { cars, error } = this.state;
        if (error) {
            return <div>{this.state.error}</div>;
        }
        return (
            <card>
                {cars.map((car, i) => (
                    <li key={i}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </card>
        );
    }
}

export default CarList;