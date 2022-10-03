let forms = document.forms.news;

let inputs = forms.elements;

fieldInputEvent('input', inputs.name, 5)
fieldInputEvent('input', inputs.descShort, 10)
fieldInputEvent('input', inputs.descLarge, 20)
fieldInputEvent('input', inputs.price, 2)
fieldInputEvent('img', inputs.image)

fieldInputEvent('focus', inputs.name, 5)
fieldInputEvent('focus', inputs.descShort, 10)
fieldInputEvent('focus', inputs.descLarge, 20)
fieldInputEvent('focus', inputs.price, 2)