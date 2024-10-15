import { useState } from "react";
import "./App.css";

export default function App() {
  return <AccordionList />;
}

function AccordionList() {
  return faqs.map((el, i) => (
    <AccordionItem title={el.title} text={el.text} num={i} />
  ));
}

function AccordionItem({ title, text, num }) {
  const [isopen, setIsopen] = useState(false);

  function handleIsopen(){
    setIsopen(isopen => !isopen)
  }
  return (
    <div className="acc-item" onClick={handleIsopen}>
      <div className="first-row">
        <span className="num"> {num < 9 ? `0${num + 1}` : `${num + 1}`} </span>
        <span className="question"> {title}</span>
        <button className=""> + </button>
      </div>
      {isopen && <div className="content">{text}</div>}
    </div>
  );
}

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet. Aut quidem omnis est consequatur corporis vel repellendus officia? Qui mollitia cumque cum eveniet itaque sed laudantium laboriosam ut praesentium commodi.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Id magni dolorem est error aperiam ut doloremque dolor vel quod dolore eum quidem minus est illo amet et eaque accusamus!",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Et assumenda iste aut vero quidem et enim rerum et adipisci dolores est quasi numquam. Et minus labore sit quidem recusandae vel dolor quisquam rem itaque fugit.",
  },
];
