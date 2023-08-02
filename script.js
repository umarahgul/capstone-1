
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

    const parentElement = document.getElementById('featured_speakers');

    const parent= document.createElement('section');
    parent.classList.add('speakers');
    
    const speakerDiv = document.createElement('div');
    speakerDiv.classList.add('speakerDiv');
    
    const heading = document.createElement('h3');
    heading.classList.add('spkrs_head');
    heading.textContent='Featurerd Speakers';
    speakerDiv.appendChild(heading);
    

    const divider=document.createElement('div');
   //  divider.setAttribute('id','divider');
   divider.classList.add('divider');
    speakerDiv.appendChild(divider);

    parentElement.appendChild(speakerDiv);
     
    for (let x=0; x<speakers.length; x += 1){ 
   
    


    const card = document.createElement('div');
    card.classList.add('card');
   //  card.id='card_speaker';
   //  parent.appendChild(card);

    const image= document.createElement('img');
    image.src=speakers[x].image;
    console.log(speakers[x].image);
    image.classList.add('profile-image');
    card.appendChild(image);

    const info_div= document.createElement('div');
    info_div.classList.add('info_div');

    const name=document.createElement('h5');
    name.textContent=speakers[x].name;
    name.classList.add('name');
    info_div.appendChild(name);

    const about=document.createElement('p');
    about.textContent=speakers[x].about;
    about.classList.add('about');
    info_div.appendChild(about);

    const achieve=document.createElement('p');
    achieve.textContent=speakers[x].achievments;
    achieve.classList.add('achieve');
    info_div.appendChild(achieve);
    
   
    if (x>1){
        card.classList.add('speakers_visibility');
         }


         card.appendChild(info_div); 
         parent.appendChild(card); 
         parentElement.appendChild(parent);
    
   
    }

  

    const btn_div= document.createElement('div');
    btn_div.classList.add('btn_div');
    const buttonMore = document.createElement('button');
    buttonMore.textContent="MORE";
    buttonMore.classList.add('button_more');
    const img_arrow= document.createElement('img');
    img_arrow.src="images/arrow_down.png";
    buttonMore.appendChild(img_arrow);
    btn_div.appendChild(buttonMore);
    parentElement.appendChild(btn_div); 
  
}   // function closes


document.addEventListener('DOMContentLoaded',fetauredSpeakers);
