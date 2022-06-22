let restart = document.querySelector('#restartButton');
let choice = document.querySelector('#next');
let form = document.querySelector('#story');
let adventure = 0;
let button2 = document.querySelector('#getQuote');
let selection = '';

let adventureTime = {
  "start": {
    "event": "You have found the cave rumored to be containing the Golden Hat of Chuck Norris! In order to save your village, you have to retrieve it! The cave has 5 labelled rooms to enter, which room should you enter?!",
    "selection": {
      "a": "Enter room 1, it looks super promising!",
      "b": "Walk into room 2, you're sure it contains a treasure!",
      "c": "Definitely choose room 3, the middle choice is always the best.",
      "d": "Room 4 looks like a good choice.",
      "e": "Go into room 5, there's nothing suspicious about it at all!",
    }
  },
  // Room 1
  "1_a": {
    "event": "You walk into room 1, and come across a solid wall. It looks like it should be able to be opened. What do you do?",
    "selection": {
      "a": "Try to force the door open.",
      "b": "Look around for a way to open the door without using force.",
      "c": "Turn around to choose a different room."
    }
  },
  "2_a": {
    "event": "You try to force the door open, knowing that you lack the physical and mental willpower to do so. You break both your arms and realize you cannot continue your quest any longer. Game over.",
  },
  "2_b": {
    "event": "You are now in the second room, and there are 3 more entrances. What should you do?",
    "selection": {
        "a": "Enter the leftmost room.",
        "b": "Enter the middle room.",
        "c": "Enter the rightmost room.",
    }
  },
  "2_c": {
    "event": "You turn back to the previous room, and the doors infront and behind you close! Game over.",
  },
  "3_a" : {
    "event": "You walk into the room and the door closes behind you! Game over.",
  },
  "3_b" : {
    "event": "You enter the room and find an empty room. There seems to be a statue of Chuck Norris in the corner. Do you approach it?",
    "selection": {
        "a": "Touch the statue.",
        "b": "The status is too menacing. Don't touch it.",
        "c": "You could definitely take a statue of Chuck Norris. Go knock it over!",
    }
  },
  "3_c" : {
    "event": "You enter the rightmost room and immediately fall into a pit full of banana peels. They are too slippery for you to climb out! Game over."
  },
  "4_a" : {
    "event": "You touch the statue and immediately feel your bones begin to lock; the eyes of Chuck Norris staring deep into your soul. There is no escaping him. Game over.",
  },
  "4_b": {
    "event": "You refuse to touch the statue of Chuck Norris, so it decides to touch you instead. You take a punch directly to the chest, causing your lung to no longer function. Game over.",
  },
  "4_c": {
    "event": "You have knocked over the statue, and revealed a hidden passageway to a treasure chest!",
    "selection": {
        "a": "Approach the chest slowly, being wary of any hidden traps.",
        "b": "What could go wrong? Quickly run over to the chest to open it!",
        "c": "Use your treasure-hunting knowledge to thoroughly examine the entire room around you, instead of focusing on the treasure chest like most would.",
        "d": "This room definitely looks safe to relax in for awhile. Prepare to set up camp for the night.",
    }
  },
  "5_a": {
    "event": "You walked slowly and carefully, making sure to set off every single trap in the room! This is definitely game over.",
  },
  "5_b": {
    "event": "You ran straight to the chest, and opened it to reveal... absolutely nothing. And you set off all the traps. Game over.",
  },
  "5_c": {
    "event": "You take your time to examine the room, giving the slowly opening floor to give out beneath you. There is a deep pit filled with banana peels below. Game over.",
  },
  "5_d": {
    "event": "You set up camp, in the closest corner of the room, narrowly avoiding every single trap! However, now some goblins have entered the room to take the treasure for themselves! They challenge you to a battle of Rock, Paper, Scissors! What should you choose?",
    "selection": {
        "a": "",
        "b": "",
        "c": "",
    }
  },
  //Room 2
  "1_b": {
    "event": "You enter the second room, and find absolutely nothing in it. What should you do?",
    "selection": {
      "d": "Look around anyways.",
      "e": "Hit the walls a few times to see if anything changes.",
      "f": "This place looks like a nice place to rest. Maybe you should set up camp?",
    },
  },
  "2_d": {
    "event": "You spot literally nothing. And you fall into a pit of banana peels. The end.",
  },
  "2_e": {
    "event": "Your weak fists manage to punch through one of the walls! You walk through the new hole in the wall and arrive in another room! There is a rather obvious looking button on the right-hand wall, and a coin-operated vending machine on the left.",
    "selection": {
        "g": "Press the very obvious looking button on the wall.",
        "h": "Insert the moldy dollar coin you found in your pocket into the vending machine!",
        "i": "This room looks quite suspicious.. try turning around.",
    },
  },
  "2_f": {
    "event": "You decide to set up camp.",
    "end": "the end"
  },
  "3_g": {
    "event": "You press the obvious looking button and fall into a very obvious trap. Game over.",
  },
  "3_h": {
    "event": "You insert your dollar coin into the vending machine, and it opens up the floor beneath you. You fall into a pit filled to the brim with banana peels. Game over.",
  },
  "3_i": {
    "event": "You head back and find yourself inside a completely new room, with 3 different openings! What should you do?",
    "selection": {
        "j": "Head into the leftmost room.",
        "k": "Head into the middle room.",
        "l": "Head into the rightmost room.",
    },
  },
  "4_j" : {
    "event": "You entered the leftmost room, and the door closes behind you! Game over.",
  },
  "4_k" : {
    "event": "You entered the middle room. The door closes behind you! Game over.",
  },
  "4_l" : {
    "event": "You entered the rightmost room. You come across a new room, with a picture of Chuck Norris hanging on the wall! What should you do?",
    "selection": {
        "m": "Gently caress the picture.",
        "n": "Take the picture and run! There's nobody around to catch you!",
        "o": "Kneel down and whisper a prayer to Chuck Norris for a safe journey.",
    },
  },
  "5_m": {
    "event": "After gently caressing the picture, you feel extremely dizzy. The picture was poisoned! You pass out and never wake up again. Game over.",
  },
  "5_n": {
    "event": "You quickly run up to the picture, and try to rip it off the wall! However, weight of your sin weighs you down so much that you fall to the ground, landing head-first. Game over.",
  },
  "5_o": {
    "event": "Your prayers were heard. The Golden Hat of Chuck Norris falls from the ceiling into your lap, and signs pop up directing you out of the cave safely. You have won!"
  },
  //Room 3
  "1_c": {
    "event": "You enter the third room, and fall immediately into a deep pit of banana peels. Yikes. Game Over.",
  },
  //Room 4
  "1_d": {
    "event": "You enter the fourth room and have come across what looks to be a fogged up display case. You can't see through it without getting closer. What should you do?",
    "selection": {
      "p": "Walk closer to the display case.",
      "q": "Try to break open the case. What could go wrong?",
      "r": "Ignore the case and look around the room. It's definitely a trap."
    },
  },
  "2_p" : {
    "event": "You walk closer and trigger a trap beneath you, causing you to fall into a deep pit filled with banana peels. Game over.",
  },
  "2_q" : {
    "event": "You walk towards the case to break it open, and trigger a trap beneath you, which causes you to fall into a pit filled with banana peels. There is no escaping the bananas. Game over.",
  },
  "2_r": {
    "event": "You ignore the case and find a button behind it! Should you push the button?",
    "selection": {
      "s": "Yes! Push it! Push all the buttons!",
      "t": "Definitely not. There has to be a trap linked to that button.",
      "u": "Go for broke and look for something else in the room again!",
      "v": "You're too tired to make a decision. Set up camp here.",
    }
  },
  "3_s": {
    "event": "You pushed the button. Guess what? You fell into a trap full of banana peels. Game over.",
  },
  "3_t": {
    "event": "You chose not to push the button, and while you were waiting for something else to do the entire room opened up beneath your feet to drop you into a pit full of banana peels. Game over.",
  },
  "3_u": {
    "event": "You tried to search around the room, and while you were searching the entire room opened up to drop you into a pit full of banana peels. Game over.",
  },
  "3_v": {
    "event": "While you were setting up your tent, the floor fell beneath you. However, your tent was set up in a way that allowed you to stay suspended above the hole! You see an entrance to another room within arms reach. Do you go for it?",
    "selection": {
      "w": "You try to climb for the next room!",
      "x": "You choose to stay still to think it out!",
    },
  },
  "4_w": {
    "event": "You successfully made it into the next room! There is is another door in front of you. Do you take it?",
    "selection": {
      "y": "Yes. Go for it.",
      "z": "No. Don't go for it.",
    },
  },
  "4_x": {
    "event": "You chose to stay still, and your tent gave out! I don't have to explain what happened next. Game over."
  },
  "5_y": {
    "event": "You went for the next door, and behind it was the Golden Hat of Chuck Norris! You won!"
  },
  "5_z": {
    "event": "You were too scared to go for the next door, and some goblins showed up to mug you of your treasures! Game over."
  },
  //Room 5
  "1_e": {
    "event": "You enter the fifth room, which has revealed a staircase leading deep into the cave! Do you walk down the stairs?",
    "selection": {
      "ab": "Yes! Go down the stairs!",
      "ac": "No, don't go down the stairs. There might be a trap down there!",
    },
  },
  "2_ab": {
    "event": "You went down the stairs, and immediately came before the Golden Hat of Chuck Norris! You've won!",
  },
  "2_ac": {
    "event": "You chose not to go down the stairs, but your indecisiveness has caused the cave to collapse on you! Game over.",
  },
};
choice.addEventListener('mousedown', function() {
  selection = form.querySelectorAll('input[type=radio]:checked')[0].value;
  if(selection) {
    adventure++;
    populateForm(adventure + "_" + selection);
  };
});
button2.addEventListener("click", async() => {
  let response = await axios.get('https://api.chucknorris.io/jokes/random')
  console.log(response.data.value);
  let quote = response.data.value
  let div = document.querySelector(".bottom")
  div.innerText = quote
})
function restartButton() {
    document.form.reset();
};
function populateForm(story) {
  let current_story = adventureTime[story];
  let string = '';
  for(let prop in current_story['selection']) {
    if(current_story['selection'].hasOwnProperty(prop)) {
      string += '<label><input type="radio" name="selection" value="' + prop + '"/><span>' + current_story['selection'][prop] + '</span></label>';
    };
  };
  form.querySelector('p').innerHTML = current_story.event;
  form.querySelector('fieldset').innerHTML = string;
};
populateForm('start');