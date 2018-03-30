<SCRIPT>
            $(document).ready(function(){
                var getRandomNumberId = document.getElementById("randomNumber");
                var getLoginFormId = document.getElementById("login_form");
                var getLoginButtonId = document.getElementById("login_ok");
                var randomNumber = Math.random();

                getRandomNumberId.innerHTML = randomNumber;

                getLoginButtonId.onclick = function()
                {
                    LoginEvent();
                }

                var LoginEvent = function(){
                    var getRandomNumberInputId = document.getElementById("randomNumberInput");
                    var getUserNumberValue = getRandomNumberInputId.value;

                    if ( randomNumber == getUserNumberValue ){
                        getLoginFormId.submit();
                    }
                    else{
                        alert("입력한 숫자다릅니다.");
                        getLoginFormId.reset();
                    }
                }
            }
        </SCRIPT>