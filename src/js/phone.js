document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone');
    const format = "+(380)-xxx-xx-xx";

    phoneInput.addEventListener('focus', function() {
        if (this.value === '') {
            this.value = format;
        }
    });

    phoneInput.addEventListener('input', function(e) {
        const target = e.target;
        let value = target.value.replace(/\D/g, '');

        // Ensure we always have 380 at the start
        if (value.length < 3) {
            value = '380' + value;
        } else if (value.substring(0, 3) !== '380') {
            value = '380' + value.substring(3);
        }

        let result = '+(380)-';
        for (let i = 3; i < value.length && i < 12; i++) {
            if (i === 6) result += '-';
            if (i === 8) result += '-';
            result += value[i];
        }

        target.value = result;
    });
});