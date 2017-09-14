requirejs.config({
    baseUrl:'js',
    paths : {
        //require plugins
        // text: '../node_modules/text/text',
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/underscore/underscore',
        'raw/parser': 'Raw/parser',
        'measure/renderer': 'Measure/Renderer',
        'renderer': 'Renderer',
        'font': 'Font',
    },
    shim: {
        underscore: {
          exports: '_'
        }
    },
    deps: ['underscore']
});