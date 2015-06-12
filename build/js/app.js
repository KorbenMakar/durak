var App = function() {
    this._view = new View();
    this._gameId = null;
    this._trump = null;
};

App.prototype = {
    /**
     * Stops game.
     *
     * @return undefined
     */
    stopGame: function() {
        this._view.showMenu();
    },

    /**
     * Starts game.
     *
     * @param int playersCount Count of players.
     *
     * @return undefined
     */
    startGame: function(playersCount) {
        var gameInfo = this.getGameInfo();
        this._gameId = gameInfo.gameId;
        this._trump = gameInfo.trump;
        this._view.init(this._trump);

        //TODO: init cards distribution
        var cardNum = 0;
        while (Object.keys(gameInfo.distribute).length) {
            for (var playerId in gameInfo.distribute) {
                var moveCardNum = cardNum;
                gameInfo.distribute[playerId].count--;
                cardNum++;

                var cardClass;
                if (gameInfo.distribute[playerId].count < 0) {
                    delete gameInfo.distribute[playerId];
                    continue;
                } else if ('info' in gameInfo.distribute[playerId]) {
                    cardClass = 'card' + gameInfo.distribute[playerId].info[(gameInfo.distribute[playerId].count - 1)];
                }

                this._view.moveCard(moveCardNum, playerId);
            }
        }

        this._view.hideMenu();
    },

    /**
     * Returns backend's game info.
     *
     * @return {}
     */
    getGameInfo: function() {
        //TODO: implement.
        return {
            gameId: 'wd9skjc87389sdfks3ei0siokdj90',
            trump: '9H',
            distribute: {
                player1: {
                    count: 6
                },
                player2: {
                    count: 6
                },
                player3: {
                    count: 6
                },
                player4: {
                    count: 6
                },
                player5: {
                    count: 6,
                    info: ['6D', 'AS', 'KC', 'KH', '7S', '9H']
                },
                player6: {
                    count: 6
                }
            }
        }
    }
};