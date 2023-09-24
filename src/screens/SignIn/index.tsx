import { useState } from "react"
import { Container, Title, Slogan } from "./styles";
import { Button } from "../../components/Button";

import backgroundImageSignIn from "../../assets/background.png"

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Container source={backgroundImageSignIn}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veículos</Slogan>

      <Button isLoading={isLoading} title="Entrar com Google"/>
    </Container>
  );
}
