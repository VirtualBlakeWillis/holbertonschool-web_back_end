import handleResponseFromAPI from "./2-then";

const promise = Promise.reject();
console.log(handleResponseFromAPI(promise));
