const App = () => {
  const throwError = () => {
    throw new Error("This is a sample error");
  };
  return (
    <>
      <button onClick={throwError}>Throw Error</button>
    </>
  );
};

export default App;
