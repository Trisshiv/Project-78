var names=[

    "All Of Us",

    "Brother",

    "Brother",

    "Brother and Father",

    "Brother and FAther",

    "Father",

    "Father and Brother",

    "Myself",

    "Myself",

    "Myself",

    "Myself",

    "Myself and Brother",

    "Myself, Mom and Brother",

    "Myself",

    "Myself",

    "Myself",

    "Myself",

    "Myself",

    "Myself",

    "Myself",

    "Myself",

    "Myself"
  ];
  var image=[
    "mom and dad.jpg",
    "B.jpeg",
    "B1.jpeg",
    "BAF.jpeg",
    "BAF1.jpeg",
    "F.jpeg",
    "FAB.jpeg",
    "M.jpeg",
    "M1.jpeg",
    "M2.jpeg",
    "M3.jpeg",
    "MAB.jpeg",
    "MABAM.jpeg",
    "ME.jpeg",
    "ME1.jpeg",
    "ME2.jpeg",
    "ME3.jpeg",
    "ME4.jpeg",
    "ME5.jpeg",
    "MEE.jpeg",
    "MEEE.jpeg",
    "MEEEEE.jpeg"
  ];
  var i=0;
  function nextslide(){
    document.getElementById("image1").src=image[i];
    document.getElementById("name").innerHTML=names[i];
    i++;
    if(i==5){
      i=0;
    }
    document.getElementById("audio").play();
  }