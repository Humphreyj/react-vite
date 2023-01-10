import AppHeader from "./components/UI/AppHeader";
import AccordionSection from "@/components/Containers/AccordionSection";

function App() {
  return (
    <div className="App bg-gray-100 h-full w-full min-h-[120vh]">
      <AppHeader />
      <AccordionSection width="w-11/12" sectionTitle="New Section">
        <section className="content">
          <div>
            <form action="">
              <input type="text" />
            </form>
          </div>
        </section>
        <button className="button button-primary">Press me</button>
      </AccordionSection>
    </div>
  );
}

export default App;
