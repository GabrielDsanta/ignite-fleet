import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Departure, Info, LicensePlate } from "./styles";
import { Check, ClockClockwise } from "phosphor-react-native";
import theme from "../../theme";

export type PropsParams = {
  id: string;
  licensePlate: string;
  created: string;
  isSync: boolean;
};

interface HistoricCardProps extends TouchableOpacityProps {
  data: PropsParams;
}

export function HistoricCard({ data, ...rest }: HistoricCardProps) {
  return (
    <Container {...rest}>
      <Info>
        <LicensePlate>{data.licensePlate}</LicensePlate>

        <Departure>
            {data.created}
        </Departure>
      </Info>

      {data.isSync ? (
        <Check size={24} color={theme.COLORS.BRAND_LIGHT} />
      ): (
        <ClockClockwise size={24} color={theme.COLORS.GRAY_400} />
      )}
    </Container>
  );
}
