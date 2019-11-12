// King Chat Responder Bot Script JS

const version = "00.01.00";
const author = "King";
const bot = "KingBot";
var userData = {"name":"","age":"","gender":"","hobby":""};
const responseTextH3 = document.getElementById("responseText");

function hasNumber(myString) {
  return /\d/.test(myString);
}

function getStringVal(type, v) {
	if (type === "name") return v.replace("my", "").replace("My", "").replace("Name", "").replace("name", "").replace("Is", "").replace("is", "");
	else if (type === "age") return v.replace("my", "").replace("My", "").replace("Age", "").replace("age", "").replace("Is", "").replace("is", "");
	else if (type === "gender") return v.replace("my", "").replace("My", "").replace("Gender", "").replace("gender", "").replace("Is", "").replace("is", "");
	else if (type === "hobby") return v.replace("my", "").replace("My", "").replace("Hobby", "").replace("hobby", "").replace("Is", "").replace("is", "");
	else if (type === "calc") return v.replace("whats", "").replace("Whats", "").replace("'", "").replace("'", "").replace("what", "").replace("What", "").replace("is", "").replace("Is", "");
	else if (type === "keyVal") return v.replace("/lock").replace("/LOCK").replace("/unlock").replace("/UNLOCK");
}

function displayResponse(response) {
	responseTextH3.innerHTML = response;
}

function clearResponse() {
	responseTextH3.innerHTML = "";
}

function setUserData(key, data) {
	userData[key] = data;
}

function clearUserData() {
	userData = {"name":"","age":"","gender":"","hobby":""};
}

function respond(v) {
	const value = v.toUpperCase();
	clearResponse();

	if (value.includes("KINGBOT") && value.includes("HELLO")) {
		displayResponse("Hello " + userData.name+ ", how can I help you? say Help me for help.");
	} else if (value.includes("HELLO") && value.includes("THERE")) {
		displayResponse("Hi there");
	} else if (value.includes("HELLO") && !value.includes("THERE")) {
		displayResponse("Hi");
	} else if (value.includes("HI") && !value.includes("THERE")) {
		displayResponse("Hello");
	} else if (value.includes("HI") && value.includes("THERE")) {
		displayResponse("Hello there");
	} else if (value.includes("HOW") && value.includes("ARE") && value.includes("YOU")) {
		const rand = Math.round(Math.random() * 5);
		if (rand === 0) {
			displayResponse("I am doing great " + userData.name);
		} else if (rand === 1) {
			displayResponse("I am doing fine " + userData.name);
		} else if (rand === 2) {
			displayResponse("I am doing bad today " + userData.name);
		} else if (rand === 3) {
			displayResponse("I am doing well " + userData.name);
		} else if (rand === 4) {
			displayResponse("I did a lot of things today " + userData.name);
		} else if (rand === 5) {
			displayResponse("I am doing okay " + userData.name);
		}
	} else if (value.includes("WHAT") && value.includes("YOU") && value.includes("NAME") && !value.includes("MY")) {
		displayResponse("My name is King Bot");
	} else if (value.includes("WHAT") && value.includes("MY") && value.includes("NAME") && !value.includes("YOU")) {
		if (userData.name !== "") displayResponse("Your name is " + userData.name);
		else displayResponse("I don't know your name yet, try to say \"My name is YOUR NAME\" so I know your name.");
	} else if (value.includes("WHAT") && value.includes("MY") && value.includes("AGE") && !value.includes("YOU") && !value.includes("YOU")) {
		if (userData.age !== "") displayResponse("Your age is " + userData.age);
		else displayResponse("I don't know your age yet, try to say \"My age is YOUR AGE\" so I know your age.");
	} else if (value.includes("WHAT") && value.includes("MY") && value.includes("GENDER") && !value.includes("YOU") && !value.includes("YOU")) {
		if (userData.gender !== "") displayResponse("Your gender is " + userData.gender);
		else displayResponse("I don't know your gender yet, try to say \"My gender is YOUR GENDER\" so I know your gender.");
	} else if (value.includes("WHAT") && value.includes("MY") && value.includes("HOBBY") && !value.includes("YOU") && !value.includes("YOU")) {
		if (userData.age !== "") displayResponse("Your hobby is " + userData.hobby);
		else displayResponse("I don't know your hobby yet, try to say \"My age is YOUR HOBBY\" so I know your hobby.");
	} else if (value.includes("MY") && value.includes("NAME") && value.includes("IS") && !value.includes("WHAT") && !value.includes("YOU") && !value.includes("WHY")) {
		displayResponse("Your name is now " + getStringVal("name", v));
		setUserData("name", getStringVal("name", v));
	} else if (value.includes("MY") && value.includes("AGE") && value.includes("IS") && !value.includes("WHAT") && !value.includes("YOU") && !value.includes("WHY")) {
		displayResponse("Your age is now " + getStringVal("age", v));
		setUserData("age", getStringVal("age", v));
	} else if (value.includes("MY") && value.includes("GENDER") && value.includes("IS") && !value.includes("WHAT") && !value.includes("YOU") && !value.includes("WHY")) {
		displayResponse("Your gender is now " + getStringVal("gender", v));
		setUserData("gender", getStringVal("gender", v));
	} else if (value.includes("MY") && value.includes("HOBBY") && value.includes("IS") && !value.includes("WHAT") && !value.includes("YOU") && !value.includes("WHY")) {
		displayResponse("Your hobby is now " + getStringVal("hobby", v));
		setUserData("hobby", getStringVal("hobby", v));
	} else if (value.includes("WHAT") && hasNumber(value)) {
		displayResponse("It's " + eval(getStringVal("calc", v)));
	} else if (value.includes("GIVE") && value.includes("ME") && value.includes("USER") && value.includes("DATA") && !value.includes("YOU") || value.includes("WHAT") && value.includes("MY") && value.includes("USER") && value.includes("DATA") && !value.includes("YOU")) {
		displayResponse("USER DATA: " + JSON.stringify(userData));
	} else if (value.includes("HELP") && value.includes("ME") && !value.includes("YOU")) {
		displayResponse("Here is the list of things you can do<br>1. Say Hello<br>2. Say what is your name<br>3. Say how are you<br>4. Say what is my name<br>5. Say what is my hobby<br>6. Say what is my gender<br>7. Say what is my age<br>8. Say what is 1+1 <br>9. Say give me user data<br>10. Say help me");
	}
	
}
