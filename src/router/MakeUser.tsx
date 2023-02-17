import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { FormStyle } from '../components/FormStyle';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Div = styled.div``;

interface IRegister {
  email: string;
  username: string;
  password: string;
}

const MakeUser = () => {
  const { register, handleSubmit } = useForm<IRegister>();
  const navigate = useNavigate();
  const onSubmit = async (data: IRegister) => {
    try {
      const res = await axios.post(`/auth/register`, data);

      console.log(res);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <FormStyle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="title">Register</p>
        <div>
          <p>E-mail</p>
          <input
            {...register('email', { required: true })}
            placeholder="E-mail"
          />
        </div>
        <div>
          <p>User name</p>
          <input
            {...register('username', { required: true })}
            placeholder="User name"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            {...register('password', { required: true })}
            placeholder="Password"
          />
        </div>
        <button>Register</button>
        <span className="info">
          Already a user?
          <Link to={'/login'}>Login</Link>
        </span>
      </form>
    </FormStyle>
  );
};

export default MakeUser;
