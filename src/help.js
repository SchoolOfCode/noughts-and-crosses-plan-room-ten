export function winnerWinner(move) {
  const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winCombo.length; i++) {
    const [a, b, c] = winCombo[i];
    if (move[a] && move[a] === move[b] && move[a] === move[c]) {
      return move[a];
    }
  }
  return null;
}
