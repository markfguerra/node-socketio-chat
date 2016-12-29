var chatApi = (function() {
	// Private members

	// The socket that communicates with the server
	var socket = io();

	// Set up functions

	// The event that fires when a message is received from the server
	socket.on('chat message', function(messageText) {
		// default listener
		console.log("Chat received from server: " + messageText);
	});

	// Return value is the public API
	return {
		sendText : function(messageText) {
			// Send message to the server.
			// Sends an event called 'chat message' containing the messageText

			// Instead of messageText, we could opt to send objects.
			socket.emit('chat message', messageText);
		},
		// Sets the listener for receiving a chat message from the server
		onMessageReceived : function(f) {
			if (typeof(f) === "function")
				socket.on('chat message', f);
			else
				console.log("Tried to call chatApi.onMessageReceived() without a function.");
		}
	};
})();

module.exports = chatApi;