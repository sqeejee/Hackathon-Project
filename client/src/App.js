import Home from "./pages/home/home";
import Input from "./components/input/input"
import axios from "axios"
import React from "react";
import './App.css';

export var ImageContext = React.createContext;


const imageAddresses = ['6349b93eed312b7c9ec5adde','634a865bac16aeb53d53ab95','634a878eac16aeb53d53ab99','634a886fac16aeb53d53ab9b','634a88efac16aeb53d53ab9d','634a8967ac16aeb53d53ab9f','634a899fac16aeb53d53aba1','634a89ebac16aeb53d53aba3','634a8a0aac16aeb53d53aba5','634a8a57ac16aeb53d53aba7','634a8ab0ac16aeb53d53aba9','634a8ae2ac16aeb53d53abab','634a8b0fac16aeb53d53abad','634a8b2dac16aeb53d53abaf','634a8b48ac16aeb53d53abb1','634a8b63ac16aeb53d53abb3','634a8b8cac16aeb53d53abb5','634a8bbbac16aeb53d53abb7','634a8be0ac16aeb53d53abb9','634a8bfdac16aeb53d53abbb','634a8c24ac16aeb53d53abbd','634a8c46ac16aeb53d53abbf','634a8c6bac16aeb53d53abc1','634a8cc5ac16aeb53d53abc3','634a8cebac16aeb53d53abc5', '634a8d13ac16aeb53d53abc7', '634a8d35ac16aeb53d53abc9', '634b49bdb633896425c22e08', '634b49d5b633896425c22e0a', '634b49e0b633896425c22e0c','634b49f7b633896425c22e0e',  '634b4a04b633896425c22e10', '634b4a11b633896425c22e12', '634b4a25b633896425c22e14',  '634b4a34b633896425c22e16', '634b4a42b633896425c22e18', '634b4a57b633896425c22e1a', '634b4a63b633896425c22e1c', '634b4a72b633896425c22e1e', '634b4a86b633896425c22e20', '634b4a98b633896425c22e22', '634b4aa8b633896425c22e24', '634b4abbb633896425c22e26', '634b4accb633896425c22e28', '634b4ad8b633896425c22e2a', '634b4ae5b633896425c22e2c', '634b4afab633896425c22e2e', '634b4b16b633896425c22e30'];

//johndf
getAndDisplay();

function getAndDisplay () {

  var idx = Math.floor(Math.random() * 48)

const imgAddress = imageAddresses[idx]

var balls = axios.get("http://localhost:8800/api/image/" + imgAddress, {
    responseType: "json",
  })
  .then(function (response) {
   var urllink = (response.data.img)
   
    ImageContext=(response.data.desc.toString());

document.getElementById("test").src = urllink.toString();
  });
}

function App() {
  function getData(val)
  {
    console.log(val)
  }
  return (
  
    <body class = "big">

      <div class="top-bar"> 
              <h1>
                SYNONIMATION
              </h1>
          </div>
      
      <img src="" id="test" alt="Generated image" width="500px" height = "500px"></img>
      <br></br>
      
  <Input/>
            <div class="footer"> 
                Made by Sam Pulaski and Andrew Wesel at the Harvard Westlake Hackathon 2022
          </div> 
  </body>
  
  )

}
  
export default App;


  
