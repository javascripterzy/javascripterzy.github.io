const pytania = [
  {
    pytanie: "Jakiego języka skryptowego używa się do tworzenia dynamicznych stron WWW po stronie klienta?",
    odpowiedzi: ["C#", "Perl", "PHP", "JavaScript"],
    poprawna: 3
  },
  {
    pytanie: "Jak nazywa się technika umożliwiająca asynchroniczną komunikację z serwerem bez przeładowania strony?",
    odpowiedzi: ["PHP", "XML", "AJAX", "VBScript"],
    poprawna: 2
  },
  {
    pytanie: "W jaki sposób deklaruje się zmienną w JavaScript?",
    odpowiedzi: ["var, let lub const", "int lub float", "dim lub set", "declare variable"],
    poprawna: 0
  },
  {
    pytanie: "Jakiego typu danych nie ma w JavaScript?",
    odpowiedzi: ["String", "Number", "Boolean", "Integer"],
    poprawna: 3
  },
  {
    pytanie: "Jakiego operatora używa się do porównania wartości bez uwzględniania typu?",
    odpowiedzi: ["==", "===", "!=", "!=="],
    poprawna: 0
  },
  {
    pytanie: "Jakiego operatora używa się do porównania wartości wraz z typem?",
    odpowiedzi: ["==", "===", "!=", "!=="],
    poprawna: 1
  },
  {
    pytanie: "Jak nazywa się funkcja wbudowana, która konwertuje tekst na liczbę?",
    odpowiedzi: ["parseInt()", "toNumber()", "Number.parse()", "int()"],
    poprawna: 0
  },
  {
    pytanie: "Który z typów danych w JavaScript może przyjmować wartość true lub false?",
    odpowiedzi: ["Number", "Boolean", "String", "Array"],
    poprawna: 1
  },
  {
    pytanie: "Jak deklaruje się funkcję w JavaScript?",
    odpowiedzi: ["function nazwa() {}", "def nazwa() {}", "func nazwa() {}", "method nazwa() {}"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda tablicy służy do dodawania elementu na końcu?",
    odpowiedzi: ["push()", "pop()", "shift()", "unshift()"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda tablicy usuwa ostatni element?",
    odpowiedzi: ["push()", "pop()", "shift()", "unshift()"],
    poprawna: 1
  },
  {
    pytanie: "Jakiego słowa kluczowego używa się do sprawdzenia warunku?",
    odpowiedzi: ["if", "for", "while", "switch"],
    poprawna: 0
  },
  {
    pytanie: "Które słowo kluczowe wprowadza pętlę iterującą określoną liczbę razy?",
    odpowiedzi: ["if", "for", "while", "switch"],
    poprawna: 1
  },
  {
    pytanie: "Które słowo kluczowe tworzy pętlę warunkową sprawdzającą warunek przed wykonaniem kodu?",
    odpowiedzi: ["do...while", "while", "for", "switch"],
    poprawna: 1
  },
  {
    pytanie: "Która metoda stringa zwraca długość tekstu?",
    odpowiedzi: ["length()", "size()", "length", "count()"],
    poprawna: 2
  },
  {
    pytanie: "Jak odwołać się do elementu HTML po jego id w JavaScript?",
    odpowiedzi: ["getElementById()", "querySelector()", "getElementsByClassName()", "getElementsByTagName()"],
    poprawna: 0
  },
  {
    pytanie: "Jak w JavaScript definiuje się stałą, której wartość nie może być zmieniona?",
    odpowiedzi: ["var", "let", "const", "static"],
    poprawna: 2
  },


  {
    pytanie: "Jakiego zdarzenia używa się do wykrycia kliknięcia myszką?",
    odpowiedzi: ["onmouseover", "onclick", "onchange", "onfocus"],
    poprawna: 1
  },
  {
    pytanie: "Która metoda dodaje nowy element DOM do rodzica?",
    odpowiedzi: ["appendChild()", "insertBefore()", "createElement()", "getElementById()"],
    poprawna: 0
  },
  {
    pytanie: "Które zdarzenie wykrywa zmianę wartości w polu input?",
    odpowiedzi: ["onchange", "onclick", "oninput", "onkeypress"],
    poprawna: 0
  },

  {
    pytanie: "Jakiego słowa kluczowego używa się, aby zakończyć pętlę lub switch?",
    odpowiedzi: ["break", "stop", "exit", "return"],
    poprawna: 0
  },
  {
    pytanie: "Jakiego słowa kluczowego używa się do kontynuowania następnej iteracji pętli?",
    odpowiedzi: ["continue", "next", "skip", "break"],
    poprawna: 0
  },
  {
    pytanie: "Który operator służy do łączenia stringów w JavaScript?",
    odpowiedzi: ["+", "&", "concat()", "*"],
    poprawna: 0
  },
  {
    pytanie: "Która funkcja wyświetla tekst w konsoli przeglądarki?",
    odpowiedzi: ["console.log()", "alert()", "print()", "echo()"],
    poprawna: 0
  },
  {
    pytanie: "Która funkcja wyświetla okno alertu?",
    odpowiedzi: ["console.log()", "alert()", "prompt()", "confirm()"],
    poprawna: 1
  },
  {
    pytanie: "Która funkcja wyświetla okno z możliwością wprowadzenia tekstu przez użytkownika?",
    odpowiedzi: ["console.log()", "alert()", "prompt()", "confirm()"],
    poprawna: 2
  },
  {
    pytanie: "Która funkcja wyświetla okno z potwierdzeniem (OK/Cancel)?",
    odpowiedzi: ["console.log()", "alert()", "prompt()", "confirm()"],
    poprawna: 3
  },
  {
    pytanie: "Który typ pętli gwarantuje wykonanie ciała przynajmniej raz?",
    odpowiedzi: ["while", "for", "do...while", "foreach"],
    poprawna: 2
  },
  {
    pytanie: "Co zwraca metoda array.includes(element)?",
    odpowiedzi: ["element", "index", "true/false", "nic"],
    poprawna: 2
  },
  {
    pytanie: "Jak sprawdzić, czy zmienna jest tablicą?",
    odpowiedzi: ["typeof x === 'array'", "x instanceof Array", "Array.isArray(x)", "Obie B i C są prawidłowe"],
    poprawna: 3
  },
  {
    pytanie: "Który operator logiczny oznacza negację?",
    odpowiedzi: ["&&", "||", "!", "~"],
    poprawna: 2
  },
  {
    pytanie: "Który operator logiczny oznacza koniunkcję (AND)?",
    odpowiedzi: ["&&", "||", "!", "&"],
    poprawna: 0
  },
  {
    pytanie: "Który operator logiczny oznacza alternatywę (OR)?",
    odpowiedzi: ["&&", "||", "!", "|"],
    poprawna: 1
  },
  {
    pytanie: "Co zwraca metoda string.toUpperCase()?",
    odpowiedzi: ["tekst w dużych literach", "tekst w małych literach", "pierwszą literę wielką", "nic"],
    poprawna: 0
  },
  {
    pytanie: "Co zwraca metoda string.toLowerCase()?",
    odpowiedzi: ["tekst w dużych literach", "tekst w małych literach", "pierwszą literę wielką", "nic"],
    poprawna: 1
  },
  {
    pytanie: "Która metoda tablicy zwraca nową tablicę z wybranych elementów?",
    odpowiedzi: ["filter()", "map()", "reduce()", "forEach()"],
    poprawna: 0
  },

  {
    pytanie: "Jakiego zdarzenia używa się do wykrycia ruchu myszką?",
    odpowiedzi: ["onclick", "onmousemove", "onkeypress", "onload"],
    poprawna: 1
  },
  {
    pytanie: "Jakiego zdarzenia używa się, aby wykryć załadowanie strony?",
    odpowiedzi: ["onload", "DOMContentLoaded", "onready", "onopen"],
    poprawna: 0
  },

  {
    pytanie: "Które słowo kluczowe tworzy obiekt?",
    odpowiedzi: ["new", "object", "create", "instance"],
    poprawna: 0
  },
  {
    pytanie: "Jakiego słowa kluczowego używa się, aby zdefiniować klasę w JS?",
    odpowiedzi: ["class", "function", "object", "type"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda obiektu Math zwraca liczbę losową z przedziału 0–1?",
    odpowiedzi: ["Math.random()", "Math.floor()", "Math.ceil()", "Math.round()"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda obiektu Math zaokrągla w dół do najbliższej liczby całkowitej?",
    odpowiedzi: ["Math.random()", "Math.floor()", "Math.ceil()", "Math.round()"],
    poprawna: 1
  },
  {
    pytanie: "Która metoda obiektu Math zaokrągla w górę do najbliższej liczby całkowitej?",
    odpowiedzi: ["Math.random()", "Math.floor()", "Math.ceil()", "Math.round()"],
    poprawna: 2
  },
  {
    pytanie: "Która metoda obiektu Math zaokrągla do najbliższej liczby całkowitej?",
    odpowiedzi: ["Math.random()", "Math.floor()", "Math.ceil()", "Math.round()"],
    poprawna: 3
  },
  {
    pytanie: "Co zwraca wyrażenie '5' - 2 w JavaScript?",
    odpowiedzi: ["3", "'52'", "NaN", "TypeError"],
    poprawna: 0
  },
  {
    pytanie: "Jakiego typu danych jest null w JavaScript?",
    odpowiedzi: ["object", "null", "undefined", "string"],
    poprawna: 0
  },



  {
    pytanie: "Jakiego operatora używa się do sprawdzenia nierówności wartości?",
    odpowiedzi: ["!=", "!==", "==", "==="],
    poprawna: 0
  },
  {
    pytanie: "Jakiego operatora używa się do sprawdzenia nierówności wartości i typu?",
    odpowiedzi: ["!=", "!==", "==", "==="],
    poprawna: 1
  },
  {
    pytanie: "Jakiego operatora używa się do inkrementacji zmiennej?",
    odpowiedzi: ["++", "--", "+=", "*="],
    poprawna: 0
  },
  {
    pytanie: "Jakiego operatora używa się do dekrementacji zmiennej?",
    odpowiedzi: ["++", "--", "-=", "/="],
    poprawna: 1
  },
  {
    pytanie: "Co zwraca parseInt('10abc')?",
    odpowiedzi: ["10", "NaN", "'10abc'", "0"],
    poprawna: 0
  },
  {
    pytanie: "Co zwraca parseFloat('3.14abc')?",
    odpowiedzi: ["3.14", "NaN", "'3.14abc'", "0"],
    poprawna: 0
  },

  {
    pytanie: "Jak w JS sprawdzisz, czy zmienna x jest większa lub równa 10?",
    odpowiedzi: ["x => 10", "x >= 10", "x =>= 10", "x = 10"],
    poprawna: 1
  },
  {
    pytanie: "Jak w JS sprawdzisz, czy zmienna x jest mniejsza lub równa 5?",
    odpowiedzi: ["x <= 5", "x < 5", "x =< 5", "x => 5"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda stringa usuwa białe znaki na początku i końcu tekstu?",
    odpowiedzi: ["trim()", "slice()", "substr()", "replace()"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda stringa zwraca podciąg od określonego indeksu?",
    odpowiedzi: ["slice()", "split()", "substr()", "trim()"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda stringa zwraca podciąg o określonej długości od startu?",
    odpowiedzi: ["slice()", "substr()", "substring()", "split()"],
    poprawna: 1
  },
  {
    pytanie: "Która metoda stringa dzieli tekst na tablicę według separatora?",
    odpowiedzi: ["slice()", "split()", "substr()", "substring()"],
    poprawna: 1
  },
  {
    pytanie: "Która metoda stringa zwraca część tekstu między dwoma indeksami?",
    odpowiedzi: ["slice()", "substr()", "substring()", "split()"],
    poprawna: 2
  },
  {
    pytanie: "Która metoda tablicy odwraca kolejność elementów?",
    odpowiedzi: ["reverse()", "sort()", "map()", "filter()"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda tablicy sortuje elementy?",
    odpowiedzi: ["reverse()", "sort()", "map()", "filter()"],
    poprawna: 1
  },
  {
    pytanie: "Która metoda tablicy tworzy nową tablicę z wynikami działania funkcji na każdym elemencie?",
    odpowiedzi: ["map()", "filter()", "reduce()", "forEach()"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda tablicy filtruje elementy spełniające warunek?",
    odpowiedzi: ["map()", "filter()", "reduce()", "forEach()"],
    poprawna: 1
  },
  {
    pytanie: "Która metoda tablicy zmniejsza wszystkie elementy do jednej wartości?",
    odpowiedzi: ["map()", "filter()", "reduce()", "forEach()"],
    poprawna: 2
  },
  {
    pytanie: "Która metoda tablicy wykonuje funkcję dla każdego elementu, ale nie zwraca nowej tablicy?",
    odpowiedzi: ["map()", "filter()", "reduce()", "forEach()"],
    poprawna: 3
  },



  {
    pytanie: "Co zwraca Number('123')?",
    odpowiedzi: ["123", "'123'", "NaN", "undefined"],
    poprawna: 0
  },
  {
    pytanie: "Który operator łańcuchowy używa się do łączenia kilku warunków?",
    odpowiedzi: ["&&", "||", "?", ":"],
    poprawna: 0
  },
  {
    pytanie: "Który operator warunkowy stosuje się jako skrót if...else?",
    odpowiedzi: ["&&", "||", "?", ":"],
    poprawna: 2
  },
  {
    pytanie: "Która metoda obiektu Date zwraca aktualną datę i czas?",
    odpowiedzi: ["Date.now()", "new Date()", "Date.get()", "Date.today()"],
    poprawna: 1
  },
  {
    pytanie: "Która metoda obiektu Date zwraca rok?",
    odpowiedzi: ["getFullYear()", "getYear()", "year()", "getDate()"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda obiektu Date zwraca miesiąc (0–11)?",
    odpowiedzi: ["getMonth()", "getUTCMonth()", "getDate()", "getDay()"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda obiektu Date zwraca dzień tygodnia (0–6)?",
    odpowiedzi: ["getDate()", "getDay()", "getMonth()", "getFullYear()"],
    poprawna: 1
  },
  {
    pytanie: "Która metoda obiektu Date zwraca godziny?",
    odpowiedzi: ["getHours()", "getMinutes()", "getSeconds()", "getTime()"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda obiektu Date zwraca minuty?",
    odpowiedzi: ["getHours()", "getMinutes()", "getSeconds()", "getTime()"],
    poprawna: 1
  },
  {
    pytanie: "Która metoda obiektu Date zwraca sekundy?",
    odpowiedzi: ["getHours()", "getMinutes()", "getSeconds()", "getTime()"],
    poprawna: 2
  },
  {
    pytanie: "Która metoda obiektu Date zwraca czas w milisekundach od 1 stycznia 1970?",
    odpowiedzi: ["getTime()", "now()", "Date()", "timestamp()"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda konwertuje liczbę na string?",
    odpowiedzi: ["toString()", "String()", "Number()", "parseInt()"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda konwertuje string na liczbę całkowitą?",
    odpowiedzi: ["toInt()", "Number()", "parseInt()", "parseFloat()"],
    poprawna: 2
  },
  {
    pytanie: "Która metoda konwertuje string na liczbę zmiennoprzecinkową?",
    odpowiedzi: ["toInt()", "Number()", "parseInt()", "parseFloat()"],
    poprawna: 3
  },
  {
    pytanie: "Co zwraca [].length dla pustej tablicy?",
    odpowiedzi: ["0", "1", "undefined", "null"],
    poprawna: 0
  },
  {
    pytanie: "Co zwraca [1,2,3].length?",
    odpowiedzi: ["2", "3", "undefined", "4"],
    poprawna: 1
  },
  {
    pytanie: "Jakiego zdarzenia używa się, aby wykryć wciśnięcie klawisza?",
    odpowiedzi: ["onkeydown", "onkeypress", "onkeyup", "wszystkie powyższe"],
    poprawna: 3
  },
  {
    pytanie: "Która metoda DOM usuwa element?",
    odpowiedzi: ["remove()", "delete()", "removeChild()", "erase()"],
    poprawna: 0
  },
  {
    pytanie: "Która metoda DOM usuwa element dziecko od rodzica?",
    odpowiedzi: ["remove()", "delete()", "removeChild()", "erase()"],
    poprawna: 2
  },
    {
    pytanie: "Jak utworzyć nowy obiekt w JavaScript?",
    odpowiedzi: ["let obj = {}", "let obj = []", "let obj = ()", "let obj = ''"],
    poprawna: 0
  },
  {
    pytanie: "Jak dodać nową właściwość do istniejącego obiektu?",
    odpowiedzi: ["obj.wlasciwosc = 5", "obj.add('wlasciwosc',5)", "obj.push('wlasciwosc',5)", "obj.insert('wlasciwosc',5)"],
    poprawna: 0
  },
  {
    pytanie: "Jak odczytać wartość właściwości obiektu?",
    odpowiedzi: ["obj.wlasciwosc", "obj.get('wlasciwosc')", "obj[wlasciwosc]", "obj.value('wlasciwosc')"],
    poprawna: 0
  },
  {
    pytanie: "Jak odwołać się do elementu HTML po jego id?",
    odpowiedzi: ["document.getElementById('id')", "document.querySelectorAll('id')", "document.getElementsByTagName('id')", "document.querySelector('class')"],
    poprawna: 0
  },
  {
    pytanie: "Jak odwołać się do wszystkich elementów o danej klasie?",
    odpowiedzi: ["document.querySelectorAll('klasa')", "document.getElementsByClassName('klasa')", "document.getElementById('klasa')", "document.querySelector('class')"],
    poprawna: 1
  },
  {
    pytanie: "Jak odwołać się do pierwszego elementu pasującego do selektora CSS?",
    odpowiedzi: ["document.getElementsByTagName('selector')", "document.querySelectorAll('selector')", "document.querySelector('selector')", "document.getElementById('selector')"],
    poprawna: 2
  },
  {
    pytanie: "Jak odwołać się do wszystkich elementów pasujących do selektora CSS?",
    odpowiedzi: ["document.getElementsByClassName('selector')", "document.querySelector('selector')", "document.getElementsByTagName('selector')", "document.querySelectorAll('selector')"],
    poprawna: 3
  },
  {
    pytanie: "Jak zmienić tekst wewnątrz elementu HTML?",
    odpowiedzi: ["element.value = 'tekst'", "element.textContent = 'tekst'", "element.innerHTML = 0", "element.setText('tekst')"],
    poprawna: 1
  },
  {
    pytanie: "Jak zmienić zawartość HTML elementu?",
    odpowiedzi: ["element.innerHTML = '<p>Nowy tekst</p>'", "element.value = '<p>Nowy tekst</p>'", "element.textContent = '<p>Nowy tekst</p>'", "element.setHTML('<p>Nowy tekst</p>')"],
    poprawna: 0
  },
  {
    pytanie: "Jak dodać nowy element DOM do rodzica?",
    odpowiedzi: ["parent.createChild(child)", "parent.insert(child)", "parent.appendChild(child)", "parent.addChild(child)"],
    poprawna: 2
  },
  {
    pytanie: "Jak usunąć element DOM?",
    odpowiedzi: ["element.delete()", "element.remove()", "parent.removeChild(element)", "element.destroy()"],
    poprawna: 1
  },
  {
    pytanie: "Jak usunąć element dziecko od rodzica?",
    odpowiedzi: ["child.remove()", "parent.removeChild(child)", "child.destroy()", "parent.deleteChild(child)"],
    poprawna: 1
  },
  {
    pytanie: "Jak zmienić atrybut elementu HTML?",
    odpowiedzi: ["element.attr('nazwa','wartosc')", "element.updateAttribute('nazwa','wartosc')", "element.setAttribute('nazwa','wartosc')", "element.change('nazwa','wartosc')"],
    poprawna: 2
  },
  {
    pytanie: "Jak pobrać wartość atrybutu elementu HTML?",
    odpowiedzi: ["element.attr('nazwa')", "element.readAttribute('nazwa')", "element.getAttribute('nazwa')", "element.value('nazwa')"],
    poprawna: 2
  },
  {
    pytanie: "Jak dodać klasę do elementu?",
    odpowiedzi: ["element.className = 'nowa-klasa'", "element.classList.add('nowa-klasa')", "element.setClass('nowa-klasa')", "element.addClass('nowa-klasa')"],
    poprawna: 1
  },
  {
    pytanie: "Jak usunąć klasę z elementu?",
    odpowiedzi: ["element.className = ''", "element.classList.remove('klasa')", "element.deleteClass('klasa')", "element.removeClass('klasa')"],
    poprawna: 1
  }
];
