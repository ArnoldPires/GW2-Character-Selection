//Core Specs
document.getElementById('guardian').onclick = gwGuard
function gwGuard() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/guardianBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('.coreName').innerHTML = "<span class='guardColors'>" + "Guardian" + "</span>";
  document.getElementById('coreVideo').src = "../video/characters/leonilda.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#8AF7F5";
    }
  //Description
  document.getElementById('coreOneP').innerText = "Guardians are devoted fighters who protect their allies and smite their enemies by drawing from the power of their virtues. True guardians are brilliant tacticians and selfless defenders who know how to empower their allies to achieve victory.";
  document.getElementById('coreTwoP').innerText = "Guardians are devoted fighters. Their profession mechanic are their virtues, which passively provide benefits to the guardian, and can be activated to lose the passive bonus and provide a more powerful effect to nearby allies. Guardians act with conviction when smiting their foes and supporting their allies with their unshakeable faith. As a soldier profession, guardians wear heavy armor.";
  document.getElementById('coreThreeP').innerText = "";
  document.getElementById('coreFourP').innerText = "";
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='guardColors'>" + "Two-handed Greatsword" + "</span> — Offensive melee weapon for dealing high area damage, pulling multiple foes and enhancing allies.";
  document.getElementById('corewTwo').innerHTML = "<span class='guardColors'>" + "Two-handed Hammer" + "</span> — Defensive melee weapon capable of protecting allies with area damage, protection and enemy-warding.";
  document.getElementById('corewThree').innerHTML = "<span class='guardColors'>" + "Two-handed Staff" + "</span> — Supportive weapon that can be used to heal and enhance allies, or ward away enemies.";
  document.getElementById('corewFour').innerHTML = "<span class='guardColors'>" + "Main-hand Mace" + "</span> — Supportive melee weapon for healing allies and blocking attacks.";
  document.getElementById('corewFive').innerHTML = "<span class='guardColors'>" + "Main-hand Scepter" + "</span> — Offensive long-range weapon used to smite and immobilize foes.";
  document.getElementById('corewSix').innerHTML = "<span class='guardColors'>" + "Main-hand Sword" + "</span> — Balanced melee weapon with mobility and projectile defense options.";
  document.getElementById('corewSeven').innerHTML = "<span class='guardColors'>" + "Off-hand Focus" + "</span> — Balanced weapon with damaging abilities and self-defense.";
  document.getElementById('corewEight').innerHTML = "<span class='guardColors'>" + "Off-hand Shield" + "</span> — Defensive weapon that can protect allies with projectile defense, Aegis and protection.";
  document.getElementById('corewNine').innerHTML = "<span class='guardColors'>" + "Off-hand Torch" + "</span> — Offensive weapon for burning enemies and cleansing allies.";
  document.getElementById('corewTen').innerHTML = "<span class='guardColors'>" + "Spear" + "</span> — Offensive mid-range weapon used to pull enemies and deal area damage.";
  document.getElementById('corewEleven').innerHTML = "";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='guardColors'>" + "Zeal" + "</span> — Focuses on increasing damage and applying vulnerability. Enhances greatsword, scepter, and spirit weapon skills.";
  document.getElementById('stTwo').innerHTML = "<span class='guardColors'>" + "Radiance" + "</span> — Focuses on burning, critical hits, and resolution; based on Virtue of Justice. Enhances sword, torch, and signet skills.";
  document.getElementById('stThree').innerHTML = "<span class='guardColors'>" + "Valor" + "</span> — Focuses on blocking and toughness; based on Virtue of Courage. Enhances focus, shield, and meditation skills.";
  document.getElementById('stFour').innerHTML = "<span class='guardColors'>" + "Honor" + "</span> — Focuses on dodging, healing, and protection; based on Virtue of Resolve. Enhances mace, staff, and symbol and shout skills.";
  document.getElementById('stFive').innerHTML = "<span class='guardColors'>" + "Virtues" + "</span> — Focuses on virtues and resolution. Enhances hammer, consecration, and virtue skills.";
  //HOT
  document.querySelector('.hotName').innerHTML = "<span class='guardColors'>" + "Dragonhunter" + "</span>";
  document.getElementById('hotVideo').src = "../../video/characters/leonilda.mp4";
  //Description
  document.getElementById('hotOneP').innerText = '"I will set my trap and wait for them to come."';
  document.getElementById('hotTwoP').innerText = "The Dragonhunter is a ranged, methodical hunter that uses various traps to ensnare their prey while picking them off with arrows of light. Their virtue skills become corporeal and more powerful in exchange for a longer casting time.";
  document.getElementById('hotThreeP').innerHTML = "<span class='guardColors'>" + "Traps" + "</span> — Traps placed on the ground that activate when a target walks over them.";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='guardColors'>" + "Two-handed Longbow" + "</span> — Offensive long-range weapon, used to enhance allies or burn and control enemies (Dragonhunter specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='guardColors'>" + "Dragonhunter" + "</span> — Gains access to longbows, a set of trap skills, and replaces the active virtues with ones that manifest in a physical form.";
  //POF
  document.querySelector('.pofName').innerHTML = "<span class='guardColors'>" + "Firebrand" + "</span>";
  document.getElementById('pofVideo').src = "../../video/characters/leonilda.mp4";
  //Description
  document.getElementById('pofOneP').innerText = '"Let the ancient magics of Vabbi burn away our foes."';
  document.getElementById('pofTwoP').innerText = "Firebrands harness the power of ancient Vabbian tomes to burn away impurities and conquer their foes. Each tome contains raw, powerful magic and must be used with patience and care.";
  document.getElementById('pofThreeP').innerHTML = "<span class='guardColors'>" + "Mantra" + "</span> — Mantras are skills that cast instantly to hinder enemies or aid allies. Mantras have charges and recharge over time.";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='guardColors'>" + "Main-hand Axe" + "</span> — Offensive melee weapon that can pull enemies and inflict conditions on foes. (Firebrand specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='guardColors'>" + "Firebrand" + "</span> — Gains access to axes, a set of mantra skills, and replaces the active virtues with Tomes.";
  //EOD
  document.querySelector('.eodName').innerHTML = "<span class='guardColors'>" + "Willbender" + "</span>";
  document.getElementById('eodVideo').src = "../../video/characters/leonilda.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"I will silence the threat before it can fester."';
  document.getElementById('eodTwoP').innerText = "Willbenders are protectors of the Canthan throne and fated guardians to the Weh no Su. Their sword arm is as strong as their loyalty—unflinching and ruthless. They are known for a swift hand and unmatched swordplay, striking before their foe has time to react.";
  document.getElementById('eodThreeP').innerHTML = "<span class='guardColors'>" + "Physical" + "</span> — Mobility skills that focus on damage and crowd control.";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='guardColors'>" + "Off-hand Sword" + "</span> — Melee weapon with mobility. (Willbender specialization only)";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='guardColors'>" + "Willbender" + "</span> — Gains access to off hand swords, a set of physical skills, and replaces the virtues with ones that have no passive effect, but provide movement abilities when activated.";
}
document.getElementById('revenant').onclick = gwRev;
function gwRev() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/revenantBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('.coreName').innerHTML = "<span class='RevColors'>" + "Revenant" + "</span>";
  document.getElementById('coreVideo').src = "../../video/characters/alissa.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#b50000";
    }
  //Description
  document.getElementById('coreOneP').innerText = "Heavily armored and equipped with the otherworldly powers of the Mists, revenants channel Tyria’s legends to slaughter foes, unleash chaos on the battlefield, and support their allies. This profession is exclusive to Guild Wars 2: Heart of Thorns™, Guild Wars 2: Path of Fire™, and Guild Wars 2: End of Dragons.";
  document.getElementById('coreTwoP').innerText = "Revenants channel the power of the Mists. Their profession mechanic are their Legends, they commune with deceased legendary heroes and villains from Tyria's past, which aid them in battle. Revenants commune with two legends, chanelling only one at a time, swapping between the two while in combat. Addtionally, revenant skills cost energy, a resource that replenishes over time or when switching legends.";
  document.getElementById('coreThreeP').innerText = "As a soldier profession, revenants wear heavy armor.";
  document.getElementById('coreFourP').innerText = "";
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='RevColors'>" + "Main-hand Mace" + "</span> — Inflict various conditions on foes at a medium-close range. Works well with Legendary Demon Stance.";
  document.getElementById('corewTwo').innerHTML = "<span class='RevColors'>" + "Main-hand Sword" + "</span> — Quick and lethal strikes, grants high mobility during combat. Works well with Legendary Assassin Stance.";
  document.getElementById('corewThree').innerHTML = "<span class='RevColors'>" + "Off-hand Axe" + "</span> — Focuses on applying conditions and hindering enemy movement. Works well with Legendary Demon Stance.";
  document.getElementById('corewFour').innerHTML = "<span class='RevColors'>" + "Off-hand Sword" + "</span> — Delivers high burst damage, along with immobilize, chill, and slow. Works well with Legendary Assassin Stance.";
  document.getElementById('corewFive').innerHTML = "<span class='RevColors'>" + "Two-handed Hammer" + "</span> — Functions as a ranged weapon, good for ranged combat, area damage and projectile block. Works well with Legendary Dwarf Stance.";
  document.getElementById('corewSix').innerHTML = "<span class='RevColors'>" + "Two-handed Staff" + "</span> — Supportive weapon with close combat attacks, healing and crowd control. Works well with Legendary Centaur Stance.";
  document.getElementById('corewSeven').innerHTML = "<span class='RevColors'>" + "Off-hand Focus" + "</span> — Balanced weapon with damaging abilities and self-defense.";
  document.getElementById('corewEight').innerHTML = "<span class='RevColors'>" + "Off-hand Shield" + "</span> — Defensive weapon that can protect allies with projectile defense, Aegis and protection.";
  document.getElementById('corewNine').innerHTML = "<span class='RevColors'>" + "Off-hand Torch" + "</span> — Offensive weapon for burning enemies and cleansing allies.";
  document.getElementById('corewTen').innerHTML = "<span class='RevColors'>" + "Underwater Spear" + "</span> — Hybrid approach weapon with varied ranged attacks, can be used as physical and condition-damage. Works with available Aquatic Stances, Legendary Demon Stance, Legendary Assassin Stance and Legendary Dwarf Stance.";
  document.getElementById('corewEleven').innerHTML = "<span class='RevColors'>" + "Underwater Trident" + "</span> — Ranged weapon that inflicts various conditions based on the wielder's legendary stance. Works with available Aquatic Stances, Legendary Demon Stance, Legendary Assassin Stance and Legendary Dwarf Stance.";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='RevColors'>" + "Corruption" + "</span> — Associated with Legendary Demon Stance. Focuses on applying condition damage (torment) and resisting condition damage. Benefits mace.";
  document.getElementById('stTwo').innerHTML = "<span class='RevColors'>" + "Retribution" + "</span> — Associated with Legendary Dwarf Stance. Focuses on reducing incoming strike and condition damage (resolution), and endurance recovery (vigor). Benefits dodging.";
  document.getElementById('stThree').innerHTML = "<span class='RevColors'>" + "Salvation" + "</span> — Associated with Legendary Centaur Stance. Focuses on healing and support. Benefits staff.";
  document.getElementById('stFour').innerHTML = "<span class='RevColors'>" + "Invocation" + "</span> — Focuses on critical strike chance (fury) and invoking legends."
  document.getElementById('stFive').innerHTML = "<span class='RevColors'>" + "Devastation" + "</span> — Associated with Legendary Assassin Stance. Focuses on improving damage to enemies and stealing health (Battle Scars). Benefits dual-wielding.";
  //HOT
  document.querySelector('.hotName').innerHTML = "<span class='RevColors'>" + "Herald" + "</span>";
  document.getElementById('hotVideo').src = "../../video/characters/leonilda.mp4";
  //Description
  document.getElementById('hotOneP').innerText = '"You have a destiny to fulfill."';
  document.getElementById('hotTwoP').innerText = "The Herald invokes the legendary dragon Glint, gaining abilities that allow them to channel restorative energies in order to bolster their allies. These abilities can be maintained indefinitely as long as they have sufficient energy, and they can be stacked to gain multiple effects.";
  document.getElementById('hotThreeP').innerHTML = ""
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='RevColors'>" + "Off-hand Shield" + "</span> — Defensive weapon used to help survivability for you and your allies. Works well with Legendary Dragon Stance. (Herald specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='RevColors'>" + "Herald" + "</span> — Focuses on boon sharing based on the facets of Glint. Gains access to shields and the Legendary Dragon Stance.";
  //POF
  document.querySelector('.pofName').innerHTML = "<span class='RevColors'>" + "Renegade" + "</span>";
  document.getElementById('pofVideo').src = "../../video/characters/alissa.mp4";
  //Description
  document.getElementById('pofOneP').innerText = '"Legions, fall in!"';
  document.getElementById('pofTwoP').innerText = "The Renegade channels the power of the legendary charr Kalla Scorchrazor, gaining abilities that help them control the battlefield. Summon warband members from the Mists to bolster your allies or crush your enemies.";
  document.getElementById('pofThreeP').innerHTML = "";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='RevColors'>" + "Two-handed Short bow" + "</span> — Inflict conditions and damage on foes at long-medium range. Works well with Legendary Renegade Stance. (Renegade specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='RevColors'>" + "Renegade" + "</span> — Commands members of the warband of Kalla Scorchrazor. Gains access to short bows and the Legendary Renegade Stance.";
  //EOD
  document.querySelector('.eodName').innerHTML = "<span class='RevColors'>" + "Vindicator" + "</span>";
  document.getElementById('eodVideo').src = "../../video/characters/leonilda.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"Once, we fought each other... Now we unite against a common enemy."'
  document.getElementById('eodTwoP').innerText = "Channel the Luxon and Kurzick heroes Archemorus and Saint Viktor to assault your enemies and protect your allies. Instead of dodging, you leap high into the air, crashing down to devastate your foes."
   document.getElementById('eodThreeP').innerHTML = "";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='RevColors'>" + "Two-handed Greatsword" + "</span> — Delivers high damage to multiple targets, with vulnerability and chill. Works well with Legendary Alliance Stance. (Vindicator specialization only)"
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='RevColors'>" + "Vindicator" + "</span> — Uses the twin legends for the Legendary Alliance Stance, and wields a Greatsword. Has only one dodge."
}
document.getElementById('warrior').onclick = gwWar
function gwWar() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/warriorBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('.coreName').innerHTML = "<span class='warColors'>" + "Warrior" + "</span>"
  document.getElementById('coreVideo').src="../../video/characters/dieselVan.mp4"
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#c2a056";
    }
  //Description
  document.getElementById('coreOneP').innerText = "Warriors are masters of weaponry who rely on speed, strength, toughness, and heavy armor to survive in battle. Adrenaline fuels their offensive power—the longer warriors stay in a fight, the more dangerous they become."
  document.getElementById('coreTwoP').innerText = "Warriors are masters of physical combat. Their profession mechanic is adrenaline, a resource gained through the glory of combat that warriors then use to fuel a powerful burst attack unique to each of the plethora of weapons that they can wield."
  document.getElementById('coreThreeP').innerText = "These masters of arms face their enemies head on, their formidable battle presence inspires their allies, while they are always looking for the next enemy to pound into dust. Like other soldier professions, warriors wear heavy armor."
  document.getElementById('coreFourP').innerText = "Warriors also have the highest selection of weapons to choose from compared to other professions, giving a good variety of play-styles to choose from."
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='warColors'>" + "Two-handed Greatsword" + "</span> — Sweeping, brutal attacks that carry the greatsword's momentum from foe to foe."
  document.getElementById('corewTwo').innerHTML = "<span class='warColors'>" + "Two-handed Hammer" + "</span> — Pound the ground with area of effect attacks that can stagger a group of enemies."
  document.getElementById('corewThree').innerHTML = "<span class='warColors'>" + "Two-handed Longbow" + "</span> — Massive fire damage used to keep hordes of enemies at bay from afar."
  document.getElementById('corewFour').innerHTML = "<span class='warColors'>" + "Two-handed Rifle" + "</span> — Unleash powerful ranged attacks against a single target."
  document.getElementById('corewFive').innerHTML = "<span class='warColors'>" + "Main-hand Axe" + "</span> — Able to quickly build up adrenaline and deliver powerful, high-damage attacks."
  document.getElementById('corewSix').innerHTML = "<span class='warColors'>" + "Main-hand Mace" + "</span> — Mainly a defensive weapon, the mace can also leave enemies vulnerable to further blows."
  document.getElementById('corewSeven').innerHTML = "<span class='warColors'>" + "Main-hand Sword" + "</span> — Quick and mobile attacks, with many opportunities to cause bleeding."
  document.getElementById('corewEight').innerHTML = "<span class='warColors'>" + "Off-hand Axe" + "</span> — Can be used to strike with both weapons simultaneously or storm with a whirling attack."
  document.getElementById('corewNine').innerHTML = "<span class='warColors'>" + "Off-hand Mace" + "</span> — Used to crush the armor of a foe or stun several enemies in front of you by slamming it on the ground."
  document.getElementById('corewTen').innerHTML = "<span class='warColors'>" + "Off-hand Shield" + "</span> — Used to bash foes or block incoming attacks."
  document.getElementById('corewEleven').innerHTML = "<span class='warColors'>" + "Off-hand Sword" + "</span> — Can be thrown at enemies or used to block and retaliate."
  document.getElementById('corewTwelve').innerHTML = "<span class='warColors'>" + "Off-hand Warhorn" + "</span> — Grants boons to allies, facilitating mobility."
  document.getElementById('corewThirteen').innerHTML = "<span class='warColors'>" + "Harpoon gun" + "</span> — Long-range mechanical weapon that inflicts various conditions."
  document.getElementById('corewFourteen').innerHTML = "<span class='warColors'>" + "Spear" + "</span> — Close-range aquatic weapon with several multi-hit attacks."
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='warColors'>" + "Strength" + "</span> — Focuses on dodging, physical (utility) skills and brute force. Enhances greatsword, hammer and physical skills."
  document.getElementById('stTwo').innerHTML = "<span class='warColors'>" + "Arms" + "</span> — Focused on critical hits and condition damage. Enhances sword and signet skills, as well as dual-wielding (i.e. off-hand)."
  document.getElementById('stThree').innerHTML = "<span class='warColors'>" + "Defense" + "</span> — Focuses on damage mitigation, stability and crowd control. Enhances shield, mace and stance skills."
  document.getElementById('stFour').innerHTML = "<span class='warColors'>" + "Tactics" + "</span> — Specializes in supporting allies via burst and shout abilities. Enhances warhorn and shout skills."
  document.getElementById('stFive').innerHTML = "<span class='warColors'>" + "Discipline" + "</span> — Focuses on improving adrenaline gain and weapon swapping. Enhances axe, longbow, rifle, harpoon gun, banners and burst skills."
  //HOT
  document.querySelector('.hotName').innerHTML = "<span class='warColors'>" + "Berserker" + "</span>"
  document.getElementById('hotVideo').src = "../../video/characters/dieselVan.mp4"
  //Description
  document.getElementById('hotOneP').innerText = '"Rage. Fire. Destruction!"'
  document.getElementById('hotTwoP').innerText = "Embrace your primal side and enter berserk mode to become an avatar of fire and destruction. Deal high damage but be careful that your recklessness doesn't result in an early grave."
  document.getElementById('hotThreeP').innerHTML = "<span class='warColors'>" + "Rage" + "</span> — Utility skills that deal direct damage and control and increase the duration of the berserker's profession mechanic, berserk mode."
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='warColors'>" + "Off-hand Torch" + "</span> — Reckless weapon of destruction; can even light warriors themselves ablaze, to become mobile fire fields. (Berserker specialization only)"
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='warColors'>" + "Berserker" + "</span> — Gains access to torches, a set of rage skills and berserk mode, which replaces the standard burst skills with primal bursts."
  //POF
  document.querySelector('.pofName').innerHTML = "<span class='warColors'>" + "Spellbreaker" + "</span>"
  document.getElementById('pofVideo').src = "../../video/characters/dieselVan.mp4"
  //Description
  document.getElementById('pofOneP').innerText = '"I counter your magics!"'
  document.getElementById('pofTwoP').innerText = "Act with precision and intent to strike at the very weave of magic to cut down your foe's enchantments while disrupting their ability to cast spells. Utilize the Full Counter skill to absorb attacks and retaliate with devastating force."
  document.getElementById('pofThreeP').innerHTML = "<span class='warColors'>" + "Meditations" + "</span> — Focus on crowd control, supporting the spellbreaker, and removing boons from enemies."
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='warColors'>" + "Main-hand Dagger" + "</span> — Fast attacks to take down your enemies, slow them or disable them. (Spellbreaker specialization only)"
  document.getElementById('pofWTwo').innerHTML = "<span class='warColors'>" + "Off-hand Dagger" + "</span> — Strike your enemies when they are off guard or reflect incoming projectiles. (Spellbreaker specialization only)"
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='warColors'>" + "Spellbreaker" + "</span> — Gains ability to wield double daggers, a set of meditation skills and the class mechanic Full Counter."
  //EOD
  document.querySelector('.eodName').innerHTML = "<span class='warColors'>" + "Bladesworn" + "</span>"
  document.getElementById('eodVideo').src = "../../video/characters/dieselVan.mp4"
  //Description
  document.getElementById('eodOneP').innerText = '"Concentrate and execute."'
  document.getElementById('eodTwoP').innerText = "Dedicated to the art of wielding the dangerous Canthan gunsaber, Bladesworn employ the meditative Dragon Trigger technique to strike down their foes with devastating slashes and point-blank blasts."
  document.getElementById('eodThreeP').innerHTML = "<span class='warColors'>" + "Armament" + "</span> — Focus on recharges Ammunition skill, supporting bladesworn's Dragon Trigger and flow."
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='warColors'>" + "Off-hand Pistol" + "</span> — Quick close combat shots that revolve around ammunition management. (Bladesworn specialization only)"
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='warColors'>" + "Bladesworn" + "</span> — Gains access to off-hand pistols, a set of armament skills and the class mechanic Dragon Slash."
}
document.getElementById('engineer').onclick = gwEngi;
function gwEngi() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/engineerBackground2.jpg)";
  document.querySelector('body').style.backgroundPosition = "top";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.coreName').innerHTML = "<span class='engiColors'>" + "Engineer" + "</span>";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('video').src="../../video/characters/rambro.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#ce7f4b";
    }
  document.getElementById('coreOneP').innerText = "Engineers are technological and alchemical masterminds. Their profession mechanic is their tool belt, a second set of skills providing engineers with a plethora of options ensuring they always have the right tool for the job.";
  document.getElementById('coreTwoP').innerText = "They employ turrets, grenades, elixirs, gadgets and even wield their own Engineering Kits as weapons to overcome their enemies. ";
  document.getElementById('coreThreeP').innerText = "Engineers don't have access to weapon swap during combat, instead they can freely swap between kits with no cooldown. Depending on which kit you swap too, determinds what kind of skills you will have access too.";
  document.getElementById('coreFourP').innerText = "As an adventurer profession, engineers wear medium armor.";
  //Weapons
  document.getElementById('corewOne').innerHTML = "Two-handed Rifle — Blast foes out of the way or jump on them with a powerful jump attack. Rifles provide the engineer with the ability to manipulate their position as well as the opponent. With a quick interrupt, piercing ranged shots and a short-ranged bleed to deter foes who come too close, this weapon best suits the engineer who prefers to stay mobile.";
  document.getElementById('corewTwo').innerHTML = "Main-hand Pistol — Poison, bleed or confuse enemies with variety of ranged shots. Pistols allow the engineer to quickly stack a variety of damaging conditions in a short amount of time. This weapon is ideal for engineers who like to focus on condition damage.";
  document.getElementById('corewThree').innerHTML = "Off-hand Pistol — Spread sticky glue on the ground or fire a jet of flames from your pistol, providing further condition damage and the option of immobilizing foes.";
  document.getElementById('corewFour').innerHTML = "Off-hand Shield — Provides protection from ranged and melee attacks and can be used to push foes back with a magnetic pulse. Can also be thrown like a boomerang for a 2-hit ranged attack. Good for engineers who value defense over pure offense while wielding a pistol, sword, or mace";
  document.getElementById('corewFive').innerHTML = "Under water Harpoon gun — Ranged weapon suitable for controlling foes.";
  document.getElementById('corewSix').innerHTML = "";
  document.getElementById('corewSeven').innerHTML = "";
  document.getElementById('corewEight').innerHTML = "";
  document.getElementById('corewNine').innerHTML = "";
  document.getElementById('corewTen').innerHTML = "";
  document.getElementById('corewEleven').innerHTML = "";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "Explosives — Focuses on damage increase, dodging, vulnerability, and Explosions, including bombs, grenades, and mines. May enhance the Bomb Kit and the Grenade Kit.";
  document.getElementById('stTwo').innerHTML = "Firearms — Focuses on critical hits and conditions, especially bleeding and burning. May enhance pistol, rifle, harpoon gun, and Flamethrower skills.";
  document.getElementById('stThree').innerHTML = "Inventions — Focuses on healing, defense, and cleansing conditions. May enhance shield and turret skills.";
  document.getElementById('stFour').innerHTML = "Alchemy — Focuses on gaining boons and support. May enhance elixir and Med Kit skills.";
  document.getElementById('stFive').innerHTML = "Tools — Focuses on tool belt skills and endurance. May enhance gadget and Tool Kit skills.";
  //HOT
  document.querySelector('.hotName').innerHTML = "Scrapper";
  document.getElementById('hotVideo').src = "../../video/characters/rambro.mp4";
  //Description
  document.getElementById('hotOneP').innerText = "'I'll patch you right on up'";
  document.getElementById('hotTwoP').innerText = "You can aid multiple allies in large-scale battles with massive area-of-effect skills, healing and providing superspeed and other necessary boons. They are also adept at crowd control.";
  document.getElementById('hotThreeP').innerHTML = "Wells — Scrappers can use gyros to surround themselves with mobile wells that follow them around, either aiding allies or harming enemies.";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "Two-handed Hammer — Focuses on aoe damage, can reflect projectiles, evade, block, and disrupt opponents, perfect for a bruiser playstyle. (Scrapper specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "Scrapper — Focuses on combat durability through barrier, gives access to hammer, wells, and replaces the fifth tool belt skill with Function Gyro, which can revive allies and finish foes on its own.";
  //POF
  document.querySelector('.pofName').innerHTML = "Holosmith";
  document.getElementById('pofVideo').src = "../../video/characters/rambro.mp4";
  //Description
  document.getElementById('pofOneP').innerText = "'Burnin' up!'";
  document.getElementById('pofTwoP').innerText = "Use your Photon Forge to generate weapons of pure, blinding light, cauterizing your enemies—but be careful not to use these weapons for too long, or you'll overheat.";
  document.getElementById('pofThreeP').innerHTML = "Exceed — Powerful holographic weapons and tools created using solidified sunlight, or hard light, that benefit from the amount of accumulated heat in the Photon Forge.";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "Main-hand Sword — Cut through enemies' defenses, launch blades of concentrated light that bleed them, or jump at them with the speed of light while gaining quickness. Sword skills gain bonus effects based on your current heat level. (Holosmith specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "Holosmith — Enables the Photon Forge, which replaces the fifth tool belt skill and harnesses sunlight to create holographic weapons to cauterize enemies while storing Heat. Gives access to mainhand sword and Exceed skills, both benefiting from stored Heat.";
  //EOD
  document.querySelector('.eodName').innerHTML = "Mechanist";
  document.getElementById('eodVideo').src = "../../video/characters/rambro.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"All systems go. Mech cleared for launch!"';
  document.getElementById('eodTwoP').innerText = "The mechanist is an innovator and master of jade tech, battling alongside a mech of their own creation. Customize your mech and use it to crush your enemies—together, you're unstoppable";
  document.getElementById('eodThreeP').innerHTML = "Signets — Signets grant passive effects while equipped, and produce a powerful effect at the mechanists or the mechs location when activated. The passive effect is lost while the signet recharges.";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "Main-hand Mace — Smash your targets with heavy blows confusing them and applying barrier to allies, leap towards your foes, or launch a exploding fist that stuns the first target it hits. (Mechanist specialization only)";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "Mechanist — Enables the Jade Mech CJ-1 with Mech Commands which replace tool belt skills, gives access to mace and signets.";
}
document.getElementById('ranger').onclick = gwRan;
function gwRan() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/rangerBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.coreName').innerHTML = "Ranger";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('video').src="../../video/characters/noire.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#94c34a";
    }
  //Description
  document.getElementById('coreOneP').innerText = "Rangers are defenders of nature. Their profession mechanic is their loyal pets, animal companions that rangers tame and train. ";
  document.getElementById('coreTwoP').innerText = "Rangers and their pets fight as one, wielding the power of nature to empower their allies, enduring combat with their wilderness survival skills, concealing traps anticipating fights, and overwhelming their enemies with the strength of the pack. ";
  document.getElementById('coreThreeP').innerText = "As an adventurer profession, rangers wear medium armor.";
  document.getElementById('coreFourP').innerText = "";
  //Weapons
  document.getElementById('corewOne').innerHTML = "Two-handed Greatsword — A brute force, heavy-damage weapon with emphasis on countering and evasion.";
  document.getElementById('corewTwo').innerHTML = "Two-handed Longbow — Powerful, long-range weapon used for Rapid Fire strikes and AoE barrages.";
  document.getElementById('corewThree').innerHTML = "Two-handed Short bow — Quick skirmishing weapon relying on movement, positioning, and conditions for quick kills.";
  document.getElementById('corewFour').innerHTML = "Main-hand Axe — Medium ranged throwing weapon which can ricochet off a target or can toss a cluster of axes.";
  document.getElementById('corewFive').innerHTML = "Main-hand Sword — Mobile melee strikes which can be used to distance the ranger from the target or surprise them from behind.";
  document.getElementById('corewSix').innerHTML = "Off-hand Axe — Enter a stance to reflect incoming strikes or throw the axe for a boomerang effect.";
  document.getElementById('corewSeven').innerHTML = "Off-hand Dagger — Used as a crippling ranged attack, or a quick poisonous stab for melee.";
  document.getElementById('corewEight').innerHTML = "Off-hand Torch — Throw the torch at enemies for burning damage, or light areas on fire";
  document.getElementById('corewNine').innerHTML = "Off-hand Warhorn — Used to deal damage over time or buff allies.";
  document.getElementById('corewTen').innerHTML = "Under water Harpoon gun — Use ranged attacks to strike multiple foes and makes use of the underwater environment.";
  document.getElementById('corewEleven').innerHTML = "Under water Spear — Keep foes at bay with close range spear stabs and swipes.";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "Marksmanship — Focuses on power damage and starting fights with burst damage. May enhance longbow and harpoon gun, and signet skills.";
  document.getElementById('stTwo').innerHTML = "Skirmishing — Focuses on critical hits for both power and condition damage, and enhances weapon swapping. May enhance sword, short bow, and trap skills.";
  document.getElementById('stThree').innerHTML = "Wilderness Survival — Focuses on defence, protection from conditions, and inflicting conditions. May enhance torch and dagger, and survival skills.";
  document.getElementById('stFour').innerHTML = "Nature Magic — Focuses on support through healing and boon generation. May enhance warhorn and spirit skills.";
  document.getElementById('stFive').innerHTML = "Beastmastery — Focuses on improving your pets, their beast skill, and pet swapping. May enhance greatsword, axe, and command skills.";
  //HOT
  document.querySelector('.hotName').innerHTML = "Druid";
  document.getElementById('hotVideo').src = "../../video/characters/noire.mp4";
  //Description
  document.getElementById('hotOneP').innerText = '"The stars, earth, and sky above will heal us"';
  document.getElementById('hotTwoP').innerText = "Druids utilize the power of nature and the stars above to heal their allies, using glyph skills to channel powerful boons and protective utilities.";
  document.getElementById('hotThreeP').innerHTML = "By generating your astral force, you can channel your Celestial Avatar form.";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "Two-handed Staff — A support oriented long range weapon. (Druid specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "";
  //POF
  document.querySelector('.pofName').innerHTML = "Soulbeast";
  document.getElementById('pofVideo').src = "../../video/characters/noire.mp4";
  //Description
  document.getElementById('pofOneP').innerText = '"Two hearts fighting as one"';
  document.getElementById('pofTwoP').innerText = "Soulbeasts gain the ability to merge with their pet, channeling their power and the ability to use their beast skills. One with your pet, you are fierce in melee-focused combat.";
  document.getElementById('pofThreeP').innerHTML = "";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "Main-hand Dagger — A swift melee weapon designed to overwhelm with conditions. (Soulbeast specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "Druid is an elite specialization for the ranger that focuses on glyph skills and adds a new astral force mechanic that allows them to become a celestial avatar. It also allows the ranger to use a staff.";
  //EOD
  document.querySelector('.eodName').innerHTML = "Untamed";
  document.getElementById('eodVideo').src = "../../video/characters/noire.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"Unleashed, unbound—the rage of the Echovald Forest lives in us."';
  document.getElementById('eodTwoP').innerText = "The Untamed share a primal bond with nature through their pet, juggling control of raw power back and forth to defeat foes—your pet uses debilitating nature-based skills to weaken enemies, then relinquishes that power to you for the final strike.";
  document.getElementById('eodThreeP').innerHTML = "";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "Two-handed Hammer — A melee weapon, made to control the enemies. (Untamed specialization only)";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "Untamed — Focuses on greater pet control, gives access to hammer, cantrip skills, and the ability to enter Unleashed.";
}
document.getElementById('thief').onclick = gwThief
function gwThief() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/thiefBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.coreName').innerHTML = "Thief";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('video').src="../../video/characters/eveingaura.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#89676d";
    }
  //Description
  document.getElementById('coreOneP').innerText = "Thieves are masters of shadows and assassination. Their profession mechanics are Steal and initiative.";
  document.getElementById('coreTwoP').innerText = "With Steal, thieves teleport to their target and create a makeshift weapon inspired by that enemy to gain the upper hand. Initiative, on the other hand, makes their weapon skills have no recharge whatsoever and instead each skill costs a certain amount of initiative to cast.";
  document.getElementById('coreThreeP').innerText = " Thieves are elusive and hard to catch, teleporting through the shadows by shadowstepping.";
  document.getElementById('coreFourP').innerText = "They are experts in stealth, becoming fully invisible to then surprise their enemies with a powerful Stealth Attack unique to each of their weapons. As an adventurer profession, thieves wear medium armor.";
  //Weapons
  document.getElementById('corewOne').innerHTML = "Two-handed Short bow — Ranged mobile weapon with AoE attacks and shadow step ability.";
  document.getElementById('corewTwo').innerHTML = "Main-hand Dagger — Jump on a foe, attack quickly and inflict many conditions on them.";
  document.getElementById('corewThree').innerHTML = "Main-hand Pistol — Ranged shots from pistols leave enemies vulnerable to following attacks.";
  document.getElementById('corewFour').innerHTML = "Main-hand Sword — Flanking sword attacks provide extra evasiveness and control enemy movement.";
  document.getElementById('corewFive').innerHTML = "Off-hand Dagger — Gives access to skills that allow quick escape by crippling the enemy or vanishing from sight.";
  document.getElementById('corewSix').innerHTML = "Off-hand Pistol — Ranged weapon used to quickly retreat or to daze the target by a shot to the head or a pistol whip.";
  document.getElementById('corewSeven').innerHTML = "Under water Harpoon gun — Bombard enemy with ranged attacks - good for kiting with several attacks that cause movement impairment.";
  document.getElementById('corewEight').innerHTML = "Under water Spear — Rapid melee counterattacks spiced up with the usual thief tricks.";
  document.getElementById('corewNine').innerHTML = "";
  document.getElementById('corewTen').innerHTML = "";
  document.getElementById('corewEleven').innerHTML = "";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "Deadly Arts — Focuses on use of poisoned, and exploiting enemies with low health. Enhances dagger skills.";
  document.getElementById('stTwo').innerHTML = "Critical Strikes — Focuses on critical hits and critical damage. Enhances pistol, harpoon gun, and signet skills.";
  document.getElementById('stThree').innerHTML = "Shadow Arts — Focuses on stealth and blinding enemies. Enhances venom and deception skills.";
  document.getElementById('stFour').innerHTML = "Acrobatics — Focuses on dodging, mobility, and healing. Enhances sword and spear.";
  document.getElementById('stFive').innerHTML = "Trickery — Focuses on stealing and managing initiative. Enhances trick and steal skills.";
  //HOT
  document.querySelector('.hotName').innerHTML = "Daredevil";
  document.getElementById('hotVideo').src = "../../video/characters/eveingaura.mp4";
  //Description
  document.getElementById('hotOneP').innerText = '"Try keepin up with this!"';
  document.getElementById('hotTwoP').innerText = "The daredevil is a master of maneuverability and mobility. Gaining an additional endurance bar and the ability to customize their dodge roll, the daredevil has the tools to become a melee whirlwind of destruction.";
  document.getElementById('hotThreeP').innerHTML = "";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "Two-handed Staff — Gain access to regular area-of-effect melee damage. (Daredevil specialization only)";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "Daredevil — Gains access to staves, a set of physical skills, replace the steal mechanic with swipe, increased endurance bar, and additional dodge mechanics.";
  //POF
  document.querySelector('.pofName').innerHTML = "Deadeye";
  document.getElementById('pofVideo').src = "../../video/characters/eveingaura.mp4";
  //Description
  document.getElementById('pofOneP').innerText = '"One shot, one kill."';
  document.getElementById('pofTwoP').innerText = "Take aim with your rifle and mark your enemies for assassination. The deadeye specializes in long-range combat and picking off enemies before they can get close. By marking your target, you gain increased damage against them as you wear them down before taking the final shot.";
  document.getElementById('pofThreeP').innerHTML = "";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "Two-handed Rifle — Long ranged sniper that rewards carefully calculated shots with a powerful burst. (Deadeye specialization only)";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "Deadeye — Gains access to rifles, a set of cantrips, and replace the steal mechanic with deadeye's marks.";
  //EOD
  document.querySelector('.eodName').innerHTML = "Specter";
  document.getElementById('eodVideo').src = "../../video/characters/eveingaura.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"Join me—the darkness is our ally."';
  document.getElementById('eodTwoP').innerText = "The Specter harnesses the power of shadow magic to debilitate enemies and preserve the health of allies. Enter Shadow Shroud to link with friends and fuel the destruction of your foes.";
  document.getElementById('eodThreeP').innerHTML = "";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "Main-hand Scepter — Support an ally with boons and barrier or inflict conditions on an enemy. (Specter specialization only)";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "Specter — Gains access to scepters, a set of wells, replace the steal mechanic with siphon, and gain shadow shroud.";
}
document.getElementById('elementalist').onclick = gwEle
function gwEle() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/elementalistBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.coreName').innerHTML = "Elementalist";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('video').src="../../video/characters/rayden.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#f77a84";
    }
  //Description
  document.getElementById('coreOneP').innerText = "Elementalists are master spell casters. Their profession mechanic are their four attunements: Fire, Water, Air, and Earth. They wield each of these elements to defeat their foes and aid their allies. ";
  document.getElementById('coreTwoP').innerText = "Albeit lacking in defense, elementalists are very versatile and have access to a plethora of skills, as attuning to the different elements also changes their skills.";
  document.getElementById('coreThreeP').innerText = "Elementalists can also manifest the elements as conjured weapons with their own set of skills, or as allied elementals to aid them in combat. As a scholar profession, elementalists wear light armor.";
  document.getElementById('coreFourP').innerText = "";
  //Weapons
  document.getElementById('corewOne').innerHTML = "";
  document.getElementById('corewTwo').innerHTML = "";
  document.getElementById('corewThree').innerHTML = "";
  document.getElementById('corewFour').innerHTML = "";
  document.getElementById('corewFive').innerHTML = "";
  document.getElementById('corewSix').innerHTML = "";
  document.getElementById('corewSeven').innerHTML = "";
  document.getElementById('corewEight').innerHTML = "";
  document.getElementById('corewNine').innerHTML = "";
  document.getElementById('corewTen').innerHTML = "";
  document.getElementById('corewEleven').innerHTML = "";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "";
  document.getElementById('stTwo').innerHTML = "";
  document.getElementById('stThree').innerHTML = "";
  document.getElementById('stFour').innerHTML = "";
  document.getElementById('stFive').innerHTML = "";
  //HOT
  document.querySelector('.hotName').innerHTML = "Tempest";
  document.getElementById('hotVideo').src = "../../video/characters/rayden.mp4";
  //Description
  document.getElementById('hotOneP').innerText = '"My power, coming to a peak!"';
  document.getElementById('hotTwoP').innerText = "Overload your attunements to become a powerful singularity of elemental power, shouting at your foes and calling upon your allies. The tempest specialization offers superior area-of-effect abilities in exchange for a slower attunement rotation.";
  document.getElementById('hotThreeP').innerHTML = "";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "";
  //POF
  document.querySelector('.pofName').innerHTML = "Weaver";
  document.getElementById('pofVideo').src = "../../video/characters/rayden.mp4";
  //Description
  document.getElementById('pofOneP').innerText = '"The elements are twisting, turning—melding as one."';
  document.getElementById('pofTwoP').innerText = "The weaver gains the ability to combine two different elements and wield them simultaneously. Rapidly combine elements to create a fast and dynamic fighting style that dances in and out of combat.";
  document.getElementById('pofThreeP').innerHTML = "";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "";
  //EOD
  document.querySelector('.eodName').innerHTML = "Catalyst";
  document.getElementById('eodVideo').src = "../../video/characters/rayden.mp4";
  //Description
  document.getElementById('eodOneP').innerText = '"My power shapes and bends the world."';
  document.getElementById('eodTwoP').innerText = "Master cutting-edge Canthan technology to wield nature's forces with scientific precision. Imbue the elements into your jade-tech Sphere, creating wells of immense power.";
  document.getElementById('eodThreeP').innerHTML = "";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "";
}
document.getElementById('mesmer').onclick = gwMes
function gwMes() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/mesmerBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.coreName').innerHTML = "Mesmer";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('video').src="../video/characters/thugMagic.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#d532ff";
    }
  //Description
  document.getElementById('coreOneP').innerText = "";
  document.getElementById('coreTwoP').innerText = "";
  document.getElementById('coreThreeP').innerText = "";
  document.getElementById('coreFourP').innerText = "";
  //Weapons
  document.getElementById('corewOne').innerHTML = "";
  document.getElementById('corewTwo').innerHTML = "";
  document.getElementById('corewThree').innerHTML = "";
  document.getElementById('corewFour').innerHTML = "";
  document.getElementById('corewFive').innerHTML = "";
  document.getElementById('corewSix').innerHTML = "";
  document.getElementById('corewSeven').innerHTML = "";
  document.getElementById('corewEight').innerHTML = "";
  document.getElementById('corewNine').innerHTML = "";
  document.getElementById('corewTen').innerHTML = "";
  document.getElementById('corewEleven').innerHTML = "";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "";
  document.getElementById('stTwo').innerHTML = "";
  document.getElementById('stThree').innerHTML = "";
  document.getElementById('stFour').innerHTML = "";
  document.getElementById('stFive').innerHTML = "";
  //HOT
  document.querySelector('.hotName').innerHTML = "";
  document.getElementById('hotVideo').src = "";
  //Description
  document.getElementById('hotOneP').innerText = '""';
  document.getElementById('hotTwoP').innerText = "";
  document.getElementById('hotThreeP').innerHTML = "";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "";
  //POF
  document.querySelector('.pofName').innerHTML = "";
  document.getElementById('pofVideo').src = "";
  //Description
  document.getElementById('pofOneP').innerText = '""';
  document.getElementById('pofTwoP').innerText = "";
  document.getElementById('pofThreeP').innerHTML = "";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "";
  //EOD
  document.querySelector('.eodName').innerHTML = "";
  document.getElementById('eodVideo').src = "";
  //Description
  document.getElementById('eodOneP').innerText = '""';
  document.getElementById('eodTwoP').innerText = "";
  document.getElementById('eodThreeP').innerHTML = "";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "";
}
document.getElementById('necromancer').onclick = gwNecro
function gwNecro() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/necromancerBackground.jpg)"; 
  document.querySelector('body').style.backgroundPosition = "center";
  document.querySelector('body').style.backgroundSize = "cover";
  document.querySelector('.coreName').innerHTML = "Necromancer";
  document.querySelector('.classShowCase').style.display = "flex";
  document.querySelector('.specDescription').style.display = "unset";
  document.querySelector('video').src="../video/characters/lordNecomongr.mp4";
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#3e8e72";
    }
  //Description
  document.getElementById('coreOneP').innerText = "";
  document.getElementById('coreTwoP').innerText = "";
  document.getElementById('coreThreeP').innerText = "";
  document.getElementById('coreFourP').innerText = "";
  //Weapons
  document.getElementById('corewOne').innerHTML = "";
  document.getElementById('corewTwo').innerHTML = "";
  document.getElementById('corewThree').innerHTML = "";
  document.getElementById('corewFour').innerHTML = "";
  document.getElementById('corewFive').innerHTML = "";
  document.getElementById('corewSix').innerHTML = "";
  document.getElementById('corewSeven').innerHTML = "";
  document.getElementById('corewEight').innerHTML = "";
  document.getElementById('corewNine').innerHTML = "";
  document.getElementById('corewTen').innerHTML = "";
  document.getElementById('corewEleven').innerHTML = "";
  document.getElementById('corewTwelve').innerHTML = "";
  document.getElementById('corewThirteen').innerHTML = "";
  document.getElementById('corewFourteen').innerHTML = "";
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "";
  document.getElementById('stTwo').innerHTML = "";
  document.getElementById('stThree').innerHTML = "";
  document.getElementById('stFour').innerHTML = "";
  document.getElementById('stFive').innerHTML = "";
  //HOT
  document.querySelector('.hotName').innerHTML = "";
  document.getElementById('hotVideo').src = "";
  //Description
  document.getElementById('hotOneP').innerText = '""';
  document.getElementById('hotTwoP').innerText = "";
  document.getElementById('hotThreeP').innerHTML = "";
  //Weapon
  document.getElementById('hotWOne').innerHTML = "";
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "";
  //POF
  document.querySelector('.pofName').innerHTML = "";
  document.getElementById('pofVideo').src = "";
  //Description
  document.getElementById('pofOneP').innerText = '""';
  document.getElementById('pofTwoP').innerText = "";
  document.getElementById('pofThreeP').innerHTML = "";
  //Weapon
  document.getElementById('pofWOne').innerHTML = "";
  document.getElementById('pofWTwo').innerHTML = "";
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "";
  //EOD
  document.querySelector('.eodName').innerHTML = "";
  document.getElementById('eodVideo').src = "";
  //Description
  document.getElementById('eodOneP').innerText = '""';
  document.getElementById('eodTwoP').innerText = "";
  document.getElementById('eodThreeP').innerHTML = "";
  //Weapon
  document.getElementById('eodWOne').innerHTML = "";
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "";
}