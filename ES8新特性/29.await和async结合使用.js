const fs = require('fs');

function read() {
    return new Promise((resolve, reject) => {
        fs.readFile('./数据/1.txt', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
}

async function main() {
    // await 返回promise的值
    let str = await read();

    console.log(str.toString());
}

main();
