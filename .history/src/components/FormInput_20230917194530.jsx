const FormInput = ({ label, name, type }) => {
  return (
    <div className='form-control '>
      <label className='label'>
        <span className='label-text'>What is your name?</span>
      </label>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered '
      />
    </div>
  );
};

export default FormInput;
