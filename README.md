<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#06080e">
  <title>4U AI — بيئة تطوير بلا قيود</title>
  <style>
    :root {
      --bg: #06080e;
      --bg-2: #0a0e1a;
      --panel: #0d1220;
      --panel-2: #141a2e;
      --panel-3: #1c2340;
      --cyan: #22d3ee;
      --cyan-dark: #0891b2;
      --violet: #8b5cf6;
      --violet-dark: #6d28d9;
      --pink: #ec4899;
      --green: #10b981;
      --amber: #f59e0b;
      --red: #ef4444;
      --text: #eef2ff;
      --muted: #8892b0;
      --border: #1e2744;
      --border-light: #2a3454;
      --radius: 16px;
      --radius-sm: 10px;
      --shadow-md: 0 12px 32px -10px rgba(0, 0, 0, 0.7);
      --glow-cyan: 0 0 24px rgba(34, 211, 238, 0.35);
      --glow-violet: 0 0 24px rgba(139, 92, 246, 0.4);
      --transition: 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      background-image:
        radial-gradient(ellipse at 15% -10%, rgba(34, 211, 238, 0.14), transparent 50%),
        radial-gradient(ellipse at 85% 110%, rgba(139, 92, 246, 0.14), transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(236, 72, 153, 0.05), transparent 70%);
      background-attachment: fixed;
      color: var(--text);
      font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
      min-height: 100vh;
      line-height: 1.6;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }

    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(rgba(34, 211, 238, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
      background-size: 48px 48px;
      pointer-events: none;
      z-index: 0;
      mask-image: radial-gradient(ellipse at 50% 30%, black 20%, transparent 75%);
      -webkit-mask-image: radial-gradient(ellipse at 50% 30%, black 20%, transparent 75%);
    }

    button, select, input, textarea { font: inherit; color: var(--text); }

    button {
      cursor: pointer;
      background: var(--panel-2);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 10px 18px;
      font-weight: 600;
      font-size: 14px;
      transition: all var(--transition);
      position: relative;
      overflow: hidden;
      user-select: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      letter-spacing: 0.2px;
    }

    button::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(34, 211, 238, 0.12), rgba(139, 92, 246, 0.12));
      opacity: 0;
      transition: opacity var(--transition);
    }

    button:hover { transform: translateY(-2px); border-color: var(--cyan); box-shadow: var(--glow-cyan); }
    button:hover::before { opacity: 1; }
    button:active { transform: scale(0.97) translateY(0); }
    button:focus-visible { outline: 2px solid var(--cyan); outline-offset: 3px; }

    header {
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      padding: 14px 22px;
      background: rgba(6, 8, 14, 0.82);
      backdrop-filter: blur(24px) saturate(1.6);
      -webkit-backdrop-filter: blur(24px) saturate(1.6);
      border-bottom: 1px solid var(--border);
      box-shadow: 0 8px 40px -12px rgba(0, 0, 0, 0.7);
    }

    header::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--cyan), var(--violet), transparent);
      opacity: 0.5;
    }

    .brand { font-weight: 900; font-size: 24px; letter-spacing: 0.5px; display: flex; align-items: center; gap: 10px; position: relative; }

    .brand-logo {
      width: 38px; height: 38px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--cyan), var(--violet));
      display: grid; place-items: center;
      font-size: 15px; font-weight: 900; color: #fff;
      box-shadow: 0 4px 20px -4px rgba(34, 211, 238, 0.6);
      position: relative;
      animation: logoPulse 3s ease-in-out infinite;
    }

    .brand-logo::after {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: 14px;
      background: linear-gradient(135deg, var(--cyan), var(--violet));
      opacity: 0.4;
      filter: blur(8px);
      z-index: -1;
    }

    .brand-text { display: flex; flex-direction: column; line-height: 1.1; }

    .brand-text .name {
      font-size: 22px;
      background: linear-gradient(120deg, var(--cyan), var(--violet), var(--pink));
      background-size: 200% auto;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: gradientShift 4s linear infinite;
      font-weight: 900;
    }

    .brand-text .tagline {
      font-size: 9px;
      color: var(--muted);
      letter-spacing: 2.5px;
      font-weight: 700;
      text-transform: uppercase;
    }

    .actions { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }

    .btn-violet {
      background: linear-gradient(135deg, var(--violet-dark), var(--violet));
      border: 0; font-weight: 700;
      box-shadow: 0 6px 22px -8px rgba(139, 92, 246, 0.7);
      color: #fff;
    }

    .btn-violet:hover { box-shadow: 0 10px 30px -8px rgba(139, 92, 246, 0.9); border: 0; }

    .btn-run {
      background: linear-gradient(135deg, var(--cyan-dark), var(--cyan));
      color: #03151b; border: 0; font-weight: 900;
      box-shadow: 0 6px 22px -8px rgba(34, 211, 238, 0.7);
      letter-spacing: 0.4px;
    }

    .btn-run:hover { box-shadow: 0 10px 32px -6px rgba(34, 211, 238, 0.9); border: 0; }

    main { max-width: 1300px; margin: 0 auto; padding: 22px 18px 50px; position: relative; z-index: 1; }

    .hero { padding: 32px 4px 22px; animation: fadeUp 0.6s ease both; }

    .hero-badge {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 6px 14px;
      background: rgba(34, 211, 238, 0.08);
      border: 1px solid rgba(34, 211, 238, 0.25);
      border-radius: 30px;
      font-size: 11px; font-weight: 700; color: var(--cyan);
      letter-spacing: 1px; margin-bottom: 16px; text-transform: uppercase;
    }

    .hero-badge .dot {
      width: 6px; height: 6px; border-radius: 50%;
      background: var(--cyan);
      box-shadow: 0 0 10px var(--cyan);
      animation: blink 1.8s ease-in-out infinite;
    }

    .hero h1 { font-size: clamp(30px, 6.5vw, 52px); font-weight: 900; line-height: 1.15; margin-bottom: 14px; letter-spacing: -0.8px; }

    .hero h1 .grad {
      background: linear-gradient(120deg, var(--cyan), var(--violet), var(--pink), var(--cyan));
      background-size: 300% auto;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      animation: gradientShift 5s linear infinite;
    }

    .hero p { color: var(--muted); max-width: 660px; font-size: 15.5px; line-height: 1.9; }
    .hero p strong { color: var(--cyan); font-weight: 700; }

    .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin: 24px 0 26px; }

    .stat {
      padding: 18px;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      position: relative;
      overflow: hidden;
      transition: all var(--transition);
      animation: fadeUp 0.5s ease both;
    }

    .stat:nth-child(1) { animation-delay: 0.05s; }
    .stat:nth-child(2) { animation-delay: 0.1s; }
    .stat:nth-child(3) { animation-delay: 0.15s; }
    .stat:nth-child(4) { animation-delay: 0.2s; }

    .stat::before {
      content: '';
      position: absolute;
      top: 0; right: 0;
      width: 3px; height: 100%;
      background: linear-gradient(180deg, var(--cyan), var(--violet));
      opacity: 0.7;
    }

    .stat:hover { transform: translateY(-4px); border-color: rgba(34, 211, 238, 0.4); box-shadow: 0 14px 40px -14px rgba(34, 211, 238, 0.35); }

    .stat .num {
      display: block;
      font-size: 26px;
      font-weight: 900;
      background: linear-gradient(120deg, var(--cyan), var(--violet));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-bottom: 2px;
      line-height: 1;
    }

    .stat .lbl { color: var(--muted); font-size: 12px; font-weight: 600; letter-spacing: 0.3px; }

    .workspace { display: grid; grid-template-columns: 1fr; gap: 16px; }

    .panel {
      min-width: 0;
      background: var(--panel);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      overflow: hidden;
      animation: fadeUp 0.55s ease both;
      box-shadow: var(--shadow-md);
      transition: border-color var(--transition);
    }

    .panel:hover { border-color: var(--border-light); }

    .panel-head {
      padding: 13px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-wrap: wrap;
      background: var(--panel-2);
      border-bottom: 1px solid var(--border);
      position: relative;
    }

    .panel-head::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 16px; right: 16px;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.4), transparent);
    }

    .panel-title { font-size: 13px; font-weight: 700; letter-spacing: 0.3px; display: flex; align-items: center; gap: 8px; color: var(--text); }

    .panel-title .icon {
      width: 22px; height: 22px;
      border-radius: 6px;
      background: linear-gradient(135deg, rgba(34, 211, 238, 0.15), rgba(139, 92, 246, 0.15));
      border: 1px solid rgba(34, 211, 238, 0.25);
      display: grid; place-items: center;
      font-size: 11px; color: var(--cyan);
    }

    .tabs {
      display: flex; gap: 5px; flex-wrap: wrap;
      background: rgba(0, 0, 0, 0.25);
      padding: 3px;
      border-radius: 10px;
      border: 1px solid var(--border);
    }

    .tab {
      padding: 6px 16px;
      font-size: 12px; font-weight: 700;
      letter-spacing: 0.5px;
      border-radius: 7px;
      background: transparent; border: 0;
      color: var(--muted);
      transition: all var(--transition);
    }

    .tab:hover { color: var(--text); background: rgba(255, 255, 255, 0.05); transform: none; box-shadow: none; }

    .tab.active {
      background: linear-gradient(135deg, var(--cyan-dark), var(--violet-dark));
      color: #fff;
      box-shadow: 0 3px 12px -3px rgba(34, 211, 238, 0.6);
    }

    .tab.active:hover { transform: none; border: 0; }

    .editor-wrap { position: relative; background: #070a12; }

    #code {
      display: block;
      width: 100%;
      min-height: 340px;
      padding: 18px 20px;
      border: 0;
      outline: none;
      resize: vertical;
      background: transparent;
      color: #d7e0ff;
      font: 13.5px/1.85 'Fira Code', 'JetBrains Mono', 'Consolas', monospace;
      direction: ltr;
      text-align: left;
      tab-size: 2;
      caret-color: var(--cyan);
      letter-spacing: 0.2px;
    }

    #code::selection { background: rgba(34, 211, 238, 0.3); }

    .preview-wrap { position: relative; background: #fff; }

    #preview {
      display: block;
      width: 100%;
      height: 360px;
      background: white;
      border: 0;
      transition: opacity 0.3s ease;
    }

    .console-wrap { position: relative; background: #070a12; }

    #console {
      min-height: 64px;
      max-height: 220px;
      overflow-y: auto;
      padding: 14px 18px;
      color: #b8c4e0;
      font: 12.5px/1.9 'Fira Code', 'JetBrains Mono', 'Consolas', monospace;
      direction: ltr;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }

    #console::-webkit-scrollbar { width: 8px; }
    #console::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.2); }
    #console::-webkit-scrollbar-thumb { background: var(--border-light); border-radius: 4px; }
    #console::-webkit-scrollbar-thumb:hover { background: var(--cyan-dark); }

    .status {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      color: var(--muted);
      font-size: 11.5px;
      border-top: 1px solid var(--border);
      background: rgba(10, 14, 26, 0.7);
      font-weight: 600;
      letter-spacing: 0.3px;
    }

    .status .left { display: flex; align-items: center; gap: 8px; }

    .status .left::before {
      content: '';
      width: 7px; height: 7px;
      border-radius: 50%;
      background: var(--green);
      box-shadow: 0 0 8px var(--green);
      animation: blink 2s ease-in-out infinite;
    }

    .status .accent { color: var(--cyan); font-weight: 700; }

    #toast {
      position: fixed;
      bottom: 26px;
      left: 50%;
      transform: translate(-50%, 40px) scale(0.95);
      opacity: 0;
      pointer-events: none;
      z-index: 200;
      padding: 14px 26px;
      border-radius: 14px;
      background: rgba(20, 26, 46, 0.96);
      backdrop-filter: blur(16px);
      border: 1px solid var(--cyan);
      box-shadow: 0 10px 50px -10px rgba(34, 211, 238, 0.5), 0 0 0 1px rgba(34, 211, 238, 0.1);
      font-weight: 700;
      font-size: 14px;
      transition: all 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
      max-width: 90vw;
      text-align: center;
      color: var(--text);
    }

    #toast.show { opacity: 1; transform: translate(-50%, 0) scale(1); }

    footer {
      text-align: center;
      color: var(--muted);
      padding: 34px 20px;
      font-size: 12.5px;
      border-top: 1px solid var(--border);
      margin-top: 24px;
      letter-spacing: 0.5px;
      position: relative;
      z-index: 1;
    }

    footer .grad {
      background: linear-gradient(120deg, var(--cyan), var(--violet));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-weight: 800;
    }

    @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes gradientShift { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
    @keyframes logoPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }

    @media (min-width: 900px) {
      .workspace { grid-template-columns: 1fr 1fr; }
      #code { min-height: 560px; }
      #preview { height: 560px; }
    }

    @media (max-width: 640px) {
      header { padding: 12px 14px; }
      .brand-text .name { font-size: 18px; }
      .brand-logo { width: 32px; height: 32px; font-size: 13px; }
      .brand-text .tagline { font-size: 8px; }
      .actions button { padding: 8px 12px; font-size: 12.5px; }
      main { padding: 14px 12px 40px; }
      .hero { padding: 20px 2px 16px; }
      .stat .num { font-size: 22px; }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
      }
    }

    ::-webkit-scrollbar { width: 10px; height: 10px; }
    ::-webkit-scrollbar-track { background: var(--bg-2); }
    ::-webkit-scrollbar-thumb { background: var(--border-light); border-radius: 5px; border: 2px solid var(--bg-2); }
    ::-webkit-scrollbar-thumb:hover { background: var(--cyan-dark); }
  </style>
</head>
<body>

  <header>
    <div class="brand">
      <div class="brand-logo">4U</div>
      <div class="brand-text">
        <span class="name">4U AI</span>
        <span class="tagline">Unlimited Dev</span>
      </div>
    </div>
    <div class="actions">
      <button id="save" title="حفظ المشروع">💾 حفظ</button>
      <button id="reset" title="إعادة تعيين">↺ إعادة</button>
      <button id="newFile" title="مشروع جديد فارغ">＋ جديد</button>
      <button class="btn-run" id="run" title="تشغيل الكود">▶ تشغيل</button>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="hero-badge">
        <span class="dot"></span>
        <span>بيئة تطوير بلا قيود · v3.0</span>
      </div>
      <h1>ابنِ أفكارك مع <span class="grad">4U AI</span></h1>
      <p>بيئة تطوير <strong>مفتوحة بالكامل</strong> — تنفيذ مباشر، وصول كامل للـ API، دعم المكتبات الخارجية، بلا sandbox وبلا حدود. اكتب، جرّب، وشغّل أي كود مباشرة.</p>
    </section>

    <div class="stats">
      <div class="stat"><span class="num">∞</span><span class="lbl">بلا قيود</span></div>
      <div class="stat"><span class="num">⚡</span><span class="lbl">تنفيذ مباشر</span></div>
      <div class="stat"><span class="num">🔓</span><span class="lbl">API كامل</span></div>
      <div class="stat"><span class="num">📦</span><span class="lbl">مكتبات خارجية</span></div>
    </div>

    <section class="workspace">
      <div class="panel">
        <div class="panel-head">
          <div class="panel-title">
            <span class="icon">⌘</span>
            <span>محرر المشروع</span>
          </div>
          <div class="tabs">
            <button class="tab active" data-lang="html">HTML</button>
            <button class="tab" data-lang="css">CSS</button>
            <button class="tab" data-lang="js">JS</button>
          </div>
        </div>
        <div class="editor-wrap">
          <textarea id="code" spellcheck="false" autocapitalize="off" autocomplete="off" aria-label="محرر الأكواد"></textarea>
        </div>
        <div class="status">
          <span id="language">HTML</span>
          <span id="chars">0 حرف</span>
        </div>
      </div>

      <div class="panel">
        <div class="panel-head">
          <div class="panel-title">
            <span class="icon">◉</span>
            <span>المعاينة الحية</span>
          </div>
          <button id="refresh" title="تحديث">⟳ تحديث</button>
        </div>
        <div class="preview-wrap">
          <iframe id="preview" title="معاينة المشروع"></iframe>
        </div>
        <div class="status">
          <span class="left">Live Preview · Unrestricted</span>
          <span id="previewStatus" class="accent">جاهز للتشغيل</span>
        </div>
      </div>
    </section>

    <section class="panel" style="margin-top:16px">
      <div class="panel-head">
        <div class="panel-title">
          <span class="icon">▸</span>
          <span>سجل التشغيل</span>
        </div>
        <button id="clear">مسح السجل</button>
      </div>
      <div class="console-wrap">
        <div id="console">4U AI — بلا قيود، جاهز للتشغيل.</div>
      </div>
    </section>
  </main>

  <footer>4U AI · بيئة تطوير <span class="grad">مفتوحة بلا قيود</span></footer>
  <div id="toast"></div>

  <script>
    'use strict';

    const $ = id => document.getElementById(id);

    // ===== أمثلة افتراضية =====
    const examples = {
      html: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>مشروعي الأول — بلا قيود</title>
  <!-- يمكنك استيراد أي مكتبة خارجية بحرية -->
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"><\/script>
</head>
<body>
  <main class="card">
    <h1>مرحباً بك في 4U AI 🔓</h1>
    <p>بيئة تطوير مفتوحة بالكامل — بلا sandbox، بلا قيود</p>
    <button onclick="hello()">اضغط هنا للاحتفال</button>
    <p id="message"></p>
    <p id="time"></p>
  </main>
</body>
</html>`,
      css: `body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  background: linear-gradient(135deg, #0a0e1a, #1c2340, #0891b2);
}
.card {
  width: min(85%, 460px);
  padding: 38px 30px;
  border-radius: 24px;
  text-align: center;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.5);
  animation: appear .6s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  border: 1px solid rgba(34, 211, 238, 0.2);
}
h1 { color: #0891b2; font-size: 26px; margin-bottom: 12px; }
p { color: #475569; line-height: 1.7; }
button {
  padding: 13px 28px;
  border: 0;
  border-radius: 12px;
  color: #fff;
  background: linear-gradient(135deg, #0891b2, #8b5cf6);
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  transition: transform .2s, box-shadow .2s;
  margin-top: 10px;
}
button:hover {
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 12px 30px -10px #0891b2;
}
@keyframes appear {
  from { opacity: 0; transform: translateY(30px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}`,
      js: `function hello() {
  const msg = document.getElementById("message");
  msg.textContent = "أحسنت! الكود يعمل بلا أي قيود 🎉";
  msg.style.color = "#0891b2";
  msg.style.fontWeight = "700";
  msg.style.marginTop = "14px";

  // مثال على الاحتفال بمكتبة خارجية
  if (window.confetti) {
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
  }

  // عرض الوقت الحالي (وصول كامل للـ API)
  const now = new Date();
  document.getElementById("time").textContent =
    "الوقت الآن: " + now.toLocaleTimeString("ar-EG");

  // وصول كامل للـ API
  console.log("4U AI: تم التنفيذ بلا قيود ✓");
  console.log("User Agent:", navigator.userAgent);
}`
    };

    // ===== الحالة =====
    let lang = "html";
    let html = examples.html;
    let css = examples.css;
    let js = examples.js;
    let toastTimer;

    const currentCode = () => ({ html, css, js }[lang]);

    function updateCode() {
      $("code").value = currentCode();
      $("language").textContent = lang.toUpperCase();
      $("chars").textContent = $("code").value.length + " حرف";
      document.querySelectorAll(".tab").forEach(tab =>
        tab.classList.toggle("active", tab.dataset.lang === lang)
      );
    }

    // ===== المحرر =====
    let inputRaf;
    $("code").addEventListener("input", () => {
      cancelAnimationFrame(inputRaf);
      inputRaf = requestAnimationFrame(() => {
        if (lang === "html") html = $("code").value;
        if (lang === "css") css = $("code").value;
        if (lang === "js") js = $("code").value;
        $("chars").textContent = $("code").value.length + " حرف";
      });
    });

    // ===== التبويبات =====
    document.querySelectorAll(".tab").forEach(tab => {
      tab.addEventListener("click", () => {
        lang = tab.dataset.lang;
        updateCode();
      });
    });

    // ===== السجل =====
    function log(message) {
      const c = $("console");
      c.textContent += "\n" + message;
      c.scrollTop = c.scrollHeight;
    }

    // ===== التنبيه =====
    function notify(message) {
      const t = $("toast");
      t.textContent = message;
      t.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
    }

    // ===== تشغيل الكود — بلا قيود =====
    let runToken = 0;
    function runCode() {
      const token = ++runToken;
      $("console").textContent = "جاري التشغيل (بلا قيود)...";
      $("previewStatus").textContent = "جارٍ التحديث";

      const frame = $("preview");
      frame.style.opacity = "0.3";

      // استقبال رسائل المعاينة
      window.addEventListener("message", function handler(event) {
        if (event.source !== frame.contentWindow) return;
        if (!event.data || event.data.channel !== "4uai") return;
        if (event.data.type === "log") log(event.data.message);
        if (event.data.type === "error") log("خطأ: " + event.data.message);
        if (event.data.type === "warn") log("تحذير: " + event.data.message);
      }, { passive: true });

      // استبدال جسم الصفحة ببناء كامل — بلا sandbox
      const safeJS = js.replace(/<\/script/gi, "<\\/script");
      const safeCSS = css.replace(/<\/style/gi, "<\\/style");

      const documentCode = html.replace(
        /<\/body\s*>/i,
        `<style>${safeCSS}</style>
        <script>
          (function(){
            const send = (type, message) => {
              try { parent.postMessage({ channel: "4uai", type, message: String(message) }, "*"); } catch(e) {}
            };
            const oldLog = console.log.bind(console);
            const oldWarn = console.warn.bind(console);
            const oldError = console.error.bind(console);
            console.log = (...args) => { oldLog(...args); send("log", args.join(" ")); };
            console.warn = (...args) => { oldWarn(...args); send("warn", args.join(" ")); };
            console.error = (...args) => { oldError(...args); send("error", args.join(" ")); };
            window.addEventListener("error", e => send("error", e.message));
            window.addEventListener("unhandledrejection", e => send("error", "Promise: " + e.reason));
          })();
          ${safeJS}
        <\/script></body>`
      );

      frame.srcdoc = documentCode;
      frame.onload = () => {
        if (token !== runToken) return;
        frame.style.opacity = "1";
        $("previewStatus").textContent = "تم التشغيل بلا قيود";
        log("تم تحديث المعاينة بنجاح (unrestricted).");
      };
    }

    // ===== الأزرار =====
    $("run").addEventListener("click", runCode);
    $("refresh").addEventListener("click", runCode);

    $("newFile").addEventListener("click", () => {
      if (!confirm("إنشاء مشروع جديد فارغ؟ (سيتم فقدان التغييرات غير المحفوظة)")) return;
      html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>مشروع جديد</title>
</head>
<body>
  <h1>مرحباً 4U AI 🔓</h1>
</body>
</html>`;
      css = `body { font-family: system-ui; padding: 20px; }`;
      js = `console.log("مشروع جديد بلا قيود");`;
      updateCode();
      runCode();
      notify("تم إنشاء مشروع جديد");
    });

    $("save").addEventListener("click", () => {
      try {
        localStorage.setItem("4uai-project", JSON.stringify({ html, css, js }));
        notify("تم حفظ المشروع على هذا الجهاز ✓");
        log("تم الحفظ محلياً.");
      } catch (e) {
        notify("تعذر الحفظ؛ تحقق من إعدادات المتصفح.");
      }
    });

    $("reset").addEventListener("click", () => {
      if (!confirm("هل تريد إعادة المشروع إلى المثال الأصلي؟")) return;
      html = examples.html;
      css = examples.css;
      js = examples.js;
      updateCode();
      runCode();
      notify("تمت إعادة المشروع");
    });

    $("clear").addEventListener("click", () => {
      $("console").textContent = "تم مسح السجل.";
    });

    // ===== استيراد مشروع محفوظ =====
    try {
      const saved = localStorage.getItem("4uai-project");
      if (saved) {
        const p = JSON.parse(saved);
        if (typeof p.html === "string" && typeof p.css === "string" && typeof p.js === "string") {
          html = p.html; css = p.css; js = p.js;
        }
      }
    } catch (e) {}

    // ===== اختصارات لوحة المفاتيح =====
    document.addEventListener("keydown", (e) => {
      // Ctrl/Cmd + S = حفظ
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        $("save").click();
      }
      // Ctrl/Cmd + Enter = تشغيل
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        runCode();
      }
      // Ctrl/Cmd + R = تحديث (بدل تحديث الصفحة)
      if ((e.ctrlKey || e.metaKey) && e.key === "r") {
        e.preventDefault();
        runCode();
      }
      // Tab داخل المحرر = مسافة
      if (e.target.id === "code" && e.key === "Tab") {
        e.preventDefault();
        const start = e.target.selectionStart;
        const end = e.target.selectionEnd;
        e.target.value = e.target.value.substring(0, start) + "  " + e.target.value.substring(end);
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      }
    });

    // ===== التهيئة =====
    updateCode();
    runCode();
  </script>
</body>
</html>
