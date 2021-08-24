import Character from '../character';

test('New Character', () => {
  const character = {
    name: 'Strange',
    type: 'Magician',
    health: 100,
    level: 1,
  };

  expect(new Character('Strange', 'Magician')).toEqual(character);
});

test('Small name', () => {
  expect(() => new Character('X', 'Zombie')).toThrow();
});

test('Large name', () => {
  expect(() => new Character('Itstoolargeee', 'Swordsman')).toThrow();
});

test('Incorrect type', () => {
  expect(() => new Character('Dmitry', 'President')).toThrow();
});
