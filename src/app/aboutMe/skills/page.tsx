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
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              color: "var(--foreground-hex-intense)",
            }}
          >
            {skills.map((skill) => (
              <strong key={skill}>{skill}</strong>
            ))}
          </div>
        </>
      ))}
    </MdxWrapper>
  );
}
