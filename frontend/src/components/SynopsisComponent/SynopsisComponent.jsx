import { useOutletContext } from "react-router-dom";
import Synopsis from "../Synopsis/Synopsis";

function SynopsisComponent() {
  const [film] = useOutletContext();
  return <Synopsis film={film} />;
}

export default SynopsisComponent;
