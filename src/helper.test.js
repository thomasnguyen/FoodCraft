import helper from './helper';

// Format Time
test('Format Time: formatTime(PT40M) => 40min', () => {
	expect(helper.formatTime('PT30M')).toBe('30 mins');
});

//calcIngredient

// Sluggify Function
test('Sluggify: Thomas Nguyen -> thomas-nguyen', () => {
	expect(helper.sluggify('Thomas Nguyen')).toBe('thomas-nguyen');
});

test('Sluggify: Two spaces', () => {
	expect(helper.sluggify('Pepporoni  Pizza')).toBe('pepporoni-pizza');
});
