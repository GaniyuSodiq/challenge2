import logo from "./logo.svg";
import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img src="claudio.jpg" alt="avatar" className="avatar" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Sodiq Ganiyu</h1>
      <p>
        I am a fantastic Frontend Developer with amazing UIUX skills. I make
        $2,000 every month starting grom December 2025.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  if (skillObj.level === "advanced") {
    skillObj.level = "💪";
  }
  if (skillObj.level === "intermediate") {
    skillObj.level = "👍";
  }
  if (skillObj.level === "beginner") {
    skillObj.level = "👶";
  }

  return (
    <span className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill}
      {skillObj.level}
    </span>
  );
}

export default App;
