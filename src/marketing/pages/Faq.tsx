
import  { useState, useRef, useEffect } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import AccordionData from "../../components/constants/AccordionData";


interface AccordionData {
  question: string;
  answer: string;
}


function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  //initialize contentRefs as an array of refs
  const contentRefs = useRef<(HTMLDivElement | null)[]>(
    Array(AccordionData.length).fill(null)
  );
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  //Ensuring scrollHeight iis updated after render
  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref && openIndex === index) {
        ref.style.maxHeight = `${ref.scrollHeight}px`;
      } else if (ref) {
        ref.style.maxHeight = "0px";
      }
    });
  }, [openIndex]);

  return (
    <div>
      <section className="flex flex-col-reverse items-center justify-between gap-12 px-6 md:px-10 py-25 w-full bg-gray-50 min-h-screen m-auto">
        {/* Text Block */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-700 mt-6 text-center font-medium  tracking-wide  text-md/6 ">
            Thinking of renting a gadget? Learn more below <br /> or reach out to us.
          </p>

          <div className="flex flex-col gap-4 mt-10">
            <div>
              {AccordionData.map((item: AccordionData, index: number) => (
                <div key={index} className="flex flex-col gap-4">
                  <div
                    className="flex justify-between items-center  p-4  border-b-2 border-gray-300"
                    onClick={() => toggleAccordion(index)}
                  >
                    <button>{item.question}</button>
                    <div>{openIndex === index ? <BiMinus /> : <BiPlus />}</div>
                  </div>
                  {/* Answer Section */}
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: openIndex === index ? "1000px" : "0px", // Fallback maxHeight
                      opacity: openIndex === index ? 1 : 0,
                    }}
                  >
                    <div className="p-4 ">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
