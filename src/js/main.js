import $ from 'jquery';


function gettingData() {
  return $.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  data: {
    results: 12,
    inc: 'name,phone,email,location,cell,picture'
    },
  })
};



// `https://api.randomuser.me/?results=12&inc=name,gender`

//
$(".container").append(`<div id="header">Internal Company Directory</div>`)


function basketOfDeplorables (data) {
console.log(data)

var block= data.results[i];
for (var i= 0; i <12; i++) {
  $(".container").append(
`<div id=${'block'}>
<div id="images"> <img src= "${data.results[i].picture.large}"/>
  </div>
  <div id="name">${data.results[i].name.first} ${data.results[i].name.last}
    </div>
  <div id="email">${data.results[i].email}
    </div>
  <div id="address">${data.results[i].location.street}
  <p>${data.results[i].location.city}  ${data.results[i].location.state}
    ${data.results[i].location.postcode}</p>
    </div>
  <div id="phone">${data.results[i].cell}
    </div>
  <div id="ssn" >${data.results[i].phone}
    </div>
</div> `

  )
  $("div#ssn").hover(function(){$(this).addClass("hover");},
  function(){$(this).removeClass();});

};

}




gettingData().then(basketOfDeplorables);
console.log("not feelin this");





//
// ${data}`.forEach(function(x{`<div id=container><div id= ${x.results.name}> ${x.results}</div>
// <div id=container>

// <div id=container>
//   <div id="image">
//
//     </div>
//   <div id="name">
//   {$data.results.}
//     </div>
//   <div id="email">
//     </div>
//   <div id="address">
//     </div>
//   <div id="phone">
//     </div>
//   <div id="ssn">
//     </div>
// </div>

//   ;}











// var basketOfDeplorables= (
//   forEach (gettingData) {
//
//     return
//       `<div></div>)`
//
//   }
// )



//
//
// gettingData.then (function (){
//   $(`.container`).append(
//
// })
