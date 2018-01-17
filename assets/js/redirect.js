var language = navigator.browserLanguage;

// alert(language);

if (language.indexOf('in') > -1) {
document.location.href = 'http://in.athelo.net';
} else {
document.location.href = 'http://athelo.net';
}
