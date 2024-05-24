
import './App.css';
import React, { Component } from 'react';
import ErrorPage from "./components/Error.jsx";
import Form from "./components/Form/Form.jsx";

import ResultsTable, {
  loader as animalLoader,
} from "./components/Table/ResultsTable.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      inputData: '', // Add this to handle form input
      responseMessage: '', // Add this to handle server response
    };
  }


// Fetch the API response when the component mounts
componentDidMount() {
  this.callAPI();
}
  callAPI() {
    fetch("http://localhost:5000/pets")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }
/////////////////////

// handleInputChange = (event) => {
//   this.setState({ inputData: event.target.value });
// };

// sendDataToServer = () => {
//   fetch('http://localhost:5000/api/data', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ data: this.state.inputData }),
//   })
//   .then(response => response.text())
//   .then(responseMessage => {
//     this.setState({ responseMessage });
//   })
//   .catch(error => {
//     console.error('There was an error sending the data!', error);
//   });
// };


//////////////////////////////////////////////////
render() {
  const router = createBrowserRouter([
    { path: "/", element: <Form />,  errorElement: <ErrorPage />, },
    {
      path: "/result",
      element: <ResultsTable />,
      loader: animalLoader,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
       
    
    <main>
       
    <RouterProvider router={router} />
  </main>

    // <>
    //  <h1>{this.state.apiResponse}</h1>
    
    // <div className="App">
    //     <h1>Send Data to Express Server</h1>
    //     <input
    //       type="text"
    //       value={this.state.inputData}
    //       onChange={this.handleInputChange}
    //     />
    //     <button onClick={this.sendDataToServer}>Send Data</button>
    //     <p>Server Response: {this.state.responseMessage}</p>
    //   </div>

      
      
    // </>
  // 
  );
}
}

/*
<Header />
      <main>
        <Form />
      </main>

      */

export default App;
