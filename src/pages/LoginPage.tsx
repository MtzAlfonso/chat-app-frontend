import { ChangeEvent, FormEvent, useState } from 'react';

import { Card } from '../components/auth/Card';
import { FormButton } from '../components/auth/FormButton';
import { Form } from '../components/auth/Form';
import { CardImage } from '../components/auth/CardImage';
import { CardTitle } from '../components/auth/CardTitle';
import { FormContainer } from '../components/auth/FormContainer';
import { AuthLayout } from '../layouts/AuthLayout';
import { FormInput } from '../components/auth/FormInput';
import { FormInputIcon } from '../components/auth/FormInputIcon';
import { CardLink } from '../components/auth/CardLink';
import { CardFooter } from '../components/auth/CardFooter';

interface IStateSchema {
  email: string;
  password: string;
  remember: boolean;
}

const initialState: IStateSchema = {
  email: '',
  password: '',
  remember: true,
};

const LoginPage = () => {
  const [form, setForm] = useState(initialState);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <AuthLayout>
      <Card className="animate__animated animate__flipInY">
        <div>
          <CardImage
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <CardTitle>Ingresar</CardTitle>
        </div>
        <Form onSubmit={onSubmit}>
          <FormContainer className="container-input">
            <FormInputIcon className="fas fa-envelope" />
            <FormInput
              required
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={onChange}
            />
          </FormContainer>
          <FormContainer className="container-input">
            <FormInputIcon className="fas fa-key" />
            <FormInput
              required
              type="password"
              placeholder="Password"
              name="password"
              value={form.password}
              onChange={onChange}
            />
          </FormContainer>
          <FormButton type="submit">Iniciar sesión</FormButton>
        </Form>
        <CardFooter>
          <hr />
          No tienes cuenta?
          <CardLink
            to="/auth/register"
          >
            Regístrate
          </CardLink>
        </CardFooter>
      </Card>
    </AuthLayout>
  );
};

export default LoginPage;
