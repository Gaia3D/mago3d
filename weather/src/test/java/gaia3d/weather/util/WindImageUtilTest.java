package gaia3d.weather.util;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.withPrecision;

@Slf4j
class WindImageUtilTest {

    @Test
    void normalize() {
        float min = -30.0f, max = 50.0f, value = 10.5f;
        int size = 65535;
        float normalize = WindImageUtil.normalize(min, max, value, size);
        assertThat(normalize).isEqualTo(33177.09375f);
    }

    @Test
    void floatTo2Bands() {
        int[] bands = WindImageUtil.floatTo2Bands(33177.09375f);
        assertThat(bands[0]).isEqualTo(130);
        assertThat(bands[1]).isEqualTo(27);
    }

    @Test
    void bandsToFloat() {
        int[] bands = new int[] {130, 27};
        float actual = WindImageUtil.bandsToFloat(bands);
        assertThat(actual).isEqualTo(33177f);
    }

    @Test
    void denormalize() {
        float min = -30.0f, max = 50.0f, value = 33177f;
        int size = 65535;
        float denormalize = WindImageUtil.denormalize(min, max, value, size);
        assertThat(denormalize).isEqualTo(10.5f, withPrecision(0.1f));
    }

    @Test
    void denormalize1() {
        float min = 0.18294367f, max = 1.659079f, value = 58;
        int size = 255;
        float denormalize = WindImageUtil.denormalize(min, max, value, size);
        log.info(denormalize + "");
        //assertThat(denormalize).isEqualTo(10.5f, withPrecision(0.1f));
    }

    @Test
    void denormalize2() {
        float min = 0.64571613f, max = 0.9848427f, value = 73;
        int size = 255;
        float denormalize = WindImageUtil.denormalize(min, max, value, size);
        log.info(denormalize + "");
        //assertThat(denormalize).isEqualTo(10.5f, withPrecision(0.1f));
    }

}