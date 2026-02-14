import Main from '../../pages/main-page/main-page';

type Props = {
  offerCount: number;
};

export default function App({ offerCount }: Props): JSX.Element {
  return (
    <Main offerCount={offerCount} />
  );
}
