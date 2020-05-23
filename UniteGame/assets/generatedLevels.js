const level_1 = `{
    "minSteps":["GREEN","ORANGE","BLUE","GREEN","BLUE","ORANGE","BLUE","GREEN","ORANGE","RED","BLUE"],
    "rowsAmount":13,
    "columnsAmount":13,
    "grid":[
        [{"color":"GREEN"},{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"BLUE"},{"color":"GREEN"},{"color":"RED"},{"color":"BLUE"},{"color":"RED"},{"color":"BLUE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"GREEN"}],
        [{"color":"GREEN"},{"color":"GREEN"},{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"GREEN"}],
        [{"color":"ORANGE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"RED"},{"color":"RED"},{"color":"ORANGE"}],
        [{"color":"BLUE"},{"color":"RED"},{"color":"RED"},{"color":"BLUE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"RED"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"BLUE"}],
        [{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"RED"},{"color":"BLUE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"BLUE"}],
        [{"color":"BLUE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"RED"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"GREEN"}],
        [{"color":"ORANGE"},{"color":"GREEN"},{"color":"RED"},{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"RED"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"BLUE"}],
        [{"color":"RED"},{"color":"RED"},{"color":"BLUE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"RED"},{"color":"GREEN"},{"color":"GREEN"},{"color":"GREEN"}],
        [{"color":"BLUE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"BLUE"},{"color":"GREEN"}],
        [{"color":"GREEN"},{"color":"RED"},{"color":"GREEN"},{"color":"BLUE"},{"color":"RED"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"}],
        [{"color":"RED"},{"color":"RED"},{"color":"RED"},{"color":"GREEN"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"RED"},{"color":"ORANGE"}],
        [{"color":"BLUE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"ORANGE"}],
        [{"color":"BLUE"},{"color":"ORANGE"},{"color":"RED"},{"color":"GREEN"},{"color":"GREEN"},{"color":"GREEN"},{"color":"RED"},{"color":"BLUE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"BLUE"},{"color":"RED"}]
    ]
}`;

const LEVEL_1 = JSON.parse(level_1);

const level_2 = `{
    "minSteps":["RED","BLUE","GREEN","RED","GREEN","ORANGE","BLUE","ORANGE","GREEN","BLUE","GREEN","RED","ORANGE","GREEN","BLUE"],
    "rowsAmount":13,
    "columnsAmount":13,
    "grid":[
        [{"color":"ORANGE"},{"color":"BLUE"},{"color":"RED"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"RED"},{"color":"BLUE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"GREEN"}],
        [{"color":"RED"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"RED"},{"color":"ORANGE"},{"color":"RED"},{"color":"RED"},{"color":"RED"},{"color":"GREEN"}],
        [{"color":"RED"},{"color":"RED"},{"color":"GREEN"},{"color":"GREEN"},{"color":"GREEN"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"RED"},{"color":"ORANGE"},{"color":"RED"}],
        [{"color":"RED"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"GREEN"}],
        [{"color":"ORANGE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"RED"},{"color":"ORANGE"}],
        [{"color":"GREEN"},{"color":"BLUE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"GREEN"},{"color":"RED"},{"color":"BLUE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"RED"},{"color":"ORANGE"},{"color":"BLUE"}],
        [{"color":"ORANGE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"RED"},{"color":"ORANGE"},{"color":"RED"},{"color":"BLUE"},{"color":"RED"}],
        [{"color":"ORANGE"},{"color":"RED"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"RED"}],
        [{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"RED"},{"color":"BLUE"},{"color":"RED"},{"color":"RED"},{"color":"BLUE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"RED"},{"color":"GREEN"},{"color":"RED"}],
        [{"color":"RED"},{"color":"GREEN"},{"color":"GREEN"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"RED"},{"color":"GREEN"},{"color":"BLUE"}],
        [{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"RED"},{"color":"RED"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"ORANGE"}],
        [{"color":"BLUE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"RED"},{"color":"RED"},{"color":"RED"},{"color":"RED"},{"color":"ORANGE"}],
        [{"color":"ORANGE"},{"color":"RED"},{"color":"RED"},{"color":"BLUE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"RED"},{"color":"ORANGE"},{"color":"RED"},{"color":"BLUE"}]
    ]
}`;

const level_3 = `{
    "minSteps":["BLUE","RED","ORANGE","GREEN","BLUE","RED","ORANGE","BLUE","GREEN","RED"],
    "rowsAmount":13,
    "columnsAmount":13,
    "grid":[
        [{"color":"GREEN"},{"color":"BLUE"},{"color":"RED"},{"color":"BLUE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"BLUE"},{"color":"RED"},{"color":"ORANGE"}],
        [{"color":"ORANGE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"RED"},{"color":"RED"},{"color":"BLUE"}],
        [{"color":"BLUE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"RED"},{"color":"BLUE"},{"color":"RED"},{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"RED"},{"color":"BLUE"},{"color":"RED"}],
        [{"color":"RED"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"RED"},{"color":"BLUE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"}],
        [{"color":"ORANGE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"RED"},{"color":"RED"},{"color":"GREEN"},{"color":"GREEN"},{"color":"RED"},{"color":"GREEN"},{"color":"RED"},{"color":"GREEN"}],
        [{"color":"RED"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"GREEN"},{"color":"RED"},{"color":"RED"},{"color":"GREEN"},{"color":"RED"}],
        [{"color":"RED"},{"color":"BLUE"},{"color":"GREEN"},{"color":"RED"},{"color":"ORANGE"},{"color":"RED"},{"color":"GREEN"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"RED"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"BLUE"}],
        [{"color":"BLUE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"RED"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"RED"}],
        [{"color":"ORANGE"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"RED"},{"color":"BLUE"},{"color":"RED"},{"color":"RED"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"RED"}],
        [{"color":"GREEN"},{"color":"GREEN"},{"color":"GREEN"},{"color":"GREEN"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"ORANGE"}],
        [{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"RED"},{"color":"RED"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"BLUE"},{"color":"RED"},{"color":"RED"},{"color":"GREEN"}],
        [{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"RED"},{"color":"BLUE"},{"color":"RED"}],
        [{"color":"ORANGE"},{"color":"RED"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"RED"},{"color":"ORANGE"},{"color":"RED"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"GREEN"}]
    ]
}`;


const level_4 = `{
    "minSteps":["ORANGE","BLUE","RED","GREEN","BLUE","RED","GREEN","ORANGE","BLUE","GREEN","RED","BLUE"],
    "rowsAmount":13,
    "columnsAmount":13,
    "grid":[
        [{"color":"BLUE"},{"color":"GREEN"},{"color":"RED"},{"color":"BLUE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"RED"},{"color":"ORANGE"},{"color":"RED"},{"color":"GREEN"},{"color":"RED"},{"color":"GREEN"},{"color":"RED"}],
        [{"color":"RED"},{"color":"ORANGE"},{"color":"RED"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"RED"},{"color":"RED"},{"color":"BLUE"},{"color":"RED"},{"color":"BLUE"},{"color":"GREEN"},{"color":"RED"}],
        [{"color":"BLUE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"RED"},{"color":"GREEN"},{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"RED"}],
        [{"color":"RED"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"RED"},{"color":"BLUE"},{"color":"RED"},{"color":"GREEN"},{"color":"RED"},{"color":"RED"},{"color":"ORANGE"},{"color":"RED"}],
        [{"color":"ORANGE"},{"color":"RED"},{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"GREEN"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"RED"}],
        [{"color":"ORANGE"},{"color":"RED"},{"color":"GREEN"},{"color":"RED"},{"color":"GREEN"},{"color":"GREEN"},{"color":"RED"},{"color":"BLUE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"BLUE"}],
        [{"color":"ORANGE"},{"color":"RED"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"GREEN"},{"color":"RED"},{"color":"GREEN"},{"color":"GREEN"},{"color":"GREEN"}],
        [{"color":"GREEN"},{"color":"RED"},{"color":"RED"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"BLUE"}],
        [{"color":"GREEN"},{"color":"RED"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"RED"},{"color":"RED"},{"color":"ORANGE"},{"color":"RED"},{"color":"RED"},{"color":"ORANGE"},{"color":"RED"},{"color":"RED"}],
        [{"color":"RED"},{"color":"GREEN"},{"color":"GREEN"},{"color":"BLUE"},{"color":"RED"},{"color":"GREEN"},{"color":"BLUE"},{"color":"BLUE"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"RED"}],
        [{"color":"BLUE"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"GREEN"},{"color":"RED"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"BLUE"}],
        [{"color":"BLUE"},{"color":"GREEN"},{"color":"RED"},{"color":"ORANGE"},{"color":"BLUE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"RED"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"ORANGE"},{"color":"RED"}],
        [{"color":"BLUE"},{"color":"BLUE"},{"color":"ORANGE"},{"color":"GREEN"},{"color":"RED"},{"color":"RED"},{"color":"GREEN"},{"color":"GREEN"},{"color":"BLUE"},{"color":"GREEN"},{"color":"ORANGE"},{"color":"RED"},{"color":"BLUE"}]
    ]
}`;
