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
}