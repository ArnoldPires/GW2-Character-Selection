//Core Specs
document.getElementById('guardian').onclick = gwGuard
function gwGuard() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/guardianBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('.coreName').innerHTML = "<span class='guardColors'>" + "Guardian" + "</span>"
  document.getElementById('coreVideo').src = "../video/characters/leonilda.mp4"
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#8AF7F5";
    }
  //Description
  document.getElementById('coreOneP').innerText = "Guardians are devoted fighters who protect their allies and smite their enemies by drawing from the power of their virtues. True guardians are brilliant tacticians and selfless defenders who know how to empower their allies to achieve victory."
  document.getElementById('coreTwoP').innerText = "Guardians are devoted fighters. Their profession mechanic are their virtues, which passively provide benefits to the guardian, and can be activated to lose the passive bonus and provide a more powerful effect to nearby allies. Guardians act with conviction when smiting their foes and supporting their allies with their unshakeable faith. As a soldier profession, guardians wear heavy armor."
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='guardColors'>" + "Greatsword" + "</span> — Offensive melee weapon for dealing high area damage, pulling multiple foes and enhancing allies."
  document.getElementById('corewTwo').innerHTML = "<span class='guardColors'>" + "Hammer" + "</span> — Defensive melee weapon capable of protecting allies with area damage, protection and enemy-warding."
  document.getElementById('corewThree').innerHTML = "<span class='guardColors'>" + "Staff" + "</span> — Supportive weapon that can be used to heal and enhance allies, or ward away enemies."
  document.getElementById('corewFour').innerHTML = "<span class='guardColors'>" + "Main-hand Mace" + "</span> — Supportive melee weapon for healing allies and blocking attacks."
  document.getElementById('corewFive').innerHTML = "<span class='guardColors'>" + "Main-hand Scepter" + "</span> — Offensive long-range weapon used to smite and immobilize foes."
  document.getElementById('corewSix').innerHTML = "<span class='guardColors'>" + "Main-hand Sword" + "</span> — Balanced melee weapon with mobility and projectile defense options."
  document.getElementById('corewSeven').innerHTML = "<span class='guardColors'>" + "Off-hand Focus" + "</span> — Balanced weapon with damaging abilities and self-defense."
  document.getElementById('corewEight').innerHTML = "<span class='guardColors'>" + "Off-hand Shield" + "</span> — Defensive weapon that can protect allies with projectile defense, Aegis and protection."
  document.getElementById('corewNine').innerHTML = "<span class='guardColors'>" + "Off-hand Torch" + "</span> — Offensive weapon for burning enemies and cleansing allies."
  document.getElementById('corewTen').innerHTML = "<span class='guardColors'>" + "Spear" + "</span> — Offensive mid-range weapon used to pull enemies and deal area damage."
  document.getElementById('corewEleven').innerHTML = "<span class='guardColors'>" + "Trident" + "</span> — Supportive long-range weapon with projectile defense, area damage, healing and a sinking ability."
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='guardColors'>" + "Zeal" + "</span> — Focuses on increasing damage and applying vulnerability. Enhances greatsword, scepter, and spirit weapon skills."
  document.getElementById('stTwo').innerHTML = "<span class='guardColors'>" + "Radiance" + "</span> — Focuses on burning, critical hits, and resolution; based on Virtue of Justice. Enhances sword, torch, and signet skills."
  document.getElementById('stThree').innerHTML = "<span class='guardColors'>" + "Valor" + "</span> — Focuses on blocking and toughness; based on Virtue of Courage. Enhances focus, shield, and meditation skills."
  document.getElementById('stFour').innerHTML = "<span class='guardColors'>" + "Honor" + "</span> — Focuses on dodging, healing, and protection; based on Virtue of Resolve. Enhances mace, staff, and symbol and shout skills."
  document.getElementById('stFive').innerHTML = "<span class='guardColors'>" + "Virtues" + "</span> — Focuses on virtues and resolution. Enhances hammer, consecration, and virtue skills."
  //HOT
  document.querySelector('.hotName').innerHTML = "<span class='guardColors'>" + "Dragonhunter" + "</span>"
  document.getElementById('hotVideo').src = "../video/characters/leonilda.mp4"
  //Description
  document.getElementById('hotOneP').innerText = '"I will set my trap and wait for them to come."'
  document.getElementById('hotTwoP').innerText = "The Dragonhunter is a ranged, methodical hunter that uses various traps to ensnare their prey while picking them off with arrows of light. Their virtue skills become corporeal and more powerful in exchange for a longer casting time."
  document.getElementById('hotThreeP').innerHTML = "<span class='guardColors'>" + "Traps" + "</span> — Traps placed on the ground that activate when a target walks over them."
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='guardColors'>" + "Longbow" + "</span> — Offensive long-range weapon, used to enhance allies or burn and control enemies (Dragonhunter specialization only)"
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='guardColors'>" + "Dragonhunter" + "</span> — Gains access to longbows, a set of trap skills, and replaces the active virtues with ones that manifest in a physical form."
  //POF
  document.querySelector('.pofName').innerHTML = "<span class='guardColors'>" + "Firebrand" + "</span>"
  document.getElementById('pofVideo').src = "../video/characters/leonilda.mp4"
  //Description
  document.getElementById('pofOneP').innerText = '"Let the ancient magics of Vabbi burn away our foes."'
  document.getElementById('pofTwoP').innerText = "Firebrands harness the power of ancient Vabbian tomes to burn away impurities and conquer their foes. Each tome contains raw, powerful magic and must be used with patience and care."
  document.getElementById('pofThreeP').innerHTML = "<span class='guardColors'>" + "Mantra" + "</span> — Mantras are skills that cast instantly to hinder enemies or aid allies. Mantras have charges and recharge over time."
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='guardColors'>" + "Axe" + "</span> — Offensive melee weapon that can pull enemies and inflict conditions on foes. (Firebrand specialization only)"
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='guardColors'>" + "Firebrand" + "</span> — Gains access to axes, a set of mantra skills, and replaces the active virtues with Tomes."
  //EOD
  document.querySelector('.eodName').innerHTML = "<span class='guardColors'>" + "Willbender" + "</span>"
  document.getElementById('eodVideo').src = "../video/characters/leonilda.mp4"
  //Description
  document.getElementById('eodOneP').innerText = '"I will silence the threat before it can fester."'
  document.getElementById('eodTwoP').innerText = "Willbenders are protectors of the Canthan throne and fated guardians to the Weh no Su. Their sword arm is as strong as their loyalty—unflinching and ruthless. They are known for a swift hand and unmatched swordplay, striking before their foe has time to react."
  document.getElementById('eodThreeP').innerHTML = "<span class='guardColors'>" + "Physical" + "</span> — Mobility skills that focus on damage and crowd control."
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='guardColors'>" + "Off-hand Sword" + "</span> — Melee weapon with mobility. (Willbender specialization only)"
  //Specialization Trait
  document.getElementById('eodStOne').innerHTML = "<span class='guardColors'>" + "Willbender" + "</span> — Gains access to off hand swords, a set of physical skills, and replaces the virtues with ones that have no passive effect, but provide movement abilities when activated."
}
document.getElementById('revenant').onclick = gwRev
function gwRev() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/revenantBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('.coreName').innerHTML = "<span class='RevColors'>" + "Revenant" + "</span>"
  document.getElementById('coreVideo').src = "../../video/characters/alissa.mp4"
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#b50000";
    }
  //Description
  document.getElementById('coreOneP').innerText = "Heavily armored and equipped with the otherworldly powers of the Mists, revenants channel Tyria’s legends to slaughter foes, unleash chaos on the battlefield, and support their allies. This profession is exclusive to Guild Wars 2: Heart of Thorns™, Guild Wars 2: Path of Fire™, and Guild Wars 2: End of Dragons"
  document.getElementById('coreTwoP').innerText = "Revenants channel the power of the Mists. Their profession mechanic are their Legends, they commune with deceased legendary heroes and villains from Tyria's past, which aid them in battle. Revenants commune with two legends, chanelling only one at a time, swapping between the two while in combat. Addtionally, revenant skills cost energy, a resource that replenishes over time or when switching legends."
  document.getElementById('coreThreeP').innerText = "As a soldier profession, revenants wear heavy armor."
  //Weapons
  document.getElementById('corewOne').innerHTML = "<span class='RevColors'>" + "Main-hand Mace" + "</span> — Inflict various conditions on foes at a medium-close range. Works well with Legendary Demon Stance."
  document.getElementById('corewTwo').innerHTML = "<span class='RevColors'>" + "Main-hand Sword" + "</span> — Quick and lethal strikes, grants high mobility during combat. Works well with Legendary Assassin Stance."
  document.getElementById('corewThree').innerHTML = "<span class='RevColors'>" + "Off-hand Axe" + "</span> — Focuses on applying conditions and hindering enemy movement. Works well with Legendary Demon Stance."
  document.getElementById('corewFour').innerHTML = "<span class='RevColors'>" + "Off-hand Sword" + "</span> — Delivers high burst damage, along with immobilize, chill, and slow. Works well with Legendary Assassin Stance."
  document.getElementById('corewFive').innerHTML = "<span class='RevColors'>" + "Hammer" + "</span> — Functions as a ranged weapon, good for ranged combat, area damage and projectile block. Works well with Legendary Dwarf Stance."
  document.getElementById('corewSix').innerHTML = "<span class='RevColors'>" + "Staff" + "</span> — Supportive weapon with close combat attacks, healing and crowd control. Works well with Legendary Centaur Stance."
  document.getElementById('corewSeven').innerHTML = "<span class='RevColors'>" + "Off-hand Focus" + "</span> — Balanced weapon with damaging abilities and self-defense."
  document.getElementById('corewEight').innerHTML = "<span class='RevColors'>" + "Off-hand Shield" + "</span> — Defensive weapon that can protect allies with projectile defense, Aegis and protection."
  document.getElementById('corewNine').innerHTML = "<span class='RevColors'>" + "Off-hand Torch" + "</span> — Offensive weapon for burning enemies and cleansing allies."
  document.getElementById('corewTen').innerHTML = "<span class='RevColors'>" + "Underwater Spear" + "</span> — Hybrid approach weapon with varied ranged attacks, can be used as physical and condition-damage. Works with available Aquatic Stances, Legendary Demon Stance, Legendary Assassin Stance and Legendary Dwarf Stance."
  document.getElementById('corewEleven').innerHTML = "<span class='RevColors'>" + "Underwater Trident" + "</span> — Ranged weapon that inflicts various conditions based on the wielder's legendary stance. Works with available Aquatic Stances, Legendary Demon Stance, Legendary Assassin Stance and Legendary Dwarf Stance."
  //Specialization Traits
  document.getElementById('stOne').innerHTML = "<span class='RevColors'>" + "Corruption" + "</span> — Associated with Legendary Demon Stance. Focuses on applying condition damage (torment) and resisting condition damage. Benefits mace."
  document.getElementById('stTwo').innerHTML = "<span class='RevColors'>" + "Retribution" + "</span> — Associated with Legendary Dwarf Stance. Focuses on reducing incoming strike and condition damage (resolution), and endurance recovery (vigor). Benefits dodging."
  document.getElementById('stThree').innerHTML = "<span class='RevColors'>" + "Salvation" + "</span> — Associated with Legendary Centaur Stance. Focuses on healing and support. Benefits staff."
  document.getElementById('stFour').innerHTML = "<span class='RevColors'>" + "Invocation" + "</span> — Focuses on critical strike chance (fury) and invoking legends."
  document.getElementById('stFive').innerHTML = "<span class='RevColors'>" + "Devastation" + "</span> — Associated with Legendary Assassin Stance. Focuses on improving damage to enemies and stealing health (Battle Scars). Benefits dual-wielding."
  //HOT
  document.querySelector('.hotName').innerHTML = "<span class='RevColors'>" + "Herald" + "</span>"
  document.getElementById('hotVideo').src = "../../video/characters/leonilda.mp4"
  //Description
  document.getElementById('hotOneP').innerText = '"You have a destiny to fulfill."'
  document.getElementById('hotTwoP').innerText = "The Herald invokes the legendary dragon Glint, gaining abilities that allow them to channel restorative energies in order to bolster their allies. These abilities can be maintained indefinitely as long as they have sufficient energy, and they can be stacked to gain multiple effects."
  //Weapon
  document.getElementById('hotWOne').innerHTML = "<span class='RevColors'>" + "Off-hand Shield" + "</span> — Defensive weapon used to help survivability for you and your allies. Works well with Legendary Dragon Stance. (Herald specialization only)"
  //Specialization Trait
  document.getElementById('hotStOne').innerHTML = "<span class='RevColors'>" + "Herald" + "</span> — Focuses on boon sharing based on the facets of Glint. Gains access to shields and the Legendary Dragon Stance."
  //POF
  document.querySelector('.pofName').innerHTML = "<span class='RevColors'>" + "Renegade" + "</span>"
  document.getElementById('pofVideo').src = "../../video/characters/alissa.mp4"
  //Description
  document.getElementById('pofOneP').innerText = '"Legions, fall in!"'
  document.getElementById('pofTwoP').innerText = "The Renegade channels the power of the legendary charr Kalla Scorchrazor, gaining abilities that help them control the battlefield. Summon warband members from the Mists to bolster your allies or crush your enemies."
  //Weapon
  document.getElementById('pofWOne').innerHTML = "<span class='RevColors'>" + "Short bow" + "</span> — Inflict conditions and damage on foes at long-medium range. Works well with Legendary Renegade Stance. (Renegade specialization only)"
  //Specialization Trait
  document.getElementById('pofStOne').innerHTML = "<span class='RevColors'>" + "Renegade" + "</span> — Commands members of the warband of Kalla Scorchrazor. Gains access to short bows and the Legendary Renegade Stance."
  //EOD
  document.querySelector('.eodName').innerHTML = "<span class='RevColors'>" + "Vindicator" + "</span>"
  document.getElementById('eodVideo').src = "../../video/characters/leonilda.mp4"
  //Description
  document.getElementById('eodOneP').innerText = '"Once, we fought each other... Now we unite against a common enemy."'
  document.getElementById('eodTwoP').innerText = "Channel the Luxon and Kurzick heroes Archemorus and Saint Viktor to assault your enemies and protect your allies. Instead of dodging, you leap high into the air, crashing down to devastate your foes."
  //Weapon
  document.getElementById('eodWOne').innerHTML = "<span class='RevColors'>" + "Greatsword" + "</span> — Delivers high damage to multiple targets, with vulnerability and chill. Works well with Legendary Alliance Stance. (Vindicator specialization only)"
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
  document.getElementById('corewOne').innerHTML = "<span class='warColors'>" + "Greatsword" + "</span> — Sweeping, brutal attacks that carry the greatsword's momentum from foe to foe."
  document.getElementById('corewTwo').innerHTML = "<span class='warColors'>" + "Hammer" + "</span> — Pound the ground with area of effect attacks that can stagger a group of enemies."
  document.getElementById('corewThree').innerHTML = "<span class='warColors'>" + "Longbow" + "</span> — Massive fire damage used to keep hordes of enemies at bay from afar."
  document.getElementById('corewFour').innerHTML = "<span class='warColors'>" + "Rifle" + "</span> — Unleash powerful ranged attacks against a single target."
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
document.getElementById('engineer').onclick = gwEngi
function gwEngi() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/engineerBackground2.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('.coreName').innerHTML = "<span class='engiColors'>" + "Engineer" + "</span>"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/rambro.mp4"
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#ce7f4b";
    }
  //Description
  document.getElementById('coreOneP').innerText = "Warriors are masters of weaponry who rely on speed, strength, toughness, and heavy armor to survive in battle. Adrenaline fuels their offensive power—the longer warriors stay in a fight, the more dangerous they become."
  document.getElementById('coreTwoP').innerText = "Warriors are masters of physical combat. Their profession mechanic is adrenaline, a resource gained through the glory of combat that warriors then use to fuel a powerful burst attack unique to each of the plethora of weapons that they can wield."
  document.getElementById('coreThreeP').innerText = "These masters of arms face their enemies head on, their formidable battle presence inspires their allies, while they are always looking for the next enemy to pound into dust. Like other soldier professions, warriors wear heavy armor."
  //Weapons
  document.getElementById('corewOne').innerHTML = "Greatsword — Sweeping, brutal attacks that carry the greatsword's momentum from foe to foe."
  document.getElementById('corewTwo').innerHTML = "Hammer — Pound the ground with area of effect attacks that can stagger a group of enemies."
  document.getElementById('corewThree').innerHTML = "Longbow — Massive fire damage used to keep hordes of enemies at bay from afar."
  document.getElementById('corewFour').innerHTML = "Rifle — Unleash powerful ranged attacks against a single target."
  document.getElementById('corewFive').innerHTML = "Main-hand Axe — Able to quickly build up adrenaline and deliver powerful, high-damage attacks."
  document.getElementById('corewSix').innerHTML = "Main-hand Mace — Mainly a defensive weapon, the mace can also leave enemies vulnerable to further blows."
  document.getElementById('corewSeven').innerHTML = "Main-hand Sword — Quick and mobile attacks, with many opportunities to cause bleeding."
  document.getElementById('corewEight').innerHTML = "Off-hand Axe — Can be used to strike with both weapons simultaneously or storm with a whirling attack."
  document.getElementById('corewNine').innerHTML = "Off-hand Mace — Used to crush the armor of a foe or stun several enemies in front of you by slamming it on the ground."
  document.getElementById('corewTen').innerHTML = "Off-hand Shield — Used to bash foes or block incoming attacks."
  document.getElementById('corewEleven').innerHTML = "Off-hand Sword — Can be thrown at enemies or used to block and retaliate."
  document.getElementById('corewTwelve').innerHTML = "Off-hand Warhorn — Grants boons to allies, facilitating mobility."
  document.getElementById('corewThirteen').innerHTML = "Harpoon gun — Long-range mechanical weapon that inflicts various conditions."
  document.getElementById('corewFourteen').innerHTML = "Spear — Close-range aquatic weapon with several multi-hit attacks."
  //Specialization Trait
  document.getElementById('pOne').innerText = "Masters of mechanical mayhem, engineers love to tinker with explosives, elixirs, and all manner of hazardous gadgets. They support their allies with alchemic weaponry, deploy ingenious inventions, or lay waste to foes with a wide array of mines, bombs, and grenades."
  document.getElementById('pTwo').innerText = "Engineers are technological and alchemical masterminds. Their profession mechanic is their tool belt, a second set of skills providing engineers with a plethora of options ensuring they always have the right tool for the job."
  document.getElementById('pThree').innerText = "They employ turrets, grenades, elixirs, gadgets and even wield their own Engineering Kits as weapons to overcome their enemies. As an adventurer profession, engineers wear medium armor."
  document.getElementById('pmOne').innerHTML = "Explosives — Focuses on damage increase, dodging, vulnerability, and Explosions, including bombs, grenades, and mines. May enhance the Bomb Kit and the Grenade Kit."
  document.getElementById('pmTwo').innerHTML = "Firearms — Focuses on critical hits and conditions, especially bleeding and burning. May enhance pistol, rifle, harpoon gun, and Flamethrower skills."
  document.getElementById('pmThree').innerHTML = "Inventions — Focuses on healing, defense, and cleansing conditions. May enhance shield and turret skills."
  document.getElementById('pmFour').innerHTML = "Alchemy — Focuses on gaining boons and support. May enhance elixir and Med Kit skills."
  document.getElementById('pmFive').innerHTML = "Tools — Focuses on tool belt skills and endurance. May enhance gadget and Tool Kit skills."
  //HOT
  document.querySelector('.hotName').innerText = ""
  document.querySelector('.hotName').style.color = ""
  document.querySelector('.hotVideo').src = ""
  //Description
  document.getElementById('hotOneP').innerText = ""
  document.getElementById('hotTwoP').innerText = ""
  document.getElementById('hotThreeP').innerText = ""
  //Weapon
  document.getElementById('hotWOne').innerText = ""
  //Specialization Trait
  document.getElementById('hotWOne').innerText = ""
  //POF
  document.querySelector('.pofName').innerText = ""
  document.querySelector('.pofName').style.color = ""
  document.querySelector('.hotVideo').src = ""
  //Description
  document.getElementById('pofOneP').innerText = ""
  document.getElementById('pofTwoP').innerText = ""
  document.getElementById('pofThreeP').innerText = ""
  //Weapon
  document.getElementById('pofWOne').innerText = ""
  //Specialization Trait
  document.getElementById('pofWOne').innerText = ""
  //EOD
  document.querySelector('.eodName').innerText = ""
  document.querySelector('.eodName').style.color = ""
  document.querySelector('.eodVideo').src = ""
  //Description
  document.getElementById('eodOneP').innerText = ""
  document.getElementById('eodTwoP').innerText = ""
  document.getElementById('eodThreeP').innerText = ""
  //Weapon
  document.getElementById('eodWOne').innerText = ""
  //Specialization Trait
  document.getElementById('eodWOne').innerText = ""
}
document.getElementById('ranger').onclick = gwRan
function gwRan() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/rangerBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('.coreName').innerHTML = "Ranger"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/noire.mp4"
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#94c34a";
    }
  //Description
  //Weapon
  //Specialization Traits
  document.getElementById('pOne').innerText = "Rangers rely on a keen eye, a steady hand, and the power of nature itself. Unparalleled survivalists with traps, nature spirits, and a stable of loyal pets at their command, rangers can adapt to any situation."
  document.getElementById('pTwo').innerText = "Rangers are defenders of nature. Their profession mechanic is their loyal pets, animal companions that rangers tame and train. "
  document.getElementById('pThree').innerText = " Rangers and their pets fight as one, wielding the power of nature to empower their allies, enduring combat with their wilderness survival skills, concealing traps anticipating fights, and overwhelming their enemies with the strength of the pack. As an adventurer profession, rangers wear medium armor."
  document.getElementById('pmOne').innerHTML = "Marksmanship — Focuses on power damage and starting fights with burst damage. May enhance longbow and harpoon gun, and signet skills."
  document.getElementById('pmTwo').innerHTML = "Skirmishing — Focuses on critical hits for both power and condition damage, and enhances weapon swapping. May enhance sword, short bow, and trap skills."
  document.getElementById('pmThree').innerHTML = "Wilderness Survival — Focuses on defence, protection from conditions, and inflicting conditions. May enhance torch and dagger, and survival skills."
  document.getElementById('pmFour').innerHTML = "Nature Magic — Focuses on support through healing and boon generation. May enhance warhorn and spirit skills."
  document.getElementById('pmFive').innerHTML = "Beastmastery — Focuses on improving your pets, their beast skill, and pet swapping. May enhance greatsword, axe, and command skills."
  //HOT
  document.querySelector('.hotName').innerHTML = ""
  document.querySelector('.hotName').style.color = ""
  document.querySelector('.hotVideo').src = ""
  //Description
  document.getElementById('hotOneP').innerText = ""
  document.getElementById('hotTwoP').innerText = ""
  document.getElementById('hotThreeP').innerText = ""
  //Weapon
  document.getElementById('hotWOne').innerText = ""
  //Specialization Trait
  document.getElementById('hotWOne').innerText = ""
  //POF
  document.querySelector('.pofName').innerHTML = ""
  document.querySelector('.pofName').style.color = ""
  document.querySelector('.hotVideo').src = ""
  //Description
  document.getElementById('pofOneP').innerText = ""
  document.getElementById('pofTwoP').innerText = ""
  document.getElementById('pofThreeP').innerText = ""
  //Weapon
  document.getElementById('pofWOne').innerText = ""
  //Specialization Trait
  document.getElementById('pofWOne').innerText = ""
  //EOD
  document.querySelector('.eodName').innerHTML = ""
  document.querySelector('.eodName').style.color = ""
  document.querySelector('.eodVideo').src = ""
  //Description
  document.getElementById('eodOneP').innerText = ""
  document.getElementById('eodTwoP').innerText = ""
  document.getElementById('eodThreeP').innerText = ""
  //Weapon
  document.getElementById('eodWOne').innerText = ""
  //Specialization Trait
  document.getElementById('eodWOne').innerText = ""
}
document.getElementById('thief').onclick = gwThief
function gwThief() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/thiefBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('.coreName').innerHTML = "Thief"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/eveingaura.mp4"
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#89676d";
    }
  //Description
  //Weapon
  //Specialization Traits
  document.getElementById('pOne').innerText = "Experts at stealth and surprise, thieves move through the shadows, vanish into thin air, or steal items from their opponents and use them as weapons. Thieves practice an agile, acrobatic fighting style, which makes them very hard to hit."
  document.getElementById('pTwo').innerText = "Thieves are masters of shadows and assassination. Their profession mechanics are Steal and initiative. With Steal, thieves teleport to their target and create a makeshift weapon inspired by that enemy to gain the upper hand."
  document.getElementById('pThree').innerText = " Initiative, on the other hand, makes their weapon skills have no recharge whatsoever and instead each skill costs a certain amount of initiative to cast. Thieves are elusive and hard to catch, teleporting through the shadows by shadowstepping. "
  document.getElementById('pFour').innerText = "They are experts in stealth, becoming fully invisible to then surprise their enemies with a powerful Stealth Attack unique to each of their weapons. As an adventurer profession, thieves wear medium armor."
  document.getElementById('pmOne').innerHTML = "Deadly Arts — Focuses on use of poisoned, and exploiting enemies with low health. Enhances dagger skills."
  document.getElementById('pmTwo').innerHTML = "Critical Strikes — Focuses on critical hits and critical damage. Enhances pistol, harpoon gun, and signet skills."
  document.getElementById('pmThree').innerHTML = "Shadow Arts — Focuses on stealth and blinding enemies. Enhances venom and deception skills."
  document.getElementById('pmFour').innerHTML = "Acrobatics — Focuses on dodging, mobility, and healing. Enhances sword and spear."
  document.getElementById('pmFive').innerHTML = "Trickery — Focuses on stealing and managing initiative. Enhances trick and steal skills."
  //HOT
  document.querySelector('.hotName').innerHTML = ""
  document.querySelector('.hotName').style.color = ""
  document.querySelector('.hotVideo').src = ""
  //Description
  document.getElementById('hotOneP').innerText = ""
  document.getElementById('hotTwoP').innerText = ""
  document.getElementById('hotThreeP').innerText = ""
  //Weapon
  document.getElementById('hotWOne').innerText = ""
  //Specialization Trait
  document.getElementById('hotWOne').innerText = ""
  //POF
  document.querySelector('.pofName').innerHTML = ""
  document.querySelector('.pofName').style.color = ""
  document.querySelector('.hotVideo').src = ""
  //Description
  document.getElementById('pofOneP').innerText = ""
  document.getElementById('pofTwoP').innerText = ""
  document.getElementById('pofThreeP').innerText = ""
  //Weapon
  document.getElementById('pofWOne').innerText = ""
  //Specialization Trait
  document.getElementById('pofWOne').innerText = ""
  //EOD
  document.querySelector('.eodName').innerHTML = ""
  document.querySelector('.eodName').style.color = ""
  document.querySelector('.eodVideo').src = ""
  //Description
  document.getElementById('eodOneP').innerText = ""
  document.getElementById('eodTwoP').innerText = ""
  document.getElementById('eodThreeP').innerText = ""
  //Weapon
  document.getElementById('eodWOne').innerText = ""
  //Specialization Trait
  document.getElementById('eodWOne').innerText = ""
}
document.getElementById('elementalist').onclick = gwEle
function gwEle() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/elementalistBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('.coreName').innerHTML = "Elementalist"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/rayden.mp4"
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#f77a84";
    }
  //Description
  //Weapon
  //Specialization Traits
  document.getElementById('pOne').innerText = "Elementalists are multifaceted spellcasters who channel elemental forces, making fire, air, earth, and water do their bidding. What they lack in physical toughness, they make up for in versatility and the ability to inflict massive damage."
  document.getElementById('pTwo').innerText = "Elementalists are master spell casters. Their profession mechanic are their four attunements: Fire, Water, Air, and Earth. They wield each of these elements to defeat their foes and aid their allies. "
  document.getElementById('pThree').innerText = "Albeit lacking in defense, elementalists are very versatile and have access to a plethora of skills, as attuning to the different elements also changes their skills. "
  document.getElementById('pFour').innerText = "Elementalists can also manifest the elements as conjured weapons with their own set of skills, or as allied elementals to aid them in combat. As a scholar profession, elementalists wear light armor."
  document.getElementById('pmOne').innerHTML = "Fire — Focuses on fire magic, increased damage, and burning. Enhances fire weapon skills and may enhance conjured weapon skills."
  document.getElementById('pmTwo').innerHTML = "Air — Focuses on air magic, movement speed, critical hits, and critical damage. Enhances air weapon skills and may enhance glyph skills."
  document.getElementById('pmThree').innerHTML = "Earth — Focuses on earth magic, defense, and bleeding. Enhances earth weapon skills and may enhance signet skills."
  document.getElementById('pmFour').innerHTML = "Water — Focuses on water magic, healing, and exploiting Vulnerability on foes. Enhances water weapon skills and may enhance cantrip skills."
  document.getElementById('pmFive').innerHTML = "Arcane — Focuses on boons and switching attunements. May enhance arcane skills."
  //HOT
  document.querySelector('.hotName').innerHTML = ""
  document.querySelector('.hotName').style.color = ""
  document.querySelector('.hotVideo').src = ""
  //Description
  document.getElementById('hotOneP').innerText = ""
  document.getElementById('hotTwoP').innerText = ""
  document.getElementById('hotThreeP').innerText = ""
  //Weapon
  document.getElementById('hotWOne').innerText = ""
  //Specialization Trait
  document.getElementById('hotWOne').innerText = ""
  //POF
  document.querySelector('.pofName').innerHTML = ""
  document.querySelector('.pofName').style.color = ""
  document.querySelector('.hotVideo').src = ""
  //Description
  document.getElementById('pofOneP').innerText = ""
  document.getElementById('pofTwoP').innerText = ""
  document.getElementById('pofThreeP').innerText = ""
  //Weapon
  document.getElementById('pofWOne').innerText = ""
  //Specialization Trait
  document.getElementById('pofWOne').innerText = ""
  //EOD
  document.querySelector('.eodName').innerHTML = ""
  document.querySelector('.eodName').style.color = ""
  document.querySelector('.eodVideo').src = ""
  //Description
  document.getElementById('eodOneP').innerText = ""
  document.getElementById('eodTwoP').innerText = ""
  document.getElementById('eodThreeP').innerText = ""
  //Weapon
  document.getElementById('eodWOne').innerText = ""
  //Specialization Trait
  document.getElementById('eodWOne').innerText = ""
}
document.getElementById('mesmer').onclick = gwMes
function gwMes() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/mesmerBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('.coreName').innerHTML = "Mesmer"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/thugMagic.mp4"
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#d532ff";
    }
  //Description
  //Weapon
  //Specialization Traits
  document.getElementById('pOne').innerText = "Mesmers are magical duelists who wield deception as a weapon. Using powerful illusions, clones, and phantasmal magic to ensure that their enemies can’t believe their own eyes, mesmers tip the balance of every fight in their favor."
  document.getElementById('pTwo').innerText = "Mesmers are masters of deception and misdirection. "
  document.getElementById('pThree').innerText = "Their profession mechanic are Illusions, ethereal creations that look like the mesmer employed to both fool their enemies and attack them. "
  document.getElementById('pFour').innerText = "Mesmers then shatter their illusions in the blink of an eye to annihilate their dumbfounded enemies. As a scholar profession, mesmers wear light armor."
  document.getElementById('pmOne').innerHTML = "Domination — Focuses on removing boons, applying vulnerability, and interrupting targets. May enhance greatsword and phantasm skills."
  document.getElementById('pmTwo').innerHTML = "Dueling — Focuses on critical hits. May increase the mesmer's elusiveness, and enhance pistol and sword skills."
  document.getElementById('pmThree').innerHTML = "Chaos — Focuses on defense, gaining boons, and increasing boon duration and condition duration. May enhance staff and trident, and manipulation skills."
  document.getElementById('pmFour').innerHTML = "Inspiration — Focuses on defense, support, and healing. May enhance focus, signet, and mantra skills."
  document.getElementById('pmFive').innerHTML = "Illusions — Focuses on creating and shattering clones, reduces the recharge of shatter skills. May enhance Shatter, Phantasm, scepter and torch skills."
  //HOT
  document.querySelector('.hotName').innerHTML = ""
  document.querySelector('.hotName').style.color = ""
  document.querySelector('.hotVideo').src = ""
  //Description
  document.getElementById('hotOneP').innerText = ""
  document.getElementById('hotTwoP').innerText = ""
  document.getElementById('hotThreeP').innerText = ""
  //Weapon
  document.getElementById('hotWOne').innerText = ""
  //Specialization Trait
  document.getElementById('hotWOne').innerText = ""
  //POF
  document.querySelector('.pofName').innerHTML = ""
  document.querySelector('.pofName').style.color = ""
  document.querySelector('.hotVideo').src = ""
  //Description
  document.getElementById('pofOneP').innerText = ""
  document.getElementById('pofTwoP').innerText = ""
  document.getElementById('pofThreeP').innerText = ""
  //Weapon
  document.getElementById('pofWOne').innerText = ""
  //Specialization Trait
  document.getElementById('pofWOne').innerText = ""
  //EOD
  document.querySelector('.eodName').innerHTML = ""
  document.querySelector('.eodName').style.color = ""
  document.querySelector('.eodVideo').src = ""
  //Description
  document.getElementById('eodOneP').innerText = ""
  document.getElementById('eodTwoP').innerText = ""
  document.getElementById('eodThreeP').innerText = ""
  //Weapon
  document.getElementById('eodWOne').innerText = ""
  //Specialization Trait
  document.getElementById('eodWOne').innerText = ""
}
document.getElementById('necromancer').onclick = gwNecro
function gwNecro() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/necromancerBackground.jpg)"; 
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('.coreName').innerHTML = "Necromancer"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/lordNecomongr.mp4"
  let elements = document.getElementsByClassName('colorChange');
    for(let i = 0; i < elements.length; i++) {
      elements[i].style.color = "#3e8e72";
    }
  //Description
  //Weapon
  //Specialization Traits
  document.getElementById('pOne').innerText = "Practitioners of the dark arts, necromancers summon minions, wield the power of ritual, and heal themselves with blood magic. Necromancers feed on life force, which they can leverage offensively or use to delay their own demise."
  document.getElementById('pTwo').innerText = "Necromancers are masters of the dark arts. They absorb life force from nearby deaths to fuel their profession mechanic, Death Shroud, where they endure incoming attacks while striking their enemies, ensuring they always outlive their foes."
  document.getElementById('pThree').innerText = "Necromancers command over death itself, they can summon undead minions to fight for them, overwhelm their enemies in conditions, corrupt their boons, drink their blood, rip their skin and soul, and steal their life"
  document.getElementById('pFour').innerText = "As a scholar profession, necromancers wear light armor."
  document.getElementById('pmOne').innerHTML = "Spite — Focuses on improving power damage, might generation, and applying vulnerability on enemies. May enhance focus, axe, and signet skills."
  document.getElementById('pmTwo').innerHTML = "Curses — Focuses on applying conditions, improving condition damage, and benefiting from critical hits. May enhance scepter, and corruption skills."
  document.getElementById('pmThree').innerHTML = "Death Magic — Focuses on defence by granting toughness and protection against conditions. May enhance minions."
  document.getElementById('pmFour').innerHTML = "Blood Magic — Focuses on support through healing, life stealing, and reviving allies. May enhance dagger, and warhorn skills."
  document.getElementById('pmFive').innerHTML = "Soul Reaping — Focuses on improving Death Shroud and life force generation. May enhance marks from staff skills."
  //HOT
  document.querySelector('.hotName').innerHTML = ""
  document.querySelector('.hotName').style.color = ""
  document.querySelector('.hotVideo').src = ""
  //Description
  document.getElementById('hotOneP').innerText = ""
  document.getElementById('hotTwoP').innerText = ""
  document.getElementById('hotThreeP').innerText = ""
  //Weapon
  document.getElementById('hotWOne').innerText = ""
  //Specialization Trait
  document.getElementById('hotWOne').innerText = ""
  //POF
  document.querySelector('.pofName').innerHTML = ""
  document.querySelector('.pofName').style.color = ""
  document.querySelector('.hotVideo').src = ""
  //Description
  document.getElementById('pofOneP').innerText = ""
  document.getElementById('pofTwoP').innerText = ""
  document.getElementById('pofThreeP').innerText = ""
  //Weapon
  document.getElementById('pofWOne').innerText = ""
  //Specialization Trait
  document.getElementById('pofWOne').innerText = ""
  //EOD
  document.querySelector('.eodName').innerHTML = ""
  document.querySelector('.eodName').style.color = ""
  document.querySelector('.eodVideo').src = ""
  //Description
  document.getElementById('eodOneP').innerText = ""
  document.getElementById('eodTwoP').innerText = ""
  document.getElementById('eodThreeP').innerText = ""
  //Weapon
  document.getElementById('eodWOne').innerText = ""
  //Specialization Trait
  document.getElementById('eodWOne').innerText = ""
}