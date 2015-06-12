var View = function() {
    this._containers = {};
    this._cards = [];
};

View.CONTAINER_MENU = 'menu';
View.CONTAINER_DECK = 'deck';
View.CONTAINER_TRASH = 'trash';
View.CONTAINER_TABLE = 'table';
View.CONTAINER_PLAYER1 = 'player1';
View.CONTAINER_PLAYER2 = 'player2';
View.CONTAINER_PLAYER3 = 'player3';
View.CONTAINER_PLAYER4 = 'player4';
View.CONTAINER_PLAYER5 = 'player5';
View.CONTAINER_PLAYER6 = 'player6';

View.prototype = {
    /**
     * Initializes new game.
     * Moves all cards into the deck.
     * Sets up trump.
     *
     * @param string trump Card trump.
     *
     * @return undefined
     */
    init: function(trump) {
        this.buildDeck(trump);
    },

    /**
     * Moves card into the target.
     *
     * @param integer cardNum          Card number.
     * @param string  target           Target id.
     * @param string  addCompleteClass Add class on complete.
     * @param string  onComplete       On complete callback.
     *
     * @return undefined
     */
    moveCard: function(cardNum, target, addCompleteClass, onComplete) {
        var targetOffset = this.getContainer(target).offset();
        var self = this;
        this._cards[cardNum].animate({
            left: (
                targetOffset.left
                    + ((this.getContainer(target).width() / 2) - (this._cards[cardNum].width() / 2))
                ),
            top: (
                targetOffset.top
                    + 2
//                    + this.getContainer(target).height() / 2
                )
        }, {
            complete: function() {
                self._cards[cardNum].removeAttr('style').removeAttr('class').addClass('card card-back');

                if (addCompleteClass) {
                    self._cards[cardNum].addClass(addCompleteClass);
                }

                self._cards[cardNum].css({position: 'static'});
                self.getContainer(target).append(self._cards[cardNum]);

                if (onComplete) {
                    onComplete();
                }
            }
        });
    },

    /**
     * Builds deck.
     *
     * @param string Card trump.
     *
     * @return undefined
     */
    buildDeck: function(trump) {
        $('.card').remove();
        this._cards = [];
        var rotateList = [
            'card-rotate-left',
            'card-rotate-right',
            ''
        ];

        for (var iter = 0; iter < 36; iter++) {
            var $card = $('<div class="card"></div>');

            if (iter == 35) {
                $card.addClass('trump-card');
                $card.addClass('card' + trump);
            } else {
                $card.addClass('card-back');
                $card.addClass(rotateList[Math.floor(Math.random()*rotateList.length)]);
            }

            this.getDeck().append($card);

            this._cards.push($card);
        }
    },

    /**
     * Returns container object.
     *
     * @param string containerName Container name.
     *
     * @return $
     */
    getContainer: function(containerName) {
        if (!(containerName in this._containers)) {
            this._containers[containerName] = $('#' + containerName);
        }

        return this._containers[containerName];
    },

    /**
     * Returns menu object.
     *
     * @return $
     */
    getMenu: function() {
        return this.getContainer(View.CONTAINER_MENU);
    },

    /**
     * Returns deck object.
     *
     * @return $
     */
    getDeck: function() {
        return this.getContainer(View.CONTAINER_DECK);
    },

    /**
     * Shows menu.
     *
     * @return undefined
     */
    showMenu: function() {
        this.getMenu().show();
    },

    /**
     * Hides menu.
     *
     * @return undefined
     */
    hideMenu: function() {
        this.getMenu().hide();
    }
};