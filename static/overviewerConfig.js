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
        "skyblock"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1724648616",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        },
        "attribution": null
    },
    "tilesets": [
        {
            "name": "overworld",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "overworld",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "skyblock",
            "last_rendertime": 1724648037,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                -3,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                0,
                -3,
                0
            ],
            "north_direction": 0
        },
        {
            "name": "  nether",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "skyblock",
            "last_rendertime": 1724642325,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                -3,
                0
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
