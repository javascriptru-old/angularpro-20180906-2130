

const oldSetTimeout = setTimeout;
setTimeout = (callback, time) => {
  console.log('START');
  oldSetTimeout(() => {
    callback();
    console.log('FINISH!');
  }, time);
}

//--------------------------------------



setTimeout(() => {
  console.log('Timer is done!');
}, 3000);