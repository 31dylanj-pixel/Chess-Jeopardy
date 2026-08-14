<!doctype html>
<html lang="en"><head><script>window["__codeletBootstrap__"]=JSON.parse('{"A":"A","B":"20260814-05-a1b2e7b","C":{"Abril Fatface":"YACgEZbkUVE,0","Alfa Slab One":"YACgEYS9sJU,0","Anton":"YACgEcYqQ-A,0","Archivo":"YAHO2-t-jNE,0","Arial":"YAGyDvJ_4Ts,0","Bebas Neue":"YACgESME5ew,0","Bricolage Grotesque":"YAFyMcdwzpc,0","Canva Sans":"YAFLd8sKbwc,2","Caveat":"YALBs2ploWQ,0","Comic Sans MS":"YAHO2VMiyZo,0","Cormorant Garamond":"YAFdJhX-538,0","Courier New":"YAGzXiGs0_8,0","DM Sans":"YAD1aU3sLnI,0","DM Serif Display":"YAD1aYG82rc,0","Forum":"YACgEcnnqB4,0","Fraunces":"YAEul-FRQw4,0","Georgia":"YAGzXkO0pEM,0","Helvetica Neue":"YAFcf6CtJfI,0","Impact":"YAFcfnjI7Vk,0","Inter":"YAFdJvSyp_k,3","Iowan Old Style":"YAGNIFa8j9o,0","Jacques Francois":"YAHO2a5g66Q,0","JetBrains Mono":"YAFdJksXcAk,0","Libre Baskerville":"YACgEUFdPdA,0","Manrope":"YAHO2b2feC4,0","Merriweather":"YACgEXvHxxs,0","Montserrat":"YADLjI9qxTA,0","Nunito":"YACgEX8C5Gg,0","Oleo Script":"YACgEQQ14jI,0","Phantom Sans":"YAHO2E8Pb88,0","Playfair Display":"YACgEYmuCJE,0","Poppins":"YAFdJjbTu24,1","Press Start 2P":"YAFyGr-8pmQ,0","Quicksand":"YADWjpfPmdk,0","Raleway":"YACgEVg3xZg,0","Segoe UI":"YAHNdRD1Klw,0","Source Sans 3":"YAG4lO1Mj10,0","Spectral":"YAHO2rVUHIM,0","Times New Roman":"YAGzXW3gftg,0","Times":"YAGzXW3gftg,0","Ubuntu":"YACgERDU--Q,0","Work Sans":"YAGXhLOKv44,0","Yellowtail":"YACgEYG4kG4,0","ui-monospace":"YADlN8CFZ8Q,0","ui-sans-serif":"YACkoN-xg4g,0"}}');</script><script src="/_sdk/7949ff62d67710d5.telemetry_sdk.js" integrity="sha512-KIvXA82Di44YY/RH9/63A9MuTuavYgDFG8PfErJn7Wli4K0LAOk+coo/aPXk3+ZNL96nHh9VYD4PE+fLes+laQ=="></script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chess Club Jeopardy</title>
  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.263.0/dist/umd/lucide.min.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;family=Playfair+Display:wght@700;900&amp;display=swap" rel="stylesheet">
  <style>
        body { font-family: 'DM Sans', sans-serif; }
        .slide { display: none; }
        .slide.active { display: flex; }
        .jeopardy-cell { transition: all 0.2s; }
        .jeopardy-cell:hover:not(.used) { transform: scale(1.05); }
        .jeopardy-cell.used { opacity: 0.3; pointer-events: none; }
        .modal-overlay { display: none; }
        .modal-overlay.show { display: flex; }
    </style>
  <script src="/_sdk/0e8d3a91e1c6f495.data_sdk.js" type="text/javascript" integrity="sha512-c00oDoGjsMgluCLLEyVl3suwEkgjOGGplVFbsilUoBg4aMKNmsL3mwsc9r0dPn95qiSZyjBousQXgROkAW7p/w=="></script>
  <script src="/_sdk/eba18683f23e5798.resizing_sdk.js" type="text/javascript" integrity="sha512-E0UWUllhwPXaNJtjyTKXWKrIE+FruPfFpO4mRmMDP2LI+U9bOizy5npCq6xx/JyWcvSK7D3TFf2wFR2Mha9kbA=="></script>
 </head>
 <body data-template-id="__page-root" class="w-full min-h-screen overflow-hidden" style="background: rgb(30, 27, 75);">
  <!-- Slide 1: Title -->
  <section class="slide active flex-col items-center justify-center text-center p-8 gap-6" style="min-height:calc(100 * min(var(--vh,1vh),1vh))" id="slide-title">
   <div class="absolute inset-0 opacity-20">
    <img data-template-id="hero-bg" class="canva-image w-full h-full object-cover" loading="lazy" src="https://images.pexels.com/photos/29778421/pexels-photo-29778421.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1920" alt="Dramatic chess scene highlighting a fallen king piece amidst shadows">
   </div>
   <div class="relative z-10 flex flex-col items-center gap-4">
    <h1 data-template-id="main-title" class="canva-text font-black" style="font-family: &quot;Playfair Display&quot;, serif; color: rgb(255, 255, 255); font-weight: 900; font-style: normal; font-size: 56px;">Chess Club</h1>
    <p data-template-id="main-subtitle" class="canva-text text-xl" style="color: rgb(199, 210, 254); font-weight: 400; font-style: normal; font-size: 16px;">Welcome to Jeopardy Night!</p><button data-template-id="start-btn" class="canva-button mt-6 px-8 py-3 rounded-lg font-semibold text-lg" onclick="goSlide('slide-jeopardy')" style="background: rgb(245, 158, 11); color: rgb(30, 27, 75); font-weight: 700; font-style: normal; font-size: 16px;">Jeopardy →</button>
   </div>
  </section><!-- Slide 2: Jeopardy -->
  <section class="slide flex-col items-center p-4 gap-4" style="min-height:calc(100 * min(var(--vh,1vh),1vh))" id="slide-jeopardy">
   <h2 data-template-id="jeopardy-title" class="canva-text font-bold" style="font-family: &quot;Playfair Display&quot;, serif; color: rgb(255, 255, 255); font-weight: 700; font-style: normal; font-size: 24px;">Chess Jeopardy!</h2><!-- Board -->
   <div id="jeopardy-board" class="grid grid-cols-5 gap-2 w-full max-w-4xl flex-1"></div><button class="text-sm opacity-60 underline mt-2" onclick="goSlide('slide-members')">← Back to Members</button>
  </section><!-- Question Modal -->
  <div id="question-modal" class="modal-overlay fixed inset-0 bg-black/80 items-center justify-center z-50 p-4" onclick="closeModal()">
   <div class="bg-indigo-900 text-white rounded-2xl p-10 max-w-2xl w-full text-center shadow-2xl" onclick="event.stopPropagation()">
    <p id="modal-category" class="text-sm uppercase tracking-widest opacity-70 mb-2"></p>
    <p id="modal-points" class="text-3xl font-black mb-4"></p>
    <p id="modal-question" class="text-xl leading-relaxed mb-6"></p>
    <p id="modal-answer" class="hidden text-lg leading-relaxed mb-6 text-amber-200" aria-live="polite"></p>
    <div class="flex flex-wrap justify-center gap-3"><button id="show-answer-btn" class="px-6 py-3 bg-amber-400 text-indigo-900 font-bold rounded-lg" onclick="showAnswer()">Show Answer</button><button class="px-6 py-3 border border-indigo-300 text-white font-bold rounded-lg" onclick="closeModal()">Done</button>
    </div>
   </div>
  </div>
  <script src="/_sdk/a051f9537983733d.editing_sdk.js" integrity="sha512-IWn3eBHnVt7zQ0Rp79J72qSgJoLbskCA9lcfY4retf+5km4LjuhSHpvx+182KCHmEZ6EbJtWqVsybpV8Sd8PQQ=="></script>
  <script>
        // Slide navigation
        function goSlide(id) {
            document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
            document.getElementById(id).classList.add('active');
        }

        // Jeopardy data
        const categories = ['Openings', 'Endgames', 'Tactics', 'History', 'Rules'];
        const questions = [
            ['Name the opening: 1.e4 e5 2.Nf3 Nc6 3.Bb5','What is the Sicilian Defense first move for Black?','Name the gambit: 1.d4 d5 2.c4','Which opening starts with 1.f4?','What is the move order for the King\'s Indian Defense?'],
            ['What is the minimum material to force checkmate with King?','What is the "square rule" in pawn endgames?','What is Philidor\'s position?','Can a lone Bishop checkmate?','What is opposition in King endgames?'],
            ['What is a fork?','What is a pin?','What is a skewer?','What is a discovered attack?','What is zugzwang?'],
            ['Who was the first official World Champion?','In what year was FIDE founded?','Who defeated Kasparov in 1997?','Which country hosted the 1972 "Match of the Century"?','Who is the longest-reigning World Champion?'],
            ['How many squares on a chess board?','What is en passant?','When can you castle?','What is stalemate?','How does a pawn promote?']
        ];
        const answers = [
            ['Ruy Lopez','The Sicilian Defense begins with ...c5','Queen\'s Gambit','Bird Opening','1.d4 Nf6 2.c4 g6 3.Nc3 Bg7'],
            ['King and queen, or king and rook, depending on the position','A pawn can catch a passed pawn by counting the squares to promotion','A defensive setup that holds a draw in rook endgames','No; king and bishop versus king is a draw','A king-to-king opposition that restricts the opposing king'],
            ['One piece attacks two or more targets','An attacked piece cannot move without exposing a more valuable piece','An attack on a valuable piece that forces it to move, exposing another piece','An attack revealed when another piece moves away','A position where every legal move worsens the position'],
            ['Wilhelm Steinitz','1924','IBM\'s Deep Blue','Iceland','Emanuel Lasker'],
            ['64','A special pawn capture immediately after a two-square advance','When neither the king nor rook has moved and the path is clear and safe','A draw when the player to move has no legal move but is not in check','By reaching the last rank and becoming a queen, rook, bishop, or knight']
        ];

        // Build board
        const board = document.getElementById('jeopardy-board');
        categories.forEach((cat, ci) => {
            const header = document.createElement('div');
            header.className = 'bg-indigo-800 text-white text-center font-bold py-4 px-2 rounded-lg text-base sm:text-lg flex items-center justify-center min-h-16';
            header.textContent = cat;
            board.appendChild(header);
        });
        for (let row = 0; row < 5; row++) {
            const pts = (row + 1) * 100;
            categories.forEach((cat, ci) => {
                const cell = document.createElement('button');
                cell.className = 'jeopardy-cell bg-amber-400 text-indigo-900 font-black text-lg sm:text-2xl rounded-lg py-4 cursor-pointer';
                cell.textContent = pts;
                cell.onclick = () => showQuestion(ci, row, cell);
                board.appendChild(cell);
            });
        }

        function showQuestion(ci, row, cell) {
            document.getElementById('modal-category').textContent = categories[ci];
            document.getElementById('modal-points').textContent = (row + 1) * 100 + ' Points';
            document.getElementById('modal-question').textContent = questions[ci][row];
            document.getElementById('modal-answer').textContent = 'Answer: ' + answers[ci][row];
            document.getElementById('modal-answer').classList.add('hidden');
            document.getElementById('show-answer-btn').classList.remove('hidden');
            document.getElementById('question-modal').classList.add('show');
            cell.classList.add('used');
        }

        function showAnswer() {
            document.getElementById('modal-answer').classList.remove('hidden');
            document.getElementById('show-answer-btn').classList.add('hidden');
        }

        function closeModal() {
            document.getElementById('question-modal').classList.remove('show');
        }

        lucide.createIcons();
    </script>
 
</body></html>
