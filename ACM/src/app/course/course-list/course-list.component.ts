import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
ImageVisible = false;
  
  cousrses =  [
    {
       "courseCode" : "ZIDOX-00",
       "courseId" : 0,
       "courseName" : "Angular 9",
       "description" : "Irure labore magna nostrud dolor aliqua exercitation non est amet tempor anim irure sit amet. Occaecat deserunt ex officia elit quis commodo commodo excepteur laborum sint. Elit ullamco consectetur ullamco laborum ut et. Culpa sunt ex anim ad.\r\n",
       "imageUrl" : "https://angular.io/assets/images/logos/angular/angular.png",
       "nextBatchDate" : "08-01-2019",
       "price" : 4679.76,
       "starRating" : 3.6,
       "trainer" : "Ellis Hester"
     },
     {
       "courseCode" : "METROZ-11",
       "courseId" : 1,
       "courseName" : "React",
       "description" : "Quis slaboris in eu cillum ex minim. Veniam cupidatat pariatur pariatur officia in aliquip velit aliqua ullamco quis mollit. Dolore sint esse id duis ut laboris culpa pariatur consectetur aute amet eu in. Nostrud laboris commodo tempor Lorem sunt anim pariatur voluptate fugiat Lorem. Proident esse consequat dolor voluptate id ipsum exercitation mollit incididunt.\r\n",
       "imageUrl" : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png",
       "nextBatchDate" : "08-01-2019",
       "price" : 6595.71,
       "starRating" : 3.9,
       "trainer" : "Lupe Estrada"
     },
     {
       "courseCode" : "NEWCUBE-22",
       "courseId" : 2,
       "courseName" : "JavaScript",
       "description" : "Quis fugiat eiusmod excepteur dolore magna amet velit. Tempor mollit Lorem duis incididunt ex enim proident excepteur quis culpa nulla cillum dolore elit. Velit aliqua adipisicing ut consequat esse adipisicing est consequat reprehenderit do. Nostrud ex eu aliquip eiusmod ea qui elit eu elit aliqua ex eiusmod commodo et. Lorem consectetur quis consequat quis labore.\r\n",
       "imageUrl" : "https://via.placeholder.com/150",
       "nextBatchDate" : "03-01-2019",
       "price" : 1398.45,
       "starRating" : 4.5,
       "trainer" : "Farmer Maynard"
     },
     {
       "courseCode" : "ENERSOL-33",
       "courseId" : 3,
       "courseName" : "PolymerJS",
       "description" : "Id aliquip quis officia fugiat reprehenderit mollit nulla sint sunt. Aliquip amet in sunt excepteur amet ad. Irure exercitation incididunt magna nostrud commodo aliquip ullamco ullamco non reprehenderit. Magna fugiat sunt anim cupidatat excepteur elit sit qui laborum fugiat aliquip deserunt minim.\r\n",
       "imageUrl" : "https://via.placeholder.com/150",
       "nextBatchDate" : "05-01-2019",
       "price" : 9656,
       "starRating" : 1,
       "trainer" : "Melton Vasquez"
     },
     {
       "courseCode" : "BIOLIVE-44",
       "courseId" : 4,
       "courseName" : "Vue",
       "description" : "Cupidatat proident ullamco do exercitation nisi officia exercitation consequat reprehenderit culpa adipisicing incididunt. Dolore sunt duis non velit do Lorem ex magna consequat anim id deserunt. Ipsum qui do eiusmod laborum. Aute culpa irure exercitation ex dolore velit mollit deserunt irure excepteur ut velit ut aute. Enim quis labore ut pariatur tempor pariatur laboris veniam.\r\n",
       "imageUrl" : "https://via.placeholder.com/150",
       "nextBatchDate" : "07-01-2019",
       "price" : 2496.31,
       "starRating" : 2.4,
       "trainer" : "Bird Clements"
     },
     {
       "courseCode" : "EWAVES-55",
       "courseId" : 5,
       "courseName" : "React-Native",
       "description" : "Reprehenderit mollit duis in anim adipisicing minim ut officia excepteur dolor pariatur. Ad eu magna cillum et aliquip et cillum commodo. Aliqua velit Lorem id sunt ea cupidatat fugiat mollit anim nulla ullamco reprehenderit dolore. Tempor quis officia irure aliquip voluptate ex dolore nostrud cillum. Sit laboris proident consectetur occaecat cupidatat ex quis eu deserunt fugiat sint elit amet. Minim nulla id veniam id ex minim dolor officia sit proident.\r\n",
       "imageUrl" : "https://via.placeholder.com/150",
       "nextBatchDate" : "07-01-2019",
       "price" : 2342.58,
       "starRating" : 3.6,
       "trainer" : "Hallie Frank"
     },
     {
       "courseCode" : "GREEKER-66",
       "courseId" : 6,
       "courseName" : "Ionic",
       "description" : "Do est ut proident duis. Excepteur proident mollit cupidatat fugiat commodo. Sint amet et est amet officia est. In proident labore duis duis pariatur culpa ipsum velit ea et et enim minim. Proident tempor in sunt reprehenderit excepteur excepteur mollit. Excepteur ex deserunt reprehenderit est officia ex aute anim culpa. Aliquip magna consequat quis aute consectetur.\r\n",
       "imageUrl" : "https://via.placeholder.com/150",
       "nextBatchDate" : "10-01-2019",
       "price" : 8760.94,
       "starRating" : 2.9,
       "trainer" : "Mcconnell Flowers"
     },
     {
       "courseCode" : "PHUEL-77",
       "courseId" : 7,
       "courseName" : "native script",
       "description" : "Tempor dolore non reprehenderit duis ex irure. Ad sint elit exercitation occaecat nostrud ex esse Lorem laborum nisi ad ipsum ullamco. Fugiat duis laborum mollit duis eiusmod adipisicing occaecat elit laborum nulla exercitation eiusmod fugiat. Enim aliqua culpa quis dolor. Consectetur veniam sunt mollit commodo eiusmod tempor incididunt. Ad ex duis officia irure fugiat cupidatat aute minim ullamco nostrud. Est anim mollit irure in est occaecat nulla labore deserunt.\r\n",
       "imageUrl" : "https://via.placeholder.com/150",
       "nextBatchDate" : "06-01-2019",
       "price" : 5901.66,
       "starRating" : 4.4,
       "trainer" : "Frederick Beasley"
     },
     {
       "courseCode" : "PANZENT-88",
       "courseId" : 8,
       "courseName" : "jQuery V6",
       "description" : "Magna nostrud Lorem consectetur ullamco esse nisi laborum incididunt reprehenderit velit. Tempor excepteur in culpa pariatur ex officia commodo amet ut aute sunt elit occaecat eiusmod. Consequat Lorem labore cupidatat excepteur velit anim minim sint amet. Ullamco elit ea cillum elit velit sint enim laborum.\r\n",
       "imageUrl" : "https://via.placeholder.com/150",
       "nextBatchDate" : "04-01-2019",
       "price" : 2361.06,
       "starRating" : 4.9,
       "trainer" : "Porter Lyons"
     }
   ]

  constructor() { }

  ngOnInit() {
  }

  ShowImage()
  {
    this.ImageVisible = !this.ImageVisible;
  }
}
