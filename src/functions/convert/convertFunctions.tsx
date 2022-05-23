

     export const getRGB = (hexColor :string) => {
        let r = '0', g = '0', b = '0';
        // 3 digits
        if (hexColor.length === 4) {
            r = "0x" + hexColor[1] + hexColor[1];
            g = "0x" + hexColor[2] + hexColor[2];
            b = "0x" + hexColor[3] + hexColor[3];

            // 6 digits
        } else if (hexColor.length === 7) {
            r = "0x" + hexColor[1] + hexColor[2];
            g = "0x" + hexColor[3] + hexColor[4];
            b = "0x" + hexColor[5] + hexColor[6];
        }
        let rgb =  "rgb("+ +r + "," + +g + "," + +b + ")";
         return rgb.slice(4).slice(0,-1).split(",")
    }
     export const getSaturation = (hexColor: string) => {
        // Convert hex to RGB first
        let r = 0, g = 0, b = 0;
        if (hexColor.length === 4) {
            r = Number("0x" + hexColor[1] + hexColor[1]);
            g = Number("0x" + hexColor[2] + hexColor[2]);
            b = Number("0x" + hexColor[3] + hexColor[3]);
        } else if (hexColor.length === 7) {
            r = Number("0x" + hexColor[1] + hexColor[2]);
            g = Number("0x" + hexColor[3] + hexColor[4]);
            b = Number("0x" + hexColor[5] + hexColor[6]);
        }
        // Then to HSL
        r /= 255;
        g /= 255;
        b /= 255;
        let cmin = Math.min(r,g,b),
            cmax = Math.max(r,g,b),
            delta = cmax - cmin,
            s,
            l;

        l = (cmax + cmin) / 2;
        s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
        s = +(s * 100).toFixed(1);

        return s;
    }

