var chatApi = require("./chatApi");

chatApi.onMessageReceived(function(messageText) {
	// todo: learn why these types of operations are expensive and how to
	// mitigate those expenses;
	// Add a new message to the list of messages
	$('#messages').append($('<li class="list-group-item">').text(messageText));

	// Scroll the chat view to the bottom so the last message is shown,
	// if the user is already scrolled to the bottom or is fairly close.
	var $viewport = $('.viewport')[0];
	var scrollTop = $viewport.scrollTop;
	var scrollHeight = $viewport.scrollHeight;
	var viewportHeight = $viewport.clientHeight;
	var thresh = 100;
	if(scrollHeight -  scrollTop - viewportHeight <= thresh) {
		$viewport.scrollTop = scrollHeight;
	}
});

// Listener for Send button
$('form').submit(function(){
	// Selector for the text input box
	var inputBoxSel = '#message';

	// Text from the input box
	var messageText = $(inputBoxSel).val();
	
	chatApi.sendText(messageText);

	// Clear messageText input box
	$(inputBoxSel).val('');

	// Prevent the submit event from reaching the default submit action
	return false;
});
