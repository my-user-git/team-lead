let selector = document.querySelectorAll('input[type="tel"]');
// let im = new Inputmask('+7 (999) 999-99-99');
// im.mask(selector);

new JustValidate ('.section-order__form', {
    rules: {
        name: {
            required: true,
            minLength: 4,
            maxLength: 20
        },
        tel: {
            required: true,
            minLength: 10,
            // function: (name, value) => {
            //     const phone = selector.inputmask.unmaskedvalue()
            //     console.log(phone)
            //     return Number(phone) && phone.length === 10
            // }
        },
        // email: {
        //     required: true,
        //     email: true
        // },
    },
    messages: {
        name: {
            minLength: '<span class="form-alert">Недопустимый формат</span>',
            required: '<span class="form-alert">Недопустимый формат</span>'
        },

        tel: {
            required: '<span class="form-alert">Недопустимый формат</span>',
            error: '<span class="form-alert">Недопустимый формат</span>'
        },

        // email: {
        //     required: '<span class="form__label">Укажите ваш email</span>'
        // },
    },
})
