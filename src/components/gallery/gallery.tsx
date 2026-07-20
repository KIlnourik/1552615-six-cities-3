type Props = {
  images: string[];
}

export default function Gallery({images}: Props): JSX.Element {
  return (
    <div className="offer__gallery">
      {
        images.map((image) => (
          <div className="offer__image-wrapper" key={image}>
            <img className="offer__image" src={image} alt="Photo studio"></img>
          </div>
        ))
      }
    </div>
  );
}
