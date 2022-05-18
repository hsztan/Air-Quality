const DataSnippet = (props) => {
  const { dataName, data } = props;
  const createClassName = dataName.replaceAll(' ', '-').toLowerCase();
  return (
    <div className={createClassName}>
      <p className={`${createClassName}-data`}>{data}</p>
      <p>{dataName}</p>
    </div>
  );
};

export default DataSnippet;
