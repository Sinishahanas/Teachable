async function call(){
    var promise=new Promise(function(resolve,reject){

        setTimeout(function(){
            resolve("first")
            
        },3000)
    })
    var result= await promise;
    console.log(result);
    // console.log(promise);
    console.log("b");
}
    call();
    console.log("a");



var weather=true;
    var promise= new Promise(function(resolve,reject){
        if(weather){
           var obj={
               place:"calicut",
               name:"paragon",
               spot:5
           }
           resolve(obj);
        }else{
           reject("weather is not good");
       }

    })
    function travel(obj){
       return new Promise(function(resolve,reject){
            resolve(`i had a uber to ${obj.place} fine`);
            
        })
    }

    async  function display(){
        try{
            var text= await promise;
            console.log(`the location is ${text.place}`);
        }
        catch{
            
        }

    }
    display();