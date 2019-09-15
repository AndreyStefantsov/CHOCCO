(function() {

    // карта
    ymaps.ready(init);

var placemarks = [
    {
        latitude: 55.7498,        //широта
        longitude: 37.6034,    //долгота
        hintContent: '<Большой Знаменский пер., 23 ',        //хинт
        balloonContent: [       

        ]
    },
    {
        latitude: 55.7438,        //широта
        longitude: 37.5818,    //долгота
        hintContent: 'Ружейный пер., 23/25',        //хинт
        balloonContent: [       

        ]
    },
    {
        latitude: 55.7579,        //широта
        longitude: 37.5831,    //долгота
        hintContent: 'Кудринский пер., 31',        //хинт
        balloonContent: [       

        ]
    },
    {
        latitude: 55.7584,        //широта
        longitude: 37.6219,    //долгота
        hintContent: 'Театральный проезд, 2',        //хинт
        balloonContent: [       

        ]
    }
];

function init(){ 

    var map = new ymaps.Map("yandex-map", {
        center: [55.7532, 37.6025],
        zoom: 14,
        behaviors: ['drag']
    });

    placemarks.forEach(el => {
        var mark = new ymaps.Placemark([el.latitude, el.longitude], {
            hintContent: el.hintContent,
            balloonContent: el.balloonContent.join('')
        },
        {
            iconLayout: 'default#image',
            iconImageHref: 'img/placemark.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        });
        
        map.geoObjects.add(mark);
        
    });
   
}
})()