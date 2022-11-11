const InputBar = () => (
  <div className='flex'>
    <input
      type='text'
      placeholder='Type here'
      className='input input-bordered input-primary w-full max-w-xs'
    />
    <div className='dropdown dropdown-top'>
      <label tabIndex={0} className='btn btn-active btn-ghost m-1'>
        Click
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
      >
        <li>
          <a>Upload Image</a>
        </li>
        <li>
          <a>Make an offer</a>
        </li>
      </ul>
    </div>
    <button className='btn btn-active btn-ghost'>SEND</button>
  </div>
);

export default InputBar;
