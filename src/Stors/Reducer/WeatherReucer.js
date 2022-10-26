


const initialState = {
    city:"tehran",
    data:"",
    temp:"",
    condition:"",
    dayCondition:1,
    humidity:0,
    wind:0,
    icon:""
}



const weatherReducer = (state = initialState,action) => {

    switch (action.type) {

        case "setName":{
            return{...state,city:action.payload};
        }

        case "setData":{
            return{...state,data:action.payload}
        }  
            break;

        case "setTemp":{
            return{...state,temp:action.payload};
        }  
        break;
        
        case "setCondition":{
            return{...state,condition:action.payload}
        }
        break;

        case "dayCondition":{
            return{...state,dayCondition:action.payload};
        }
        break;

        case "setHumidity":{
            return{...state,humidity:action.payload};
        }
        break;

        case "setWind" :{

            return{...state,wind:action.payload};
        }
        break;

        case "setIcon" :{
            return{...state,icon:action.payload};
        }
        break;
    
        default:
            return state;
    }

}





export default weatherReducer;