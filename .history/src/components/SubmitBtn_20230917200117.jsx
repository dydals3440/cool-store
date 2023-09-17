import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button type='submit' className='btn btn-primary'>
      {text}
    </button>
  );
};
export default SubmitBtn;
