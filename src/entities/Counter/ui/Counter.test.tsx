import { screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
    test('Counter render', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
