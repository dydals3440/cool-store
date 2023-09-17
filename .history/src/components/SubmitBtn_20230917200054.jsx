import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  return (
    <button type='submit' className='btn btn-primary'>
      {text}
    </button>
  );
};
export default SubmitBtn;
