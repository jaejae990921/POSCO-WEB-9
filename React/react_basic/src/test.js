function test() {
  const my_style = {
    backgroundColor: 'blue',
    color: 'orange',
    fontSize: '40px',
    padding: '12px',
  };
  const name = '심재운';

  return (
    <>
      <div style={my_style}>{name}</div>
    </>
  );
}

export default test;
