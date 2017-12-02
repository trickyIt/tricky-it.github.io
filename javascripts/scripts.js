
		function animation(x) {
		    x.classList.toggle("change");
		}
		function collapse(){
			var c = document.getElementById("menubar");
		    if (c.className === "navbar") {
		        c.className += " open";
		    } else {
		        c.className = "navbar";
		    }
		}
