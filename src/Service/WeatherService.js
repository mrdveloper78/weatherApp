import { GetCity, GetCondition, GetDayCondition, GetHumidity, GetIcon, GetTemp, GetWind } from "../Adapter/Api/Api";



class WeatherService {

    async City(city){
        return await GetCity(city);
    }

    async Temp(city){
        return await GetTemp(city);
    }

    async condition(city){
        return await GetCondition(city);
    }

    async dayCondition(city){
        return await GetDayCondition(city);
    }

    async humidity(city){
        return await GetHumidity(city);
    }

    async wind(city){
        return await GetWind(city);
    }

    async icon(city){
        return await GetIcon(city);
    }

}




export default WeatherService;