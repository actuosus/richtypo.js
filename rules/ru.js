/**
 * Richtypo
 * Typography enhancer for Node.js
 *
 * Rules for Russian language
 *
 * @author Artem Sapegin
 * @copyright 2012 Artem Sapegin (sapegin.me)
 * @license MIT
 */


// Неразрывный пробел
var _nbsp = String.fromCharCode(160);

// Предлоги и союзы
var _prepos = 'а|ай|в|вы|во|да|до|ее|её|ей|за|и|из|их|к|ко|мы|на|не|ни|но|ну|о|об|ой|он|от|по|с|со|то|ты|у|уж|я';

// Частицы
var _particles = 'б|бы|ж|же|ли|ль';

// Месяцы
var _months = 'января|февраля|марта|апреля|мая|июня|июля|августа|сентября|ноября|декабря';


module.exports = {
	_spaces_lite: [
		[/\s—/g, _nbsp + '—'],  // Тире
		[/и\sт.\sд./gi, 'и' + _nbsp + 'т.' + _nbsp + 'д.'],  // и т. д.
		[/и\sт.\sп./gi, 'и' + _nbsp + 'т.' + _nbsp + 'п.']  // и т. п.
	],
	_spaces: [
		// Номер
		[/№\s/g, '№' + _nbsp],

		// Параграф
		[/§\s/g, '§' + _nbsp],

//		// Инициалы
//		[/(?!<nobr>)((?:[А-ЯЁ]\.\s){1,2}[А-ЯЁ][а-яё]+)/g, '<nobr>$1</nobr>'],
//
//		// Слова через дефис
//		[/(?!<nobr>)([^а-яёА-ЯЁ]|^)((?:[а-яёА-ЯЁ]{1,2}(?:\-[а-яёА-ЯЁ]+))|(?:[а-яёА-ЯЁ]+(?:\-[а-яёА-ЯЁ]{1,2})))(?![-а-яёА-ЯЁ])/g, '$1<nobr>$2</nobr>'],

		// Предлоги и союзы
		[new RegExp('([^а-яёА-ЯЁ]|^)(' + _prepos + ')\\s', 'gi'), '$1$2' + _nbsp],

		// Частицы
		[new RegExp('\\s(' + _particles + ')(?![-а-яё])', 'gi'), _nbsp + '$1'],
		
		// Валюты
		[/(\d)\s(\$|р\.|руб\.)/gi, '$1' + _nbsp + '$2'],

		// Год (1917 г.)
		[/\b(\d{4})\s(гг?\.)/gi, '$1' + _nbsp + '$2'],
		
		// Даты (25 февраля)
		[new RegExp('(\\d)\\s(' + _months + ')', 'gi'), '$1' + _nbsp + '$2']
	],
	_lite: [
		// Многоточие
		[/\.{2,}/g, '…'],

		// Тире
		[/---?/g, '—'],
		[/ - /g, ' — '],
		[/>- /g, '>— '],
		[/([,\)])- /g, '$1 — '],
		[/(^|\n)\-/g, '$1&mdash;']  // For strange reason '\n—' replace '\n' with space
	],
	_quotes: [
		[/"([а-яёa-z0-9])/gi, '«$1'],
		[/"/gi, '»']
	],
	_abbrs: [
		[/([А-ЯЁA-Z]{3,})/g, '<abbr>$1</abbr>']
	]
};