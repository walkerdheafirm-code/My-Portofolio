import { useState, useEffect, useRef } from "react";
import dsoundhub from "./assets/dsoundhub.png";
import dbeatcloud from "./assets/dbeatcloud.png";
import dredInstruments from "./assets/dred-instruments.png";
import dmusiccloud from "./assets/dmusiccloud.png";
import dhe from "./assets/dhe.jpg";
/* eslint-disable */


const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = {
  Backend: ["Java", "Spring Boot", "MySQL", "PostgreSQL", "REST API", "Microservices", "JWT", "API Gateway"],
  Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
  Tools: ["Git", "GitHub", "GitLab", "Docker", "VSCode", "Adobe Photoshop"],
  Languages: ["Indonesian (Native)", "English (Proficient)"],
};

const PROJECTS = [
  {
    name: "D'SoundHub",
    desc: "Advanced audio e-commerce platform with microservices architecture. Features role-based access, API Gateway, JWT auth, and automated email notifications.",
    tech: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "JWT"],
    icon: "🎧",
    img: dsoundhub,
    link: "https://github.com/walkerdheafirm-code/dsoundhub",
  },
  {
    name: "D'BeatCloud",
    desc: "Full-stack audio sharing platform where users can upload, stream, and purchase audio. Supports free and premium downloads.",
    tech: ["Java", "Spring Boot", "MySQL", "Maven"],
    icon: "🎶",
    img: dbeatcloud,
    link: "https://github.com/walkerdheafirm-code/D-Beat-Cloud",
  },
  {
    name: "D'Red Instruments",
    desc: "Web-based virtual instrument platform featuring interactive virtual piano and launchpad.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: "🎹",
    img: dredInstruments,
    link: "https://github.com/walkerdheafirm-code/D-Red-Instruments",
  },
  {
    name: "D'MusicCloud",
    desc: "Simple terminal-based music player application built with C language fundamentals.",
    tech: ["C Language"],
    icon: "🎵",
    img: dmusiccloud,
    link: "https://github.com/walkerdheafirm-code/D-Music-Cloud",
  },
];

const EXPERIENCE = [
  {
    role: "Mentor C",
    org: "Program Beasiswa Pemberdayaan Umat Berkerlanjutan (PUB)",
    place: "PASIM National University",
    period: "Sep 2023 – Jul 2025",
    points: [
      "Mentored a cohort of 14 students in Logic and Algorithm fundamentals using the C language.",
      "Guided students in implementing data structures such as arrays, linked lists, stacks, and queues.",
      "Taught sorting and searching algorithms with hands-on coding practice.",
      "Provided debugging guidance and best practices for clean, efficient C programs.",
    ],
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimatedSection({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer & Music Enthusiast";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    root: {
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: "linear-gradient(135deg, #0a0a0f 0%, #12010a 50%, #0d0010 100%)",
      minHeight: "100vh",
      color: "#e8e0e8",
      overflowX: "hidden",
    },
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "0 2rem",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: scrolled ? "rgba(10,5,15,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(220,30,60,0.15)" : "none",
      transition: "all 0.3s ease",
    },
    logo: {
      fontWeight: 800,
      fontSize: "1.2rem",
      background: "linear-gradient(90deg, #ff2244, #ff6688)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "0.05em",
    },
    navLinks: {
      display: "flex",
      gap: "2rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: (name) => ({
      cursor: "pointer",
      fontSize: "0.9rem",
      fontWeight: 500,
      color: active === name ? "#ff2244" : "#b0a0b8",
      borderBottom: active === name ? "2px solid #ff2244" : "2px solid transparent",
      paddingBottom: "2px",
      transition: "color 0.2s, border-color 0.2s",
      letterSpacing: "0.04em",
    }),
    hero: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "6rem 2rem 4rem",
      position: "relative",
      overflow: "hidden",
    },
    heroGlow: {
      position: "absolute",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(220,20,50,0.18) 0%, transparent 70%)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      animation: "pulse 4s ease-in-out infinite",
    },
    heroInner: {
      display: "flex",
      alignItems: "center",
      gap: "4rem",
      maxWidth: "960px",
      width: "100%",
      flexWrap: "wrap",
      justifyContent: "center",
      zIndex: 1,
    },
    photoWrap: {
      position: "relative",
      flexShrink: 0,
      animation: "float 4s ease-in-out infinite",
    },
    photoRing: {
      width: "240px",
      height: "240px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #ff2244, #7700aa, #ff2244)",
      backgroundSize: "200% 200%",
      animation: "spinGrad 4s linear infinite",
      padding: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 60px rgba(220,20,50,0.35), 0 0 120px rgba(120,0,180,0.2)",
    },
    photoInner: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #1a0515, #200a20)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "5rem",
      overflow: "hidden",
    },
    heroText: { maxWidth: "480px" },
    heroName: {
      fontSize: "clamp(2rem, 5vw, 3.2rem)",
      fontWeight: 900,
      lineHeight: 1.1,
      marginBottom: "0.3rem",
      background: "linear-gradient(90deg, #fff 60%, #ff6688)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    heroNick: {
      fontSize: "1.1rem",
      color: "#ff4466",
      fontWeight: 600,
      marginBottom: "1rem",
      letterSpacing: "0.1em",
    },
    heroTagline: {
      fontSize: "1rem",
      color: "#c0a0c0",
      minHeight: "1.5em",
      marginBottom: "2rem",
    },
    cursor: {
      display: "inline-block",
      width: "2px",
      height: "1em",
      background: "#ff2244",
      marginLeft: "2px",
      verticalAlign: "text-bottom",
      animation: "blink 1s step-end infinite",
    },
    heroBtns: { display: "flex", gap: "1rem", flexWrap: "wrap" },
    btnPrimary: {
      padding: "0.7rem 1.8rem",
      borderRadius: "50px",
      background: "linear-gradient(90deg, #cc0022, #ff2244)",
      color: "#fff",
      fontWeight: 700,
      fontSize: "0.9rem",
      border: "none",
      cursor: "pointer",
      letterSpacing: "0.05em",
      boxShadow: "0 4px 20px rgba(220,20,50,0.4)",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    btnOutline: {
      padding: "0.7rem 1.8rem",
      borderRadius: "50px",
      background: "transparent",
      color: "#ff4466",
      fontWeight: 700,
      fontSize: "0.9rem",
      border: "2px solid #ff2244",
      cursor: "pointer",
      letterSpacing: "0.05em",
      transition: "background 0.2s, color 0.2s",
    },
    section: {
      maxWidth: "960px",
      margin: "0 auto",
      padding: "5rem 2rem",
    },
    sectionLabel: {
      fontSize: "0.75rem",
      fontWeight: 700,
      letterSpacing: "0.2em",
      color: "#ff2244",
      textTransform: "uppercase",
      marginBottom: "0.5rem",
    },
    sectionTitle: {
      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
      fontWeight: 900,
      color: "#fff",
      marginBottom: "3rem",
      lineHeight: 1.1,
    },
    divider: {
      width: "60px",
      height: "3px",
      background: "linear-gradient(90deg, #ff2244, #7700aa)",
      borderRadius: "2px",
      marginBottom: "2.5rem",
    },
    aboutGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "3rem",
      alignItems: "center",
    },
    aboutText: {
      color: "#c0a8c8",
      lineHeight: 1.8,
      fontSize: "1rem",
    },
    aboutCard: {
      background: "linear-gradient(135deg, rgba(220,20,50,0.08), rgba(80,0,100,0.12))",
      border: "1px solid rgba(220,20,50,0.2)",
      borderRadius: "16px",
      padding: "2rem",
    },
    statRow: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: "1.5rem",
      flexWrap: "wrap",
      gap: "1rem",
    },
    stat: { textAlign: "center" },
    statNum: {
      fontSize: "2rem",
      fontWeight: 900,
      background: "linear-gradient(90deg, #ff2244, #ff88aa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    statLabel: { fontSize: "0.78rem", color: "#908090", marginTop: "2px" },
    skillsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "1.5rem",
    },
    skillCard: {
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(220,20,50,0.15)",
      borderRadius: "14px",
      padding: "1.5rem",
      transition: "border-color 0.3s, transform 0.3s",
    },
    skillCategory: {
      fontSize: "0.75rem",
      fontWeight: 700,
      letterSpacing: "0.15em",
      color: "#ff4466",
      textTransform: "uppercase",
      marginBottom: "1rem",
    },
    skillTags: { display: "flex", flexWrap: "wrap", gap: "0.5rem" },
    skillTag: {
      background: "rgba(220,20,50,0.1)",
      border: "1px solid rgba(220,20,50,0.25)",
      borderRadius: "50px",
      padding: "0.3rem 0.8rem",
      fontSize: "0.8rem",
      color: "#e0c0d0",
    },
    projectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1.5rem",
    },
    projectCard: {
      background: "linear-gradient(135deg, rgba(15,5,20,0.95), rgba(25,5,15,0.95))",
      border: "1px solid rgba(220,20,50,0.15)",
      borderRadius: "16px",
      overflow: "hidden",
      transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
      textDecoration: "none",
      display: "block",
      color: "inherit",
    },
    projectImg: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      display: "block",
      borderBottom: "1px solid rgba(220,20,50,0.15)",
    },
    projectBody: { padding: "1.5rem" },
    projectIcon: { fontSize: "1.5rem", marginBottom: "0.5rem" },
    projectName: {
      fontSize: "1.1rem",
      fontWeight: 800,
      color: "#fff",
      marginBottom: "0.6rem",
    },
    projectDesc: {
      fontSize: "0.85rem",
      color: "#a090a8",
      lineHeight: 1.6,
      marginBottom: "1rem",
    },
    projectTechs: { display: "flex", flexWrap: "wrap", gap: "0.4rem" },
    projectTech: {
      background: "rgba(220,20,50,0.12)",
      border: "1px solid rgba(220,20,50,0.3)",
      borderRadius: "50px",
      padding: "0.2rem 0.65rem",
      fontSize: "0.72rem",
      color: "#ff8899",
      fontWeight: 600,
    },
    expCard: {
      background: "linear-gradient(135deg, rgba(220,20,50,0.06), rgba(80,0,100,0.08))",
      border: "1px solid rgba(220,20,50,0.2)",
      borderRadius: "16px",
      padding: "2rem",
    },
    expHeader: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: "1.2rem",
    },
    expRole: { fontSize: "1.1rem", fontWeight: 800, color: "#fff" },
    expOrg: { fontSize: "0.9rem", color: "#ff6688", fontWeight: 600, marginTop: "0.2rem" },
    expMeta: { textAlign: "right" },
    expPlace: { fontSize: "0.85rem", color: "#c0a0c0" },
    expPeriod: { fontSize: "0.8rem", color: "#906080", marginTop: "0.2rem" },
    expPoints: { listStyle: "none", padding: 0, margin: 0 },
    expPoint: {
      fontSize: "0.9rem",
      color: "#b090b8",
      lineHeight: 1.7,
      paddingLeft: "1.2rem",
      position: "relative",
      marginBottom: "0.4rem",
    },
    contactSection: {
      textAlign: "center",
      background: "linear-gradient(135deg, rgba(220,20,50,0.06), rgba(80,0,100,0.1))",
      border: "1px solid rgba(220,20,50,0.15)",
      borderRadius: "24px",
      padding: "4rem 2rem",
    },
    contactLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      marginTop: "2rem",
      flexWrap: "wrap",
    },
    contactBtn: {
      padding: "0.8rem 2rem",
      borderRadius: "50px",
      fontWeight: 700,
      fontSize: "0.9rem",
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    footer: {
      textAlign: "center",
      padding: "2rem",
      color: "#504050",
      fontSize: "0.8rem",
      borderTop: "1px solid rgba(220,20,50,0.08)",
    },
  };

  return (
    <div style={styles.root}>
      <style>{`
        @keyframes pulse { 0%,100%{transform:translate(-50%,-50%) scale(1);opacity:0.7} 50%{transform:translate(-50%,-50%) scale(1.15);opacity:1} }
        @keyframes spinGrad { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .project-card:hover { border-color: rgba(220,20,50,0.5) !important; transform: translateY(-6px) !important; box-shadow: 0 16px 40px rgba(220,20,50,0.2) !important; }
        .skill-card:hover { border-color: rgba(220,20,50,0.4) !important; transform: translateY(-4px) !important; }
        .btn-primary:hover { transform: translateY(-2px) !important; box-shadow: 0 8px 30px rgba(220,20,50,0.6) !important; }
        .btn-outline:hover { background: rgba(220,20,50,0.1) !important; }
        .contact-btn:hover { transform: translateY(-3px) !important; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #ff2244; border-radius: 3px; }
      `}</style>

      {/* NAV */}
      <nav style={styles.nav}>
        <div style={styles.logo}>DHE.</div>
        <ul style={styles.navLinks}>
          {NAV_LINKS.map(n => (
            <li key={n} style={styles.navLink(n)} onClick={() => { setActive(n); document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); }}>
              {n}
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section style={styles.hero} id="about">
        <div style={styles.heroGlow} />
        <div style={styles.heroInner}>
          <div style={styles.photoWrap}>
            <div style={styles.photoRing}>
              <div style={styles.photoInner}>
                <img src={dhe} alt="Dhea" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}} />
              </div>
            </div>
            <div style={{ position: "absolute", bottom: "8px", right: "-14px", background: "linear-gradient(135deg,#cc0022,#ff2244)", borderRadius: "50%", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", boxShadow: "0 4px 20px rgba(220,20,50,0.6)", border: "2px solid rgba(255,255,255,0.1)" }}>🎵</div>
            <div style={{ position: "absolute", top: "8px", left: "-14px", background: "rgba(30,5,40,0.95)", borderRadius: "50%", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", boxShadow: "0 4px 16px rgba(120,0,180,0.5)", border: "1px solid rgba(220,20,50,0.4)" }}>💻</div>
          </div>
          <div style={styles.heroText}>
            <div style={{ fontSize: "0.8rem", letterSpacing: "0.2em", color: "#ff4466", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.8rem" }}>Welcome to my portfolio</div>
            <h1 style={styles.heroName}>Dhea Firmasari</h1>
            <div style={styles.heroNick}>— Dhe —</div>
            <p style={styles.heroTagline}>
              {typedText}<span style={styles.cursor} />
            </p>
            <div style={styles.heroBtns}>
              <button className="btn-primary" style={styles.btnPrimary} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Get In Touch
              </button>
              <button className="btn-outline" style={styles.btnOutline} onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                See My Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={styles.section} id="about-section">
        <AnimatedSection>
          <div style={styles.sectionLabel}>Who I Am</div>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={styles.divider} />
          <div style={styles.aboutGrid}>
            <div>
              <p style={styles.aboutText}>
                A passionate Full Stack Developer with a strong foundation in programming logic, algorithms, and data structures. I build backend systems using <span style={{ color: "#ff6688", fontWeight: 600 }}>Java & Spring Boot</span> and craft interactive frontends with <span style={{ color: "#ff6688", fontWeight: 600 }}>React.js</span>.
              </p>
              <br />
              <p style={styles.aboutText}>
                My roots in C language gave me deep algorithmic thinking — I can adapt quickly to any tech stack. Beyond code, I'm a <span style={{ color: "#ff6688", fontWeight: 600 }}>music enthusiast</span> who loves building projects at the intersection of tech and music.
              </p>
              <br />
              <p style={styles.aboutText}>
                Currently finishing my D3 in Informatics Management at PASIM National University Bandung, actively seeking new opportunities in software development.
              </p>
            </div>
            <div style={styles.aboutCard}>
              <div style={{ fontSize: "0.85rem", color: "#c090c0", marginBottom: "1rem", lineHeight: 1.6 }}>
                🎓 D3 Informatics Management — PASIM National University<br />
                📍 Bandung, West Java, Indonesia<br />
                🌐 English Proficient<br />
                🎵 Music & Tech Enthusiast
              </div>
              <div style={styles.statRow}>
                <div style={styles.stat}>
                  <div style={styles.statNum}>4+</div>
                  <div style={styles.statLabel}>Projects</div>
                </div>
                <div style={styles.stat}>
                  <div style={styles.statNum}>14</div>
                  <div style={styles.statLabel}>Students Mentored</div>
                </div>
                <div style={styles.stat}>
                  <div style={styles.statNum}>3.53</div>
                  <div style={styles.statLabel}>GPA / 4.00</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* SKILLS */}
      <section style={{ ...styles.section, paddingTop: "2rem" }} id="skills">
        <AnimatedSection>
          <div style={styles.sectionLabel}>What I Use</div>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <div style={styles.divider} />
          <div style={styles.skillsGrid}>
            {Object.entries(SKILLS).map(([cat, items], i) => (
              <AnimatedSection key={cat} delay={i * 0.1}>
                <div className="skill-card" style={styles.skillCard}>
                  <div style={styles.skillCategory}>{cat}</div>
                  <div style={styles.skillTags}>
                    {items.map(s => <span key={s} style={styles.skillTag}>{s}</span>)}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* PROJECTS */}
      <section style={{ ...styles.section, paddingTop: "2rem" }} id="projects">
        <AnimatedSection>
          <div style={styles.sectionLabel}>What I've Built</div>
          <h2 style={styles.sectionTitle}>Projects</h2>
          <div style={styles.divider} />
          <div style={styles.projectsGrid}>
            {PROJECTS.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.1}>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-card" style={styles.projectCard}>
                  <img src={p.img} alt={p.name} style={styles.projectImg} />
                  <div style={styles.projectBody}>
                    <div style={styles.projectIcon}>{p.icon}</div>
                    <div style={styles.projectName}>{p.name}</div>
                    <div style={styles.projectDesc}>{p.desc}</div>
                    <div style={styles.projectTechs}>
                      {p.tech.map(t => <span key={t} style={styles.projectTech}>{t}</span>)}
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* EXPERIENCE */}
      <section style={{ ...styles.section, paddingTop: "2rem" }} id="experience">
        <AnimatedSection>
          <div style={styles.sectionLabel}>My Journey</div>
          <h2 style={styles.sectionTitle}>Experience</h2>
          <div style={styles.divider} />
          {EXPERIENCE.map((e) => (
            <div key={e.role} style={styles.expCard}>
              <div style={styles.expHeader}>
                <div>
                  <div style={styles.expRole}>{e.role}</div>
                  <div style={styles.expOrg}>{e.org}</div>
                </div>
                <div style={styles.expMeta}>
                  <div style={styles.expPlace}>{e.place}</div>
                  <div style={styles.expPeriod}>{e.period}</div>
                </div>
              </div>
              <ul style={styles.expPoints}>
                {e.points.map((pt, i) => (
                  <li key={i} style={styles.expPoint}>
                    <span style={{ position: "absolute", left: 0, color: "#ff2244" }}>▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </AnimatedSection>
      </section>

      {/* CONTACT */}
      <section style={{ ...styles.section, paddingTop: "2rem" }} id="contact">
        <AnimatedSection>
          <div style={styles.contactSection}>
            <div style={styles.sectionLabel}>Let's Talk</div>
            <h2 style={{ ...styles.sectionTitle, marginBottom: "1rem" }}>Get In Touch</h2>
            <p style={{ color: "#a080a8", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7, fontSize: "0.95rem" }}>
              I'm actively looking for new opportunities. Whether you have a project, a job offer, or just want to say hi — my inbox is always open!
            </p>
            <div style={styles.contactLinks}>
              <a href="mailto:dheafirmasari@gmail.com" className="contact-btn" style={{ ...styles.contactBtn, background: "linear-gradient(90deg,#cc0022,#ff2244)", color: "#fff", boxShadow: "0 4px 20px rgba(220,20,50,0.4)" }}>
                ✉️ Email Me
              </a>
              <a href="https://www.linkedin.com/in/dhea-firmasari-57497b402/" target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ ...styles.contactBtn, background: "transparent", color: "#ff4466", border: "2px solid #ff2244" }}>
                💼 LinkedIn
              </a>
              <a href="https://github.com/walkerdheafirm-code" target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ ...styles.contactBtn, background: "transparent", color: "#ff4466", border: "2px solid #ff2244" }}>
                🐙 GitHub
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>Designed & Built by <span style={{ color: "#ff2244", fontWeight: 700 }}>Dhea Firmasari</span> · 2026</p>
      </footer>
    </div>
  );
}