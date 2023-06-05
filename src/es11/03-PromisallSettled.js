const promiseOne = new Promise((resolve, reject)=> reject("Reject"));
const promiseTwo = new Promise((resolve, reject)=> resolve("Resolve"));
const promiseTree = new Promise((resolve, reject)=> resolve("Resolve 2"));

Promise.allSettled([promiseOne ,promiseTwo ,promiseTree ])
    .then(response=>console.log(response));