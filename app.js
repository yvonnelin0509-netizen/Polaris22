const puzzles = [
  {
    title: "第一關：古老的石碑",
    desc: "石碑上寫著：『日月同行』。請輸入兩個字母的密碼（小寫）提示：日=R，月=S。",
    answer: "rs"
  },
  {
    title: "第二關：數字密碼",
    desc: "提示：把 3、1、4 轉成字母（a=1, b=2...）。",
    answer: "cad"
  },
  {
    title: "第三關：終極之門",
    desc: "請輸入「love」",
    answer: "love"
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
    feedback.textContent = "✅ 答對了！";
    nextBtn.style.display = "inline-block";
  } else {
    feedback.textContent = "❌ 錯誤，請再試一次。";
  }
}
