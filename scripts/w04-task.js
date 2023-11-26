/* Profile Object */
let myProfile = {
    name: "Semih", 
    photo: "images/semih.jpg", 
    favoriteFoods: [
      'Burger',
      'Pizza',
      'Pudding',
        'Ice Cream'
    ],
    hobbies: [
      'Gym',
      'Video Games',
      'Football'
    ],
    placesLived: []
  };
  
  /* Populate Profile Object with placesLived objects */
  myProfile.placesLived.push(
    {
        place: 'Istanbul, Turkey',
        length: '20 years'
        },
        {
        place: 'Izmir, Turkey',
        length: '4 years'
        },
        {
        place: 'Athens, Greece',
        length: '2 years'
        },
        {
        place: 'Bucharest, Romania',
        length: '4 years'
        },
        
  );
  
  /* DOM Manipulation - Output */
  
  /* Name */
  document.querySelector('#name').textContent = myProfile.name;
  
  /* Photo with attributes */
  document.getElementById('photo').setAttribute('src', myProfile.photo);
  document.getElementById('photo').setAttribute('alt', `Photo of ${myProfile.name}`);
  
  /* Favorite Foods List*/
  myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
  /* Hobbies List */
  myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });
  
  /* Places Lived DataList */
  myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  