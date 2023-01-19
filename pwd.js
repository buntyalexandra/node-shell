//Output a prompt
// process.stdout.write('prompt > ');
module.exports =
    process.stdin.on('data', (data) => {
        // if what is passed in for the prompt is "pwd" then output the current file path
          const cmd = data.toString().trim(); //remove the newline
          if (cmd === "pwd"){
            //   process.stdout.write(cwd);
              // alternate way of saying the same code from above
              process.stdout.write( __dirname);
          }
        // process.stdout.write('\nprompt > ');
      });