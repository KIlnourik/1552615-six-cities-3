type Props = {
  id: string;
  goods: string[];
}

export default function Facilities({id, goods}: Props): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {
          goods.map((good) => (
            <li className="offer__inside-item" key={`${id}_${good}`}>
              {good}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
