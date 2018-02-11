# shelli
Execute terminal commands the easy way.

### Installation
```bash
npm install shelli
```

### Usage
```js
var shell = require('shelli');

shell.cd('path'); // Change directories

shell.pwd(); // Returns the current path

shell.cat('file'); // View the contents of a file

shell.echo('echo'); // Echo something

shell.ls(); // List files/folders in your directory

shell.exec('npm install shelli'); // Execute a command

shell.wget('http://npmjs.com'); // Download a website to your current directory

shell.clear(); // Clear your terminal

shell.find('index.js'); // Checks if a file exists

shell.mkdir('create/a/directory'); // Create a directory or check if one exists

shell.exists('index.js'); // Returns true or false

// Examples:

shell.mkdir('directory'); // Creates a directory called "directory" and returns
// mkdir: test: File exists
// if it already exists

if(shell.exists('index.js')) {
    console.log('works');
}

```
