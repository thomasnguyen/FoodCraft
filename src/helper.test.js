import helper from './helper';

// Sluggify Function
test('Sluggify: Thomas Nguyen -> thomas-nguyen', () => {
	expect(helper.sluggify('Thomas Nguyen')).toBe('thomas-nguyen');
});

test('Sluggify: Two spaces', () => {
	expect(helper.sluggify('Pepporoni  Pizza')).toBe('pepporoni-pizza');
});
