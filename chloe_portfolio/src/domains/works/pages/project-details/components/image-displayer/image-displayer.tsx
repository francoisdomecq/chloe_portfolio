import "./image-displayer.scss";

interface ImageDisplayerProps{
    source: string;
}

const ImageDisplayer = ({ source }: ImageDisplayerProps) => {
    return (
        <div className="image-displayer">
            <img src={source}  width="100%" height="100%" className="image-displayer__image" alt="project"/>
        </div>
    );
};

export default ImageDisplayer;