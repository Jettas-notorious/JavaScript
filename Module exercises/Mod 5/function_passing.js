function greet(name)
{
    console.log("Hello "+name+"!");
};

function welcomeUser(func,userName)
{
    return func(userName);
};

welcomeUser(greet,"Jetro");