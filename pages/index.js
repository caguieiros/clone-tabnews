function Home() {
  return (
    <div className="page">
      <div className="grid-bg" />

      <div className="card">
        <span className="tag">&lt; código &amp; pensamento /&gt;</span>
        <h1>
          Todo mundo deveria aprender a <span className="highlight">programar</span>,
          porque isso ensina a <span className="highlight">pensar</span>!!
          <span className="cursor" />
        </h1>
        <div className="footer-line">
          <span className="code-symbols">&gt;</span> lógica.compilar( ideias )
        </div>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 20% 20%, #1a1f3a 0%, #0a0e1a 60%, #050710 100%);
          font-family: 'Space Grotesk', sans-serif;
          overflow: hidden;
          position: relative;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(120, 200, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120, 200, 255, 0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: drift 30s linear infinite;
        }

        @keyframes drift {
          from { transform: translate(0, 0); }
          to { transform: translate(40px, 40px); }
        }

        .card {
          position: relative;
          z-index: 2;
          max-width: 780px;
          margin: 24px;
          padding: 60px 50px;
          background: linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          backdrop-filter: blur(12px);
          border: 1px solid rgba(120, 200, 255, 0.25);
          border-radius: 24px;
          box-shadow: 0 0 60px rgba(80, 160, 255, 0.15), inset 0 0 40px rgba(255,255,255,0.03);
          text-align: center;
        }

        .tag {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          letter-spacing: 3px;
          color: #7fe0d4;
          background: rgba(127, 224, 212, 0.1);
          border: 1px solid rgba(127, 224, 212, 0.35);
          padding: 6px 16px;
          border-radius: 999px;
          margin-bottom: 28px;
          text-transform: uppercase;
        }

        h1 {
          font-size: clamp(1.6rem, 4vw, 2.6rem);
          line-height: 1.35;
          font-weight: 700;
          background: linear-gradient(120deg, #ffffff 0%, #9be8ff 45%, #7fe0d4 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: -0.5px;
          margin: 0;
        }

        .highlight {
          background: linear-gradient(120deg, #ffd76f, #ff9f7f);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cursor {
          display: inline-block;
          width: 3px;
          height: 1.4em;
          background: #7fe0d4;
          vertical-align: text-bottom;
          margin-left: 4px;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .footer-line {
          margin-top: 34px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: rgba(180, 200, 220, 0.5);
          letter-spacing: 1px;
        }

        .code-symbols {
          color: rgba(127, 224, 212, 0.7);
        }
      `}</style>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home;