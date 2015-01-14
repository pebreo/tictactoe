# Tic Tac Toe
* Author: Paul Ebreo

## Demo
Click here for the demo: [http://pebreo.github.io/tictactoe/][demolink]

## Purpose
The purpose of this simple game was to create an "unbeatable" Tic Tac Toe game.

## How it works
When the player clicks the Start button an 'O' is automatically drawn on the top-left tile. The player than has a chance to click on any of the other remaining tiles. What happens when a player clicks a tile?

1. A click triggers the event `$('#selectable').on('selecteableselected', function(){})`
2. Make necessary checks and draw the letter `X` using `$(ui.selected).text('X')
3. Call Funcs.prototype.handlestr() and pass the Ordered List and tilestr (which is a string of the tile values)
4. `handlestr()` makes checks on whether the (a) the computer lost (b) the computer won or (c) to make a move
5. If the computer decides it can move it will call `Comp.prototype.calcComputerMove(tilestr)` which will go through a bunch of `if()` statements which use regex to match the `tilestr` variable against hardcoded regexes. For example
6. 

This program was written in Javascript using Jquery-UI and LoDash libraries.

## Jasmine unit tests
To run the test just open `SpecRunner.html` in your browser and you will see which tests failed and which tests have passed.

## Installation & Requirements
To install this project just clone this repo.

Open the `index.html` in your browser and push the 'Click to Start' button.

## To-do / Known Issues
- Randomize computer start move
- Give human choice to start first
- Make graphics nicer


[demolink]: http://pebreo.github.io/tictactoe/ "Tic Tac Toe Game"