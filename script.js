const translations = {
    ja: {
        "nav.intro": "はじめに",
        "nav.architecture": "仕組み",
        "nav.vibe": "Vibe Coding",
        "nav.skills": "スキル",
        "nav.control": "コントロール",
        "nav.cost": "コスト",
        "hero.title": "Google Antigravity",
        "hero.subtitle": "AIとつくる、新しい開発の教科書。2026年のコーディングは、もっと自由で楽しい。",
        "hero.cta": "ガイドを読む",
        "intro.title": "1. はじめに：AIと一緒に「つくる」時代へ",
        "intro.p1": "2026年、プログラミングの世界は大きく変わりました。これまでの「コードを一行ずつ書く」スタイルから、AIのエージェントと一緒に「どんなアプリを作るか」を考えるスタイルへと進化したのです。その中心にあるのが、Google Antigravityです。",
        "intro.p2": "Antigravityは、単なる便利ツールではありません。面倒な作業はAIに任せて、あなたは「どんな体験をユーザーに届けたいか」という、一番クリエイティブな部分に集中できる。そんな新しい開発のパートナーです。",
        "intro.p3": "このガイドでは、プログラミングが初めての方や、AIを使ってみたい方向けに、Antigravityの魅力をわかりやすく解説します。難しいことは抜きにして、AIと一緒にアプリを作る「Vibe Coding（バイブ・コーディング）」の楽しさを体験してみましょう。",
        "arch.title": "2. Antigravityの仕組みと「3つの作業場」",
        "arch.desc": "Antigravityでは、AIエージェントが3つの場所（サーフェス）を行き来して、あなたの代わりに作業をしてくれます。",
        "arch.sub1": "2.1 3つの作業場（サーフェス）",
        "card.editor.title": "Editor (エディタ)",
        "card.editor.func": "<strong>役割:</strong> コードを書いたり、ファイルを整理したりする場所。",
        "card.editor.act": "<strong>AIができること:</strong> 複数のファイルを一度に開いて、全体を見ながら修正してくれます。「ここを直して」と頼むだけでOK。",
        "card.terminal.title": "Terminal (ターミナル)",
        "card.terminal.func": "<strong>役割:</strong> アプリを動かすための準備や、テストをする場所。",
        "card.terminal.act": "<strong>AIができること:</strong> エラーが出たら勝手に原因を調べて、必要なソフトをインストールしたりして解決してくれます。",
        "card.browser.title": "Browser (ブラウザ)",
        "card.browser.func": "<strong>役割:</strong> 出来上がったアプリの画面を確認する場所。",
        "card.browser.act": "<strong>AIができること:</strong> 実際に画面を操作して、「ボタンがちゃんと動くか」などをチェックしてくれます。",
        "arch.sub2": "2.2 Agent Manager：頼れる司令塔",
        "arch.p2": "Agent Managerは、プロジェクトの司令塔です。あなたはここで「次はこれを作って」「バグを探して」と指示を出すだけ。複数のAIエージェントを同時に働かせることもできます。",
        "arch.sub3": "2.3 賢い頭脳：Gemini 3",
        "list.gemini.pro": "<strong>Gemini 3 Pro (Deep Think):</strong> じっくり考えるのが得意。難しい設計や、原因不明のエラー解決にお勧め。",
        "list.gemini.flash": "<strong>Gemini 3 Flash:</strong> 素早くて安い。簡単なコード作成や、ちょっとした修正にピッタリ。",
        "list.external": "<strong>その他のAI:</strong> ClaudeやGPTなど、好みのAIモデルを選ぶこともできます。",
        "vibe.title": "3. Vibe Coding：ノリと雰囲気でつくる",
        "vibe.desc": "「Vibe Coding（バイブ・コーディング）」は、細かいコードの書き方を気にせず、「こんな感じのアプリがいいな」「もっとカッコよくして」といった「雰囲気（Vibe）」をAIに伝えて作るスタイルです。",
        "vibe.prompt.header": "おすすめの頼み方（ポモドーロタイマーを作る場合）",
        "vibe.sub2": "3.2 初心者のためのステップ",
        "step.1": "<strong>ステップ1：やりたいことを伝える</strong> - 「何を作りたいか」をはっきり伝えましょう。",
        "step.2": "<strong>ステップ2：計画を確認する</strong> - AIが「こうやって作ります」と計画を出してくるので、OKを出します。",
        "step.3": "<strong>ステップ3：出来上がりをチェック</strong> - 作ってくれたアプリを実際に触ってみて、確認します。",
        "step.4": "<strong>ステップ4：会話しながら直す</strong> - 「ここはもっとこうして」と会話するように修正していきます。",
        "skills.title": "4. Agent Skills：AIに道具を持たせる",
        "skills.desc": "Agent Skillsは、AIに特定の作業専用の「道具」や「知識」を渡す機能です。これを使うと、AIはもっと賢くなります。",
        "skills.sub3": "4.3 最初に入れておきたいスキル",
        "skill.git.title": "Git Commit Formatter",
        "skill.git.desc": "作業の保存（コミット）をするとき、わかりやすいメッセージを自動で書いてくれます。",
        "skill.debug.title": "Systematic Debugging",
        "skill.debug.desc": "エラーが起きたとき、プロのように順序立てて原因を探ってくれます。",
        "skill.doc.title": "Documentation Reader",
        "skill.doc.desc": "公式の説明書（ドキュメント）を読んで、正しい書き方を調べてくれます。",
        "skill.deploy.title": "Deployment Skill",
        "skill.deploy.desc": "出来上がったアプリを、ボタン一つでインターネット上に公開してくれます。",
        "control.title": "5. AIの考えを見える化する",
        "control.desc": "AIが勝手に変なことをしないか心配ですか？Antigravityは、AIが何を考えているかちゃんと教えてくれるので安心です。",
        "control.sub1": "5.1 安心のための仕組み",
        "list.plan": "<strong>Implementation Plan (計画書):</strong> 作業を始める前に、「これから何をするか」を書いて見せてくれます。",
        "list.task": "<strong>Task List (やることリスト):</strong> 具体的な作業の手順をリストアップしてくれます。",
        "list.verify": "<strong>Verification (確認):</strong> 「ちゃんと動きましたよ」という証拠（ログやスクショ）を見せてくれます。",
        "cost.title": "6. コストと学習のコツ",
        "cost.desc": "AIを使うには少しお金（利用料）がかかります。賢く使って、無駄を減らしましょう。",
        "cost.box.title": "お得に使うコツ",
        "list.model": "<strong>モデルを使い分ける:</strong> 簡単な作業は安い「Flash」モデルを使いましょう。",
        "list.bloat": "<strong>道具は必要な分だけ:</strong> 使わないスキルはオフにしておくと、AIが迷いません。",
        "list.context": "<strong>こまめにリセット:</strong> ひとつの作業が終わったら、会話をリセットするとスッキリします。",
        "concl.title": "8. おわりに",
        "concl.p1": "Google Antigravityを使えば、プログラミングの知識がなくても、あなたのアイデアを形にすることができます。大切なのは「何を作りたいか」という情熱だけです。",
        "concl.p2": "さあ、怖がらずに始めてみましょう。Antigravityを開いて、最初の一言を打ち込めば、あなたも立派な「クリエイター」です。",
        "footer.copy": "&copy; 2026 Antigravity Guidebook. Based on public information.",
        "footer.disclaimer": "免責事項：このガイドは2026年1月時点の情報を元にしています。",
        "footer.madeby": "このサイトは Google Antigravity で作成されました。",
        "badge.text": "公式サイト"
    },
    en: {
        "nav.intro": "Intro",
        "nav.architecture": "How it Works",
        "nav.vibe": "Vibe Coding",
        "nav.skills": "Skills",
        "nav.control": "Control",
        "nav.cost": "Cost",
        "hero.title": "Google Antigravity",
        "hero.subtitle": "Your New Coding Companion. Development in 2026 is freer and more fun.",
        "hero.cta": "Read the Guide",
        "intro.title": "1. Intro: Creating with AI",
        "intro.p1": "In 2026, programming has changed. We've moved from writing code line-by-line to a style where you and an AI agent decide 'what to build' together. At the center of this is Google Antigravity.",
        "intro.p2": "Antigravity isn't just a tool. It's a partner that handles the tedious work, letting you focus on the most creative part: 'what experience to deliver to the user'.",
        "intro.p3": "This guide explains Antigravity simply for beginners. Let's skip the jargon and experience the fun of 'Vibe Coding'—building apps with AI.",
        "arch.title": "2. How Antigravity Works",
        "arch.desc": "In Antigravity, AI agents move between three 'Surfaces' to do the work for you.",
        "arch.sub1": "2.1 The Three Surfaces",
        "card.editor.title": "Editor",
        "card.editor.func": "<strong>Role:</strong> Where code is written and files are organized.",
        "card.editor.act": "<strong>What AI does:</strong> Opens multiple files, sees the big picture, and fixes things. Just ask 'fix this'.",
        "card.terminal.title": "Terminal",
        "card.terminal.func": "<strong>Role:</strong> Where the app is prepared and tested.",
        "card.terminal.act": "<strong>What AI does:</strong> If an error occurs, it investigates and installs necessary software to fix it.",
        "card.browser.title": "Browser",
        "card.browser.func": "<strong>Role:</strong> Where you check the finished app screen.",
        "card.browser.act": "<strong>What AI does:</strong> It operates the screen to check if buttons work and everything looks right.",
        "arch.sub2": "2.2 Agent Manager: The Captain",
        "arch.p2": "The Agent Manager is the captain. You just give orders like 'build this next' or 'find bugs'. You can even have multiple agents working at once.",
        "arch.sub3": "2.3 The Brain: Gemini 3",
        "list.gemini.pro": "<strong>Gemini 3 Pro (Deep Think):</strong> Good at thinking deeply. Best for complex designs or tricky errors.",
        "list.gemini.flash": "<strong>Gemini 3 Flash:</strong> Fast and cheap. Perfect for simple code or quick fixes.",
        "list.external": "<strong>Other AIs:</strong> You can also choose models like Claude or GPT.",
        "vibe.title": "3. Vibe Coding: Build by Feeling",
        "vibe.desc": "'Vibe Coding' is a style where you don't worry about code details but tell the AI the 'Vibe'—like 'make it look cool' or 'I want an app like this'.",
        "vibe.prompt.header": "How to ask (e.g., making a Pomodoro Timer)",
        "vibe.sub2": "3.2 Steps for Beginners",
        "step.1": "<strong>Step 1: Tell your idea</strong> - Clearly state 'what you want to make'.",
        "step.2": "<strong>Step 2: Check the plan</strong> - The AI will propose a plan, so just say OK.",
        "step.3": "<strong>Step 3: Check the result</strong> - Try out the app the AI built.",
        "step.4": "<strong>Step 4: Chat and fix</strong> - Refine it by chatting, like 'change this part'.",
        "skills.title": "4. Agent Skills: Giving AI Tools",
        "skills.desc": "Agent Skills are like giving the AI specific 'tools' or 'knowledge'. This makes the AI even smarter.",
        "skills.sub3": "4.3 Must-Have Skills",
        "skill.git.title": "Git Commit Formatter",
        "skill.git.desc": "Automatically writes clear messages when saving your work.",
        "skill.debug.title": "Systematic Debugging",
        "skill.debug.desc": "Investigates errors step-by-step like a pro.",
        "skill.doc.title": "Documentation Reader",
        "skill.doc.desc": "Reads official manuals to find the correct way to write code.",
        "skill.deploy.title": "Deployment Skill",
        "skill.deploy.desc": "Publishes your finished app to the internet with one click.",
        "control.title": "5. Visualizing AI's Thoughts",
        "control.desc": "Worried about what the AI is doing? Antigravity shows you exactly what the AI is thinking.",
        "control.sub1": "5.1 Safety Features",
        "list.plan": "<strong>Implementation Plan:</strong> Shows you 'what I'm going to do' before starting.",
        "list.task": "<strong>Task List:</strong> Lists the specific steps to be taken.",
        "list.verify": "<strong>Verification:</strong> Shows proof (logs or screenshots) that 'it worked'.",
        "cost.title": "6. Cost and Learning Tips",
        "cost.desc": "Using AI costs a bit of money. Use it smartly to save.",
        "cost.box.title": "Tips for Saving",
        "list.model": "<strong>Pick the right model:</strong> Use the cheap 'Flash' model for simple tasks.",
        "list.bloat": "<strong>Only necessary tools:</strong> Turn off unused skills so the AI doesn't get confused.",
        "list.context": "<strong>Reset often:</strong> Resetting the chat after finishing a task keeps things fresh.",
        "concl.title": "8. Conclusion",
        "concl.p1": "With Google Antigravity, you can shape your ideas even without programming knowledge. All you need is the passion for 'what you want to create'.",
        "concl.p2": "Don't be afraid to start. Open Antigravity, type your first word, and you're a 'Creator'.",
        "footer.copy": "&copy; 2026 Antigravity Guidebook. Based on public information.",
        "footer.disclaimer": "Disclaimer: Based on info as of Jan 2026.",
        "footer.madeby": "This site was built with Google Antigravity.",
        "badge.text": "Official Site"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // Intersection Observer
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    document.querySelectorAll('section h2, section p, section .card, section .feature-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // i18n Logic
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = 'ja'; // Default

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // Use innerHTML to allow <strong> tags
                element.innerHTML = translations[lang][key];
            }
        });
        currentLang = lang;
        langToggle.textContent = lang === 'ja' ? 'EN' : 'JP';
        document.documentElement.lang = lang;
    }

    if (langToggle) {
        langToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = currentLang === 'ja' ? 'en' : 'ja';
            updateLanguage(newLang);
        });
    }

    // Mobile Menu Logic
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
});

