import React, { forwardRef } from "react";

import { TextInputProps, TextInput } from "react-native";
import { Container, Input, Label } from "./styles";

import theme from "../../theme";

interface LicensePlateInputProps extends TextInputProps {
  label: string;
}

const LicensePlateInput = forwardRef<TextInput, LicensePlateInputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <Container>
        <Label>{label}</Label>

        <Input
          ref={ref}
          placeholderTextColor={theme.COLORS.GRAY_400}
          autoCapitalize="characters"
          maxLength={7}
          {...rest}
        />
      </Container>
    );
  }
);

export { LicensePlateInput }
