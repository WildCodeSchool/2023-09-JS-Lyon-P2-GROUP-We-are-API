import { useOutletContext } from "react-router-dom";
import Image from "../Image/Image";

function ImageComponent() {
  const [film] = useOutletContext();
  return <Image film={film} />;
}

export default ImageComponent;
