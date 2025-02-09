import { useState } from "react";
import "./App.css";
//https://media1.tenor.com/m/uDVblF3ewhwAAAAC/you-love-me-do-you-love-me.gif
const phrases = [
  "ถามเล้ยยย",
  "ช่ายย",
  "Yes",
  "กดเร็วๆ เขินนน 😳😳",
  "🥺🥺🥺🥺🥺",
  "😊😊😊😊😊",
  "ลูบหัวๆนะคับ",
  "ไม่รักกันแล้วหรอ",
  "เบบี่หักอกเค้า:(",
];

const phrases3 = [
  "ม่ายเอาม่ายถามม",
  "หรออ",
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
  "ช่วงนี้ใกล้ Valentine day แล้วว",
  "Will you be my valentine ?",
  "เย้ๆๆๆ น่ารักกมากกก",
  "เค้ารู้นะว่าช่วงนี้เทอเครียด เหนื่อยแล้วก็ท้อมาก พยายามเข้านะคับ",
  "ถ้าเทอไม่ไหว ทักหรือโทรมาหาเค้าได้เลย เค้าจะเป็นกำลังให้เทอเอง",
  "Big hug kub babe.",
  "Happy valentine ล่วงหน้า \n หวังว่าเทอจะชอบของที่ให้นะคับเบบี๋ @2nsstyleStore",
  "หวังว่าเทอจะชอบของที่ให้นะคับเบบี๋",
];

const phrases2 = [
  "src/assets/lady-and-the-tramp-awkward.gif",
  "src/assets/giphy.webp",
  "src/assets/tenor.gif",
  "src/assets/tkthao219-bubududu.gif",
  "src/assets/giphy.gif",
  "src/assets/giphy (1).gif",
  "src/assets/maxresdefault.jpg",
  "src/assets/63D094RLUNExa.webp",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNThkbjcwM213emFsbXpsZW03d2EwdXo3YWJkZTA4OGw1a2RkMWV6YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/63D094RLUNExa/giphy.gif",
];



function App() {
  const [noCount, setNoCount] = useState(0);


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
      {noCount > 6 ? (
        <>
          <img className="fiw" src={getNoButtonText2()} alt="bear-asking" />
          <div className="val-text">{getNoButtonText1()}</div>
        </>
      ) : noCount > 2 ? (
        <>
          <img className="fiw" src={getNoButtonText2()} alt="bear-asking" />
          <div className="val-text">{getNoButtonText1()}</div>
          <button onClick={() => setNoCount(noCount + 1)} className="button yes-button">
            {getNoButtonText()}
          </button>
        </>
      ) : (
        <>
          <img className="fiw" src={getNoButtonText2()} alt="bear-asking" />
          <div className="val-text">{getNoButtonText1()}</div>
          <div>
            <button onClick={() => setNoCount(noCount + 1)} className="button yes-button">
              {getNoButtonText()}
            </button>
            <button className="button no-button" onClick={() => alert("ระบบปิดปรับปรุง กรุณากดปุ่มอื่น")}>
              {phrases3[noCount]}
            </button>
          </div>
        </>
      )}
    </div>
  );  
}
export default App;
