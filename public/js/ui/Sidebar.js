/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
	/**
	 * Запускает initAuthLinks и initToggleButton
	 * */
	static init() {
		this.initAuthLinks();
		this.initToggleButton();
	}

	/**
	 * Отвечает за скрытие/показа боковой колонки:
	 * переключает два класса для body: sidebar-open и sidebar-collapse
	 * при нажатии на кнопку .sidebar-toggle
	 * */
	static initToggleButton() {
		this.buttonPushMenu = document.querySelector('.sidebar-toggle');
		this.bodyMini = document.querySelector('.sidebar-mini');
		this.buttonPushMenu.addEventListener('click', (e) => {
			e.preventDefault();

			this.bodyMini.classList.toggle('sidebar-open');
			this.bodyMini.classList.toggle('sidebar-collapse');
		})
	}

	/**
	 * При нажатии на кнопку входа, показывает окно входа
	 * (через найденное в App.getModal)
	 * При нажатии на кнопку регастрации показывает окно регистрации
	 * При нажатии на кнопку выхода вызывает User.logout и по успешному
	 * выходу устанавливает App.setState( 'init' )
	 * */
	static initAuthLinks() {
		this.menuItemLogin = document.querySelector('li.menu-item_login');
		this.menuItemRegister = document.querySelector('li.menu-item_register');
		this.menuItemLogin.addEventListener('click', (e) => {
			e.preventDefault();
			App.getModal('login').open();
		});
		this.menuItemRegister.addEventListener('click', (e) => {
			e.preventDefault();
			App.getModal('register').open();
		})
	}
}