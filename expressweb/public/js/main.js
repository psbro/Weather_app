const cityname = document.getElementById('cityName');
const submitbtn = document.getElementById('submit_btn');

const city_name = document.getElementById('city_name');

const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const datahide = document.querySelector('.middle_layer')

const getinfo = async (event) => {
  event.preventDefault();
  let cityval = cityname.value;
  
 



  if (cityval === "") {

    city_name.innerText = `plz write your name before search`
    datahide.classList.add('data_hide');



  }

  else {

    try {



       let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=a1dba9087bc2089f83de5397ad8b3bcb`;
       let response = await fetch(url);
       response => response.json()
       

       let data = await response.json();
       console.log(data);
       console.log(response);
     

      const arrdata = [data];

      // console.log(arrdata[0]);

      city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`


      temp_real_val.innerText = arrdata[0].main.temp;
      temp_status.innerText = arrdata[0].weather[0].main;

      const tempmood = arrdata[0].weather[0].main;
      if(tempmood==="clear"){
        "<i class = 'fas fa-sun' ></i>"
      }


      datahide.classList.remove('data_hide');




    } catch (e) {
      

      city_name.innerText = 'plz enter the city name properly';
      datahide.classList.add('data_hide');
    }



  }


}

submitbtn.addEventListener('click', getinfo);