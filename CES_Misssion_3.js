//Mission 3 Part 1
const touchS = ev3_touchSensor2();
const colorS = ev3_colorSensor();

function pingColorSecond(limit) {
    for (let i = 0; i < limit; i = i + 1) {
        if(ev3_touchSensorPressed(touchS)) {
            break;
        }
        const a = ev3_reflectedLightIntensity(colorS);
        display(a);
        ev3_pause(1000);
    }
}

pingColorSecond(5);

// part 2
const motorA = ev3_motorA();
const motorB = ev3_motorB();
const colorS = ev3_colorSensor();
const touchS = ev3_touchSensor2();

function forward(time, speed) {
    ev3_runForTime(motorA, time, speed);
    ev3_runForTime(motorB, time, speed);
}

forward(10000, 100);

while(ev3_colorSensorGetColor(colorS) === 1) {
    if(ev3_touchSensorPressed(touchS)) {
        break;
    }
    continue;
}

ev3_motorStop(motorA);
ev3_motorStop(motorB);
ev3_pause(300);

// part 3
const motorA = ev3_motorA();
const motorB = ev3_motorB();
const colorS = ev3_colorSensor();
const touchS = ev3_touchSensor2();
let to_end = false;

function forward(time, speed) {
    ev3_runForTime(motorA, time, speed);
    ev3_runForTime(motorB, time, speed);
}

function left_wheel_move(time, speed) {
    ev3_runForTime(motorB, time, speed);
}

function right_wheel_move(time, speed) {
    ev3_runForTime(motorA, time, speed);
}

function rotate_cw(time, speed) {
    left_wheel_move(time, speed);
    right_wheel_move(time, -speed);
}

function rotate_acw(time, speed) {
    right_wheel_move(time, speed);
    left_wheel_move(time, -speed);
}

function stop() {
    ev3_motorStop(motorA);
    ev3_motorStop(motorB);
    ev3_pause(300);
}

function move_along() {
    forward(10000, 200);
    while(ev3_colorSensorGetColor(colorS) === 1) {
        continue;
    }
    stop();
}

function check_direction() {
    //rotate clockwise to check
    rotate_cw(1800, 130);
    ev3_pause(100);
    while (ev3_colorSensorGetColor(colorS) !== 1 && ev3_motorGetSpeed(motorB) > 0) {
        display(ev3_colorSensorGetColor(colorS));
        continue;
    }
    stop();
    
    //If havent find black line, rotate anti-clockwise to check
    if (ev3_colorSensorGetColor(colorS) !== 1) {
        rotate_acw(3600, 130);
        ev3_pause(100);
        while(ev3_colorSensorGetColor(colorS) !== 1 && ev3_motorGetSpeed(motorA) > 0) {
            display(ev3_colorSensorGetColor(colorS));
            continue;
        }
        stop();
    }
        //If both rotations can't find black line, robot reached end of maze
    if (ev3_colorSensorGetColor(colorS) !== 1) {
        display(ev3_colorSensorGetColor(colorS));
        rotate_cw(1800, 130);
        to_end = true;
    }
}

// main function
function gogo() {
    while(!to_end) {
        move_along();
        ev3_pause(250);
        check_direction();
        ev3_pause(250);
    }
stop();
}
gogo();