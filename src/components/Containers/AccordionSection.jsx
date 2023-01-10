import { useState } from "react";

const AccordionSection = ({ width, sectionTitle, children }) => {
  const [showSection, setShowSection] = useState(true);

  const toggleSection = () => {
    setShowSection(!showSection);
  };

  const content = children.find((el) => el.type === "section");
  const actionButton = children.find((el) => el.type === "button");
  return (
    <section className={`accordion-section ${width}`}>
      <header className="flex-ic-jb w-full border-b border-shadowBorder py-2">
        <h4 className="text-24">{sectionTitle}</h4>
        <button className="button button-basic" onClick={toggleSection}>
          X
        </button>
      </header>
      {showSection ? (
        <div className="w-full">
          {content ?? null} {actionButton}
        </div>
      ) : null}
    </section>
  );
};

export default AccordionSection;
