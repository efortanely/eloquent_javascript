function generateChessboard(size = 8) {
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      if (i % 2 == 0) {
        row += j % 2 == 0 ? " " : "#";
      } else {
        row += j % 2 == 0 ? "#" : " ";
      }
    }
    console.log(row);
  }
}

generateChessboard(10);
