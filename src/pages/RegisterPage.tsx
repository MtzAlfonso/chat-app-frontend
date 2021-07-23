import Swal from 'sweetalert2';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';

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
import { AuthContext } from '../context/AuthContext';

const initialState: FormRegister = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState(initialState);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    const { name, email, password } = form;

    const ok = await register(name, email, password);

    !ok &&
      Swal.fire({
        title: 'Error',
        icon: 'error',
        text: 'El email ya está registrado',
      });
  };

  const formIsValid = (): boolean => {
    return (
      form.name.length > 3 && form.email.length > 0 && form.password.length > 3
    );
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
              name="name"
              value={form.name}
              onChange={onChange}
            />
          </FormContainer>
          <FormContainer>
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
          <FormContainer>
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
          <FormButton type="submit" disabled={!formIsValid()}>
            Crear cuenta
          </FormButton>
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
