var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_point_0609_1 = new ol.format.GeoJSON();
var features_point_0609_1 = format_point_0609_1.readFeatures(json_point_0609_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_0609_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_0609_1.addFeatures(features_point_0609_1);
var lyr_point_0609_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_point_0609_1, 
                style: style_point_0609_1,
                interactive: true,
                title: '<img src="styles/legend/point_0609_1.png" /> point_0609'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_point_0609_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_point_0609_1];
lyr_point_0609_1.set('fieldAliases', {'id': 'id', 'name': 'name', '비고': '비고', });
lyr_point_0609_1.set('fieldImages', {'id': '', 'name': '', '비고': '', });
lyr_point_0609_1.set('fieldLabels', {'id': 'inline label', 'name': 'inline label', '비고': 'inline label', });
lyr_point_0609_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});