function setup() {
  input = document.getElementById('input')
  output = document.getElementById('output')
  outputText = document.getElementById('output-text')
  copy = document.getElementById('copy')
  
  input.addEventListener('input', parse);
  copy.addEventListener('click', copyToClipboard)
  parse()
}

function parse() {
  str = input.value
  if(str.length == 0) {
    outputText.value = ""
    output.style.visibility = "hidden"
  }

  out = str.replace(RegExp("\\?igsh=.*"), "")
  out = out.replace(".instagram.com", ".kkclip.com")
  if (str != out) {
    outputText.value = out
    output.style.visibility = "visible"
  }
}

function copyToClipboard() {
  navigator.clipboard.writeText(outputText.value).then(
    () => {
      copy_value_before = copy.value
      copy.value = "Copied...";
      setTimeout(() => {
        copy.value = copy_value_before
      }, 1500);
    },
    () => {},
  );
}
