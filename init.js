const { exec } = require('child_process');
const fs = require('fs');
const time = (new Date());
const month = time.getMonth() + 1;

const folder = `./${time.getFullYear()}年${month < 10 ? `0${month}` : month}月`;
const date = `${time.getFullYear()}年${month < 10 ? `0${month}` : month}月${time.getDate()}日`;

if (!fs.existsSync(folder)) {
    exec(`mkdir ${folder}`);
}
exec(`cp QA.template ${folder}/${date}.md`);