import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem sit deserunt maxime quis possimus officiis atque, incidunt consequatur suscipit odit consequuntur earum? Quasi temporibus eveniet tenetur necessitatibus itaque, quaerat sunt.'
  },
  argTypes: {
    size: {
      options: ['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl',],
      control: {
        type: 'inline-radio',
      },
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}
