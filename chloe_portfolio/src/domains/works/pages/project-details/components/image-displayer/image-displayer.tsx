import "./image-displayer.scss";

interface ImageDisplayerProps{
    source: string;
    id: string;
}

const ImageDisplayer = ({ source,id }: ImageDisplayerProps) => {
    return (
        <div className="image-displayer" id={id}>
            <img src={source}  width="90%" height="90%" className="image-displayer__image" alt={`project-${source}`}/>
        </div>
    );
};

export default ImageDisplayer;