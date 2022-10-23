import React from "react";

import { HighlightCard } from "../../Components/HighlightCard";

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon
} from "./styles";

export function Dashboard(){
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{ uri: 'https://avatars.githubusercontent.com/u/85348111?v=4' }}
                        />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Arthur</UserName>
                        </User>
                    </UserInfo>
                <Icon name="power" />

                </UserWrapper>
            </Header>

            <HighlightCard />
        </Container>
    )
}