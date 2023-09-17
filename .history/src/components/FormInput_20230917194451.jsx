const FormInput = () => {
  return (
    <div className='form-control '>
      <label className='label'>
        <span className='label-text'>What is your name?</span>
        <span className='label-text-alt'>Top Right label</span>
      </label>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered'
      />
      <label className='label'>
        <span className='label-text-alt'>Bottom Left label</span>
        <span className='label-text-alt'>Bottom Right label</span>
      </label>
    </div>
  );
};

export default FormInput;
