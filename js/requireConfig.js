requirejs.config({
    baseUrl:'js',
    paths : {
        //require plugins
        text: '../bower_components/text/text',
        jquery: '../bower_components/jquery/dist/jquery',
        underscore: '../bower_components/underscore/underscore',
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
    deps: ['text', 'underscore']
});