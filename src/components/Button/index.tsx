import { TouchableOpacityProps } from "react-native";
import { Container, Loading, Title } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading: boolean;
}

export function Button({ isLoading = false, title, ...rest }: ButtonProps) {
  return (
    <Container disabled={isLoading} {...rest} activeOpacity={0.7}>
      {isLoading ? (
        <Loading />
      ): (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
