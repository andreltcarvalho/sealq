"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, type LoginFormData } from "./schema";
import {
  Container,
  LoginCard,
  Header,
  Title,
  Subtitle,
  Form,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
  ForgotPasswordLink
} from './page.styles';

export default function ConcursoLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const submitLogin = handleSubmit(async (data) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      console.log("Tentando logar com:", data);
      router.push("/concurso/admin");
    } catch {
      setErrorMessage("E-mail ou senha incorretos. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <Container>
      <LoginCard>
        <Header>
          <Title>Acesso Restrito</Title>
          <Subtitle>Painel da Banca Examinadora</Subtitle>
        </Header>

        <Form onSubmit={submitLogin}>
          {/* Mostra erro geral de login (ex: senha incorreta do backend) */}
          {errorMessage && <ErrorMessage style={{ textAlign: 'center' }}>{errorMessage}</ErrorMessage>}

          <InputGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              $hasError={!!errors.email}
              {...register('email')}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              $hasError={!!errors.password}
              {...register('password')}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </InputGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </SubmitButton>
        </Form>

        <ForgotPasswordLink href="/concurso/recuperar-senha">
          Esqueci minha senha
        </ForgotPasswordLink>
      </LoginCard>
    </Container>
  );
}




