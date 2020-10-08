import gsap from 'gsap'
import { Timeline } from 'gsap/gsap-core'

export default class Blob {

    constructor(options) {

        this.element = options.element
        this.numPoints = options.numPoints
        this.centerX = options.centerX
        this.centerY = options.centerY
        this.minRadius = options.minRadius
        this.maxRadius = options.maxRadius
        this.minDuration = options.minDuration
        this.maxDuration = options.maxDuration

        this.points = [];
        this.path = options.element;
        this.slice = (Math.PI * 2) / this.numPoints;
        this.startAngle = this.random(Math.PI * 2);

        this.tl = new Timeline({
            onUpdate: () => this.update()
        });


        this.init()
    }

    init() {
        this.fillPoints()
    }

    fillPoints() {

        for (var i = 0; i < this.numPoints; i++) {

            var angle = this.startAngle + i * this.slice;
            var duration = this.random(this.minDuration, this.maxDuration);

            var point = {
                x: this.centerX + Math.cos(angle) * this.minRadius,
                y: this.centerY + Math.sin(angle) * this.minRadius
            };

            this.tl.add(gsap.to(point, {
                duration: duration,
                x: this.centerX + Math.cos(angle) * this.maxRadius,
                y: this.centerY + Math.sin(angle) * this.maxRadius,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'

            }), -this.random(duration));
            


            this.points.push(point);
        }
    }

    update() {
        this.path.setAttribute("d", this.cardinal(this.points, true, 1));
    }

    playBlob(){
        this.tl.resume()
    }
    pauseBlob(){
        this.tl.pause()
    }


    cardinal(data, closed, tension) {

        if (data.length < 1) return "M0 0";
        if (tension == null) tension = 1;

        var size = data.length - (closed ? 0 : 1);
        var path = "M" + data[0].x + " " + data[0].y + " C";

        for (var i = 0; i < size; i++) {

            var p0, p1, p2, p3;

            if (closed) {
                p0 = data[(i - 1 + size) % size];
                p1 = data[i];
                p2 = data[(i + 1) % size];
                p3 = data[(i + 2) % size];

            } else {
                p0 = i == 0 ? data[0] : data[i - 1];
                p1 = data[i];
                p2 = data[i + 1];
                p3 = i == size - 1 ? p2 : data[i + 2];
            }

            var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
            var y1 = p1.y + (p2.y - p0.y) / 6 * tension;

            var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
            var y2 = p2.y - (p3.y - p1.y) / 6 * tension;

            path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
        }

        return closed ? path + "z" : path;
    }

    random(min, max) {
        if (max == null) { max = min; min = 0; }
        if (min > max) { var tmp = min; min = max; max = tmp; }
        return min + (max - min) * Math.random();
    }

}