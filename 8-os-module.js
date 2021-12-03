const os = require('os');    //built in module - os

const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log('System uptime', os.uptime(), 'seconds');

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs);