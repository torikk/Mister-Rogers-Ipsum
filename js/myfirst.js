function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}

+const lines = [
    "Won't you be my neighbor?",
    "Very frankly, I am opposed to people being programmed by others. My whole approach in broadcasting has always been 'You are an important person just the way you are. You can make healthy decisions.' Maybe I'm going on too long, but I just feel that anything that allows a person to be more active in the control of his or her life, in a healthy way, is important.",
    "This is what I give. I give an expression of care every day to each child, to help him realize that he is unique. I end the program by saying, 'You've made this day a special day, by just your being you. There's no person in the whole world like you; and I like you just the way you are.' And I feel that if we in public television can only make it clear that feelings are mentionable and manageable, we will have done a great service for mental health.",
    "You know, I think everybody longs to be loved, and longs to know that he or she is lovable. And, consequently, the greatest thing that we can do is to help somebody know that they're loved and capable of loving.",
    "Our world hangs like a magnificent jewel in the vastness of space. Every one of us is a part of that jewel. A facet of that jewel. And in the perspective of infinity, our differences are infinitesimal.",
    "Well, what is essential about you? And who are those who have helped you become the person that you are? Anyone who has ever graduated from a college, anyone who has ever been able to sustain a good work, has had at least one person and often many who have believed in him or her. We just don't get to be competent human beings without a lot of different investments from others.",
    "Little by little we human beings are confronted with situations that give us more and more clues that we aren't perfect.",
    "It's our insides that make us who we are, that allow us to dream and wonder and feel for others. That's what's essential. That's what will always make the biggest difference in our world.",
    "You always make each day a special day. By just your being you. There's only one person exactly like you in the whole world. And that's you yourself, and I like you.",
    "You make each day a special day. You know how, by just your being you. There's only one person in this whole world like you. And people can like you exactly as you are.",
    "[singing] It's such a good feeling / To know you're alive / It's such a happy feeling / You're growing inside/ And when you wake up, ready to say / I think I'll make a snappy new day,
    "It's a beautiful day in this neighborhood. A beautiful day for a neighbor.",
    "Hi, television neighbor. I'm glad we're together again.",
    "I was just thinking. You know, if you had all the toys in the world and you didn't have any imagination about how you would play with them, those toys would just sit there doing nothing. And that would be no fun. Thinking up good things to do with what you have gives everybody a good feeling.",
    "Hi. I'm so glad to see you. I thought about you all weekend. Wondering what you were doing. How you were feeling? How was your weekend? I like it when you tell me things.",
    "Hi, neighbor. How're you doing?",
    "I was just thinking, you know work changes things. And children can change things by doing a good job. Like changing the way a room looks by picking up your toys when your play is over. Or changing the way your plate of food looks by eating your food. Good work can make good changes and can give a good feeling.",
    "You know, growing means when you're a baby and you're angry, all you can do is scream and kick. That's all. But when you get a little older, you can say that you're angry. You can stomp around and make up a dance, or pound some clay and make things out of clay, and sing a song or write a poem. That's what it means to grow. I'm proud of the way you're growing and changing.",
    "As human beings, our job in life is to help people realize how rare and valuable each one of us really is, that each of us has something that no one else has—or ever will have—something inside that is unique to all time. It's our job to encourage each other to discover that uniqueness and to provide ways of developing its expression.",
    "Justice is taking care of those who aren't able to take care of themselves.",
    "What do you think it is that drives people to want far more than they could ever use or need? I frankly think it's insecurity. How do we let the world know that the trappings of this life are not the things that are ultimately important for being accepted? ",
    "Fame is a four letter word and like tape, or zoom, or face, or pain, or life, or love, what ultimately matters is what we do with it.",
    "Both Joanne and I can recall many times when we wish we'd said or done something different.  But we didn't, and we've learned not to feel too guilty about that.  What gives me my good feelings is that we always cared and always tried to do our best.",
    "Children are to be respected and I respect them deeply. They've taught me an awful lot.",
    "Would you be mine? Could you be mine?",
   
];

const randomQuote = () => lines[Math.floor(Math.random() * lines.length)]


document.getElementById("lines").innerHTML = "My First JavaScript";
