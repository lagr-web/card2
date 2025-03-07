export default class Initialize {

  constructor() {

    console.log("Initialize ready");

    this.ninja = document.createElement("div");
    this.ninja.id = "ninja";
    document.body.appendChild(this.ninja);

    let ninjaImg = document.createElement("img");
    ninjaImg.src = "./assets/ninja.png";
    this.ninja.appendChild(ninjaImg);

    console.log('pop');



  } // END constructor
} // END class
