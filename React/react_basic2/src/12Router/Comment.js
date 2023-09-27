import { useOutletContext } from 'react-router-dom';

export default function Comment() {
  const ctx = useOutletContext();
  return (
    <div>
      {ctx.comment.map((v, i) => {
        return <div key={i}>{v.text}</div>;
      })}
    </div>
  );
}
