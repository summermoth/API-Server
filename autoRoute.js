const fs = require("fs");
const path = require("path");


module.exports = function (root, app) {

  const dir = fs.readdirSync(path.join(__dirname, root), {
    withFileTypes: true,
  });

  dir.forEach((p) => {
	
    if (p.isDirectory()) {
    
      if (p.name != "_controller") {
        arguments.callee(`${root}/${p.name}`, app); //재귀함수 /api/todo, app
      }
    } else {
      let moduleName = '/'+ p.name.replace(/\.js/g, "");
      if(moduleName == '/index'){
        moduleName="";
      }
	
      app.use(`${root}${moduleName}`, require(`.${root}/${p.name}`));
    }
  });
};