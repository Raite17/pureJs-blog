import { Component } from "../core/component";

export class NavigationComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }
}

function tabClickHandler(e) {
    e.preventDefault();
    if (e.target.classList.contains('tab')) {
        Array.from(this.$el.querySelectorAll('.tab')).forEach(tab => {
            tab.classList.remove('active');
        });
        e.target.classList.add('active');
    }
}