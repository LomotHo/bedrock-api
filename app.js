require('module-alias/register');
const path = require('path');
const Koa = require('koa');
const app = new Koa();

const rest = require("@root/util/rest");
const controller = require('@root/controller');
// const errHandler = require('@root/util/err-handler');
const config = require('@root/config');
// const isProduction = process.env.NODE_ENV === 'production';

// record URL
app.use(async (ctx, next) => {
    console.log(ctx.request.method + ' ' + ctx.request.url);
    await next();
});

app.use(rest.restify(config.apiPrefix));
app.use(controller(path.resolve(__dirname, './controller')));

// const spawn = require('child_process').spawn;
// const bedrockProcess = spawn('./bedrock_server', [], {cwd: './bedrock'});


// bedrockProcess.stdout.pipe(process.stdout);
// bedrockProcess.stderr.pipe(process.stdout);
// bedrockProcess.stdout.on('data', log);
// bedrockProcess.stderr.on('data', log);


// function writeCmd(msg) {
//   bedrockProcess.stdin.write(msg+'\n');
// }
// setTimeout(function() {
// 	writeCmd("list");
// }, 5000); 

// err handel
// app.use(errHandler.handler());


app.listen(config.localPort);
console.log('app started at port ' + config.localPort +'...');
