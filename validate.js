function checkSID() {
	let sid = (document.getElementById("sid").value).trim();
	if (/^\d{10}$/.test(sid)) {  
	  return true;
	} else {
	  return false;
	}
  }

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();

  if (/^\d+$/.test(candi)) { 
    let num = parseInt(candi);
    if (num >= 1 && num <= 10) {
      return true;
    }
  }
  return false;
}

function validateForm(){
	if(!checkSID()){
	  alert("Invalid value for Student ID!");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!!");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}