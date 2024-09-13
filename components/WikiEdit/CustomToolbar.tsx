export default function CustomToolbar({ userName }: { userName: string | undefined }) {
  return (
    <div id="toolbar" style={{ position: 'fixed' }} className="quill custom ql-toolbar ql-snow ">
      <span style={{ float: 'left' }}>{`${userName}`}</span>
      <button className="ql-bold"></button>
      <button className="ql-italic"></button>
      <button className="ql-underline"></button>
      <select className="ql-header">
        <option value="1"></option>
        <option value="2"></option>
        <option defaultValue=""></option>
      </select>
      <button className="ql-list" value="ordered"></button>
      <button className="ql-list" value="bullet"></button>
      <button className="ql-blockquote"></button>
      <button className="ql-image"></button>
      <button className="ql-video"></button>
      <button className="ql-link"></button>
      <button className="ql-footnote">각주</button>
    </div>
  );
}
