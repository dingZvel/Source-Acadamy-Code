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

function left() {
    const time = 2100;
    ev3_runForTime(motorA, time, 260);
    ev3_pause(time + 100);
}

function right() {
    const time = 2100;
    ev3_runForTime(motorB, time, 260);
    ev3_pause(time + 100);
}
function stop() {
    ev3_motorStop(motorA);
    ev3_motorStop(motorB);
    ev3_pause(300);
}

function forward(time, speed) {
    ev3_runForTime(motorA, time, speed);
    ev3_runForTime(motorB, time, speed);
    ev3_pause(time);
}

function aroundBox() {
    let distance = ev3_ultrasonicSensorDistance(ultraS) / 10;
    const direction = math_random() < 0.5;
    
    ev3_runForTime(motorA, 10000, 500);
    ev3_runForTime(motorB, 10000, 500);
    
    while(distance >= 32) {
        distance = ev3_ultrasonicSensorDistance(ultraS) / 10;
    }
    
    stop();
    
    direction ? left() : right();
    
    forward(2200, 500);
    
    stop();
    
    direction ? right() : left();
    
    forward(2500, 500);
}

aroundBox();