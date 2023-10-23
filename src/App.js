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
    skill: "GIT and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3800",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}

      {/* <Skill subject="Java" emoji="🤞" color="red" />
      <Skill subject="HTML" emoji="✌️" color="green" />
      <Skill subject="Javascript" emoji="✍️" color="blue" />
      <Skill subject="CSS" emoji="✍️" color="orange" />
      <Skill subject="Springboot" emoji="🤞" color="grey" />
      <Skill subject="React" emoji="💪" color="pink" /> */}
    </div>
  );
}

function Skill({ skillObj }) {
  var emoji = "";
  if (skillObj.level === "advanced") {
    emoji = "💪";
  } else if (skillObj.level === "intermediate") {
    emoji = "✌️";
  } else if (skillObj.level === "beginner") {
    emoji = "✍️";
  }

  const color = { backgroundColor: skillObj.color };
  return (
    <div style={color}>
      <span>{skillObj.skill}</span>
      <span>{emoji}</span>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Aniket.jpg" alt="Aniket" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Aniket Kumar Singh</h1>
      <p>
        I am a software engineer for backend . Next target for learning and
        becoming fullstack react developer. I already satarted to learn react
        course alone with HTML CSS including Javascript from udemy course!
      </p>
    </div>
  );
}

export default App;
