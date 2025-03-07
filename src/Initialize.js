export default class Initialize {
  constructor() {

    const mArray = ["one", "two", "three", "four"];

    mArray.forEach((item, index) => {

      const myDiv = document.createElement("div");
      myDiv.id = "poul";
      document.body.appendChild(myDiv);
      myDiv.textContent = item;
      
    });


  } // END constructor
} // END class
