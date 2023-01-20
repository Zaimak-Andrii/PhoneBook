import { FormInput, FormInputPassword } from '../FormInput';
import { useLoginMutation } from 'services/authAPI';
import { useAppToast } from 'hooks/useAppToast';
import { loginSchema } from '../auth.validation';
import AuthForm from '../AuthForm/AuthForm';
import { useEffect } from 'react';
import { useRef } from 'react';

const initialValues = {
  email: 'dev.andrii.zaimak@gmail.com',
  password: 'qwer1234',
  // email: '',
  // password: '',
};

const fields = [
  {
    name: 'email',
    label: 'Email',
    Component: FormInput,
    placeholder: 'Email',
    type: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    Component: FormInputPassword,
    placeholder: 'Password',
    type: 'password',
  },
];

export default function LoginForm() {
  const [callLogin] = useLoginMutation();
  const toast = useAppToast();
  const ref = useRef(null);

  // async function submitHandler(data) {
  //   try {
  //     const { user } = await callLogin(data).unwrap();

  //     toast({
  //       title: 'Login success!',
  //       status: 'success',
  //       description: `Welcome ${user?.name}!`,
  //     });
  //   } catch (error) {
  //     toast({
  //       title: 'Login failed!',
  //       status: 'error',
  //       description: 'Something went wrong with login.',
  //     });
  //   }
  // }

  async function submitHandler(data) {
    ref.current = callLogin(data);

    try {
      const { user } = await ref.current.unwrap();
      toast({
        title: 'Login success!',
        status: 'success',
        description: `Welcome ${user?.name}!`,
      });
    } catch (error) {
      if (error.status === 400) {
        toast({
          title: 'Login failed!',
          status: 'error',
          description: 'Something went wrong with login.',
        });
      } else if (error.name === 'AbortError') {
        toast({
          status: 'warning',
          description: 'Login has been aboted.',
        });
      }
    }
  }

  useEffect(() => {
    return () => {
      ref.current?.abort();
    };
  }, []);

  return (
    <AuthForm
      id="login"
      fields={fields}
      buttonLabel="Login"
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={loginSchema}
    />
  );
}
