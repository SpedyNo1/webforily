import { useState } from "react";
import "./App.css";
//https://media1.tenor.com/m/uDVblF3ewhwAAAAC/you-love-me-do-you-love-me.gif
const phrases = [
  "ถามเล้ยยย",
  "Yes",
  "กดเร็วๆ เขินนน 😳😳",
  "น้าาาาาาาา",
  "แต่เค้ารักเบบี๋นะะะะะะะะ",
  "แต่เค้ารักเบบี๋มากๆๆนะะะแน่ใจหรอ?",
  "ไม่รักกันแล้วหรอ",
  "เบบี่หักอกเค้า:(",
];

const phrases3 = [
  "ม่ายเอาม่ายถามม",
  "No",
  "แน่ใจนะะะ?",
  "น้าาาาาาาา",
  "แต่เค้ารักเบบี๋นะะะะะะะะ",
  "แต่เค้ารักเบบี๋มากๆๆนะะะแน่ใจหรอ?",
  "ไม่รักกันแล้วหรอ",
  "เบบี่หักอกเค้า:(",
];

const phrases1 = [
  "Hi kubb มีอะไรจะถามคับบ",
  "Will you be my valentine ?",
  "เย้ๆๆๆ น่ารักกมากกก",
  "น้าาาาาาาา",
  "แต่เค้ารักเบบี๋นะะะะะะะะ",
  "แต่เค้ารักเบบี๋มากๆๆนะะะแน่ใจหรอ?",
  "ไม่รักกันแล้วหรอ😭",
  "เบบี่หักอกเค้า:(",
];

const phrases2 = [
  "https://img2.pic.in.th/pic/lady-and-the-tramp-awkward.gif",
  "https://media1.tenor.com/m/uDVblF3ewhwAAAAC/you-love-me-do-you-love-me.gif",
  "https://media.tenor.com/bW1bXBAxDr0AAAAi/tkthao219-bubududu.gif",
  "https://img2.pic.in.th/pic/lady-and-the-tramp-awkward.gif",
  "https://img2.pic.in.th/pic/lady-and-the-tramp-awkward.gif",
  "https://img2.pic.in.th/pic/lady-and-the-tramp-awkward.gif",

];



function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function getNoButtonText() {
    return phrases[noCount];
  }

  function getNoButtonText1() {
    return phrases1[noCount];
  }


  function getNoButtonText2() {
    return phrases2[Math.min(noCount)];
  }

  return (
    <div className="val-container">
      {" "}
      {noCount > 1 ? (
        <>
           <img
            src={getNoButtonText2()} 
            alt="bear-asking"
          />
          <div className="val-text"> {getNoButtonText1()}</div>

            <button
              onClick={() => setNoCount(noCount + 1)}
              className="button yes-button"
            >
              {getNoButtonText()}
            </button>
        </>
      ) : (
        <>
        
          <img
            src={getNoButtonText2()} 
            alt="bear-asking"
          />
          <div className="val-text"> {getNoButtonText1()}</div>
          <div>

            <button
              onClick={() => setNoCount(noCount + 1)}
              className="button yes-button"
            >
              {getNoButtonText()}
            </button>


            <button
              className="button no-button"
              onClick={() => alert("ระบบปิดปรับปรุง กรุณากดปุ่มอื่น")}
            >
              {phrases3[noCount]}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
