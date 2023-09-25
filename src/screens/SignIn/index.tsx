import { useEffect, useState } from "react";
import { Container, Title, Slogan } from "./styles";
import { Button } from "../../components/Button";
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from "@env";
import { Alert } from "react-native";
import { Realm, useApp } from "@realm/react";

import backgroundImageSignIn from "../../assets/background.png";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const app = useApp()

  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ["profile", "email"],
  });

  function handleGoogleSignIn() {
    setIsLoading(true);

    googleSignIn().then((response) => {
      if (response.type !== "success") {
        setIsLoading(false);
      }
    });
  }

  useEffect(() => {
    if (response?.type === "success") {
      if (response.authentication?.idToken) {
        const credencials = Realm.Credentials.jwt(
          response.authentication?.idToken
        );

        app.logIn(credencials).catch((error) => {
          console.log(error)
          Alert.alert("Não foi possível conectar-se a sua conta Google");
          setIsLoading(false)
        })
      } else {
        Alert.alert("Não foi possível conectar-se a sua conta Google");
        setIsLoading(false)
      }
    }
  }, [response]);

  return (
    <Container source={backgroundImageSignIn}>
      <Title>Ignite Fleet</Title>

      <Slogan>Gestão de uso de veículos</Slogan>

      <Button
        onPress={handleGoogleSignIn}
        isLoading={isLoading}
        title="Entrar com Google"
      />
    </Container>
  );
}
