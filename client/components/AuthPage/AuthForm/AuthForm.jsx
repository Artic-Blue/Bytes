import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from '@mantine/hooks';
import {
  TextInput,
  PasswordInput,
  Group,
  Button,
  Paper,
  Text,
  LoadingOverlay,
  Anchor,
  useMantineTheme,
} from '@mantine/core';

import { useUserUpdate } from '../../../context/UserContext';

const AuthenticationForm = (
  noShadow,
  noPadding,
  noSubmit,
  style,
) => {
  const [formType, setFormType] = useState('register');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const theme = useMantineTheme();
  const updateUser = useUserUpdate();
  const navigate = useNavigate();

  const toggleFormType = () => {
    setFormType((current) => (current === 'register' ? 'login' : 'register'));
    setError(null);
  };

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsOfService: true,
    },

    validationRules: {
      firstName: (value) => formType === 'login' || value.trim().length >= 2,
      lastName: (value) => formType === 'login' || value.trim().length >= 2,
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
      confirmPassword: (val, values) => formType === 'login' || val === values.password,
    },

    errorMessages: {
      email: 'Invalid email',
      password: 'Password should contain 1 number, 1 letter and at least 6 characters',
      confirmPassword: "Passwords don't match. Try again",
    },
  });

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError(null);

      const fname = form.getInputProps('firstName').value;
      const lname = form.getInputProps('lastName').value;
      const email = form.getInputProps('email').value;
      const password = form.getInputProps('password').value;

      const result = await axios.post(`/auth/${formType}`, {
        fname, lname, email, password,
      });

      updateUser(result.data.user_id);
      navigate('/shop');
    } catch (err) {
      setError(
        formType === 'register'
          ? 'User with this email already exists'
          : 'User with this email does not exist',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      style={{
        padding: '10px',
        position: 'relative',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        width: '500px',
        ...style,
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <LoadingOverlay visible={loading} />
        {formType === 'register' && (
          <Group grow>
            <TextInput
              data-autofocus
              required
              placeholder="Your first name"
              label="First name"
              {...form.getInputProps('firstName')}
            />

            <TextInput
              required
              placeholder="Your last name"
              label="Last name"
              {...form.getInputProps('lastName')}
            />
          </Group>
        )}

        <TextInput
          mt="md"
          required
          placeholder="Your email"
          label="Email"
          // icon={<EnvelopeClosedIcon />}
          {...form.getInputProps('email')}
        />

        <PasswordInput
          mt="md"
          required
          placeholder="Password"
          label="Password"
          // icon={<LockClosedIcon />}
          {...form.getInputProps('password')}
        />

        {formType === 'register' && (
          <PasswordInput
            mt="md"
            required
            label="Confirm Password"
            placeholder="Confirm password"
            // icon={<LockClosedIcon />}
            {...form.getInputProps('confirmPassword')}
          />
        )}

        {error && (
          <Text color="red" size="sm" mt="sm">
            {error}
          </Text>
        )}

        {!noSubmit && (
          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="gray"
              onClick={toggleFormType}
              size="sm"
            >
              {formType === 'register'
                ? 'Have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>

            <Button color="orange" type="submit">
              {formType === 'register' ? 'Register' : 'Login'}
            </Button>
          </Group>
        )}
      </form>
    </Paper>
  );
};

export default AuthenticationForm;
