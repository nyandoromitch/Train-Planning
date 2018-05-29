var stationsNS = [
 {name: "Old Wankie", dist: 0, zone: 1, bullet: 1},
 {name: "Hwange", dist: 40, zone: 1, bullet: 1},
 {name: "Lukosi", dist: 124, zone: 1},
 {name: "Tshontanda", dist: 178, zone: 1},
 {name: "Nichokomela", dist: 216, zone: 1},
 {name: "Nengasha", dist: 249, zone: 2, bullet: 1},
 {name: "Dete", dist: 280, zone: 2},
 {name: "Malindi", dist: 307, zone: 2},
 {name: "Waterloor", dist: 334, zone: 2, bullet: 1},
 {name: "Isilwana", dist: 354, zone: 2},
 {name: "Mukwa", dist: 391, zone: 2, bullet: 1},
 {name: "Ingwe", dist: 428, zone: 2},
 {name: "Guswini", dist: 458, zone: 2},
 {name: "Mpindo", dist: 499, zone: 2, bullet: 1},
{name: "Gwaai", dist: 543, zone: 3},
 {name: "Teakland", dist: 574, zone: 3, bullet: 1},
 {name: "Umguza", dist: 604, zone: 3, bullet: 1},
 {name: "SawMills", dist: 649, zone: 3},
 {name: "Buda", dist: 676, zone: 3},
 {name: "Igusi", dist: 702, zone: 3, bullet: 1},
 {name: "Deli", dist: 731, zone: 3, bullet: 1},
 {name: "Highfields", dist: 757, zone: 4},
 {name: "Tenela", dist: 805, zone: 4},
 {name: "Nyamandlovu", dist: 833, zone: 4},
 {name: "Morgans", dist: 862, zone: 4, bullet: 1},
 {name: "Redbank", dist: 906, zone: 4, bullet: 1},
 {name: "Siphasiphasi", dist: 939, zone: 5},
 {name: "Luveve", dist: 966, zone: 5},
 {name: "DMPD", dist: 997, zone: 6},
 {name: "Mpopoma", dist: 1021, zone: 6},
 {name: "Bulawayo", dist: 1053, zone: 6}
];

var types = {
 // "L": "rgba(183,116,9,1)",
 // "B": "rgba(196,62,29,1)",
  "N":"rgba(34,34,34,1)",
  "W":"rgba(34,34,34,1)",
  "S":"rgba(34,34,34,1)"
};



var southbound = {
 "101N": ["4:00am","4:15am","-","-","4:45am","-","5:30am","-","-","5:45am","-","-","6:03am","6:50am","-","-","-","-","-","-","-","8:40am","-","9:20am","-","11:23am","-","-","-","-","X"],
};



var POPULATING_ARRAY = northbound= {
  "100N":["4:00am","4:15am","-","-","4:45am","-","5:30am","-","-","5:45am","-","-","6:03am","6:50am","-","-","-","-","-","-","-","8:40am","-","9:20am","-","11:23am","-","-","-","-","11:59am"],
  "239N": ["X","X","6:00am","-","-","-","-","-","-","8:00am","-","-","-","10:56am","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],
  "256N": ["X","5:00am","6:00am","-","-","-","7:58am","-","-","8:30am","-","-","-","9:30am","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X","X"],
};

var parent = document.getElementById("parent");

for ( var pos = 0; pos < POPULATING_ARRAY.length; pos++)
{
    //create an <option> to add the <select>
    var child = document.createElement("option");

    //assign values to the <option>
    child.textContent = POPULATING_ARRAY[pos]
    child.value = pos;

    //attach the mew <option> to the <selection>
    parent.appendChild(child);
}

function displayExample()
{
    var current = document.getElementById("parent");
    var op = parseInt(current.value);
    document.getElementById("helpMsg").innerText = EXAMPLES[op];    
}