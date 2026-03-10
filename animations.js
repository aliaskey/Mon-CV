/* CURSEUR PERSONNALISE */
(function() {
  var cursor     = document.getElementById('cursor');
  var cursorRing = document.getElementById('cursor-ring');
  var mx = -100, my = -100;
  var rx = -100, ry = -100;

  document.addEventListener('mousemove', function(e) {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animRing() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    cursorRing.style.left = rx + 'px';
    cursorRing.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a, .tag').forEach(function(el) {
    el.addEventListener('mouseenter', function() {
      cursor.style.transform   = 'translate(-50%,-50%) scale(1.7)';
      cursorRing.style.width   = '40px';
      cursorRing.style.height  = '40px';
      cursorRing.style.opacity = '0.25';
    });
    el.addEventListener('mouseleave', function() {
      cursor.style.transform   = 'translate(-50%,-50%) scale(1)';
      cursorRing.style.width   = '28px';
      cursorRing.style.height  = '28px';
      cursorRing.style.opacity = '0.4';
    });
  });
})();

/* CONFETTI */
(function() {
  var canvas = document.getElementById('confetti-canvas');
  var ctx    = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  var colors = ['#b06b8a', '#fce8f1', '#ecdde5', '#d4a0b8', '#f9d0e3', '#c984a4'];
  var pieces = [];
  for (var i = 0; i < 40; i++) {
    pieces.push({
      x:   Math.random() * canvas.width,
      y:   Math.random() * canvas.height * 0.35 - 40,
      w:   Math.random() * 8 + 4,
      h:   Math.random() * 4 + 2,
      r:   Math.random() * Math.PI * 2,
      dr:  (Math.random() - 0.5) * 0.07,
      dy:  Math.random() * 1.8 + 0.7,
      dx:  (Math.random() - 0.5) * 0.9,
      col: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  var startTime = null;
  var duration  = 2800;

  function draw(ts) {
    if (!startTime) startTime = ts;
    var elapsed = ts - startTime;
    var fade = Math.max(0, 1 - Math.max(0, elapsed - 1600) / 1200);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(function(p) {
      p.y += p.dy;
      p.x += p.dx;
      p.r += p.dr;
      ctx.save();
      ctx.globalAlpha = fade;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.col;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (elapsed < duration) {
      requestAnimationFrame(draw);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  requestAnimationFrame(draw);
})();

/* MACHINE A ECRIRE */
(function() {
  var el   = document.querySelector('.main-role');
  var text = el.textContent.trim();
  el.textContent = '';

  var caret = document.createElement('span');
  caret.className = 'typewriter-cursor';
  el.appendChild(caret);

  var i = 0;

  function type() {
    if (i < text.length) {
      el.insertBefore(document.createTextNode(text[i]), caret);
      i++;
      setTimeout(type, 40);
    } else {
      setTimeout(function() { caret.remove(); }, 1800);
    }
  }

  setTimeout(type, 750);
})();
