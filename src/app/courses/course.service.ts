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
        id: 5,
        name: 'Thymeleaf',
        imageUrl: '/assets/images/thymeleaf.png',
        price: 41.99,
        code: 'LKS-8794',
        duration: 30,
        rating: 2.2,
        releaseDate: 'November, 14 , 2021',
        description: "Curso baseado em HTML."
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
        id: 4,
        name: 'JSF',
        imageUrl: '/assets/images/jsf.png',
        price: 45.99,
        code: 'LKS-8594',
        duration: 37,
        rating: 3.8,
        releaseDate: 'November, 6 , 2019',
        description: "Curso de JSF."
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
    },
    



];


    
