import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledGradientText = styled.span`
    /* background: ${({ theme: { colors } }) => colors.white}; */
    background-color: #d0dbec;
    font-weight: 900;
    background-image: -webkit-linear-gradient(-70deg, #a2facf, #64acff);
    background-clip: text;
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    z-index: 10;
`

const GradientText = ({ children, ...props }) => {
    return <StyledGradientText {...props}>{children}</StyledGradientText>
}

GradientText.propTypes = {
    children: PropTypes.node
}

export default GradientText
