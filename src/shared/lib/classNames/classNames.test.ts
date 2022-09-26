import { classNames } from './classNames';

describe('classNames', () => {
    test('First param only', () => {
        expect(classNames('testCl')).toBe('testCl');
    });
    test('2 params', () => {
        expect(classNames('testCl', {}, ['cl1', 'cl2'])).toBe('testCl cl1 cl2');
    });
    test('all params 1 false', () => {
        expect(
            classNames(
                'testCl',
                { hovered: true, scrolled: false },
                ['cl1', 'cl2'],
            ),
        )
            .toBe('testCl cl1 cl2 hovered');
    });
    test('all params 1 undefined', () => {
        expect(classNames('testCl', { hovered: true, scrolled: undefined }, ['cl1', 'cl2'])).toBe('testCl cl1 cl2 hovered');
    });
});
