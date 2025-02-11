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
  "Gift",
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
  "ถ้าเทอไม่ไหว ทักหรือโทรมาหาเค้าได้เลย เค้าจะเป็นกำลังใจให้เทอเอง",
  "Big hug kub babe.",
  "Happy valentine ล่วงหน้า \n หวังว่าเทอจะชอบของที่เค้าให้นะคับเบบี๋",
  "@2nsstyleStore",
];

const phrases2 = [
  "https://img2.pic.in.th/pic/lady-and-the-tramp-awkward81adb2ad3ac58c7c.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWZnN2ZpenlhdnE0eGM2MW1najh0and5NWlhY240cWU5eHBib2N5ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GYAiZdntWJE1zyNOLp/giphy.gif",
  "https://media1.tenor.com/m/uDVblF3ewhwAAAAC/you-love-me-do-you-love-me.gif",
  "https://media.tenor.com/bW1bXBAxDr0AAAAi/tkthao219-bubududu.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnJncnZqN3lzbTF0ankyMWJqYTc5Z29nOWhlbWpwMmJqZGZscjg0MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/adXjldOSB3b5C/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnM5anFmZGJxcmVyYjFhNzM0OHVtazl1Y3cwYzN1bnVjc2N0Z2dvdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bThVImNJTXXoc/giphy.gif",
  "https://i.ytimg.com/vi/5J2-WG-fXXU/maxresdefault.jpg",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHFyejByNXllZnFrdzhtejkxdWMwaDNrcjk4ZzI4azV6NGxkMHE2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/63D094RLUNExa/giphy.gif",
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
      {noCount > 7 ? (
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
