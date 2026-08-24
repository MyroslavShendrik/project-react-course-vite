import Section from "./Section.jsx";
import PaintingList from "./PaintingList.jsx";
import paintings from "../json/painting.json";
console.log("paintings:", paintings);

export default function App() {
  return (
    <Section title="Колекція картин">
      <PaintingList items={paintings} />
    </Section>
  );
}
