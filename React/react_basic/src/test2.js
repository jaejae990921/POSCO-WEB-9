import bhc from './bhc.jpg';

function test2() {
  const style = {
    color: 'orange',
    fontSize: '40px',
    marginTop: '20px',
  };

  return (
    <>
      <div style={style}>
        <h2>안녕하세요</h2>
      </div>
      <div style={style}>
        <img src={bhc} width="500px"></img>
      </div>
    </>
  );
}

export default test2;
