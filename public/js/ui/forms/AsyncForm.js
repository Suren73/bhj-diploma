/**
 * Класс AsyncForm управляет всеми формами
 * приложения, которые не должны быть отправлены с
 * перезагрузкой страницы. Вместо этого данные
 * с таких форм собираются и передаются в метод onSubmit
 * для последующей обработки
 * */
class AsyncForm {
	/**
	 * Если переданный элемент не существует,
	 * необходимо выкинуть ошибку.
	 * Сохраняет переданный элемент и регистрирует события
	 * через registerEvents()
	 * */
	constructor(element) {
		if (!element) return alert('Ошибка!');
		this.element = element;
		this.registerEvents();
	}

	/**
	 * Необходимо запретить отправку формы и в момент отправки
	 * вызывает метод submit()
	 * */
	registerEvents() {
		// this.forms = document.querySelectorAll('.form');
		// console.log(this.forms);
		this.element.addEventListener('submit', (e) => {
			e.preventDefault();
			this.submit();
		})

	}

	/**
	 * Преобразует данные формы в объект вида
	 * {
	 *  'название поля формы 1': 'значение поля формы 1',
	 *  'название поля формы 2': 'значение поля формы 2'
	 * }
	 * */
	getData() {
		this.data = new Object();
		this.formData = new FormData(this.element);
		this.entries = this.formData.entries();
		for (let item of this.entries) {
			const name = item[0],
				value = item[1];
			this.data[name] = value;
		}
		return this.data;
	}

	onSubmit(options) {

	}

	/**
	 * Вызывает метод onSubmit и передаёт туда
	 * данные, полученные из метода getData()
	 * */
	submit() {
		this.onSubmit(this.getData());
	}
}