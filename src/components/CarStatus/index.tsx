import React from "react";

import { TouchableOpacityProps } from "react-native"
import { Container, IconBox, Message, TextHighlight } from "./styles";
import { Car, Key } from "phosphor-react-native";

import theme from "../../theme";

interface CarStatusProps extends TouchableOpacityProps {
  licensePlate?: string | null;
}

export function CarStatus({ licensePlate = null, ...rest }: CarStatusProps) {
  const Icon = licensePlate ? Car : Key;
  const message = licensePlate ? `Veículo ${licensePlate} em uso. ` : "Nenhum veículo em uso. ";
  const status = licensePlate ? "chegada" : "saída";

  return (
    <Container {...rest}>
      <IconBox>
        <Icon size={32} color={theme.COLORS.BRAND_LIGHT} />
      </IconBox>

      <Message>
        {message}

        <TextHighlight>
          Clique aqui para registar a {status}
        </TextHighlight>
      </Message>
    </Container>
  );
}
