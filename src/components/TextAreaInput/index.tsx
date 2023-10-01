import React, { forwardRef } from "react";

import { TextInputProps, TextInput } from "react-native";
import { Container, Input, Label } from "./styles";

import theme from "../../theme";

interface TextAreaInputProps extends TextInputProps {
  label: string;
}

const TextAreaInput = forwardRef<TextInput, TextAreaInputProps>(({ label, ...rest }, ref) => {
  return (
    <Container>
      <Label>{label}</Label>

      <Input
        ref={ref}
        autoCapitalize="sentences"
        multiline
        placeholderTextColor={theme.COLORS.GRAY_400}
        {...rest}
      />
    </Container>
  );
})

export { TextAreaInput }
