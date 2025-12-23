function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const quizData = [
/* 1–40 KONSEP */
{q:"Tujuan utama algoritma adalah?",options:["Mempercantik kode","Menyelesaikan masalah secara sistematis","Menambah variabel","Mengurangi RAM"],correct:1},
{q:"Binary Search hanya bisa digunakan jika data?",options:["Acak","Terurut","Graph","Tree"],correct:1},
{q:"Kompleksitas waktu Binary Search adalah?",options:["O(n)","O(log n)","O(n²)","O(1)"],correct:1},
{q:"Struktur data utama BFS adalah?",options:["Stack","Queue","Array","Heap"],correct:1},
{q:"BFS paling cocok untuk?",options:["Sorting","Shortest path tak berbobot","Rekursi","Hashing"],correct:1},
{q:"DFS menggunakan struktur data?",options:["Queue","Stack","Array","Heap"],correct:1},
{q:"DFS cocok untuk?",options:["Shortest path","Traversal mendalam","Sorting","Hash"],correct:1},
{q:"Graph terdiri dari?",options:["Node dan Edge","Key dan Value","Index","Parent"],correct:0},
{q:"Algoritma Dijkstra digunakan untuk?",options:["Sorting","Shortest path berbobot","DFS","Binary Search"],correct:1},
{q:"Dijkstra tidak mendukung?",options:["Node","Edge","Bobot negatif","Bobot positif"],correct:2},

{q:"Prinsip kerja Queue adalah?",options:["LIFO","FIFO","Random","Circular"],correct:1},
{q:"Prinsip kerja Stack adalah?",options:["FIFO","LIFO","Hierarki","Linear"],correct:1},
{q:"Greedy Algorithm memilih solusi?",options:["Terbaik lokal","Terburuk global","Acak","Semua kemungkinan"],correct:0},
{q:"Kelemahan Greedy Algorithm adalah?",options:["Cepat","Tidak selalu optimal global","Sederhana","Ringkas"],correct:1},
{q:"Divide and Conquer bekerja dengan cara?",options:["Menggabung","Memecah masalah","Menghapus","Menyalin"],correct:1},
{q:"Big O digunakan untuk?",options:["Debug","Mengukur efisiensi","Menyimpan data","Menulis kode"],correct:1},
{q:"O(1) berarti?",options:["Linear","Konstan","Logaritmik","Kuadrat"],correct:1},
{q:"O(n) berarti?",options:["Konstan","Linear","Log n","Eksponensial"],correct:1},
{q:"O(n²) muncul karena?",options:["Satu loop","Nested loop","Hash","Rekursi"],correct:1},
{q:"Hash Table digunakan untuk?",options:["Sorting","Pencarian cepat","Traversal","Rekursi"],correct:1},

{q:"Collision hash terjadi saat?",options:["Key kosong","Index sama","Table penuh","Hash rusak"],correct:1},
{q:"Rekursi adalah?",options:["Loop","Fungsi memanggil diri sendiri","Sorting","Search"],correct:1},
{q:"Base case berfungsi untuk?",options:["Mulai","Menghentikan","Menambah","Mengulang"],correct:1},
{q:"Tree adalah struktur?",options:["Linear","Hierarkis","Acak","Circular"],correct:1},
{q:"Root adalah?",options:["Node akhir","Node awal","Leaf","Random"],correct:1},
{q:"Leaf node adalah?",options:["Punya parent","Tidak punya child","Punya banyak child","Root"],correct:1},
{q:"Heap sering dipakai untuk?",options:["Stack","Priority Queue","DFS","Binary Search"],correct:1},
{q:"Sorting bertujuan untuk?",options:["Mengacak","Mengurutkan","Menghapus","Menyalin"],correct:1},
{q:"Bubble Sort membandingkan elemen?",options:["Jauh","Bertetangga","Random","Tree"],correct:1},
{q:"Merge Sort menggunakan?",options:["Greedy","Divide and Conquer","Brute force","Dynamic"],correct:1},

{q:"Insertion Sort mirip?",options:["Menyusun kartu","Binary Search","Graph","Queue"],correct:0},
{q:"Selection Sort memilih?",options:["Nilai terkecil","Nilai acak","Nilai tengah","Nilai terbesar"],correct:0},
{q:"Algoritma efisien berarti?",options:["Cepat & hemat resource","Panjang","Banyak loop","Sulit"],correct:0},
{q:"Tujuan belajar algoritma?",options:["Menghafal","Menyelesaikan masalah","Menambah library","Mempercantik"],correct:1},
{q:"BFS menelusuri graph berdasarkan?",options:["Kedalaman","Level","Bobot","Random"],correct:1},
{q:"DFS berhenti saat?",options:["Queue kosong","Node habis","Stack penuh","Graph kosong"],correct:1},
{q:"Binary Search membagi data menjadi?",options:["Dua","Tiga","Empat","Acak"],correct:0},
{q:"Binary Search gagal jika data?",options:["Sedikit","Banyak","Tidak terurut","Integer"],correct:2},
{q:"Dijkstra memilih node dengan?",options:["Bobot besar","Jarak terkecil","Edge banyak","Degree tinggi"],correct:1},
{q:"Bobot negatif membuat Dijkstra?",options:["Stabil","Tidak akurat","Cepat","Optimal"],correct:1},

/* 41–50 OUTPUT & PSEUDOCODE */
{q:"Output BFS A→B,C; B→D ?",options:["A B C D","A C B D","A B D C","A C D B"],correct:0},
{q:"Output DFS A→B,C; B→D ?",options:["A B D C","A C B D","A B C D","A D B C"],correct:0},
{q:"Output f(3): print(n); f(n-1)?",options:["3 2 1","1 2 3","3 3 3","Error"],correct:0},
{q:"Binary Search [1,3,5,7,9] cari 7?",options:["Index 1","Index 2","Index 3","Index 4"],correct:2},
{q:"Stack push 1,2,3 lalu pop?",options:["1 2","1 3","2 3","1"],correct:0},
{q:"Queue enq A,B deq enq C?",options:["B C","A C","C B","A B"],correct:0},
{q:"Visited BFS berfungsi untuk?",options:["Sorting","Mencegah loop","Menambah node","Menghapus"],correct:1},
{q:"Traversal BFS tree disebut?",options:["Preorder","Inorder","Level order","Postorder"],correct:2},
{q:"DFS boros memori jika graph?",options:["Dangkal","Linear","Sangat dalam","Kecil"],correct:2},
{q:"Tujuan pseudocode?",options:["Eksekusi","Menjelaskan logika","Optimasi","Debug"],correct:1},

/* 51–60 MENYUSUN & OUTPUT */
{q:"Urutan BFS yang benar?",options:["Enqueue-Visit-Dequeue-Enqueue tetangga","Dequeue-Enqueue","Visit-Exit","Sort dulu"],correct:0},
{q:"Output BFS A→B,C; C→D ?",options:["A B C D","A C B D","A D C B","A C D B"],correct:0},
{q:"Rekursi tanpa base case menyebabkan?",options:["Cepat","Optimal","Stack overflow","Aman"],correct:2},
{q:"Output sum(n)=n+sum(n-1), sum(3)?",options:["6","5","3","Error"],correct:0},
{q:"DFS memakai struktur implisit?",options:["Queue","Stack","Heap","Array"],correct:1},
{q:"Binary Search membagi array menjadi?",options:["1","2","3","Acak"],correct:1},
{q:"DFS tree A-B-C output?",options:["A B C","A C B","B A C","C B A"],correct:0},
{q:"BFS tanpa visited menyebabkan?",options:["Aman","Infinite loop","Cepat","Optimal"],correct:1},
{q:"Kompleksitas BFS?",options:["O(V+E)","O(n²)","O(log n)","O(1)"],correct:0},
{q:"Queue: enq1 enq2 deq enq3?",options:["2 3","1 3","3 2","1 2"],correct:0}
];


let index = 0;
let answers = [];
let time = 2400;
let timer;

const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const timerEl = document.getElementById("timer");
const progressEl = document.getElementById("progress");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreText = document.getElementById("scoreText");
const reviewEl = document.getElementById("review");


function enterFullscreen() {
  document.documentElement.requestFullscreen();
}

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement && quizScreen.classList.contains("active")) {
    alert("⚠️ Keluar fullscreen.\nKuis diulang dari awal.");
    location.reload();
  }
});


startBtn.onclick = () => {
  quizData.forEach(q => {
    const correctText = q.options[q.correct];
    shuffle(q.options);
    q.correct = q.options.indexOf(correctText);
  });
  enterFullscreen();
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  startTimer();
  loadQuestion();
};


function startTimer() {
  timer = setInterval(() => {
    time--;
    timerEl.textContent =
      Math.floor(time / 60) + ":" + String(time % 60).padStart(2, "0");
    if (time <= 0) finishQuiz();
  }, 1000);
}


function loadQuestion() {
  const q = quizData[index];
  questionEl.textContent = q.q;
  progressEl.textContent = `Soal ${index + 1} / 60`;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = opt;
    div.onclick = () => {
      answers[index] = i;
      document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
      div.classList.add("selected");
    };
    optionsEl.appendChild(div);
  });
}


nextBtn.onclick = () => {
  if (answers[index] == null) return;
  index++;
  index < quizData.length ? loadQuestion() : finishQuiz();
};


function finishQuiz() {
  clearInterval(timer);
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  let score = 0;
  reviewEl.innerHTML = "";

  quizData.forEach((q, i) => {
    const ok = answers[i] === q.correct;
    if (ok) score++;
    reviewEl.innerHTML += `
      <div class="review-item">
        <b>Soal ${i + 1}</b><br>${q.q}<br>
        Jawaban kamu:
        <span class="${ok ? "correct" : "wrong"}">
          ${q.options[answers[i]] || "Tidak dijawab"}
        </span><br>
        Jawaban benar:
        <span class="correct">${q.options[q.correct]}</span>
      </div>`;
  });

  scoreText.textContent = `Skor Akhir: ${score} / 60`;
}

console.log("TOTAL SOAL:", quizData.length); 


