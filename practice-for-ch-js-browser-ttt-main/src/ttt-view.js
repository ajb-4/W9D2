class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    //
    this.el.innerHTML += document.getElementById('line 8 ul element');
  }
  
  setupBoard() {
    const board = document.createElement('ul')
    for (let i = 1; i < 4; i++) {
      for (let j = 1; j < 4; j++) {
        let coords = [];
        coords.push(i);
        coords.push(j);
        const square = document.createElement('li')
        //
        // <li data-index-number=`${coords}` id="square"></li>
        board.appendChild(square);
      }
    }
    return board
    //install handleClick(e)
  }
  
  handleClick(e) {
    const position = querySelector("li:hover");
    let ele = e.target;
    //
    const pos = position.data-index-number;
    Game.playMove(pos);
    ele.classList.add("e.team");

  }

  makeMove(square) {
    
   this.handleGameOver()
  }
  
  handleGameOver() {
    if (Game.winner) {
      return `Congrats ${Game.winner}, you have won!!!`
    }
  }
}

export default View;