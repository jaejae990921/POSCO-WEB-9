import { useState } from 'react';

export default function UseStatePrac3() {
  const [writer, setWriter] = useState('');
  const [title, setTitle] = useState('');
  const [comments, setComments] = useState([]);

  const addComment = () => {
    const newComment = {
      writer: writer,
      title: title,
    };

    setComments([...comments, newComment]);

    setWriter('');
    setTitle('');
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
            <label htmlFor="writer">작성자 : </label>
            <input
              id="writer"
              type="text"
              placeholder="작성자"
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
            />
          </div>
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
          <button type="button" onClick={addComment}>
            작성
          </button>
        </fieldset>
      </form>

      <div style={searchSt}>
        <select>
          <option value="number">번호</option>
          <option value="title">제목</option>
          <option value="writer">작성자</option>
        </select>
        <input type="text" name="search" placeholder="검색어" />
        <button type="button">검색</button>
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
                <td style={tdSt}>{comment.writer}</td>
                <td style={tdSt}>{comment.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
