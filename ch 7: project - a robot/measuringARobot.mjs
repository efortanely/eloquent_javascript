import { VillageState, routeRobot, goalOrientedRobot } from "./07_robot.mjs";

function countSteps(villageState, robot, memory) {
  let steps = 0;

  while (villageState.parcels.length > 0) {
    let action = robot(villageState, memory);
    villageState = villageState.move(action.direction);
    memory = action.memory;
    steps++;
  }

  return steps;
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let total1 = 0,
    total2 = 0;

  for (let i = 0; i < 100; i++) {
    let villageState = VillageState.random();
    total1 += countSteps(villageState, robot1, memory1);
    total2 += countSteps(villageState, robot2, memory2);
  }

  console.log(total1 / 100, total2 / 100);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
