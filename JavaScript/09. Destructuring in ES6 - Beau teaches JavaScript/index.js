// Destructuring

// Assign variables from objects
var voxel = { x: 3.6, y: 7.4, z: 6.54 };
// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;

const { x, y, z } = voxel;
console.log(x, y, z);

const { x: a, y: b, z: c } = voxel;
console.log(a, b, c);

// Assign variables from nested objects
const nest = {
  start: { x: 5, y: 6 },
  end: { x: 6, y: -9 },
};

const {
  start: { x: startX, y: startY },
} = nest;

console.log(startX, startY);

// Assign Variables from Arrays
const [h, j] = [1, 2, 3, 4, 5];
console.log(h, j);

const [q, , , r] = [1, 2, 3, 4, 5];
console.log(q, r);

// Rest Operator to Reassign Array Elements

const [t, u, ...rest] = [1, 2, 3, 4, 5];
console.log(t, u);
console.log(rest);
