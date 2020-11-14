const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free Memory
console.log(`${os.freemem()/(1024*1024*1024)}GB`);

// Total Memory
console.log(`${os.totalmem()/(1024*1024*1024)}GB`);

// Home directory
console.log(os.homedir());

// Uptime
console.log(`${os.uptime()/(60*60)}hours`);