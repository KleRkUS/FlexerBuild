const buttonPhone = document.getElementById('form__phone__button');

buttonPhone.onclick = () => {
  let check = checkPhone(document.getElementById('form__phone__input').value);
  if (check == null) {
    alert('Phone is invalid');
    return;
  } else {
    createCaptcha();
    document.getElementById('captcha_box').style.display = "inline-block";
  }
}


function checkPhone(phone) {
  const regex = /^\+?[0-9]{10,13}/;
  return phone.match(regex);
}





var code;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  //storing captcha so that can validate you can save it somewhere else according to your specific requirements
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}
function validateCaptcha() {
  event.preventDefault();
  debugger
  if (document.getElementById("cpatchaTextBox").value == code) {
    sendRequest();
  }else{
    alert("Invalid Captcha. try Again");
    createCaptcha();
  }
}

async function sendRequest() {

  let promise = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(document.getElementById('form__phone__input').value);
  }.then(res) => {
    alert('Thank you!');
  }.catch(err) => {
    console.log(err);
    alert('Sorry! Something went wrong.');
  });

}