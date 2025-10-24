const puzzles = [
  {
    title: "第一關：哈哈哈哈",
    desc: "打嘻嘻",
    answer: "嘻嘻"
  },
  {
    title: "第二關：嘻嘻嘻嘻",
    desc: "打哈哈",
    answer: "哈哈"
  },
  {
    title: "第三關：啊啊啊啊",
    desc: "打早安",
    answer: "早安"
  }
];

let current = 0;

const intro = document.getElementById("intro");
const puzzle = document.getElementById("puzzle");
const end = document.getElementById("end");

const puzzleTitle = document.getElementById("puzzleTitle");
const puzzleDesc = document.getElementById("puzzleDesc");
const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

document.getElementById("startBtn").onclick = () => {
  intro.style.display = "none";
  showPuzzle(0);
};

document.getElementById("submitBtn").onclick = () => {
  checkAnswer();
};

document.getElementById("restartBtn").onclick = () => {
  end.style.display = "none";
  intro.style.display = "block";
  current = 0;
};

nextBtn.onclick = () => {
  current++;
  if (current < puzzles.length) {
    showPuzzle(current);
  } else {
    puzzle.style.display = "none";
    end.style.display = "block";
  }
};

function showPuzzle(index) {
  puzzle.style.display = "block";
  const p = puzzles[index];
  puzzleTitle.textContent = p.title;
  puzzleDesc.textContent = p.desc;
  answerInput.value = "";
  feedback.textContent = "";
  nextBtn.style.display = "none";
}

function checkAnswer() {
  const user = answerInput.value.trim().toLowerCase();
  const correct = puzzles[current].answer.toLowerCase();

  if (user === correct) {
    feedback.textContent = "Correct";
    nextBtn.style.display = "inline-block";
  } else {
    feedback.textContent = "Wrong";
  }
}
