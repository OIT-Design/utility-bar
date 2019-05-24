import UtilityBar from './UtilityBar';

class loadUb {

    constructor() {

        this.ubScriptSrc = this.scriptSrc;
        this.options = {};
        this.validProps = [
            'googleCustomSearchCode',
            'color',
            'maxWidth',
            'placeholder',
            'showBrick'
        ];

        if (this.ubScriptSrc.length > 0) {
            this.loadOptionsFromScript();
        }

        window._ub = new UtilityBar(this.options);
        window.addEventListener('DOMContentLoaded', () => {


            console.log('0');

        var targetNode = document.body;

        if(targetNode){
        
            console.log('1');

            var config = {
                childList: true,
                subtree: true
            };

            var obsCallback = function(mutationsList) {

                console.log('2');

                var myBarPlaceholder = document.getElementById('ncstate-utility-bar');

                for(var mutation of mutationsList) {

                    console.log('3');

                    if ( myBarPlaceholder && !document.getElementsByClassName('ncstate-utility-bar-tools') ) {
                        console.log( '4' );

                        window._ub.render(); // THIS IS THE IMPORTANT LINE THAT RENDERS THE BRAND BAR
                        
                    } else{
                        console.log('5');

                    // Stop observing, we did what we needed
                    observer.disconnect();
                  }
                }
            };
            console.log('6');


            // Create a new observer
            var observer = new MutationObserver(obsCallback);

            // Start observing
            observer.observe(targetNode, config);
        
        }

        console.log('7');

        }, false);

    }

    get scriptSrc() {
        let php = document.querySelector('script[src*="ub.php"]');
        let js = document.querySelector('script[src*="ub-php.js"]');

        return php ? php.getAttribute('src') : js.getAttribute('src');
    }

    loadOptionsFromScript() {
        this.validProps.forEach(field => {
            if ( this.getQueryString( field ) !== false ) {
                this.options[field] = this.getQueryString( field );
            }
        });
    }

    getQueryString( field ) {
        let reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
        let string = reg.exec(this.ubScriptSrc);
        return string ? string[1] : false;
    }

}

new loadUb();
