import type { Meta, StoryObj } from "@storybook/react-vite";
// import { fn } from 'storybook/test';
import { Button } from "./button";

const meta = {
  title: "Example/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};
