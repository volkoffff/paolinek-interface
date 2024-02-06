import { ButtonMagnetic } from "../../components/Home/ButtonMagnetic/ButtonMagnetic";
import { Contact } from "../../components/Home/Contact/Contact";
import { TextHero } from "../../components/Home/TextHero/TextHero";

export function Home() {
  return (
    <>
      <div className="title_intro_container">
        <TextHero />
        <ButtonMagnetic />
      </div>
      <div className="full-section"></div>
      <Contact />
    </>
  );
}
