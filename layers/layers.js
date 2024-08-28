ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([8245209.532289, 428191.440612, 9803682.403395, 1285402.483516]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SriLankaDistricts_1 = new ol.format.GeoJSON();
var features_SriLankaDistricts_1 = format_SriLankaDistricts_1.readFeatures(json_SriLankaDistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SriLankaDistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SriLankaDistricts_1.addFeatures(features_SriLankaDistricts_1);
var lyr_SriLankaDistricts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SriLankaDistricts_1, 
                style: style_SriLankaDistricts_1,
                popuplayertitle: "Sri Lanka Districts",
                interactive: false,
                title: '<img src="styles/legend/SriLankaDistricts_1.png" /> Sri Lanka Districts'
            });
var format_PackageDetails_2 = new ol.format.GeoJSON();
var features_PackageDetails_2 = format_PackageDetails_2.readFeatures(json_PackageDetails_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PackageDetails_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PackageDetails_2.addFeatures(features_PackageDetails_2);cluster_PackageDetails_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PackageDetails_2
});
var lyr_PackageDetails_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PackageDetails_2, 
                style: style_PackageDetails_2,
                popuplayertitle: "Package Details",
                interactive: true,
                title: '<img src="styles/legend/PackageDetails_2.png" /> Package Details'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SriLankaDistricts_1.setVisible(true);lyr_PackageDetails_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SriLankaDistricts_1,lyr_PackageDetails_2];
lyr_SriLankaDistricts_1.set('fieldAliases', {'ADM2_EN': 'ADM2_EN', 'ADM2_SI': 'ADM2_SI', 'ADM2_TA': 'ADM2_TA', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_SI': 'ADM1_SI', 'ADM1_TA': 'ADM1_TA', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_SI': 'ADM0_SI', 'ADM0_TA': 'ADM0_TA', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PackageDetails_2.set('fieldAliases', {'District': 'District', 'DSD': 'DSD', 'Package number': 'Package number', 'Description of the package': 'Description of the package', 'Type of work civilwork /mechanical': 'Type of work civilwork /mechanical', 'Implematation Agency': 'Implematation Agency', 'Proqument method': 'Proqument method', 'No objection recived date for the Estimate': 'No objection recived date for the Estimate', 'No objection recived Estimated amount  (Rs)': 'No objection recived Estimated amount  (Rs)', 'Contract awarded value including Vat(Rs)': 'Contract awarded value including Vat(Rs)', 'Commenced date': 'Commenced date', 'Contract duration(months)': 'Contract duration(months)', 'Cum Phy Progress end July %': 'Cum Phy Progress end July %', 'Cum Financial Progress end July Rs.': 'Cum Financial Progress end July Rs.', 'Expected Completion date': 'Expected Completion date', 'Contract variation approved (Excess & Extra works) (Rs)': 'Contract variation approved (Excess & Extra works) (Rs)', 'EOT 1 (No of days)': 'EOT 1 (No of days)', 'EOT 2 (No of Days)': 'EOT 2 (No of Days)', 'Contract completed date': 'Contract completed date', 'Paid amount for implemntataion of ESCOP (Rs)': 'Paid amount for implemntataion of ESCOP (Rs)', 'No of people benefitted from the investment': 'No of people benefitted from the investment', 'Extent protected from flood/drought (Ha)': 'Extent protected from flood/drought (Ha)', 'status': 'status', 'GPS coordinates': 'GPS coordinates', 'N (latituted)': 'N (latituted)', 'E (Longitude)': 'E (Longitude)', 'field_27': 'field_27', });
lyr_SriLankaDistricts_1.set('fieldImages', {'ADM2_EN': 'TextEdit', 'ADM2_SI': 'TextEdit', 'ADM2_TA': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_SI': 'TextEdit', 'ADM1_TA': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_SI': 'TextEdit', 'ADM0_TA': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PackageDetails_2.set('fieldImages', {'District': '', 'DSD': '', 'Package number': '', 'Description of the package': '', 'Type of work civilwork /mechanical': '', 'Implematation Agency': '', 'Proqument method': '', 'No objection recived date for the Estimate': '', 'No objection recived Estimated amount  (Rs)': '', 'Contract awarded value including Vat(Rs)': '', 'Commenced date': '', 'Contract duration(months)': '', 'Cum Phy Progress end July %': '', 'Cum Financial Progress end July Rs.': '', 'Expected Completion date': '', 'Contract variation approved (Excess & Extra works) (Rs)': '', 'EOT 1 (No of days)': '', 'EOT 2 (No of Days)': '', 'Contract completed date': '', 'Paid amount for implemntataion of ESCOP (Rs)': '', 'No of people benefitted from the investment': '', 'Extent protected from flood/drought (Ha)': '', 'status': '', 'GPS coordinates': '', 'N (latituted)': '', 'E (Longitude)': '', 'field_27': '', });
lyr_SriLankaDistricts_1.set('fieldLabels', {'ADM2_EN': 'no label', 'ADM2_SI': 'no label', 'ADM2_TA': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_SI': 'no label', 'ADM1_TA': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_SI': 'no label', 'ADM0_TA': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PackageDetails_2.set('fieldLabels', {'District': 'inline label - always visible', 'DSD': 'inline label - visible with data', 'Package number': 'inline label - always visible', 'Description of the package': 'inline label - always visible', 'Type of work civilwork /mechanical': 'inline label - visible with data', 'Implematation Agency': 'inline label - visible with data', 'Proqument method': 'hidden field', 'No objection recived date for the Estimate': 'hidden field', 'No objection recived Estimated amount  (Rs)': 'hidden field', 'Contract awarded value including Vat(Rs)': 'inline label - visible with data', 'Commenced date': 'inline label - visible with data', 'Contract duration(months)': 'hidden field', 'Cum Phy Progress end July %': 'inline label - visible with data', 'Cum Financial Progress end July Rs.': 'inline label - visible with data', 'Expected Completion date': 'inline label - visible with data', 'Contract variation approved (Excess & Extra works) (Rs)': 'hidden field', 'EOT 1 (No of days)': 'hidden field', 'EOT 2 (No of Days)': 'hidden field', 'Contract completed date': 'hidden field', 'Paid amount for implemntataion of ESCOP (Rs)': 'inline label - visible with data', 'No of people benefitted from the investment': 'hidden field', 'Extent protected from flood/drought (Ha)': 'hidden field', 'status': 'inline label - visible with data', 'GPS coordinates': 'hidden field', 'N (latituted)': 'hidden field', 'E (Longitude)': 'hidden field', 'field_27': 'hidden field', });
lyr_PackageDetails_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});