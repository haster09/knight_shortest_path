class Tree {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  knightMoves() {
    const queue = [new Knight(this.start, [this.start])];
    let current = queue.shift();

    while (current.position.toString() !== this.end.toString()) {
      let moves = current.nextMoves();
      moves.forEach((move) => {
        let node = new Knight(move, current.next.concat([move]));
        if (node) {
          queue.push(node);
        }
      });
      current = queue.shift();
      }
      current.next.forEach((move) => {
      console.log(move);
      })
    } 
}

class Knight {
  constructor(position, next = []) {
    this.position = position;
    this.next = next;
  }
  nextMoves() {

    let X = [2, 1, -1, -2, -2, -1, 1, 2];
    let Y = [1, 2, 2, 1, -1, -2, -2, -1]

    let moves = [];
    let valid = []
    
    for (let i = 0;  i < 8; i++) {
      let x = this.position[0] +  X[i];
      let y = this.position[1] + Y[i];
      moves.push([x, y]);
    }
    for (let item of moves) {
      if (item[0] < 9 &&
          item[0] > 1 &&
          item[1] < 9 &&
          item[1] > 1) {
          valid.push(item);
      }
    }
    return valid;
  }
}

const test = new Tree([1,1], [8,8]);

test.knightMoves();