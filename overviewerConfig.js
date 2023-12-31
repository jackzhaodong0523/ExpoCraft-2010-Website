var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "expo - overworld"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1704042311",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "\u5317\u65b9\u5bf9\u5e94\u53f3\u4e0a\u89d2\u65b9\u5411",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "upper_right",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "expo - overworld",
            "last_rendertime": 1704037643,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                -22,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                0,
                -22,
                0
            ],
            "north_direction": 1
        },
        {
            "name": "\u5317\u65b9\u5bf9\u5e94\u5de6\u4e0b\u89d2\u65b9\u5411",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "lower_right",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "expo - overworld",
            "last_rendertime": 1704037643,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                -22,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                0,
                -22,
                0
            ],
            "north_direction": 3
        }
    ]
};
