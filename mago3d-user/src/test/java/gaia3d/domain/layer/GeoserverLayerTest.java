package gaia3d.domain.layer;

import gaia3d.domain.cache.CacheManager;
import gaia3d.domain.policy.GeoPolicy;
import gaia3d.service.GeoPolicyService;
import lombok.extern.slf4j.Slf4j;
import org.geotools.ows.ServiceException;
import org.geotools.ows.wms.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Iterator;
import java.util.List;

@Slf4j
@SpringBootTest
class GeoserverLayerTest {

    @Autowired
    private GeoPolicyService geoPolicyService;

    @BeforeEach
    void setUp() {
        log.info("************ Cache Reload geoPolicy ************");
        GeoPolicy geoPolicy = geoPolicyService.getGeoPolicy();
        CacheManager.setGeoPolicy(geoPolicy);
    }

    @Test
    void getCapabilities() {

        GeoPolicy geoPolicy = CacheManager.getGeoPolicy();
        String geoserverDataUrl = geoPolicy.getGeoserverDataUrl();

        URL url = null;
        try {
            //url = new URL("http://localhost:18080/geoserver/wms?VERSION=1.1.1&Request=GetCapabilities&Service=WMS");
            url = new URL(String.format("%s/wms?version=1.1.1&request=getcapabilities&service=wms", geoserverDataUrl));
        } catch (MalformedURLException e) {
            //will not happen
        }
        // 참고 사이트 : https://docs.geotools.org/latest/userguide/extension/wms/wms.html
        WebMapServer wms = null;
        try {
            wms = new WebMapServer(url);
            WMSCapabilities capabilities = wms.getCapabilities();
            org.geotools.ows.wms.Layer[] layers = WMSUtils.getNamedLayers(capabilities);

            for (int i = 0; i < layers.length; i++) {
                // Print layer info
                System.out.println("Layer: (" + i + ")" + layers[i].getName());
                System.out.println("       " + layers[i].getTitle());
                System.out.println("       " + layers[i].getChildren().length);
                System.out.println("       " + layers[i].getBoundingBoxes());
                CRSEnvelope env = layers[i].getLatLonBoundingBox();
                System.out.println("       " + env.getLowerCorner() + " x " + env.getUpperCorner());

                // Get layer styles
                List styles = layers[i].getStyles();
                for (Iterator it = styles.iterator(); it.hasNext(); ) {
                    StyleImpl elem = (StyleImpl) it.next();

                    // Print style info
                    System.out.println("Style:");
                    System.out.println("  Name:" + elem.getName());
                    System.out.println("  Title:" + elem.getTitle());
                }
            }
        } catch (IOException e) {
            //There was an error communicating with the server
            //For example, the server is down
        } catch (ServiceException e) {
            //The server returned a ServiceException (unusual in this case)
        }
    }

    @Disabled
    void getLayerBoundingBox() {
        GeoserverLayer geoserverLayer = new GeoserverLayer();
        CRSEnvelope boundingBox = geoserverLayer.getLayerBoundingBox("mago3d:BG_MOSAIC_NEW");
        log.info("layerBoundingBox : {}", boundingBox.toString());
    }

}