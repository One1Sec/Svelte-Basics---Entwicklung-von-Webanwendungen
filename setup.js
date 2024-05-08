const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const directories = ['Aufgaben', 'Lösungen'];

function runNpmInstall(dir) {
  exec('npm install', { cwd: dir }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error in ${dir}: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error in ${dir}: ${stderr}`);
      return;
    }
    console.log(`npm install completed in ${dir}`);
    console.log(stdout);
  });
}

function setupProjects(baseDir) {
  directories.forEach((subDir) => {
    const fullDir = path.join(baseDir, subDir);
    fs.readdir(fullDir, { withFileTypes: true }, (err, files) => {
      if (err) {
        console.error(`Error reading directory ${fullDir}: ${err}`);
        return;
      }
      files.forEach((file) => {
        if (file.isDirectory()) {
          const projectDir = path.join(fullDir, file.name);
          if (fs.existsSync(path.join(projectDir, 'package.json'))) {
            runNpmInstall(projectDir);
          }
        }
      });
    });
  });
}

const rootDir = path.resolve(__dirname);
setupProjects(rootDir);
