
const myResume = {
    name : "Thangapandi K",
    age : 27,
    address : {
        city : "Bodinayakanur",
        district : "Theni",
        state : "Tamilnadu",
        country : "India"
    },
    contact : {
        mobile : "+919952257347",
        email : "thangapandi.chella@gmail.com"
    },
    education : {
        degree : "Bachelor of Science",
        year : "2017",
        college : "Annai fathima College of Arts and Science",
        university : "Madurai Kamaraj University",
        location : "Madurai, Tamilnadu"
    } 
};

//----------------------------------------------

// Iterate over all "for loops" on above JSON 

// "for" loop

for (let i = 0; i < myResume.length; i++) {
    
    console.log(myResume[i]);
    
}


//----------------------------------------------

// "for in" loop

for (let key in myResume) {

    console.log(key, myResume[key]);

}


//----------------------------------------------

// "for of" loop

for (let key of Object.keys(myResume)) {

    console.log(key, myResume[key]);

}


//----------------------------------------------

// "for each" loop

Object.keys(myResume).forEach(function(m) {
    console.log(m, myResume[m]);
});

