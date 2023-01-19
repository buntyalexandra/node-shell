// we want to be able to accept the command "cat" and a file name as the stdin  

// write as a function
// whatever the stdin is, split it and the second part is the file name to pass into the function 

function cat () {
process.stdin.on('data', (data) => {
    const cmd = data.toString().split(" ");
    const filename = cmd[1];
    filename.readfile('./', 'utf8', (err, filename) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(filename('\n'));

        }
      });
  });
}
