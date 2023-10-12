// part 1: make the robot speak any word or phrase
ev3_speak("a jedi craves not these things");

// part 2: make the robot move forward 10cm then stop
const motorA = ev3_motorA();
const motorB = ev3_motorB();

function forward(time, speed) {
    ev3_runForTime(motorA, time, speed);
    ev3_runForTime(motorB, time, speed);
    ev3_pause(time);
}

forward(1200, 250);

// part 3: make the robot rotate 90° counterclockwise on the spot
const motorA = ev3_motorA();
const motorB = ev3_motorB();

function left_wheel_move(time) {
    ev3_runForTime(motorA, time, 260);
    ev3_pause(time);
}

function right_wheel_move(time) {
    ev3_runForTime(motorB, time, 260);
    ev3_pause(time);
}

function rotate_cw(time) {
    left_wheel_move(time);
    ev3_pause(time);
}

function rotate_acw(time) {
    right_wheel_move(time);
    ev3_pause(time);
}

rotate_acw(1800);

// part 4: make the robot move in a certain path
/* path: move forward 10 cm, turn 90° counterclockwise,
then move forward 5 cm, turn 90° clockwise, then move forward 15 cm*/
const motorA = ev3_motorA();
const motorB = ev3_motorB();

function forward(time, speed) {
    ev3_runForTime(motorA, time, speed);
    ev3_runForTime(motorB, time, speed);
    ev3_pause(time);
}

function left_wheel_move(time) {
    ev3_runForTime(motorA, time, 265);
    ev3_pause(time);
}

function right_wheel_move(time) {
    ev3_runForTime(motorB, time, 275);
    ev3_pause(time);
}

function rotate_cw(time) {
    left_wheel_move(time);
    ev3_pause(time);
}

function rotate_acw(time) {
    right_wheel_move(time);
    ev3_pause(time);
}


const listToDo = list(forward(1200,250), rotate_acw(1800), forward(1200,120), rotate_cw(1800), forward(1200,375));

function path(listOfActions) {
    if (is_null(listOfActions)) {
        return null;
    } else {
        head(listOfActions);
        return path(tail(listOfActions));
    }
}

path(listToDo);