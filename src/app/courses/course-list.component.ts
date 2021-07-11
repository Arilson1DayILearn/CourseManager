import { listLazyRoutes } from "@angular/compiler/src/aot/lazy_routes";
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'

})
export class CourseListComponent implements OnInit{
    
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular',
                imageUrl: '/assets/images/angular.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'November, 2 , 2019'
            },
            {
                id: 2,
                name: 'React',
                imageUrl: '/assets/images/react.png',
                price: 99.99,
                code: 'LKL-8796',
                duration: 80,
                rating: 3.4,
                releaseDate: 'December, 4 , 2019'
            }
        ];
    }
    
}