import { FormEvent } from 'react';

import { Card } from '../components/auth/Card';
import { FormButton } from '../components/auth/FormButton';
import { CardImage } from '../components/auth/CardImage';
import { CardTitle } from '../components/auth/CardTitle';
import { AuthLayout } from '../layouts/AuthLayout';
import { Form } from '../components/auth/Form';
import { FormContainer } from '../components/auth/FormContainer';
import { FormInputIcon } from '../components/auth/FormInputIcon';
import { FormInput } from '../components/auth/FormInput';
import { CardFooter } from '../components/auth/CardFooter';
import { CardLink } from '../components/auth/CardLink';

const RegisterPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <AuthLayout>
      <Card className="animate__animated animate__flipInY">
        <div>
          <CardImage
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <CardTitle>Registro</CardTitle>
        </div>
        <Form onSubmit={onSubmit}>
          <FormContainer>
            <FormInputIcon className="fas fa-user" />
            <FormInput
              required
              type="text"
              placeholder="Nombre"
              // onChange={onchange}
            />
          </FormContainer>
          <FormContainer>
            <FormInputIcon className="fas fa-envelope" />
            <FormInput
              required
              type="email"
              placeholder="Email"
              // onChange={onchange}
            />
          </FormContainer>
          <FormContainer>
            <FormInputIcon className="fas fa-key" />
            <FormInput
              required
              type="password"
              placeholder="Password"
              // onChange={onchange}
            />
          </FormContainer>
          <FormButton type="submit">Crear cuenta</FormButton>
        </Form>
        <CardFooter>
          <hr />
          Ya tienes una cuenta?
          <CardLink to="/auth/login">Inicia sesión</CardLink>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
};

export default RegisterPage;
