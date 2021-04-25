// Пример внешнего вида tooltip по ссылке
// https://overcoder.net/img/1/4/38/33701.png

class Tooltip {
	/**
	  * @param {NodeElement} element элемент к которому необходимо создать tooltip
	  * @param {string}      text    текст содержимого tooltip
	  */
	constructor(element, text) {
		this.element = element
		this.text = text
		this.tooltipElem = null
	}

	// Инициализация работы данного tooltip
	// при наведении на элемент он должен появляться
	init() {
		if(this.tooltipElem){

		}else{
			this.tooltipElem = document.createElement('div');
			this.tooltipElem.className = 'tooltip';
			this.tooltipElem.innerHTML = this.text;
			document.body.append(this.tooltipElem);
	
			let coords = this.element.getBoundingClientRect();
	
			let left = coords.left + this.element.offsetWidth + 10;
	
			let top = coords.top + this.element.offsetHeight/2 - this.tooltipElem.offsetHeight / 2;
	
			this.tooltipElem.style.left = left + 'px';
			this.tooltipElem.style.top = top + 'px';
		}
	}

	// Остановка работы данного tooltip
	// при наведении на элемент больше не выполнять никаких действий
	destroy() {
		if(this.tooltipElem){
			this.tooltipElem.remove();
			this.tooltipElem = null;
		}
	}
}