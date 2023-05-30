import AboutMe from "@/content/aboutMe.mdx";
import styles from "@/app/page.module.css";
import { MdxWrapper } from "@/components";

export default function Page() {
  return (
    <MdxWrapper>
      <AboutMe />
    </MdxWrapper>
  );
}
