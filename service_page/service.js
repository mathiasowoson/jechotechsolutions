// select all buttons
const buttons = document.querySelectorAll('button');
const contents = document.querySelectorAll('.categorycontents');
const onBtns = document.querySelectorAll('.on-btn');
const offBtns = document.querySelectorAll('.off-btn');

// add event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        const targetId = button.getAttribute('data-target');

        // get the target content Id
        const targetContent = document.getElementById(targetId);

        // Hide all content
        contents.forEach((content) => {
            content.style.display = 'none';
        });

        //Show the corresponding content
        targetContent.style.display = 'block';
    });
});

// for butonswitch
offBtns.forEach((offbutton) => {
    offbutton.addEventListener('click', () =>{
        // setting timeout for thr off button to disappear
        offbutton.style.opacity = '1';
       setTimeout(() => {
        offbutton.style.opacity = '0';
       },500);
        const onbtnId = offbutton.getAttribute('data-target');
        const targetOnbtnId = document.getElementById(onbtnId);

        onBtns.forEach((switchOnbtn) => {
            switchOnbtn.style.visibility = 'hidden';
        });
        targetOnbtnId.style.visibility = 'visible';
    });
});


// Function: for open/closing option to input unavailable services that is not our suggeste list
function moresugest() {
    const sugestBtn = document.getElementById('showSugest');
    const servicSugestion = document.getElementById('serviceSugestshow');
    if (servicSugestion.style.display === 'none') {
        servicSugestion.style.display = 'block';
        sugestBtn.textContent = 'Close suggestion';
    } else {
        servicSugestion.style.display = 'none';
        sugestBtn.textContent = 'Open Suggestion';
    };
};

// Select list for web-developement here..........................................................................
const webdevservices = ['HTML/CSS/Javascript developement','Responsive Design','Single Pageb Application (SPA)','User Interface (UI) Developement',
    'Animation and Interactivity','Server-side Programming','Database Management','API Developement and Integration','Authentication and Authorization',
'Web Application Architecture','End-to-End Developement','MERN/MEAN Stack Developement','WordPress Developement','Drupal/Joomla Developement',
'Shopify/Wix Development','online store Developement','Payement Gateway Integration','Product Catalog Management','Custom Web App','Progressive Web Apps (PWAs)',
'REal-Time Application','Web Hosting Setup','Domain Management','Website Deployment','Speed Optimization','SEO Optimization','Accesibility Compliance',
'Bug Fixing','Update and Upgrade','Monitoring'];


const webdevServiceselectlist = document.getElementById('webdevServiceselectlist');
// to populate the selected list
webdevservices.forEach((webdevsrvices) => {
    const devOption = document.createElement('option');
    devOption.classList.add('option-items');
    devOption.value = webdevsrvices;
    devOption.textContent = webdevsrvices;
    //Append option to the select list
    webdevServiceselectlist.appendChild(devOption);

});

// Selected List for MobileApp developement here..........................................................
const Mobileappservices = ['mobile book','mobile hair','mobile cloth'];

const mobileAppServiceselectlist = document.getElementById('mobileAppServiceselectlist');
// To populate the select list
Mobileappservices.forEach((mobileappdevservices) => {
    const mobileappOption = document.createElement('option');
    mobileappOption.classList.add('option-itemsmobile');
    mobileappOption.value = mobileappdevservices;
    mobileappOption.textContent = mobileappdevservices;
    // append option to the select list
    mobileAppServiceselectlist.appendChild(mobileappOption);
});

// Selected List for embedded system services here here..........................................................
const embeddedservices = ['robot book','robot hair','robot cloth'];

const embeddedandardiunoServiceselectlist = document.getElementById('embeddedandardiunoServiceselectlist');
// To populate the select list
embeddedservices.forEach((embeddedservices) => {
    const embeddedOption = document.createElement('option');
    embeddedOption.classList.add('option-itemembedded');
    embeddedOption.value = embeddedservices;
    embeddedOption.textContent = embeddedservices;
    // append option to the select list
    embeddedandardiunoServiceselectlist.appendChild(embeddedOption);

});

// Selected List for Blender-Animation here..........................................................
const blenderaniservices = ['ani book','ani hair','ani cloth'];

const blenderAnimationServiceselectlist = document.getElementById('blenderAnimationServiceselectlist');
blenderaniservices.forEach((blenderaniservices) => {
    const blenderaniOption = document.createElement('option');
    blenderaniOption.classList.add('option-itemblender');
    blenderaniOption.value = blenderaniservices;
    blenderaniOption.textContent = blenderaniservices;
    blenderAnimationServiceselectlist.appendChild(blenderaniOption);
    
});

// Selected List for Blender-Animation here..........................................................
const graphicservices = ['graphic book','graphic hair','graphic cloth'];
const graphicdesignServiceselectlist = document.getElementById('graphicdesignServiceselectlist');
graphicservices.forEach((graphicservice) => {
    const graphicOption = document.createElement('option');
    graphicOption.classList.add('option-itemgraphic');
    graphicOption.value = graphicservice;
    graphicOption.textContent = graphicservice;
    graphicdesignServiceselectlist.appendChild(graphicOption);

});

// Selected List for Blender-Animation here..........................................................
const electservices = ['elec book','elec hair','elec cloth'];
const electricandelectroncServiceselectlist = document.getElementById('electricandelectroncServiceselectlist');
electservices.forEach((electservice) => {
const electOption = document.createElement('option');
electOption.classList.add('option-itemlectrical');
electOption.value = electservice;
electOption.textContent = electservice;
electricandelectroncServiceselectlist.appendChild(electOption);
});

// function: to open confirm modal for the service form registration
function openserviceConfirm() {
    // event.preventDefault();
    alert('keep checking your email for our feedback, submit now!');

    const organisationName = document.getElementById('organisationName').value.toUpperCase();
    const positionName = document.getElementById('personalName').value.toUpperCase();
    const gmailEntered = document.getElementById('serviceGmail').value.toUpperCase();

    if (!organisationName || !positionName || !gmailEntered) {
        alert('Please fill in the organisation name, position, Gmail');
        return;
    }
    // all the categories Value are collected here
    const webdevcatListentered = document.getElementById('webdevServiceselectlist').value;
    const mobileappcatListentered = document.getElementById('mobileAppServiceselectlist').value;
    const embeddedcatListentered = document.getElementById('embeddedandardiunoServiceselectlist').value;
    const blenderanimationcatListentered = document.getElementById('blenderAnimationServiceselectlist').value;
    const graphicdesigncatListentered = document.getElementById('graphicdesignServiceselectlist').value;
    const elecmaintenancecatListentered = document.getElementById('electricandelectroncServiceselectlist').value;
    const alternativeServicecategory = document.getElementById('alternativeServicecategory').value;
    const alternativeServiceDescriptions = document.getElementById('alternativeServiceDescriptions').value;
    
    // content value printed on the confirm page of the service form registration
    document.getElementById('serviceRegconfirorganisation').textContent = organisationName;
    document.getElementById('serviceRegconfirposition').textContent = positionName;
    document.getElementById('serviceReconfirgmail').textContent = gmailEntered;

    // Categories prints
    document.getElementById('serviceReconfirservicefixcategoryone').textContent = webdevcatListentered;
    document.getElementById('serviceReconfirservicefixcategorytwo').textContent = mobileappcatListentered;
    document.getElementById('serviceReconfirservicefixcategorythree').textContent = embeddedcatListentered;
    document.getElementById('serviceReconfirservicefixcategoryfour').textContent = blenderanimationcatListentered;
    document.getElementById('serviceReconfirservicefixcategoryfive').textContent = graphicdesigncatListentered;
    document.getElementById('serviceReconfirservicefixcategorsix').textContent = elecmaintenancecatListentered;
    document.getElementById('serviceReconfirsugestcategory').textContent = alternativeServicecategory;
    document.getElementById('serviceReconfirservicedescription').textContent = alternativeServiceDescriptions;
    document.getElementById('serviceReconfirmDate').textContent = `${day}/${month}/${year} ${hour12}:${minutes}:${seconds}:${meridian}`

   
};
 //date properties
const Time = new Date();
const year = Time.getFullYear();
const month = Time.getMonth() + 1;
const day = Time.getDate();
const weekday = Time.getDay();//future uses
const hour24 = Time.getHours();
const minutes = Time.getMinutes();
const seconds = Time.getSeconds();

const meridian = hour24 >= 12? "PM":"AM";
const hour12 = meridian % 12 || 12;
