;window.addEventListener("DOMContentLoaded", function(event) {

  document.getElementById('trial-form').addEventListener('submit', function(e) {
    e.preventDefault()
   
    var inputs      = e.target.querySelectorAll('input:not([type="submit"])')
        formState   = [],
        isFormValid = ''

    inputs.forEach(function(el) {

      var label = el.attributes['aria-label'].value,
          error = document.getElementById(el.attributes['aria-describedby'].value)

      if ( el.validity.valueMissing ) {
        error.innerHTML = "Field \"" + label + "\" cannot be empty."
        el.parentElement.classList.add('has-error')
        formState.push(0)
      }
      else {

        if ( el.type === "email" && el.validity.patternMismatch ) {
          error.innerHTML = "Please provide a valid email address."
          el.parentElement.classList.add('has-error')
          formState.push(0)
        }
      }

      if ( el.validity.valid ) {
        error.innerHTML = ""
        error.classList.remove('has-error')
        formState.push(1)
      }
    })

    isFormValid = formState.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue
    })

    if (isFormValid === inputs.length)
      alert("Thanks for subscribing !")

    return false
  })
});