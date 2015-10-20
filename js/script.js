
angular.module('rol', []).controller('ChatController', [
'$scope', // Dependencies of the module
	function($scope){
		var self = this;
		
		self.username = 'User N';
		self.action   = '';
		self.actions  = [{user: 'User 1', action: 'Action 1 !!'}, {user: 'User 2', action: 'Action 2 !!'}];
		self.message  = '';
		self.messages = [{user: 'User 1', message: 'Message 1'}, {user: 'User 2', message: 'Message 2'}];
		
		self.addMessage = function(){
			self.messages.push({user: self.username, message: self.message});
			self.message = '';
		};
		
		self.addAction = function(){
			self.actions.push({user: self.username, action: self.action});
			self.action = '';
		};
	}
]);