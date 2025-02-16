const CartLocators = {
    cart:'.shop-menu > .nav > :nth-child(3) > a',
    proceedtocheckout:'.btn.btn-default.check_out',
    placeorder:'.btn.btn-default.check_out',
    nameoncard:'[data-qa="name-on-card"]',
    cardnumber:'[data-qa="card-number"]',
    cvc:'.form-control.card-cvc',
    ExpirationMM:'.form-control.card-expiry-month',
    ExpirationYY:'.form-control.card-expiry-year',
    Confirmorder:'.form-control.btn.btn-primary.submit-button'
}
export default CartLocators;