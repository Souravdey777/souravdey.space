import AboutMe from "@/content/aboutMe.mdx";
import { MdxWrapper } from "@/components";

export const metadata = {
  title: "About | Sourav Dey",
};

export default function Page() {
  return (
    <MdxWrapper>
      <AboutMe />
    </MdxWrapper>
  );
}
