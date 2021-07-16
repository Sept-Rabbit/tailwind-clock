export const AutoScrollContainer = ({ items }) => {
  const bottomRef = useRef();

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="autoscroll-container">
      <button type="button" onClick={scrollToBottom}>
        Scroll To Bottom
      </button>
      <div className="scroll-list">
        {items &&
          items.map((item, index) => (
            <p key={index}>{`${index + 1}. ${item}`}</p>
          ))}
        <div ref={bottomRef} className="list-bottom"></div>
      </div>
    </div>
  );
};
