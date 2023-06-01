console.log("Start 1");



setTimeout(()=>{
    console.log("setTimeout0");
},0)

console.log("Start 2");



window.setTimeout(function(){
    console.log("end 4 sec");
}, 4000)

// ans: Start 1 -> Start 2 -> setTimeout0 -> end 4 sec;

// My Notes. I notice that setTimeout(func(){}, 0) will work after all the other syncronous functions and operations.