import config from "../config";

// This code invokes our sheets API, retrieves the values from the spreadsheet by passing the spreadsheetID/range. Promise returns two responses; one if there is data and another if there is an error.

/**
 * Load the cars from the spreadsheet
 * Get the right values from it and assign.
 */
export default function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A4:T"
      })
      .then(
        response => {
          const data = response.result.values;
const cars = data.map(car => ({
            year: car[0],
            make: car[1],
            model: car[2]
          })) || [];
callback({
            cars
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}