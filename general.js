const listMenu = document.querySelector('.book_list_section');
const  addMenu= document.querySelector('.book_add_section');
const contactMenu = document.querySelector('.book_contact_section');
const menuElements = [listMenu,addMenu,contactMenu];
function setActive(index){
  menuElements.forEach((element,key) => {
    if(key==index){
      element.classList.contains('nav-link-visited')?true:element.classList.toggle('nav-link-visited');
    }
    else{
      element.classList.contains('nav-link-visited')?element.classList.remove('nav-link-visited'):true;
    }
  });
}

function displayComponent (elmnts){
  if(elmnts.isArray){
    elmnts.forEach(elmnt => {
      test = elmnt.classList;
      test.contains('hidden_item')?test.remove('hidden_item'):true;
    });
  }
  else{
    test = elmnts.classList;
    test.contains('hidden_item')?test.remove('hidden_item'):true;
  }
  
}
function HideComponent (elmntsParam){
  elmnts = Array.from(elmntsParam);
  /*console.log(elmnts.isArray);
  if(elmnts.isArray){
    elmnts.forEach(elmnt => {
      test = elmnt.classList;
      test.contains('hidden_item')?true:test.toggle('hidden_item');
    });
  }
  else{
    test = elmnts.classList;
    console.log(elmnts);
    test.contains('hidden_item')?true:test.toggle('hidden_item');
  }*/
  elmnts.forEach(elmnt => {
    test = elmnt.classList;
    test.contains('hidden_item')?true:test.toggle('hidden_item');
  });
  
  
}

function showbooklist(e) {
  e.preventDefault();
  displayComponent(document.querySelector('.booklistsection'));
  HideComponent([
    document.querySelector('.add_book_section'),
    document.querySelector('.separator'),
    document.querySelector('.contact')

  ]);
  setActive(0);

  
}
function showAddForm(e) {
  e.preventDefault();
  displayComponent(document.querySelector('.add_book_section'));
  HideComponent([
    document.querySelector('.contact'),
    document.querySelector('.booklistsection')

  ]);
  setActive(1);
}
function showContact(e) {
  e.preventDefault();
  displayComponent(document.querySelector('.contact'));
  HideComponent([
    document.querySelector('.add_book_section'),
    document.querySelector('.booklistsection')
  ]);
  setActive(2);
}

listMenu.addEventListener('click', showbooklist);
addMenu.addEventListener('click', showAddForm);
contactMenu.addEventListener('click', showContact);
function generateDateEnd(day){
  if((day>=10)&&(day<=20))
  {
    return "th"
  }
  else{
    switch(day%10){
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    default: return "th";

  }
  }
  
  
}

function generateFormatedHour(actualdate){
  hour = actualdate.getHours();
  if(hour===12){
    return hour+":"+actualdate.getMinutes()+":"+actualdate.getSeconds()+" am";
  }
  else if(hour===24){
    return "12:"+actualdate.getMinutes()+":"+actualdate.getSeconds()+" pm";
  }
  else{
    if(hour<12){
      return hour+":"+actualdate.getMinutes()+":"+actualdate.getSeconds()+" am";
    }
    else{
      return (hour%12)+":"+actualdate.getMinutes()+":"+actualdate.getSeconds()+" pm";
    }
  }
}
function displayDateTime() 
{
    let actualDate = new Date();
    let options = { year: "numeric", month: "long", day: "2-digit"};
    let date = actualDate.toLocaleDateString("us-US", options);
    let time = ("0" + actualDate.getHours()).slice(-2) + ":" + ("0" + actualDate.getMinutes()).slice(-2) + ":" + ("0" + actualDate.getSeconds()).slice(-2);
    let dateTime = date + " " + time;
    console.log();
    reformat = date.split(",");
    let dayend = generateDateEnd(actualDate.getDate())
    document.querySelector('.date').innerHTML =  reformat[0]+dayend+", "+reformat[1]+"  "+ generateFormatedHour(actualDate);
}
setInterval(displayDateTime, 1000);
