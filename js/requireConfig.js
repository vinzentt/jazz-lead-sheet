requirejs.config({
    baseUrl:'js',
    paths : {
        //create alias to plugins (not needed if plugins are on the baseUrl)
        jquery: '../bower_components/jquery/dist/jquery',
        'raw/parser': 'Raw/parser',
    }
});