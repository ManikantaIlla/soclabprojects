let timerEl = document.getElementById("timer");
         let defuserEl = document.getElementById("defuser");
        defuserEl.addEventListener("keydown", function(event) {
         let bombDefuserText = defuserEl.value;
          if (event.key === "Enter" && bombDefuserText === "defuse" && countdown !== 0) {
                    clearInterval(intervalid);
                    timerEl.textContent = "You did it";
                }

	});
       let countdown = 10;
	let intervalid = setInterval(function() {
        countdown = countdown - 1;
       timerEl.textContent = countdown;
        if (countdown === 0) {
        timerEl.textContent = "BOOM";
        clearInterval(intervalid);
        }
      }, 1000);