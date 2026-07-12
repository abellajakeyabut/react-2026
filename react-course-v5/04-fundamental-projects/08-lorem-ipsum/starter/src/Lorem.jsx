import text from './data';
const Lorem = ({ count }) => {
  let i = 0;
  let items = [];

  while (i < count) {
    items.push(<p>{text}</p>);
    i++;
  }
  return <div className="lorem-text">{items}</div>;
};
export default Lorem;
