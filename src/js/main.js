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

var addFullWidth = () => {
	let helloWorldPortlet = document.querySelector("#portlet_com_liferay_hello_world_web_portlet_HelloWorldPortlet");

	
	if (helloWorldPortlet.firstElementChild !== null) {
		helloWorldPortlet = helloWorldPortlet.firstElementChild
		helloWorldPortlet.classList.add("full-width");
		return console.log("made full width", helloWorldPortlet);
	} else {
		return console.log("did not add full width, check class names")
	}
}

// var makeExcelsior = () => {
// 	var bodyText = document.querySelector("#portlet_com_liferay_hello_world_web_portlet_HelloWorldPortlet").children[0].children[1].children[0].innerHTML
// 	bodyText = "EXCELSIOR"
// 	console.log('make xl', bodyText);
// }	

addFullWidth();
