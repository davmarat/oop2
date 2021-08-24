import Zombie from '../zombie';

test('New Zombie', () => {
  const zombie = {
    name: 'Stubbs',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(new Zombie('Stubbs')).toEqual(zombie);
});

test('Level up with healt zero', () => {
  const zombie = new Zombie('Stubbs');
  zombie.health = 0;

  expect(() => zombie.levelUp()).toThrowError('The player has already died!');
});

test('LevelUp', () => {
  const zombie = new Zombie('Stubbs');
  zombie.levelUp();
  const upperZombie = {
    name: 'Stubbs',
    type: 'Zombie',
    health: 100,
    level: 2,
    attack: 48,
    defence: 12,
  };

  expect(zombie).toEqual(upperZombie);
});

test('Correct damage', () => {
  const zombie = new Zombie('Stubbs');
  zombie.damage(50);
  expect(zombie.health).toEqual(55);
});

test("Damage equates health to zero when it's < 0", () => {
  const zombie = new Zombie('Stubbs');
  zombie.health = 30;
  zombie.damage(200);
  expect(zombie.health).toEqual(0);
});
