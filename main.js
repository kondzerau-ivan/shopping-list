"use strict"
var shoppingList = new Vue({
  el: '#shopping-list',
  data: {
    state: 'edit',
    holder: 'add an item',
    newItem: '',
    items: [
      {
        label: '10 party hats',
        purchased: false
      },
      {
        label: '2 board games',
        purchased: true
      },
      {
        label: '20 cups',
        purchased: false
      },
    ]
  },
  methods: {
    addItem: function () {
      if (this.newItem.trim() !== '') {
        this.items.push({
          label: this.newItem,
          purchased: false
        });
        this.newItem = '';
        this.holder = 'add an item';
      } else {
        this.newItem = '';
        this.holder = 'enter text and try again';
      }
    },
    newList: function () {
      this.items = [];
      this.holder = 'add an item';
    },
    changePurchased: function (item) {
      if (!item.purchased) {
        item.purchased = "true";
      }
    },
    changeState: function (newState) {
      this.state = newState;
    },
  },
  directive: {
    focus: {
      inserted: function (e) {
        e.focus();
      }
    },
  },
});