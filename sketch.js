const myWorkers = [];

var myWorker;

for (var i = 1; i < 300; i++) {
  myWorker = new Worker("worker.js");

  myWorker.onmessage = (e) => {
    console.log(e.data);
  };

  myWorker.postMessage(i);
}
