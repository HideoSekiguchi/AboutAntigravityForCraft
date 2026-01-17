const translations = {
    ja: {
        "nav.intro": "序論",
        "nav.architecture": "アーキテクチャ",
        "nav.vibe": "Vibe Coding",
        "nav.skills": "スキル",
        "nav.control": "制御",
        "nav.cost": "コスト",
        "hero.title": "Google Antigravity",
        "hero.subtitle": "包括的リサーチレポート：2026年におけるエージェント型開発のパラダイムシフトと実践的戦略",
        "hero.cta": "レポートを読む",
        "intro.title": "1. 序論：エージェントファースト時代における開発者像の再定義",
        "intro.p1": "2026年現在、ソフトウェアエンジニアリングの世界は、過去数十年にわたる歴史の中で最も根本的な変革の只中にある。かつてテキストエディタとコンパイラの集合体に過ぎなかった統合開発環境（IDE）は、Google Antigravityの登場により、自律的な「エージェント」を指揮するためのプラットフォームへと進化した。",
        "intro.p2": "2025年11月にGemini 3モデルと共に発表されたこのツールは、単なるコード補完機能の延長線上にはない。それは、開発者がコードを一文字ずつ記述する「入力作業」から解放され、ソフトウェアのアーキテクチャやユーザー体験（UX）の設計に注力する「指揮者（Architect）」としての役割を確立するための基盤である。",
        "intro.p3": "本レポートは、プログラミング初学者およびAIをパートナーとして開発を始めたいと考える層を対象に、Google Antigravityの全貌を包括的に解明することを目的とする。従来の「Copilot（副操縦士）」モデルが人間主導の作業を補助するものであったのに対し、Antigravityが提唱する「エージェントファースト」モデルは、AIがタスクの計画、実行、検証、修正までを自律的に行う点において決定的に異なる。この変化は、Linuxの創始者であるリーナス・トーバルズ（Linus Torvalds）が提唱した「Vibe Coding」という新たな開発スタイルを主流化させつつある。",
        "arch.title": "2. Google Antigravityのアーキテクチャと「3つのサーフェス」",
        "arch.desc": "Google Antigravityの本質を理解するためには、その基盤となるアーキテクチャと、AIエージェントが活動する「場」の概念を把握する必要がある。",
        "arch.sub1": "2.1 3つのサーフェス（The Three Surfaces）の統合",
        "card.editor.title": "Editor (エディタ)",
        "card.editor.func": "<strong>機能:</strong> コードの読み書き、ファイル操作、プロジェクト構造の把握",
        "card.editor.act": "<strong>自律行動例:</strong> 複数のファイルを同時に開き、依存関係を解析した上で、一括してリファクタリングを実行する。",
        "card.terminal.title": "Terminal (ターミナル)",
        "card.terminal.func": "<strong>機能:</strong> コマンド実行、環境構築、テスト実行、サーバー起動",
        "card.terminal.act": "<strong>自律行動例:</strong> エラーログをリアルタイムで監視し、依存関係の欠落があればnpm install等を自律的に実行して解決を試みる。",
        "card.browser.title": "Browser (ブラウザ)",
        "card.browser.func": "<strong>機能:</strong> アプリケーションのプレビュー、UI検証、ドキュメント検索",
        "card.browser.act": "<strong>自律行動例:</strong> ヘッドレス、または内蔵ブラウザを操作し、実際にレンダリングされた画面を確認する。",
        "arch.sub2": "2.2 Agent Manager：ミッションコントロールとしての役割",
        "arch.p2": "Agent Managerは、従来のファイルエクスプローラーに代わる、プロジェクトの司令塔（Mission Control）として機能する。ユーザーは単一の作業スレッドに縛られることなく、複数のエージェントを同時に起動し、それぞれに異なるミッションを与えることができる。",
        "arch.sub3": "2.3 基盤モデル：Gemini 3とその派生モデル",
        "list.gemini.pro": "<strong>Gemini 3 Pro (Deep Think):</strong> 複雑な論理的推論、アーキテクチャ設計、未知のエラーのデバッグに特化。",
        "list.gemini.flash": "<strong>Gemini 3 Flash:</strong> 高速かつ低コスト。単純なコード生成、コメント追加、定型的なテストケース作成に適する。",
        "list.external": "<strong>外部モデルのサポート:</strong> Claude 3.5 SonnetやGPTシリーズ、GPT-OSS 120Bなども選択可能。",
        "vibe.title": "3. Vibe Codingのパラダイムと実践的導入ガイド",
        "vibe.desc": "「Vibe Coding（バイブ・コーディング）」とは、厳密な構文やアルゴリズムの詳細を人間が記述するのではなく、達成したい機能、挙動、そして「雰囲気（Vibe）」を自然言語でAIに伝え、実装の大部分を委任するスタイルを指す。",
        "vibe.prompt.header": "推奨プロンプト例（Pomodoroタイマー作成）",
        "vibe.sub2": "3.2 初学者のためのVibe Coding実践ステップ",
        "step.1": "<strong>フェーズ1：意図の明確化とプロンプティング</strong> - 明確な「意図（Intent）」の伝達。",
        "step.2": "<strong>フェーズ2：Planning Modeによる設計図の作成</strong> - Implementation Planを確認し、意図が反映されているかチェック。",
        "step.3": "<strong>フェーズ3：Artifactsによる進捗確認と検証</strong> - 「Trust but Verify（信ぜよ、されど検証せよ）」の精神。",
        "step.4": "<strong>フェーズ4：対話的イテレーション（修正と洗練）</strong> - 動いているアプリを見ながら行う対話的な修正。",
        "skills.title": "4. Agent Skills：エージェントの能力拡張と専門化",
        "skills.desc": "Agent Skillsは、汎用的なAIモデルに対し、特定のタスクやプロジェクトに特化した手順、知識、ツールを「外付け」で与える仕組みである。",
        "skills.sub3": "4.3 初学者に推奨される「Must-Have」スキルセット",
        "skill.git.title": "Git Commit Formatter",
        "skill.git.desc": "変更内容を解析し、Conventional Commits形式でメッセージを自動生成。",
        "skill.debug.title": "Systematic Debugging",
        "skill.debug.desc": "ログ確認、仮説立案、検証という「正しいデバッグ手順」を強制。",
        "skill.doc.title": "Documentation Reader",
        "skill.doc.desc": "llms.txtやMCPを通じて公式ドキュメントを検索させ、正確なコーディングを保証。",
        "skill.deploy.title": "Deployment Skill",
        "skill.deploy.desc": "VercelやNetlifyへのデプロイ手順をスキル化し、ワンクリック公開を実現。",
        "control.title": "5. エージェント思考の可視化と制御戦略",
        "control.desc": "AIをブラックボックスとして扱うことはリスクである。Antigravityは、AIの思考プロセスを可視化し、人間が適切に介入するための仕組みを提供している。",
        "control.sub1": "5.1 Artifactsによる思考の透明化",
        "list.plan": "<strong>Implementation Plan:</strong> タスクの目的、アプローチ、変更予定のファイル一覧。必須承認ポイント。",
        "list.task": "<strong>Task List:</strong> 実行すべき具体的なステップの順序リスト。",
        "list.verify": "<strong>Verification Artifacts:</strong> テスト結果のログ、ブラウザ操作のスクリーンショット。",
        "cost.title": "6. コスト管理と学習の経済学",
        "cost.desc": "AntigravityとGemini 3の利用には「コスト」と「制限」が伴う。賢く管理する戦略が不可欠である。",
        "cost.box.title": "コスト最適化のための戦略",
        "list.model": "<strong>モデルの適材適所:</strong> 単純なタスクにはGemini 3 Flashを使用。",
        "list.bloat": "<strong>Tool Bloatの防止:</strong> 必要なスキルだけをWorkspace Scopeで有効化。",
        "list.context": "<strong>コンテキストのリセット:</strong> タスク完了ごとに新しいセッションを開始。",
        "concl.title": "8. 結論",
        "concl.p1": "Google Antigravityは、ソフトウェア開発の民主化における到達点であり、同時に新たな出発点である。Vibe Codingを実践し、Agent SkillsでAIを育て、コストと学習をマネジメントする能力を身につけた開発者は、一人で企業レベルのプロダクトを生み出す「1人ユニコーン」となる可能性を秘めている。",
        "concl.p2": "恐れずにエージェントとの協働を始めてほしい。Antigravityのターミナルを開き、最初の一言を打ち込むその瞬間から、あなたは「コーダー」ではなく「アーキテクト」としてのキャリアを歩み始めることになる。",
        "footer.copy": "&copy; 2026 Antigravity Research Report. Based on public information and community reports.",
        "footer.disclaimer": "Disclaimer: This report is based on information available as of January 2026. Features and pricing are subject to change."
    },
    en: {
        "nav.intro": "Introduction",
        "nav.architecture": "Architecture",
        "nav.vibe": "Vibe Coding",
        "nav.skills": "Skills",
        "nav.control": "Control",
        "nav.cost": "Cost",
        "hero.title": "Google Antigravity",
        "hero.subtitle": "Comprehensive Research Report: Agentic Development Paradigm Shift in 2026",
        "hero.cta": "Read Report",
        "intro.title": "1. Introduction: Redefining Developers in the Agent-First Era",
        "intro.p1": "As of 2026, the world of software engineering is in the midst of its most fundamental transformation in decades. The Integrated Development Environment (IDE), once merely a collection of text editors and compilers, has evolved into a platform for orchestrating autonomous 'Agents' with the advent of Google Antigravity.",
        "intro.p2": "Launched in November 2025 alongside the Gemini 3 models, this tool is not merely an extension of code completion. It is a foundation for developers to liberate themselves from the 'input work' of writing code character by character, establishing their role as 'Architects' who focus on software architecture and user experience (UX) design.",
        "intro.p3": "This report aims to comprehensively elucidate Google Antigravity for programming beginners and those wishing to start development with AI partners. Unlike the traditional 'Copilot' model which assisted human-led work, the 'Agent-First' model proposed by Antigravity is decisively different in that AI autonomously plans, executes, verifies, and corrects tasks. This shift is mainstreaming a new development style called 'Vibe Coding', advocated by Linux creator Linus Torvalds.",
        "arch.title": "2. Google Antigravity Architecture and 'The Three Surfaces'",
        "arch.desc": "To understand the essence of Google Antigravity, one must grasp its underlying architecture and the concept of the 'field' where AI agents operate.",
        "arch.sub1": "2.1 Integration of The Three Surfaces",
        "card.editor.title": "Editor",
        "card.editor.func": "<strong>Function:</strong> Reading/writing code, file operations, understanding project structure.",
        "card.editor.act": "<strong>Autonomous Action:</strong> Opens multiple files simultaneously, analyzes dependencies, and executes refactoring in bulk.",
        "card.terminal.title": "Terminal",
        "card.terminal.func": "<strong>Function:</strong> Command execution, environment setup, running tests, starting servers.",
        "card.terminal.act": "<strong>Autonomous Action:</strong> Monitors error logs in real-time and autonomously executes npm install etc. to resolve missing dependencies.",
        "card.browser.title": "Browser",
        "card.browser.func": "<strong>Function:</strong> Application preview, UI verification, document search.",
        "card.browser.act": "<strong>Autonomous Action:</strong> Controls headless or built-in browsers to verify actual rendered screens.",
        "arch.sub2": "2.2 Agent Manager: The Role of Mission Control",
        "arch.p2": "The Agent Manager functions as the project's Mission Control, replacing the traditional file explorer. Users are not bound to a single work thread but can launch multiple agents simultaneously, assigning different missions to each.",
        "arch.sub3": "2.3 Foundation Model: Gemini 3 and Derivatives",
        "list.gemini.pro": "<strong>Gemini 3 Pro (Deep Think):</strong> Specialized in complex logical reasoning, architecture design, and debugging unknown errors.",
        "list.gemini.flash": "<strong>Gemini 3 Flash:</strong> Fast and low cost. Suitable for simple code generation, adding comments, and creating standard test cases.",
        "list.external": "<strong>External Model Support:</strong> Claude 3.5 Sonnet, GPT series, and GPT-OSS 120B are also selectable.",
        "vibe.title": "3. Vibe Coding Paradigm and Practical Guide",
        "vibe.desc": "'Vibe Coding' refers to a style where humans do not write strict syntax or algorithm details, but instead convey the desired function, behavior, and 'Vibe' to the AI in natural language, delegating the majority of implementation.",
        "vibe.prompt.header": "Recommended Prompt Example (Pomodoro Timer)",
        "vibe.sub2": "3.2 Vibe Coding Practice Steps for Beginners",
        "step.1": "<strong>Phase 1: Clarifying Intent and Prompting</strong> - Communicating clear 'Intent'.",
        "step.2": "<strong>Phase 2: Blueprinting with Planning Mode</strong> - Checking the Implementation Plan to ensure intent is reflected.",
        "step.3": "<strong>Phase 3: Progress Check and Verification with Artifacts</strong> - The spirit of 'Trust but Verify'.",
        "step.4": "<strong>Phase 4: Interactive Iteration (Correction and Refinement)</strong> - Interactive correction while looking at the running app.",
        "skills.title": "4. Agent Skills: Extending and Specializing Agent Capabilities",
        "skills.desc": "Agent Skills are a mechanism to 'attach' specific procedures, knowledge, and tools for specific tasks or projects to general-purpose AI models.",
        "skills.sub3": "4.3 'Must-Have' Skill Set Recommended for Beginners",
        "skill.git.title": "Git Commit Formatter",
        "skill.git.desc": "Analyzes changes and automatically generates messages in Conventional Commits format.",
        "skill.debug.title": "Systematic Debugging",
        "skill.debug.desc": "Enforces 'correct debugging procedures': log checking, hypothesis formulation, and verification.",
        "skill.doc.title": "Documentation Reader",
        "skill.doc.desc": "Searches official docs via llms.txt or MCP to ensure accurate coding.",
        "skill.deploy.title": "Deployment Skill",
        "skill.deploy.desc": "Skill-ifies deployment procedures to Vercel or Netlify for one-click publishing.",
        "control.title": "5. Visualization and Control Strategy of Agent Thinking",
        "control.desc": "Treating AI as a black box is a risk. Antigravity provides mechanisms to visualize AI thought processes and allow appropriate human intervention.",
        "control.sub1": "5.1 Transparency via Artifacts",
        "list.plan": "<strong>Implementation Plan:</strong> Task purpose, approach, file changes. Mandatory approval point.",
        "list.task": "<strong>Task List:</strong> Ordered list of specific steps to execute.",
        "list.verify": "<strong>Verification Artifacts:</strong> Test result logs, browser operation screenshots.",
        "cost.title": "6. Cost Management and Economics of Learning",
        "cost.desc": "Using Antigravity and Gemini 3 comes with 'costs' and 'limits'. Smart management strategies are essential.",
        "cost.box.title": "Strategies for Cost Optimization",
        "list.model": "<strong>Right Model for the Job:</strong> Use Gemini 3 Flash for simple tasks.",
        "list.bloat": "<strong>Prevent Tool Bloat:</strong> Enable only necessary skills in Workspace Scope.",
        "list.context": "<strong>Context Reset:</strong> Start a new session for each completed task.",
        "concl.title": "8. Conclusion",
        "concl.p1": "Google Antigravity is the destination of software development democratization and a new starting point. Developers who practice Vibe Coding, cultivate AI with Agent Skills, and manage costs and learning have the potential to become 'One-Person Unicorns' creating enterprise-level products alone.",
        "concl.p2": "Do not fear collaboration with agents. From the moment you open the Antigravity terminal and type your first word, you begin your career not as a 'Coder' but as an 'Architect'.",
        "footer.copy": "&copy; 2026 Antigravity Research Report. Based on public information and community reports.",
        "footer.disclaimer": "Disclaimer: This report is based on information available as of January 2026. Features and pricing are subject to change."
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
});

