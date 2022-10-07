import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'widget/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatum veniam quas mollitia optio quaerat eos doloribus repellendus natus dolore! Ipsa sequi cupiditate facilis, voluptates nam dolor, beatae accusamus doloremque porro laudantium cum commodi quae quam vitae impedit iste? Quasi quis nam, tempora doloribus ullam eum totam quam dolor fugit pariatur at odio ipsa doloremque reprehenderit ex magni placeat? Sed optio enim nam repudiandae sequi, facilis asperiores? Quos, labore. Recusandae repellendus commodi unde aperiam a est tempore dolorum vel. Rerum cupiditate maiores assumenda repellat eaque mollitia illum, error laborum expedita! Fuga quia amet modi ipsa itaque quam, pariatur quae earum!',
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatum veniam quas mollitia optio quaerat eos doloribus repellendus natus dolore! Ipsa sequi cupiditate facilis, voluptates nam dolor, beatae accusamus doloremque porro laudantium cum commodi quae quam vitae impedit iste? Quasi quis nam, tempora doloribus ullam eum totam quam dolor fugit pariatur at odio ipsa doloremque reprehenderit ex magni placeat? Sed optio enim nam repudiandae sequi, facilis asperiores? Quos, labore. Recusandae repellendus commodi unde aperiam a est tempore dolorum vel. Rerum cupiditate maiores assumenda repellat eaque mollitia illum, error laborum expedita! Fuga quia amet modi ipsa itaque quam, pariatur quae earum!',
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
