const DataSnippet = (props) => {
  const { dataName, data } = props;
  const createClassName = dataName.replaceAll(' ', '-');
  return (
    <div className={createClassName}>
      <p className={data}>{data}</p>
      <p>{dataName}</p>
    </div>
  );
};

export default DataSnippet;
