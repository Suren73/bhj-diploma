/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
	/**
	 * Устанавливает текущий элемент в свойство element
	 * Регистрирует обработчики событий с помощью Modal.registerEvents()
	 * Если переданный элемент не существует,
	 * необходимо выкинуть ошибку.
	 * */
	constructor(element) {
		this.element = element;
		this.buttonModal = document.querySelectorAll('[data-dismiss="modal"]');
	}

	/**
	 * При нажатии на элемент с data-dismiss="modal"
	 * должен закрыть текущее окно
	 * (с помощью метода Modal.onClose)
	 * */
	registerEvents() {

	}

	/**
	 * Срабатывает после нажатия на элементы, закрывающие окно.
	 * Закрывает текущее окно (Modal.close())
	 * */
	onClose(e) {

	}
	/**
	 * Открывает окно: устанавливает CSS-свойство display
	 * со значением «block»
	 * */
	open() {

	}
	/**
	 * Закрывает окно: удаляет CSS-свойство display
	 * */
	close() {

	}
}