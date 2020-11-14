const url = require('url');

const myUrl = new URL('http://mywebsite.com:3000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);

// Origin
console.log(myUrl.origin);

// Protocol
console.log(myUrl.protocol);

// Host
console.log(myUrl.host);

// Hostname
console.log(myUrl.hostname);

// Port
console.log(myUrl.port);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add Param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});