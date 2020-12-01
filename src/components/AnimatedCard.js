import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const animatedCss = css`
    opacity: 1;
    transform: translateY(0);
`

const primaryCss = css`
    background-color: #008bf8;
    color: #fff;
`

const StyledCard = styled.div`
 
    opacity: 0;
    transform: translateY(50px);
    transition: 500ms all ease-in-out;
    
    ${props => props.animated && animatedCss}
    ${props => props.primary && primaryCss}
`

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            animated: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => {
                return { animated: true }
            })
        }, this.props.delay)
    }

    render() {
        const { delay = 0, noAnimation, primary, noMargin, big, ...props } = this.props
        return (
            <StyledCard
                animated={this.state.animated}
                delay={delay}
                primary={primary}
                noAnimation={noAnimation}
                big={big}
                noMargin={noMargin}
                {...props}
            />
        )
    }
}

export default Card