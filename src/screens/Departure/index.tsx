import React, { useRef, useState } from "react";

import { TextInput, ScrollView, Alert } from "react-native";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { LicensePlateInput } from "../../components/LicensePlateInput";
import { TextAreaInput } from "../../components/TextAreaInput";
import { Button } from "../../components/Button";
import { licensePlateValidate } from "../../utils/LicensePlateValidate";
import { useRealm } from "../../libs/realm";
import { Historic } from "../../libs/realm/schemas/Historic";
import { useUser } from "@realm/react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function Departure() {
  const realm = useRealm();
  const user = useUser();
  const { goBack } = useNavigation();

  const [description, setDescription] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const descriptionRef = useRef<TextInput>(null);
  const licensePlateRef = useRef<TextInput>(null);

  async function handleDepartureRegister() {
    try {
      if (!licensePlateValidate(licensePlate)) {
        licensePlateRef.current?.focus();
        return Alert.alert(
          "Placa inválida",
          "A placa é inválida, por favor informe a placa correta do veículo."
        );
      }

      if (description.trim().length === 0) {
        descriptionRef.current?.focus();
        return Alert.alert(
          "Finalidade",
          "Por favor informe a finalidade da utilização do veículo."
        );
      }

      setIsLoading(true);

      realm.write(() => {
        realm.create(
          "Historic",
          Historic.generate({
            description,
            license_plate: licensePlate.toUpperCase(),
            user_id: user!.id,
          })
        );
      });

      Alert.alert("Saída", "Saída de veículo registrada com sucesso!");
      goBack();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      Alert.alert("Erro", "Não foi possível registrar a saída do veículo.");
    }
  }

  return (
    <Container>
      <Header title="Saída" />

      <KeyboardAwareScrollView extraHeight={100}>
        <ScrollView>
          <Content>
            <LicensePlateInput
              ref={licensePlateRef}
              onSubmitEditing={() => descriptionRef.current?.focus()}
              placeholder="BRA1234"
              label="Placa do veículo"
              returnKeyType="next"
              onChangeText={setDescription}
            />

            <TextAreaInput
              ref={descriptionRef}
              placeholder="Vou utilizar o veículo para..."
              label="Finalidade"
              onSubmitEditing={handleDepartureRegister}
              returnKeyType="send"
              blurOnSubmit
              onChangeText={setLicensePlate}
            />

            <Button
              isLoading={isLoading}
              onPress={handleDepartureRegister}
              title="Registrar saída"
            />
          </Content>
        </ScrollView>
      </KeyboardAwareScrollView>
    </Container>
  );
}
