import book from './book.jpg';

function PropsPrac2(props) {
  const mainSt = {
    backgroundColor: 'rgb(249, 250, 191)',
    width: '400px',
    height: '550px',
  };

  const topSt = {
    fontSize: '30px',
    color: 'orange',
    textAlign: 'center',
    paddingTop: '20px',
    fontSize: '30px',
    fontWeight: 'bold',
  };

  const imgDivSt = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const imgSt = {
    width: '200px',
  };

  const titleSt = {
    fontSize: '24px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '20px',
  };

  const three = {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'bold',
    marginLeft: '20px',
    marginTop: '10px',
    height: '100px',
    justifyContent: 'space-around',
  };

  const { title, author, price, type } = props;

  return (
    <>
      <div style={mainSt}>
        <div style={topSt}>이번주 베스트셀러</div>
        <div style={imgDivSt}>
          <img style={imgSt} src={book}></img>
        </div>
        <div style={titleSt}>{title}</div>
        <div style={three}>
          <div>저자: {author}</div>
          <div>판매가: {price}</div>
          <div>구분: {type}</div>
        </div>
      </div>
    </>
  );
}

export default PropsPrac2;
