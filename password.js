function validate() {
  var password = form.password.value
  var confirm_password = form.confirmpassword.value

  if (password != confirm_password) {
    alert("As senhas precisam ser iguais")
    form.password.focus()
    return false
  }
}

function eyeclick() {}
