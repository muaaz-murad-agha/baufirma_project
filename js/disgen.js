// chek if there's local storege color Option  
let mainColor = localStorage.getItem( "color_option" );
// hier zeigt Null dass hier leer ist
// console.log( mainColor );
// es muss leer nichr sein 
if ( mainColor !== null ) {
    // console.log( "moin" );
    //  hat color gebracht von (e.target.dataset.color )
    // console.log( localStorage.getItem( "color_option" )) ;
    // bringt den color von localStorage zu --main color
    document.documentElement.style.setProperty( '--main-color', localStorage.getItem( "color_option" ) )
   
   
    // check for active class NACH Dem NEuen OFFen
    // romve ACTIVE von class ung gibt ihn zum aktveirt class (ALL=ul) [element =e.target]
    document.querySelectorAll( ".color-list li" ).forEach( element => {
            
        element.classList.remove( "active" );

        // add active class on Element with data color=== local Storge Item
        if ( element.dataset.color === mainColor ) {

            // add Active class
            element.classList.add( "active" );
        }
        } );
}
 //  variable für YES NO SCOPE
    // Durchfüherung der Button YES NO
let backgroundOption = true;
        
   // variable to control The background Interval
let backgroundInterval;
        
// check If There's local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem( "background_option" );

// check if random background not emptey
if( backgroundLocalItem !== null) {
    
    console.log( typeof ( backgroundLocalItem ) );
    if ( backgroundLocalItem === 'true' ) {
        backgroundOption = true;
        console.log( backgroundLocalItem );
    }
    else {
        backgroundOption = false;
        console.log( backgroundLocalItem );
    }
    // remove Active Class from All Span
    document.querySelectorAll( ".random-background span" ).forEach( element => {

       element.classList.remove("active")
    } );
    if ( backgroundOption === 'true' ) {

        document.querySelector( ".random-background .yes" ).classList.add( "active" );
    } else {

         document.querySelector( ".random-background .no" ).classList.add( "active" );
    }

}
// control Spin Class on Icon
document.querySelector( " .control .fa-gear" ).onclick = function () {
    this.classList.toggle( "fa-spin" );
    document.querySelector( ".settings-box" ).classList.toggle( "open" );
}

// switch color
const colorLi = document.querySelectorAll( ".color-list li" );

// loop on all list items
colorLi.forEach( li => {
    // beim Drucken nimmt die vlaue Farbe
    li.addEventListener( "click", ( e ) => {
        // zeigt Die Farbe value durch traget durck und dataset
        // console.log( e.target.dataset.color );

        // set color on Root
        document.documentElement.style.setProperty( '--main-color', e.target.dataset.color );

        // set color in localStorage
        localStorage.setItem( "color_option", e.target.dataset.color );

        // romve ACTIVE von class ung gibt ihn zum aktveirt class (ALL=ul) [element =e.target]
        handleActiveClass(e);
    });
} );
    // ON/OFF backgroundImge
    const randomBackEl = document.querySelectorAll( ".random-background span" );
// loop on all span items
randomBackEl.forEach( span => {
    
    // beim Drucken nimmt die vlaue YES OR NO
    span.addEventListener( "click", ( e ) => {
        // zeigt Die Farbe value durch traget durck und dataset
        // console.log( e.target.dataset.color );

       
        // romve ACTIVE von class und gibt ihn zum aktveirt class (ALL=span) [element =e.target]
        handleActiveClass( e );

        // add to set true or false to variable
        if ( e.target.dataset.background === "yes" ) {
            
            backgroundOption = true;

            // console.log( backgroundOption );
            randomizeImags();

            localStorage.setItem( "background_option", true );

        } else {
            backgroundOption = false;
            // randomizeImags( backgroundOption );
            clearInterval( backgroundInterval );

            localStorage.setItem( "background_option", false );
            
        }
    } );
} ); 
    // seclect landing page Element
        let landingPage = document.getElementById( "landing-page" );
        let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg",];
        
    // betriebt durch function
    function randomizeImags() {
        if ( backgroundOption === true ) {
        
        // get Random Nummber
      backgroundInterval= setInterval(() => {
          let randomNummber = Math.floor( Math.random() * imgsArray.length );
          
        // change Backgruond Image URL
        landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNummber] + '")';
        }, 10000 );
    }
}


// select Skill Selector
let ourSkills = document.querySelector( ".skills" );
window.onscroll = function () {

    //skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;
    // this.console.log( skillsOffsetTop );

    // skills outer Hight
    let skillsOuterHeight = ourSkills.offsetHeight;
    // this.console.log(skillsOuterHeight );

    //  window Height
    let windowHeight = this.innerHeight;
    // this.console.log( windowHeight );

    // Window Scroll Top
    let windowScrollTop = this.scrollY;
    // this.console.log( windowScrollTop );

    if ( windowScrollTop> (skillsOffsetTop +skillsOuterHeight -windowHeight)) {
        // this.console.log( 'Du hast erreicht' );
        let allskills = document.querySelectorAll( ".skill-box .skill-progress span " );
        allskills.forEach( skill => {

            skill.style.width = skill.dataset.progress;
            // console.log( skill.dataset.progress );
        });
    }
};
// Create popup with The Image
let ourGallery = document.querySelectorAll( ".gallery .images-box img" );

ourGallery.forEach( img => {
    img.addEventListener( 'click', ( e ) => {

        // Create Div OVERLAY Element
        let overlay = document.createElement( "div" );

        // Add class to Div overlay
        overlay.className = 'popup-overlay';
        
        // Append Overlay to the Body
        document.body.appendChild( overlay );


        // create the popup Box
        let popupBox = document.createElement( "div" );
      
        // Add class to the popup box
        popupBox.className = "popup-box";

        // Überprüfen ALt bie PHOtos
        // console.log( img.alt );
        if ( img.alt !== null ) {
            // create PHoto Heading
            let photoHeading = document.createElement( 'h3' );

            // Add class className
            photoHeading.className = "photoHeading";
            
            // add content to h3
            let imgText= document.createTextNode(img.alt);

            // add text to h3
            photoHeading.appendChild( imgText );
           
            // add to popupBox
             popupBox.appendChild( photoHeading );
         
         }

        // create Img
        let popupImage = document.createElement( "img" );
         
        // url from FORECH
        // console.log( img.src );
        popupImage.src = img.src;
        // add IMage to popup Box
        popupBox.appendChild( popupImage );

        // Append The popup Box to Body
        document.body.appendChild( popupBox );
    
        //  create  the close span (closeButton)
        let closeButton = document.createElement( "span" );
        
         //  Add class className
        closeButton.className = "close-button";
        
        // Write Text
        let closeButtonText = document.createTextNode( "x" );
       
        // add text to closeButton
        closeButton.appendChild( closeButtonText );

        // add to father
        popupBox.appendChild( closeButton );
   
        } );
} );
    // close Function
document.addEventListener( "click", function ( e ) {
    if( e.target.className == "close-button" ) {

        // Remove current  window popup
         e.target.parentNode.remove();
        // other way (2) to remove  ; The father NOde is popup-box
        // document.querySelector( ".popup-box" ).remove();


        // remove Overlay
        document.querySelector(".popup-overlay").remove();
        
   }
} );
    


//  WIR KÖNNEN einer Function zusammenfassen für den Drucl (link und buttls)
        // Bulltes Teil


//         // select All Bullets
//         let allBullets = document.querySelectorAll( ".nav-bullets .bullet");

//         // all bullets
//         // console.log( allBullets );

// allBullets.forEach( bullet => {

//     bullet.addEventListener( "click", ( e ) => {
        
//         // get DATA-section in selector
         

//         let chosenSection = document.querySelector(e.target.dataset.section );
//         chosenSection.scrollIntoView( {

            
//             behavior: 'smooth'

//         } );
                
//     } );
// } );

// //     // select All Links
//         let allLinks = document.querySelectorAll( ".links a");

//         // allLinks
//         // console.log( allBullets );

// allLinks.forEach( link => {

//     link.addEventListener( "click", ( e ) => {
//         // weil <a> geht immer auf link , machen AUS
//          e.preventDefault();
        
//         // get DATA-section in selector
         

//         let chosenSection = document.querySelector(e.target.dataset.section );
//         chosenSection.scrollIntoView( {

            
//             behavior: 'smooth'

//         } );
                
//     } );
// } );


    //  jetzt Zusamenfassung der Function für bei Druck (links und Bullts) 
function scrollToSection (elements){
   
    elements.forEach( ele => {
            

    ele.addEventListener( "click", ( e ) => {
        
        e.preventDefault();
        // get DATA-section in selector
         

        let chosenSection = document.querySelector(e.target.dataset.section );
        chosenSection.scrollIntoView( {

            
            behavior: 'smooth'

        } );
                
    } );
} );    
}
 
    //  get Links und Function Abrufen
        let allLinks = document.querySelectorAll( ".links a");
scrollToSection( allLinks );

    //  get Bullets und Function Abrufen   
  let allBullets = document.querySelectorAll( ".nav-bullets .bullet");
scrollToSection( allBullets );

// zusamenfassung für Active Classes
function handleActiveClass( ev ) {
    
    ev.target.parentElement.querySelectorAll( ".active" ).forEach( element => {
           
            element.classList.remove( "active" );
        } );
        
        // Add ACTIVE class on self
        ev.target.classList.add( "active" );
}
// Active Bullets Box 
let bulletsSpan = document.querySelectorAll( ".bullets-option span" );
let navBullets = document.querySelector( ".nav-bullets" );
let bulletLocalStorage = localStorage.getItem( "bullets-option" );
if ( bulletLocalStorage !== null ) {
    
    // text beim Durck
    // console.log( 'Not Empty' );
    bulletsSpan.forEach( span => {
        span.classList.remove( "active" );

    } );

    if ( bulletLocalStorage === 'block' ) {

        navBullets.style.display = 'block';

    document.querySelector( ".bullets-option .yes" ).classList.add( "active" );

    }
    else {
        navBullets.style.display = 'none';
    }document.querySelector( ".bullets-option .no" ).classList.add( "active" );

}

bulletsSpan.forEach( span => {
    span.addEventListener( "click", ( e ) => {
        
        if ( span.dataset.dispaly === 'show' ) {

            navBullets.style.display = 'block';
            localStorage.setItem("bullets-option", 'block')
        }
        else {

            navBullets.style.display = 'none';
            localStorage.setItem("bullets-option", 'none')
        }
        
        handleActiveClass( e );
    } );
    
} );

    // Reset Button
document.querySelector( ".reset-options" ).onclick= function (){
    //  heir Löscht alle Elemnts in LocalsStorage, wir wollen NUR Setting box
    // localStorage.clear();
    // nur unsre Ememnte in Setting box 
    localStorage.removeItem( "bullets-option" );
    localStorage.removeItem( "background_option");
    localStorage.removeItem( "color_option" );
    window.location.reload();

    
};
   
let toggleBtn = document.querySelector( ".toggle-menu" );
let toggleLinks = document.querySelector( ".links" )


toggleBtn.onclick = function ( e ) {

    // stop propagetion
    e.stopPropagation();

    // set open Class in HTMl
    toggleLinks.classList.toggle("open")
};

            document.addEventListener( "click", ( ev ) => {

            if ( ev.target !== toggleBtn && ev.target !== toggleLinks ) {

                if ( toggleLinks.classList.contains( "open" ) ) {

                 // remove open Class in HTMl
                     toggleLinks.classList.toggle("open")
         }

    }
    // überprüfe die Element der GETARGT IST
    // console.log( e.target );

        
    
} );
// stop propagetion on Menu
toggleLinks.onclick =  function( e ){
    e.stopPropagation();
}