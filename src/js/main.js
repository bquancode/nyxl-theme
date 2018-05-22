AUI().ready(
	'liferay-sign-in-modal',
	function(A) {
		var signIn = A.one('.sign-in > a');

		if (signIn && signIn.getData('redirect') !== 'true') {
			signIn.plug(Liferay.SignInModal);
		}
	}
);

console.log("Hello! Welcome to NYXL's development home page");

var addFullWidth = (elem) => {
	
	let helloWorldPortlet = document.querySelector(elem);
	
	if (helloWorldPortlet.firstElementChild == false) {
		return console.log("did not add full width, check html of", elem)
	} else {
		helloWorldPortlet = helloWorldPortlet.firstElementChild
		helloWorldPortlet.classList.add("full-width");
		return console.log("made full width", helloWorldPortlet);
	}
}

// var makeExcelsior = () => {
// 	var bodyText = document.querySelector("#portlet_com_liferay_hello_world_web_portlet_HelloWorldPortlet").children[0].children[1].children[0].innerHTML
// 	bodyText = "EXCELSIOR"
// 	console.log('make xl', bodyText);
// }	

addEventListener("load", addFullWidth("#portlet_com_liferay_hello_world_web_portlet_HelloWorldPortlet"));
