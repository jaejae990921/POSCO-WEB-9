import { Component } from 'react';

class StatePrac4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputWriter: '', // 작성자
      inputTitle: '', // 제목
      comments: [], // 입력한 내용
      inputSearch: '', // 검색내용
      searchType: 'title', // 검색타입
      results: [], // 검색결과
    };

    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.searchComment = this.searchComment.bind(this);
  }

  onChange(event) {
    this.setState(() => ({ inputWriter: event.target.value }));
  }

  // 코멘트 추가
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

  searchComment() {
    const searchResult = this.state.comments.filter((value) => {
      console.log(value[this.state.searchType]); // searchType에 맞게 출력해보기
      const type = value[this.state.searchType]; // 선택한 타입의 값
      const include = type.includes(this.state.inputSearch); // 선택한 타입의 값중에 입력한값(inputSearch)이 포함되어있는지
      if (!include) {
        return false;
      }
      return true;
    });
    this.setState({ results: searchResult });
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

    const {
      inputWriter,
      inputTitle,
      comments,
      inputSearch,
      searchType,
      results,
    } = this.state;

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
                value={inputTitle}
                onChange={(e) => {
                  this.setState({ inputTitle: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="writer">작성자 : </label>
              <input
                id="writer"
                type="text"
                placeholder="작성자"
                value={inputWriter}
                onChange={(e) => {
                  this.onChange(e);
                }}
              />
            </div>
            <button type="button" onClick={this.addComment}>
              작성
            </button>
          </fieldset>
        </form>

        <form style={searchSt}>
          {/* select의 value는 초기값! */}
          {/* onChange: input, textarea, select 값이 변경될 때마다 발생하는 이벤트 핸들러 */}
          <select
            value={searchType}
            onChange={(e) => this.setState({ searchType: e.target.value })}
          >
            {/* <option value="number">번호</option> */}
            <option value="title">제목</option>
            <option value="writer">작성자</option>
          </select>
          <input
            type="text"
            name="search"
            placeholder="검색어"
            value={inputSearch}
            onChange={(e) => this.setState({ inputSearch: e.target.value })}
          />
          <button type="button" onClick={this.searchComment}>
            검색
          </button>
        </form>

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
}

export default StatePrac4;
