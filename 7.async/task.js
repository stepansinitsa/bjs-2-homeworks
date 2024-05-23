class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, CallbackFunc) {
		if ((arguments.length != 2) || (time === null) || (CallbackFunc === null)) {
			throw new Error('Отсутствуют обязательные аргументы');
		} else {
			let ind = false;
			if (this.alarmCollection.length > 0) {
				ind = this.alarmCollection.find((item) => item.time === time);
			}
			if (ind) {
				console.warn('Уже присутствует звонок на это же время');
			} else {
				this.alarmCollection.push({
					callback: CallbackFunc,
					time: time,
					canCall: true
				});
			}
		}
	}

	removeClock(time) {
		let ind = this.alarmCollection.find((item) => item.time === time);
		if (ind) {
			this.alarmCollection.splice(ind, 1);
		}
	}

	getCurrentFormattedTime() {
		let date = new Date();
		return date.toLocaleTimeString().substr(0, 5);
	}

	start() {
		if (this.intervalId === null) {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach((item) => {
					if ((item.time === this.getCurrentFormattedTime()) && item.canCall) {
						item.canCall = false;
						item.callback();
					}
				});
			}, 1000);
		}
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach((item) => {
			item.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}