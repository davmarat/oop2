export default class Character {
  constructor(name, type) {
    if (!(name.length >= 2 && name.length <= 10)) {
      throw new Error('Пожалуйста, введите от 2-х до 10-и символов');
    }

    const arrayOfTypes = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (!arrayOfTypes.includes(type)) {
      throw new Error('Неккоректный тип');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('The player has already died!');
    }

    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);

    if (this.health < 0) {
      this.health = 0;
    }
  }
}
