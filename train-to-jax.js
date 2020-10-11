const readlineSync = require("readline-sync");
console.log("");
console.log("TRAIN TO JAX");
console.log("");
console.log(
  "🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟"
);
console.log(
  "🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟"
);
console.log("");
console.log(
  "You've boarded a train from Miami to Jacksonville to see your parents.\nShortly after you leave, you learn that a viral outbreak has swept through Miami turning people into zombies!"
);

console.log("");

console.log("Good thing you're on a train speeding North.");
readlineSync.keyInPause("But here's the bad news...");
console.log("");
console.log(
  "Oh no! A passenger has started writhing in your car and is turning into a zombie! 🧟"
);
console.log("");

//If user picks 2 and escapes the First Car
const escapedFirstCar = () => {
  console.log(
    "Whew! You made it out of there with some of your fellow passengers and slammed the door, shutting in the zombie.\nEveryone reads on their phones that a virus has spread throughout South Florida, turning whole cities into zombies!\nThe National Guard has lost most cities along the Atlantic to zombies, from Miami to St. Augustine.\nBut last anyone heard from Daytona Beach, the city had made a successful quarantine zone out of the downtown. "
  );
  readlineSync.keyInPause("Ready for another decision....?");
};
//Second choice user faces after having escaped First Car
const stayOrGo = () => {
  let userInputTwo = readlineSync.question(
    " PRESS 1 to disembark at Daytona Beach\n PRESS 2 to stay on the train\n"
  );
  if (userInputTwo == 1) {
    go();
  } else if (userInputTwo == 2) {
    console.log(
      "At Daytona Beach most of the other passengers have left to see the station As you watch them go, the zombie you had locked in escapes! It eats your brains!  GAME OVER."
    );
    playAgain();
  } else {
    console.log("You have to make a decision! Try again!");
    stayOrGo();
  }
};
const go = () => {
  console.log(
    "You and some passengers get off at the Daytona Beach station and find it to be quiet. But as you reach the front of the station, you find a hoard of silently swaying National Guard zombies!"
  );
  let userInputThree = readlineSync.question(
    " PRESS 1 to run back the way you came\n PRESS 2 to run out the back of the station\n"
  );

  if (userInputThree == 1) {
    backToTrain();
  } else if (userInputThree == 2) {
    backDoor();
  } else {
    console.log("You have to make a decision! Try again!");
    go();
  }
};
const backDoor = () => {
  let oddsBackDoor = Math.floor(Math.random() * 2 + 1);
  if (oddsBackDoor == 1) {
    backToTrain();
  } else {
    console.log("There are zombies at the back door! You become zombie lunch.");
    playAgain();
  }
};
const backToTrain = () => {
  console.log(
    "You and half of the passengers run back to the train with the zombies at your heels!  You get everyone on the train and scream at the conductor to go!\nOne of your fellow passengers receives a text from her husband.\nThe train's survivors are in the front car and will be detach from the rest of the train!  You need to get to the front of the train!"
  );
  readlineSync.keyInPause(
    "From the breezeway of your car, you spy something horrible in the car ahead..."
  );
  console.log("");
  console.log(
    "The Miami Marlins are on the train, and they've all been turned to zombies!🧟 ⚾ 🧟 ⚾ 🧟 ⚾"
  );
  let userInputFour = readlineSync.question(
    " PRESS 1 to try to sneak through.\n PRESS 2 to try some clever fighting...\n"
  );
  console.log("");
  if (userInputFour == 1) {
    sneakThrough();
  } else if (userInputFour == 2) {
    console.log(
      "You realize the zombies can't see in bright sunlight.  You take the Marlins' baseball bats, smash all the tinted windows, and stun them temporarily!\nYou and your commrades smash your way through the tottering hoard of zombies, making it to an empty car ahead."
    );
    readlineSync.keyInPause("See what's ahead...");
    console.log("");
    penultimateCar();
  } else {
    console.log("You have to make a decision! Try again!");
    backToTrain();
  }
};
const sneakThrough = () => {
  let theOdds = Math.floor(Math.random() * 2 + 1);
  if (theOdds == 1) {
    console.log(
      "You climb onto the luggage racks and quietly crawl by the zombies. At the front of the car, you through a baseball to the end of the car.\n The ball distracts and you and your commrades safely climb down and run to the next car. "
    );
    penultimateCar();
  } else {
    console.log(
      "One of the passengers accidentally kicks a bag of baseballs onto the floor, causing the zombies to look up.  They make a pulled-passenger sandwich out of you.  GAME OVER"
    );
    playAgain();
  }
};

const penultimateCar = () => {
  console.log(
    "You slam the door on the rabid Marlins and breathe a sigh of relief.  You've made it to the dining car-- the first car is just ahead!"
  );
  readlineSync.keyInPause(
    "But you notice one of your fellow passengers is wincing. He's been bitten!"
  );
  console.log("");
  console.log(
    "Just as you realize this, a zombie Marlin hand appears thrusts between the crack of the car door and its frame.\nTHE BACK DOOR HAS BROKEN!"
  );
  readlineSync.keyInPause(
    "The passenger who was bitten springs in front of the door to hold off the horde.  'Run!' he screams.\nYou turn around to see the rest of your passengers prying at the door of the first car up ahead. What do you do?\n"
  );
  let userInputFive = readlineSync.question(
    " PRESS 1 to help your bitten commrade.\n PRESS 2 to help the passengers pry open the front door.\n"
  );
  console.log("");
  if (userInputFive == 1) {
    helpBitten();
  } else if (userInputFive == 2) {
    runForward();
  } else {
    console.log("You have to make a decision! Try again!");
    penultimateCar();
  }
};

const helpBitten = () => {
  console.log(
    "You scan the dining car for a tool to help your bitten commrade. You spy the following items: "
  );
  const tools = ["cane", "steak knife", "dining tray", "serving fork"];
  let index = readlineSync.keyInSelect(tools, "Which tool do you pick?");
  if (index == 0 || index == 2) {
    console.log(
      `You run forward with your ${tools[index]} and hit back the zombie reaching through.  You use your ${tools[index]} to try and secure the door.`
    );
    console.log(
      "'It's no use!' The bitten passenger screams.  Save yourself!  Get to the front of the car!"
    );
    readlineSync.keyInPause("Get out of here!");
    runForward();
  } else {
    console.log(
      `You run forward with your ${tools[index]} and stab away at the zombie reaching through.\nIt grabs your hand and pulls you close, taking a huge bite!`
    );
    howToDie();
  }
};
const howToDie = () => {
  readlineSync.keyInPause("What do you do, now that you're infected?");
  let userInputSix = readlineSync.question(
    "PRESS 1 to stay and help the hold back the zombies\nPRESS 2 to run to safety\n"
  );
  if (userInputSix == 1) {
    console.log(
      "You buy enough time to let the others get to the next car.\nAs the first car door shuts again, the horde breaks through and swarms you and your bitten friend.\nGAME OVER"
    );
    playAgain();
  } else if (userInput == 2) {
    console.log(
      "You step back in dismay as the zombies slam against the door. Your fellow bitten passenger can't hold them by himself!\nThe zombies bust through the door and swarm you and your fellow passengers.\nGAME OVER"
    );
    playAgain();
  } else {
    console.log("You have to make a decision! Try again!");
    howToDie();
  }
};
const runForward = () => {
  console.log(
    "You rush to the door of the first car.  It's locked!\n🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒🔒\n'Let us in!' you scream.\n'No! You could be infected!' you hear a voice reply.\nIn disbelief, you and your fellow survivors pry at the door with all of your might and break through!."
  );
  readlineSync.keyInPause("You can't believe what you see...");
  console.log("");
  console.log(
    "This group sequestered in the front car has been holding the door closed with a chain of neckties!\n👔 👔 👔 👔 👔 👔 👔 👔 👔 👔 👔 👔 👔 👔 \n'How do we know you're not infected?' one of them yells.\n'You have to quarantine in the vestibule up ahead,' their leader demands."
  );
  readlineSync.keyInPause(
    "You weigh your options for reasoning with this first-car cluster.  You could: "
  );
  let reasonOrFlee = [
    "try to prove your good health",
    "try to muscle your way through to the front",
    "appeal to this group's humanity",
    "sit down in the nearest seats and refuse to move",
  ];
  let desparateIndex = readlineSync.keyInSelect(
    reasonOrFlee,
    "What will you do?"
  );
  if (desparateIndex == 0 || desparateIndex == 2) {
    console.log(`You ${reasonOrFlee[desparateIndex]}.`);
    intoVestibule();
  } else if (desparateIndex == 1 || desparateIndex == 3) {
    console.log(
      `You ${reasonOrFlee[desparateIndex]}. This causes a skirmish in the car.`
    );
    forceProtest();
  }
};
const forceProtest = () => {
  let oddsForForce = Math.floor(Math.random() * 3 + 1);
  if (oddsForForce < 3) {
    console.log(
      "All of the passengers are now distracted by infighting and nobody watches the door.\nA horde of zombies breaks through and devours you all.\nGAME OVER "
    );
    playAgain();
  } else {
    intoVestibule();
  }
};
const intoVestibule = () => {
  console.log(
    "Ultimately, your efforts are futile and you are stuffed into a vestibule between the first and conductor cars, guarded by another passenger."
  );
  readlineSync.keyInPause(
    "But then from outside your cell, you hear screaming..."
  );
  console.log("");
  console.log(
    "The group that locked you up had begun fighting amongst themselves, forgetting to watch the door!\nA HORDE OF ZOMBIES BROKE THROUGH AND IS CONSUMING THE PASSENGERS WHO LOCKED YOU UP!🧟🧟🧟🧟🧟🧟🧟🧟🧟🧟🧟🧟🧟🧟🧟\nThe guard standing by lets you out and you all sequester in the conductor's car."
  );
  readlineSync.keyInPause(
    "The train has made it to Jacksonville, but there is a blockage on the tracks up ahead. With control of the train, what will you do?\n"
  );
  let userInputSeven = readlineSync.question(
    "PRESS 1 to try and crash the train.\nPRESS 2 to bring it to a stop.\nPRESS 3 to jump off the train.\n"
  );
  switch (userInputSeven) {
    case "1":
      crashTrain();
      break;
    case "2":
      stopTrain();
      break;
    case "3":
      jumpTrain();
      break;
    default:
      console.log("You have to make a decision! Try again!");
      intoVestibule();
  }
};
const crashTrain = () => {
  console.log(
    "In hopes of destroying all the zombies aboard, you decide to crash the train.\nBut you also want to jump off to safety before the train explodes.\n"
  );
  let mph = readlineSync.question(
    "How fast will you set the train before jumping off????\nENTER IN YOUR DESIRED MPH:"
  );
  if (mph > 0 && mph < 80) {
    console.log(
      `You set the speed to ${mph}. You and the other survivors jump off the train and watch it crash into the blockade.`
    );
    readlineSync.keyInPause("But much to your dismay....");
    console.log(
      "The train doesn't explode--it was going too slow!  The zombies swarm out and eat you and the other survivors.\nGAME OVER"
    );
    playAgain();
  } else if (mph >= 80 && mph <= 100) {
    console.log("");
    console.log(
      "You jump off the train at the perfect speed!  The train explodes, incinerating the zombies and you run to the train station."
    );
    survive();
  } else if (mph > 100) {
    console.log("");
    console.log(
      `You set the speed to ${mph}, hoping such a high speed will kill the zombies.\nUnfortunately, the extreme speed kills you as you jump off the train.\nGAME OVER`
    );
    playAgain();
  } else {
    console.log("");
    console.log("Please enter a number!");
    crashTrain();
  }
};
const stopTrain = () => {
  let runnerSurvival = Math.floor(Math.random() * 2 + 1);
  console.log(
    "You bring the train to a stop and make a run for it! You can see the station up ahead!"
  );
  readlineSync.keyInPause(
    "You turn around and look at the train, only to find..."
  );
  console.log("");
  if (runnerSurvival == 1) {
    console.log(
      "The zombies have escaped and are mowing down your fellow survivors!  They are running faster than any reasonably fit human could possibly run!\nThey chase you down and devour you\nGAME OVER"
    );
    playAgain();
  } else {
    console.log(
      "The doors seem to have held the zombies in!  You make it to the train station."
    );
    survive();
  }
};
const jumpTrain = () => {
  let jumperSurvival = Math.floor(Math.random() * 3 + 1);
  if (jumperSurvival > 1) {
    console.log(
      "You and the other survivros tuck and roll as you jump the train. You watch it crumple into the blockade up ahead."
    );
    readlineSync.keyInPause("You wait for it to burst into flames, but...");
    console.log(
      "It doesn't.  The zombies smash the windows and pour out of the train, consuming you and all the survivors\nGAME OVER"
    );
    playAgain();
  } else {
    console.log(
      "It doesn't.  Luckily, the doors and windows seem to have held.  You make a run to the train station."
    );
    survive();
  }
};
const survive = () => {
  console.log(
    "There are no signs of life at the train station.  It's eerily similar to Daytona Beach...\nExiting the front of the station, you and a few survivors find the downtown deserted.\nTo your left, a long road stretches into the distance with a bonfire just visible.\nTo your right, there is a dark tunnel."
  );
  readlineSync.keyInPause("Here is your final decision:");
  let finalChoice = readlineSync.question(
    " PRESS 1 to go LEFT\n PRESS 2 to go RIGHT\n"
  );
  if (finalChoice == 1) {
    console.log(
      "You and the survivors trudge along the road towards the bonfire.\nA fellow survivor yells 'Hooray!' as you approach the fire, which alerts a swarm of zombies just off the road. You know what happens...\nGAME OVER"
    );
    playAgain();
  } else if (finalChoice == 2) {
    console.log(
      "You and the survivors trudge through the tunnel.  A small girl amongst you begins to sing 'This Land Is Your Land' as you walk.\nThis alerts the blockade of soldiers up ahead that the footsteps approaching are of the living.\nYOU SURVIVED!!!"
    );
    playAgain();
  } else {
    console.log("You have to make a decision! Try again!");
    survive();
  }
};

//Let the game begin//
const firstCar = () => {
  let userInputOne = readlineSync.question(
    "What will you do?\n PRESS 1 to FIGHT the zombie. \n PRESS 2 to RUN to another car.\n"
  );
  if (userInputOne == 1) {
    console.log(
      "You were surpirsed by the zombie's quickness.  It consumed your brains. GAME OVER."
    );
    playAgain();
  } else if (userInputOne == 2) {
    escapedFirstCar();
    stayOrGo();
  } else {
    console.log("You have to make a decision! Try again!");

    firstCar();
  }
};

//How to start over the game//
let playAgain = () => {
  let playAgain = readlineSync.question("Do you want to play again? y || n \n");
  if (playAgain === "y") {
    console.log("TRAIN TO JAX");
    console.log("");
    console.log(
      "🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟"
    );
    console.log(
      "🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟🚆 🧟"
    );
    console.log("");
    console.log(
      "You've boarded a train from Miami to Jacksonville to see your parents.\nYou learn an viral outbreak has swept through Miami turning people into zombies!\nGood thing you're on a train speeding North.\nBUT WAIT! A passenger has started writhing in your car and is turning into a zombie!🧟\n"
    );
    readlineSync.keyInPause("Now choose carefully this time...");
    firstCar();
  } else {
    console.log("Ok. Hope you enjoyed running from zombies! 🧟");
  }
};

firstCar();
