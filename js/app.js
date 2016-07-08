
var superheroList = [
  {
    name: "Spiderman",
    number: "800-WEB-HEAD",
    group: "Marvel",
    img: "img/spiderman.png"
  },
  {
    name: "The Incredible Hulk",
    number: "800-HLK-SMSH",
    group: "Marvel",
    img: "img/hulk.jpg"
  },
  {
    name: "Wonder Woman",
    number: "800-GRL-WNDR",
    group: "DC",
    img: "img/wonder_woman.jpg"
  },
  {
    name: "Storm",
    number: "800-DRK-CLDS",
    group: "Marvel",
    img: "img/storm.gif"
  },
  {
    name: "Iron Man",
    number: "800-STA-RKME",
    group: "Marvel",
    img: "img/ironman.png"
  },
  {
    name: "Black Panther",
    number: "800-TCH-ALLA",
    group: "Marvel",
    img: "img/black_panther.gif"
  },
  {
    name: "Silver Surfer",
    number: "800-S-SURFER",
    group: "Marvel",
    img: "http://static.comicvine.com/uploads/original/11124/111241744/4817324-2114033572-silve.png"
  },
  {
    name: "Batman",
    number: "800-DRK-NITE",
    group: "DC",
    img: "img/batman.jpg"
  },
  {
    name: "Supergirl",
    number: "800-KRY-PTON",
    group: "DC",
    img: "img/supergirl.jpg"
  }
]

var app = angular.module("superhero",[])

app.controller("contactsCtrl", function(){
  var vm = this;
  vm.list = superheroList;
  vm.showPic = function(contact){
    vm.current = contact.img;
  };
})
