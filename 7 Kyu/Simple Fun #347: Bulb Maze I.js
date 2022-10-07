/**
 * You walk in a maze. You need to reach the exit through many rooms.
 * These rooms are in a straight line.
 *
 * You can only walk in the dark. Otherwise, you will be caught by the enemy.
 *
 * Your trouble is that some rooms have light bulbs. If the light bulb is
 * bright when you enter the room. You were caught by the enemy.
 *
 * Fortunately, the status of these bulbs (on/off) is auto-switched every
 * minute. So you have a chance to go through the maze.
 *
 * Task
 * Let's us use a string maze to represent these rooms，
 * like this: "xo oxox".
 *
 * "x" means there is a bulb in the room, and its initial status is off;
 *
 * "o" means there is a bulb in the room, and its initial status is on;
 *
 * " "(space) means a room without bulb, it's always dark.
 *
 * Your task is to determine if you can go through the maze.
 * Return true if you can, false otherwise.
 *
 * Note
 * Your initial position is the most left, the exit position is the most right.
 *
 * Your moving speed is 1 minute per step. You can not stop before you
 * start your moving until you reach the exit.
 *
 * Examples
 * For maze = "xo oxox". The output should be true.
 *
 * step 0 :  xo oxox
 *           ^ <--------You are here
 * step 1 :  ox xoxo
 *            ^ <--------You are here
 * step 2 :  xo oxox
 *             ^ <--------You are here
 * step 3 :  ox xoxo
 *              ^ <--------You are here
 * step 4 :  xo oxox
 *               ^ <--------You are here
 * step 5 :  ox xoxo
 *                ^ <--------You are here
 * step 6 :  xo oxox
 *                 ^ <--------You are here
 * step 7 :  ox xoxo
 *                  ^ <--------You've go through the maze :)
 * For maze = "xo  oxox". The output should be false.
 *
 * step 0 :  xo  oxox
 *           ^ <--------You are here
 * step 1 :  ox  xoxo
 *            ^ <--------You are here
 * step 2 :  xo  oxox
 *             ^ <--------You are here
 * step 3 :  ox  xoxo
 *              ^ <--------You are here
 * step 4 :  xo  oxox
 *               ^ <--------You were caught by the enemy :(
 * Happy Coding ^_^
 *
 * @format
 */

// Option 1
function bulbMaze(maze) {
  for (let i = 0; i < maze.length; i++) {
    if (maze[i] !== 'x' && maze[i] !== ' ') return false;
    maze = maze.replace(/x|o/g, (v) => (v === 'x' ? 'o' : 'x'));
  }
  return true;
}

// Option 2
const bulbMaze = (map) => [].every.call(map, (v, i) => v !== 'ox'[i & 1]);

// Option 3
const bulbMaze = (map) =>
  [...map]
    .map((el, i) => el === ' ' || el === 'xo'[i & 1])
    .every((e) => e === true);

// Option 4
function bulbMaze(map) {
  const pos = ['x', 'o'];
  const arr = [...map];
  const result = arr.map((el, i) => el === ' ' || el === pos[i % 2]);
  return result.every((el) => el === true);
}

// Option 5
function bulbMaze(map) {
  return /^([x ][o ])*[x ]?$/.test(map);
}

// Option 6
const bulbMaze = (map) =>
  ![...map].find((e, i) => (e === 'x' && i & 1) || (e === 'o' && i % 2 === 0));

// Option 7
function bulbMaze(map) {
  //input is a string
  //bulb turns on and off each minute ('x' for on, 'o' for off)
  //blank space has no bulb
  //each step takes a minute

  //convert to array
  let maze = map.split('');
  //iterate thru string turning bulbs on and off each step
  for (let i = 0; i < maze.length; i++) {
    //check if we walk in a bright room (bulb is on) and get caught
    if (maze[i] === 'o') return false;
    maze = maze.map((room) => {
      if (room === 'x') return 'o';
      if (room === 'o') return 'x';
      else return ' ';
    });
  }
  //return true or false (true if can go through maze without getting caught)
  return true;
}