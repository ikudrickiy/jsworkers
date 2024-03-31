onmessage = (e) => {
  var i = 0;
  var x = e.data;

  for (;;) {
    while (x % 2 === 0) {
      x /= 2;
      i++;
    }

    if (x === 1) break;

    x = x * 3 + 1;
    i++;
  }

  postMessage(e.data + " -> " + i);
};
