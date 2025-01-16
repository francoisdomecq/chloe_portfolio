import "./image-displayer.scss";

interface ImageDisplayerProps {
  source: string;
  id: string;
}

const ImageDisplayer = ({source, id}: ImageDisplayerProps) => {
  return (
    <div className="image-displayer" id={id}>
      <img src={source} className="image-displayer__image" alt={`project-${source}`}/>
    </div>
  );
};

export default ImageDisplayer;