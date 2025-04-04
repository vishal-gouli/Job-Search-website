

let notifyArray = [];
const notification =(id)=>{

    if(!id){
          notifyArray.push("User is been deleted")
    }else{
        notifyArray.push("New user is Been added");
    }



}

export { notification, notifyArray };