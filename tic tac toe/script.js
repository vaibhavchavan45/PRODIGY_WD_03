const board = document.getElementById('board');
  const cells = document.querySelectorAll('.cell');
  let currentPlayer = 'X';
  let gameActive = true;

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const handleCellClick = (e) => {
    const cell = e.target;
    const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

    if (cell.textContent !== '' || !gameActive) return;

    cell.textContent = currentPlayer;
    checkResult();
    changePlayer();
  };

  const checkResult = () => {
    let winner = null;
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
        winner = cells[a].textContent;
        break;
      }
    }

    if (winner) {
      gameActive = false;
      alert(`${winner} wins!`);
      return;
    }

    if ([...cells].every(cell => cell.textContent !== '')) {
      gameActive = false;
      alert("It's a tie!");
    }
  };

  const changePlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  };

  cells.forEach(cell => cell.addEventListener('click', handleCellClick));

