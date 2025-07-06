import { Route } from "@angular/router";

export const canMatchFun = (route:Route) => {
    console.log('canMatchFun called', route);
    let isAdmin = 'typed-forms'; // Simulating an admin check, replace with actual logic
     return route.path === isAdmin 
       
}