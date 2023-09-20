import { Component } from 'react';

class StatePrac3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputWriter: '',
      inputTitle: '',
      comments: [],
    };

    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  onChange(event) {
    this.setState(() => ({ inputWriter: event.target.value }));
  }

  addComment() {
    const newComment = {
      writer: this.state.inputWriter,
      title: this.state.inputTitle,
    };

    this.setState(() => ({
      comments: [...this.state.comments, newComment],
      inputWriter: '',
      inputTitle: '',
    }));
  }

  render() {
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
                value={this.state.inputWriter}
                onChange={(e) => {
                  this.onChange(e);
                }}
              />
            </div>
            <div>
              <label htmlFor="title">제목 : </label>
              <input
                id="title"
                type="text"
                placeholder="제목"
                value={this.state.inputTitle}
                onChange={(e) => {
                  this.setState({ inputTitle: e.target.value });
                }}
              />
            </div>
            <button type="button" onClick={this.addComment}>
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
          <button type="button" onClick={this.write}>
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
            {this.state.comments.map((comment, idx) => {
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
}

export default StatePrac3;
