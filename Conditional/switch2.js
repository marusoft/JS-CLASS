let isRaining = "I am not going to school";
switch (isRaining) {
  case "It is not raining":
    console.log("I can play outdoor");
    break;
  case "It is not raining and Sun is at 37C":
    console.log("I can play outdoor and have some fun");
    break;
  case "I am not going to school":
    console.log("Because it is raining heavily");
    break;
  case "It is raining":
    console.log("I can play indoor");
    break;
  default:
    console.log("I am having fun at home");
    break;
}
