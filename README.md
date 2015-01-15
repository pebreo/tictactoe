# Tic Tac Toe
* Author: Paul Ebreo

## Demo
Click here for the demo: [http://pebreo.github.io/tictactoe/][demolink]

## Purpose
The purpose of this simple game was to create an "unbeatable" Tic Tac Toe game.

## How it works
When the player clicks the Start button an 'O' is automatically drawn on the top-left tile. The player than has a chance to click on any of the other remaining tiles. What happens when a player clicks a tile?

1. A click triggers the event `index.html:$('#selectable').on('selecteableselected', function(){})`
2. Next, the program then keeps track of which tile was selected then draw the letter 'X' using `index.html:$(ui.selected).text('X')`
3. It then calls `app.js:Funcs.prototype.handlestr()` and passes the Ordered List and `tilestr` (which is a string of the tile values)
4. The function `app.js:handlestr()` then checks whether (a) the computer lost (b) the computer won or (c) or whether it should make a move.
5. If the computer decides it can move it will call `computermoves.js:Comp.prototype.calcComputerMove(tilestr)` which will go through a bunch of `if()` statements on regexes against the `tilestr` - the hardcoded regexes are contained in `computermoves.js`. For example if the `tilestr` matches regex `OX_______` then we return a value of 3 which will be the 4th tile.
6. Finally we get the `tilenum` and draw an 'O' to that tilenumber.

This program was written in Javascript using Jquery-UI and LoDash libraries.

## Jasmine unit tests
To run the test just open `SpecRunner.html` in your browser and you will see which tests failed and which tests have passed.

## Installation & Requirements
To install this project just clone this repo.

Open the `index.html` in your browser and push the 'Click to Start' button.

## To-do / Known Issues
- Board should be disabled when computer wins
- Randomize computer start move
- Give human choice to start first
- Make graphics nicer


[demolink]: http://pebreo.github.io/tictactoe/ "Tic Tac Toe Game"