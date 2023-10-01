import React from "react";

import { Container, Title } from "./styles";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import theme from "../../theme";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const { goBack } = useNavigation();

  const insets = useSafeAreaInsets();
  const paddingTop = insets.top + 42;

  return (
    <Container style={{ paddingTop }}>
      <TouchableOpacity onPress={goBack} activeOpacity={0.7}>
        <ArrowLeft size={24} weight="bold" color={theme.COLORS.BRAND_LIGHT} />
      </TouchableOpacity>

      <Title>{title}</Title>
    </Container>
  );
}
