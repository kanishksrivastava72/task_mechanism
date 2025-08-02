import { useRef, useState } from "react";

const Accordian = ({ faqData }) => {
  const [toggleAccordian, setToggleAccordian] = useState(false);
  const [height, setMaxHeight] = useState("0px");
  const [activeIndex, setActiveIndex] = useState("");

  const handleAccordian = (index) => {
    setActiveIndex(index);
    setToggleAccordian((prev) => !prev);
    setMaxHeight("148px");
  };

  return (
    <>
      {faqData.map((item, index) => {
        return (
          <div key={index}>
            <button
              className="accordion-header"
              onClick={() => {
                handleAccordian(index);
              }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>{item.faq1title}</div>
              <span class="accordion-icon">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                </svg>
              </span>
            </button>
            {activeIndex === index && (
              <div
                class="accordion-content active"
                style={{
                  maxHeight: height,
                  border: "1px solid #cdcbcb",
                  marginBottom: "20px",
                }}
              >
                {item.faq1content}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Accordian;
