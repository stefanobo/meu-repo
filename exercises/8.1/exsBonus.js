const mage = {
   healthPoints: 130,
   intelligence: 45,
   mana: 125,
   damage: undefined,
 };
 
 const warrior = {
   healthPoints: 200,
   strength: 30,
   weaponDmg: 2,
   damage: undefined,
 };
 
 const dragon = {
   healthPoints: 350,
   strength: 50,
   damage: undefined,
 };
 
 const battleMembers = { mage, warrior, dragon };

 const dragonDamage = () => {
   let damage = Math.floor(Math.random() * dragon.strength) + 15;
   return damage;
 }

 const warriorDamage = () => {
    let maxDamage = warrior.strength * warrior.weaponDmg;
    let damage = Math.floor(Math.random() * maxDamage) + warrior.strength;
    return damage;
 }

 const mageDamage = () => {
   let mageSpellEffect = {};
   let maxDamage = mage.intelligence * 2;
   let damage = Math.floor(Math.random() * maxDamage) + mage.intelligence;
   let manaConsumption = 15;

   if (mage.mana < 15) {
      mageSpellEffect.damageDealt = 'Not enough mana.';
      mageSpellEffect.manaSpent = 0;
   } else {
      mageSpellEffect.damageDealt = damage;
      mageSpellEffect.manaSpent = manaConsumption
   }

   return mageSpellEffect;
};

const gameActions = {
   // Crie as HOFs neste objeto.
   warriorTurn: (warriorDamage) => {
      const damage = warriorDamage();
      dragon.healthPoints -= damage;
      warrior.damage = damage;
   },
   mageTurn: (mageDamage) => {
      const mageTurn = mageDamage();
      const damage = mageTurn.damageDealt;
      const manaConsumed = mageTurn.manaSpent;

      dragon.healthPoints -= damage;
      mage.damage = damage;
      mage.mana -= manaConsumed;
   },
   dragonTurn: (dragonDamage) => {
      const damage = dragonDamage();

      warrior.healthPoints -= damage;
      mage.healthPoints -= damage;
      dragon.damage = damage;
   },
   turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());