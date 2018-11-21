import React, { Component } from 'react';
import config from '../config';

class ListOfCars extends Component {

componentDidMount() {
    // Step 1. Load JavaScript client library
    window.gapi.load("client", this.initClient);
}

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
    });
  };

    render() {
        return (
            <div>
                Car List Will Go Here
            </div>
        );
    }
}