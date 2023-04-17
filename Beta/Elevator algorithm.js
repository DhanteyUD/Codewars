/**
 * 
 * There is a building with 2 elevators ('left' and 'right') 
 * and 5 floors (0, 1, 2, 3, 4).
 *
 * When someone calls an elevator, they press an 'up' call button 
 * or a 'down' call button.
 *
 * Given two people that press two call buttons at the same time, 
 * your function should decide which elevator takes which call according to 
 * the rules described below:
 *
 * General outlay of the function is:
 * elevator(leftCurrentFloor, rightCurrentFloor, {Call1}, {Call2});
 *
 * Output should be a string with the names of the elevators that takes 
 * the 1st and 2nd call, respectively.
 * 
 * These are the four possible outputs:
 * 'left left'/'left right'/'right left'/'right right'.
 *
 *
 * 1. The closest elevator to a call should take the call.
 * Examples:
 * elevator(0, 3, {3, 'down'}, {0, 'up'}); //outputs 'right left'
 * elevator(0, 3, {1, 'down'}, {4, 'down'}); //outputs 'left right'
 *
 *
 * 2. If both elevators are equally close to the call, the default elevator 
 * is 'right'.
 * Examples:
 * elevator(2, 2, {2, 'down'}, {3, 'up'}); //outputs 'right left'
 * elevator(1, 1, {2, 'down'}, {2, 'up'}); //outputs 'right left'
 *
 *
 * 3. An elevator will take both calls only if ALL of these conditions are met:
 *
 * a. Both calls are in the same direction.
 * Examples:
 * elevator(0, 0, {floor:1, direction:'up'}, {floor:3, direction:'up'}); //outputs 'right right'.
 * elevator(4, 4, {3, 'down'}, {2, 'down'}); //outputs 'right right'
 * elevator(4, 4, {3, 'down'}, {2, 'up'}); //outputs 'right left'
 *
 * b. The same elevator is closer to both calls.
 * Examples:
 * elevator(4, 3, {3, 'down'}, {2, 'down'}); //outputs 'right right'
 * elevator(1, 4, {4, 'down'}, {1, 'down'}); //outputs 'right left'
 *
 * c. The elevator doesn't have to change it's direction to get them both.
 * Examples:
 * elevator(2, 2, {floor:4, direction:'down'}, {floor:1, direction:'down'}); //outputs 'right left'.
 * elevator(0, 0, {2, 'up'}, {3, 'up'}); //outputs 'right right'
 * elevator(0, 0, {3, 'up'}, {2, 'up'}); //outputs 'right right'
 * elevator(0, 0, {3, 'up'}, {0, 'up'}); //outputs 'right right'
 *
 * d. The elevator doesn't have to go against a taken call direction to get them both.
 * Examples:
 * elevator(2, 2, {floor:2, direction:'down'}, {floor:4, direction:'down'}), //outputs 'right left'.
 * elevator(0, 3, {2, 'down'}, {4, 'down'}); //outputs 'right left'
 *
 * e. An edge case: the elevator should take the second call if it is closest 
 * to both calls AND if both floors are in the same direction for the 
 * elevator AND both calls are in the same direction even if it needs to 
 * change it's direction once to pick them both up.
 * 
 * elevator(0, 4, {floor:2, direction:'up'}, {floor:3, direction:'up'});//outputs 'right right'
 * elevator(4, 0, {floor:2, direction:'down'}, {floor:1, direction:'down'}); //outputs 'right right'
 *
 *
 * 4. All values will be valid integers for the floors (not limited to 0-4!), and 'up' or 'down' for the directions.
 *
 * Recommended kata before doing this one - Closest elevator (8 kyu) 
 * https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/
 *
 * @format
 */

 function elevator(left, right, call1, call2){
  //Code on! :)
}
