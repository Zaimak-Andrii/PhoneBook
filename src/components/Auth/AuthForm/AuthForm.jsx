import { Button, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function AuthForm({
  id,
  onSubmit,
  fields,
  validationSchema,
  initialValues,
  buttonLabel,
}) {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm({
    // Для того щоб, перевірка поля відбувалася при зміні значення поля.
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  return (
    <>
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w="sm"
        autoComplete="off"
        gap={4}
        direction="column"
        mx="auto"
      >
        {fields.map(({ name, label, Component, placeholder, type }) => (
          <Component
            key={name}
            label={label}
            id={`${id}-${name}`}
            placeholder={placeholder}
            type={type}
            {...register(name)}
            error={errors[name]}
            isTouched={touchedFields[name]}
          />
        ))}
        {/* <FormInput
          label="Email"
          id="login-email"
          placeholder="Email"
          type="email"
          {...register('email')}
          error={errors.email}
          isTouched={touchedFields.email}
        />

        <FormInputPassword
          id="login-password"
          label="Password"
          placeholder="Password"
          {...register('password')}
          error={errors.password}
          isTouched={touchedFields.password}
        /> */}

        <Button
          width="100%"
          type="submit"
          colorScheme="facebook"
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </Flex>
    </>
  );
}
