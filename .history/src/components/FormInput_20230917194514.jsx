const FormInput = () => {
  return (
    <div className='form-control '>
      <label className='label'>
        <span className='label-text'>What is your name?</span>
      </label>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered w-full max-w-xs'
      />
    </div>
  );
};

export default FormInput;
