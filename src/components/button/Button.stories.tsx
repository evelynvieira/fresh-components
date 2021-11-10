import React from 'react'
import Component from './index'
import { Story, Meta } from '@storybook/react'

export default {
    title: 'Components/Button',
    componenet: Component,
} as Meta


export const Button: Story = (args) => (
    <Component onClick={() => console.log('clicked')}>Hello fresh world</Component>
)