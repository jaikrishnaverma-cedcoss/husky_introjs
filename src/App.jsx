import "./App.css";
import { useState } from "react";
import "intro.js/introjs.css";
import { Steps, Hints } from "intro.js-react";
const stepsArr=[
  {
    intro: "Lets Start",
    position: "middle-middle",
    tooltipClass: "myTooltipClass",
    highlightClass: "myHighlightClass",
  },
  {
    element: "#onboarding1",
    intro: "test 1",
    position: "right",
    tooltipClass: "myTooltipClass",
    highlightClass: "myHighlightClass",
  },
  {
    element: "#onboarding2",
    intro: "test 2",
    position: "right",
  },
  {
    element: "#onboarding3",
    intro: "test 3",
    position: "right",
  },
  {
    element: "#onboarding4",
    intro: "test 4",
    position: "right",
  },
  {
    element: "#onboarding5",
    intro: "test 5",
    position: "right",
  },
]
function App() {
  const [enable, setEnable] = useState(false);
  const [state, setState] = useState({
    currentStep: 0,
    button: "Start",
    enable: false,
  });

  return (
    <>
      <div
        style={{
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() =>
            setState({ ...state, enable: true, button: "Onboarding" })
          }
        >{`${state.currentStep != 0 ? state.currentStep : ""} ${
          state.button
        }`}</button>

        {Array(5)
          .fill("onboarding")
          .map((x, i) => (
            <div
              id={x + (i + 1)}
              key={i + 1}
              style={{
                width: "300px",
                height: "200px",
                marginTop: "20px",
                border: "1px solid red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {x + (i + 1)}
            </div>
          ))}
    
      
      </div>
      <Steps
        enabled={state.enable}
        steps={star}
        initialStep={state.currentStep}
        onBeforeExit={(stepIndex) => {
          console.log('onBeforeExit', stepIndex);
        }}
        onExit={(stepIndex) => {
          console.log('onExit', stepIndex);
          setState({ ...state, enable: false})
        }}
        onStart={(stepIndex) => {
          console.log('onStart', stepIndex);
        }}
        onChange={(nextStepIndex, nextElement) => {
          console.log('onChange',{currentStep: nextStepIndex });
          setState({ ...state, currentStep: nextStepIndex });
        }}
        onBeforeChange={(nextStepIndex, nextElement) => {
          console.log('onBeforeChange',{currentStep: nextStepIndex });
          console.log({ ...state, currentStep: nextStepIndex });
        }}
        onAfterChange={(nextStepIndex, nextElement) => {
          console.log('onAfterChange',{currentStep: nextStepIndex });
        }}
        onPreventChange={(stepIndex) => {
          console.log('onAfterChange',{currentStep: stepIndex });
        }}
        onComplete={() => {
          setState({
            ...state,
            enable: true,
            button: "Completed successfully",
          });
        }}
        options={{
          hidePrev:true
        }}
        ref={(steps) => {}}
      />
         <Hints
        enabled={state.enable}
        hints={stepsArr.filter(x=>x?.element).map(item=>{
          return {
            ...item,
            hint:`${item.intro} hint`,
            hintPosition:'middle-middle',
          }
        })}
      /> 
    </>
  );
}

export default App;
