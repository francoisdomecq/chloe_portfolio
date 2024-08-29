import "./image-displayer.scss";

interface ImageDisplayerProps{
    source: string;
}

const ImageDisplayer = ({ source }: ImageDisplayerProps) => {
    return (
        <div className="image-displayer">
            <img width={300}src={source} alt="project"/>
        </div>
    );
};

export default ImageDisplayer;