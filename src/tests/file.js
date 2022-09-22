const vars = {
    "0": [
        {
            "id_fuel_kind": "2",
            "name_fuel_kind": "bb",
            "del": "0"
        },
        {
            "id_fuel_kind": "3",
            "name_fuel_kind": "cc",
            "del": "0"
        }
    ],
    "1": [
        {
            "id_tank_kind": "1",
            "name_tank_kind": "hh",
            "del": "0"
        }
    ]
}

console.log("اليات الاستعمال")
vars[0].map(element => {
    console.log(element)
    
});

console.log(" نوع الوقو")
vars[1].map(element => {
    console.log(element)
    
});