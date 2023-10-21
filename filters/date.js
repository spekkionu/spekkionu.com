const _ = require("lodash");
const site = require("../src/_data/site");

const dateToISO = (value) => {
    let date;
    if (Object.prototype.toString.call(value) === '[object Date]') {
        date = value;
    } else if (value === "now") {
        date = new Date();
    } else if (_.isString(value)) {
        date = new Date(value);
    } else {
        return '';
    }
    return date.toISOString();
};

const yearFilter = (value = null) => {
    let date;
    if (Object.prototype.toString.call(value) === '[object Date]') {
        date = value;
    } else if (value === "now") {
        date = new Date();
    } else if (_.isString(value)) {
        date = new Date(value);
    } else {
        return '';
    }
    return String(date.getFullYear());
};

const monthFilter = (value = null) => {
    let date;
    if (Object.prototype.toString.call(value) === '[object Date]') {
        date = value;
    } else if (value === "now") {
        date = new Date();
    } else if (_.isString(value)) {
        date = new Date(value);
    } else {
        return '';
    }
    return String(date.getMonth() + 1).padStart(2, '0');
};

const dateFilter = (value, format = 'local') => {
    let date = new Date(value);
    if (format === 'localdate') {
        return date.toLocaleDateString(site.locale);
    }
    if (format === 'longdate') {
        return date.toLocaleDateString(site.locale, {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        });
    }
    if (format === 'year') {
        return date.toLocaleDateString(site.locale, {
            year: 'numeric',
        });
    }
    if (format === 'monthname') {
        return date.toLocaleDateString(site.locale, {
            month: 'long',
        });
    }
    if (format === 'short') {
        return date.toLocaleDateString(site.locale, {
            month: 'short',
            day: '2-digit'
        });
    }
    if (format === 'localtime') {
        return date.toLocaleTimeString(site.locale);
    }
    if (format === 'local') {
        return date.toLocaleDateString(site.locale) + ' ' + date.toLocaleTimeString(site.locale);
    }
    if (format === 'iso') {
        return date.toISOString();
    }

    return value;
};




module.exports = {
    yearFilter, monthFilter, dateFilter, dateToISO
}