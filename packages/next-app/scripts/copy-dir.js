import fs from 'fs-extra';

const source = '.next';
const destination = '../../.next';

fs.copy(source, destination, function (err) {
  if (err){
    console.log('An error occured while copying the folder.')
    return console.error(err)
  }
  console.log('Copy completed!')
});
