const userMap = new Map([
  [1, { name: "Alimi" }],
  [2, { name: "Kehinde" }],
]);
userMap.set(3, { name: "abdullah" });
console.log(userMap.keys())
console.log(userMap.values());
console.log(userMap.get(3))
