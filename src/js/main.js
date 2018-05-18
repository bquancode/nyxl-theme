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

let addFullWidth = () => {
	let helloWorldPortlet = document.querySelector("#portlet_com_liferay_hello_world_web_portlet_HelloWorldPortlet");
	helloWorldPortlet = helloWorldPortlet.firstElementChild
	helloWorldPortlet.classList.add("full-width");
}

addFullWidth();