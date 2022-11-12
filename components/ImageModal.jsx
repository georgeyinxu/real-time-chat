const ImageModal = () => (
  <div className='modal' id='image-modal'>
    <div className='modal-box'>
      <h3 className='font-bold text-lg mb-4'>Image Upload</h3>
      <div className='border-dashed border-2 rounded-md border-sky-500 relative flex justify-center'>
        <div className='my-20'>
          <h2 className='font-bold'>Click here to upload an image</h2>
          <input
            type='file'
            name='imageFile'
            accept='image/png, image/gif, image/jpeg'
            className='absolute left-0 right-0 top-0 bottom-0 opacity-0'
          />
          {/* Add functionality to tell user that file has been uploaded here */}
        </div>
      </div>
      <div className='modal-action'>
        <a href='#' className='btn'>
          Confirm
        </a>
      </div>
    </div>
  </div>
);

export default ImageModal;
