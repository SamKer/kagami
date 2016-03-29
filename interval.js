/**
 * Interval
 */
O2.createClass('Kagami.Interval', {
	
	_time : 0,
	_timer : false,
	show : false,
	elmtTimer : false,
	elmtTime : false,
	currentTime : false,
	timeToSync : false,
	
	__construct : function() {
		this.elmtTimer = document.createElement("div");
		this.elmtTimer.setAttribute('class', 'timer');
		this.elmtTimer.style = "position:absolute;top:0;left:0;";
		var title = document.createElement("span");
		title.innerHTML = "timer: ";
		this.elmtTime = document.createElement("span");
		this.elmtTime.setAttribute('id', 'time');
		this.elmtTimer.appendChild(title);
		this.elmtTimer.appendChild(this.elmtTime);
		document.getElementsByTagName('body')[0].appendChild(this.elmtTimer);
		this.currentTime = Math.floor(Date.now() / 1000);
	},
	
	_interval : function() {
		this._time++;
		this.elmtTime.innerHTML = this._time + " s";
	},
	
	start : function() {
		this._timer = setInterval((function() {
			this._interval();
		}).bind(this), 1000);
	},
	
	stop : function() {
		clearInterval(this._timer);
		this._time = 0;
	},
	
	pause : function() {
		clearInterval(this._timer);
	},
	resume : function() {
		this.start();
	},
	getTime : function() {
		return this._time;
	},
	
	show : function() {
		this.elmtTimer.style.display = "block";
	},
	
	getCurrentTime : function() {
		return Date.now() / 1000 | 0;
	},
	
	synchronize : function(dateBroadcaster) {
		this.stop();
		// synchro dans 1 seconde
		while (this.getCurrentTime() < dateBroadcaster) {
			
		}
		this.start();
	}
});