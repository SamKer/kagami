/**
 * Logger
 */
O2.createClass('Kagami.Log', {
	TYPE_INFO: "INFO",
	TYPE_WARNING: "WARNING",
	TYPE_ERROR: "ERROR",
	
	_sHost: '',
	_bConsole: false,
	
	/**
	 * @param string sHost
	 * @param boolean bLog à true s'i on souhaite afficher les log
	 */
	__construct: function(sHost, bLog) {
		this._sHost = sHost.toUpperCase();
		this._bConsole = bLog;
	},
	
	log: function(msg, type) {
		if(!type) {
			type = this.TYPE_INFO;
		}
		var prefixe = "## " + this._sHost + " ##::: " + type + ": "; 
		if(this._bConsole) {
			console.log(prefixe, msg);
		}
	},
	
	error: function(msg) {
		this.log(msg, this.TYPE_ERROR);
		throw new Error(msg);
	},
	
	warning: function(msg) {
		this.warn(msg, this.TYPE_ERROR);
	},
	
	info: function(msg) {
		this.log(msg, this.TYPE_INFO);
	}
	
});