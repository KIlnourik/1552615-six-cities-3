type Props = {
  parentClass: string;
}

export default function Map({ parentClass }: Props): JSX.Element {
  return (
    <section className={`${parentClass} map`}></section>
  );
}
