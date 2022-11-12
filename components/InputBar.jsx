import { AiOutlineSend, AiOutlinePaperClip } from 'react-icons/ai';

const InputBar = () => (
  <div className='flex'>
    <input
      type='text'
      placeholder='Type here'
      className='input input-bordered input-primary w-max max-w-sm'
    />
    <div className='dropdown dropdown-top mx-4'>
      <label tabIndex={0} className='btn btn-active btn-ghost'>
        <AiOutlinePaperClip size={24} />
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
      >
        <li>
          <a href='#image-modal' className='btn'>
            Upload Image
          </a>
        </li>
        <li className="my-1">
          <a href='#file-modal' className='btn'>Upload File</a>
        </li>
        <li>
          <a href='#offer-modal' className='btn'>Make an offer</a>
        </li>
      </ul>
    </div>
    <button className='btn btn-active btn-ghost'>
      <AiOutlineSend size={24} />
    </button>
  </div>
);

export default InputBar;
