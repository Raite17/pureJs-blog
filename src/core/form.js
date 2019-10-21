export class Form {
    constructor(form, controls) {
        this.form = form;
        this.controls = controls;
    }

    value() {
        const value = {};
        for (let control in this.controls) {
            value[control] = this.form[control].value
        }
        return value;
    }

    clear() {
        for (let control in this.controls) {
            this.form[control].value = '';
        }
    }

    isValid() {
        let isFormValid = true;
        for (let control in this.controls) {
            const validators = this.controls[control];
            let isValid = true;

            for (let validator of validators) {
                isValid = validator(this.form[control].value) && isValid;
            }

            isValid ? clearError(this.form[control]) : setError(this.form[control]);

            isFormValid = isFormValid && isValid;
        }
        return isFormValid;
    }
}

function setError($control) {
    clearError($control);
    const error = '<p class="validation-error">Введите корректное значение</p>';
    $control.classList.add('invalid');
    $control.insertAdjacentHTML('afterend', error);
}

function clearError($control) {
    $control.classList.remove('invalid');
    if ($control.nextSibling) {
        $control.closest('.form-control').removeChild($control.nextSibling);
    }

}