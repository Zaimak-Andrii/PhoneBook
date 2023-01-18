import { FormInput, FormInputPassword } from '../FormInput';
import { useRegisterMutation } from 'services/auth';
import { useAppToast } from 'hooks/useAppToast';
import { registrationSchema } from '../auth.validation';
import AuthForm from '../AuthForm/AuthForm';

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const fields = [
  {
    name: 'name',
    label: 'Name',
    Component: FormInput,
    placeholder: 'Name',
    type: 'text',
  },
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
  {
    name: 'passwordConfirmation',
    label: 'Confirm password',
    Component: FormInputPassword,
    placeholder: 'Confirm password',
    type: 'password',
  },
];

export function RegistrationForm() {
  const [callRegistration] = useRegisterMutation();
  const toast = useAppToast();

  async function submitHandler({ passwordConfirmation, ...otherData }) {
    try {
      const { user } = await callRegistration(otherData).unwrap();

      toast({
        title: 'Registration success!',
        status: 'success',
        description: `Welcome ${user?.name}!`,
      });
    } catch (error) {
      toast({
        title: 'Registration failed!',
        status: 'error',
        description: 'Something went wrong with registration.',
      });
    }
  }

  return (
    <AuthForm
      id="registration"
      fields={fields}
      buttonLabel="Sign up"
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={registrationSchema}
    />
  );
}
