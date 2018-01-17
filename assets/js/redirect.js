var language = navigator.browserLanguage;

// alert(language);

if (language.indexOf('en') > -1) {
document.location.href = 'http://en.athelo.net';
} else {
document.location.href = 'http://athelo.net';
}
