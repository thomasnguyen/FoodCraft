import helper from './helper';

test('Sluggify: Thomas Nguyen -> thomas-nguyen', () => {
	expect(helper.sluggify('Thomas Nguyen')).toBe('thomas-nguyen');
});
