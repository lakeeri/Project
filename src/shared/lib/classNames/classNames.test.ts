import { classNames } from 'shared/lib/classNames/classNames';

describe('className', () => {
    test('with only first param', () => {
        expect(classNames('someClasses')).toBe('someClasses');
    });
    test('with additional class', () => {
        const example = classNames('someClasses', {}, ['class1', 'class2']);
        const expected = 'someClasses class1 class2';
        expect(example).toBe(expected);
    });
    test('with mods', () => {
        const example = classNames(
            'someClasses',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        );
        const expected = 'someClasses class1 class2 hovered scrollable';
        expect(example).toBe(expected);
    });
    test('with mods false', () => {
        const example = classNames(
            'someClasses',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        );
        const expected = 'someClasses class1 class2 hovered';
        expect(example).toBe(expected);
    });
    test('with mods undefined', () => {
        const example = classNames(
            'someClasses',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        );
        const expected = 'someClasses class1 class2 hovered';
        expect(example).toBe(expected);
    });
});
