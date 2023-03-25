const logoutButton = new LogoutButton();

logoutButton.action = () => {
	const cb = (response) => {
		if (response.success) {
			location.reload();
		}
	}

	ApiConnector.logout(cb);
}

ApiConnector.current((response) => {
	if (response.success) {
		ProfileWidget.showProfile(response.data);
	}
});

const ratesBoard = new RatesBoard();

const updateratesBoard = () => {
	ApiConnector.getStocks((response) => {
		if (response.success) {
			ratesBoard.clearTable();
			ratesBoard.fillTable(response.data);
		};
	});
};

updateratesBoard();
setInterval(() => {
	updateratesBoard();
}, 60000);
