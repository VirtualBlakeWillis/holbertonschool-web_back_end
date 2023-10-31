import { createClient } from "redis";
const redis = require("redis");

const client = createClient();

client.on("connect", () => {
  console.log("Redis client connected to the server");
});

client.on("error", (error) => {
  console.error(`Redis client not connected to the server: ${error}`);
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, (error, reply) => {
    redis.print(`Reply: ${reply}`);
  });
}

function displaySchoolValue(schoolName) {
  client.get(schoolName, (error, reply) => {
    console.log(reply);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');