const { exec } = require('child_process');
const time = (new Date());
const month = time.getMonth() + 1;
const date = `${time.getFullYear()}年${month < 10 ? `0${month}` : month}月${time.getDate()}日`;

exec(`cp QA.template ${date}.md`);