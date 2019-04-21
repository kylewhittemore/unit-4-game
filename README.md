### unit-4-game
### jQuery Assignment
The Simpsons themed RPG game

### Overview
This is a very simple RPG-styled game.  The user selects a character to play as, then selects an opponent from a pool of 3 opponents.  If they are victorious, the opponent is banished to the defeated area, and the user selects a new opponent.  If all the opponents are defeated, the user wins.

### Design Considerations:

1. The game seems to be a good candidate for an object oriented approach.

2. Since there will be multiple characters, and each character has the same properties, a class can be used to construct each character used for a particular game.

3. I would like to have a larger pool of characters from which to pull the four characters available for each game.

### Learning Goals:

1. To work on object oriented programming concepts.

2. To learn to use the class feature of javascript to reduce redundancy when building multiple versions of the same type of object.

3. To develop HTML/CSS and design skills.

4. To further develop an understanding of the jQuery library.

### Build Debrief:

Overall the game came out functional and bug free (for now).  I did implement both OOP concepts and the class feature.  

There is a game object which houses the 10 game methods, the array of characters from which to build character objects, and the three arrays to hold the three categories of characters on screen: available to play, active players, and defeated/out of play.  

Through manipulating the three arrays the game objects controls the flow of characters through the game, the timing of available user actions, and the tracking of the game state.

After completion, I revised a few things to ES6 where i could, and I was able to clean up some methods.  I am curious how the four render methods could be revised.  There is alot of repitition between them, but with different arrays/html elements.

Outside of the class and object declarations, the game is initialized and a click event listener is added to the attack button.  I found that this was the best place to add the click listener to be sure that only one listener was added.  I put it in the .addClickEvents() and it multiplyed each new cha


### Materials Used: 

1. I used images from a video game resource site (https://www.spriters-resource.com/pc_computer/simpsonsdoom/).  

2. The jQuery, CSS, JS docs.

3. The Net Ninja classes/objects tutorial.