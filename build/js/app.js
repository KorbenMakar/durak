var App = function() {
    this._view = new View();
    this._gameId = null;
};

App.prototype = {
    /**
     * Stops game.
     *
     * @return null
     */
    stopGame: function() {
        //TODO: move all cards to the deck.

        this._view.showMenu();
    },

    /**
     * Starts game.
     *
     * @param int playersCount Count of players.
     *
     * @return null
     */
    startGame: function(playersCount) {
        this._gameId = this.getGameId();
        //TODO: init view cards.
        this._view.hideMenu();
    },

    /**
     * Calls to the backend to get backend's game id.
     *
     * @return string
     */
    getGameId: function() {
        //TODO: get game ID from backend.

    },

    /**
     * Returns trump cards ID.
     *
     * @return string
     */
    getTrumpCardId: function() {
        //TODO: implement.
    }
};