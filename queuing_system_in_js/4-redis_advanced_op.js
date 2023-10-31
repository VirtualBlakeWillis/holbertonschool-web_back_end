import { createClient } from 'redis';

const client = createClient();

client.hset('HolbertonSchools', 'Portland', '50', (err, reply) => {
  console.log(`Reply: ${reply}`);
});
client.hset('HolbertonSchools', 'Seattle', '80', (err, reply) => {
  console.log(`Reply: ${reply}`);
});
client.hset('HolbertonSchools', 'New York', '20', (err, reply) => {
  console.log(`Reply: ${reply}`);
});
client.hset('HolbertonSchools', 'Bogota', '20', (err, reply) => {
  console.log(`Reply: ${reply}`);
});
client.hset('HolbertonSchools', 'Cali', '40', (err, reply) => {
  console.log(`Reply: ${reply}`);
});
client.hset('HolbertonSchools', 'Paris', '2', (err, reply) => {
  console.log(`Reply: ${reply}`);
});

client.hgetall('HolbertonSchools', (err, value) => {
  console.log(value);
});
