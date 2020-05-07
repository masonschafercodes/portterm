var t1 = new Terminal();
t1.setBackgroundColor('black');
t1.setTextColor('green');

t1.setHeight("550px");

document.getElementById("terminal").appendChild(t1.html);

t1.print("Welcome to Mason Schafer's Terminal | type help to get a list of commands.")

t1.input("", function(input){
    if (input == 'help'){
        t1.print("Commands: about, contact, skills");
        t1.sleep(2000, function(){
            location.reload();
        })  
    }
    else if (input == 'about'){
        t1.print("My name is Mason Schafer | I am from Indianapolis, IN | I LOVE Web Dev");
        t1.sleep(2000, function(){
            location.reload();
        })
    }
    else if (input == 'contact'){
        t1.print("(317)853-0416 | mason.schafer1@gmail.com | GitHub: /masonschafercodes");
        t1.sleep(2000, function(){
            location.reload();
        })
    }
    else if (input == 'skills'){
        t1.print("javascript | html | css | python | react");
        t1.sleep(2000, function(){
            location.reload();
        })
    }
    else {
        t1.setTextColor('red');
        t1.print("Invalid Command | Type help to get a list of commands.")
        t1.sleep(2000, function(){
            location.reload();
        })
    }
});