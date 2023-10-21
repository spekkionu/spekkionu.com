---
date: 2005-08-10 20:04:23+00:00
excerpt: This time I'm going for a card that I've wanted to build a deck around since I first saw it in the spoiler, Delaying Shield.
slug: delaying-shield
title: Delaying Shield
categories:
- Casual
- Constructed
- Extended
---

Time for another bad rare deckbuilding article.

This time I'm going for a card that I've wanted to build a deck around since I first saw it in the spoiler.
<!--more-->

{% cardimage "Delaying Shield", {width: 223, height: 310} %}

On its own {% card %}Delaying Shield{% endcard %} puts the damage off until your upkeep where you are aloud to pay mana to prevent some of it.  However we are not going to be paying mana to prevent that damage.  If {% card %}Delaying Shield{% endcard %} is not in play when its triggered ability resolves during your upkeep no counters will be removed and thus you will lose no life.  The card I immediately thought of when I saw the card was {% card %}Umbilicus{% endcard %}.  If you stack the abilities by putting the {% card %}Delaying Shield{% endcard %} first then {% card %}Umbilicus{% endcard %} on top of it the {% card %}Umbilicus{% endcard %} ability will resolve first allowing you to return the {% card %}Delaying Shield{% endcard %} to your hand and not lose any life.  You then just cast it again and repeat each turn.  You are now invulnerable to damage.  Note that {% card %}Blood Clock{% endcard %} is the exact same card as {% card %}Umbilicus{% endcard %} but I have a few {% card %}Umbilicus{% endcard %} and no {% card "Blood Clock" %}Blood Clocks{% endcard %}.

Now all that is left is crafting the deck around it.  I'm going to go with either Extended or Legacy format so I can use 4 {% card "Enlightened Tutor" %}Enlightened Tutors{% endcard %} which can find either piece of the combo as well as any other artifacts/enchantments I feel like throwing in the deck.

Since the combo doesn't actually win the game I also need to find a win condition and some support for it.  I decided that having {% card %}Umbilicus{% endcard %} in the deck pushed me toward creatures with "comes into play" abilities.

The next decision was whether the deck should be mono-white or add a second color and if so which one.  Since white doesn't really have the best "comes into play" creatures another color would be very helpful.  Black, green, and blue would all have things to offer.  Black would bring discard as well as some very good "comes into play" creatures like {% card %}Ravenous Rats{% endcard %} and {% card %}Nekrataal{% endcard %}.  Blue could provide {% card %}Man-O'-War{% endcard %} and possibly countermagic to make it more of a control deck.  Green has mana acceleration and a large amount of playable "comes into play" creatures.  In the end I went with green because of the creatures.  My rough draft looked like this:

{% deck "Delaying Shield - Extended" %}
{% cardlist "Lands" %}
*1 Ancient Den
*1 Tree of Tales
*11 Plains
*7 Forest
*4 Brushland
{% endcardlist %}
{% cardlist "Creatures" %}
*2 Monk Realist
*1 Staunch Defenders
*4 Viridian Shaman
*4 Eternal Witness
*4 Solemn Simulacrum
*4 Sakura-Tribe Elder
{% endcardlist %}
{% cardlist "Spells" %}
*4 Delaying Shield
*4 Umbilicus
*4 Enlightened Tutor
*4 Wrath of God
*1 Ivory Mask
{% endcardlist %}
{% enddeck %}

The artifact land are so I can tutor for them with {% card %}Enlightened Tutor{% endcard %} if I happen to need land.



## After Testing:



The deck worked out okay.  It was pretty good against aggro decks, especially those that cannot remove the combo.  It had a lot of problems with countermagic and decks that didn't care so much about {% card %}Delaying Shield{% endcard %}.  Also I realized a bunch of cards that completely slipped my mind when building the deck.  {% card %}Wall of Blossoms{% endcard %} most definitely should be in the deck.  It not only becomes a draw engine when combined with {% card %}Umbilicus{% endcard %} but is great for living long enough to pull the combo off.  Also cards like {% card %}Viridian Shaman{% endcard %} and {% card %}Monk Realist{% endcard %} were problematic if the opponent had no targets as they would sit in your hand because casting them would blow up your own combo.  Also cards like {% card %}Sterling Grove{% endcard %} and {% card %}Hanna's Custody{% endcard %} might be helpful in protecting the combo.

{% deck "Delaying Shield ver. 2.0 - Extended" %}
{% cardlist "Lands" %}
*1 Ancient Den
*1 Tree of Tales
*11 Plains
*7 Forest
*4 Brushland
{% endcardlist %}
{% cardlist "Creatures" %}
*4 Eternal Witness
*4 Solemn Simulacrum
*4 Wall of Blossoms
*4 Sakura-Tribe Elder
{% endcardlist %}
{% cardlist "Spells" %}
*4 Delaying Shield
*4 Umbilicus
*4 Enlightened Tutor
*4 Wrath of God
*1 Sterling Grove
*1 Hanna's Custody
*1 Seal of Cleansing
*1 Ivory Mask
{% endcardlist %}
{% enddeck %}

This version fixes the problems with the first one and also takes advantage of 4 {% card "Enlightened Tutor" %}Enlightened Tutors{% endcard %} a bit more with a bunch of sliver bullets.



## After Testing:



The deck is all right I guess.  It was at least better than the last version.  The lock was pretty good against aggro decks and control decks that couldn't deal with it, which is really just red control decks and black control decks without discard (meaning just Red control decks and people who are bad at Magic).  {% card %}Eternal Witness{% endcard %} was very important against decks with {% card %}Disenchant{% endcard %} effects to get the missing piece of the combo back.  Aggro decks with enchantment removal were often a problem as they could kill the {% card %}Delaying Shield{% endcard %} during their turn to get one turn of damage through.  If it was just for a few points it wasn't a problem but 2 hits of 10+ damage is a problem.  Try to tutor for {% card %}Sterling Grove{% endcard %} before setting up the rest of the combo.  Against decks with minimal damage dealing capabilities you could often just hold them off with {% card %}Delaying Shield{% endcard %}.  Make sure to use {% card "Wrath of God" %}Wraths{% endcard %} when the board gets crowded against decks packing enchantment removal or you may end up with surprise damage.

Overall the deck is about as mediocre as you would expect a deck based on {% card %}Delaying Shield{% endcard %} to be.  I kinda enjoyed playing the deck but I seem to have a thing for 2-card combos.
