
// const readline = require('readline');
// const config = require('@root/config');
const spawn = require('child_process').spawn;
const bedrockProcess = spawn('./bedrock_server', [], {cwd: './bedrock'});
function writeCmd(process, msg) {
  process.stdin.write(msg+'\n');
}

bedrockProcess.stdout.pipe(process.stdout);
bedrockProcess.stderr.pipe(process.stdout);

module.exports = {
  'GET /api/v1/sendcmd': async (ctx, next) => {
    console.log(ctx.query.cmd);
    writeCmd(bedrockProcess, ctx.query.cmd);
  }
}
