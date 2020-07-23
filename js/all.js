// input 欄位驗證元件註冊
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);

// form 表單驗證元件註冊
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);

// class 設定
VeeValidate.configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
    }
});

new Vue({
    el: '#app',
    data: {
        email: '',
        text: '',
        number: '',
        address: '',
        message: '',
        payfor: '',
    }
})