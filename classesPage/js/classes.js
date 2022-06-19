//Core Specs
document.getElementById('guardian').onclick = gwGuard
function gwGuard() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/guardianBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Guardian"
  document.querySelector('h1').style.color = "#8AF7F5"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = "Guardians are devoted fighters who protect their allies and smite their enemies by drawing from the power of their virtues. True guardians are brilliant tacticians and selfless defenders who know how to empower their allies to achieve victory."
  document.getElementById('pTwo').innerText = "Their profession mechanic are their virtues, which passively provide benefits to the guardian, and can be activated to lose the passive bonus and provide a more powerful effect to nearby allies. Guardians act with conviction when smiting their foes and supporting their allies with their unshakeable faith."
  document.getElementById('pmOne').innerText = "Zeal — Focuses on increasing damage and applying vulnerability. Enhances greatsword, scepter, and spirit weapon skills."
  document.getElementById('pmTwo').innerText = "Radiance — Focuses on burning, critical hits, and resolution; based on Virtue of Justice. Enhances sword, torch, and signet skills."
  document.getElementById('pmThree').innerText = "Valor — Focuses on blocking and toughness; based on Virtue of Courage. Enhances focus, shield, and meditation skills."
  document.getElementById('pmFour').innerText = "Honor — Focuses on dodging, healing, and protection; based on Virtue of Resolve. Enhances mace, staff, and symbol and shout skills."
  document.getElementById('pmFive').innerText = "Virtues — Focuses on virtues and resolution. Enhances hammer, consecration, and virtue skills."
}
document.getElementById('revenant').onclick = gwRev
function gwRev() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/revenantBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Revenant"
  document.querySelector('h1').style.color = "#b50000"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonildá.mp4"
  document.getElementById('pOne').innerText = "Heavily armored and equipped with the otherworldly powers of the Mists, revenants channel Tyria’s legends to slaughter foes, unleash chaos on the battlefield, and support their allies. This profession is exclusive to Guild Wars 2: Heart of Thorns™, Guild Wars 2: Path of Fire™, and Guild Wars 2: End of Dragons"
  document.getElementById('pTwo').innerText = "Revenants channel the power of the Mists. Their profession mechanic are their Legends, they commune with deceased legendary heroes and villains from Tyria's past, which aid them in battle. Revenants commune with two legends, chanelling only one at a time, swapping between the two while in combat. Addtionally, revenant skills cost energy, a resource that replenishes over time or when switching legends."
   document.getElementById('pThree').innerText = "As a soldier profession, revenants wear heavy armor."
  document.getElementById('pmOne').innerText = "Corruption — Associated with Legendary Demon Stance. Focuses on applying condition damage (torment) and resisting condition damage. Benefits mace."
  document.getElementById('pmTwo').innerText = "Retribution — Associated with Legendary Dwarf Stance. Focuses on reducing incoming strike and condition damage (resolution), and endurance recovery (vigor). Benefits dodging."
  document.getElementById('pmThree').innerText = "Salvation — Associated with Legendary Centaur Stance. Focuses on healing and support. Benefits staff."
  document.getElementById('pmFour').innerText = "Invocation — Focuses on critical strike chance (fury) and invoking legends."
  document.getElementById('pmFive').innerText = "Devastation — Associated with Legendary Assassin Stance. Focuses on improving damage to enemies and stealing health (Battle Scars). Benefits dual-wielding."
}
document.getElementById('warrior').onclick = gwWar
function gwWar() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/warriorBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Warrior"
  document.querySelector('h1').style.color = "#c2a056"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/dieselVan.mp4"
  document.getElementById('pOne').innerText = "Warriors are masters of weaponry who rely on speed, strength, toughness, and heavy armor to survive in battle. Adrenaline fuels their offensive power—the longer warriors stay in a fight, the more dangerous they become."
  document.getElementById('pTwo').innerText = "Warriors are masters of physical combat. Their profession mechanic is adrenaline, a resource gained through the glory of combat that warriors then use to fuel a powerful burst attack unique to each of the plethora of weapons that they can wield."
  document.getElementById('pThree').innerText = "These masters of arms face their enemies head on, their formidable battle presence inspires their allies, while they are always looking for the next enemy to pound into dust. Like other soldier professions, warriors wear heavy armor."
  document.getElementById('pFour').innerText = "Warriors also have the highest selection of weapons to choose from compared to other professions, giving a good variety of play-styles to choose from."
  document.getElementById('pmOne').innerText = "Strength — Focuses on dodging, physical (utility) skills and brute force. Enhances greatsword, hammer and physical skills."
  document.getElementById('pmTwo').innerText = "Arms — Focused on critical hits and condition damage. Enhances sword and signet skills, as well as dual-wielding (i.e. off-hand)."
  document.getElementById('pmThree').innerText = "Defense — Focuses on damage mitigation, stability and crowd control. Enhances shield, mace and stance skills."
  document.getElementById('pmFour').innerText = "Tactics — Specializes in supporting allies via burst and shout abilities. Enhances warhorn and shout skills."
  document.getElementById('pmFive').innerText = "Focuses on improving adrenaline gain and weapon swapping. Enhances axe, longbow, rifle, harpoon gun, banners and burst skills."
}
document.getElementById('engineer').onclick = gwEngi
function gwEngi() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/engineerBackground2.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Engineer"
  document.querySelector('h1').style.color = "#ce7f4b"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/rambro.mp4"
  document.getElementById('pOne').innerText = "Masters of mechanical mayhem, engineers love to tinker with explosives, elixirs, and all manner of hazardous gadgets. They support their allies with alchemic weaponry, deploy ingenious inventions, or lay waste to foes with a wide array of mines, bombs, and grenades."
  document.getElementById('pTwo').innerText = "Engineers are technological and alchemical masterminds. Their profession mechanic is their tool belt, a second set of skills providing engineers with a plethora of options ensuring they always have the right tool for the job."
  document.getElementById('pThree').innerText = "They employ turrets, grenades, elixirs, gadgets and even wield their own Engineering Kits as weapons to overcome their enemies. As an adventurer profession, engineers wear medium armor."
  document.getElementById('pmOne').innerText = "Explosives — Focuses on damage increase, dodging, vulnerability, and Explosions, including bombs, grenades, and mines. May enhance the Bomb Kit and the Grenade Kit."
  document.getElementById('pmTwo').innerText = "Firearms — Focuses on critical hits and conditions, especially bleeding and burning. May enhance pistol, rifle, harpoon gun, and Flamethrower skills."
  document.getElementById('pmThree').innerText = "Inventions — Focuses on healing, defense, and cleansing conditions. May enhance shield and turret skills."
  document.getElementById('pmFour').innerText = "Alchemy — Focuses on gaining boons and support. May enhance elixir and Med Kit skills."
  document.getElementById('pmFive').innerText = "Tools — Focuses on tool belt skills and endurance. May enhance gadget and Tool Kit skills."
}
document.getElementById('ranger').onclick = gwRan
function gwRan() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/rangerBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Ranger"
  document.querySelector('h1').style.color = "#94c34a"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/noire.mp4"
  document.getElementById('pOne').innerText = "Rangers rely on a keen eye, a steady hand, and the power of nature itself. Unparalleled survivalists with traps, nature spirits, and a stable of loyal pets at their command, rangers can adapt to any situation."
  document.getElementById('pTwo').innerText = "Rangers are defenders of nature. Their profession mechanic is their loyal pets, animal companions that rangers tame and train. "
  document.getElementById('pThree').innerText = " Rangers and their pets fight as one, wielding the power of nature to empower their allies, enduring combat with their wilderness survival skills, concealing traps anticipating fights, and overwhelming their enemies with the strength of the pack. As an adventurer profession, rangers wear medium armor."
  document.getElementById('pmOne').innerText = "Marksmanship — Focuses on power damage and starting fights with burst damage. May enhance longbow and harpoon gun, and signet skills."
  document.getElementById('pmTwo').innerText = "Skirmishing — Focuses on critical hits for both power and condition damage, and enhances weapon swapping. May enhance sword, short bow, and trap skills."
  document.getElementById('pmThree').innerText = "Wilderness Survival — Focuses on defence, protection from conditions, and inflicting conditions. May enhance torch and dagger, and survival skills."
  document.getElementById('pmFour').innerText = "Nature Magic — Focuses on support through healing and boon generation. May enhance warhorn and spirit skills."
  document.getElementById('pmFive').innerText = "Beastmastery — Focuses on improving your pets, their beast skill, and pet swapping. May enhance greatsword, axe, and command skills."
}
document.getElementById('thief').onclick = gwThief
function gwThief() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/thiefBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Thief"
  document.querySelector('h1').style.color = "#89676d"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/eveingaura.mp4"
  document.getElementById('pOne').innerText = "Experts at stealth and surprise, thieves move through the shadows, vanish into thin air, or steal items from their opponents and use them as weapons. Thieves practice an agile, acrobatic fighting style, which makes them very hard to hit."
  document.getElementById('pTwo').innerText = "Thieves are masters of shadows and assassination. Their profession mechanics are Steal and initiative. With Steal, thieves teleport to their target and create a makeshift weapon inspired by that enemy to gain the upper hand."
  document.getElementById('pThree').innerText = " Initiative, on the other hand, makes their weapon skills have no recharge whatsoever and instead each skill costs a certain amount of initiative to cast. Thieves are elusive and hard to catch, teleporting through the shadows by shadowstepping. "
  document.getElementById('pFour').innerText = "They are experts in stealth, becoming fully invisible to then surprise their enemies with a powerful Stealth Attack unique to each of their weapons. As an adventurer profession, thieves wear medium armor."
  document.getElementById('pmOne').innerText = "Deadly Arts — Focuses on use of poisoned, and exploiting enemies with low health. Enhances dagger skills."
  document.getElementById('pmTwo').innerText = "Critical Strikes — Focuses on critical hits and critical damage. Enhances pistol, harpoon gun, and signet skills."
  document.getElementById('pmThree').innerText = "Shadow Arts — Focuses on stealth and blinding enemies. Enhances venom and deception skills."
  document.getElementById('pmFour').innerText = "Acrobatics — Focuses on dodging, mobility, and healing. Enhances sword and spear."
  document.getElementById('pmFive').innerText = "Trickery — Focuses on stealing and managing initiative. Enhances trick and steal skills."
}
document.getElementById('elementalist').onclick = gwEle
function gwEle() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/elementalistBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "contain"
  document.querySelector('h1').innerText = "Elementalist"
  document.querySelector('h1').style.color = "#f77a84"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/rayden.mp4"
  document.getElementById('pOne').innerText = "Elementalists are multifaceted spellcasters who channel elemental forces, making fire, air, earth, and water do their bidding. What they lack in physical toughness, they make up for in versatility and the ability to inflict massive damage."
  document.getElementById('pTwo').innerText = "Elementalists are master spell casters. Their profession mechanic are their four attunements: Fire, Water, Air, and Earth. They wield each of these elements to defeat their foes and aid their allies. "
  document.getElementById('pThree').innerText = "Albeit lacking in defense, elementalists are very versatile and have access to a plethora of skills, as attuning to the different elements also changes their skills. "
  document.getElementById('pFour').innerText = "Elementalists can also manifest the elements as conjured weapons with their own set of skills, or as allied elementals to aid them in combat. As a scholar profession, elementalists wear light armor."
  document.getElementById('pmOne').innerText = "Fire — Focuses on fire magic, increased damage, and burning. Enhances fire weapon skills and may enhance conjured weapon skills."
  document.getElementById('pmTwo').innerText = "Air — Focuses on air magic, movement speed, critical hits, and critical damage. Enhances air weapon skills and may enhance glyph skills."
  document.getElementById('pmThree').innerText = "Earth — Focuses on earth magic, defense, and bleeding. Enhances earth weapon skills and may enhance signet skills."
  document.getElementById('pmFour').innerText = "Water — Focuses on water magic, healing, and exploiting Vulnerability on foes. Enhances water weapon skills and may enhance cantrip skills."
  document.getElementById('pmFive').innerText = "Arcane — Focuses on boons and switching attunements. May enhance arcane skills."
}
document.getElementById('mesmer').onclick = gwMe
function gwMe() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/mesmerBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Mesmer"
  document.querySelector('h1').style.color = "#d532ff"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/thugMagic.mp4"
  document.getElementById('pOne').innerText = "Mesmers are magical duelists who wield deception as a weapon. Using powerful illusions, clones, and phantasmal magic to ensure that their enemies can’t believe their own eyes, mesmers tip the balance of every fight in their favor."
  document.getElementById('pTwo').innerText = "Mesmers are masters of deception and misdirection. "
  document.getElementById('pThree').innerText = "Their profession mechanic are Illusions, ethereal creations that look like the mesmer employed to both fool their enemies and attack them. "
  document.getElementById('pFour').innerText = "Mesmers then shatter their illusions in the blink of an eye to annihilate their dumbfounded enemies. As a scholar profession, mesmers wear light armor."
  document.getElementById('pmOne').innerText = "Domination — Focuses on removing boons, applying vulnerability, and interrupting targets. May enhance greatsword and phantasm skills."
  document.getElementById('pmTwo').innerText = "Dueling — Focuses on critical hits. May increase the mesmer's elusiveness, and enhance pistol and sword skills."
  document.getElementById('pmThree').innerText = "Chaos — Focuses on defense, gaining boons, and increasing boon duration and condition duration. May enhance staff and trident, and manipulation skills."
  document.getElementById('pmFour').innerText = "Inspiration — Focuses on defense, support, and healing. May enhance focus, signet, and mantra skills."
  document.getElementById('pmFive').innerText = "Illusions — Focuses on creating and shattering clones, reduces the recharge of shatter skills. May enhance Shatter, Phantasm, scepter and torch skills."
}
document.getElementById('necromancer').onclick = gwNecro
function gwNecro() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/core/necromancerBackground.jpg)"; 
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Necromancer"
  document.querySelector('h1').style.color = "#3e8e72"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/lordNecomongr.mp4"
  document.getElementById('pOne').innerText = "Practitioners of the dark arts, necromancers summon minions, wield the power of ritual, and heal themselves with blood magic. Necromancers feed on life force, which they can leverage offensively or use to delay their own demise."
  document.getElementById('pTwo').innerText = "Necromancers are masters of the dark arts. They absorb life force from nearby deaths to fuel their profession mechanic, Death Shroud, where they endure incoming attacks while striking their enemies, ensuring they always outlive their foes."
  document.getElementById('pThree').innerText = "Necromancers command over death itself, they can summon undead minions to fight for them, overwhelm their enemies in conditions, corrupt their boons, drink their blood, rip their skin and soul, and steal their life"
  document.getElementById('pFour').innerText = "As a scholar profession, necromancers wear light armor."
  document.getElementById('pmOne').innerText = "Spite — Focuses on improving power damage, might generation, and applying vulnerability on enemies. May enhance focus, axe, and signet skills."
  document.getElementById('pmTwo').innerText = "Curses — Focuses on applying conditions, improving condition damage, and benefiting from critical hits. May enhance scepter, and corruption skills."
  document.getElementById('pmThree').innerText = "Death Magic — Focuses on defence by granting toughness and protection against conditions. May enhance minions."
  document.getElementById('pmFour').innerText = "Blood Magic — Focuses on support through healing, life stealing, and reviving allies. May enhance dagger, and warhorn skills."
  document.getElementById('pmFive').innerText = "Soul Reaping — Focuses on improving Death Shroud and life force generation. May enhance marks from staff skills."
}
//HOT Specs
document.getElementById('dragonhunter').onclick = gwDh
function gwDh() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/hot/dragonhunterBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Guardian: Dragonhunter"
  document.querySelector('h1').style.color = "#8AF7F5"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = "Guardians who venture the Heart of Maguuma with the Heart of Thorns expansion can choose to become Dragonhunter empowering their virtues for more tangible benefits, while laying traps to hunt their enemies."
  document.getElementById('pThree').innerText = "Dragonhunter is an elite specialization for the guardian that focuses on trap skills and grants upgraded versions of virtues. It also allows the guardian to use a longbow."
  document.getElementById('pFour').innerText = "The dragon hunter is a ranged, methodical hunter that uses various traps to ensnare their prey while picking them off with arrows of light. Their virtue skills become corporeal and more powerful in exchange for a longer casting time."
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('herald').onclick = gwHer
function gwHer() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/hot/heraldBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "unset"
  document.querySelector('h1').innerText = "Revenant: Herald"
  document.querySelector('h1').style.color = "#b50000"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonildá.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('berserker').onclick = gwBerk
function gwBerk() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/hot/berserkerBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "unset"
  document.querySelector('h1').innerText = "Warrior: Berserker"
  document.querySelector('h1').style.color = "#c2a056"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/dieselVan.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('scrapper').onclick = gwScrap
function gwScrap() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/hot/scrapperBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Engineer: Scrapper"
  document.querySelector('h1').style.color = "#ce7f4b"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/ironMan.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('druid').onclick = gwDru
function gwDru() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/hot/druidBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Ranger: Druid"
  document.querySelector('h1').style.color = "#94c34a"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('daredevil').onclick = gwDd
function gwDd() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/hot/daredevilBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Thief: Daredevil"
  document.querySelector('h1').style.color = "#89676d"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('tempest').onclick = gwTemp
function gwTemp() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/hot/tempestBackground.jpg)"; 
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Elementalist: Tempest"
  document.querySelector('h1').style.color = "#f77a84"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('chronomancer').onclick = gwChrono
function gwChrono() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/hot/chronomancerBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "unset"
  document.querySelector('h1').innerText = "Mesmer: Chronomancer"
  document.querySelector('h1').style.color = "#d532ff"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('reaper').onclick = gwReap
function gwReap() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/hot/reaperBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Necromancer: Reaper"
  document.querySelector('h1').style.color = "#3e8e72"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
//POF Specs
document.getElementById('firebrand').onclick = gwFb
function gwFb() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/pof/firebrandBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Guardian: Firebrand"
  document.querySelector('h1').style.color = "#8AF7F5"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('renegade').onclick = gwRen
function gwRen() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/pof/renegadeBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Revenant: Renegade"
  document.querySelector('h1').style.color = "#b50000"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('spellbreaker').onclick = gwSpell
function gwSpell() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/pof/spellbreakerBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Warrior: Spellbreaker"
  document.querySelector('h1').style.color = "#c2a056"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('holosmith').onclick = gwHolo
function gwHolo() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/pof/holosmithBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Engineer: Holosmith"
  document.querySelector('h1').style.color = "#ce7f4b"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('soulbeast').onclick = gwSoul
function gwSoul() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/pof/soulbeastBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Ranger: Soulbeast"
  document.querySelector('h1').style.color = "#94c34a"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('deadeye').onclick = gwDead
function gwDead() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/pof/deadeyeBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Thief: Deadeye"
  document.querySelector('h1').style.color = "#89676d"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('weaver').onclick = gwWeaver
function gwWeaver() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/pof/weaverBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Elementalist: Weaver"
  document.querySelector('h1').style.color = "#f77a84"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('mirage').onclick = gwMirage
function gwMirage() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/pof/mirageBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Mesmer: Mirage"
  document.querySelector('h1').style.color = "#d532ff"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('scourge').onclick = gwScourge
function gwScourge() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/pof/scourgeBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Necromancer: Scourge"
  document.querySelector('h1').style.color = "#3e8e72"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
//EOD Specs
document.getElementById('willbender').onclick = gwWill
function gwWill() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/eod/willbenderBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Guardian: Willbender"
  document.querySelector('h1').style.color = "#8AF7F5"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('vindicator').onclick = gwVin
function gwVin() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/eod/vindicatorBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Revenant: Vindicator"
  document.querySelector('h1').style.color = "#b50000"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('bladesworn').onclick = gwBlade
function gwBlade() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/eod/bladeswornBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "contain"
  document.querySelector('h1').innerText = "Warrior: Bladesworn"
  document.querySelector('h1').style.color = "#c2a056"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('mechanist').onclick = gwMech
function gwMech() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/eod/mechanistBackground.png)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Engineer: Mechanist"
  document.querySelector('h1').style.color = "#ce7f4b"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('untamed').onclick = gwTamed
function gwTamed() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/eod/untamedBackground.png)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Ranger: Untamed"
  document.querySelector('h1').style.color = "#94c34a"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('specter').onclick = gwSpec
function gwSpec() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/eod/specterBackground.png)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Thief: Specter"
  document.querySelector('h1').style.color = "#89676d"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('catalyst').onclick = gwCala
function gwCala() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/eod/catalystBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "top"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Elementalist: Catalyst"
  document.querySelector('h1').style.color = "#f77a84"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('virtuoso').onclick = gwVirt
function gwVirt() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/eod/virtuosoBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "unset"
  document.querySelector('h1').innerText = "Mesmer: Virtuoso"
  document.querySelector('h1').style.color = "#d532ff"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}
document.getElementById('harbinger').onclick = gwHarb
function gwHarb() {
  document.querySelector('body').style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(../../img/specBackground/eod/harbingerBackground.jpg)";
  document.querySelector('body').style.backgroundPosition = "center"
  document.querySelector('body').style.backgroundSize = "cover"
  document.querySelector('h1').innerText = "Necromancer: Harbinger"
  document.querySelector('h1').style.color = "#3e8e72"
  document.querySelector('.classShowCase').style.display = "flex"
  document.querySelector('.specDescription').style.display = "unset"
  document.querySelector('video').src="../video/characters/leonilda.mp4"
  document.getElementById('pOne').innerText = ""
  document.getElementById('pTwo').innerText = ""
  document.getElementById('pThree').innerText = ""
  document.getElementById('pFour').innerText = ""
  document.getElementById('pmOne').innerText = ""
  document.getElementById('pmTwo').innerText = ""
  document.getElementById('pmThree').innerText = ""
  document.getElementById('pmFour').innerText = ""
  document.getElementById('pmFive').innerText = ""
}