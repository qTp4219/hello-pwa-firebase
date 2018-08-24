importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyC17q_yAeO2GSxJ3du_1_FgHjr3fPypB9U",
    authDomain: "hello-pwa-firebase.firebaseapp.com",
    databaseURL: "https://hello-pwa-firebase.firebaseio.com",
    projectId: "hello-pwa-firebase",
    storageBucket: "",
    messagingSenderId: "602879116388"
  };
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'Hello World';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});