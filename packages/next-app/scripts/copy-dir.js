import fs from 'fs-extra';

function copyDir(source, destination) {
  fs.copy(source, destination, function (err) {
    if (err){
      console.log('An error occured while copying the folder.')
      return console.error(err)
    }
    console.log('Copy completed!')
  });
}

copyDir('.next', '../../.next');
copyDir('public', '../../public');
