new Vue({
    el: '#app',
    data: {
        cartItems: [
            { name: 'Perfume', price: 10.27, quantity: 2 },
            { name: 'Premium Chocolates', price: 20.13, quantity: 1 },
            { name: 'Souvenirs', price: 51.12, quantity: 1 },
            { name: 'Skincare Kit', price: 30.14, quantity: 1 }
        ]
    },
    computed: {
        subtotal() {
            return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        },
        grandTotal() {
            return this.roundToFiveSen(this.subtotal);
        }
    },
    methods: {
        // Round the input to nearest 5 sen
        roundToFiveSen(amount) {
            return Math.round(amount * 20) / 20;
        },
        updateQuantity(index, amount) {
            const item = this.cartItems[index];
            item.quantity += amount;
            if (item.quantity < 0) {
                item.quantity = 0;
            }
        },
        calculateTotal() {
            alert(`Grand Total: MYR ${this.grandTotal.toFixed(2)}`);
        }
    }
});
