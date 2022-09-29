let forms = document.forms.news;

let inputs = forms.elements;
fieldInputEvent('input', inputs.firstName, 5)
fieldInputEvent('input', inputs.lastName, 5)
fieldInputEvent('input', inputs.userName, 5)
fieldInputEvent('mail', inputs.email)
fieldInputEvent('passwd', inputs.passwd)
fieldInputEvent('img', inputs.avatar)

fieldInputEvent('focus', inputs.firstName, 5)
fieldInputEvent('focus', inputs.lastName, 5)
fieldInputEvent('focus', inputs.userName, 5)
fieldInputEvent('focus', inputs.email)
fieldInputEvent('focus', inputs.passwd)

