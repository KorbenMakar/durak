var App = function() {
    this._view = new View();
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
        this._view.hideMenu();
    }
};