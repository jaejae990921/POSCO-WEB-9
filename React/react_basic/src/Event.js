export default Event = () => {
  const handleClick = () => {
    alert('버튼이 클릭되었습니다.');
  };

  const handleClick2 = (str) => {
    alert(str);
  };

  function handleClick3() {
    alert('클릭3');
  }

  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <button onClick={() => handleClick2('2번 클릭')}>클릭2</button>
      <button onClick={handleClick3}>클릭3</button>
    </>
  );
};
