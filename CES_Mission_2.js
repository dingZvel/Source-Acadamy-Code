// part 1: display the distance measured by the ultrasonic sensor once every second
const ultraS = ev3_ultrasonicSensor();
function pingDistanceSecond(limit) {
    for (let i = 0; i < limit; i = i + 1) {
        const a = ev3_ultrasonicSensorDistance(ultraS) / 10;
        display(a);
        ev3_pause(1000);
    }
}
pingDistanceSecond(5);

// part 2: make robot move then when it is 10cm away from the box, reverse 30cm backwards
const motorA = ev3_motorA();
const motorB = ev3_motorB();
const ultraS = ev3_ultrasonicSensor();

let distance_away = ev3_ultrasonicSensorDistance(ultraS) / 10;
ev3_runForTime(motorA, 10000, 500);
ev3_runForTime(motorB, 10000, 500);
while (distance_away >= 18) {
    distance_away = ev3_ultrasonicSensorDistance(ultraS) / 10;
}
ev3_motorStop(motorA);
ev3_motorStop(motorB);

ev3_runForTime(motorA, 10000, -500);
ev3_runForTime(motorB, 10000, -500);
while (distance_away <= 38) {
    distance_away = ev3_ultrasonicSensorDistance(ultraS) / 10;
}

ev3_motorStop(motorA);
ev3_motorStop(motorB);

// part 3: make robot go around the box, randomly choose left/right
const motorA = ev3_motorA();
const motorB = ev3_motorB();
const ultraS = ev3_ultrasonicSensor();
let distance_away = ev3_ultrasonicSensoorDistance(ultraS) / 10;

const randomize = math_random() < 0.5;

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


ev3_runForTime(motorA, 10000, 500);
ev3_runForTime(motorB, 10000, 500);
while (distance_away >= 30) {
    distance_away = ev3_ultrasonicSensorDistance(ultraS) / 10;
}
ev3_motorStop(motorA);
ev3_motorStop(motorB);

randomize ? rotate_acw(1800) : rotate_cw(1800);


ev3_runForTime(motorA, 10000, 750);
ev3_runForTime(motorB, 10000, 750);
ev3_pause(10000);

randomize ? rotate_cw(1800) : rotate_acw(1800);

ev3_runForTime(motorA, 5000, 500);
ev3_runForTime(motorB, 5000, 500); 