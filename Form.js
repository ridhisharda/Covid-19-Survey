class Form{
    constructor(){
        this.input= createInput("ENTER YOUR NAME");
        this.email= createInput("ENTER YOUR EMAIL");
        this.age= createInput("ENTER YOUR AGE");
        this.contact= createInput("ENTER YOUR CONTACT NUMBER");
        this.city= createInput("ENTER YOUR CITY");
        this.pincode= createInput("ENTER PINCODE OF YOUR PLACE");
        this.state= createInput("ENTER YOUR STATE");
        this.country= createInput("ENTER YOUR COUNTRY");
        this.button= createButton("SUBMIT");
        this.greeting= createElement('h2');
        this.text= createElement('h1',"Survey on Impact of lockdown on people");
        this.question1= createElement('h3', "Q1. Do you wake up at same time?");
        this.radio1= createRadio('h3');
        this.radio1.option('YES');
        this.radio1.option('NO');
        this.question2= createElement('h4', "Q2. Do you study for same hours as you did in school?");
        this.radio2= createRadio('h3');
        this.radio2.option('YES');
        this.radio2.option('NO');
        this.radio2.option('NOT FOR ME');
        this.question3= createElement('h5',"Q3. Do you have the same diet?");
        this.radio3= createRadio('h3');
        this.radio3.option('YES');
        this.radio3.option('NO');
        this.question4= createElement('h6', "Q4. Do you miss junk food?");
        this.radio4= createRadio('h3');
        this.radio4.option('YES');
        this.radio4.option('NO');
        this.question5= createElement('h7', "Q5. Do you eat less junk food now?");
        this.radio5= createRadio('h3');
        this.radio5.option('YES');
        this.radio5.option('NO');
        this.question6= createElement('h8', "Q6. Do you play indoor games?");
        this.radio6= createRadio('h3');
        this.radio6.option('YES');
        this.radio6.option('NO');
        this.question7= createElement('h9', "Q7. Do you exercise?");
        this.radio7= createRadio('h3');
        this.radio7.option('YES');
        this.radio7.option('NO');
        this.question8= createElement('h10', "Q8. Are you learning something new during self- quarantine?");
        this.radio8= createRadio('h3');
        this.radio8.option('YES');
        this.radio8.option('NO');
        this.question9= createElement('h11', "Q9. Do you take part in house keeping activities?");
        this.radio9= createRadio('h3');
        this.radio9.option('YES');
        this.radio9.option('NO');
        this.question10= createElement('h12',"Q10. Any change in your body weight?")
        this.radio10= createRadio('h3');
        this.radio10.option('LOSS');
        this.radio10.option('GAIN');
        this.question11= createElement('h13', "Q11. How do you feel?");
        this.radio11= createRadio('h3');
        this.radio11.option('ENERGETIC');
        this.radio11.option('DULL');

    }
    display() {
        this.input.position(270, 125)
        this.email.position(270, 145)
        this.age.position(270,165)
        this.contact.position(270,185)
        this.city.position(270,205)
        this.pincode.position(270,225)
        this.state.position(270,245)
        this.country.position(270,265)
        this.button.position(250,1000)
        this.greeting.position(105,1380)
        this.text.position(200, 5)
        this.question1.position(150, 330)
        this.radio1.position(250, 385)
        this.question2.position(150, 400)
        this.radio2.position(250, 440)
        this.question3.position(150, 460)
        this.radio3.position(250, 500)
        this.question4.position(150,515)
        this.radio4.position(250,560)
        this.question5.position(150,600)
        this.radio5.position(250,630)
        this.question6.position(150,660)
        this.radio6.position(250,685)
        this.question7.position(150,710)
        this.radio7.position(250,740)
        this.question8.position(150,760)
        this.radio8.position(250,790)
        this.question9.position(150,820)
        this.radio9.position(250,840)
        this.question10.position(150,860)
        this.radio10.position(250,890)
        this.question11.position(150,920)
        this.radio11.position(250,950)

        this.button.mousePressed(() => {
            User.input = this.input.value();
            User.email = this.email.value();
            User.age= this.age.value();
            User.contact= this.contact.value();
            User.city= this.city.value();
            User.pincode= this.pincode.value();
            User.state= this.state.value();
            User.country= this.country.value();     
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
        });
}
}