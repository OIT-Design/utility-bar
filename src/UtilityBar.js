import BarFactory from './BarFactory';
import BaseCss from './main.scss';
import 'es6-object-assign/auto';

export default class UtilityBar {

    constructor(options) {
        this.options = this.mergeOptions(options);
        this.bar = new BarFactory(this.options);
    }

    mergeOptions(options) {
        if (! options || ! typeof options === 'object') {
            return this.defaults;
        }

        options = this.validate(options);

        return Object.assign(this.defaults, options);
    }

    validate(options) {
        let validColors = {"red": true, "black": true, "gray": true};

        if (options.hasOwnProperty('color')) {
            options.color = validColors[options.color] === true ? options.color : 'gray';
        }

        if (options.hasOwnProperty('maxWidth') && isNaN( options.maxWidth )) {
            delete options.maxWidth;
        }

        if (options.hasOwnProperty('showBrick') && parseInt(options.showBrick) !== 0) {
            options.showBrick = 1;
        }

        if (options.hasOwnProperty('placeholder')) {
            // Javascript doesn't convert + to space, so we do it manually.
            options.placeholder = decodeURIComponent(options.placeholder.replace(/\+/g, ' '));
            // Strip illegal characters
            options.placeholder = options.placeholder.replace(/[\"\'\`\<\>]/g, '');

            if (options.placeholder.length < 1) {
                delete options.placeholder;
            }
        }

        if (options.hasOwnProperty('googleCustomSearchCode')) {
            // Strip illegal characters
            options.googleCustomSearchCode = options.googleCustomSearchCode.replace(/[\"\'\`\<\>]/g, '');

            if (options.googleCustomSearchCode.length < 1) {
                delete options.googleCustomSearchCode;
            }
        }

        return options;
    }

    render() {
        this.insertCss();

        var barPlaceholder,
            barContainer = document.getElementById('header-contents');
            
        if ((barPlaceholder = document.getElementById('ncstate-utility-bar')) && barPlaceholder.parentNode == barContainer) {
            barContainer.replaceChild(this.bar, barPlaceholder);
        } else {
            barContainer.insertBefore(this.bar, barContainer.firstChild);
        }

        this.initBarControls();
    }

    insertCss() {
        if (this.options.maxWidth !== null) {
            let barcss = document.createElement('style');
            let text = `.ncstate-utility-bar .ncstate-utility-bar-wrapper{ width: 100% !important; max-width: ${this.options.maxWidth}px !important; }`;
            barcss.type = 'text/css';

            if (!!(window.attachEvent && !window.opera)) {
                barcss.styleSheet.cssText = text;
            } else {
                var styleText = document.createTextNode(text);
                barcss.appendChild(styleText);
            }

            document.head.appendChild(barcss);
        }
    }

    initBarControls() {
        this.toggleBtn = document.getElementById('ncstate-utility-bar-toggle-link'),
        this.linksPanel = document.getElementsByClassName('ncstate-utility-bar-links')[0],
        this.firstLink = document.getElementById('ncstate-utility-bar-first-link'),
        this.hiddenClassPattern = /\bis-hidden\b/g,
        this.toggleState = 'hidden';

        this.toggleBtn.addEventListener('click', this.handleToggleButton, false);
        this.toggleBtn.addEventListener('keydown', this.handleTabbedNavigation, false);
        this.linksPanel.addEventListener('transitionend', this.handleTransitionEnd, false);
    }

    toggleLinksPanel() {
        if ( this.toggleState === 'hidden' ) {
            this.linksPanel.style.display = "block";
            this.toggleBtn.nextElementSibling.style.display = "block";
            setTimeout( () => {
                this.linksPanel.className = this.linksPanel.className.replace(this.hiddenClassPattern,'');
            }, 10);
            this.toggleState = 'visible';
        } else {
            this.toggleBtn.nextElementSibling.style.display = "none";
            this.linksPanel.className = this.linksPanel.className + 'is-hidden';
            this.toggleState = 'hidden';
        }
    }

    handleToggleButton(e) {
        e.preventDefault();
        window._ub.toggleLinksPanel();
    }

    handleTabbedNavigation(e) {
        let key = e.which || e.keyCode;

        if (key === 13) {
            e.preventDefault();
            window._ub.toggleLinksPanel();
        }

        if (window._ub.toggleState === 'visible') {
            e.preventDefault();
            window._ub.firstLink.focus();
        } else {
            window._ub.toggleBtn.focus();
        }
    }

    handleTransitionEnd() {
        if ( window._ub.toggleState === 'hidden' ) {
            window._ub.linksPanel.style.display = "none";
        }
    }

    get defaults() {
        return {
            googleCustomSearchCode: null,
            color: 'gray',
            maxWidth: null,
            placeholder: 'search ncsu.edu',
            showBrick: 0
        }
    }

}