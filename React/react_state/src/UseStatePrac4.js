import { useState } from 'react';

export default function UseStatePrac3() {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [comments, setComments] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [searchType, setSearchType] = useState('title');
  const [results, setResults] = useState([]);

  const addComment = () => {
    const newComment = {
      writer: writer,
      title: title,
    };

    setComments([...comments, newComment]);

    setWriter('');
    setTitle('');
  };

  const searchComment = () => {
    const serachResult = comments.filter((value) => {
      const type = value[searchType]; // value중에 현재 searchType에 해당하는 값
      const include = type.includes(inputSearch); // 현재 searchType에 해당하는 값중에 inputSearch가 포함되어있는지
      if (!include) {
        return false;
      }
      return true;
    });
    setResults(serachResult);
  };

  const fieldsetSt = {
    width: '700px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  };

  const searchSt = {
    width: '400px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '20px',
  };

  const tableSt = {
    width: '500px',
    border: '1px solid black',
    marginTop: '20px',
    textAlign: 'center',
    borderCollapse: 'collapse',
  };

  const trSt = {
    height: '50px',
  };

  const thSt = {
    border: '1px solid black',
  };

  const tdSt = {
    border: '1px solid black',
  };

  return (
    <>
      <form>
        <fieldset style={fieldsetSt}>
          <div>
            <label htmlFor="title">제목 : </label>
            <input
              id="title"
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="writer">작성자 : </label>
            <input
              id="writer"
              type="text"
              placeholder="작성자"
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
            />
          </div>
          <button type="button" onClick={addComment}>
            작성
          </button>
        </fieldset>
      </form>

      <div style={searchSt}>
        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
        >
          <option value="title">제목</option>
          <option value="writer">작성자</option>
        </select>
        <input
          type="text"
          name="search"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </div>

      <table style={tableSt}>
        <thead>
          <tr style={trSt}>
            <th style={thSt}>번호</th>
            <th style={thSt}>제목</th>
            <th style={thSt}>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment, idx) => {
            return (
              <tr key={idx}>
                <td style={tdSt}>{idx + 1}</td>
                <td style={tdSt}>{comment.title}</td>
                <td style={tdSt}>{comment.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h4>검색결과</h4>

      <table style={tableSt}>
        <thead>
          <tr style={trSt}>
            <th style={thSt}>번호</th>
            <th style={thSt}>제목</th>
            <th style={thSt}>작성자</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, idx) => {
            return (
              <tr key={idx}>
                <td style={tdSt}>{idx + 1}</td>
                <td style={tdSt}>{result.title}</td>
                <td style={tdSt}>{result.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
