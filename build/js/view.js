var View = function() {
    this._menu = null;
};

View.prototype = {
    /**
     * Returns menu object.
     *
     * @return $
     */
    getMenu: function() {
        if (!this._menu) {
            this._menu = $('#menu');
        }

        return this._menu;
    },

    /**
     * Shows menu.
     *
     * @return null
     */
    showMenu: function() {
        this.getMenu().css({opacity: 1.0}).show();
    },

    /**
     * Hides menu.
     *
     * @return null
     */
    hideMenu: function() {
        this.getMenu().hide();
    }
};