import { 
    LeftSection, 
    NavContainer, 
    RightSection,
    IconWrapper,
    LanguageSelector,
} from './index.styled';

function Navbar() {

    return (
        <NavContainer>
            <LeftSection>
                <IconWrapper></IconWrapper>
                VoiceScript
            </LeftSection>

            <RightSection>
                <LanguageSelector>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                </LanguageSelector>
            </RightSection>
        </NavContainer>
    )
}

export default Navbar
