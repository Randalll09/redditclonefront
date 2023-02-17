import { useForm } from 'react-hook-form';
import { FormStyle } from '../components/FormStyle';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface ILogin {
  username: string;
  password: string;
}

const Login = () => {
  const { register, handleSubmit } = useForm<ILogin>();
  const onSubmit = async (data: ILogin) => {
    try {
      const res = await axios.post(`/auth/login`, data, {
        withCredentials: true,
      });

      console.log(res);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <FormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="title">Login</p>
        <div>
          <p>User name</p>
          <input {...register('username', { required: true })} />
        </div>
        <div>
          <p>password</p>
          <input {...register('password', { required: true })} />
        </div>
        <button>Login</button>
        <span className="to">
          Not a user? <Link to={'/register'}>Register</Link>{' '}
        </span>
      </form>
    </FormStyle>
  );
};

export default Login;
