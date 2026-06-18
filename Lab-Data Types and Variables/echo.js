function echo(item){

    let type = typeof item;

    if(type === "number" || type === "string"){
        console.log(type);
        console.log(item);

    }else{
        console.log(type);
        console.log("Parameter is not suitable for printing");
    }

}
echo('Hello, JavaScript!');