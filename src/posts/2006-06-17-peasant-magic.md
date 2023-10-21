---
date: 2006-06-17 23:30:58+00:00
excerpt: Since I haven't done a tournament report before this seemed like the perfect opportunity.
slug: peasant-magic
title: Peasant Magic
categories:
- Alternate Formats
- Casual
- Constructed
---

Working on this site has brought back the itch to write Magic articles. However I had no idea what to write about. After a week or two with no ideas Dustin planned out a small Peasant Magic tournament. Since I haven't done a tournament report before this seemed like the perfect opportunity.
<!--more-->

For this report I'm writing the first part before the tournament and will finish the rest afterwards. This will eliminate hindsight thinking and keep the logic where it is before I learn anything that needs to be learned.

## Coming up with the Deck:

I come home from work on Wednesday to find an email from Dustin about doing a Peasant Magic tournament on Friday with the extra rule that cards restricted in Vintage are banned. I'm all for this as it keeps things like deck with multiple copies of cards like {% card %}Sol Ring{% endcard %}, {% card %}Demonic Tutor{% endcard %}, and other broken cards from ruining everyone's fun. I'm game but that only leaves two days to find a deck. Never content to build a deck at the last minute I started brainstorming ideas within 10 minutes of reading the email.

The first thing you should always do before building a deck for a format is to think about what you will expect to be playing against. Peasant Magic is typically filled with aggro decks. In fact the three most common decktypes are Sligh (in burn heavy or Goblin forms), Suicide Black, and Stompy. In fact these are so common that together they form at least 80% of the metagame. I want a stable manabase and without duals beyond the Ravnica Karoos I think I should avoid multicolor decks. Loosing to mana problems is never fun. I briefly think about a Sligh build but quickly dismiss it as I plan to prioritize having fun over winning and I'm sure not many people would appreciate me bringing a Goblin deck. I don't have much interest in building a Suicide Black deck and also sort of half expect Dustin to bring one and I've done Stompy before when we played Type 3. I think about porting my {% card %}Wee Dragonauts{% endcard %} deck to the format. I throw up a test build and it seems decent enough but would probably get run over by anything fast and would probably lose to decks that can kill my fragile creatures easily. Given that there will likely be a lot of aggro I don't want a deck that will lose to it. I think about something with larger creatures and {% card %}Tangle Golem{% endcard %} in particular. He would be larger than most of the creatures I would expect to face and {% card %}Blastoderm{% endcard %} is also common so a green fatty deck begins to form. I make a couple of test builds and try them out but nothing screams play me. At this point I realize that {% card %}Hypnotic Specter{% endcard %} is uncommon and figure you could do a lot worse than four {% card "Hypnotic Specter" %}Hyppies{% endcard %} and a {% card %}Sengir Vampire{% endcard %} for your uncommons. I eventually decide to not play aggro though as even though everyone will expect me to bring a control deck aggro is so common in the format that any aggro deck I can come up with that isn't weak feels too much like netdecking. Besides I know I'll have much more fun playing control anyway.

Given that most people there will be playing an aggro deck I want to make sure my deck has a good aggro match up. I think about some of the options for mass removal in common/uncommon. Stuff like {% card %}Hideous Laughter{% endcard %}, {% card %}Pyroclasm{% endcard %}, and {% card %}Infest{% endcard %} come to mind first. I would prefer not to spend all my uncommon slots on removal though. Then {% card %}Pestilence{% endcard %} comes to mind. This gets me excited as I haven't used that card in years. It would be fun and possibly powerful so I think I found my deck.

## Making the Deck:

Before I even throw together some lists I try to figure out what my Uncommons will be. {% card %}Sengir Vampire{% endcard %} is of course a decent choice as a finisher. I don't want to rely on {% card %}Pestilence{% endcard %} as the win condition as that makes the deck much less consistent and reliant on the enchantment. I'd much rather just use it as the primary card advantage engine so the deck performs better if you don't draw it. I probably wont have any tutors and wont see it every game. I eventually decide that {% card %}Cabal Coffers{% endcard %} is an obvious choice. This would give the deck a powerful mana engine and enable me to use {% card %}Drain Life{% endcard %} effects as the win condition which also has the benefit of making up for the damage {% card %}Pestilence{% endcard %} does to me.

I throw together a rough list with 3 {% card %}Cabal Coffers{% endcard %} and 2 {% card "Skeletal Scrying" %}Skeletal Scryings{% endcard %} as the uncommons and four copies each of {% card %}Pestilence{% endcard %}, {% card %}Crypt Rats{% endcard %}, {% card %}Drain Life{% endcard %}, and {% card %}Consume Spirit{% endcard %}. The deck looks something like this:

{% deck "Pestilence - Peasant" %}
{% cardlist "Lands" %}
*21 Swamp
*3 Cabal Coffers
{% endcardlist %}
{% cardlist "Creatures" %}
*4 Wall of Bone
*4 Crypt Rats
{% endcardlist %}
{% cardlist "Spells" %}
*4 Pestilence
*4 Dark Ritual
*4 Vicious Hunger
*3 Spinning Darkness
*3 Terror
*4 Drain Life
*4 Consume Spirit
*2 Skeletal Scrying
{% endcardlist %}
{% enddeck %}

This looks okay and play out decently but has a few problems after a bit of testing.

{% card %}Spinning Darkness{% endcard %} is great in the mid and late game but there are never enough cards to use its alternate cost early on which is where it is most needed.

{% card %}Skeletal Scrying{% endcard %} was never great and I generally didn't want to cast it.

{% card %}Crypt Rats{% endcard %} are much better than {% card %}Pestilence{% endcard %}.

The deck had trouble in the late game without {% card %}Cabal Coffers{% endcard %} in play.

I wanted more lands in general.

I also realized {% card %}Wall of Bone{% endcard %} is uncommon and thus can't be in the deck. I replaced it with {% card %}Cemetery Gate{% endcard %} which is a common find in {% card %}Pestilence{% endcard %} decks. Adding this Homelands card made me think about adding {% card %}Serrated Arrows{% endcard %} as the extra uncommons. Upon checking I found that {% card %}Serrated Arrows{% endcard %} is not uncommon but common. I quickly tossed two into the deck. I also added {% card %}Cuombajj Witches{% endcard %} just because I like them as some extra early blockers.

I ran the deck through a few more tests and found {% card %}Serrated Arrows{% endcard %} to be the best card in the deck. I went to four copies and dropped 2 {% card %}Pestilence{% endcard %}. I also added some land and a fourth {% card %}Cabal Coffers{% endcard %}.

The deck now looked like this:

{% deck "Pestilence - Peasant" %}
{% cardlist "Lands" %}
*22 Swamp
*4 Cabal Coffers
{% endcardlist %}
{% cardlist "Creatures" %}
*4 Cemetery Gate
*4 Cuombajj Witches
*4 Crypt Rats
{% endcardlist %}
{% cardlist "Spells" %}
*4 Dark Ritual
*4 Vicious Hunger
*4 Drain Life
*2 Pestilence
*4 Serrated Arrows
*4 Consume Spirit
{% endcardlist %}
{% enddeck %}

I tested the deck out a final time against a large number of decks of various types. It tested well so I went to get the cards to put it together.

In digging the cards out I unfortunately found out I only own two copies of {% card %}Crypt Rats{% endcard %}. I drop the extra two and add one {% card %}Pestilence{% endcard %} and a {% card %}Contagion{% endcard %}. I debate whether I should ask Dustin if he has spare {% card %}Crypt Rats{% endcard %} but decide not to to keep the deck a surprise. The final list I put together was this:

{% deck "Pestilence - Peasant" %}
{% cardlist "Lands" %}
*22 Swamp
*4 Cabal Coffers
{% endcardlist %}
{% cardlist "Creatures" %}
*4 Cemetery Gate
*4 Cuombajj Witches
*2 Crypt Rats
{% endcardlist %}
{% cardlist "Spells" %}
*4 Dark Ritual
*4 Vicious Hunger
*4 Drain Life
*3 Pestilence
*4 Serrated Arrows
*4 Consume Spirit
*1 Contagion
{% endcardlist %}
{% enddeck %}



## The Tournament:



As soon as I walk in Dustin tells me Go help BJ build his deck. He has a pile of black cards randomly spewn about the table, most of which are fairly aggressively-costed creatures. I help him assemble a somewhat playable deck given the resources. It's got a lot of bears and some removal but really wants {% card "Dark Ritual" %}Dark Rituals{% endcard %} which are not present. He also only has two {% card "Keening Banshee" %}Keening Banshees{% endcard %} as his uncommons.

Eventually people show up and we are ready to begin. We have six players which is a pretty good size for something small like this.



### Round 1:



My first round opponent is BJ with the Mono-Black Aggro deck I built him an hour earlier. His deck doesn't stand a very good chance against mine. His fear creatures are not exciting against another black deck and he can't get through {% card %}Cemetery Gate{% endcard %}.



#### Game 1:



He drops an early {% card %}Blind Creeper{% endcard %} which I kill with {% card %}Vicious Hunger{% endcard %}. He then drops {% card %}Wicked Akuba{% endcard %} and I drop {% card %}Cuombajj Witches{% endcard %} to block with. He puts {% card %}Unholy Strength{% endcard %} on the {% card "Wicked Akuba" %}Akuba{% endcard %} and swings. I take the hit from the spirit. He drops a {% card %}Stinkweed Imp{% endcard %} and passes the turn. I cast a {% card %}Serrated Arrows{% endcard %} say go. He attacks with his dudes. I put a -1/-1 counter on the Imp and block the Akuba. He then ninjas out {% card %}Okiba-Gang Shinobi{% endcard %} with his attacking 0/1 Imp. I look at the active Witches I have and realize I probably should have seen that coming given I built his deck. I take the three and discard a {% card %}Dark Ritual{% endcard %} and a {% card %}Drain Life{% endcard %} leaving me with a {% card %}Pestilence{% endcard %} in hand. I untap and drop it. I use it to clear his board next turn leaving me with a {% card %}Cemetery Gate{% endcard %}. He can never really accomplish much and I topdeck {% card %}Drain Life{% endcard %} or two.



#### Game 2:



He drops {% card %}Wicked Akuba{% endcard %} on turn 2 and I respond with more Witches. He once again {% card "Unholy Strength" %}Unholy Strengths{% endcard %} his Akuba and swings. Not wanting to take a lot of damage I chump block. He drops {% card %}Nezumi Cutthroat{% endcard %} and says go. I drop a {% card %}Cemetery Gate{% endcard %} to hold off his 4/3. On his turn he swings and drops a second Cuthroat. I drop a second {% card %}Cemetery Gate{% endcard %}. He swings a few turns getting 2 damage through each time until I drop {% card %}Pestilence{% endcard %} and wreck his board. After a few turns he scoops.

We are done long before everyone else and have time to play some casual games while waiting for round 2. I play a {% card %}Defense of the Heart{% endcard %} combo deck and combo out the turn before he kills me with his elf deck. I switch to a blue aggro deck for a second game and he destroys me. Round 2 begins while we are shuffling for a third game.



### Round 2:



My round two opponent is Jason with NINJAS!!! He stands a bit better chance against me than BJ but it should still be pretty one-sided.



#### Game 1:



I drop an early {% card %}Cuombajj Witches{% endcard %} and he responds with a {% card %}Sage Owl{% endcard %}. He turns it into a {% card %}Skullsnatcher{% endcard %} the next turn and I take 2. I drop {% card %}Serrated Arrows{% endcard %} and between that and the {% card "Cuombajj Witches" %}Witches{% endcard %} he can't keep anything on the board. The game ends after many turns of attacking for two with {% card "Cuombajj Witches" %}Witches{% endcard %} and {% card %}Crypt Rats{% endcard %}.



#### Game 2:



I have a one-land opening hand and throw it back. My six-card hand is also a one-lander but this time the land is {% card %}Cabal Coffers{% endcard %} so back it goes again. I get a five card hand of three {% card "Swamp" %}Swamps{% endcard %}, a {% card %}Drain Life{% endcard %} and {% card %}Cuombajj Witches{% endcard %}, which is manageable. Turns out most anything would have done as he is mana-screwed quite badly. Through the course of the very long game he plays 4 {% card "Sage Owl" %}Sage Owls{% endcard %} and looks at a million cards and still never gets more than three lands in play. I go all the way with a couple of Witches. The only damage I'm dealt all match other than a single hit from a 2/1 is by my own cards.



### Round 3:



The final round is against Dustin for first place. He is playing a Tim deck with a million one-toughness dudes. Half the cards in my deck can wreck him single-handedly.



#### Game 1:



I play {% card %}Cuombajj Witches{% endcard %} on turn two and it dominates the entire game. He counters a few {% card "Drain Life" %}Drain Lifes{% endcard %} and {% card %}Pestilence{% endcard %} but the Witches kill practically everything in his deck.



#### Game 2:



This game is much the same except I play three {% card %}Cuombajj Witches{% endcard %} rather than just one. He plays maybe five spells the whole match.



## Conclusion:



Despite intentionally trying to not build an overpowered deck and playing something fun instead nothing there stood even a remote chance against my deck. The decks I didn't play against were an Elf deck and a Zombie deck. Elves have one-toughness and thus just plain loose and the zombie deck despite probably being my worst match up there would probably still be 75% in my favor. He at least had {% card %}Vengeful Dead{% endcard %} so there would at least be some consequence to killing all his dudes. It almost seemed like everyone metagamed to try and build the decks that most lose to {% card %}Pestilence{% endcard %}. Half the decks there scooped to {% card %}Cuombajj Witches{% endcard %} let alone {% card %}Pestilence{% endcard %} and {% card %}Serrated Arrows{% endcard %} (which didn't get to do much as most of the creatures were already dead).

The metagame was actually nothing like I had expected with the exception of a black aggro deck and an Elf deck (though not from the people I expected to bring them). I expected about half aggro decks and a lot of mid-sized creatures. The naturally largest creature I faced all night was {% card %}Blind Creeper{% endcard %}. Even stuff like {% card %}Siege Wurm{% endcard %} and {% card %}Craw Wurm{% endcard %} would have given me more problems let alone stuff like {% card %}Blastoderm{% endcard %} and {% card %}Tangle Golem{% endcard %}.
