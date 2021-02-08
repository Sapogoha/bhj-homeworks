const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

getHole = (index) => document.getElementById(`hole${index}`);
reset = () => {
  dead.textContent = 0;
  lost.textContent = 0;
};

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);

  hole.onclick = () => {
    if (hole.classList.contains('hole_has-mole')) {
      dead.textContent++;
      if (dead.textContent == 3) {
        alert('Победа!');
        reset();
      }
    } else {
      lost.textContent++;
      if (lost.textContent == 5) {
        alert('Повезет в следующий раз!');
        reset();
      }
    }
  };
}
