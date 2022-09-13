/* ------------------------------------------------------------------------------------------------------
                                                IMPORTING NAVBAR
    ------------------------------------------------------------------------------------------------------- */

import {navbar} from '../modules/navbar.js'

let navbar_container = document.querySelector("nav");
navbar_container.innerHTML = navbar();

/* ------------------------------------------------------------------------------------------------------
                                        VARIATION IN NAVBAR'S BACKGROUND
    ------------------------------------------------------------------------------------------------------- */

// Using window.scrollY to bring the variation in the navbar's background
 let nav = document.querySelector('nav');

 changenavBack();

 window.addEventListener('scroll', changenavBack);
 function changenavBack()
 {
     if (window.scrollY >= 100) {
         nav.classList.add('active_nav');
     } else {
         nav.classList.remove('active_nav');
     }
 }

 /* ------------------------------------------------------------------------------------------------------
                                           WORKING NAVBAR DROPDOWNS
    ------------------------------------------------------------------------------------------------------- */
    let howWorks = document.querySelector("#howItWorks");
    let emploers = document.querySelector("#employers");
    let forFamilies = document.querySelector("#forFamilies");
    let careers = document.querySelector("#careers");
    
    
    let dropDownWork = document.querySelector("#workdrop");
    let dropDownEmp = document.querySelector("#emp");
    let dropDownFam = document.querySelector("#fam");
    let dropDownCarr = document.querySelector("#carr");
    
    let countWorks = 0;
    let countEmp = 0; 
    let countFam = 0; 
    let countCarr = 0;

    function showHowItWorks(){
       
            dropDownEmp.style.visibility = "hidden";
            dropDownFam.style.visibility = "hidden";
            dropDownCarr.style.visibility = "hidden";
            if(countWorks%2===0)
            {
                dropDownWork.style.visibility = "visible";
            }
            else{
                dropDownWork.style.visibility = "hidden";
            }
            countWorks++;
        // }
    }
    
    
    // Emploers
    
    
    function showEmployers()
    {
            dropDownWork.style.visibility = "hidden";
            dropDownFam.style.visibility = "hidden";
            dropDownCarr.style.visibility = "hidden";
            dropDownEmp.style.visibility = "visible";
            if(countEmp%2===0)
        {
            dropDownEmp.style.visibility = "visible";
        }
        else{
            dropDownEmp.style.visibility = "hidden";
        }
        countEmp++;
    }
    
    // // For families
    
    
    function showforFamilies()
    {
            if(countFam%2===0)
        {
            dropDownFam.style.visibility = "visible";
        }
        else{
            dropDownFam.style.visibility = "hidden";
        }
        countFam++;
    }    
    
    function showCareers()
    {
            if(countCarr%2===0)
        {
            dropDownCarr.style.visibility = "visible";
        }
        else{
            dropDownCarr.style.visibility = "hidden";
        }
        countCarr++;
    }
    
    howWorks.addEventListener("click", showHowItWorks);
    emploers.addEventListener("click", showEmployers);
    forFamilies.addEventListener("click", showforFamilies);
    careers.addEventListener("click", showCareers);

/* ------------------------------------------------------------------------------------------------------
                                RUNNING TEXTS IN THE PORTION JUST BELOW THE NAVBAR
    ------------------------------------------------------------------------------------------------------- */

// Using setInterval() to append different texts at the same place
 let span = document.getElementById("span");

 let spanArr = ['you', 'families', 'caregivers', 'therapists', 'coaches','providers', 'depression', 'employees', 'anxiety'];

 let count = 0;
 setInterval(function(){
     span.innerText = spanArr[count];
     count++;
     if(count>(spanArr.length-1))
     {
         count = 0;
     }
 },1000);

 /* ------------------------------------------------------------------------------------------------------
                                        GOOD NEWS - SLIDING EFFECT
    ------------------------------------------------------------------------------------------------------- */
const productContainers = [...document.querySelectorAll('.newsCard-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width/2;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})