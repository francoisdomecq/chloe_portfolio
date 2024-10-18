import "./image-displayer.scss";

interface ImageDisplayerProps{
    source: string;
}

const ImageDisplayer = ({ source }: ImageDisplayerProps) => {
    return (
        <div className="image-displayer">
            <img src={source}  width="90%" height="90%" className="image-displayer__image" alt={`project-${source}`}/>
        </div>
    );
};

export default ImageDisplayer;