const _ = require("lodash");

const CardMatcher = /^\s*(?:\*(?<count>\d+)x?\s+)?(?<name>.+)\s*$/;

const cardUrl = (card) => {
    return `https://gatherer.wizards.com/Handlers/Image.ashx?size=small&amp;type=card&amp;name=${encodeURIComponent(card)}&amp;options=`;
};

const cardShortcode = (content, card = "") => {
    card = String(card || content).trim();
    return `<a href="${cardUrl(card)}" class="cardlink" data-turbo="false" target="_blank" data-card="${_.escape(card)}">${content}</a>`;
};

const cardImageShortcode = (card, attributes = {}) => {
    attributes['class'] = 'cardimage' + (attributes['class'] ? ' ' + attributes['class'] : '');
    attributes.width = attributes.width || 265;
    attributes.height = attributes.height || 370;
    attributes.src = cardUrl(card);
    attributes.alt = attributes.alt || card;
    attributes.loading = attributes.loading || 'lazy';

    const attrs = _.toPairs(attributes).map(attr => {
        return `${attr[0]}="${attr[1]}"`
    }).join(' ');

    return `<img ${attrs} />`;
};


const deckShortcode = (content, name = "", counts = true) => {
    return `<div class="deck">${name ? `<div class="deck__title">${name}</div>` : ''}<div class="deck__content">${content.trim()}</div></div>`;
};

const cardlistShortcode = (content, title = "", counts = true, columns = false) => {
    let cards = content.replace(/\r?\n/g, "\n").split('\n').filter(line => line.trim() !== '').map(card => {
        card = card.trim();
        let matches = CardMatcher.exec(card);
        let name = matches.groups?.name || card;
        let count = Number(matches.groups?.count || 1);
        return {
            name: name,
            count: count,
            link: cardShortcode(name),
        };
    });
    let header = '';
    if (title && counts) {
        let total = _.sum(cards.map(card => card.count));
        header = `<div class="cardlist__title">${title} <span class="cardlist__count">(${total})</span></div>`;
    } else if (title) {
        header = `<div class="cardlist__title">${title}</div>`;
    }
    return `<div class="cardlist${columns ? ' columns' : ''}">${header}<ul class="cardlist__cards">${cards.map(card => {
                    return `<li class="cardlist__card">${counts ? `<span class="cardlist__quantity">${card.count}x</span>` : ''} ${card.link}</li>`;
                }).join("")}</ul></div>`;
};

module.exports = {
    cardUrl,cardShortcode,cardImageShortcode,deckShortcode,cardlistShortcode
};