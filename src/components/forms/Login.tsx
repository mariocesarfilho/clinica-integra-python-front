import React from "react";
import {
  MainContainer,
  LoginCard,
  Header,
  Title,
  Subtitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "./styles";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormInputs } from "../../shcemas/login";
import { zodResolver } from "@hookform/resolvers/zod";

export const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Dados validados e prontos: ", data);
  };

  return (
    <MainContainer>
      <LoginCard>
        <Header>
          <Title>Bem-vindo de volta</Title>
          <Subtitle>Insira suas credenciais para acessar sua conta</Subtitle>
        </Header>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="exemplo@email.com"
              {...register("email")}
              required
            />
            {errors.email && <span>{errors.email.message}</span>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              required
            />
            {errors.email && <span>{errors.password?.message}</span>}
          </FormGroup>

          <Button type="submit">Entrar</Button>
        </Form>
      </LoginCard>
    </MainContainer>
  );
};
