import {} from "./DefaultButtonStyle";
import{Button} from "./DefaultButtonStyle";

type DefaultButtonProps = {
  onClick: () => void;
  text: string;

}

const DefaultButton = ({onClick, text}: DefaultButtonProps) => {
  return (
    <>
      <Button onClick={onClick}>{text}</Button>
    </>
  );
};

export default DefaultButton;
