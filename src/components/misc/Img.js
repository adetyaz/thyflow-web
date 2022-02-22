import styled from 'styled-components'

export const HeroImage = styled.img.attrs({
    src: ({theme}) => theme.heroImage,
    alt: "phone"
})