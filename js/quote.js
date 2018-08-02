
var slider = document.getElementById("myRange");
var output = document.getElementById("slideramount");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


var lines = [ 
    "You make each day a special day. You know how, by just your being you. There's only one person in this whole world like you. And people can like you exactly as you are.",
    "I'm taking care of you/ Taking good care of you/ For once I was very little too/ Now, I take care of you.",
    "You are my friend / You are special / You are my friend / You're special to me / You are the only one like you / Like you, my friend / I like you.",
    "Children are to be respected and I respect them deeply. They've taught me an awful lot.",
    "Hi, neighbor. How're you doing?",
    "It's not the honors and the prizes and the fancy outsides of life which ultimately nourish our souls. It's the knowing that we can be trusted, that we never have to fear the truth, that the bedrock of our very being is good stuff.",
    "Anything worth while certainly takes a while.",
    "It's our insides that make us who we are, that allow us to dream and wonder and feel for others. That's what's essential. That's what will always make the biggest difference in our world.",
    "Hi, television neighbor. Welcome to this neighborhood.",
    "I think I'm going to like today / I think I'll call it mine / I'll wrap it in ribbons, and make it mine / I think I'm going to like today / It's very plain to see.",
    "Anything is possible in make-believe.",
    "So you can make up all sorts of things and sing them. And you can call that operas.",
    "Peekaboo!",
    "You learn something old everyday.",
    "I wonder what Mr. Rogers would say about this.",
    "Hi. I'm so glad to see you. I thought about you all weekend. Wondering what you were doing. How you were feeling? How was your weekend? I like it when you tell me things.",
    "Justice is taking care of those who aren't able to take care of themselves.",
    "Oh, me. Oh, my. Boomerang. Toomerang. Soomerang.",
    "A lot of people have asked me how they can get a trolley like mine to play with. And I usually say, Why don't you just make one?",
    "What do you think it is that drives people to want far more than they could ever use or need? I frankly think it's insecurity. How do we let the world know that the trappings of this life are not the things that are ultimately important for being accepted?",
    "Do you find that eating is fun for you? Especially when you're hungry?",
    "It's you I like / Not the things you wear / Not the way you do your hair / But it's you I like/ The way you are right now/ The way down deep inside you.",
    "Very frankly, I am opposed to people being programmed by others. My whole approach in broadcasting has always been 'You are an important person just the way you are. You can make healthy decisions.' Maybe I'm going on too long, but I just feel that anything that allows a person to be more active in the control of his or her life, in a healthy way, is important.",
    "Our world hangs like a magnificent jewel in the vastness of space. Every one of us is a part of that jewel. A facet of that jewel. And in the perspective of infinity, our differences are infinitesimal.",
    "Little by little we human beings are confronted with situations that give us more and more clues that we aren't perfect.",
    "It's such a good feeling / To know you're alive / It's such a happy feeling / You're growing inside / And when you wake up ready to say / I think I'll grow 12 inches today / It's such a good feeling / A very good feeling / The feeling you know that you're alive.",
    "When I say it's you I like, I'm talking about that part of you that knows that life is far more than anything you can ever see or hear or touch. That deep part of you that allows you to stand for those things without which humankind cannot survive. Love that conquers hate, peace that rises triumphant over war, and justice that proves more powerful than greed.",
    " I was just thinking. You know, if you had all the toys in the world and you didn't have any imagination about how you would play with them, those toys would just sit there doing nothing. And that would be no fun. Thinking up good things to do with what you have gives everybody a good feeling.",
    "Everything grows together / Because you're all once piece / Your legs grow as your fingers grow as your hands grow as your arms grow as your ears grow as your nose grows as the rest of your grows / Because you're all once piece.",
    "There's only one person in the whole world like you, and I like you so much. Meow meow meow so much. Bye bye."
    
    
    
];

$(document).ready(function(){
    $("toggle").click(function(){
        $("ptag").toggle();
    });
});


function randomQuote() {

    var text = ""
    for (var i = 0; i < 4; i++) {
        
        var random_quote = lines[Math.floor(Math.random() * lines.length)]
        text += random_quote + " ";
    }
 
    return text;


}

function randomParagraphs() {
    var x = document.getElementsByClassName("toggle");
    var paragraph = ""
    
       for (var i = 0; i < slider.value; i++) {
          paragraph += "&lt;p&gt;" + randomQuote() + "&lt;/p&gt;"+ "<br><br>";
          
       
      }
   
    
    document.getElementById("quotes").innerHTML = paragraph;
    
}


function randomParagraphs2() {
    var x = document.getElementsByClassName("toggle");
    var paragraph = ""
    
       for (var i = 0; i < slider.value; i++) {
           paragraph += randomQuote() + "<br><br>";
          
       
      }
   
    
    document.getElementById("quotes").innerHTML = paragraph;
    
}






