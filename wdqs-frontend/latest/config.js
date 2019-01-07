/*
 * This file is provided by the wikibase/wdqs-frontend docker image.
 */

/* exported CONFIG */
var CONFIG = ( function ( window, jQuery ) {
    'use strict';

    function getUserLanguage() {
        var lang = ( navigator.languages && navigator.languages[0] ) ||
            navigator.language ||
            navigator.userLanguage;

        if ( lang && typeof lang === 'string' ) {
            return lang.split( '-' ).shift();
        }

        return null;
    }

    return {
        language: getUserLanguage() || '$LANGUAGE',
        api: {
            sparql: {
                uri: '/proxy/wdqs/bigdata/namespace/wdq/sparql'
            },
            wikibase: {
                uri: '/proxy/wikibase/w/api.php'
            },
            examples: {
                server: 'https://www.wikidata.org/',
                endpoint: 'api/rest_v1/page/html/',
                pageTitle: 'Wikidata:SPARQL_query_service/queries/examples',
                pagePathElement: 'wiki/'
            }
        },
       i18nLoad: function( lang ) {
            return jQuery.when(
                jQuery.i18n().load( 'i18n/' + lang + '.json', lang ),
                jQuery.i18n().load( 'node_modules/jquery.uls/i18n/' + lang + '.json', lang )
            );
        },
        brand: {
            logo: 'logo.svg',
            title: '$BRAND_TITLE',
            copyrightUrl: '$COPYRIGHT_URL'
        },
        location: {
            root: './',
            index: './index.html'
        },
        showBirthdayPresents: true
    };

} )( window, jQuery );
