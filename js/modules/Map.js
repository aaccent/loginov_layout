export default class Map {
    constructor(mapId, options) {
        this.mapId = mapId;
        this.options = options;
        this.init();
    }

    async init() {
        await this.injectYMapsScript();
        await this.loadYMaps();
        this.initMap();
    }

    injectYMapsScript() {
        return new Promise((resolve) => {
            const ymapsScript = document.createElement('script');
            ymapsScript.src =
                "https://api-maps.yandex.ru/2.1.68/?apikey=a69df322-6f0d-4200-937d-307050c5388cc&load=package.full&lang=ru-RU";
            document.body.appendChild(ymapsScript);
            ymapsScript.addEventListener('load', resolve);
        });
    }

    loadYMaps() {
        return new Promise((resolve) => ymaps.ready(resolve));
    }

    initMap() {
        let geoObjects = [],
        points = this.options.coords,

        getPointData = function (index) {
            return {
                balloonContentHeader: '<font size=3><b><a target="_blank" href="https://yandex.ru">Здесь может быть ваша ссылка</a></b></font>',
                balloonContentBody: '<p>Ваше имя: <input name="login"></p><p>Телефон в формате 2xxx-xxx:  <input></p><p><input type="submit" value="Отправить"></p>',
                balloonContentFooter: '<font size=1>Информация предоставлена: </font> балуном <strong>метки ' + index + '</strong>',
                clusterCaption: 'метка <strong>' + index + '</strong>'
            }
        },

        MyIconLayout = ymaps.templateLayoutFactory.createClass([
            '<div class="ya-placemark" data-coords="">',
                '<svg class="icon">',
                    '<use xlink:href="./images/sprite.svg#ya-pin"></use>',
                '</svg>',
            '</div>'
        ].join('')),

        getPointOptions = function () {
            return {
                // Опции.
                iconLayout: 'default#imageWithContent',
                // Макет содержимого.
                iconContentLayout: MyIconLayout
            };
        };
        
        this.clusterer = new ymaps.Clusterer({
            groupByCoordinates: true,
            clusterDisableClickZoom: true,
            clusterOpenBalloonOnClick: false,
        });

        this.clusterer.events.add('click', (e) => {
            const coords = e.get('target').geometry.getCoordinates();
            console.log(coords);
        });

        this.map = new ymaps.Map(this.mapId, {
            center: this.options.center,
            zoom: this.options.zoom,
            controls: this.options.controls,
        });

        this.map.behaviors.disable('scrollZoom');
            for (var i = 0, len = points.length; i < len; i++) {
            geoObjects[i] = new ymaps.Placemark(points[i], getPointData(i), getPointOptions());
        }

        let translate;
        const position = this.map.getGlobalPixelCenter();
        const mediaQuery = window.matchMedia('(max-width: 992px)');
        mediaQuery.matches ? (translate = [ position[0], position[1] - 200 ]) : (translate = [ position[0], position[1] ]);
        this.map.setGlobalPixelCenter(translate);

        this.clusterer.add(geoObjects);
        this.map.geoObjects.add(this.clusterer);
    }

    showInfo() {
        console.log(this.options);
    }
}