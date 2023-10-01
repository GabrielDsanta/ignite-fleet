import React from 'react';
import { TouchableOpacityProps } from "react-native"
import { Container } from './styles';
import { IconProps } from 'phosphor-react-native';
import theme from '../../theme';

export type IconBoxProps = (props: IconProps) => JSX.Element 

interface ButtonIconProps extends TouchableOpacityProps {
    icon: IconBoxProps;
}

export function ButtonIcon({ icon: Icon, ...rest }: ButtonIconProps) {
  return (
    <Container activeOpacity={0.7} {...rest}>
        <Icon size={24} color={theme.COLORS.BRAND_MID} />
    </Container>
  );
}