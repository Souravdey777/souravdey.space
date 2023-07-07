import { MdxWrapper } from "@/components";
import { allSkills } from "@/util/skills";

export default function Page() {
  return (
    <MdxWrapper>
      <h1>/skills</h1>
      {allSkills.map(({ type, skills }) => (
        <>
          <h2>{type}</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              color: "var(--foreground-hex-intense)",
              gap: '0.8rem'
            }}
          >
            {skills.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
        </>
      ))}
    </MdxWrapper>
  );
}
