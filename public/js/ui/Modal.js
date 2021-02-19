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

	}

	/**
	 * При нажатии на элемент с data-dismiss="modal"
	 * должен закрыть текущее окно
	 * (с помощью метода Modal.onClose)
	 * */
	registerEvents() {
		this.buttonModal = document.querySelectorAll('[data-dismiss="modal"]');
		this.buttonModal.forEach((element) => {
			element.addEventListener('click', () => this.onClose());
		});
	}

	/**
	 * Срабатывает после нажатия на элементы, закрывающие окно.
	 * Закрывает текущее окно (Modal.close())
	 * */
	onClose(e) {
		this.close(e)
	}
	/**
	 * Открывает окно: устанавливает CSS-свойство display
	 * со значением «block»
	 * */
	open() {
		this.element.style.display = "block";
		this.registerEvents();
	}
	/**
	 * Закрывает окно: удаляет CSS-свойство display
	 * */
	close() {
		this.element.style.display = null;
	}
}