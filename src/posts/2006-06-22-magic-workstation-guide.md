---
date: 2006-06-22 23:31:41+00:00
excerpt: As I’ve mentioned many times before I use Magic Workstation for my deck building and testing. This article will focus on the use of the program for testing.
slug: magic-workstation-guide
title: Magic Workstation Guide
categories:
- Constructed
- Theory
---

As I've mentioned many times before I use [Magic Workstation](http://www.magicworkstation.com/) for my deck building and testing.  Jason mentioned that a guide on how to use this program would make for a helpful article.  This article will assume you already have the program installed and set up with all the proper sets and images.  It will focus more on the actual use of the program.
<!--more-->


## Building Decks


The first thing to do if you have not done so already is to click on View then Deck Edit Mode.  This will make working on a deck much easier.  You can also click on Columns Manager in the same View menu in order to edit what information is displayed about each card.  You can display whatever you want; Qty and Name are important enough to be required and Cost and Type are also very helpful.  I'd advise to keep it simple and not display too much.  The less information is on the screen the easier it is to process in your mind.

Now we can go about building a deck.  There are a number of arrows in the column in the middle of the screen.  These arrows let you manipulate the contents of the deck.  The blue arrow adds the selected card to the deck.  The green arrow adds it to the sideboard, and the red one removes the selected card from the deck or sideboard.  The grey arrows at the bottom move the selected card between the sideboard and maindeck.

Once the deck is finished save it like you would in any program.

There are also some things you can do to the library to make deck building easier.

You can right-click the library column and select Card Filter (or find the same option in the View menu).  This will bring up a dialog box that will let you filter out certain sets. colors, rarities, or whatever.  Say you wanted to build a Standard legal deck.  Selecting Standard (T2) from the drop down box should select the proper sets if your program is up to date but you can select them manually if you like.  Once you hit okay only Standard legal cards will show up in the card library.  You can get rid of any filters by selecting Reset Filters.

One other setting you may want on is if you click on Show only Unique Cards from the View menu it will only display one of each card in the library.  This means you wont have a few dozen of each Basic Land on the list but also take away your option to choose which version of the card you are adding to the deck.

If you click on Deep Deck Analysis in the Tools menu it brings up a dialog box with a number of helpful features in it.  The first page, Probability Analysis, will let you calculate the odds of drawing a certain card or combination of cards.  The second page, Statistical Analysis, will let you determine the offs of having certain numbers of lands in your opening hand for mulligan purposes.  Rather than just calculating the probabilities like the first page this one runs through a set number of sample hands (which you set) and displays the results.  The George Baxter Analysis will tell you how many of each color mana sources your deck needs.  Note that this is not the same thing as how many lands to run.  This really just covers how many of each color source is recommended to not get color screwed as often.  A dual land would count as one of each color for this purpose.  You can also change the cost of any of the cards for the purposes of this analysis or how important they are.  Say you wanted {% card %}Decree of Justice{% endcard %} to count as one white mana rather than two since you will almost always cycle it rather than hard cast it.

Another pair of handy features are the Copy Deck to Clipboard and Paste Deck from Clipboard options in the Tools menu.  You can copy a decklist from say an article and use this feature to paste the decklist into MWS.  It may choke on a few cards but for the most part works pretty well assuming the deck isn't full of nicknames or spelling errors.  Say you wanted to copy a deck you saw online.  Rather than manually input each card and build the deck yourself you can have MWS do the work for you.  First copy the decklist to the clipboard (highlight it can copy it like any bit of text).  Then chose Paste Deck from Clipboard from the Tools menu.  This will bring up a dialog box with the deck in it.  Fix any spelling errors present in the list if necessary and make sure only one card is on each line.  Once you click the Work With It button it should import the decklist.  It generally isn't able to tell what the sideboard is so if the decklist had a sideboard it will usually put all the cards into the maindeck.  Just use the grey arrows to fix this.  You can also add any of the cards it had problems with.  If you want to save the deck make sure the deckbuilder is selected and go to Save As in the File menu rather than just hit the save button.



## Playing a Solo Game



Now that our deck is built it is time to test it.  To begin a game click on Test Deck in Solo Mode in the Game menu.  The dialog box that pops up will be different depending on whether you have purchased the full version of the software.  With a full version of the software you will be able to choose a different deck for each player.  The trail version forces both players to use the same deck.  Once you have chosen the decks for each player you can start the game.

I'll now discuss the layout of the game screen.

First take a look at the menu at the top.  Most of the options are easy enough to figure out but note that the two sections in the view menu are separated by players (My Hand, My Graveyard vs. Opponent's Hand, Opponent's Graveyard...).  In these MY refers to the active player and Opponent to the non-active player rather than to Player A and Player B.

The icons in the center of the play area refer to the phases of a turn.  When you mouse over one an explanation pops up in the box on the upper-right.  That same box will display a card if you mouse over it.

Remember that unlike Magic Online, MWS does not know the rules or what any of the cards do so it is up you you to manipulate them the same way you would when playing with real cards.  This means it is up to you to remember to draw cards and to put two cards back on your library after casting {% card %}Brainstorm{% endcard %} or that {% card %}Darksteel Ingot{% endcard %} doesn't go to the graveyard when {% card "Shatter" %}Shattered{% endcard %}.

To change life totals you can either right click the life total and choose how to change it or double click it and enter a new life total.  Holding shift and clicking on a life total or a creature will signify there is damage being dealt to it.  You will still need to actually subtract two life or put the dead creature into the graveyard manually.  The numbers are just a way of visually showing the damage for something like splitting combat damage.

Right clicking the library will show you a number of options including being able to look at (and manipulate) the top X cards of your library.  Similar options are available for the graveyard, hand, and removed from game zone.

If a card is in play you can right click and drag the mouse pointer to another card or player.  This will draw a little arrow to signify something being targeted.  Once again this is optional but a nice visual representation of what is going on.

Clicking on one of the mana symbols by the life totals will increment counters to help you keep track of mana in your pool.  Right clicking will decrement the counter.  You can use these to keep track of anything else you want as well (such as storm count).

You can right click on a card in play and choose Set Note to put some text on a card.  This can be something to remind you about something on the card.  An example could be something like you can make a note on a card to signify that it is flipped.

One important thing to note, especially if you are just testing a deck, is that all of these fancy features are completely optional.  Manually clicking on each phase of the turn, and setting attacking creatures as attacking and blockers as blocking, and putting damage on the stack before resolving is completely unnecessary and very time consuming.  You are just getting a feel for how the deck plays and aren't even playing against a real person.  This is different if you are playing online or over a LAN or something but for testing purposes you really only need the program to keep track of life totals and what cards you draw and are in play.



## How to Test a Deck



I'm going to go through an actual testing session as an example.  The deck I'll be testing is a {% card %}Pox{% endcard %} deck I built a while ago.

{% deck "Pox" %}
{% cardlist "Lands" %}
*1 Strip Mine
*1 Lake of the Dead
*11 Swamp
*4 Wasteland
*4 Peat Bog
{% endcardlist %}
{% cardlist "Creatures" %}
*2 Nether Spirit
{% endcardlist %}
{% cardlist "Spells" %}
*4 Chimeric Idol
*2 Spinning Darkness
*4 Pox
*4 Duress
*4 Hymn to Tourach
*4 Diabolic Edict
*4 Cabal Therapy
*3 Crucible of Worlds
*4 Dark Ritual
*2 Charcoal Diamond
*1 Demonic Tutor
*1 Necropotence
{% endcardlist %}
{% enddeck %}

The first thing I'll be doing is goldfishing the deck a few times.

I start a Solo game and draw my opening hand.  Its got lands and spells and is a keeper.  I'm just goldfishing so it isn't important to pay attention to my opponent.  The turn will never be swapped.

After a turn 1 {% card %}Duress{% endcard %} I immediately untap and draw another card.  No need to go through turn phases so just a double click on the untap phase then the draw phase is all I'll ever need to hit.

I {% card "Dark Ritual" %}Ritual{% endcard %} out a {% card %}Chimeric Idol{% endcard %} on turn three and drop another on turn four and {% card %}Pox{% endcard %} turn five.  This is enough for a first goldfish as it shows how the turns of the deck flow.  I'd do a few more games like this until I'm satisfied.

Now it is time to test the deck against an actual opponent (well opposing deck anyway).  I'll be playing both decks but need an opponent.

Note that in order to play a deck against a different deck in a solo game you would need to purchase the full version of MWS.  There is however a way to get around this.  Rather than play both decks on MWS you can use the program to play one deck and play the other deck with actual cards.  This would require to actually put one of the decks together (or at least proxy it) but would provide the same data as the full program would.

For the opposing deck I'll use the deck I always test a new deck against first, Snakes.

{% deck "Snakes" %}
{% cardlist "Lands" %}
*24 Forest
{% endcardlist %}
{% cardlist "Creatures" %}
*4 River Boa
*4 Sosuke, Son of Seshiro
*2 Seshiro the Anointed
*4 Orochi Ranger
*2 Tangle Asp
*4 Sakura-Tribe Scout
*4 Sakura-Tribe Elder
{% endcardlist %}
{% cardlist "Spells" %}
*4 Sosuke's Summons
*4 Aether Vial
*4 Overrun
{% endcardlist %}
{% enddeck %}

After starting the game and drawing opening hands I use the Flip a Coin feature in the Action menu to see who plays first.  The {% card %}Pox{% endcard %} deck wins the die role and plays first.

A first turn {% card %}Duress{% endcard %} nabs an {% card %}Æther Vial{% endcard %}.  With {% card %}Cabal Therapy{% endcard %} in hand a note is made of what to name (probably the two copies of {% card %}Overrun{% endcard %}) and the turn is passed.

The Snake deck just plays a land and says go.  A {% card %}Peat Bog{% endcard %} is played and the Therapy for those two {% card "Overrun" %}Overruns{% endcard %}.  A turn two {% card %}River Boa{% endcard %} is sacked to {% card %}Diabolic Edict{% endcard %} and a second Therapy nabs a {% card %}Sosuke's Summons{% endcard %} that was spotted with the last one.

The Snake deck gets it back after playing a {% card %}Sakura-Tribe Scout{% endcard %} but has no other plays.  The Pox deck drops {% card %}Chimeric Idol{% endcard %}.

The game plays out and snake tokens are traded for Idols until the Snake deck eventually overwhelms a mana-flooded Pox deck.

I normally play 3-4 games or so until I'm happy with the results then start adjusting the deck if problems were exposed.  After some tweaking I usually test against another few decks of varying types and power levels before I'm happy with a deck.  If the deck doesn't do very well in testing I usually scrap the idea completely rather than waste time on a lost cause.

Note how in this game cards like {% card %}Cabal Therapy{% endcard %} were played which require to make a guess at something that would normally be hidden (I got to remove the guessing part with {% card %}Duress{% endcard %} but that is irrelevant for this discussion).  This can be a bit difficult to do for some people as since you are controlling both players you know exactly what is in both hands.  You need to be able to objectively think what you would have named in that situation if you didn't know the correct answer.  This also applies to things like knowing which threats to counter and whether the opponent is holding mass removal so you can hold back a few threats.  This makes testing slightly less useful if you have problems with that type of thinking but I've never found it all that difficult.



## Testing with the Evaluation Version


As I've mentioned since the trial version of MWS only lets you pit a deck against itself rather that let you test various matchups you will need to work around this if you want the same data without paying the money for the full version.

The solution is actually quite simple.  You will only be using MWS to pilot one of the decks.  For the other deck you will use actual cards.

The first thing you need to do is build your decks.  Build one in MWS and the other with actual cards.  Start a solo game on MWS and shuffle up the real deck as well.  Draw your opening hand with the real deck and do the mulligan thing like normal with both decks.  Now instead of hitting the End Turn button on MWS each time you are finished just pick up the cards and play the real deck.  The only times this can be a more more awkward is when using things like local enchantments or switching control of permanents.  Even this isn't too odd as it isn't all that card to keep track of.  You can use notes or counters to keep track of things like that or create tokens to have a visual representation of something.

If you have no problems playing games like this you shouldn't need to purchase the full version of the software.  However, one of the main things I use the program for is testing a deck before I purchase necessary cards for it to see if it is even worth building at all.  It kinda sucks to spend money on cards for a new deck only to later find out the deck is worthless.  You can proxy missing cards until then but that is quite a bit more effort and will eat up either your printer ink or your basic lands (or both) over large periods of time proxying many decks.



## Playing Online



MWS also has the capability to play over TCP/IP with another opponent.  This feature is available in the free version as well.  I haven't used it however so I don't have any helpful tricks for it.  You do need to be pretty familiar with the software before trying it as you'll be playing an actual opponent and the program has nothing to prevent you from accidentally cheating.



## Apprentice



[Apprentice](http://www.magic-league.com/download/apprentice.php) is a free alternative to MWS and has been around much longer and has a slightly larger support group (mostly due to being free and older).  They are both equivalent functionality-wise but MWS has a bit higher learning curve and Apprentice has none of the pretty visual effects MWS does.  This means no card images or mana symbols and the like.  If you can live without the pretty pictures and really don't want to pay for MWS it is certainly a good option.

Keep in mind that to solo a deck against another deck in Apprentice you need to open up two copies of the program and connect them to each other.  You would then switch windows to control each player.
