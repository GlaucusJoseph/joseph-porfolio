import "./index.css";

interface TitleProps {
  titleText: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Title: React.FC<TitleProps> = ({ titleText, isOpen, setIsOpen }) => {
  const toggleButton = () => {
    const toggleSwitch = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="toggle-container">
        <div
          className={`toggle-switch ${isOpen ? "on" : "off"}`}
          onClick={toggleSwitch}
        >
          <div className={`slider ${isOpen ? "on" : "off"}`}></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h3 className="my-2">{titleText}</h3>
        {toggleButton()}
      </div>
      <div className="animated-line" />
    </>
  );
};

export default Title;
