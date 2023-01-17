import { useLoginMutation } from 'services/auth';

export default function LoginPage() {
  const [callLogin] = useLoginMutation();

  return (
    <>
      <button
        onClick={() =>
          callLogin({
            email: 'andriizaimak8@gmail.com',
            password: 'examplepwd12345',
          })
        }
      >
        Login
      </button>
    </>
  );
}
