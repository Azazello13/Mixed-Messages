

/*
1.Sources for generation: greetings, name, question-threat
2.




*/


let random_el=  (array)=> array[Math.floor(Math.random() * array.length)]


const MessageGenerator ={


        greetings:["Hello,","Hey,","Hi,","Good morning,","Good evening,","Privet,","Guten Morgen,","Hallo,"],
        namings:["My friend.","Dude!", "Admiral Yamamoto!","My Precious!", "My Boss!"],
        phrases:["How are you doing?", "I was looking for you", "What's up", "I need your help"],
        phrase() {
            return random_el(this.greetings) + " "+ random_el(this.namings) + " "+ random_el(this.phrases);
        }


}



console.log(MessageGenerator.phrase());