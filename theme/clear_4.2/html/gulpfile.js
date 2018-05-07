var gulp = require("gulp");
var elixir = require("laravel-elixir");


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 */
//over-riding laravel-elixir configuration
config.assetsPath = 'src';
config.publicPath = '';

//source path configuration
var vendors = 'node_modules/';
var resourcesAssets = 'src/';
var srcCss = resourcesAssets + 'css/';
var srcJs = resourcesAssets + 'js/';
var srcImg = resourcesAssets + 'img/';

//destination path configuration
var dest = '';
var destFonts = dest + 'fonts/';
var destCss = dest + 'css/';
var destJs = dest + 'js/';
var destImg = dest + 'img/';
var destVendors = dest + 'vendors/';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendors resources.
 |
 */
var paths = {
    'animate': vendors + 'animate.css/',
    'fileUpload': vendors + 'blueimp-file-upload/',
    'imgLoad': vendors + 'blueimp-load-image/',
    'bootstrap': vendors + 'bootstrap/dist/',
    'popperjs': vendors + 'popper.js/dist/umd/',
    'blueimpcanvas': vendors + 'blueimp-canvas-to-blob/',
    'blueimptmpl': vendors + 'blueimp-tmpl/',
    'touchspin': vendors + 'bootstrap-touchspin/dist/',
    'wysihtml5': vendors + 'bootstrap3-wysihtml5-bower/dist/',
    'daterangepicker': vendors + 'bootstrap-daterangepicker/',
    'maxlength': vendors + 'bootstrap-maxlength/src/',
    'multiselect': vendors + 'bootstrap-multiselect/dist/',
    'switch': vendors + 'bootstrap-switch/dist/',
    'chartjs': vendors + 'chart.js/dist/',
    'lodash':vendors+'lodash/',
    'fontawesome': vendors + 'font-awesome/',
    'flotchart': vendors + 'flotchart/',
    'flotspline': vendors + 'flot-spline/js/',
    'flottooltip': vendors + 'jquery.flot.tooltip/js/',
    'countUp': vendors + 'countup.js/',
    'dataTables': vendors + 'datatables/media',
    'fancybox': vendors + 'fancybox/dist/',
    'gmaps': vendors + 'gmaps/',
    'jquery': vendors + 'jquery/dist/',
    'inputmask': vendors + 'jquery.inputmask/dist/',
    'knob': vendors + 'jquery-knob/js/',
    'select2': vendors + 'select2/dist/',
    'selectize': vendors + 'selectize/dist/',
    'datetimepicker':vendors +'eonasdan-bootstrap-datetimepicker/build/' ,
    'datetimePicker':vendors +'bootstrap-datetime-picker/' ,
    'fullcalendar': vendors + 'fullcalendar/dist/',
    'summernote': srcCss + 'summernote/',
    'icheck': vendors + 'icheck/',
    'jasnyBootstrap': vendors + 'jasny-bootstrap/dist/',
    'toastr': vendors + 'toastr/build/',
    'bootstrapValidator': vendors + 'bootstrapvalidator/dist/',
    'select2BootstrapTheme': vendors + 'select2-bootstrap-theme/dist/',
    'c3': vendors + '/c3/',
    'bootstrapcolorpicker':vendors+'bootstrap-colorpicker/dist/',
    'moment': vendors + 'moment/',
    'nestable': vendors + 'nestable/',
    'trumbowyg': vendors + 'trumbowyg/dist/',
    'transitionize': vendors + 'transitionize/dist',
    'twtrBootstrapWizard': vendors + 'twitter-bootstrap-wizard/',
    'underscore': vendors + 'underscore/',
    'datatables': vendors + 'datatables.net/',
    'datatablesbs': vendors + 'datatables.net-bs/',
    'datatablesbs4': vendors + 'datatables.net-bs4/',
    'datatablesbutton': vendors + 'datatables.net-buttons/',
    'datatablesbsbuttons': vendors + 'datatables.net-buttons-bs/',
    'datatablescolreorder': vendors + 'datatables.net-colreorder/',
    'datatablescolreorderbs': vendors + 'datatables.net-colreorder-bs/',
    'datatablesresponsive': vendors + 'datatables.net-responsive/',
    'datatablesrowreorder': vendors + 'datatables.net-rowreorder/',
    'datatablesrowreorderbs': vendors + 'datatables.net-rowreorder-bs/',
    'datatablesscroll': vendors + 'datatables.net-scroller/',
    'datatablesscrollbs': vendors + 'datatables.net-scroller-bs/',
    'animatechart': vendors + 'animatechart/',
    'datepicker': vendors + 'bootstrap-datepicker/dist/',
    'jqvmap': vendors + 'jqvmap/',
    'jquerymockjax': vendors + 'jquery-mockjax/dist/',
    'pickadate': vendors + 'pickadate/lib/',
    'hover': vendors + 'hover.css/css/',
    'd3': vendors + 'd3/',
    'wowjs': vendors + 'wowjs/dist/',
    'metisMenu': vendors + 'metisMenu/dist/',
    'nvd3': vendors + 'nvd3/build/',
    'bootstrapfileinput': vendors + 'bootstrap-fileinput/',
    'clockpicker': vendors + 'clockpicker/dist/',
    'chartist': vendors + 'chartist/dist/',
    'datedropper': vendors + 'datedropper/',
    'timedropper': vendors + 'timedropper/',
    'jquerydaterangepicker': vendors + 'jquery-date-range-picker/dist/',
    'dropify': vendors + 'dropify/dist/',
    'gridforms': vendors + 'gridforms/gridforms/',
    'pnotify': vendors + 'pnotify/dist/',
    'awesomebootstrapcheckbox': vendors + 'awesome-bootstrap-checkbox/',
    'airdatepicker': vendors + 'air-datepicker/dist/',
    'bootstrapcalendar': vendors + 'bootstrap-calendar/',
    'jquerylabel': vendors + 'labelauty/source/',
    'imagehover': vendors + 'imagehover/css/',
    'amcharts': vendors + 'amcharts/dist/',
    'bootstraptable': vendors + 'bootstrap-table/dist/',
    "tableExportjqueryplugin": vendors + "tableexport.jquery.plugin/",
    'markjs': vendors + 'mark.js/dist/',
    'datatablesmarkjs': vendors + 'datatables.mark.js/dist/',
    'gridstack': vendors + 'gridstack/dist/',
    'laddabootstrap': vendors + 'ladda/dist/',
    'sweetalert2': vendors + 'sweetalert2/dist/',
    'insignia': vendors + 'insignia/dist/',
    'leaflet': vendors + 'leaflet/dist/',
    'simplelineicons': vendors + 'simple-line-icons/',
    'weathericons': vendors + 'weather-icons/',
    'themify': srcCss + 'themify-icons/',
    'swiper': vendors + 'swiper/dist/',
    'metrojs': vendors + 'metrojs/release/MetroJs.Full/',
    'screenfull': vendors + 'screenfull/dist/',
    'card': vendors + 'card/dist/',
    'wenk': vendors + 'wenk/dist/',
    'jstree': vendors + 'jstree/',
    'jquerynicescroll':vendors + 'jquery.nicescroll/dist/'

};

elixir.config.sourcemaps = false;

elixir(function (mix) {

    // Copy fonts straight to public
    mix.copy(paths.bootstrap + 'fonts', destFonts);
    mix.copy(paths.themify + 'fonts', destFonts);
    mix.copy(paths.fontawesome + 'fonts', destFonts);

    //popper
    mix.copy(paths.popperjs + 'popper.min.js',destJs);

    // //bootstrap
    mix.copy(paths.bootstrap + 'css/bootstrap.css', destCss);
    mix.copy(paths.bootstrap + 'js/bootstrap.min.js', destJs);


    // nestable
    mix.copy(paths.nestable + 'jquery.nestable.js', destVendors+ 'nestable/js');


    // ihover
    mix.copy( srcCss + 'ihover.css', destCss+ 'ihover/css');

    // editable-table
    mix.copy( srcJs + 'mindmup-editabletable.js', destJs +  'mindmup-editabletable.js');


//newsticker
    mix.copy(srcJs+ 'jquery-advanced-news-ticker.min.js', destJs+'jquery_newsticker/js');

//buttons js
    mix.copy(srcJs+ 'buttons.js', destJs+'buttons.js');

//button_sass
    mix.copy(srcCss+ 'buttons_sass.css', destCss+'buttons_sass.css');


//clock face
    mix.copy(srcCss+ 'clockface.css', destCss+'clockface.css');
    mix.copy(srcJs+ 'clockface.js', destJs+'clockface.js');


    //jquery
    mix.copy(paths.jquery + 'jquery.min.js', destJs);

    //font-awesome
    mix.copy(paths.fontawesome + 'css/font-awesome.min.css', destCss);


    //COPY CSS,JS AND IMAGES TO PUBLIC
    mix.copy(srcCss, destCss, false);
    mix.copy(resourcesAssets + 'img', destImg);
    mix.copy(srcJs, destJs,false);
    mix.copy(resourcesAssets + 'data', dest + 'chart_data');


    //wenk
    mix.copy(paths.wenk + 'wenk.min.css', destVendors + 'wenk');

    // card
    mix.copy(paths.card + 'jquery.card.js', destVendors + 'card');


    //screenfull js
    mix.copy(paths.screenfull + 'screenfull.js', destVendors + 'screenfull/js');

    // metrojs
    mix.copy(paths.metrojs + 'MetroJs.min.js', destVendors + 'metrojs/js');
    mix.copy(paths.metrojs + 'MetroJs.min.css', destVendors + 'metrojs/css');

    //swiper
    mix.copy(paths.swiper + 'css/swiper.min.css', destVendors + 'swiper/css');
    mix.copy(paths.swiper + 'js/swiper.min.js', destVendors + 'swiper/js');

    // weather icon
    mix.copy(paths.weathericons + 'css/weather-icons.min.css', destVendors + 'weathericon/css');
    mix.copy(paths.weathericons + 'font', destVendors + 'weathericon/font');



    //chartist
    mix.copy(paths.chartist + 'chartist.min.css', destVendors + 'chartist/css');
    mix.copy(paths.chartist + 'chartist.min.js', destVendors + 'chartist/js');

    // flip
    mix.copy(srcJs + 'flip.min.js', destJs + 'flip/js');


    //gridstack
    mix.copy(paths.gridstack + 'gridstack.min.css', destVendors + 'gridstack/css');
    mix.copy(paths.gridstack + 'gridstack.js', destVendors + 'gridstack/js');

    // laddabootstrap
    mix.copy(paths.laddabootstrap + 'ladda-themeless.min.css', destVendors + 'laddabootstrap/css');
    mix.copy(paths.laddabootstrap + 'ladda.min.css', destVendors + 'laddabootstrap/css');
    mix.copy(paths.laddabootstrap + 'spin.min.js', destVendors + 'laddabootstrap/js');
    mix.copy(paths.laddabootstrap + 'ladda.min.js', destVendors + 'laddabootstrap/js');

    //leaflet
    mix.copy(paths.leaflet + 'leaflet.css', destVendors + 'leaflet/css');
    mix.copy(paths.leaflet + 'images', destVendors + 'leaflet/css/images');
    mix.copy(paths.leaflet + 'leaflet-src.js', destVendors + 'leaflet/js');

    //lodash
    mix.copy(paths.lodash + 'lodash.min.js', destVendors + 'lodash/js');

    // dimple
    mix.copy(srcJs + 'dimple.v2.3.0.min.js', destJs + 'dimple/js');
    mix.copy(srcJs + 'd3.v4.3.0.min.js', destJs + 'dimple/js');

    //css gram
    mix.copy(srcCss + 'cssgram.min.css', destCss + 'cssgram/css');


    // amcharts
    mix.copy(paths.amcharts + 'amcharts/plugins/export/export.css', destVendors + 'amcharts/css');
    mix.copy(paths.amcharts + 'amcharts/amcharts.js', destVendors + 'amcharts/js');
    mix.copy(paths.amcharts + 'amcharts/serial.js', destVendors + 'amcharts/js');
    mix.copy(paths.amcharts + 'amcharts/plugins/export/export.min.js', destVendors + 'amcharts/js');
    mix.copy(paths.amcharts + 'amcharts/themes/light.js', destVendors + 'amcharts/js');

    // insignia
    mix.copy(paths.insignia + 'insignia.css', destVendors + 'insignia/css');
    mix.copy(paths.insignia + 'insignia.js', destVendors + 'insignia/js');

    //gridforms
    mix.copy(paths.gridforms + 'gridforms.css', destVendors + 'gridforms/css');
    mix.copy(paths.gridforms + 'gridforms.js', destVendors + 'gridforms/js');

    //cssgram
    mix.copy(paths.cssgram + 'css', destVendors + 'cssgram/css');

    //jquery date range picker
    mix.copy(paths.jquerydaterangepicker + 'daterangepicker.min.css', destVendors + 'jquerydaterangepicker/css');
    mix.copy(paths.jquerydaterangepicker + 'jquery.daterangepicker.min.js', destVendors + 'jquerydaterangepicker/js');

    //pnotify
    // pnotify css
    mix.copy(paths.pnotify + 'pnotify.css', destVendors + 'pnotify/css');
    mix.copy(paths.pnotify + 'pnotify.brighttheme.css', destVendors + 'pnotify/css');
    mix.copy(paths.pnotify + 'pnotify.buttons.css', destVendors + 'pnotify/css');
    mix.copy(paths.pnotify + 'pnotify.mobile.css', destVendors + 'pnotify/css');
    mix.copy(paths.pnotify + 'pnotify.history.css', destVendors + 'pnotify/css');

    // pnotify js
    mix.copy(paths.pnotify + 'pnotify.js', destVendors + 'pnotify/js');
    mix.copy(paths.pnotify + 'pnotify.animate.js', destVendors + 'pnotify/js');
    mix.copy(paths.pnotify + 'pnotify.buttons.js', destVendors + 'pnotify/js');
    mix.copy(paths.pnotify + 'pnotify.confirm.js', destVendors + 'pnotify/js');
    mix.copy(paths.pnotify + 'pnotify.nonblock.js', destVendors + 'pnotify/js');
    mix.copy(paths.pnotify + 'pnotify.mobile.js', destVendors + 'pnotify/js');
    mix.copy(paths.pnotify + 'pnotify.desktop.js', destVendors + 'pnotify/js');
    mix.copy(paths.pnotify + 'pnotify.history.js', destVendors + 'pnotify/js');
    mix.copy(paths.pnotify + 'pnotify.callbacks.js', destVendors + 'pnotify/js');


    //jquery-labelauty
    mix.copy(paths.jquerylabel + 'jquery-labelauty.js', destVendors + 'jquerylabel/js');
    mix.copy(paths.jquerylabel + 'jquery-labelauty.css', destVendors + 'jquerylabel/css');
    mix.copy(paths.jquerylabel + 'images', destVendors + 'jquerylabel/css/images');


    //circliful
    mix.copy(srcCss + 'jquery.circliful.css', destCss + 'circliful/css');
    mix.copy(srcJs+ 'jquery.circliful.min.js', destJs + 'circliful/js');

    //dropify
    mix.copy(paths.dropify + 'css/dropify.css', destVendors + 'dropify/css');
    mix.copy(paths.dropify + 'js/dropify.js', destVendors + 'dropify/js');
    mix.copy(paths.dropify + 'fonts', destVendors + 'dropify/fonts');

    // Sweet Alert
    mix.copy(paths.sweetalert2 + 'sweetalert2.min.css', destVendors + 'sweetalert2/css');
    mix.copy(paths.sweetalert2 + 'sweetalert2.min.js', destVendors + 'sweetalert2/js');

    // toolbar
    mix.copy(srcCss + 'jquery.toolbar.css', destCss + 'toolbar/css');
    mix.copy(srcJs + 'jquery.toolbar.min.js', destJs + 'toolbar/js');

    // air datepicker
    mix.copy(paths.airdatepicker + 'css/datepicker.min.css', destVendors + 'airdatepicker/css');
    mix.copy(paths.airdatepicker + 'js/datepicker.min.js', destVendors + 'airdatepicker/js');
    mix.copy(paths.airdatepicker + 'js/i18n/datepicker.en.js', destVendors + 'airdatepicker/js');

    // selectric
    mix.copy(srcCss + 'selectric.css', destCss + 'selectric/css');
    mix.copy(srcJs + 'jquery.selectric.min.js', destJs + 'selectric/js');

    // awesomebootstrapcheckbox
    mix.copy(paths.awesomebootstrapcheckbox + 'awesome-bootstrap-checkbox.css', destVendors + 'awesomebootstrapcheckbox/css');

    // datedropper
    mix.copy(paths.datedropper + 'datedropper.css', destVendors + 'datedropper');
    mix.copy(paths.datedropper + 'datedropper.js', destVendors + 'datedropper');
    mix.copy(paths.datedropper + 'dd-icon', destVendors + 'datedropper/dd-icon');

    // timedropper
    mix.copy(paths.timedropper + 'timedropper.css', destVendors + 'timedropper/css');
    mix.copy(paths.timedropper + 'timedropper.js', destVendors + 'timedropper/js');

    //imagehover
    mix.copy(srcCss + 'imagehover.min.css', destCss + 'imagehover/css');


    //mark.js
    mix.copy(paths.markjs + 'jquery.mark.js', destVendors + 'mark.js/');

    //datatables.mark.js
    mix.copy(paths.datatablesmarkjs + 'datatables.mark.min.js', destVendors + 'datatablesmark.js/js');
    mix.copy(paths.datatablesmarkjs + 'datatables.mark.min.css', destVendors + 'datatablesmark.js/css');

    //nvd3
    mix.copy(paths.nvd3  + 'nv.d3.min.css', destVendors + 'nvd3/css');
    mix.copy(paths.nvd3  + 'nv.d3.min.js', destVendors + 'nvd3/js');

    //pretty Checkable
    mix.copy( srcCss+ 'prettyCheckable.css', destCss + 'prettycheckable/css');
    mix.copy(srcJs+ 'prettyCheckable.min.js', destJs + 'prettycheckable/js');
    mix.copy(srcImg + 'sprites-sfa68604977.png', destCss + 'prettycheckable/img');

    // bootstrap-calendar
    mix.copy(paths.bootstrapcalendar + 'css/calendar.min.css', destVendors + 'bootstrap-calendar/css');
    mix.copy(paths.bootstrapcalendar + 'js/calendar.min.js', destVendors + 'bootstrap-calendar/js');
    mix.copy(paths.bootstrapcalendar + 'js/language', destVendors + 'bootstrap-calendar/js/language');
    mix.copy(paths.bootstrapcalendar + 'tmpls', destVendors + 'bootstrap-calendar/tmpls');
    mix.copy(paths.bootstrapcalendar + 'img', destVendors + 'bootstrap-calendar/img');



    //bootstrap-table
    mix.copy(paths.bootstraptable + 'bootstrap-table.min.css', destVendors + 'bootstrap-table/css');
    mix.copy(paths.bootstraptable + 'bootstrap-table.min.js', destVendors + 'bootstrap-table/js');

    // underscore
    mix.copy(paths.underscore + 'underscore-min.js', destVendors + 'underscore/js');

    //clockpicker
    mix.copy(paths.clockpicker + 'bootstrap-clockpicker.min.css', destVendors + 'clockpicker/css');
    mix.copy(paths.clockpicker + 'bootstrap-clockpicker.min.js', destVendors + 'clockpicker/js');

    // daterange picker
    mix.copy(paths.daterangepicker + 'daterangepicker.js', destVendors + 'daterangepicker/js');
    mix.copy(paths.daterangepicker + 'daterangepicker.css', destVendors + 'daterangepicker/css');



    // jquery file upload
    mix.copy(paths.fileUpload + 'css/jquery.fileupload.css', destVendors + 'blueimp-file-upload/css');
    mix.copy(paths.fileUpload + 'css/jquery.fileupload-ui.css', destVendors + 'blueimp-file-upload/css');
    mix.copy(paths.fileUpload + 'css/jquery.fileupload-noscript.css', destVendors + 'blueimp-file-upload/css');
    mix.copy(paths.fileUpload + '/css/jquery.fileupload-ui-noscript.css', destVendors + 'blueimp-file-upload/css');
    mix.copy(paths.fileUpload + 'js/vendor/jquery.ui.widget.js', destVendors + 'blueimp-file-upload/js');
    mix.copy(paths.fileUpload + 'js/jquery.iframe-transport.js', destVendors + 'blueimp-file-upload/js');
    mix.copy(paths.fileUpload + 'js/jquery.fileupload.js', destVendors + 'blueimp-file-upload/js');
    mix.copy(paths.fileUpload + 'js/jquery.fileupload-process.js', destVendors + 'blueimp-file-upload/js');
    mix.copy(paths.fileUpload + 'js/jquery.fileupload-image.js', destVendors + 'blueimp-file-upload/js');
    mix.copy(paths.fileUpload + 'js/jquery.fileupload-audio.js', destVendors + 'blueimp-file-upload/js');
    mix.copy(paths.fileUpload + 'js/jquery.fileupload-video.js', destVendors + 'blueimp-file-upload/js');
    mix.copy(paths.fileUpload + 'js/jquery.fileupload-validate.js', destVendors + 'blueimp-file-upload/js');
    mix.copy(paths.fileUpload + 'js/jquery.fileupload-ui.js', destVendors + 'blueimp-file-upload/js');



    // blueimp-tmpl
    mix.copy(paths.blueimptmpl + 'js/tmpl.js', destVendors + 'blueimp-tmpl/js');

    // blueimp-load-image
    mix.copy(paths.imgLoad + 'js/load-image.all.min.js', destVendors + 'blueimploadimage/js');
    mix.copy(paths.imgLoad + 'js/load-image.js', destVendors + 'blueimploadimage/js');

    // blueimp-canvas-to-blob
    mix.copy(paths.blueimpcanvas + 'js/canvas-to-blob.js', destVendors + 'blueimp-canvas-to-blob/js');

    // blueimp-gallery-with-desc
    mix.copy(destCss + 'blueimp-gallery.min.css', destCss + 'blueimp-gallery-with-desc/css');




    //fancybox
    mix.copy(paths.fancybox + 'css/jquery.fancybox.css', destVendors + 'fancybox');
    mix.copy(paths.fancybox + 'js/jquery.fancybox.pack.js', destVendors + 'fancybox');
    mix.copy(paths.fancybox + 'js/jquery.fancybox.js', destVendors + 'fancybox');
    mix.copy(paths.fancybox + 'img/fancybox_overlay.png', destVendors +'img');
    mix.copy(paths.fancybox + 'img/fancybox_loading.gif', destVendors +'img');
    mix.copy(paths.fancybox + 'img/fancybox_sprite.png', destVendors +'img');
    mix.copy(paths.fancybox + 'img/blank.gif', destVendors +'img');
    mix.copy(paths.fancybox + 'helpers/js/jquery.fancybox-buttons.js', destVendors + 'fancybox/helpers');

    //jasny-bootstrap
    mix.copy(paths.jasnyBootstrap + 'css/jasny-bootstrap.css', destVendors + 'jasny-bootstrap/css');
    mix.copy(paths.jasnyBootstrap + 'js/jasny-bootstrap.js', destVendors + 'jasny-bootstrap/js');

    // bootstrap3-wysihtml5-bower
    mix.copy(paths.wysihtml5 + 'bootstrap3-wysihtml5.min.css', destVendors + 'bootstrap3-wysihtml5-bower/css');
    mix.copy(paths.wysihtml5 + 'bootstrap3-wysihtml5.all.min.js', destVendors + 'bootstrap3-wysihtml5-bower/js');
    mix.copy(paths.wysihtml5 + 'bootstrap3-wysihtml5.all.min.js', destVendors + 'bootstrap3-wysihtml5-bower/js');
    mix.copy(paths.wysihtml5 + 'bootstrap3-wysihtml5.min.js', destVendors + 'bootstrap3-wysihtml5-bower/js');

    // summer note
    mix.copy(paths.summernote + 'summernote.css', destCss + 'summernote/css');
    mix.copy(paths.summernote + 'summernote.min.js', destJs + 'summernote/js');
    mix.copy(paths.summernote + 'font', destCss + 'font');


    // bootstrap-fileinput
    mix.copy(paths.bootstrapfileinput + 'css/fileinput.min.css', destVendors + 'bootstrap-fileinput/css/');
    mix.copy(paths.bootstrapfileinput + 'js/fileinput.min.js', destVendors + 'bootstrap-fileinput/js/');
    mix.copy(paths.bootstrapfileinput + 'themes/fa/theme.js', destVendors + 'bootstrap-fileinput/js/');
    mix.copy(paths.bootstrapfileinput + 'img/loading.gif', destVendors + 'bootstrap-fileinput/img');

    // trumbowyg
    mix.copy(paths.trumbowyg + 'ui/trumbowyg.min.css', destVendors + 'trumbowyg/ui');
    mix.copy(paths.trumbowyg + 'trumbowyg.js', destVendors + 'trumbowyg/js');
    mix.copy(paths.trumbowyg + 'ui/icons.svg', destVendors + 'ui');

    // bootstrapvalidator
    mix.copy(paths.bootstrapValidator + 'css/bootstrapValidator.min.css', destVendors + 'bootstrapvalidator/css');
    mix.copy(paths.bootstrapValidator + 'js/bootstrapValidator.min.js', destVendors + 'bootstrapvalidator/js');

    //select2
    mix.copy(paths.select2 + 'css/select2.min.css', destVendors + 'select2/css');
    mix.copy(paths.select2 + 'js/select2.js', destVendors + 'select2/js');
    mix.copy(paths.select2BootstrapTheme + 'select2-bootstrap.css', destVendors + 'select2/css');

    //selectize
    mix.copy(paths.selectize + 'css/selectize.css', destVendors + 'selectize/css');
    mix.copy(paths.selectize + 'css/selectize.bootstrap3.css', destVendors + 'selectize/css');
    mix.copy(paths.selectize + 'js/selectize.min.js', destVendors + 'selectize/js');
    mix.copy(paths.selectize + 'js/standalone/selectize.min.js', destVendors + 'selectize/js/standalone');

    //icheck
    mix.copy(paths.icheck + 'icheck.js', destVendors + 'iCheck/js');
    mix.copy(paths.icheck + 'skins/', destVendors + 'iCheck/css');

    //hover
    mix.copy(paths.hover + 'hover-min.css', destVendors + 'hover/css');

    // countUp js
    mix.copy(paths.countUp + 'countUp.js', destVendors + 'countUp.js/js');


    // moment
    mix.copy(paths.moment + 'min/moment.min.js', destVendors + 'moment/js');

    // // bootstrap-datetimepicker

    mix.copy(paths.datetimePicker + 'css/bootstrap-datetimepicker.min.css', destVendors + 'bootstrapdatetimepicker/css');
    mix.copy(paths.datetimePicker + 'js/bootstrap-datetimepicker.min.js', destVendors + 'bootstrapdatetimepicker/js');
    mix.copy(paths.datetimePicker + 'js/locales', destVendors + 'bootstrapdatetimepicker/js/locales');

    // bootstrap color picker
    mix.copy(paths.bootstrapcolorpicker + 'css/bootstrap-colorpicker.min.css', destVendors + 'colorpicker/css');
    mix.copy(paths.bootstrapcolorpicker + 'js/bootstrap-colorpicker.min.js', destVendors + 'colorpicker/js');

    // toastr
    mix.copy(paths.toastr + 'toastr.min.css', destVendors + 'toastr/css');
    mix.copy(paths.toastr + 'toastr.min.js', destVendors + 'toastr/js');

    // bootstrap touchspin
    mix.copy(paths.touchspin + 'jquery.bootstrap-touchspin.css', destVendors + 'bootstrap-touchspin/css');
    mix.copy(paths.touchspin + 'jquery.bootstrap-touchspin.js', destVendors + 'bootstrap-touchspin/js');

    // bootstrap multiselect
    mix.copy(paths.multiselect + 'css/bootstrap-multiselect.css', destVendors + 'bootstrap-multiselect/css');
    mix.copy(paths.multiselect + 'js/bootstrap-multiselect.js', destVendors + 'bootstrap-multiselect/js');

    // bootstrap switch
    mix.copy(paths.switch + 'css/bootstrap3/bootstrap-switch.min.css', destVendors + 'bootstrap-switch/css');
    mix.copy(paths.switch + 'js/bootstrap-switch.min.js', destVendors + 'bootstrap-switch/js');

    // animate
    mix.copy(paths.animate + 'animate.min.css', destVendors + 'animate');

    // knob
    mix.copy(paths.knob + 'jquery.knob.js', destVendors + 'jquery-knob/js');

    // datatables
    mix.copy(paths.datatables + 'js/jquery.dataTables.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablesbs + 'js/dataTables.bootstrap.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablesbs + 'css/dataTables.bootstrap.css', destVendors + 'datatables/css');
    mix.copy(paths.datatablesbs4 + 'js/dataTables.bootstrap4.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablesbs4 + 'css/dataTables.bootstrap4.css', destVendors + 'datatables/css');
    mix.copy(paths.datatablesbutton + 'js/buttons.print.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablesbutton + 'js/dataTables.buttons.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablesbsbuttons + 'css/buttons.bootstrap.css', destVendors + 'datatables/css');
    mix.copy(paths.datatablesbsbuttons + 'js/buttons.bootstrap.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablescolreorder + 'js/dataTables.colReorder.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablescolreorderbs + 'css/colReorder.bootstrap.css', destVendors + 'datatables/css');
    mix.copy(paths.datatablesresponsive + 'js/dataTables.responsive.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablesrowreorder + 'js/dataTables.rowReorder.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablesbutton + 'js/buttons.html5.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablesbutton + 'js/buttons.colVis.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablesbutton + 'js/buttons.print.min.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablesrowreorderbs + 'css/rowReorder.bootstrap.css', destVendors + 'datatables/css');
    mix.copy(paths.datatablesscroll + 'js/dataTables.scroller.js', destVendors + 'datatables/js');
    mix.copy(paths.datatablesscrollbs + 'css/scroller.bootstrap.css', destVendors + 'datatables/css');

    // flot charts
    mix.copy(srcJs + 'jquery.flot.js', destJs + 'flot/js');
    mix.copy(srcJs + 'jquery.flot.stack.js', destJs + 'flot/js');
    mix.copy(srcJs+ 'jquery.flot.resize.js', destJs + 'flot/js');
    mix.copy(srcJs+ 'jquery.flot.time.js', destJs + 'flot/js');
    mix.copy(srcJs+ 'jquery.flot.categories.js', destJs + 'flot/js');
    mix.copy(srcJs+ 'jquery.flot.pie.js', destJs + 'flot/js');

    mix.copy(srcJs + 'jquery.flot.spline.min.js', destJs + 'flotspline/js');
    mix.copy(srcJs + 'jquery.flot.tooltip.js', destJs + 'flottooltip/js');


    // Chart.js
    mix.copy(paths.chartjs + 'Chart.js', destVendors + 'chartjs/js');

    // fullcalendar
    mix.copy(paths.fullcalendar + 'fullcalendar.css', destVendors + 'fullcalendar/css');
    mix.copy(paths.fullcalendar + 'fullcalendar.print.css', destVendors + 'fullcalendar/css');
    mix.copy(paths.fullcalendar + 'fullcalendar.min.js', destVendors + 'fullcalendar/js');

    // bootstrap-datepicker
    mix.copy(paths.datepicker + 'js/bootstrap-datepicker.js', destVendors + 'bootstrap-datepicker/js');
    mix.copy(paths.datepicker + 'locales', destVendors + 'bootstrap-datepicker/locales');
    mix.copy(paths.datepicker + 'css/bootstrap-datepicker.css', destVendors + 'bootstrap-datepicker/css');

    // gmaps
    mix.copy(paths.gmaps + 'gmaps.min.js', destVendors + 'gmaps/js');


    //  bower-jvectormap
    mix.copy(srcCss + 'jquery-jvectormap-1.2.2.css', destCss + 'bower-jvectormap/css');

    //jvector map
    mix.copy(paths.jqvmap + 'dist/jquery.vmap.js', destVendors + 'jqvmap/js');
    mix.copy(paths.jqvmap + 'dist/jqvmap.css', destVendors + 'jqvmap/css');
    mix.copy(paths.jqvmap + 'dist/maps/jquery.vmap.world.js', destVendors + 'jqvmap/js');
    mix.copy(paths.jqvmap + 'dist/maps/jquery.vmap.usa.js', destVendors + 'jqvmap/js');
    mix.copy(paths.jqvmap + 'dist/maps/jquery.vmap.europe.js', destVendors + 'jqvmap/js');
    mix.copy(paths.jqvmap + 'dist/maps/jquery.vmap.germany.js', destVendors + 'jqvmap/js');
    mix.copy(paths.jqvmap + 'dist/maps/jquery.vmap.russia.js', destVendors + 'jqvmap/js');
    mix.copy(paths.jqvmap + 'dist/maps/continents/jquery.vmap.asia.js', destVendors + 'jqvmap/js');
    mix.copy(paths.jqvmap + 'dist/maps/continents/jquery.vmap.north-america.js', destVendors + 'jqvmap/js');
    mix.copy(paths.jqvmap + 'dist/maps/continents/jquery.vmap.south-america.js', destVendors + 'jqvmap/js');
    mix.copy(paths.jqvmap + 'dist/maps/continents/jquery.vmap.australia.js', destVendors + 'jqvmap/js');
    mix.copy(paths.jqvmap + 'examples/js/jquery.vmap.sampledata.js', destVendors + 'jqvmap/js');

    //c3 charts
    mix.copy(paths.c3 + 'c3.min.css', destVendors + 'c3');
    mix.copy(paths.c3 + 'c3.min.js', destVendors + 'c3');
    mix.copy(paths.d3 + 'd3.min.js', destVendors + 'd3');

    //jstree
    mix.copy(paths.jstree + 'src/themes/default/style.css', destVendors + 'jstree/css');
    mix.copy(paths.jstree + 'src/themes/default/32px.png', destVendors + 'jstree/css');
    mix.copy(paths.jstree + 'src/themes/default/40px.png', destVendors + 'jstree/css');
    mix.copy(paths.jstree + 'src/themes/default/throbber.gif', destVendors + 'jstree/css');
    mix.copy(paths.jstree + 'dist/jstree.min.js', destVendors + 'jstree/js');
    mix.copy(paths.jstree + 'src/vakata-jstree.js', destVendors + 'jstree/js');


    // bootstrap-maxlength
    mix.copy(paths.maxlength + 'bootstrap-maxlength.js', destVendors + 'bootstrap-maxlength/js');

    //imgmagnify
    mix.copy(srcCss + 'bootstrap-magnify.min.css', destCss + 'bootstrap-magnify/css');
    mix.copy(srcJs + 'bootstrap-magnify.min.js', destJs + 'bootstrap-magnify/js');

    // session timeout page
    mix.copy(srcJs + 'jquery.sessionTimeout.min.js', destJs);

    // jquery-mockjax
    mix.copy(paths.jquerymockjax + 'jquery.mockjax.js', destVendors + 'jquery-mockjax/js');

    //jquery input-mask
    mix.copy(paths.inputmask, destVendors + 'inputmask');

    //tableExport.jquery.plugin
    mix.copy(paths.tableExportjqueryplugin + 'tableExport.min.js', destVendors + 'tableExport.jquery.plugin/');

    //simple-line-icons
    mix.copy(paths.simplelineicons + 'css/simple-line-icons.css', destVendors + 'simple-line-icons/css/simple-line-icons.css');
    mix.copy(paths.simplelineicons + 'fonts', destVendors + 'simple-line-icons/fonts');

    //form wizard page
    mix.copy(paths.twtrBootstrapWizard + 'jquery.bootstrap.wizard.js', destVendors + 'bootstrapwizard/js');
    mix.copy(paths.twtrBootstrapWizard + 'bootstrap/js/bootstrap.min.js', destVendors + 'bootstrapwizard/js');

    // jquery.nicescroll
    mix.copy(paths.jquerynicescroll + 'jquery.nicescroll.min.js', destVendors + 'jquerynicescroll');

    // wow
    mix.copy(paths.wowjs + 'wow.min.js', destVendors + 'wowjs/js');

    //sass compilation

    /* custom css for dark */
    mix.sass('custom.scss', 'css/custom.css');

    /* custom css and js for light */
     //mix.sass('custom_white.scss', 'css/custom.css');
     //mix.copy(srcJs + 'custom_white.js', destJs + 'custom_js');



    // Custom Styles
    mix.styles(
        [
            '../../css/bootstrap.css',
            '../../css/font-awesome.min.css',
            '../../css/themify-icons/css/themify-icons.css',
            '../../css/custom_css/metisMenu.css',
            '../../vendors/bootstrap-switch/css/bootstrap-switch.min.css'
        ], destCss + 'app.css');

    // all global js files into app.js

    mix.scripts(
        [
            '../../js/jquery.min.js',
            '../../js/popper.min.js',
            '../../js/jquery.ui.min.js',
            '../../js/bootstrap.min.js',
            '../../js/custom_js/leftmenu.js',
            '../../vendors/jquerynicescroll/jquery.nicescroll.min.js',
            '../../js/custom_js/rightside_bar.js',
            /* Add the custom_white js for light layout */
            // '../../js/custom_js/custom_white.js',
            '../../vendors/bootstrap-switch/js/bootstrap-switch.min.js'
        ], destJs + 'app.js');


});
