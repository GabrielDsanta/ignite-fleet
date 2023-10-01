import { TouchableOpacity } from "react-native";
import { Container, Greeting, Message, Name, Picture } from "./styles";
import { Power } from "phosphor-react-native"
import { useApp, useUser } from "@realm/react";
import { useSafeAreaInsets } from "react-native-safe-area-context"

import theme from "../../theme";

export function HomeHeader(){
    const user = useUser()
    const app = useApp()
    const insets = useSafeAreaInsets()

    const paddingTop = insets.top + 32;

    function handleLogout(){
        app.currentUser?.logOut()
    }

    return(
        <Container style={{ paddingTop }}>
            <Picture placeholder="L184i9offQof00ayfQay~qj[fQj[" source={{ uri: user.profile.pictureUrl }} />
            <Greeting>
                <Message>
                    Olá
                </Message>

                <Name>
                    {user.profile.name}
                </Name>
            </Greeting>

            <TouchableOpacity onPress={handleLogout}>
                <Power size={32} color={theme.COLORS.GRAY_400} />
            </TouchableOpacity>
        </Container>
    )
}