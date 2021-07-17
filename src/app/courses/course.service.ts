import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
    providedIn: "root"
})
export class CourseService {

    retriveAll(): Course[] {
        return COURSES;
    }
}


var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular',
        imageUrl: '/assets/images/angular.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'November, 2 , 2019',
        description: "Curso de um framework baseado em HTML."
    },
    {
        id: 2,
        name: 'React',
        imageUrl: '/assets/images/react.png',
        price: 99.99,
        code: 'LKL-8796',
        duration: 80,
        rating: 3.4,
        releaseDate: 'December, 4 , 2019',
        description: "Curso de um framework baseado em javaScript."
    },
    {
        id: 3,
        name: 'Vue',
        imageUrl: '/assets/images/vue.png',
        price: 99.99,
        code: 'LKL-8596',
        duration: 40,
        rating: 3.9,
        releaseDate: 'December, 6 , 2019',
        description: "Curso de outro framework baseado em javaScript."
    }

];


    
