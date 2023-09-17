const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className='form-control '>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type={type}
        placeholder='Type here'
        className='input input-bordered '
      />
    </div>
  );
};

export default FormInput;
