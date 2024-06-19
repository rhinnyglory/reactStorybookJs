import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TextField from './TextField';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    label: { control: { type: 'text' } },
    maxLength: { control: { type: "number" } },
    minLength: { control: { type: "number" } },
    placeholder: { control: { type: "text" } },
    size: { control: { type: "number" } }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Name',
    minLength: 3,
    placeholder: "Enter your name",
    size: "large"
  },
};
