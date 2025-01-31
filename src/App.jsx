import { useState, useEffect } from "react";
import questions from "./assets/Data";
import Option from "./components/Option";
import Next from "./components/Next";
import Submitt from "./components/Submitt";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

function App() {
  const [index, setIndex] = useState(0);
  const [questionObject, setQuestionObject] = useState(null);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [bar, setBar] = useState(0);
  const [marks, setMarks] = useState(0);
  const [answered, setAnswered] = useState(false); 
  const [result, setResult] = useState(false);

  useEffect(() => {
    setIndex(0);
    getQuestion();
  }, []);

  const getQuestion = () => {
    if (index >= questions.length) return;

    const currentQuestion = questions[index];

    setQuestionObject(currentQuestion);
    setQuestion(currentQuestion.description);
    setOption1(currentQuestion.options[0]?.description || "");
    setOption2(currentQuestion.options[1]?.description || "");
    setOption3(currentQuestion.options[2]?.description || "");
    setOption4(currentQuestion.options[3]?.description || "");

    setBar(((index + 1) / 10) * 100);
    setAnswered(false); 

    setIndex((prev) => prev + 1);
  };

  const check = (chosenOption) => {
    if (!questionObject || answered) return;  

    const optionObject = questionObject.options.find(
      (option) => option.description === chosenOption
    );

    if (optionObject && optionObject.is_correct) {
      setMarks((prevMarks) => Math.min(prevMarks + 10, 100)); 
    }

    setAnswered(true); 
  };


  const data = {
    labels: ["Score", "Remaining"],
    datasets: [
      {
        data: [marks, 100 - marks], 
        backgroundColor: ["#00E6FF", "#1E293B"],
        hoverBackgroundColor: ["#00E6FF", "#1E293B"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <>
      <div className="bg-[#0A192F] h-screen w-full flex flex-col items-center justify-center">
        <div className="bg-[#0A192F] w-[50vw] border-[#6D28D9] border-2 h-[20vh] my-3 rounded-2xl">
          <h1 className="top-0 font-bold text-[#00E6FF] text-2xl text-center">
            Lets Squeez your knowledge!
          </h1>
          <div className="m-1 h-24 flex justify-evenly p-1">
            <div className="flex justify-center items-center">
              <div className="h-2 w-[26vw] rounded-full shadow-lg shadow-[#00E6FF]">
                <div
                  className="bg-[#00E6FF] h-2 rounded-full shadow-lg shadow-[#00E6FF]"
                  style={{ width: bar + "%" }}
                ></div>
              </div>
            </div>
            <div className="h-[95px] border-2 text-3xl border-[#6D28D9] w-[95px] rounded-full flex items-center justify-center text-[#FF00FF] font-semibold">
              {index + " / 10"}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-[#112240] relative border-[#6D28D9] border-2 rounded-2xl p-7 w-[50vw] h-[65vh] shadow-lg shadow-[#00E6FF]">
            {result ? (
              <>
                <div className="flex flex-col justify-center gap-20 items-center font-semibold text-4xl text-white">
                  <div className="my-1"> You scored {marks} out of 100!!</div>
                  <div className="">
                    <Pie data={data} options={{ responsive: true }} />
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div className="h-24 text-[#00E6FF] font-semibold text-xl">
                  {index + ") " + question || "Loading..."}
                </div>
                <div className="mt-7">
                  <ul>
                    <Option option={option1} onClick={() => check(option1)} />
                    <Option option={option2} onClick={() => check(option2)} />
                    <Option option={option3} onClick={() => check(option3)} />
                    <Option option={option4} onClick={() => check(option4)} />
                  </ul>
                </div>
                <div className="flex justify-center items-center my-3">
                  {index < 10 ? (
                    <Next getQuestion={getQuestion} />
                  ) : (
                    <Submitt
                      onClick={() => {
                        setResult(true);
                      }}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
