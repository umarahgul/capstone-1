
// ---------- functions to open and close the hamburger men-------//
function openNav() {
    document.getElementById('hamburgerMenu').style.display = 'block';}

    function closeNav() {
        document.getElementById('hamburgerMenu').style.display = 'none';} 

        // ----------Object to hold info for fetaured speakers --------//

const speakers = [
    {
 image: 'images/speaker_01.png',
 name : 'Yochai Benkler',
 about:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
 achievments: 'Bekler base studies common based peer prodcution, and published his seminal book The wealth of netwroks in 2006',
    },

{
    image:'images/speaker_02.png',
 name : 'SohYeong Noh',
 about:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
 achievments: 'Bekler base studies common based peer prodcution, and published his seminal book The wealth of netwroks in 2006',
 
},
 {  image: 'images/speaker_03.png',
    name : 'Lila  Tretikov',
   about:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
   achievments: 'Bekler base studies common based peer prodcution, and published his seminal book The wealth of netwroks in 2006',
},
 
 {
    image: 'images/speaker_04.png',
    name: 'Kilnam Chon',
    about:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    achievments: 'Bekler base studies common based peer prodcution, and published his seminal book The wealth of netwroks in 2006',
 
 },

 {
    image: 'images/speaker_05.png',
    name: 'Julia Leda',
    about:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    achievments: 'Bekler base studies common based peer prodcution, and published his seminal book The wealth of netwroks in 2006',
 
 },
{   
    image: 'images/speaker_06.png',
    name: 'Ryan Merkley',
    about:'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    achievments: 'Bekler base studies common based peer prodcution, and published his seminal book The wealth of netwroks in 2006',
}

];


function fetauredSpeakers() {

    const parentElement = document.getElementById('speakers');


    for (let x=0; x<speakers.length; x += 1) {

    const parent= document.createElement('section');
    parent.classList.add('speakers');


    const card = document.createElement('div');
    card.classList.add('card');
    parent.appendChild(card);

    const image= document.createElement('img');
    image.src=speakers[x].image;
    console.log(speakers[x].image);
    image.classList.add('Profile-image');
    card.appendChild(image);

    const name=document.createElement('h5');
    name.textContent=speakers[x].name;
    name.classList.add('name');
    card.appendChild(name);

    const about=document.createElement('p');
    about.textContent=speakers[x].about;
    name.classList.add('about');
    card.appendChild(about);

    const achieve=document.createElement('h5');
    achieve.textContent=speakers[x].achieve;
    name.classList.add('achieve');
    card.appendChild(achieve);

    parent.appendChild(card);
    parentElement.appendChild(parent);
    }

    // ------- after creating all elements append everything to the div in the html
    
  
}

document.addEventListener('DOMContentLoaded',fetauredSpeakers);